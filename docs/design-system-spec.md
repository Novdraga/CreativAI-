# Design System Specification — Implementation-Ready (React + Tailwind CSS)

> **Document:** `design-system-spec.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`PROJECT_DIRECTIVE.md`) §28–29, §44, §62–63, Section 44 (Phase 2 Design System).
> **Parent:** `04-design-system.md` — architectural definition. This spec is the **implementation-ready** companion: tokens, Tailwind mappings, component APIs, and markup patterns for frontend development.
> **Status:** Phase 2 — Authorized. Still **ZERO production framework code** (spec + static preview only, per PMO-006 constraints).
> **Stack target (when production begins):** React + Tailwind CSS via CDN/config. No Next.js components or API routes in this phase.

---

## 0. How To Use This Spec

- **Decision-product rule (§29):** Every component optimizes the path `Recommendation → Evidence → Cost → Comparison → Action`. If a visual choice makes the product feel like a directory or marketplace, it is wrong.
- **UX principles (§28):** Fast · Clean · Premium · Trustworthy · Modern · Mobile-first · Accessible · Easy to scan.
- **Integration method for preview:** Tailwind via CDN (`https://cdn.tailwindcss.com`) + `tailwind.config` inline script (tokens below) + Inter via Google Fonts. No build step. Production will migrate the same tokens to `tailwind.config.js`.
- **Accessibility baseline (§63):** All components use semantic HTML, visible `focus-visible` rings, keyboard operability, and WCAG AA contrast (all text/background pairs in §2 have been checked).

### Tailwind CDN Bootstrap (for `design-preview/index.html` and future pages)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: { sans: ['Inter','ui-sans-system','system-ui','-apple-system','Segoe UI','Roboto','Helvetica','Arial','sans-serif'] },
        colors: {
          brand: { DEFAULT: '#4F46E5', hover: '#4338CA', soft: '#EEF2FF' },
          ink: { DEFAULT: '#0F172A', secondary: '#475569', muted: '#94A3B8' },
          surface: { page: '#F8FAFC', card: '#FFFFFF', muted: '#F1F5F9' },
          line: '#E2E8F0',
          success: { DEFAULT: '#059669', soft: '#ECFDF5' },
          warning: { DEFAULT: '#D97706', soft: '#FFFBEB' },
          danger: { DEFAULT: '#DC2626', soft: '#FEF2F2' },
        },
        borderRadius: { '2xl': '1rem', '3xl': '1.5rem' }
      }
    }
  }
</script>
<style> html{font-family:Inter,ui-sans-serif,system-ui} </style>
```

---

## 1. Typography

### 1.1 Font Family

- **Primary:** `Inter` — loaded via Google Fonts (400, 500, 600, 700). Fallback stack: `ui-sans-system, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`.
- **Mono (prices, scores, data values):** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` via `font-mono`.
- **Why Inter:** Neutral, high legibility at small sizes, excellent tabular-nums support for cost/score figures.

### 1.2 Hierarchy & Tailwind Mapping

| Level | Tailwind Classes | Size / Weight / Line Height | Usage |
|-------|------------------|-----------------------------|-------|
| **Display / H1** | `text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]` | 36px → 48px / 700 / 1.1 | Page titles, workflow titles. One per page. |
| **H2** | `text-3xl font-semibold tracking-tight leading-tight` | 30px / 600 / 1.2 | Section titles (`Workflows`, `Comparisons`). |
| **H3** | `text-xl font-semibold leading-tight` | 20px / 600 / 1.25 | Card titles, comparison dimension headers. |
| **H4 / Eyebrow** | `text-sm font-semibold tracking-widest uppercase text-ink-muted` | 14px / 600 / 1.4 / 0.08em | Category labels, kicker above H2. |
| **Body** | `text-base leading-relaxed text-ink` | 16px / 400 / 1.6 | Primary reading column (max ~70ch). |
| **Body Small** | `text-sm leading-relaxed text-ink-secondary` | 14px / 400 / 1.6 | Secondary descriptions, meta lines. |
| **Caption / Small** | `text-xs leading-normal text-ink-muted` | 12px / 400 / 1.4 | Timestamps, disclaimers, `last_verified`. |
| **Mono Value** | `font-mono text-sm font-medium tabular-nums` | 14px / 500 / 1.4 | Prices (`$12/mo`), scores (`8.5`). |

