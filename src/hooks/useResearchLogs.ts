import { useEffect, useMemo, useRef, useState } from 'react'

import { isResearchLog, type ResearchLog } from '../data/researchLogs'
import type { WatchCategoryId, WatchItem } from '../data/watchlist'

const researchLogsApiPath = '/api/research-logs'

function isResearchLogArray(value: unknown): value is ResearchLog[] {
  return Array.isArray(value) && value.every((item) => isResearchLog(item))
}

async function readResearchLogs() {
  const response = await fetch(researchLogsApiPath)

  if (!response.ok) {
    throw new Error('Failed to load research logs.')
  }

  const parsed = (await response.json()) as unknown

  if (!isResearchLogArray(parsed)) {
    throw new Error('Research logs file has an invalid shape.')
  }

  return parsed
}

async function writeResearchLogs(logs: ResearchLog[]) {
  const response = await fetch(researchLogsApiPath, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logs),
  })

  if (!response.ok) {
    throw new Error('Failed to update research logs file.')
  }
}

export function useResearchLogs(items: WatchItem[]) {
  const [logs, setLogs] = useState<ResearchLog[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const logsRef = useRef<ResearchLog[]>([])

  useEffect(() => {
    let isCancelled = false

    async function loadLogs() {
      try {
        setIsLoading(true)
        setError(null)
        const nextLogs = await readResearchLogs()

        if (isCancelled) {
          return
        }

        logsRef.current = nextLogs
        setLogs(nextLogs)
      } catch (loadError) {
        if (isCancelled) {
          return
        }

        setError(
          loadError instanceof Error ? loadError.message : 'Failed to load research logs.',
        )
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    }

    void loadLogs()

    return () => {
      isCancelled = true
    }
  }, [])

  async function commitLogs(
    updater: (currentLogs: ResearchLog[]) => ResearchLog[],
    emptyMessage: string,
  ) {
    const currentLogs = logsRef.current
    const nextLogs = updater(currentLogs)

    if (nextLogs.length === currentLogs.length) {
      setError(emptyMessage)
      return
    }

    setError(null)
    setIsSaving(true)
    setLogs(nextLogs)
    logsRef.current = nextLogs

    try {
      await writeResearchLogs(nextLogs)
    } catch (saveError) {
      logsRef.current = currentLogs
      setLogs(currentLogs)
      setError(
        saveError instanceof Error ? saveError.message : 'Failed to update research logs.',
      )
    } finally {
      setIsSaving(false)
    }
  }

  const logsByItemId = useMemo(() => {
    return items.reduce<Record<string, ResearchLog[]>>((acc, item) => {
      acc[item.id] = logs.filter((log) => log.itemId === item.id)
      return acc
    }, {})
  }, [items, logs])

  const savedLogCount = logs.length
  const activeLogLaneCount = Object.values(logsByItemId).filter(
    (itemLogs) => itemLogs.length > 0,
  ).length

  function clearLog(logId: string) {
    void commitLogs(
      (currentLogs) => currentLogs.filter((log) => log.id !== logId),
      'That finding is already gone.',
    )
  }

  function clearCategoryLogs(categoryId: WatchCategoryId) {
    const itemIds = new Set(
      items.filter((item) => item.categoryId === categoryId).map((item) => item.id),
    )

    void commitLogs(
      (currentLogs) => currentLogs.filter((log) => !itemIds.has(log.itemId)),
      'That section has no findings left to remove.',
    )
  }

  function clearAllLogs() {
    void commitLogs(() => [], 'There are no findings left to clear.')
  }

  return {
    activeLogLaneCount,
    error,
    isLoading,
    isSaving,
    logsByItemId,
    savedLogCount,
    clearLog,
    clearAllLogs,
    clearCategoryLogs,
  }
}
