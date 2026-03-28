import { useEffect, useState } from 'react'

import { starterResearchLogs, type ResearchLog } from '../data/researchLogs'
import type { WatchCategoryId, WatchItem } from '../data/watchlist'

const legacyResearchLogStorageKey = 'patch-pulse.findings.v2'
const hiddenResearchLogStorageKey = 'patch-pulse.hidden-findings.v1'

function isValidResearchLog(log: unknown): log is ResearchLog {
  if (typeof log !== 'object' || log === null) {
    return false
  }

  const maybeLog = log as Partial<ResearchLog>
  const hasValidSummary =
    typeof maybeLog.summary === 'string' ||
    (Array.isArray(maybeLog.summary) &&
      maybeLog.summary.every((point) => typeof point === 'string'))

  return (
    typeof maybeLog.id === 'string' &&
    typeof maybeLog.itemId === 'string' &&
    typeof maybeLog.title === 'string' &&
    typeof maybeLog.kind === 'string' &&
    typeof maybeLog.date === 'string' &&
    hasValidSummary &&
    typeof maybeLog.sourceLabel === 'string' &&
    typeof maybeLog.sourceHref === 'string'
  )
}

function uniqueIds(ids: string[]) {
  return [...new Set(ids)]
}

function readStoredHiddenLogIds() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const rawHiddenIds = window.localStorage.getItem(hiddenResearchLogStorageKey)

    if (rawHiddenIds) {
      const parsedHiddenIds = JSON.parse(rawHiddenIds)
      return Array.isArray(parsedHiddenIds)
        ? uniqueIds(
            parsedHiddenIds.filter((value): value is string => typeof value === 'string'),
          )
        : []
    }

    const rawLegacyLogs = window.localStorage.getItem(legacyResearchLogStorageKey)

    if (!rawLegacyLogs) {
      return []
    }

    const parsedLegacyLogs = JSON.parse(rawLegacyLogs)

    if (!Array.isArray(parsedLegacyLogs)) {
      return []
    }

    const visibleLogIds = new Set(
      parsedLegacyLogs.filter(isValidResearchLog).map((log) => log.id),
    )

    return starterResearchLogs
      .filter((log) => !visibleLogIds.has(log.id))
      .map((log) => log.id)
  } catch {
    return []
  }
}

function writeStoredHiddenLogIds(hiddenLogIds: string[]) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(
    hiddenResearchLogStorageKey,
    JSON.stringify(uniqueIds(hiddenLogIds)),
  )
  window.localStorage.removeItem(legacyResearchLogStorageKey)
}

export function useResearchLogs(items: WatchItem[]) {
  const [hiddenLogIds, setHiddenLogIds] = useState<string[]>(() => readStoredHiddenLogIds())

  useEffect(() => {
    writeStoredHiddenLogIds(hiddenLogIds)
  }, [hiddenLogIds])

  const hiddenLogIdSet = new Set(hiddenLogIds)
  const logs = starterResearchLogs.filter((log) => !hiddenLogIdSet.has(log.id))

  const logsByItemId = items.reduce<Record<string, ResearchLog[]>>((acc, item) => {
    acc[item.id] = logs.filter((log) => log.itemId === item.id)
    return acc
  }, {})

  const savedLogCount = logs.length
  const activeLogLaneCount = Object.values(logsByItemId).filter(
    (itemLogs) => itemLogs.length > 0,
  ).length

  function hideLogIds(logIds: string[]) {
    setHiddenLogIds((current) => uniqueIds([...current, ...logIds]))
  }

  function clearItemLogs(itemId: string) {
    hideLogIds(
      starterResearchLogs
        .filter((log) => log.itemId === itemId)
        .map((log) => log.id),
    )
  }

  function clearCategoryLogs(categoryId: WatchCategoryId) {
    const itemIds = new Set(
      items.filter((item) => item.categoryId === categoryId).map((item) => item.id),
    )

    hideLogIds(
      starterResearchLogs
        .filter((log) => itemIds.has(log.itemId))
        .map((log) => log.id),
    )
  }

  function clearAllLogs() {
    setHiddenLogIds(starterResearchLogs.map((log) => log.id))
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
