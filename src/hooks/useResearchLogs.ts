import { useEffect, useState } from 'react'

import { starterResearchLogs, type ResearchLog } from '../data/researchLogs'
import type { WatchCategoryId, WatchItem } from '../data/watchlist'

const researchLogStorageKey = 'patch-pulse.findings.v2'

function readStoredLogs() {
  if (typeof window === 'undefined') {
    return starterResearchLogs
  }

  try {
    const raw = window.localStorage.getItem(researchLogStorageKey)

    if (!raw) {
      return starterResearchLogs
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter((value): value is ResearchLog => {
          return (
            typeof value === 'object' &&
            value !== null &&
            typeof value.id === 'string' &&
            typeof value.itemId === 'string' &&
            typeof value.title === 'string' &&
            typeof value.kind === 'string' &&
            typeof value.date === 'string' &&
            typeof value.summary === 'string' &&
            typeof value.sourceLabel === 'string' &&
            typeof value.sourceHref === 'string'
          )
        })
      : starterResearchLogs
  } catch {
    return starterResearchLogs
  }
}

function writeStoredLogs(logs: ResearchLog[]) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(researchLogStorageKey, JSON.stringify(logs))
}

export function useResearchLogs(items: WatchItem[]) {
  const [logs, setLogs] = useState<ResearchLog[]>(() => readStoredLogs())

  useEffect(() => {
    writeStoredLogs(logs)
  }, [logs])

  const logsByItemId = items.reduce<Record<string, ResearchLog[]>>((acc, item) => {
    acc[item.id] = logs.filter((log) => log.itemId === item.id)
    return acc
  }, {})

  const savedLogCount = logs.length
  const activeLogLaneCount = Object.values(logsByItemId).filter(
    (itemLogs) => itemLogs.length > 0,
  ).length

  function clearItemLogs(itemId: string) {
    setLogs((current) => current.filter((log) => log.itemId !== itemId))
  }

  function clearCategoryLogs(categoryId: WatchCategoryId) {
    const itemIds = new Set(
      items.filter((item) => item.categoryId === categoryId).map((item) => item.id),
    )

    setLogs((current) => current.filter((log) => !itemIds.has(log.itemId)))
  }

  function clearAllLogs() {
    setLogs([])
  }

  return {
    activeLogLaneCount,
    logsByItemId,
    savedLogCount,
    clearAllLogs,
    clearCategoryLogs,
    clearItemLogs,
  }
}
