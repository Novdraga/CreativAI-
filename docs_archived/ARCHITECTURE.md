# Stackwise — Architecture

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** DATA_MODEL.md, PRODUCT_REQUIREMENTS.md, DESIGN_SYSTEM.md

---

## 1. Architecture Principles

1. **Modular monolith** — Clear module boundaries, single deployable unit. No premature microservices.
2. **Server-side first** — SSR/SSG for all content pages. CSR only for interactive features.
3. **Convention over configuration** — Follow framework conventions; minimize custom build tooling.
4. **Dependencies are liabilities** — Every dependency must earn its place. Prefer platform features.
5. **Progressive disclosure of complexity** — Simple things should be simple. Complex things should be possible.
6. **Infrastructure-agnostic design** — Core logic does not depend on specific hosting, database, or service providers.

---

## 2. Technology Decisions

### Core Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15+ (App Router) | SSR/SSG for SEO, React ecosystem, Vercel-native, server components |
| Language | TypeScript (strict mode) | Type safety, refactoring confidence, self-documenting |
| Styling | CSS Modules + CSS custom properties | No framework lock-in, performance, full control |
| Data (MVP) | JSON data files + TypeScript types | No infrastructure dependency, version-controlled, type-safe |
| Data (Post-MVP) | PostgreSQL | Relational model, JSON support, mature ecosystem |
| Hosting | Vercel | Next.js native, edge network, preview deployments |
| Object Storage | Cloudflare R2 | Evidence files, images, media |
| Repository | GitHub | Standard, CI/CD integration |

### Explicitly Avoided

| Technology | Reason |
|-----------|--------|
| Tailwind CSS | Not requested; CSS Modules provide adequate styling with more control |
| GraphQL | Overkill for MVP data access patterns |
| Microservices | Premature for current scale |
| NoSQL databases | Relational model is better suited to structured tool data |
| Headless CMS | Content is structured data, not editorial content requiring a CMS |
| AI/ML infrastructure | No AI-powered features in MVP |
| WebSocket/real-time | No real-time features needed |

---

## 3. System Architecture Overview

### MVP Architecture (Phases 2–6)

```
┌─────────────────────────────────────────────────────────────┐
│                        VERCEL                                │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                  Next.js Application                  │    │
│  │                                                       │    │
│  │  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  │    │
│  │  │   Pages     │  │  Components  │  │   Styles   │  │    │
│  │  │ (App Router)│  │  (React)     │  │(CSS Modules)│  │    │
│  │  └──────┬──────┘  └──────────────┘  └────────────┘  │    │
│  │         │                                             │    │
│  │  ┌──────┴──────────────────────────────────────┐     │    │
│  │  │              Domain Layer                    │     │    │
│  │  │  ┌────────┐ ┌──────────┐ ┌───────────────┐ │     │    │
│  │  │  │ Tools  │ │Evaluation│ │  Comparisons  │ │     │    │
│  │  │  │ Module │ │  Module  │ │    Module     │ │     │    │
│  │  │  └────┬───┘ └────┬─────┘ └───────┬───────┘ │     │    │
│  │  │       │          │               │          │     │    │
│  │  │  ┌────┴──────────┴───────────────┴───────┐  │     │    │
│  │  │  │         Data Access Layer             │  │     │    │
│  │  │  │    (reads JSON files at build time)   │  │     │    │
│  │  │  └───────────────┬───────────────────────┘  │     │    │
│  │  └─────────────────-┼──────────────────────────┘     │    │
│  │                     │                                 │    │
│  │              ┌──────┴───────┐                        │    │
│  │              │  /data/*.json │                        │    │
│  │              │  (in repo)    │                        │    │
│  │              └───────────────┘                        │    │
│  └───────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────-┘
```

### Future Architecture (Phases 8–14)

