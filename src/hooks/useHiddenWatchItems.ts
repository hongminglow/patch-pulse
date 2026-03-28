import { useEffect, useState } from 'react'

import type { WatchCategoryId, WatchItem } from '../data/watchlist'

const hiddenStorageKey = 'patch-pulse.hidden-items.v1'

function readHiddenIds() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(hiddenStorageKey)

    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter((value): value is string => typeof value === 'string')
      : []
  } catch {
    return []
  }
}

function writeHiddenIds(hiddenIds: string[]) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(hiddenStorageKey, JSON.stringify(hiddenIds))
}

export function useHiddenWatchItems(items: WatchItem[]) {
  const [hiddenIds, setHiddenIds] = useState<string[]>(() => readHiddenIds())

  useEffect(() => {
    writeHiddenIds(hiddenIds)
  }, [hiddenIds])

  const visibleItems = items.filter((item) => !hiddenIds.includes(item.id))
  const hiddenCount = items.length - visibleItems.length

  function clearItem(itemId: string) {
    setHiddenIds((current) =>
      current.includes(itemId) ? current : [...current, itemId],
    )
  }

  function clearCategory(categoryId: WatchCategoryId) {
    const idsToHide = items
      .filter((item) => item.categoryId === categoryId)
      .map((item) => item.id)

    setHiddenIds((current) => Array.from(new Set([...current, ...idsToHide])))
  }

  function restoreItems() {
    setHiddenIds([])
  }

  return {
    hiddenCount,
    hiddenIds,
    visibleItems,
    clearItem,
    clearCategory,
    restoreItems,
  }
}
