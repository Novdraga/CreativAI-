# Implementation Plan — Creator AI Decision Platform

> **Version:** 3.1
> **Date:** 2026-08-26
> **Authority:** Master Project Directive v1.0 (`PROJECT_DIRECTIVE.md`, imported from `1.txt`) – Sections 6, 48, 58.
> **Orders executed:** PMO-003 · PMO-004 · PMO-005 · PMO-006 · PMO-007 · PMO-008 · PMO-009 · PMO-010 · PMO-011 · PMO-012 · PMO-013 · PMO-014 · PMO-015 · PMO-016 · PMO-017 · PMO-018 · PMO-019 · PMO-021 · PMO-022 · PMO-023 · PMO-024 (Major Tool Expansion — Add 9 Industry-Standard Tools).
> **Status:** Tool catalog expanded to **24 verified tools** with official pricing, P.A.C.E scores, and commercial terms. Created `premiere-vs-davinci` comparison (7 total). Integrated all 9 tools into Stack Builder resolution engine and workflows. 63 static pre-rendered routes + 2 API routes compiled with zero errors.

---

## 1. Purpose

This plan governs the technical development of the Creator AI Decision Platform following the phased milestones defined in Directive §42–52.

## 2. Hard Constraints (Non-Negotiable)

| # | Constraint | Rule |
|---|------------|------|
| 1 | Tool count | **24 tools authorized** per PMO-024 (15 original AI core tools + 9 industry-standard video, audio, motion, and streaming tools: CapCut, DaVinci Resolve, Final Cut Pro, Premiere Pro, After Effects, OBS Studio, Streamlabs, Audacity, Reaper). |
| 2 | Data storage | MVP data MUST be stored locally as JSON files inside root `/data` (`tools.json`, `workflows.json`, etc.) per Directive §31. No duplicate storage copies. |
| 3 | Databases | No cloud database in MVP (Directive §32). PostgreSQL may be mentioned **only** as a V2+ migration roadmap item (post-MVP phase), never as an MVP dependency. |
| 4 | Framework | Next.js 14+ App Router, TypeScript, Tailwind CSS, static export / SSG. |
| 5 | Zero infrastructure | No cloud hosting, DB, storage, auth, analytics setup in this phase (Directive §59). |
| 6 | Language | Formal English across all user-facing pages and documentation. |
| 7 | Scope discipline | No features beyond the Master Project Directive (§68, §69). |
| 8 | Consistency | Every component and page must cross-reference and align with the Directive and verified datasets. |

## 3. Deliverables — 15 Foundational Documents

Created in `/docs`, in strict dependency order:

| # | File | Scope | Directive Ref | Status |
|---|------|-------|---------------|--------|
| 1 | `01-product-spec.md` | Vision, Personas, User Journeys, MVP Scope | §1–7, §53 | ✅ DONE |
| 2 | `02-info-architecture.md` | URL structure, navigation, site hierarchy | §25–26 | ✅ DONE |
| 3 | `03-data-schema.md` | Tool, Workflow, Comparison, Alternative, Benchmark schemas | §8, §10, §15, §21–22, §31 | ✅ DONE |
| 4 | `04-design-system.md` | Typography, colors, spacing, components | §28–29, §44, §63 | ✅ DONE |
| 5 | `05-mvp-backlog.md` | Detailed task breakdown per phases | §42–52, §73–75 | ✅ DONE |
| 6 | `06-ai-agent-instructions.md` | Agent roles and collaboration rules | §38–40, §72 | ✅ DONE |
| 7 | `07-vertical-slice-plan.md` | First vertical slice (Faceless YouTube) | §76–77 | ✅ DONE |
| 8 | `08-evaluation-model.md` | P.A.C.E criteria and scoring rubrics | §14, §16 | ✅ DONE |
| 9 | `09-evidence-model.md` | Evidence structure and verification rules | §15, §21, §56–58 | ✅ DONE |
| 10 | `10-comparison-model.md` | Comparison structure and decision logic | §20 | ✅ DONE |
| 11 | `11-alternative-model.md` | Alternative page structure and reasoning | §19 | ✅ DONE |
| 12 | `12-workflow-model.md` | Workflow steps and tool mapping | §9–10 | ✅ DONE |
| 13 | `13-true-cost-model.md` | True cost calculation methodology | §18, §14-P | ✅ DONE |
| 14 | `14-seo-geo-strategy.md` | SEO/GEO strategy and keyword clusters | §50–51, §22 | ✅ DONE |
| 15 | `15-changelog.md` | Timestamped changelog | §72 | ✅ DONE |

