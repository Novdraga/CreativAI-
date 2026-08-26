# 04 — Design System

> **Document:** `04-design-system.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §28–29, §44, §62–63.
> **Related:** `02-info-architecture.md` (pages), `08-evaluation-model.md` (score display), `09-evidence-model.md` (evidence components).

---

## 1. Design Principle

The product must feel like a **decision product**, not an AI directory. The interface prioritizes, in order:

> Recommendation → Evidence → Cost → Comparison → Action

## 2. UX Principles (Directive §28)

The site must be: Fast · Clean · Premium · Trustworthy · Modern · Mobile-first · Accessible · Easy to scan.

Explicitly rejected: dashboard-heavy UI, excessive animations, artificial "AI aesthetic", information overload, dark patterns, aggressive affiliate CTAs.

## 3. Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font-sans` | Inter (or equivalent system-safe stack) | All UI text |
| `font-mono` | System mono stack | Prices, scores, data values |
| Scale (rem) | 0.75 / 0.875 / 1.0 / 1.125 / 1.25 / 1.5 / 1.875 / 2.25 | caption → display |
| Weights | 400 regular, 500 medium, 600 semibold, 700 bold | Max 3 weights per view |
| Line height | 1.5 body, 1.2 headings | Readability rule |
| Measure | Max ~70 characters body | Scanability rule |

Type is used to establish hierarchy of decisions: verdicts > reasons > raw data.

## 4. Color Tokens (semantic, premium-neutral)

| Token | Intent |
|-------|--------|
| `bg-page` / `bg-surface` | Neutral near-white page, elevated white surfaces |
| `text-primary` / `text-secondary` / `text-muted` | 3-step text hierarchy (WCAG AA minimum contrast) |
| `accent-primary` | Single restrained brand accent for primary actions & recommendations |
| `success` / `warning` / `danger` | Checkmarks ✓, cautions, dealbreakers only — never decoration |
| `border-subtle` | Hairline dividers |

Rules: one accent; color communicates state (verified/unverified, allowed/restricted), never emotion. Dark mode deferred until after core UI approval.

## 5. Spacing & Layout

- Base unit: **4px**; spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- Content container: max-width ~72rem; reading column ~42rem.
- Radius scale: 6px (inputs), 8px (cards), full (pills/badges).
- Elevation: maximum two shadow levels; prefer borders over shadows.
- Mobile-first breakpoints: base ≥ 360px, `sm` ≥ 640px, `md` ≥ 768px, `lg` ≥ 1024px.

## 6. Component Definitions (Directive §44)

### Core primitives
- **Button** — variants: primary (single per view), secondary, ghost; states: hover/focus-visible/disabled/loading.
- **Card** — surface with border, optional header/action zone.
- **Badge/Pill** — status labels: `Commercial use: Allowed`, `Last verified 2026-08-25`, `Preliminary score`.
- **Price tag** — mono font, period suffix, source tooltip.

### Decision components
- **Tool Card** — name, category chip, starting price, P.A.C.E mini-bars, best_for line, CTA. Clicking opens Tool Page.
- **Score Card (P.A.C.E)** — four labeled sub-scores P/A/C/E with 0–10 bars + one-line reason each; overall derived, sub-scores never hidden (`08-evaluation-model.md`).
- **Comparison Table** — dimensions × two tools; row-level winner markers tied to evidence links (`10-comparison-model.md`).
- **Verdict Block** — visually distinct recommendation panel: decision + bullet reasons ("Recommended because…") (Directive §13).
- **Evidence Block** — collapsible record: method, prompt summary, conditions, observations, result, tested_at/by (`09-evidence-model.md`).
- **Stack Card** — workflow steps as horizontal chain with mapped tool chips and total estimated cost (`12-workflow-model.md`).
- **True Cost Panel** — cost-per-result figure + assumptions list (`13-true-cost-model.md`).

### Navigation components
- Header, Footer, Breadcrumbs (per `02-info-architecture.md` §4–5).
- Goal selector (Homepage entry into Stack Builder).

## 7. States & Data Honesty in UI

- Unverified data renders with visible `unverified` styling; never styled as fact.
- Affiliate CTAs are standard-strength buttons; no urgency patterns, no fake scarcity (Directive §56).
- Empty states explain what will exist and why it's not there yet (no filler cards).

## 8. Accessibility (Directive §63)

Keyboard navigation · semantic HTML · accessible labels on all controls · visible focus states · AA contrast · screen-reader basics (landmarks, alt text) · reduced-motion support.

## 9. Performance-Minded UI Rules (Directive §62)

Fast initial load, optimized images, minimal JavaScript, good Core Web Vitals, cache-friendly rendering choices — enforced later via design tokens and component budgets during implementation phase.

---

*Implementation note: this document defines the system only. No CSS, React, or any code exists in this documentation phase.*
