# 09 — Evidence Model

> **Document:** `09-evidence-model.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §15, §21–22, §56–58.
> **Related:** `08-evaluation-model.md`, `03-data-schema.md` §8–9, `13-true-cost-model.md`.

---

## 1. Principle

P.A.C.E must not be mere opinion. Every evaluation is tied to evidence (Directive §15). Trust beats short-term revenue: fake reviews, fake benchmarks, artificial scores are forbidden (Directive §56).

## 2. Evidence Source Types

1. Hands-on testing (primary, highest value)
2. Official documentation
3. Official pricing pages
4. Official license terms
5. Observed output (saved artifacts)
6. Repeated testing (consistency checks)

## 3. Evidence Record Structure (Directive §15 — exact fields)

```text
tested_at          # ISO date the test/verification occurred
tested_by          # agent role / person identity
test_method        # procedure followed (incl. protocol reference if benchmark)
test_prompt        # exact prompt/input used (for generative tests)
test_conditions    # plan tier, settings, date-sensitive context, hardware if relevant
observations       # factual notes of what happened
result             # outcome statement feeding scores/claims
```

Storage: referenced by id from `evidence_refs` in Tools, Comparisons, Alternatives, Workflows (`03-data-schema.md`). Records live alongside entity files in `/data` (Architect may propose exact file layout).

## 4. Hands-On Benchmark Protocol (Directive §21)

When testing similar tools:
- Same prompt
- Same input
- Same target
- Same conditions as far as possible
- Same evaluation criteria

Record for each participant: Time, Quality, Accuracy, Cost, Ease, Limitations, Commercial considerations.

**Asset leverage (Directive §22):** One test → multiple assets:

```text
Benchmark → Article → Comparison → Short video → Social post → Tool page evidence
```

## 5. Data Verification Rules (Directive §57–58)

- Every volatile fact requires `last_verified` + `source`: especially pricing, free plans, limits, commercial rights, features.
- Research databases supplied to the team are **Research Input**, not Ground Truth. Critical facts must be verified from official sources before entering `/data`.
- Unverifiable claims are either dropped or explicitly labeled unverified in UI (`04-design-system.md` §7).

## 6. Evidence Quality Tiers

| Tier | Source | Usage rule |
|------|--------|-----------|
| T1 | Hands-on test (this project) | Can anchor P.A.C.E scores and verdicts |
| T2 | Official docs/pricing/terms (dated) | Can anchor factual claims; needs `last_verified` |
| T3 | Observed single sample | Supports observations; insufficient alone for scores |
| T4 | Third-party/unofficial | Context only; never displayed as platform fact |

## 7. Lifecycle

- Created during Phase 5 (`05-mvp-backlog.md` §7) but required earlier for the vertical slice (`07-vertical-slice-plan.md` §4).
- Invalidated when underlying facts change → re-test or downgrade label.
- Deletion prohibited; superseded records stay for audit trail.
