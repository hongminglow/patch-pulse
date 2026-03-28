import type { ResearchLog } from '../../data/researchLogs'
import type { WatchCategory, WatchItem } from '../../data/watchlist'
import { WatchCard } from './WatchCard'

type WatchCategorySectionProps = {
  actionsDisabled: boolean
  category: WatchCategory
  items: WatchItem[]
  logsByItemId: Record<string, ResearchLog[]>
  onClearCategoryLogs: (categoryId: WatchCategory['id']) => void
  onClearLog: (logId: string) => void
}

export function WatchCategorySection({
  actionsDisabled,
  category,
  items,
  logsByItemId,
  onClearCategoryLogs,
  onClearLog,
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
          className="button button--ghost"
          type="button"
          onClick={() => onClearCategoryLogs(category.id)}
          disabled={!hasCategoryLogs || actionsDisabled}
        >
          Clear findings
        </button>
      </div>

      <div className="watch-grid">
        {items.map((item) => (
          <WatchCard
            actionsDisabled={actionsDisabled}
            key={item.id}
            item={item}
            logs={logsByItemId[item.id] ?? []}
            onClearLog={onClearLog}
          />
        ))}
      </div>
    </section>
  )
}
