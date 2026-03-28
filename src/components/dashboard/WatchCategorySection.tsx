import type { WatchCategory, WatchItem } from '../../data/watchlist'
import { ClearIcon } from '../ui/ClearIcon'
import { WatchCard } from './WatchCard'

type WatchCategorySectionProps = {
  category: WatchCategory
  items: WatchItem[]
  onClearCategory: (categoryId: WatchCategory['id']) => void
  onClearItem: (itemId: string) => void
}

export function WatchCategorySection({
  category,
  items,
  onClearCategory,
  onClearItem,
}: WatchCategorySectionProps) {
  if (items.length === 0) {
    return null
  }

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
          onClick={() => onClearCategory(category.id)}
        >
          <ClearIcon />
          Clear section
        </button>
      </div>

      <div className="watch-grid">
        {items.map((item) => (
          <WatchCard key={item.id} item={item} onClear={onClearItem} />
        ))}
      </div>
    </section>
  )
}
