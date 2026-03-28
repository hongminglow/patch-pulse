import { useState } from 'react'

import { starterResearchLogs, type ResearchLog } from '../data/researchLogs'
import type { WatchCategoryId, WatchItem } from '../data/watchlist'

function uniqueIds(ids: string[]) {
  return [...new Set(ids)]
}

export function useResearchLogs(items: WatchItem[]) {
  const [hiddenLogIds, setHiddenLogIds] = useState<string[]>([])

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

  function clearLog(logId: string) {
    hideLogIds([logId])
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
    clearLog,
    clearAllLogs,
    clearCategoryLogs,
  }
}
