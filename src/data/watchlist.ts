export type WatchCategoryId =
  | 'core-frameworks'
  | 'forms-state-validation'
  | 'routing-data'
  | 'tooling-runtime'
  | 'frontend-radar'

export type WatchCategory = {
  id: WatchCategoryId
  label: string
  title: string
  description: string
}

export type WatchLink = {
  label: string
  href: string
}

export type WatchItem = {
  id: string
  name: string
  kind: string
  categoryId: WatchCategoryId
  summary: string
  watchFor: string
  cadence: string
  queryHints: string[]
  links: WatchLink[]
}

export const commandAlias = 'search'

export const watchCategories: WatchCategory[] = [
  {
    id: 'core-frameworks',
    label: 'Frameworks',
    title: 'Core frameworks',
    description:
      'Framework-level releases, rendering changes, router shifts, compiler work, and breaking upgrades.',
  },
  {
    id: 'forms-state-validation',
    label: 'State + Forms',
    title: 'Forms, state, and validation',
    description:
      'Follow schema changes, new APIs, resolver updates, ergonomics improvements, and migration notes.',
  },
  {
    id: 'routing-data',
    label: 'Routing + Data',
    title: 'Routing and data stack',
    description:
      'Catch route conventions, loaders, cache behavior, streaming, adapters, and TanStack ecosystem movement.',
  },
  {
    id: 'tooling-runtime',
    label: 'Tooling',
    title: 'Runtime, styling, and quality',
    description:
      'Track dev server changes, build speed, runtime updates, CSS releases, linting evolution, and DX shifts.',
  },
  {
    id: 'frontend-radar',
    label: 'Radar',
    title: 'Worth-watching frontend radar',
    description:
      'A controlled lane for emerging libraries or ecosystem moves that deserve attention beyond the core list.',
  },
]

