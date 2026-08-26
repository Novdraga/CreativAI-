# 05 — MVP Backlog

> **Document:** `05-mvp-backlog.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §42–52, §73–75.
> **Related:** all documents in `/docs`; `implementation_plan.md`.

---

## 1. Phase Map

| Phase | Name | Gate (§75) |
|-------|------|-----------|
| 0 | Product Specification | Gate 1 — Product Definition approved |
| 1 | Data Foundation | Gate 2 — Data Model approved |
| 2 | Design System | Gate 3 — Design System approved |
| 3 | Core Website | Gate 4 — Core website functional |
| 4 | Decision System V1 | Gate 5 — Decision system functional |
| 5 | Evidence & Benchmarks | Gate 6 — Evidence/benchmark system functional |
| 6 | Content MVP | Gate 7 — Content MVP complete |
| 7 | Monetization | (tracked) |
| 8 | SEO / GEO | Gate 8 — SEO/analytics ready |
| 9 | Validation & Infrastructure | Gates 9–10 |

Current status: **Phase 0 in progress** (this documentation set). Phases 3+ contain zero code today by order.

## 2. Phase 0 — Product Specification

Deliverables: this 15-document set + `implementation_plan.md`.
Tasks:
- [x] Archive legacy docs (PMO-003 Task 1)
- [x] Create implementation plan (Task 2)
- [ ] Documents 01–15 created and cross-consistent
Exit criteria (Directive §42): no essential ambiguity around "what are we building?"

## 3. Phase 1 — Data Foundation

- [ ] Finalize schemas from `03-data-schema.md` into actual JSON files under `/data`
- [ ] Populate Tool schema for first tools (cap: 12–15 total)
- [ ] Workflow, Comparison, Alternative, Benchmark schemas instantiated
- [ ] P.A.C.E score records with evidence links (`08`, `09`)
- [ ] Research Agent verifies pricing/terms from official sources before entry (`09-evidence-model.md` §5)
Exit criteria: 12–15 tools fully structured; every volatile fact has `last_verified` + `source`.

## 4. Phase 2 — Design System

- [ ] Implement tokens and components defined in `04-design-system.md`
- [ ] Responsive behavior per breakpoints; accessibility pass per §63 of Directive
Exit criteria: consistent, reusable UI system.

## 5. Phase 3 — Core Website

Build (per `02-info-architecture.md`): Homepage · Tools index · Tool Page · Categories · Workflows · Comparisons · Alternatives · About/Methodology.
Explicitly excluded: dashboard, authentication.
Tool Page must ship all 15 sections of Directive §27.

## 6. Phase 4 — Decision System V1 (Rules-Based)

- [ ] Inputs: Goal, Budget, Experience, Content type, Required capabilities, Commercial rights, Quality preference (Directive §11)
- [ ] Scoring rules over structured tool data → Recommendation
- [ ] "Why this recommendation?" reasons rendered via Verdict Block (Directive §13)
No AI API, no ML, no vector DB, no embeddings (Directive §11, §35, §36).

## 7. Phase 5 — Evidence & Benchmarks

- [ ] 3–5 hands-on tests executed under uniform protocol (`09-evidence-model.md` §4)
- [ ] P.A.C.E scores finalized with evidence links
- [ ] True Cost panels live on Tool Pages (`13-true-cost-model.md`)
- [ ] `last_verified` surfaced everywhere data appears
This phase is critical for trust (Directive §47).

## 8. Phase 6 — Content MVP

Targets (locked): 12–15 tools · 5–10 workflows · 5–10 comparisons · 5–10 alternatives · 3–5 benchmarks · 3–5 decision pages.

## 9. Phase 7 — Monetization

- [ ] Affiliate links, outbound tracking, CTA measurement, conversion tracking
Rule: recommendations never change because of commission (Directive §49).

## 10. Phase 8 — SEO / GEO Implementation

Execute the technical checklist from `14-seo-geo-strategy.md` §6 (metadata, canonicals, sitemap, robots, structured data, internal linking, topic clusters, intent pages). Content structure already supports it from day one.

## 11. Phase 9 — Validation & Infrastructure

Monitor Directive §52 metrics; North Star = Qualified Decision Sessions (`01-product-spec.md` §10).
Infrastructure ordering (Directive §59): GitHub → Hosting → Database only when needed → Storage if needed → Auth if needed → Analytics → Email. Verify current prices/limits at execution time; goal is lowest practical cost without compromising reliability.

## 12. First Execution Target (Directive §76)

Before broad building: the smallest complete vertical slice — Homepage → One Workflow → Three Tools → Comparison → Recommendation → Tool Page → CTA. Detailed plan: `07-vertical-slice-plan.md`.

## 13. Definitions of Done

- **Task DoD (§73):** implemented, tested, no regression, UX/accessibility verified where relevant, docs updated, git state intentional, reported per §72 format.
- **MVP Done (§74):** clear value proposition; 12–15 high-quality tools; Stack Builder V1 working with explainable recommendations; P.A.C.E + Evidence + pricing verification + commercial-use info present; build/tests/responsive/accessible/fast; affiliate tracking ready.

## 14. Anti-Scope-Creep Checkpoint (Directive §69)

Every proposed addition answers: solves core problem? increases decision quality? needed by MVP? deferrable? execution cost? architecture impact? If not necessary → **DEFER**.
