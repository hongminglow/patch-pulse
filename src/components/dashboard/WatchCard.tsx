import type { WatchItem } from '../../data/watchlist'
import { ClearIcon } from '../ui/ClearIcon'

type WatchCardProps = {
  item: WatchItem
  onClear: (itemId: string) => void
}

export function WatchCard({ item, onClear }: WatchCardProps) {
  return (
    <article className="watch-card">
      <button
        className="watch-card__clear"
        type="button"
        onClick={() => onClear(item.id)}
        aria-label={`Clear ${item.name} from local data`}
      >
        <ClearIcon />
      </button>

      <div className="watch-card__top">
        <span className="watch-card__kind">{item.kind}</span>
        <span className="watch-card__cadence">{item.cadence}</span>
      </div>

      <h3>{item.name}</h3>
      <p className="watch-card__summary">{item.summary}</p>

      <div className="watch-card__block">
        <span className="watch-card__label">Watch for</span>
        <p>{item.watchFor}</p>
      </div>

      <div className="watch-card__block">
        <span className="watch-card__label">Search cues</span>
        <ul className="tag-list">
          {item.queryHints.map((hint) => (
            <li key={hint}>{hint}</li>
          ))}
        </ul>
      </div>

      <div className="watch-card__block">
        <span className="watch-card__label">Official sources</span>
        <div className="link-cluster">
          {item.links.map((link) => (
            <a
              className="source-link"
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