export const watchItems: WatchItem[] = [
  {
    id: 'react',
    name: 'React',
    kind: 'UI library',
    categoryId: 'core-frameworks',
    summary:
      'Track React releases, compiler updates, new APIs, docs changes, and anything that affects rendering or migration strategy.',
    watchFor:
      'Major releases, compiler milestones, new hooks or components, deprecations, and breaking behavior changes.',
    cadence: 'Check every sweep',
    queryHints: [
      'React blog and release notes',
      'React compiler and new API changes',
      'Breaking changes or upgrade guidance',
    ],
    links: [
      { label: 'Official blog', href: 'https://react.dev/blog' },
      { label: 'Docs', href: 'https://react.dev/' },
      { label: 'GitHub releases', href: 'https://github.com/facebook/react/releases' },
    ],
  },
  {
    id: 'vite',
    name: 'Vite',
    kind: 'Build tool',
    categoryId: 'tooling-runtime',
    summary:
      'Watch for Vite core changes, plugin ecosystem updates, dev server behavior, build performance, and migration notes.',
    watchFor:
      'Major or minor releases, plugin API changes, perf updates, and changes that impact dev/build workflows.',
    cadence: 'Check every sweep',
    queryHints: [
      'Vite blog and release notes',
      'Plugin and dev server changes',
      'Migration or breaking changes',
    ],
    links: [
      { label: 'Official blog', href: 'https://vite.dev/blog' },
      { label: 'Docs', href: 'https://vite.dev/' },
      { label: 'GitHub releases', href: 'https://github.com/vitejs/vite/releases' },
    ],
  },
  {
    id: 'vue',
    name: 'Vue',
    kind: 'Framework',
    categoryId: 'core-frameworks',
    summary:
      'Keep Vue on the radar for Composition API changes, compiler work, SSR updates, and ecosystem-level announcements.',
    watchFor:
      'Core releases, RFCs, reactivity changes, tooling updates, and official migration guidance.',
    cadence: 'Check every sweep',
    queryHints: [
      'Vue core blog and releases',
      'RFCs or compiler updates',
      'Migration and ecosystem changes',
    ],
    links: [
      { label: 'Official blog', href: 'https://blog.vuejs.org/' },
      { label: 'Docs', href: 'https://vuejs.org/' },
      { label: 'GitHub releases', href: 'https://github.com/vuejs/core/releases' },
    ],
  },
  {
    id: 'react-hook-form',
    name: 'react-hook-form',
    kind: 'Forms',
    categoryId: 'forms-state-validation',
    summary:
      'Track form primitives, controllers, resolvers, new components, and ergonomics improvements that change day-to-day form work.',
    watchFor:
      'New form APIs, versioned additions, breaking validation behavior, resolver changes, and migration notes.',
    cadence: 'Check every sweep',
    queryHints: [
      'react-hook-form release notes',
      'New APIs or components',
      'Resolver and validation behavior changes',
    ],
    links: [
      { label: 'Docs', href: 'https://react-hook-form.com/' },
      {
        label: 'API docs',
        href: 'https://react-hook-form.com/docs',
      },
      {
        label: 'GitHub releases',
        href: 'https://github.com/react-hook-form/react-hook-form/releases',
      },
    ],
  },
  {
    id: 'zustand',
    name: 'Zustand',
    kind: 'State',
    categoryId: 'forms-state-validation',
    summary:
      'Follow store API changes, middleware updates, SSR guidance, and any shifts that affect lightweight state architecture.',
    watchFor:
      'Store API changes, middleware behavior, SSR updates, docs changes, and version-specific migration notes.',
    cadence: 'Check every sweep',
    queryHints: [
      'Zustand release notes',
      'Middleware or persist changes',
      'SSR and store pattern updates',
    ],
    links: [
      { label: 'Docs', href: 'https://zustand.docs.pmnd.rs/' },
      {
        label: 'GitHub releases',
        href: 'https://github.com/pmndrs/zustand/releases',
      },
      { label: 'Repository', href: 'https://github.com/pmndrs/zustand' },
    ],
  },
  {
    id: 'zod',
    name: 'Zod',
    kind: 'Validation',
    categoryId: 'forms-state-validation',
    summary:
      'Watch schema APIs, parser behavior, ecosystem adapters, and any release that changes validation ergonomics or inference.',
    watchFor:
      'New schema capabilities, compatibility changes, parser behavior updates, and breaking API moves.',
    cadence: 'Check every sweep',
    queryHints: [
      'Zod release notes',
      'Schema or parser changes',
      'Adapter or ecosystem compatibility updates',
    ],
    links: [
      { label: 'Docs', href: 'https://zod.dev/' },
      { label: 'GitHub releases', href: 'https://github.com/colinhacks/zod/releases' },
      { label: 'Repository', href: 'https://github.com/colinhacks/zod' },
    ],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    kind: 'Framework',
    categoryId: 'core-frameworks',
    summary:
      'Stay current on App Router changes, caching behavior, server components, build tooling, and Vercel-led framework updates.',
    watchFor:
      'Major releases, App Router changes, caching or streaming updates, migration guides, and deprecations.',
    cadence: 'Check every sweep',
    queryHints: [
      'Next.js blog and release notes',
      'App Router and caching updates',
      'Migration guides and breaking changes',
    ],
    links: [
      { label: 'Official blog', href: 'https://nextjs.org/blog' },
      { label: 'Docs', href: 'https://nextjs.org/docs' },
      { label: 'GitHub releases', href: 'https://github.com/vercel/next.js/releases' },
    ],
  },
  {
    id: 'tanstack-router',
    name: 'TanStack Router',
    kind: 'Routing',
    categoryId: 'routing-data',
    summary:
      'Track file routing, route loaders, devtools, adapters, and router-level behavior that affects React and Vue routing setups.',
    watchFor:
      'New router APIs, route generation changes, adapter updates, devtools changes, and versioned migration notes.',
    cadence: 'Check every sweep',
    queryHints: [
      'TanStack Router release notes',
      'Routing API or file route changes',
      'Devtools or adapter updates',
    ],
    links: [
      { label: 'Docs', href: 'https://tanstack.com/router/latest' },
      { label: 'GitHub releases', href: 'https://github.com/TanStack/router/releases' },
      { label: 'Repository', href: 'https://github.com/TanStack/router' },
    ],
  },
  {
    id: 'react-router',
    name: 'React Router',
    kind: 'Routing',
    categoryId: 'routing-data',
    summary:
      'Follow framework mode, data APIs, navigation behavior, and release notes that matter for routing and loaders in React apps.',
    watchFor:
      'New router APIs, data-loading changes, framework mode shifts, and official upgrade guidance.',
    cadence: 'Check every sweep',
    queryHints: [
      'React Router releases',
      'Framework mode and data API changes',
      'Migration or breaking update notes',
    ],
    links: [
      { label: 'Docs', href: 'https://reactrouter.com/' },
      {
        label: 'GitHub releases',
        href: 'https://github.com/remix-run/react-router/releases',
      },
      {
        label: 'Repository',
        href: 'https://github.com/remix-run/react-router',
      },
    ],
  },
  {
    id: 'tanstack-start',
    name: 'TanStack Start',
    kind: 'Full-stack React',
    categoryId: 'routing-data',
    summary:
      'Keep an eye on TanStack Start for fast-moving framework changes, file routing behavior, server functions, and production readiness.',
    watchFor:
      'Versioned framework changes, SSR or server function updates, CLI changes, and stability milestones.',
    cadence: 'Check every sweep',
    queryHints: [
      'TanStack Start release notes',
      'Server function or SSR changes',
      'Framework stability or CLI updates',
    ],
    links: [
      {
        label: 'Docs',
        href: 'https://tanstack.com/start/latest',
      },
      { label: 'Getting started', href: 'https://tanstack.com/start/v0/docs/framework/react/getting-started' },
      { label: 'Router releases', href: 'https://github.com/TanStack/router/releases' },
    ],
  },
  {
    id: 'tanstack-query',
    name: 'TanStack Query',
    kind: 'Data fetching',
    categoryId: 'routing-data',
    summary:
      'Watch cache behavior, query ergonomics, suspense patterns, mutations, devtools, and adapter changes across platforms.',
    watchFor:
      'Patch or minor releases, caching behavior updates, devtools shifts, adapter changes, and migration guidance.',
    cadence: 'Check every sweep',
    queryHints: [
      'TanStack Query release notes',
      'Cache behavior or suspense updates',
      'Devtools and adapter changes',
    ],
    links: [
      { label: 'Docs', href: 'https://tanstack.com/query/latest' },
      { label: 'GitHub releases', href: 'https://github.com/TanStack/query/releases' },
      { label: 'Repository', href: 'https://github.com/TanStack/query' },
    ],
  },
  {
    id: 'tanstack-related',
    name: 'TanStack related libraries',
    kind: 'Ecosystem',
    categoryId: 'routing-data',
    summary:
      'Use one lane for the wider TanStack ecosystem so important releases in Table, Virtual, Form, DB, Pacer, Store, or Config are not missed.',
    watchFor:
      'Meaningful launches, adapter additions, beta moves, ecosystem consolidation, and important release notes outside Router and Query.',
    cadence: 'Check every sweep',
    queryHints: [
      'TanStack ecosystem releases',
      'Table, Virtual, Form, DB, Store, or Config updates',
      'New libraries or major beta announcements',
    ],
    links: [
      { label: 'TanStack homepage', href: 'https://tanstack.com/' },
      { label: 'GitHub org', href: 'https://github.com/TanStack' },
      { label: 'Latest docs hub', href: 'https://tanstack.com/' },
    ],
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    kind: 'Styling',
    categoryId: 'tooling-runtime',
    summary:
      'Track utility syntax changes, engine updates, config behavior, theme features, plugin work, and migration guidance.',
    watchFor:
      'Major releases, config or theme changes, plugin ecosystem shifts, and performance or compatibility updates.',
    cadence: 'Check every sweep',
    queryHints: [
      'Tailwind CSS blog and releases',
      'Theme or config changes',
      'Migration guidance and compatibility updates',
    ],
    links: [
      { label: 'Official blog', href: 'https://tailwindcss.com/blog' },
      { label: 'Docs', href: 'https://tailwindcss.com/docs' },
      {
        label: 'GitHub releases',
        href: 'https://github.com/tailwindlabs/tailwindcss/releases',
      },
    ],
  },
  {
    id: 'bun',
    name: 'Bun',
    kind: 'Runtime',
    categoryId: 'tooling-runtime',
    summary:
      'Watch runtime performance, package manager behavior, test runner changes, bundler work, and Node compatibility movement.',
    watchFor:
      'Runtime releases, package manager changes, test runner updates, compatibility notes, and perf improvements.',
    cadence: 'Check every sweep',
    queryHints: [
      'Bun blog and release notes',
      'Runtime or package manager changes',
      'Compatibility and performance updates',
    ],
    links: [
      { label: 'Official blog', href: 'https://bun.sh/blog' },
      { label: 'Docs', href: 'https://bun.sh/docs' },
      { label: 'GitHub releases', href: 'https://github.com/oven-sh/bun/releases' },
    ],
  },
  {
    id: 'linting-stack',
    name: 'Linting stack',
    kind: 'Code quality',
    categoryId: 'tooling-runtime',
    summary:
      'Treat linting as a grouped watch lane so ESLint, Biome, oxlint, and typescript-eslint upgrades are surfaced together.',
    watchFor:
      'Rule changes, flat config updates, parser shifts, performance improvements, and migration notes across the linting toolchain.',
    cadence: 'Check every sweep',
    queryHints: [
      'ESLint, Biome, oxlint, and typescript-eslint releases',
      'Flat config or parser changes',
      'Rule migrations and performance improvements',
    ],
    links: [
      { label: 'ESLint blog', href: 'https://eslint.org/blog/' },
      { label: 'Biome releases', href: 'https://github.com/biomejs/biome/releases' },
      {
        label: 'typescript-eslint releases',
        href: 'https://github.com/typescript-eslint/typescript-eslint/releases',
      },
      { label: 'oxc releases', href: 'https://github.com/oxc-project/oxc/releases' },
    ],
  },
  {
    id: 'frontend-radar',
    name: 'Interesting frontend libraries',
    kind: 'Radar',
    categoryId: 'frontend-radar',
    summary:
      'Reserve a radar lane for libraries worth mentioning even when they are outside the fixed list, but only if the signal is genuinely strong.',
    watchFor:
      'High-signal launches, big funding or maintainer moves, new DX tools, testing libraries, build tools, or rendering experiments.',
    cadence: 'Check every sweep',
    queryHints: [
      'Interesting frontend library launches this week',
      'High-signal frontend tooling announcements',
      'Worth-watching ecosystem shifts with official sources',
    ],
    links: [
      { label: 'Vitest releases', href: 'https://github.com/vitest-dev/vitest/releases' },
      { label: 'Astro blog', href: 'https://astro.build/blog/' },
      { label: 'Motion docs', href: 'https://motion.dev/' },
      { label: 'Rspack blog', href: 'https://rspack.dev/blog/' },
    ],
  },
]

