import { useEffect, useState } from 'react'

import { copyText } from '../lib/clipboard'

export type CopyFeedbackKey = 'prompt' | 'command'

export function useCopyFeedback() {
  const [copiedKey, setCopiedKey] = useState<CopyFeedbackKey | null>(null)

  useEffect(() => {
    if (!copiedKey) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setCopiedKey(null)
    }, 1800)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [copiedKey])

  async function copyWithFeedback(text: string, key: CopyFeedbackKey) {
    const copied = await copyText(text)

    if (copied) {
      setCopiedKey(key)
    }
  }

  return {
    copiedKey,
    copyWithFeedback,
  }
}
