# Patch Pulse

Patch Pulse is a dark-mode frontend update dashboard built around one reusable AI command.

The goal is simple:

- Load one master prompt into a browsing-capable AI agent.
- Later, type only `search`.
- The agent should sweep your tracked stack, find the latest official updates, and return the important news with links.

This repo now acts as the visual command center for that workflow. It groups your watchlist into clean sections, surfaces official source links per item, and lets you clear cards from local browser storage when you no longer want to see them.

## What the app is trying to do

Patch Pulse is designed for a frontend-heavy workflow where you want one place to track:

- frameworks
- forms, state, and validation libraries
- routing and TanStack tooling
- runtime, styling, and linting tools
- other frontend libraries worth watching

Instead of dumping everything into one endless feed, the UI is split into focused lanes:

1. Core frameworks
2. Forms, state, and validation
3. Routing and data stack
4. Runtime, styling, and quality tooling
5. Frontend radar

That structure keeps the dashboard readable and makes it easier to scan by mental model instead of by alphabet.

## Current watchlist

- React
- Vite
- Vue
- react-hook-form
- Zustand
- Zod
- Next.js
- TanStack Router
- React Router
- TanStack Start
- TanStack Query
- TanStack related libraries
- Tailwind CSS
- Bun
- Linting stack
- Interesting frontend libraries

## Local clear behavior

Every watch card includes a clear action.

- Clear an item if you do not want it on your board anymore.
- Clear a whole section if that lane is noisy.
- Cleared cards are stored in local browser storage.
- If you never clear an item, it stays.
- If you clear too much, use the restore button to bring the default watchlist back.

## Recommended usage flow

1. Run the app.
2. Copy the master prompt from the dashboard.
3. Paste it into your preferred AI agent that can browse the web.
4. Keep that conversation or system instruction alive.
5. Later, type only `search`.
6. Read the grouped report and open the official links when you want to go deeper.

## Reusable master prompt

The reusable agent prompt now lives in a separate file so it stays clean and copy-ready:

- [MASTER_PROMPT.md](C:/Users/User/OneDrive/Desktop/CodeTest/up-to-date/MASTER_PROMPT.md)

Use that file directly when you want to initialize or refresh the AI agent instructions.

## Design direction

The interface uses a dark blue palette because the product is more command center than marketing page.

The current design choices are deliberate:

- command-first hero so the main action is obvious
- grouped watch cards instead of one flat news feed
- official source links directly on each card
- clear icons for fast local cleanup
- strong contrast and low-noise layout for long scanning sessions

## Development

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```
