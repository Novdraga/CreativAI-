# 11 — Alternative Model

> **Document:** `11-alternative-model.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §19.
> **Related:** `03-data-schema.md` §6, `08-evaluation-model.md`, `13-true-cost-model.md`, `14-seo-geo-strategy.md`.

---

## 1. Principle

Alternative pages are a **Core Feature**, not just SEO pages (Directive §19). Their job: capture the user's actual reason for leaving a tool and return a situation-fit recommendation with honest trade-offs.

## 2. Page Structure

```text
alternatives/[tool]
├── H1: "[Tool] Alternatives" + one-line context (what the tool is good at)
├── Why are you leaving?          ← interactive reason selector
│   ├── Too expensive
│   ├── Too complicated
│   ├── Need better quality
│   ├── Need commercial rights
│   └── Need another workflow
├── Best alternative for your situation   ← reason-mapped recommendation(s)
├── Candidate cards               ← per candidate: best_for reasons, trade-offs, P.A.C.E mini-scores
├── Evidence links                ← backing every material claim
└── Last verified                 ← date chip
```

## 3. Leaving-Reason Taxonomy → Matching Logic

| Leaving reason | Primary matching signal | Secondary signals |
|----------------|------------------------|-------------------|
| Too expensive | True cost per result below incumbent at equivalent usage (`13`) | Free plan viability, budget tiers |
| Too complicated | Ease (E) ≥ incumbent + meaningful margin | Onboarding time-to-first-result |
| Need better quality | Accuracy/Quality (A) > incumbent in category tests | Benchmark evidence links |
| Need commercial rights | commercial_use.allowed = true on comparable plans | Attribution burden comparison |
| Need another workflow | Workflow compatibility mapping (`12`) | Supported formats, integrations |

Each mapping must produce: recommended candidate(s) + justification bullets + explicit trade-off statement ("you give up X, you gain Y").

## 4. Reasoning Framework

1. State the incumbent's genuine strengths first (honesty builds trust; Directive §56).
2. Map each leaving reason to candidates using data, not opinion — every claim carries an evidence ref (`09`).
3. Never present more than ~3 primary candidates per reason; decision clarity over choice overload.
4. If no candidate genuinely solves the user's problem, say so ("keep your current tool if…").
5. Verdicts follow the same rules-based explainability as Comparisons (`10` §4).

## 5. Data Requirements

Per `alternatives.json` schema (`03-data-schema.md` §6): incumbent ref, leaving-reason taxonomy, candidate list with trade-offs and pace scores, situation_mapping, evidence refs, last_verified.

## 6. MVP Budget

5–10 alternative pages, prioritized by: tools referenced in the vertical slice, highest-intent incumbents from keyword clusters (`14-seo-geo-strategy.md`), and tools users most commonly outgrow (price hikes, ban changes).

## 7. Maintenance

Re-verify when incumbent pricing/terms change or any candidate's scores re-score (`08` §6); log updates in `15-changelog.md`.
