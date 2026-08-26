# 10 — Comparison Model

> **Document:** `10-comparison-model.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §20.
> **Related:** `03-data-schema.md` §5, `08-evaluation-model.md`, `13-true-cost-model.md`, `09-evidence-model.md`.

---

## 1. Principle

A comparison is not a feature table ("Feature A / Feature B"). It is a **decision instrument** that ends in our recommendation.

## 2. Required Content (Directive §20)

Every Comparison page must cover:

1. **Who should choose A?** — situational statement(s)
2. **Who should choose B?** — situational statement(s)
3. **Price** — plans and starting price (verified)
4. **True cost** — per-result cost for representative usage (`13`)
5. **Quality** — output quality with evidence
6. **Ease** — beginner experience
7. **Control** — customization depth
8. **Commercial use** — rights comparison with plan restrictions
9. **Workflow compatibility** — where each fits in creator workflows (`12`)
10. **P.A.C.E** — side-by-side sub-scores with reasons
11. **Evidence** — linked records backing every material claim

And finally:

> **Our recommendation** — a clear verdict with justification.

## 3. Data Structure

Per `comparisons.json` (`03-data-schema.md` §5): identity + tool refs + dimension rows (each: value A, value B, winner-or-neutral marker, evidence ref) + pace_comparison + verdict { recommendation, reasoning bullets, conditions } + last_verified.

## 4. Decision Logic (Rules-Based)

Verdict derivation uses the same inputs as Stack Builder V1 (Directive §11): Goal, Budget, Experience, Content type, Required capabilities, Commercial rights, Quality preference.

Rules pattern:

```text
IF user requires commercial use AND tool_a.restricts_commercial THEN lean B
IF budget <= X AND true_cost_per_result(a) < true_cost_per_result(b) AND quality_delta acceptable THEN lean A
IF experience == beginner AND ease(b) - ease(a) >= 2 THEN weight E strongly toward b
…
```

Properties:
- Deterministic and explainable — every verdict lists the triggered rules as "Recommended because…" bullets.
- Hard constraints (e.g., commercial rights) override soft preferences.
- Ties resolve by P.A.C.E average; unresolved ties state both options honestly.

## 5. Editorial Rules

- No fake parity: dimensions that don't apply to a category are omitted, not padded.
- Winners per dimension must cite evidence; unverified rows render as unverified.
- The verdict may be conditional ("choose A if…, B if…") but must still commit to a primary recommendation for the most common situation.

## 6. Maintenance

Re-verify on any pricing/license/model change of either tool; update verdict if rules output changes; refresh `last_verified`; log in `15-changelog.md`.

## 7. MVP Budget

5–10 comparisons, prioritized around the vertical slice pairings and top search intents (`14-seo-geo-strategy.md`).