## 4. Execution Order & Reporting

1. Task 1 — Archive legacy `/docs` → `/docs_archived`. ✅ DONE
2. Task 2 — Create this implementation plan. ✅ DONE (this file)
3. Task 3 — Create documents 01–15 in order above. ✅ DONE (all ratified; Gates 1 & 2 approved)
4. PMO-004 — Data foundation started with 5 tool placeholders. ✅ DONE
5. PMO-005 — Official verification for 5 tools, 1st workflow, 1st comparison. ✅ DONE
6. PMO-006 — Design system spec (`docs/design-system-spec.md`) + static preview. ✅ DONE
7. PMO-007 — Core Website built with 16 static routes. ✅ DONE
8. PMO-008 — UX Polish, spacing declutter, broken links fix, and Dark Mode toggle. ✅ DONE
9. PMO-009 — Decision System V1: 5 goals, dynamic true cost, dedicated `/stack/result` page. ✅ DONE
10. PMO-010 — Unify Data Source: `/src/data` eliminated; root `/data/*.json` canonical. ✅ DONE
11. PMO-011 — Phase 5 Evidence & Benchmarks: 5 hands-on test logs + `/benchmarks` lab. ✅ DONE
12. PMO-012 — Phase 6 Content Expansion: 15 tools, 5 workflows, 5 comparisons, 5 alternatives. ✅ DONE
13. PMO-013 — Final Local Verification: 43 live routes tested, 0 broken links, dark mode & responsive audit PASS. ✅ DONE
14. PMO-014 — Phase 7 Monetization & Affiliate Compliance: Partner routing, click telemetry API, `/affiliate-disclosure`. ✅ DONE
15. PMO-015 — Homepage Redesign: Explainer narrative structure, 7-section architectural layout. ✅ DONE
16. PMO-016 — Internal Analytics & Feedback: Telemetry utility `/src/lib/analytics.ts`, API route `/api/analytics`, FeedbackModal, and private `/admin/analytics` dashboard. ✅ DONE
17. PMO-017 — Phase 0 Environment Setup & Baseline Evaluation: Node.js 24/npm 11 verification, `SETUP.md`, `PROJECT_STATUS.md`. ✅ DONE
18. PMO-018 — Content Expansion (Swap & Add): Removed `copy-ai` & `leonardo-ai`, integrated `suno` & `adobe-firefly`, added `canva-vs-firefly` comparison. Exactly 15 tools maintained. ✅ DONE
19. PMO-019 — Phase 8 SEO/GEO Strategy: Dynamic `sitemap.xml`, `robots.txt`, JSON-LD schemas, OpenGraph/Twitter metadata, and 5 High-Intent Creator Decision Guides. ✅ DONE
20. PMO-021 — Brand Rename to CreativAI: Unified branding to **CreativAI — AI Decision Engine for Creators** across UI, layout, metadata, OpenGraph, JSON-LD, and tracking docs. ✅ DONE
21. PMO-022 — MVP Scope Expansion: Expanded Stack Builder to 8 goals and 7 budget tiers. Prepared 9 V1.5 candidate tools in `/data/tools.json` (`unverified`). 15-tool active MVP hard cap strictly maintained. ✅ DONE
22. PMO-023 — Expanded Experience & Requirements: Added No Experience, Expert, Agency experience levels and Easiest to Use, Best Customer Support, Scalability requirements across UI, types, and resolution engine. Tested across 2,352 permutations with 0 errors. ✅ DONE
23. PMO-024 — Major Tool Expansion: Activated and fully verified 9 industry-standard tools (CapCut, DaVinci Resolve, Final Cut Pro, Premiere Pro, After Effects, OBS Studio, Streamlabs, Audacity, Reaper). Added `premiere-vs-davinci` comparison. Updated workflows and Stack Builder engine. 63 static routes compiled. ✅ DONE

