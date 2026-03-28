type TopStageProps = {
  commandAlias: string;
  copiedKey: "prompt" | "command" | null;
  hiddenCount: number;
  masterPrompt: string;
  officialSourceCount: number;
  reportChecklist: string[];
  visibleItemCount: number;
  watchItemCount: number;
  onCopyCommand: () => void;
  onCopyPrompt: () => void;
  onRestoreItems: () => void;
};

export function TopStage({
  commandAlias,
  copiedKey,
  hiddenCount,
  masterPrompt,
  officialSourceCount,
  reportChecklist,
  visibleItemCount,
  watchItemCount,
  onCopyCommand,
  onCopyPrompt,
  onRestoreItems,
}: TopStageProps) {
  return (
    <header className="hero">
      <div className="brand-bar">
        <div className="brand-copy">
          <p className="eyebrow">Command Center</p>
          <h1>Patch Pulse</h1>
          <p className="lede">
            A reusable search cockpit for frontend news, patch notes, release
            notes, and official-source updates across your stack.
          </p>
        </div>

        <div className="hero-chips" aria-label="Dashboard summary">
          <span className="metric-chip">
            <strong>{watchItemCount}</strong> tracked lanes
          </span>
          <span className="metric-chip">
            <strong>{officialSourceCount}</strong> official links
          </span>
          <span className="metric-chip">
            <strong>{hiddenCount}</strong> locally cleared
          </span>
        </div>
      </div>

      <div className="top-stage">
        <div className="top-stage__main">
          <section className="panel panel--featured">
            <p className="eyebrow">Master workflow</p>
            <h2>Type one command, sweep the whole stack</h2>
            <p className="panel-copy">
              Load the reusable prompt once into a browsing-capable AI agent.
              After that, sending only <code>{commandAlias}</code> should
              trigger a fresh official-source search across React, Vite, Vue,
              Next.js, TanStack, forms, state, styling, runtime, linting, and
              radar items.
            </p>

            <div className="hero-actions">
              <button className="button" type="button" onClick={onCopyPrompt}>
                {copiedKey === "prompt"
                  ? "Copied prompt"
                  : "Copy master prompt"}
              </button>
              <button
                className="button button--secondary"
                type="button"
                onClick={onCopyCommand}
              >
                {copiedKey === "command"
                  ? "Copied command"
                  : `Copy "${commandAlias}"`}
              </button>
            </div>

            <div className="command-strip">
              <div>
                <span className="command-label">Trigger</span>
                <code className="command-pill">{commandAlias}</code>
              </div>
              <p>
                The dashboard handles structure and local curation. The live web
                sweep is driven by the master prompt.
              </p>
            </div>
          </section>

          <article className="panel prompt-panel">
            <div className="section-intro">
              <p className="eyebrow">Reusable prompt</p>
              <h2>Paste this once into your agent</h2>
              <p className="panel-copy">
                This is the master instruction that teaches the agent what
                <code>{commandAlias}</code> means and which official sources it
                should prioritize.
              </p>
            </div>

            <pre className="prompt-box">{masterPrompt}</pre>
          </article>
        </div>

        <div className="top-stage__side">
          <section className="panel compact-panel">
            <p className="eyebrow">How to use it</p>
            <h2>Fast repeatable flow</h2>
            <ol className="detail-list detail-list--ordered">
              <li>Copy the master prompt into your preferred AI agent once.</li>
              <li>Keep that agent in a browsing-enabled mode.</li>
              <li>
                Later, type only <code>{commandAlias}</code>.
              </li>
              <li>
                Review the grouped update report and open the official links.
              </li>
            </ol>
          </section>

          <section className="panel compact-panel">
            <p className="eyebrow">Local memory</p>
            <h2>Clear what you do not want</h2>
            <p className="panel-copy">
              Every clear action is stored in browser local storage so the
              dashboard stays focused on the items you still care about.
            </p>

            <div className="memory-grid">
              <article>
                <strong>{visibleItemCount}</strong>
                <span>visible cards</span>
              </article>
              <article>
                <strong>{hiddenCount}</strong>
                <span>hidden cards</span>
              </article>
            </div>

            <button
              className="button button--ghost"
              type="button"
              onClick={onRestoreItems}
              disabled={hiddenCount === 0}
            >
              Restore cleared cards
            </button>
          </section>

          <section className="panel compact-panel">
            <div className="section-intro">
              <p className="eyebrow">Output contract</p>
              <h2>How the response should look</h2>
            </div>

            <ul className="detail-list">
              {reportChecklist.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
}
