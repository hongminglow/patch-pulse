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
import { useResearchLogs } from './hooks/useResearchLogs'

function App() {
  const { copiedKey, copyWithFeedback } = useCopyFeedback()
  const {
    activeLogLaneCount,
    logsByItemId,
    savedLogCount,
    clearAllLogs,
    clearCategoryLogs,
    clearItemLogs,
  } = useResearchLogs(watchItems)

  const officialSourceCount = watchItems.reduce(
    (total, item) => total + item.links.length,
    0,
  )

  return (
    <div className="app-shell">
      <TopStage
        activeLogLaneCount={activeLogLaneCount}
        commandAlias={commandAlias}
        copiedKey={copiedKey}
        masterPrompt={masterPrompt}
        officialSourceCount={officialSourceCount}
        reportChecklist={reportChecklist}
        savedLogCount={savedLogCount}
        watchItemCount={watchItems.length}
        onClearAllLogs={clearAllLogs}
        onCopyCommand={() => copyWithFeedback(commandAlias, 'command')}
        onCopyPrompt={() => copyWithFeedback(masterPrompt, 'prompt')}
      />

      <main className="dashboard">
        <WatchGroupsOverview categories={watchCategories} visibleItems={watchItems} />

        {watchCategories.map((category) => (
          <WatchCategorySection
            key={category.id}
            category={category}
            items={watchItems.filter((item) => item.categoryId === category.id)}
            logsByItemId={logsByItemId}
            onClearCategoryLogs={clearCategoryLogs}
            onClearItemLogs={clearItemLogs}
          />
        ))}
      </main>
    </div>
  )
}

export default App
