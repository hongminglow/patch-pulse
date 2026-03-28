import type { WatchCategory, WatchItem } from '../../data/watchlist'

type WatchGroupsOverviewProps = {
  categories: WatchCategory[]
  visibleItems: WatchItem[]
}

export function WatchGroupsOverview({
  categories,
  visibleItems,
}: WatchGroupsOverviewProps) {
  return (
    <section className="section">
      <div className="section-intro section-intro--wide">
        <p className="eyebrow">Watch groups</p>
        <h2>Organized for quick scanning</h2>
        <p className="panel-copy">
          Frameworks, library families, and ecosystem radar are separated so you
          can scan the update map the same way you think about the stack.
        </p>
      </div>

      <div className="overview-grid">
        {categories.map((category) => {
          const count = visibleItems.filter(
            (item) => item.categoryId === category.id,
          ).length

          return (
            <article className="overview-card" key={category.id}>
              <div className="overview-card__top">
                <span className="overview-label">{category.label}</span>
                <strong>{count}</strong>
              </div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