export const reportChecklist = [
  'Start with the 5 to 10 most important updates across the whole sweep.',
  'For each watched item include headline, version, exact date, why it matters, and official source links.',
  'Call out breaking changes, migrations, new APIs, experimental features, performance wins, and security fixes.',
  'If nothing notable happened, say so clearly instead of padding the report.',
  'Separate confirmed facts from your own inference.',
]

export const masterPrompt = [
  'You are Patch Pulse, my permanent frontend ecosystem scout.',
  '',
  'Persistent command rule',
  '- If I send only the word `search`, immediately perform a fresh web search sweep.',
  '- Do not ask follow-up questions before starting the sweep.',
  '- Use web browsing every single time because I want the latest official information.',
  '',
  'Primary objective',
  '- Find the latest meaningful news, patch notes, release notes, changelog entries, breaking changes, new APIs, experimental features, migration guides, performance work, and security fixes for my tracked frontend stack.',
  '',
  'Source policy',
  '- Prefer official sources first: release notes, changelogs, official blogs, docs, GitHub releases, RFCs, and maintainer announcements.',
  '- If you cite non-official sources, use them only as supporting context after checking the official source.',
  '- Never invent an update. If nothing new is found, say "No notable new official update found."',
  '',
  'Tracked watchlist',
  '- React',
  '- Vite',
  '- Vue',
  '- react-hook-form',
  '- Zustand',
  '- Zod',
  '- Next.js',
  '- TanStack Router',
  '- React Router',
  '- TanStack Start',
  '- TanStack Query',
  '- TanStack related libraries',
  '- Tailwind CSS',
  '- Bun',
  '- Linting stack: ESLint, Biome, oxlint, typescript-eslint, and closely related frontend linting tools',
  '- Other interesting frontend libraries or tooling that are worth mentioning',
  '',
  'Official source map to prioritize',
  '- React: https://react.dev/blog | https://github.com/facebook/react/releases',
  '- Vite: https://vite.dev/blog | https://github.com/vitejs/vite/releases',
  '- Vue: https://blog.vuejs.org/ | https://github.com/vuejs/core/releases',
  '- react-hook-form: https://react-hook-form.com/docs | https://github.com/react-hook-form/react-hook-form/releases',
  '- Zustand: https://zustand.docs.pmnd.rs/ | https://github.com/pmndrs/zustand/releases',
  '- Zod: https://zod.dev/ | https://github.com/colinhacks/zod/releases',
  '- Next.js: https://nextjs.org/blog | https://github.com/vercel/next.js/releases',
  '- TanStack Router: https://tanstack.com/router/latest | https://github.com/TanStack/router/releases',
  '- React Router: https://reactrouter.com/ | https://github.com/remix-run/react-router/releases',
  '- TanStack Start: https://tanstack.com/start/latest | https://github.com/TanStack/router/releases',
  '- TanStack Query: https://tanstack.com/query/latest | https://github.com/TanStack/query/releases',
  '- TanStack ecosystem: https://tanstack.com/ | https://github.com/TanStack',
  '- Tailwind CSS: https://tailwindcss.com/blog | https://github.com/tailwindlabs/tailwindcss/releases',
  '- Bun: https://bun.sh/blog | https://github.com/oven-sh/bun/releases',
  '- Linting stack: https://eslint.org/blog/ | https://github.com/biomejs/biome/releases | https://github.com/typescript-eslint/typescript-eslint/releases | https://github.com/oxc-project/oxc/releases',
  '',
  'Sweep rules',
  '- Capture exact dates and version numbers whenever available.',
  '- Prioritize recent and meaningful changes over filler.',
  '- For TanStack, group findings under Router, Start, Query, and Other TanStack.',
  '- For linting, group findings under ESLint, Biome, oxlint, and typescript-eslint.',
  '- For "other interesting frontend libraries", only include items that are genuinely notable.',
  '',
  'Output format',
  '1. Executive summary: the most important updates across the sweep.',
  '2. By library: one subsection per watched item or grouped lane.',
  '3. For each subsection include:',
  '   - Latest update headline',
  '   - Version',
  '   - Exact date',
  '   - Why it matters in 1 to 2 short sentences',
  '   - Official source links',
  '   - Action for me: watch / read / upgrade / ignore',
  '4. End with "Worth watching next" for emerging frontend items.',
  '',
  'Quality bar',
  '- Keep the report concise but complete.',
  '- Be explicit when something is confirmed fact versus your inference.',
  '- Include direct links that I can open immediately.',
].join('\n')
