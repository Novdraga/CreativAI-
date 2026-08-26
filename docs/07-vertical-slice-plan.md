# 07 — Vertical Slice Plan

> **Document:** `07-vertical-slice-plan.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §76–77.
> **Related:** `02-info-architecture.md`, `12-workflow-model.md`, `10-comparison-model.md`, `08-evaluation-model.md`.

---

## 1. Principle

Do not build everything at once. The first execution target is the **smallest complete vertical slice**: one thin path through the entire product that proves the core loop.

```text
Homepage ↓ One Workflow ↓ Three Tools ↓ Comparison ↓ Recommendation ↓ Tool Page ↓ CTA
```

If this path works well, we expand it.

## 2. Selected Slice: Faceless YouTube Stack

Per Directive §77 example:

```text
Goal:      Faceless YouTube videos
Workflow:  Script → Voice → Video
Tools:     Three (one per step)
Output:    Comparison + Recommendation + Tool Pages + CTA
```

The slice exercises every core system: workflow model, P.A.C.E evaluation, evidence, true cost, comparison logic, recommendation reasoning, and monetization CTA.

## 3. Slice Components & Acceptance Criteria

| # | Component | Definition source | Acceptance criteria |
|---|-----------|-------------------|---------------------|
| 1 | Homepage entry | `02-info-architecture.md` §3 | Hero starts from problem; goal selection reaches workflow page in ≤ 2 clicks |
| 2 | Workflow page (Faceless YouTube) | `12-workflow-model.md` | Steps Script→Voice→Video each map recommended + alternative tools with costs |
| 3 | Three Tool Pages | Directive §27 (all 15 sections) | Complete pages incl. True Cost, Commercial use, Last verified |
| 4 | One Comparison (A vs B of the three) | `10-comparison-model.md` | Verdict block present with reasons; P.A.C.E side-by-side |
| 5 | Recommendation | Directive §13 style | "Recommended because…" bullets tied to user inputs (budget/experience/commercial) |
| 6 | Evidence | `09-evidence-model.md` | ≥ 1 hands-on evidence record linked on each tool's key claim |
| 7 | CTA | Trust rules | Standard-strength affiliate CTA, no dark patterns |

## 4. Data Required Before Build (Phase 1 dependency)

- 3 tools fully structured in `/data/tools.json` (from the 15-tool budget).
- 1 workflow record in `workflows.json`.
- 1 comparison record in `comparisons.json`.
- ≥ 3 evidence records covering the tools' key claims.
- True cost calculations with stated assumptions (`13-true-cost-model.md`).

Tool selection for the slice is performed by the Research Agent via the uniform benchmark protocol; candidates must cover the Script/Voice/Video slots at different budget tiers (e.g., free-tier viable vs mid-tier). Specific picks require verification from official sources before commitment — no names are locked in this document.

## 5. Out of Slice

All other categories' depth, remaining workflows/comparisons/alternatives, Stack Builder full input matrix, benchmarks beyond what evidence requires, SEO technical layer (Phase 8).

## 6. Exit Criteria

- A single user session can travel Homepage → Workflow → Tools → Comparison → Decision → CTA without dead ends.
- Every number shown on the path traces to `/data` records with `last_verified`.
- §72 report submitted; Gate 4 (core website functional) can be assessed for this path.