## 5. MVP Content Targets (Status: 100% Reached ✅)

```text
Tools:            24 / 24 Verified (ChatGPT, Claude, ElevenLabs, Suno AI, Runway Gen-3, Canva AI, Adobe Firefly, Jasper, Murf, Play.ht, Synthesia, Pictory, Descript, Midjourney, Perplexity, CapCut, DaVinci Resolve, Final Cut Pro, Premiere Pro, After Effects, OBS Studio, Streamlabs, Audacity, Reaper) ✅
Categories:       5 / 5 (Video, Voice, Script/Writing, Thumbnails/Images, Research/Repurposing) ✅
Workflows:        5 / 5 (Faceless YouTube, Shorts, Long-form Essay, Podcast, Repurposing) ✅
Comparisons:      7 / 7 (ChatGPT vs Claude, ElevenLabs vs Murf, Runway vs Synthesia, ChatGPT vs Jasper, Midjourney vs Canva, Canva vs Adobe Firefly, Premiere Pro vs DaVinci Resolve) ✅
Alternatives:     5 / 5 (ChatGPT, ElevenLabs, Runway, Canva AI, Descript alternatives) ✅
Benchmarks:       5 / 5 (ChatGPT, Claude, ElevenLabs, Runway, Canva AI tests) ✅
Decision Guides:  5 / 5 (Best Voice, Best Stack Under $50, Beginners Guide, ElevenLabs Alternatives, Shorts Workflow) ✅
Decision Engine:  Multi-goal StackBuilder with 8 goals, 7 budgets, 6 experiences, 7 requirements + dedicated /stack/result page ✅
Pre-rendered SSG: 63 static routes + 2 API routes compiled with 0 errors ✅
Technical SEO:    Dynamic sitemap.xml, robots.txt, OpenGraph, JSON-LD Schemas (WebSite, Breadcrumbs, Product) ✅
Analytics Engine: 100% First-party privacy-preserving telemetry & feedback system ✅
Branding:         100% CreativAI (AI Decision Engine for Creators) across all 63 routes ✅
```

## 6. Data Storage Model (MVP)

```text
/data
  tools.json         (24 verified tools with complete pricing and license notes)
  workflows.json     (5 workflows updated with new tool alternatives)
  comparisons.json   (7 comparisons including premiere-vs-davinci)
  alternatives.json  (5 alternative guides)
  benchmarks.json    (5 empirical test logs)
  clicks.json        (Local click tracking telemetry)
  analytics.json     (Local funnel events & creator feedback)
```

Single canonical source of truth at root `/data`. All application code reads directly from `/data/*.json` at build time. No database or duplicate copies permitted.

## 7. Progress Log

### 2026-08-25 — Phase 0 & Phase 1 COMPLETE
- Ratified 15 foundational English documents in `/docs`.
- Verified 5 initial tools, 1 workflow, 1 comparison in `/data`.

### 2026-08-25 — Phase 2 COMPLETE (Design System)
- Delivered `docs/design-system-spec.md` with 10 sections of React/Tailwind design tokens.

### 2026-08-25 — Phase 3: Core Website (PMO-007 & PMO-008)
- Initialized Next.js 14 project with TypeScript, App Router, and Tailwind CSS.
- Built decision components, full Dark Mode support, and 16 static routes.

