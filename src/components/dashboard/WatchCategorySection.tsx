import type { ResearchLog } from '../../data/researchLogs'
import type { WatchCategory, WatchItem } from '../../data/watchlist'
import { ClearIcon } from '../ui/ClearIcon'
import { WatchCard } from './WatchCard'

type WatchCategorySectionProps = {
  category: WatchCategory
  items: WatchItem[]
  logsByItemId: Record<string, ResearchLog[]>
  onClearCategoryLogs: (categoryId: WatchCategory['id']) => void
  onClearItemLogs: (itemId: string) => void
}

export function WatchCategorySection({
  category,
  items,
  logsByItemId,
  onClearCategoryLogs,
  onClearItemLogs,
}: WatchCategorySectionProps) {
  if (items.length === 0) {
    return null
  }

  const hasCategoryLogs = items.some((item) => (logsByItemId[item.id] ?? []).length > 0)

  return (
    <section className="section category-section">
      <div className="category-toolbar">
        <div className="section-intro section-intro--wide">
          <p className="eyebrow">{category.label}</p>
          <h2>{category.title}</h2>
          <p className="panel-copy">{category.description}</p>
        </div>

        <button
          className="button button--ghost button--icon"
          type="button"
          onClick={() => onClearCategoryLogs(category.id)}
          disabled={!hasCategoryLogs}
        >
          <ClearIcon />
          Clear findings
        </button>
      </div>

      <div className="watch-grid">
        {items.map((item) => (
          <WatchCard
            key={item.id}
            item={item}
            logs={logsByItemId[item.id] ?? []}
            onClearLogs={onClearItemLogs}
          />
        ))}
      </div>
    </section>
  )
}
