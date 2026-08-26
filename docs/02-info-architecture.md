# 02 — Information Architecture

> **Document:** `02-info-architecture.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §25–26.
> **Related:** `01-product-spec.md` (scope), `03-data-schema.md` (entities behind routes).

---

## 1. Site Hierarchy (Initial Structure)

Per Directive §25 — this structure may change only if data or SEO research proves a better structure:

```text
/
├── tools                      # Tools index (decision-first, not a directory wall)
│   └── tools/[tool]           # Tool Page (15 sections, see §27 of Directive)
├── categories
│   └── categories/[category]  # 5 categories at MVP
├── workflows
│   └── workflows/[workflow]   # Workflow pages (steps + tool mapping)
├── compare
│   └── compare/[tool-a]-vs-[tool-b]
├── alternatives
│   └── alternatives/[tool]
├── best
│   └── best/[use-case]        # Decision pages ("best X for Y")
├── stacks
│   └── stacks/[stack]         # Curated stack landing pages
└── about                      # Methodology & trust pages
```

## 2. Route Inventory (MVP Budget)

| Route pattern | Count | Source entity |
|---------------|-------|---------------|
| `/tools` | 1 | Static index |
| `/tools/[tool]` | ≤ 15 | `tools.json` |
| `/categories/[category]` | 5 | Fixed taxonomy |
| `/workflows/[workflow]` | 5–10 | `workflows.json` |
| `/compare/[tool-a]-vs-[tool-b]` | 5–10 | `comparisons.json` |
| `/alternatives/[tool]` | 5–10 | `alternatives.json` |
| `/best/[use-case]` | 3–5 | Decision pages |
| `/stacks/[stack]` | small set | Derived from workflows |
| `/about` (+ methodology) | 1–2 | Static |
| `/` (Homepage) | 1 | Static |

Every published page must add real value; no auto-generated low-value pages (Directive §23).

## 3. Homepage Specification (Directive §26)

The homepage must not look like a directory.

1. **Hero** starts from the problem: **"Build the right AI stack for your content."**
2. Prompt: **"What are you trying to create?"**
3. Goal options: YouTube Shorts · Faceless videos · Long-form videos · Podcast · Tutorials · Repurposing.
4. Primary action: **Find my stack** → enters Stack Builder V1 flow (`01-product-spec.md` §6 Journey A).
5. Secondary: quiet tool search (secondary action only, never the primary path).

## 4. Navigation Model

### Header (global, persistent)

- Logo (→ `/`)
- Tools (`/tools`)
- Workflows (`/workflows`)
- Compare (`/compare` index or curated list)
- About / Methodology (`/about`)
- Prominent CTA button: **Find my stack**

### Footer

Category links (5) · Popular comparisons · Popular alternatives · Methodology · Editorial/trust statement · Last-verified policy.

### Breadcrumbs

On all entity pages, reflecting hierarchy:

```text
Home / Tools / [Tool Name]
Home / Compare / [A] vs [B]
Home / Best / [Use Case]
```

## 5. Entry Points by Intent

| User intent | Entry route | Defined in |
|-------------|-------------|-----------|
| "Build my stack" | `/` → Stack Builder | `01-product-spec.md` J-A |
| "Compare two tools" | `/compare/[a]-vs-[b]` | `10-comparison-model.md` |
| "Leaving tool X" | `/alternatives/[tool]` | `11-alternative-model.md` |
| "Best tool for job Y" | `/best/[use-case]` | `14-seo-geo-strategy.md` clusters |
| "Evaluate tool Z" | `/tools/[tool]` | `08-evaluation-model.md` |
| "Full pipeline guidance" | `/workflows/[workflow]` | `12-workflow-model.md` |

## 6. URL Rules

- Lowercase, hyphenated slugs derived from entity `slug` fields (`03-data-schema.md`).
- Comparison slug format locked: `[tool-a-slug]-vs-[tool-b-slug]`.
- No trailing parameters in canonical URLs; stable URLs are a prerequisite for Phase 8 SEO work (`14-seo-geo-strategy.md`).

## 7. Non-Navigation Pages (Deferred)

No account, dashboard, admin, or auth-gated routes in MVP (`01-product-spec.md` §8). Stack Builder results render as an in-page step, not a separate gated route.