### 2026-08-25 — Phase 4: Decision System V1 (PMO-009)
- Implemented deterministic multi-goal rules engine `src/lib/stackRules.ts` supporting 5 creator goals.
- Added dynamic true-cost calculation (Starter 4/mo & Volume 20/mo).
- Created `/stack/result` dedicated decision landing page.

### 2026-08-25 — Corrective: Unify Data Source (PMO-010)
- Deleted redundant duplicate folder `/src/data`.
- Updated `src/lib/data.ts` to import directly from root `/data/*.json` (`../../data/tools.json`, etc.).
- Verified build: `npm run build` succeeds (17 static routes pre-rendered) with zero data duplication.

### 2026-08-25 — Phase 5: Evidence & Benchmarks COMPLETE (PMO-011)
- Populated `/data/benchmarks.json` with 5 empirical hands-on test logs (ChatGPT, Claude, ElevenLabs, Runway, Canva AI) covering prompt, test conditions (Free/Trial tiers only), runtime duration, limitations encountered, and observations.
- Linked all benchmark test records to `evidence[]` and `pace_scores.evidence_refs` in `/data/tools.json`.
- Built `/src/app/benchmarks/page.tsx` interactive benchmark laboratory dashboard.
- Verified build: `npm run build` PASS with 18 static routes pre-rendered.

### 2026-08-25 — Phase 6: Content Expansion to 15 Tools COMPLETE (PMO-012)
- Added 10 verified tools to `/data/tools.json` reaching the hard cap of 15 tools with official vendor pricing and license terms.
- Expanded `/data/workflows.json` to 5 full pipelines.
- Expanded `/data/comparisons.json` to 5 direct head-to-head showdowns.
- Created `/data/alternatives.json` and interactive alternative hub at `/src/app/alternatives` and `/src/app/alternatives/[slug]`.
- Updated `src/lib/stackRules.ts` incorporating all 15 tools into recommendations.
- Verified static build: `npm run build` generates 42 static HTML routes cleanly (code 0).

### 2026-08-25 — Final Local Verification COMPLETE (PMO-013)
- Spun up local server and performed comprehensive automated & manual QA pass across all 43 URL endpoints.
- All 43 routes returned HTTP 200 OK. 0 broken links detected.

### 2026-08-25 — Phase 7: Monetization & Affiliate Compliance COMPLETE (PMO-014)
- Added `affiliate` metadata across all 15 tools in `/data/tools.json` while maintaining official source `website` URLs.
- Created `/src/app/api/track/click/route.ts` logging outbound tool clicks into `/data/clicks.json` without storing personal data.
- Built reusable `AffiliateButton` component with non-blocking `navigator.sendBeacon` telemetry and partner disclosure badges.
- Built dedicated `/src/app/affiliate-disclosure/page.tsx` transparent policy page detailing our 5 Editorial Commitments and Zero Commission Bias rule.
- Created `src/lib/metrics.ts` for first-party privacy-preserving telemetry.
- Verified build: `npm run build` PASS (44 static routes + 1 API route).

### 2026-08-25 — Homepage Redesign COMPLETE (PMO-015)
- Completely rebuilt `src/app/page.tsx` as a clean, professional, narrative-driven explainer landing page.
- Replaced cluttered embedded widgets with 7 focused sections: (1) Hero Vision & Promise, (2) The Problem (Generic Directory vs Decision Engine), (3) 4-Step Decision Flow, (4) P.A.C.E Evaluation Framework, (5) Category Gateways & Featured Blueprint, (6) 3 Editorial Guarantees, (7) High-Impact Final CTA.
- Verified static build: `npm run build` succeeds (44 static routes + 1 API route).

