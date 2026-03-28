import type { ResearchLog } from '../../data/researchLogs'
import type { WatchItem } from '../../data/watchlist'
import { ClearIcon } from '../ui/ClearIcon'

type WatchCardProps = {
  item: WatchItem
  logs: ResearchLog[]
  onClearLogs: (itemId: string) => void
}

export function WatchCard({ item, logs, onClearLogs }: WatchCardProps) {
  return (
    <article className="watch-card">
      {logs.length > 0 ? (
        <button
          className="watch-card__clear"
          type="button"
          onClick={() => onClearLogs(item.id)}
          aria-label={`Clear findings for ${item.name}`}
        >
          <ClearIcon />
        </button>
      ) : null}

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
        <span className="watch-card__label">Findings</span>

        {logs.length > 0 ? (
          <div className="log-list">
            {logs.map((log) => (
              <LogCard key={log.id} log={log} />
            ))}
          </div>
        ) : (
          <div className="watch-card__empty">
            No findings yet. Future <code>pulse</code> results for this library
            should be stored here as a running log.
          </div>
        )}
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

function LogCard({ log }: { log: ResearchLog }) {
  const summaryPoints = Array.isArray(log.summary) ? log.summary : [log.summary]

  return (
    <article className="log-card">
      <div className="log-card__top">
        <span className="log-card__kind">{log.kind}</span>
        <span className="log-card__date">{log.date}</span>
      </div>
      <h4>{log.title}</h4>
      {log.version ? <p className="log-card__version">Version {log.version}</p> : null}
      {summaryPoints.length === 1 ? (
        <p>{summaryPoints[0]}</p>
      ) : (
        <ul className="log-card__summary-list">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      <a
        className="source-link source-link--log"
        href={log.sourceHref}
        target="_blank"
        rel="noreferrer"
      >
        {log.sourceLabel}
      </a>
    </article>
  )
}
