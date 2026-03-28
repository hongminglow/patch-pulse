import { fileURLToPath } from 'node:url'
import { readFile, writeFile } from 'node:fs/promises'
import type { IncomingMessage, ServerResponse } from 'node:http'

import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const researchLogsFilePath = fileURLToPath(
  new URL('./public/data/researchLogs.json', import.meta.url),
)

type ResearchLogPayload = {
  id: string
  itemId: string
  title: string
  kind: string
  date: string
  version?: string
  summary: string | string[]
  sourceLabel: string
  sourceHref: string
}

function isResearchLogPayload(value: unknown): value is ResearchLogPayload {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const candidate = value as Partial<ResearchLogPayload>
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

function writeJsonResponse(
  response: ServerResponse,
  statusCode: number,
  payload: unknown,
) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  response.end(JSON.stringify(payload))
}

async function readRequestBody(request: IncomingMessage) {
  const chunks: Buffer[] = []

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  return Buffer.concat(chunks).toString('utf8')
}

async function readResearchLogsFile() {
  const raw = await readFile(researchLogsFilePath, 'utf8')
  const parsed = JSON.parse(raw) as unknown

  if (!Array.isArray(parsed) || !parsed.every((entry) => isResearchLogPayload(entry))) {
    throw new Error('researchLogs.json has an invalid shape.')
  }

  return parsed
}

function researchLogsApiPlugin(): Plugin {
  const routePath = '/api/research-logs'

  async function handler(
    request: IncomingMessage,
    response: ServerResponse,
    next: (error?: unknown) => void,
  ) {
    const requestPath = request.url?.split('?')[0]

    if (requestPath !== routePath) {
      next()
      return
    }

    try {
      if (request.method === 'GET') {
        writeJsonResponse(response, 200, await readResearchLogsFile())
        return
      }

      if (request.method === 'PUT') {
        const body = await readRequestBody(request)
        const parsed = JSON.parse(body) as unknown

        if (!Array.isArray(parsed) || !parsed.every((entry) => isResearchLogPayload(entry))) {
          writeJsonResponse(response, 400, {
            error: 'Research logs payload has an invalid shape.',
          })
          return
        }

        await writeFile(
          researchLogsFilePath,
          `${JSON.stringify(parsed, null, 2)}\n`,
          'utf8',
        )

        writeJsonResponse(response, 200, parsed)
        return
      }

      writeJsonResponse(response, 405, { error: 'Method not allowed.' })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected server error.'
      writeJsonResponse(response, 500, { error: message })
    }
  }

  return {
    name: 'research-logs-api',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        void handler(request, response, next)
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        void handler(request, response, next)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    researchLogsApiPlugin(),
  ],
})
