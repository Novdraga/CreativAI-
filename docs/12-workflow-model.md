# 12 — Workflow Model

> **Document:** `12-workflow-model.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §9–10.
> **Related:** `03-data-schema.md` §4, `13-true-cost-model.md`, `07-vertical-slice-plan.md`.

---

## 1. Principle

The site is not built around Tools alone. It must support the chain:

```text
Tool → Use Case → Workflow → Stack
```

Example (Directive §9): *Faceless YouTube Shorts* = Research → Script → Voice → Video → Captions → Thumbnail.

## 2. Workflow Entity (Directive §10 — exact fields)

```text
id
name
goal                      # e.g., faceless-youtube-shorts
audience                  # creator segment this targets
budget_range              # e.g., $0 / $25 / $50 / $100+
experience_level          # beginner / intermediate / advanced (or mixed)
steps                     # ordered Step objects (see §3)
recommended_tools         # primary tool ids mapped to steps
alternative_tools         # substitutes mapped to steps
estimated_cost            # total monthly estimate for the stack
estimated_cost_per_result # computed via true-cost model (13)
commercial_notes          # rights caveats across the chain
evidence                  # evidence refs supporting claims
last_verified             # ISO date
```

## 3. Step Definition

Each step in `steps`:

| Field | Notes |
|-------|-------|
| `order` | Integer sequence position |
| `name` | Step name (Script, Voice, Video…) |
| `job_to_be_done` | One sentence describing the outcome of this step |
| `inputs` | What enters the step |
| `outputs` | What exits the step (feeds next step's inputs) |
| `tool_slots` | { recommended: tool_id[], alternative: tool_id[] } for this step |

Chain integrity rule: each step's outputs must satisfy the next step's declared inputs.

## 4. Tool Mapping Rules

1. A tool may occupy multiple steps only if verified capable (feature-backed).
2. Recommended vs alternative slots differ on explicit dimensions: price tier, ease, quality tier, commercial rights — never arbitrary.
3. Every mapping inherits the tool's `last_verified`; expired verification blocks publication.
4. Commercial notes aggregate per-step restrictions into a chain-level statement (one restrictive tool can constrain monetization of the whole output).

## 5. Cost Integration

- `estimated_cost`: sum of selected recommended tools' effective monthly cost (accounting for free tiers and shared subscriptions where factual).
- `estimated_cost_per_result`: computed strictly via `13-true-cost-model.md` with assumptions stored alongside.
- Displayed in Stack Card UI (`04-design-system.md` §6).

## 6. Canonical Example — Faceless YouTube (slice anchor)

```text
Workflow: Faceless YouTube videos
Goal chain: Research → Script → Voice → Video (Captions, Thumbnail as optional steps)
Budget target example: $50/month, Beginner, commercial use required
Output: recommended stack + cheaper alternative + higher-quality alternative
        + estimated cost ($37-style breakdown per Directive §5 example)
```

This workflow is the first build target (`07-vertical-slice-plan.md`).

## 7. MVP Budget & Governance

5–10 workflows. Each new workflow must pass the anti-scope-creep test (`05-mvp-backlog.md` §14): solves a core creator goal, uses ≤ 15-tool catalog, verifiable end-to-end.
