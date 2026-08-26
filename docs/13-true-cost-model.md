# 13 — True Cost Model

> **Document:** `13-true-cost-model.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §14-P, §18.
> **Related:** `03-data-schema.md`, `08-evaluation-model.md` (P criterion), `12-workflow-model.md` §5.

---

## 1. Principle

We do not rely on the monthly price alone. We help the user understand **the cost of achieving a result** (Directive §18). Subscriptions mislead; cost-per-result decides.

Directive §18 example:

```text
Monthly subscriptions:   $30
Estimated output:        100 Shorts/month
Estimated cost per Short: $0.30
```

## 2. Core Formula

```text
TrueCost(result) = MonthlyCost(tool, usage_profile) / ExpectedResults(tool, usage_profile)
```

Where:

- `MonthlyCost` = subscription price + mandatory usage overages − genuine free-tier offset (only up to actual free limits).
- `ExpectedResults` = realistic output units for the stated usage profile, respecting plan limits.

## 3. Per-Result Units by Category (Directive §14-P)

| Category | Result unit |
|----------|-------------|
| Video | per finished video / per 100 Shorts |
| Voice | per voice minute |
| Script/Writing | per script (1,000 words) |
| Thumbnails/Images | per image |
| Research/Repurposing | per researched brief / per repurposed asset |

## 4. Usage Profiles

To keep calculations comparable, costs are computed against standard usage profiles:

| Profile | Definition |
|---------|-----------|
| Starter | ~10 outputs/month |
| Volume | ~100 outputs/month |
| Pro | ~300+ outputs/month |

Every published true-cost figure must name its profile. Cross-tool comparisons use the same profile on both sides (`10-comparison-model.md`).

## 5. Handling Rules

1. **Free plans:** effective cost is $0 only within real limits; beyond limits use overage or forced-upgrade price.
2. **Usage-based pricing:** estimated from measured consumption in evidence tests where available; otherwise official unit prices × profile volume, labeled as estimate.
3. **Annual-only discounts:** use monthly-equivalent, noting commitment condition.
4. **Hidden costs:** required paid add-ons count toward monthly cost.
5. **Workflow-level cost** (`12` §5): sum of member tools' effective costs for the shared usage profile; per-result divides by workflow output units.

## 6. Assumptions Registry

Every calculation stores its assumptions next to the result:

```text
usage_profile, plan_assumed, free_tier_applied,
overage_rules, expected_results_basis (evidence ref),
computed_at, last_verified
```

Assumptions render visibly in the True Cost Panel UI (`04-design-system.md` §6). A number without visible assumptions must not be displayed.

## 7. Feeding P.A.C.E

The P score derives from TrueCost relative to category peers at the same usage profile and quality tier — cheaper-is-better only within acceptable quality bands (`08-evaluation-model.md` §3).

## 8. Maintenance Triggers

Recompute on: any pricing change, plan/limit change, currency-relevant change, or new measurement from benchmarks. Update `last_verified`; log to `15-changelog.md`.
