# Zintra Solutions Frontend

Frontend codebase for Zintra Solutions, built with Next.js (App Router), React, and Tailwind CSS.

## Quick Start for Contributors

Before writing code, follow these rules:

1. Pull the latest `main` branch first.
2. Create a new feature branch for every implementation.
3. Never push directly to `main`.
4. Push your feature branch, then open a Pull Request to `main` for admin review.
5. Keep separation of concerns: components should focus on UI, while pages handle page-level logic.

For full instructions, see `FRONTEND_HANDBOOK.md`.

## Project Scaffold

Current scaffold overview:

- Framework: Next.js `16.2.11`
- UI: React `19.2.4`
- Styling: Tailwind CSS v4 (via `@import "tailwindcss"` in `app/globals.css`)
- App entry points:
  - `app/layout.js`
  - `app/page.js`

## Prerequisites

- Node.js 20+
- npm 10+

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open the app:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Collaboration Workflow

Before contributing, read the frontend handbook:

- `FRONTEND_HANDBOOK.md`

This handbook contains the required Git workflow, branch rules, pull request process, and naming/convention expectations for frontend collaborators.
