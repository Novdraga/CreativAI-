# 08 — Evaluation Model (P.A.C.E.)

> **Document:** `08-evaluation-model.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §14, §16.
> **Related:** `09-evidence-model.md` (mandatory evidence links), `03-data-schema.md` §7 (score object).

---

## 1. Purpose

P.A.C.E is the platform's structured evaluation system — a methodology, not marketing decoration. Scores are derived from evidence, never sentiment.

## 2. The Four Criteria

### P — Price per Result
How much does it cost to obtain one real result?
Units by category: cost per video, per voice minute, per image, per 100 Shorts.
Calculation methodology: `13-true-cost-model.md`. P is scored from computed true-cost-per-result relative to category peers.

### A — Accuracy / Output Quality
Quality of the actual output, judged by output type:
- Voice quality (naturalness, clarity, language coverage)
- Video quality (coherence, resolution, motion consistency)
- Script quality (structure, factual soundness, tone control)
- Image quality (prompt fidelity, text rendering, style control)
- Research quality (accuracy, sourcing, recency)

### C — Control
Degree of control and customization: prompt/parameter depth, editing of outputs, API availability, batch operations, brand/voice presets.

### E — Ease
Ease of use, especially for beginners: onboarding time-to-first-result, UI clarity, templates, documentation quality.

## 3. Scoring Scale (all criteria, 0–10)

| Band | Label | Anchor |
|------|-------|--------|
| 9.0–10 | Exceptional | Best-in-class among evaluated peers; no material weakness in this criterion |
| 7.5–8.9 | Strong | Clearly above average; minor limitations noted with evidence |
| 6.0–7.4 | Adequate | Usable; notable trade-offs that the right user can accept |
| 4.0–5.9 | Weak | Significant limitation; only fits niche situations |
| 0–3.9 | Poor | Fails the criterion for the creator audience; dealbreaker likely |

Half-point precision maximum. Scores below 4.0 must cite a concrete failing observation.

## 4. Scoring Process

1. Evidence first: at least one linked evidence record (`09`) or an explicit "Preliminary — pending hands-on test" label.
2. Score each criterion against band anchors using benchmark observations where available.
3. Write a one-line reason per criterion (mandatory — Directive §16).
4. Record scores in `pace_scores` object with `evidence_refs` and `last_verified`.
5. Lead Agent approves publication.

## 5. Transparency Rule

Never publish a bare "8.7/10". Always display:

```text
P: 8.5   A: 9.0   C: 8.0   E: 9.2
```

…followed by the reasons. An overall figure may be shown as a plain average for sorting, clearly labeled as derived.

## 6. Re-scoring Triggers

- Pricing change discovered → re-verify P and True Cost.
- Major product update or model change → re-test affected criteria.
- License/commercial terms change → flag Tool Page immediately.
- Any re-score updates `last_verified` and appends to changelog (`15-changelog.md`).

## 7. Integrity Rules

- No artificial scores; no score without reason + evidence link or preliminary label.
- Identical tools tested under identical conditions receive identical treatment (`09` §4).
- Commission relationships never influence scores (Directive §49, §56).
