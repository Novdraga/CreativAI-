# 03 — Data Schema

> **Document:** `03-data-schema.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §8, §10, §15, §21–22, §31, §57.
> **Related:** `08-evaluation-model.md`, `09-evidence-model.md`, `10-comparison-model.md`, `11-alternative-model.md`, `12-workflow-model.md`, `13-true-cost-model.md`.

---

## 1. Storage Contract (MVP)

All MVP data is stored locally as JSON files (Directive §31). No cloud database in MVP (Directive §32); PostgreSQL appears only as a V2+ migration path when dynamic content/admin/accounts/analytics require it.

```text
/data
  tools.json          # array of Tool
  workflows.json      # array of Workflow
  comparisons.json    # array of Comparison
  alternatives.json   # array of Alternative
  benchmarks.json     # array of Benchmark
```

The Architect may propose a better local structure; any change requires PM approval.

## 2. Conventions

- `id`: stable machine identifier (`string`, unique per entity).
- `slug`: URL-safe identifier used by routes (`02-info-architecture.md` §6).
- Dates: ISO-8601 (`YYYY-MM-DD`).
- Every volatile fact carries `last_verified` + `source` (Directive §57).
- Monetary values: number + explicit `currency` (USD default) and billing period where applicable.
- Scores: decimal `0–10`, one decimal place max, always paired with evidence references and a written reason (Directive §16).

## 3. Tool Entity (Directive §8 — exact fields)

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Stable ID |
| `name` | string | Official product name |
| `slug` | string | Route slug |
| `category` | enum | One of the 5 categories |
| `subcategories` | string[] | Optional refinement |
| `description` | string | Factual overview |
| `website` | url | Official site |
| `pricing` | object[] | Plans: name, price, currency, period, limits |
| `pricing_model` | enum | subscription / freemium / free / usage-based / one-time |
| `free_plan` | boolean | Availability of a free tier |
| `starting_price` | object | { amount, currency, period } |
| `features` | string[] | Verified feature list |
| `strengths` | string[] | Evidence-backed |
| `weaknesses` | string[] | Evidence-backed |
| `best_for` | string[] | Situational fit statements |
| `not_for` | string[] | Explicit anti-recommendations |
| `difficulty` | enum | beginner / intermediate / advanced |
| `commercial_use` | object | { allowed, plan_restrictions[], attribution, ownership_notes, license_notes } |
| `license_notes` | string[] | Quoted/paraphrased official terms only |
| `supported_formats` | string[] | Input/output formats |
| `platforms` | string[] | Web / Windows / macOS / iOS / Android |
| `pace_scores` | PaceScores | See §7 |
| `evidence` | EvidenceRef[] | Links to evidence records |
| `benchmark_results` | BenchmarkRef[] | Linked hands-on tests |
| `alternatives` | id[] | Alternative entity links |
| `comparison_links` | id[] | Comparison entity links |
| `last_verified` | date | Mandatory |

## 4. Workflow Entity (Directive §10 — exact fields)

```text
id, name, goal, audience, budget_range, experience_level,
steps, recommended_tools, alternative_tools,
estimated_cost, estimated_cost_per_result,
commercial_notes, evidence, last_verified
```

- `steps`: ordered Step objects — `{ order, name, job_to_be_done, inputs, outputs, tool_slots }` (see `12-workflow-model.md`).
- `estimated_cost_per_result`: computed via `13-true-cost-model.md`; must state its assumptions.

## 5. Comparison Entity

| Field | Notes |
|-------|-------|
| `id`, `slug` | Slug format `[a]-vs-[b]` |
| `tool_a_id`, `tool_b_id` | References to Tools |
| `who_should_choose_a` / `who_should_choose_b` | Situation statements (Directive §20) |
| `dimensions` | Price, True cost, Quality, Ease, Control, Commercial use, Workflow compatibility — each with values + evidence refs |
| `pace_comparison` | Side-by-side PaceScores |
| `verdict` | Our recommendation + reasoning (mandatory) |
| `evidence` | EvidenceRef[] |
| `last_verified` | date |

Decision logic details: `10-comparison-model.md`.

## 6. Alternative Entity

| Field | Notes |
|-------|-------|
| `id`, `slug` | Usually `[incumbent]-alternatives` |
| `incumbent_tool_id` | Reference to Tool |
| `leaving_reasons` | Taxonomy from Directive §19 (too expensive / too complicated / need better quality / need commercial rights / need another workflow) |
| `candidates` | { tool_id, best_for_reasons[], tradeoffs[], pace_scores } |
| `situation_mapping` | leaving reason → recommended candidate(s) with justification |
| `evidence`, `last_verified` | As conventions |

Structure and reasoning framework: `11-alternative-model.md`.

## 7. P.A.C.E Score Object

```json
{
  "P": 8.5, "A": 9.0, "C": 8.0, "E": 9.2,
  "reasons": { "P": "…", "A": "…", "C": "…", "E": "…" },
  "evidence_refs": ["ev-001"],
  "last_verified": "2026-08-25"
}
```

Rubrics and anchors: `08-evaluation-model.md`. Sub-scores are always displayed; a bare overall number is forbidden (Directive §16).

## 8. Evidence Record (Directive §15 — exact fields)

```text
tested_at, tested_by, test_method, test_prompt,
test_conditions, observations, result
```

Full model, source types, and verification rules: `09-evidence-model.md`.

## 9. Benchmark Entity (Directive §21–22)

| Field | Notes |
|-------|-------|
| `id`, `slug` | e.g., `voice-quality-shootout-2026-09` |
| `type` | Category-specific test family |
| `participants` | tool_ids tested under identical conditions |
| `protocol` | Same prompt, same input, same target, same conditions, same evaluation criteria |
| `recorded_metrics` | Time, Quality, Accuracy, Cost, Ease, Limitations, Commercial considerations |
| `results` | Per-tool outcome rows referencing Evidence records |
| `derived_assets` | Article / Comparison / Short video / Social post / Tool page evidence links (one test → multiple assets) |
| `last_verified` | date |

## 10. Integrity Rules

1. All cross-entity references resolve (no orphan ids).
2. No tool beyond the 15-tool cap may be added without PM approval.
3. A Tool Page cannot publish P.A.C.E scores without at least one linked Evidence record or an explicit "preliminary — pending hands-on test" label.
4. Pricing/commercial facts without `last_verified` + `source` are invalid and must not render as verified.
5. Schemas here are the storage contract for the future implementation phase; TypeScript interfaces (when coding begins) must mirror these definitions exactly.