```
┌──────────────────────────────────────────────────────────────┐
│                          VERCEL                               │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                  Next.js Application                     │ │
│  │                                                          │ │
│  │  ┌──────────┐  ┌──────────┐  ┌───────┐  ┌───────────┐ │ │
│  │  │  Pages   │  │Components│  │ Styles │  │   Admin   │ │ │
│  │  │(SSR/SSG) │  │ (React)  │  │  (CSS) │  │  (Auth'd) │ │ │
│  │  └────┬─────┘  └──────────┘  └───────┘  └─────┬─────┘ │ │
│  │       │                                        │        │ │
│  │  ┌────┴────────────────────────────────────────┴─────┐ │ │
│  │  │                  Domain Layer                      │ │ │
│  │  │  Tools │ Evaluations │ Comparisons │ Stacks │ ...  │ │ │
│  │  └───────────────────────┬────────────────────────────┘ │ │
│  │                          │                               │ │
│  │  ┌───────────────────────┴────────────────────────────┐ │ │
│  │  │                 Data Access Layer                    │ │ │
│  │  │            (Repository Pattern / ORM)               │ │ │
│  │  └──────────┬──────────────────────┬──────────────────┘ │ │
│  └─────────────┼──────────────────────┼────────────────────┘ │
│                │                      │                       │
│         ┌──────┴───────┐    ┌────────┴─────────┐            │
│         │  PostgreSQL  │    │  Cloudflare R2   │            │
│         │  (Managed)   │    │  (Media/Evidence)│            │
│         └──────────────┘    └──────────────────┘            │
└──────────────────────────────────────────────────────────────┘

         ┌──────────────┐      ┌──────────────────┐
         │  Firebase    │      │   Analytics      │
         │  Auth        │      │   Service        │
         └──────────────┘      └──────────────────┘
```

---

## 4. Application Layer Structure

### Directory Structure (MVP)

```
/
├── docs/                      # Project documentation (this directory)
├── data/                      # Structured data files (MVP data layer)
│   ├── tools/                 # Tool JSON files
│   ├── categories/            # Category definitions
│   ├── evaluations/           # P.A.C.E. evaluation records
│   ├── comparisons/           # Comparison data
│   ├── alternatives/          # Alternative relationships
│   └── stacks/                # Stack definitions
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── tools/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx   # Tool detail page
│   │   │   └── page.tsx       # Tool listing (by category)
│   │   ├── compare/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Comparison page
│   │   ├── alternatives/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Alternatives page
│   │   ├── best/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Best-for pages
│   │   ├── stacks/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Stack guide page
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Category page
│   │   ├── methodology/
│   │   │   └── page.tsx       # P.A.C.E. methodology page
│   │   ├── about/
│   │   │   └── page.tsx       # About page
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable React components
│   │   ├── ui/                # Generic UI components
│   │   ├── tools/             # Tool-specific components
│   │   ├── comparison/        # Comparison-specific components
│   │   ├── stacks/            # Stack-specific components
│   │   ├── pace/              # P.A.C.E. score components
│   │   ├── layout/            # Layout components (header, footer, nav)
│   │   └── seo/               # SEO/metadata components
│   ├── lib/                   # Domain logic and utilities
│   │   ├── data/              # Data access functions
│   │   │   ├── tools.ts       # Tool data access
│   │   │   ├── evaluations.ts # Evaluation data access
│   │   │   ├── comparisons.ts # Comparison data access
│   │   │   ├── stacks.ts      # Stack data access
│   │   │   └── categories.ts  # Category data access
│   │   ├── types/             # TypeScript type definitions
│   │   │   ├── tool.ts
│   │   │   ├── evaluation.ts
│   │   │   ├── comparison.ts
│   │   │   ├── stack.ts
│   │   │   └── index.ts
│   │   ├── utils/             # Utility functions
│   │   │   ├── pace.ts        # P.A.C.E. calculation utilities
│   │   │   ├── formatting.ts  # Display formatting
│   │   │   └── seo.ts         # SEO utilities
│   │   └── constants/         # Application constants
│   ├── styles/                # Global styles and design tokens
│   │   ├── globals.css        # CSS custom properties, reset, global styles
│   │   ├── tokens.css         # Design tokens
│   │   └── components/        # Shared component styles
│   └── config/                # Application configuration
│       ├── site.ts            # Site metadata
│       └── navigation.ts      # Navigation structure
├── public/                    # Static assets
│   ├── images/
│   │   └── tools/             # Tool logos
│   ├── fonts/                 # Self-hosted fonts
│   ├── sitemap.xml            # Generated sitemap
│   └── robots.txt
├── tests/                     # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── scripts/                   # Build/utility scripts
│   ├── validate-data.ts       # Data validation script
│   └── generate-sitemap.ts    # Sitemap generation
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. Module Architecture

### Domain Modules

Each domain area is a self-contained module with clear boundaries:

| Module | Responsibility | Key Functions |
|--------|---------------|---------------|
| **tools** | Tool data access, display logic | `getToolBySlug()`, `getToolsByCategory()`, `getAllTools()` |
| **evaluations** | P.A.C.E. evaluation access, score computation | `getCurrentEvaluation()`, `getEvaluationHistory()`, `computeComposite()` |
| **comparisons** | Comparison data, side-by-side logic | `getComparison()`, `getComparisonsByTool()` |
| **alternatives** | Alternative relationships, grouping | `getAlternatives()`, `getAlternativesByReason()` |
| **stacks** | Stack data, cost calculation | `getStack()`, `calculateStackCost()` |
| **categories** | Category data, tool grouping | `getCategory()`, `getToolsInCategory()` |

### Module Rules

1. Modules may import from `types/` and `utils/`
2. Modules may NOT import directly from other modules' internal files
3. Cross-module data needs are resolved through composition in the page layer
4. Each module exports a clean public API through its index file

---

## 6. Rendering Strategy

### Page-Level Rendering Decisions

| Page Type | Rendering | Rationale |
|-----------|-----------|-----------|
| Tool pages | SSG (Static Generation) | Content changes infrequently; maximum SEO performance |
| Comparison pages | SSG | Same as tool pages |
| Alternative pages | SSG | Same as tool pages |
| Best-for pages | SSG | Same as tool pages |
| Stack pages | SSG | Same as tool pages |
| Category pages | SSG | Same as tool pages |
| Homepage | SSG | Mostly static content |
| Methodology page | SSG | Fully static |
| About page | SSG | Fully static |
| Stack Builder (future) | SSR + CSR | Interactive — needs client-side state |
| Admin (future) | CSR | Authenticated, not SEO-relevant |
| Search (future) | SSR | Dynamic results, SEO value for some queries |

### Revalidation Strategy (Post-MVP)

When data moves to a database, implement **Incremental Static Regeneration (ISR)** with revalidation on data update via webhook.

---

## 7. Data Access Layer

### MVP: File-Based

```typescript
// Example: src/lib/data/tools.ts