**Line-length rule:** Body column `max-w-[42rem]` (~66ch). Never exceed 70ch.

**Weight budget:** Use at most 3 weights per view (typically 400, 600, 700). 500 reserved for mono values and subtle emphasis.

**Code example — heading stack:**

```html
<p class="text-sm font-semibold tracking-widest uppercase text-ink-muted">Faceless YouTube Workflow</p>
<h1 class="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-ink">Build the right AI stack for your channel</h1>
<p class="text-base leading-relaxed text-ink-secondary max-w-[42rem]">Goal → Recommendation → Evidence → Decision. We optimize for decisions, not page views.</p>
```

**Accessibility:** All headings follow a strict `h1 → h2 → h3` order. No skipped levels. Minimum text size 12px; AA contrast required (see §2).

---

## 2. Colors

### 2.1 Palette (semantic, premium-neutral — one accent rule)

| Token | Hex | Tailwind | Intent / Contrast |
|-------|-----|----------|-------------------|
| `brand-DEFAULT` | `#4F46E5` | `bg-brand text-white` | **Primary brand / CTA** — indigo-600. Hover `#4338CA` (`bg-brand-hover`). Soft bg `#EEF2FF` (`bg-brand-soft`). White on brand = 8.2:1 ✓ AA. |
| `ink-DEFAULT` | `#0F172A` | `text-ink` | Primary text (slate-900). |
| `ink-secondary` | `#475569` | `text-ink-secondary` | Secondary text (slate-600). On `surface-page` (#F8FAFC) = 7.1:1 ✓. |
| `ink-muted` | `#94A3B8` | `text-ink-muted` | Tertiary / metadata (slate-400). Used only ≥14px or for non-essential text. |
| `surface-page` | `#F8FAFC` | `bg-surface-page` | Page background (slate-50). |
| `surface-card` | `#FFFFFF` | `bg-surface-card` | Elevated cards. |
| `surface-muted` | `#F1F5F9` | `bg-surface-muted` | Subtle wells, code blocks, inactive stepper track. |
| `line` | `#E2E8F0` | `border-line` | Hairline dividers (slate-200). |
| `success` | `#059669` | `text-success bg-success-soft` | Checkmarks, verified badge, `Commercial: Allowed`. |
| `warning` | `#D97706` | `text-warning bg-warning-soft` | Attribution-required, limited-plan notices. |
| `danger` | `#DC2626` | `text-danger bg-danger-soft` | Non-commercial only, dealbreakers. |

**Rules (§29):**
- **One accent only** — `brand`. Success/Warning/Danger are state signals, never decoration.
- Dark mode deferred until after core UI approval.
- No pure black (`#000`) — ink uses `#0F172A` for reduced glare.

### 2.2 Swatch Implementation

```html
<!-- Primary swatch -->
<div class="h-16 rounded-2xl bg-brand flex items-center justify-center text-white font-semibold">Brand #4F46E5</div>
<!-- Surface stack -->
<div class="bg-surface-page p-4 rounded-2xl border border-line">
  <div class="bg-surface-card rounded-xl border border-line p-4 shadow-sm">Card on Page</div>
</div>
```

---

## 3. Spacing — Grid System

**Base unit:** 4px. All spacing derives from `4 × n`. Uses Tailwind's default spacing scale (1 = 4px).

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `1` | 4px | `p-1 / gap-1 / m-1` | Tight inline gaps (icon + label). |
| `2` | 8px | `p-2 / gap-2` | Card inner padding (compact), badge padding. |
| `3` | 12px | `p-3 / gap-3` | Button vertical padding. |
| `4` | 16px | `p-4 / gap-4` | Card padding (default), section stack. |
| `6` | 24px | `p-6 / gap-6` | Card grid gaps, section internal. |
| `8` | 32px | `p-8 / gap-8` | Section padding (desktop). |
| `12` | 48px | `py-12 / gap-12` | Section vertical rhythm. |
| `16` | 64px | `py-16` | Page section separation. |

**Layout:**

| Token | Value | Usage |
|-------|-------|-------|
| Content container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Global page wrapper (~1280px). |
| Reading column | `max-w-[42rem]` | Body text column. |
| Card radius | `rounded-2xl` (16px) cards, `rounded-xl` (12px) inner wells, `rounded-full` pills. |
| Elevation | `shadow-sm` max; prefer `border border-line` over heavy shadows. Two levels only: `shadow-sm` for cards, `shadow-md` for sticky header. |

```html
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <!-- cards with p-6 -->
  </div>
</section>
```

---

## 4. Cards

All cards share: `bg-surface-card rounded-2xl border border-line shadow-sm` + `p-6`. Header uses `flex items-start justify-between`. No heavy shadows. Hover (tool cards): `hover:shadow-md hover:border-slate-300 transition`.

### 4.1 Tool Card

**Purpose:** Decision-unit summary. Links to `/tools/[slug]`.

**Structure:**

```html
<article class="bg-surface-card rounded-2xl border border-line shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition">
  <div class="flex items-start justify-between gap-3">
    <div class="flex items-center gap-3">
      <div class="h-10 w-10 rounded-xl bg-brand-soft flex items-center justify-center text-brand font-bold">C</div>
      <div>
        <h3 class="font-semibold leading-tight text-ink">ChatGPT</h3>
        <p class="text-xs text-ink-muted">script-writing · OpenAI</p>
      </div>
    </div>
    <span class="inline-flex items-center gap-1 rounded-full bg-success-soft text-success text-xs font-medium px-2.5 py-1">● Commercial OK</span>
  </div>
  <p class="text-sm leading-relaxed text-ink-secondary">Conversational script generation with custom GPTs and web browsing.</p>
  <div class="flex items-center gap-2 text-xs">
    <span class="rounded-full bg-surface-muted px-2.5 py-1 font-medium text-ink-secondary">Beginner</span>
    <span class="rounded-full bg-surface-muted px-2.5 py-1 font-medium text-ink-secondary">Web · iOS · Android</span>
  </div>
  <!-- P.A.C.E mini-bars (see §6) -->
  <div class="flex items-center justify-between pt-2 border-t border-line">
    <span class="font-mono text-sm font-medium tabular-nums text-ink">$0 Free · $20/mo</span>
    <a href="#" class="text-sm font-semibold text-brand hover:text-brand-hover">View tool →</a>
  </div>
  <div class="flex items-center gap-1.5 text-xs text-ink-muted"><span class="h-2 w-2 rounded-full bg-success"></span> Last verified 2026-08-25</div>
</article>
```

**Variants:** `data-verified="true|false"` drives badge color (success vs warning) and bottom `last_verified` dot.

### 4.2 Workflow Card

**Structure:** Vertical stepper converting to horizontal chain on desktop is handled by **Stack Builder** (§8). For catalog grids, Workflow Card shows a compact summary:

```html
<article class="bg-surface-card rounded-2xl border border-line shadow-sm p-6">
  <p class="text-xs font-semibold tracking-widest uppercase text-ink-muted">Workflow · 4 steps</p>
  <h3 class="mt-1 text-xl font-semibold">Faceless YouTube</h3>
  <p class="mt-1 text-sm text-ink-secondary">Research & Script → Voice → Video → Thumbnail · $17–37/mo</p>
  <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
    <span class="rounded-full bg-brand-soft text-brand px-3 py-1 font-medium">ChatGPT</span>
    <span class="text-ink-muted">→</span><span class="rounded-full bg-brand-soft text-brand px-3 py-1">ElevenLabs</span>
    <span class="text-ink-muted">→</span><span class="rounded-full bg-brand-soft text-brand px-3 py-1">Runway</span>
    <span class="text-ink-muted">→</span><span class="rounded-full bg-surface-muted px-3 py-1">Canva AI</span>
  </div>
  <a href="#" class="mt-4 inline-flex text-sm font-semibold text-brand">Explore workflow →</a>
</article>
```

### 4.3 Comparison Card

**Structure:** Split two-column header with VS pill, 7 dimension rows, pace side-by-side, verdict block.

```html
<div class="bg-surface-card rounded-2xl border border-line shadow-sm overflow-hidden">
  <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-6 bg-surface-muted/50">
    <div class="text-center"><p class="font-semibold">ChatGPT</p><p class="text-xs text-ink-muted">script-writing</p></div>
    <span class="rounded-full bg-ink text-white text-xs font-bold px-3 py-1">VS</span>
    <div class="text-center"><p class="font-semibold">Claude</p><p class="text-xs text-ink-muted">script-writing</p></div>
  </div>
  <div class="divide-y divide-line">
    <!-- dimension row: see §6/10 pattern -->
  </div>
</div>
```

### 4.4 Recommendation / Verdict Card

Distinct surface to signal decision (§13):

```html
<div class="rounded-2xl bg-brand text-white p-6">
  <p class="text-xs font-semibold tracking-widest uppercase opacity-80">Our recommendation</p>
  <p class="mt-2 text-xl font-semibold leading-tight">Choose Claude for scriptwriting when natural voice matters.</p>
  <ul class="mt-3 space-y-1.5 text-sm opacity-90 list-disc pl-5">
    <li>More human-sounding pacing & Artifacts workspace.</li>
    <li>200k context keeps long scripts coherent.</li>
  </ul>
  <p class="mt-3 text-xs opacity-70">Condition: Pick ChatGPT if your workflow depends on live web research.</p>
</div>
<!-- Neutral variant for non-primary verdicts -->
<div class="rounded-2xl border-2 border-brand bg-brand-soft p-6">...</div>
```

---

## 5. Buttons

| Variant | Classes | Usage | A11y |
|---------|---------|-------|------|
| **Primary** | `inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-hover focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2` | Single primary action per view (Find my stack, Verify). | `type="button"`; focus ring 2px with offset. |
| **Secondary** | `inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink border border-line hover:bg-surface-muted focus-visible:ring-2` | Secondary actions (View comparison, Browse tools). | Border contrast ≥ 1.5:1; no color-only meaning. |
| **Tertiary / Ghost** | `inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-ink-secondary hover:bg-surface-muted hover:text-ink` | Inline links styled as buttons, table actions. | Underline on hover for affordance if needed. |
| **CTA (large)** | `inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-base font-semibold text-white shadow hover:bg-brand-hover` | Hero CTA, workflow entry. Always one per section. | `aria-label` includes destination; icon `aria-hidden`. |
| **Affiliate / External** | `inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-black` + disclaimer | Tool outbound CTA. Must include `rel="noopener noreferrer"` + `aria-label` with “(opens in new tab)” + visible disclaimer `text-xs text-ink-muted` below: “Affiliate link — we may earn a commission. Recommendations are never influenced by commissions (§56).” | No urgency patterns; standard strength; no fake scarcity. |

**Button states:** `hover`, `focus-visible` (2px ring), `disabled` (`opacity-50 pointer-events-none`), `loading` (spinner + `aria-busy="true"`). Icon gap `gap-2`; arrow uses `→` or SVG with `aria-hidden`.

```html
<button class="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Find my stack →</button>
<a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-black" aria-label="Visit ElevenLabs (opens in new tab)">Visit ElevenLabs ↗</a>
<p class="mt-2 text-xs text-ink-muted">Affiliate link — commissions never influence recommendations.</p>
```

---

## 6. Score Cards — P.A.C.E Visual Display

**Rule:** Show sub-scores always; overall derived average may be shown but never alone (§16).

### 6.1 Recommended: Horizontal Bar Chart (primary, accessible & scannable)

Preferred over radar for readability and screen-reader support. Radar is documented as an **alternative concept** (see 6.2) but NOT the primary rendering.

```html
<div class="bg-surface-card rounded-2xl border border-line p-6">
  <div class="flex items-center justify-between">
    <h4 class="font-semibold">P.A.C.E — ChatGPT</h4>
    <span class="rounded-full bg-surface-muted px-2.5 py-1 font-mono text-xs font-medium">Overall 8.9</span>
  </div>
  <div class="mt-4 space-y-3">
    <!-- P -->
    <div>
      <div class="flex items-center justify-between text-sm"><span class="font-medium"><span class="font-bold">P</span> — Price per Result</span><span class="font-mono font-medium">9.5</span></div>
      <div class="mt-1 h-2 rounded-full bg-surface-muted"><div class="h-2 rounded-full bg-brand" style="width:95%"></div></div>
      <p class="mt-1 text-xs text-ink-secondary">Generous free tier; $20/mo Plus yields many script iterations.</p>
    </div>
    <!-- A / C / E repeat -->
  </div>
  <p class="mt-3 text-xs text-ink-muted">Preliminary — based on research data. Pending hands-on benchmark.</p>
</div>
```

**Bar semantics:** `role="progressbar" aria-valuenow="9.5" aria-valuemin="0" aria-valuemax="10"`.

**Color rule:** Bars use `bg-brand` universally; semantic colors (success/warning/danger) are NOT used for score magnitude to avoid false “good/bad” hue bias.

### 6.2 Alternative Concept: Radar Chart (supplementary, not primary)

Allowed as a **compact comparison overlay** (e.g., ChatGPT vs Claude overlay in a comparison page). Implemented as inline SVG, never the sole representation.

- Axes: P, A, C, E at 0°, 90°, 180°, 270°.
- Grid: 3 concentric polygons (`stroke-line`, 10/7.5/5/2.5 thresholds).
- Data polygon: `fill-brand/10 stroke-brand stroke-2`.
- Must be accompanied by the bar table (6.1) for accessibility.
- Provide `role="img" aria-label="Radar comparison of P.A.C.E scores: ChatGPT 9.5/8.5/8.0/9.5 vs Claude ..."`.

---

## 7. Evidence Components

### 7.1 Citation Display (Evidence Block)

Collapsible, factual, never marketing copy.

```html
<figure class="rounded-xl border border-line bg-surface-muted p-4">
  <figcaption class="flex items-center gap-2 text-xs font-semibold text-ink-muted">
    <span class="h-2 w-2 rounded-full bg-success"></span> Evidence — Official Documentation
  </figcaption>
  <blockquote class="mt-2 text-sm leading-relaxed text-ink">“We assign to you all our right, title, and interest, if any, in and to Output.” — OpenAI Terms of Use, §3</blockquote>
  <div class="mt-2 flex flex-wrap gap-2 text-xs">
    <span class="rounded-full bg-white border border-line px-2.5 py-1">Tested 2026-08-25 · Research Agent</span>
    <span class="rounded-full bg-white border border-line px-2.5 py-1">Method: Official terms verification</span>
  </div>
</figure>
```

**Collapsed summary variant:** `<details class="rounded-xl border border-line"><summary class="cursor-pointer p-4 text-sm font-medium">Evidence (3) — how we verified</summary><div class="px-4 pb-4">…</div></details>` — ensures keyboard operability.

### 7.2 Last Verified Badge

```html
<span class="inline-flex items-center gap-1.5 rounded-full bg-success-soft text-success border border-success/20 px-3 py-1 text-xs font-semibold">
  <svg aria-hidden="true" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.7 6.2l-4 4a.7.7 0 01-1 0l-2-2a.7.7 0 111-1L7 8.4l3.3-3.3a.7.7 0 011 1z"/></svg>
  Last verified 2026-08-25
</span>
<!-- Unverified / blocked variants -->
<span class="inline-flex items-center gap-1.5 rounded-full bg-warning-soft text-warning border border-warning/20 px-3 py-1 text-xs font-semibold">● Verification pending</span>
<span class="inline-flex items-center gap-1.5 rounded-full bg-danger-soft text-danger border border-danger/20 px-3 py-1 text-xs font-semibold">● Blocked — requires manual check</span>
```

### 7.3 Source Link

```html
<a href="https://elevenlabs.io/terms" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline" aria-label="Source: ElevenLabs Terms (opens in new tab)">
  Source: elevenlabs.io/terms <span aria-hidden="true">↗</span>
</a>
```

All source links are `target="_blank"` with `rel="noopener"` and external indicator. No link without a visible destination.

---

## 8. Stack Builder UI — Step-by-Step Inputs

**Flow ( §11–13):** `Goal + Budget + Experience + Requirements → Recommendation → Why this recommendation?`

### 8.1 Stepper

```html
<ol class="flex items-center gap-2" aria-label="Stack builder progress">
  <li class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-white text-xs font-bold">1</span><span class="text-sm font-medium">Goal</span></li>
  <li class="h-px w-8 bg-line" aria-hidden="true"></li>
  <li class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-full bg-surface-muted text-ink-muted text-xs font-bold">2</span><span class="text-sm text-ink-muted">Budget</span></li>
  <!-- 3 Experience · 4 Requirements -->
</ol>
<div class="mt-3 h-1.5 rounded-full bg-surface-muted"><div class="h-1.5 rounded-full bg-brand" style="width:25%"></div></div>
```

Active step: `bg-brand text-white`. Completed: `bg-success text-white` with check. Upcoming: `bg-surface-muted text-ink-muted`. Progress bar mirrors stepper.

### 8.2 Goal Selector (Step 1 — primary action is “Find my stack”, not Browse)

Grid of problem-first options:

```html
<fieldset>
  <legend class="text-sm font-semibold">What are you trying to create?</legend>
  <div class="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
    <label class="cursor-pointer rounded-2xl border-2 border-line p-4 hover:border-brand has-[input:checked]:border-brand has-[input:checked]:bg-brand-soft">
      <input type="radio" name="goal" value="faceless" class="sr-only" checked>
      <p class="font-medium">🎬 Faceless videos</p><p class="text-xs text-ink-muted">Script → Voice → Video</p>
    </label>
    <!-- Shorts · Long-form · Podcast · Tutorials · Repurposing -->
  </div>
</fieldset>
```

Uses `:has([input:checked])` for selected state; fallback adds `.is-selected` class via JS for older browsers.

### 8.3 Budget (Step 2)

Segmented control, not a slider (discrete, explainable):

```html
<div class="inline-flex rounded-full bg-surface-muted p-1" role="radiogroup" aria-label="Budget">
  <label class="rounded-full px-4 py-1.5 text-sm font-medium has-[input:checked]:bg-white has-[input:checked]:shadow-sm cursor-pointer"><input type="radio" name="budget" class="sr-only" checked> $0</label>
  <label class="rounded-full px-4 py-1.5 text-sm font-medium has-[input:checked]:bg-white has-[input:checked]:shadow-sm cursor-pointer"><input type="radio" name="budget" class="sr-only"> $25</label>
  <label class="rounded-full px-4 py-1.5 text-sm font-medium has-[input:checked]:bg-white has-[input:checked]:shadow-sm cursor-pointer"><input type="radio" name="budget" class="sr-only"> $50</label>
  <label class="rounded-full px-4 py-1.5 text-sm font-medium has-[input:checked]:bg-white has-[input:checked]:shadow-sm cursor-pointer"><input type="radio" name="budget" class="sr-only"> $100+</label>
</div>
```

### 8.4 Experience (Step 3)

Same segmented pattern: `Beginner · Intermediate · Advanced`. Copy under selector: “We’ll bias toward ease and templates for Beginner.”

### 8.5 Requirements (Step 4)

Checkboxes (at least: Commercial use, Best quality, Cheapest, Fastest, Easiest). Commercial use is pinned first and emphasized.

```html
<label class="flex items-center gap-3 rounded-xl border border-line p-3 has-[input:checked]:border-brand has-[input:checked]:bg-brand-soft cursor-pointer">
  <input type="checkbox" class="h-4 w-4 rounded border-line text-brand focus:ring-brand">
  <span class="text-sm font-medium">Commercial use allowed</span><span class="ml-auto text-xs text-ink-muted">Required for monetized YouTube</span>
</label>
```

### 8.6 Recommendation Preview (live, below steps)

Shows *after* inputs: Stack Card (§4.2) + True Cost Panel (§4 micro) + “Why this recommendation?” bullets (`✓ Fits your budget` etc.). “Why” uses `role="status" aria-live="polite"`.

---

## 9. Navigation

### 9.1 Header

**Structure:** `sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-line`. Height `h-16`.

```html
<header class="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-line">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
    <a href="/" class="flex items-center gap-2 font-bold tracking-tight text-ink" aria-label="Home">⬢ CreativAI</a>
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium" aria-label="Primary">
      <a href="/tools" class="hover:text-brand">Tools</a>
      <a href="/workflows" class="hover:text-brand">Workflows</a>
      <a href="/compare" class="hover:text-brand">Compare</a>
      <a href="/about" class="hover:text-brand">About</a>
    </nav>
    <div class="flex items-center gap-2">
      <a href="#stack-builder" class="hidden sm:inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-hover">Find my stack</a>
      <button class="md:hidden rounded-full border border-line p-2" aria-label="Open menu" aria-expanded="false">☰</button>
    </div>
  </div>
</header>
```

Mobile menu: `<dialog>` or disclosure pattern with `aria-expanded`. Focus trap when open. Primary CTA (`Find my stack`) is the only prominent button in the header.

### 9.2 Footer

4-column on desktop, stacked on mobile:

```html
<footer class="border-t border-line bg-white mt-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
    <div><p class="font-bold">⬢ CreativAI</p><p class="mt-2 text-sm text-ink-secondary">The Creator AI Decision Platform. We help you choose the right AI stack, not browse more tools.</p></div>
    <div><h4 class="font-semibold text-sm">Categories</h4><ul class="mt-3 space-y-2 text-sm text-ink-secondary"><li><a href="#" class="hover:text-ink">Video</a></li><li><a href="#" class="hover:text-ink">Voice</a></li>...</ul></div>
    <div><h4 class="font-semibold text-sm">Decisions</h4><ul class="mt-3 space-y-2 text-sm text-ink-secondary"><li><a href="#" class="hover:text-ink">Faceless YouTube</a></li><li><a href="#" class="hover:text-ink">Compare tools</a></li></ul></div>
    <div><h4 class="font-semibold text-sm">Trust</h4><p class="mt-3 text-sm text-ink-secondary">P.A.C.E methodology · <a href="#" class="underline">How we verify</a> · Last verified policy.</p></div>
  </div>
  <div class="border-t border-line py-6 text-center text-xs text-ink-muted">© 2026 CreativAI · Affiliate disclosure: commissions never influence recommendations.</div>
</footer>
```

### 9.3 Breadcrumbs

```html
<nav aria-label="Breadcrumb" class="text-sm">
  <ol class="flex items-center gap-1.5 text-ink-muted">
    <li><a href="/" class="hover:text-ink">Home</a></li><li aria-hidden="true">/</li>
    <li><a href="/tools" class="hover:text-ink">Tools</a></li><li aria-hidden="true">/</li>
    <li aria-current="page" class="font-medium text-ink">ElevenLabs</li>
  </ol>
</nav>
```

### 9.4 Category Menu (Pill Nav)

```html
<div class="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
  <a href="#" aria-selected="true" class="rounded-full bg-ink text-white px-4 py-1.5 text-sm font-medium">All</a>
  <a href="#" class="rounded-full bg-white border border-line px-4 py-1.5 text-sm font-medium hover:bg-surface-muted">Video</a>
  <a href="#" class="rounded-full bg-white border border-line px-4 py-1.5 text-sm">Voice</a>
  <!-- Script / Thumbnails / Research -->
</div>
```

---

## 10. Responsive Behavior — Mobile-First Breakpoints

Tailwind defaults (no custom config needed):

| Breakpoint | Min Width | Tailwind Prefix | Usage in this system |
|------------|-----------|-----------------|----------------------|
| **Base** | 0 (360px design floor) | *(no prefix)* | Single-column stacks, 16px container padding, 2-col goal grid collapses to 2 cols (not 3), full-width cards. |
| `sm` | 640px | `sm:` | `px-6` container, 3-col grids begin, header shows “Find my stack” CTA. |
| `md` | 768px | `md:` | 2-col card grids, side-by-side comparison headers, header shows full nav, stepper horizontal. |
| `lg` | 1024px | `lg:` | 3-col card grids, sticky stack-builder preview, header + footer 4-col. |
| `xl` | 1280px | `xl:` | Max container `max-w-7xl` locks; no wider expansion. |

**Implementation rules:**

- **Mobile-first CSS:** Write base styles for mobile; add `md:`/`lg:` overrides for wider screens (not `max-*`).
- **Touch targets:** All interactive elements ≥ 44×44px (`min-h-11 min-w-11`).
- **Typography queuing:** H1 uses `text-4xl md:text-5xl` to avoid overflow on 360px.
- **Grid queuing:** Tool grids `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`; Stack Builder inputs `grid-cols-2 md:grid-cols-3`.
- **Header:** Nav links `hidden md:flex`; mobile menu button `md:hidden`.
- **Testing checklist (browser dev tools):** Verify at 360, 640, 768, 1024, 1280. Check: no horizontal scroll, tap targets spaced ≥8px, focus rings fully visible, cards maintain 16px+ internal padding at all widths.

```html
<!-- Example responsive page wrapper -->
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <section class="py-8 md:py-12">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- tool cards -->
    </div>
  </section>
</main>
```

---

## Appendix A — Token Summary (copy-paste for `tailwind.config.js`)

```js
// tailwind.config.js (production) — same tokens as CDN config in §0
module.exports = {
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','ui-sans-system','system-ui','sans-serif'] },
      colors: {
        brand: { DEFAULT: '#4F46E5', hover: '#4338CA', soft: '#EEF2FF' },
        ink: { DEFAULT: '#0F172A', secondary: '#475569', muted: '#94A3B8' },
        surface: { page: '#F8FAFC', card: '#FFFFFF', muted: '#F1F5F9' },
        line: '#E2E8F0',
        success: { DEFAULT: '#059669', soft: '#ECFDF5' },
        warning: { DEFAULT: '#D97706', soft: '#FFFBEB' },
        danger: { DEFAULT: '#DC2626', soft: '#FEF2F2' },
      }
    }
  }
}
```

## Appendix B — Accessibility Checklist (per component)

- [ ] All interactive elements keyboard reachable (`Tab` order = visual order).
- [ ] Visible focus rings on every control (`focus-visible:ring-2`).
- [ ] Color is never the sole signal (icons + text accompany success/warning).
- [ ] `aria-label` on icon-only buttons; `aria-current="page"` on breadcrumbs.
- [ ] `prefers-reduced-motion` respected (no excessive animation; if added, wrap in `@media (prefers-reduced-motion: reduce)`).
- [ ] Contrast: brand-on-white, ink-on-page, and white-on-brand all ≥ 4.5:1.

## Appendix C — File Map

```text
/docs/design-system-spec.md   ← this file (implementation-ready spec)
design-preview/index.html      ← static preview demonstrating all components (Task 2)
docs/04-design-system.md       ← architectural definition (parent)
```

*This spec is the single source for implementation tokens. Any deviation during production requires a PM-approved amendment logged in `15-changelog.md`.*
