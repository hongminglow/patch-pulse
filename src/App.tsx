import './App.css'
import { TopStage } from './components/dashboard/TopStage'
import { WatchCategorySection } from './components/dashboard/WatchCategorySection'
import { WatchGroupsOverview } from './components/dashboard/WatchGroupsOverview'
import {
  commandAlias,
  masterPrompt,
  reportChecklist,
  watchCategories,
  watchItems,
} from './data/watchlist'
import { useCopyFeedback } from './hooks/useCopyFeedback'
import { useHiddenWatchItems } from './hooks/useHiddenWatchItems'

function App() {
  const { copiedKey, copyWithFeedback } = useCopyFeedback()
  const {
    hiddenCount,
    visibleItems,
    clearCategory,
    clearItem,
    restoreItems,
  } = useHiddenWatchItems(watchItems)

  const officialSourceCount = watchItems.reduce(
    (total, item) => total + item.links.length,
    0,
  )

  return (
    <div className="app-shell">
      <TopStage
        commandAlias={commandAlias}
        copiedKey={copiedKey}
        hiddenCount={hiddenCount}
        masterPrompt={masterPrompt}
        officialSourceCount={officialSourceCount}
        reportChecklist={reportChecklist}
        visibleItemCount={visibleItems.length}
        watchItemCount={watchItems.length}
        onCopyCommand={() => copyWithFeedback(commandAlias, 'command')}
        onCopyPrompt={() => copyWithFeedback(masterPrompt, 'prompt')}
        onRestoreItems={restoreItems}
      />

      <main className="dashboard">
        <WatchGroupsOverview
          categories={watchCategories}
          visibleItems={visibleItems}
        />

        {visibleItems.length === 0 ? (
          <section className="section">
            <div className="panel empty-state">
              <p className="eyebrow">All clear</p>
              <h2>Your local board is empty</h2>
              <p>
                You cleared every watch card from local storage. Use the restore
                button above if you want the default watchlist back.
              </p>
            </div>
          </section>
        ) : null}

        {watchCategories.map((category) => (
          <WatchCategorySection
            key={category.id}
            category={category}
            items={visibleItems.filter((item) => item.categoryId === category.id)}
            onClearCategory={clearCategory}
            onClearItem={clearItem}
          />
        ))}
      </main>
    </div>
  )
}

export default App
