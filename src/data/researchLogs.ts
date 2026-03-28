export type ResearchLogSummary = string | string[]

export type ResearchLog = {
  id: string
  itemId: string
  title: string
  kind: string
  date: string
  version?: string
  summary: ResearchLogSummary
  sourceLabel: string
  sourceHref: string
}

export function isResearchLog(value: unknown): value is ResearchLog {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const candidate = value as Partial<ResearchLog>
  const hasValidSummary =
    typeof candidate.summary === 'string' ||
    (Array.isArray(candidate.summary) &&
      candidate.summary.every((point) => typeof point === 'string'))

  return (
    typeof candidate.id === 'string' &&
    typeof candidate.itemId === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.kind === 'string' &&
    typeof candidate.date === 'string' &&
    hasValidSummary &&
    typeof candidate.sourceLabel === 'string' &&
    typeof candidate.sourceHref === 'string'
  )
}
