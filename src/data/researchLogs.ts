export type ResearchLog = {
  id: string
  itemId: string
  title: string
  kind: string
  date: string
  version?: string
  summary: string
  sourceLabel: string
  sourceHref: string
}

export const starterResearchLogs: ResearchLog[] = [
  {
    id: 'react-foundation-launch',
    itemId: 'react',
    title: 'React Foundation launched',
    kind: 'Ecosystem',
    date: '2026-02-24',
    version: '19.2.3',
    summary:
      'React governance is now independent under the Linux Foundation, while the recent 19.2.x line also included important React Server Components security fixes.',
    sourceLabel: 'React Foundation announcement',
    sourceHref: 'https://react.dev/blog/2026/02/24/the-react-foundation',
  },
  {
    id: 'vite-8-beta-13',
    itemId: 'vite',
    title: 'Vite 8 beta continued the Rolldown-powered architecture shift',
    kind: 'Beta',
    date: '2026-02-05',
    version: '8.0.0-beta.13',
    summary:
      'Rolldown remains the major platform change to watch, aimed at faster production builds and a more unified toolchain story.',
    sourceLabel: 'Vite releases',
    sourceHref: 'https://github.com/vitejs/vite/releases',
  },
  {
    id: 'vue-3-6-beta-1',
    itemId: 'vue',
    title: 'Vue 3.6 beta advanced Vapor Mode and the alien-signals reactivity refactor',
    kind: 'Beta',
    date: '2026-01-04',
    version: '3.6.0-beta.1',
    summary:
      'The current beta line is the most meaningful recent official release lane, while stable 3.5.x continues separately.',
    sourceLabel: 'Vue core releases',
    sourceHref: 'https://github.com/vuejs/core/releases',
  },
  {
    id: 'rhf-7-68-form-state-subscribe',
    itemId: 'react-hook-form',
    title: 'react-hook-form added FormStateSubscribe',
    kind: 'Feature',
    date: '2025-12-03',
    version: '7.68.0',
    summary:
      'This added finer-grained form-state subscriptions and included a fix for Next.js 16 Server Actions behavior.',
    sourceLabel: 'react-hook-form releases',
    sourceHref: 'https://github.com/react-hook-form/react-hook-form/releases',
  },
  {
    id: 'zustand-5-0-10-persist-fix',
    itemId: 'zustand',
    title: 'Zustand fixed a persist middleware race condition',
    kind: 'Patch',
    date: '2026-01-12',
    version: '5.0.10',
    summary:
      'This is a correctness fix for apps that rely on concurrent hydration or persistence flows.',
    sourceLabel: 'Zustand releases',
    sourceHref: 'https://github.com/pmndrs/zustand/releases',
  },
  {
    id: 'zod-4-3-line',
    itemId: 'zod',
    title: 'Zod 4.3.x became the active feature line',
    kind: 'Release',
    date: '2026-01-04',
    version: '4.3.5',
    summary:
      'Recent additions include fromJSONSchema, xor, looseRecord, exactOptional, and smaller tree-shaking improvements.',
    sourceLabel: 'Zod releases',
    sourceHref: 'https://github.com/colinhacks/zod/releases',
  },
  {
    id: 'next-16-1-turbopack',
    itemId: 'nextjs',
    title: 'Next.js 16.1 improved Turbopack-heavy development workflows',
    kind: 'Release',
    date: '2025-12-18',
    version: '16.1.1',
    summary:
      'Stable file-system caching for next dev, experimental bundle analysis, and improved debugging made this a notable release line.',
    sourceLabel: 'Next.js 16.1',
    sourceHref: 'https://nextjs.org/blog/next-16-1',
  },
  {
    id: 'tanstack-router-1-147-0',
    itemId: 'tanstack-router',
    title: 'TanStack Router kept patching through the 1.147.x line',
    kind: 'Patch',
    date: '2026-01-10',
    version: '1.147.0',
    summary:
      'This release train included nearby security-related fixes as the router kept evolving rapidly.',
    sourceLabel: 'TanStack Router releases',
    sourceHref: 'https://github.com/TanStack/router/releases',
  },
  {
    id: 'react-router-7-13-1',
    itemId: 'react-router',
    title: 'React Router added unstable URL masking support',
    kind: 'Release',
    date: '2026-02-23',
    version: '7.13.1',
    summary:
      'This followed 7.12.0, which addressed several security vulnerabilities including CSRF and XSS-related issues.',
    sourceLabel: 'React Router changelog',
    sourceHref: 'https://reactrouter.com/changelog',
  },
  {
    id: 'tanstack-start-1-145-10',
    itemId: 'tanstack-start',
    title: 'TanStack Start patches focused on preview basepath and code-splitting issues',
    kind: 'Patch',
    date: '2026-01-07',
    version: '1.145.10',
    summary:
      'Recent fixes improved vite preview base-path behavior and avoided process.exit after code-splitting in webpack and rspack scenarios.',
    sourceLabel: 'TanStack Router releases',
    sourceHref: 'https://github.com/TanStack/router/releases',
  },
  {
    id: 'tanstack-query-5-90-16',
    itemId: 'tanstack-query',
    title: 'TanStack Query fixed retryOnMount behavior with functional throwOnError',
    kind: 'Patch',
    date: '2025-12-30',
    version: '5.90.16',
    summary:
      'The same release train also fixed a useQueries race in query-core, making it worth tracking for edge-case behavior.',
    sourceLabel: 'TanStack Query releases',
    sourceHref: 'https://github.com/TanStack/query/releases',
  },
  {
    id: 'tanstack-db-0-2-9',
    itemId: 'tanstack-related',
    title: 'TanStack DB stayed notable as an adjacent local-first data project',
    kind: 'Ecosystem',
    date: '2025-11-27',
    version: '0.2.9',
    summary:
      'Recent fixes targeted eager-mode commit timing around Electric up-to-date signaling for local-first workflows.',
    sourceLabel: 'TanStack DB releases',
    sourceHref: 'https://github.com/TanStack/db/releases',
  },
  {
    id: 'tailwind-4-1-18',
    itemId: 'tailwindcss',
    title: 'Tailwind 4.1.x remained the active stable line',
    kind: 'Release',
    date: '2025-12-11',
    version: '4.1.18',
    summary:
      'The 4.1 line introduced text shadows, masks, and source controls while patches kept refining source and parser behavior.',
    sourceLabel: 'Tailwind CSS releases',
    sourceHref: 'https://github.com/tailwindlabs/tailwindcss/releases',
  },
  {
    id: 'bun-1-3-4',
    itemId: 'bun',
    title: 'Bun continued its fast patch cadence',
    kind: 'Patch',
    date: '2025-12-07',
    version: '1.3.4',
    summary:
      'No single standout feature dominated this snapshot, but staying current matters because Bun ships frequent fixes.',
    sourceLabel: 'Bun releases',
    sourceHref: 'https://github.com/oven-sh/bun/releases',
  },
  {
    id: 'eslint-9-39-3',
    itemId: 'linting-stack',
    title: 'ESLint restored TypeScript 4.0 compatibility in types',
    kind: 'Patch',
    date: '2026-02-20',
    version: '9.39.3',
    summary:
      'A small but useful release if you support older TypeScript consumers or shared tooling surfaces.',
    sourceLabel: 'ESLint blog',
    sourceHref: 'https://eslint.org/blog/2026/02/eslint-v9.39.3-released/',
  },
  {
    id: 'biome-2-4',
    itemId: 'linting-stack',
    title: 'Biome 2.4 added embedded snippets and stronger HTML accessibility support',
    kind: 'Release',
    date: '2026-02-10',
    version: '2.4',
    summary:
      'This is one of the strongest tooling releases in the sweep, especially for teams touching Vue, Svelte, Astro, HTML, and embedded snippets.',
    sourceLabel: 'Biome 2.4 announcement',
    sourceHref: 'https://biomejs.dev/blog/biome-v2-4/',
  },
  {
    id: 'oxlint-1-31-0',
    itemId: 'linting-stack',
    title: 'Oxlint kept expanding ESLint compatibility and plugin support',
    kind: 'Release',
    date: '2025-12-01',
    version: '1.31.0',
    summary:
      'The release added more plugin APIs and rule-option support while official docs emphasized nested config and type-aware linting.',
    sourceLabel: 'Oxc releases',
    sourceHref: 'https://github.com/oxc-project/oxc/releases',
  },
  {
    id: 'typescript-eslint-8-52-0',
    itemId: 'linting-stack',
    title: 'typescript-eslint continued its fast-moving parser and rule fixes',
    kind: 'Release',
    date: '2026-01-05',
    version: '8.52.0',
    summary:
      'This lane remains one to keep current rather than one huge feature jump, but the release cadence is important.',
    sourceLabel: 'typescript-eslint releases',
    sourceHref: 'https://github.com/typescript-eslint/typescript-eslint/releases',
  },
  {
    id: 'frontend-radar-react-foundation',
    itemId: 'frontend-radar',
    title: 'React Foundation is worth tracking as ecosystem governance news',
    kind: 'Radar',
    date: '2026-02-24',
    summary:
      'Even though it is not a package release, it is one of the most meaningful ecosystem shifts in the recent sweep.',
    sourceLabel: 'React Foundation announcement',
    sourceHref: 'https://react.dev/blog/2026/02/24/the-react-foundation',
  },
  {
    id: 'frontend-radar-rolldown',
    itemId: 'frontend-radar',
    title: 'Rolldown inside Vite remains the biggest next-wave tooling shift',
    kind: 'Radar',
    date: '2025-12-03',
    summary:
      'The Vite 8 beta cycle keeps reinforcing Rolldown as a major platform change to watch for the frontend toolchain.',
    sourceLabel: 'Vite 8 beta announcement',
    sourceHref: 'https://vite.dev/blog/announcing-vite8-beta',
  },
]
