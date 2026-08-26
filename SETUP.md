# Local Development & Environment Setup Guide

> **Project:** CreativAI — AI Decision Engine for Creators  
> **Version:** 0.1.0 (MVP)  
> **Framework:** Next.js 14+ (App Router, TypeScript, Tailwind CSS)  
> **Data Architecture:** 100% Local JSON SSG (Zero cloud database dependencies)

---

## 1. System Prerequisites

Before running the platform locally, ensure your environment meets the following minimum requirements:

| Tool | Required Version | Verified Local Version |
|---|---|---|
| **Node.js** | `>= 18.17.0` or `>= 20.x` | `v24.19.0` |
| **npm** | `>= 9.x` or `>= 10.x` | `11.17.0` |
| **Git** | `>= 2.x` | `2.55.0.windows.3` |
| **Operating System** | Windows, macOS, or Linux | Windows (PowerShell / CMD) |

---

## 2. Installation Steps

1. **Clone the repository (if not already local):**
   ```bash
   git clone <repository-url>
   cd CreativAI
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```
   All packages will install into `node_modules/` with zero external native compilation requirements.

---

## 3. Running the Project

### A. Development Mode (with Fast Refresh / Hot Reload)
```bash
npm run dev
```
- Starts the local development server at **`http://localhost:3000`**.
- Changes in `src/` or `data/` will hot-reload automatically in the browser.

### B. Production Build & Static Compilation
```bash
npm run build
```
- Pre-renders all **46 static pages** and compiles **2 API routes** (`/api/analytics` and `/api/track/click`).
- Output is verified with zero TypeScript or linting errors.

### C. Production Server
```bash
npm run start
```
- Serves the optimized production build locally at **`http://localhost:3000`**.

---

## 4. Local Data Architecture

The MVP operates strictly with local JSON data storage located at the project root:

```text
/data
├── tools.json         # 15 fully evaluated tools with official pricing & affiliate metadata
├── workflows.json     # 5 end-to-end production pipelines
├── comparisons.json   # 5 head-to-head comparison matrices
├── alternatives.json  # 5 situation-mapped alternative guides
├── benchmarks.json    # 5 empirical test prompts & observations
├── clicks.json        # Outbound affiliate & partner click events
└── analytics.json     # First-party decision funnel & creator feedback logs
```

> **Note:** Zero external cloud databases (PostgreSQL, Supabase, Firebase) or third-party tracking scripts (Google Analytics, Segment) are required.

---

## 5. Available NPM Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `next dev` | Starts the Next.js development server |
| `build` | `next build` | Compiles the production build and pre-renders static routes |
| `start` | `next start` | Starts the Next.js production server |
| `lint` | `next lint` | Runs Next.js ESLint checks |