import type { Tool } from '@/lib/types';

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  // Reads from /data/tools/{slug}.json at build time
}

export async function getAllTools(): Promise<Tool[]> {
  // Reads all files from /data/tools/
}

export async function getToolsByCategory(categorySlug: string): Promise<Tool[]> {
  // Filters tools by category
}
```

### Future: Database

The same function signatures will be preserved. Only the internal implementation changes from file reads to database queries. This is the **Repository Pattern** — consumers never know where data comes from.

```typescript
// Future: src/lib/data/tools.ts (same interface, different implementation)

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  // Queries PostgreSQL via ORM
}
```

---

## 8. SEO Architecture

### Technical SEO Infrastructure

| Feature | Implementation |
|---------|---------------|
| Server rendering | Next.js SSG for all content pages |
| Title / Meta | Generated from data via `generateMetadata()` in each page |
| Structured data | JSON-LD in page `<head>` via metadata API |
| Sitemap | Generated at build time from data files |
| Canonical URLs | Set via metadata API per page |
| Open Graph | Generated per page from tool/comparison data |
| robots.txt | Static file in `/public/` |

### URL Structure

```
/                                    # Homepage
/tools/{slug}                        # Tool page (e.g., /tools/elevenlabs)
/compare/{slug}                      # Comparison (e.g., /compare/elevenlabs-vs-playht)
/alternatives/{slug}                 # Alternatives (e.g., /alternatives/elevenlabs)
/best/{slug}                         # Best-for (e.g., /best/ai-voice-for-youtube)
/stacks/{slug}                       # Stack (e.g., /stacks/faceless-youtube-beginner)
/categories/{slug}                   # Category (e.g., /categories/ai-video)
/methodology                        # P.A.C.E. methodology
/about                              # About page
```

---

## 9. Performance Strategy

### Performance Budgets

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint (FCP) | < 1.5s | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Lighthouse |
| Total Blocking Time (TBT) | < 200ms | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Time to Interactive (TTI) | < 3.5s | Lighthouse |
| Page Weight (HTML + CSS + JS) | < 200KB initial | Build analysis |

### Performance Techniques

- **Static generation** for all content pages
- **CSS Modules** — Only loaded styles are shipped
- **Font optimization** — `next/font` for self-hosted fonts with `font-display: swap`
- **Image optimization** — `next/image` for responsive images with lazy loading
- **Code splitting** — Automatic via Next.js App Router
- **No JavaScript for reading** — Content pages are readable without JS

---

## 10. Security Considerations

### MVP Security

| Concern | Approach |
|---------|---------|
| XSS | React's built-in escaping; no `dangerouslySetInnerHTML` without sanitization |
| CSP | Content Security Policy headers via `next.config.ts` |
| HTTPS | Enforced by Vercel |
| Dependencies | Regular `npm audit`; minimal dependency surface |
| Data exposure | No sensitive data in client bundle; data files are public by nature |
| Input validation | TypeScript types for data files; validation script for data integrity |

### Future Security (Post-MVP)

| Concern | Approach |
|---------|---------|
| Authentication | Firebase Auth with server-side session validation |
| Authorization | Role-based access for admin panel |
| Database | Parameterized queries via ORM; no raw SQL |
| API rate limiting | Vercel Edge Middleware |
| CSRF | Next.js built-in protections |

---

## 11. Testing Strategy

### Test Types

| Type | Tool | Scope | When |
|------|------|-------|------|
| Unit | Vitest | Domain logic, utilities, data access | On commit |
| Component | Vitest + Testing Library | React components | On commit |
| Integration | Vitest | Cross-module interactions | On PR |
| E2E | Playwright | Critical user journeys | On PR / Pre-deploy |
| Data validation | Custom script | Data file integrity | On commit |
| Accessibility | axe-core + manual | WCAG compliance | On PR |
| Performance | Lighthouse CI | Core Web Vitals | On deploy |

### Test Coverage Targets

| Area | Coverage Target |
|------|----------------|
| Data access functions | 90%+ |
| P.A.C.E. calculations | 100% |
| URL generation / routing | 100% |
| UI components | 70%+ (behavior-focused) |
| E2E critical paths | All primary user journeys |

---

## 12. Development Workflow

### Branch Strategy

```
main                    # Production branch, always deployable
├── develop             # Integration branch
│   ├── feature/*       # Feature branches
│   ├── fix/*           # Bug fix branches
│   └── content/*       # Content update branches
```

### CI/CD Pipeline

```
Push to feature/* → Lint + Type-check + Unit Tests → Preview Deploy
PR to develop     → Full test suite → Review → Merge
PR to main        → Full test suite + E2E + Lighthouse → Production Deploy
```

---

## 13. Observability (Post-MVP)

### Planned Monitoring

| Aspect | Tool | Phase |
|--------|------|-------|
| Error tracking | Sentry (or Vercel built-in) | Phase 9 |
| Analytics | Plausible or Umami (privacy-focused) | Phase 9 |
| Performance monitoring | Vercel Analytics | Phase 9 |
| Uptime monitoring | Vercel or external | Phase 10 |

**No tracking or analytics in MVP.** Privacy-focused analytics introduced in Phase 9.

---

## 14. Migration Path

### Key Transition Points

| From | To | Trigger | Approach |
|------|----|---------|----------|
| JSON data files | PostgreSQL | Phase 8 (Admin Panel) | Migration script converts JSON to DB rows; data access layer swapped |
| Manual content management | Admin panel | Phase 8 | Admin UI wraps database CRUD |
| No auth | Firebase Auth | Phase 8 | Admin-only initially |
| No analytics | Privacy-focused analytics | Phase 9 | Client-side script addition |
| Static stacks | Interactive Stack Builder | Phase 7 | New client component, same data layer |

### Architectural Invariants

These should NOT change across phases:

1. **URL structure** — Established in MVP, never changed
2. **TypeScript types** — Entity types are the contract; implementations change
3. **Module boundaries** — New modules may be added; existing module APIs are stable
4. **SEO approach** — Server-rendered content pages remain the foundation

---

*End of Architecture.*