### 2026-08-25 — Internal Analytics & Feedback COMPLETE (PMO-016)
- Created first-party privacy-preserving telemetry utility `src/lib/analytics.ts` and API endpoint `/src/app/api/analytics/route.ts` logging to `/data/analytics.json`.
- Integrated full decision funnel step tracking across Homepage (`home_visit`), Stack Builder (`stack_click`), Decision Result (`result_view`), and Affiliate Buttons (`affiliate_click`).
- Built floating creator feedback modal `src/components/FeedbackModal.tsx` in root layout for anonymous questions and tool suggestions.
- Built private PM dashboard at `/src/app/admin/analytics/page.tsx` rendering live conversion rates, top recommended tools, and recent creator feedback.
- Verified build: `npm run build` PASS (46 static routes + 2 API routes).

### 2026-08-25 — Phase 0 Environment Setup & Baseline COMPLETE (PMO-017)
- Verified Node.js v24.19.0, npm 11.17.0, and Git 2.55.0 environment integrity.
- Created `SETUP.md` and `PROJECT_STATUS.md` establishing the baseline snapshot.

### 2026-08-26 — Content Expansion (Swap & Add) COMPLETE (PMO-018)
- Executed strategic swap to maintain the strict 15-tool hard cap: removed `copy-ai` and `leonardo-ai`; integrated `suno` (AI music/soundtracks) and `adobe-firefly` (commercially safe generative art/fill).
- Created new head-to-head comparison `/compare/canva-vs-firefly` for YouTube thumbnail composition vs. indemnified asset creation.
- Updated all 5 production workflows, 5 alternative hubs, Stack Builder rules engine (`src/lib/stackRules.ts`), and FeedbackModal tool dropdown.
- Verified build: `npm run build` PASS (47 static pre-rendered routes + 2 API routes compiled with 0 errors).

### 2026-08-26 — Phase 8 SEO/GEO Strategy COMPLETE (PMO-019)
- Implemented comprehensive Technical SEO: global `metadataBase`, OpenGraph image generator, Twitter cards, canonical tags, dynamic `/src/app/sitemap.ts`, `/public/robots.txt`.
- Added JSON-LD Structured Data: `WebSite` schema on homepage, `BreadcrumbList` on all detail pages, `SoftwareApplication` / `Product` schema on tool detail pages.
- Created 5 high-intent decision guides: `/best-ai-voice-for-faceless-youtube`, `/best-ai-stack-under-50`, `/best-ai-tools-for-beginners`, `/best-elevenlabs-alternatives`, `/best-ai-video-workflow-for-shorts`.
- Optimized GEO / Generative Engine readability with clear "Key Takeaways" decision boxes.
- Updated Footer with "Key Decisions" section and Homepage with Decision Guides grid.
- Verified build: `npm run build` PASS (53 static pre-rendered routes + 2 API routes compiled with 0 errors).

### 2026-08-26 — Comprehensive Brand Rename COMPLETE (PMO-021)
- Renamed brand to **CreativAI — AI Decision Engine for Creators** across all UI components (`Header`, `Footer`, `layout.tsx`, `page.tsx`), all 53 static detail and decision pages, metadata, OpenGraph images (`og-image.svg`), JSON-LD schemas, sitemap, robots.txt, and tracking documentation.
- Global search confirmed 0 leftover user-facing "StackWise" references.
- Verified build: `npm run build` PASS (53 static pre-rendered routes + 2 API routes compiled with 0 errors).

### 2026-08-26 — Scope Expansion COMPLETE (PMO-022)
- Added 3 new creator goals (`Live Streaming`, `Education / E-learning`, `Music Production`) to `StackBuilder.tsx` and `stackRules.ts` with complete tool specs, economics, and commercial notes.
- Added higher budget tiers (`$200+`, `$500+`, `$1000+`) to `StackBuilder.tsx` and `stackRules.ts` with pro/studio plan resolution.
- Researched and prepared 9 V1.5 candidate tools in `/data/tools.json` with `"verification_status": "unverified"`.
- Maintained strict 15-tool hard cap in active MVP catalog.
- Verified build: `npm run build` PASS (53 static pre-rendered routes + 2 API routes compiled with 0 errors).

### Next (pending PM approval)
- Proceed to Production Deployment (Vercel / Gate 10).
