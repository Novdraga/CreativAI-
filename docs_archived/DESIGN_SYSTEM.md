# Stackwise — Design System

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** ARCHITECTURE.md, PRODUCT_REQUIREMENTS.md

---

## 1. Visual Identity

### Brand Essence

Stackwise must feel like a **premium decision-making product** — authoritative, trustworthy, and clear.

It must NOT feel like:

| ❌ Anti-Pattern | Why |
|----------------|-----|
| Generic AI directory | We are not a listing site |
| Template marketplace | We don't sell templates |
| Cheap SaaS landing page | We are not selling software |
| AI-generated website | We must demonstrate quality craft |
| Developer documentation | We serve creators, not engineers |
| News/blog site | We are a product, not a publication |

### Visual Personality

| Trait | Expression |
|-------|-----------|
| **Trustworthy** | Clean layouts, consistent patterns, transparent data display |
| **Intelligent** | Thoughtful information hierarchy, data-driven design |
| **Approachable** | Warm tones, readable typography, no jargon in UI |
| **Premium** | Generous whitespace, refined typography, subtle motion |
| **Focused** | Every element serves the user's decision; no decorative clutter |

---

## 2. Color Direction

### Philosophy

Colors must support **readability, hierarchy, and data interpretation**. The palette should feel modern and warm — not cold-tech blue, not garish AI-neon.

### Palette Strategy

| Role | Description | Usage |
|------|-------------|-------|
| **Background** | Near-white or very light neutral | Page backgrounds, content areas |
| **Surface** | Slightly elevated background | Cards, panels, modals |
| **Primary** | Deep, confident color for CTAs and emphasis | Buttons, active states, key links |
| **Secondary** | Complementary accent | Supporting UI elements, category tags |
| **Text Primary** | High-contrast dark | Body text, headings |
| **Text Secondary** | Medium-contrast | Supporting text, descriptions |
| **Text Tertiary** | Low-contrast | Metadata, timestamps |
| **Border** | Subtle dividers | Cards, table rows, separators |
| **Success** | Green-family | Positive indicators, high scores |
| **Warning** | Amber-family | Caution indicators, medium scores |
| **Danger** | Red-family | Negative indicators, low scores |

### P.A.C.E. Score Colors

Score visualization requires a **semantic color scale**:

| Score Range | Color Intent | Meaning |
|-------------|-------------|---------|
| 9–10 | Strong positive (deep green-teal) | Excellent |
| 7–8 | Positive (green) | Good |
| 5–6 | Neutral (amber) | Average |
| 3–4 | Cautious (orange) | Below average |
| 1–2 | Negative (red) | Poor |

Colors must meet **WCAG 2.1 AA contrast ratios** against their backgrounds.

### Dark Mode

Dark mode is **Post-MVP**. The color system should be built with CSS custom properties from day one to enable straightforward dark mode implementation later.

---

## 3. Typography Direction

### Font Strategy

| Role | Direction | Usage |
|------|-----------|-------|
| **Headings** | Geometric sans-serif (e.g., Inter, Outfit) | Page titles, section headers, tool names |
| **Body** | Humanist sans-serif (e.g., Inter, Source Sans) | Body text, descriptions, evaluations |
| **Data / Scores** | Monospace or tabular figures | P.A.C.E. scores, pricing, metrics |

**Inter** is the recommended primary typeface: modern, highly legible, excellent tabular figure support, free, well-maintained.

### Type Scale

Use a **modular scale** (1.25 ratio recommended) to establish hierarchy:

| Level | Use | Approximate Size |
|-------|-----|-----------------|
| Display | Hero text, page titles | 36–48px |
| H1 | Page headings | 28–32px |
| H2 | Section headings | 22–26px |
| H3 | Sub-section headings | 18–20px |
| H4 | Card titles | 16–18px |
| Body | Default text | 16px |
| Small | Supporting text, captions | 14px |
| XSmall | Metadata, timestamps | 12px |

### Typography Rules

1. **Maximum line length:** 65–75 characters for body text
2. **Line height:** 1.5–1.7 for body, 1.2–1.3 for headings
3. **Font weight range:** Regular (400) for body, Medium (500) for emphasis, Semibold (600) for headings, Bold (700) sparingly
4. **No text decoration for emphasis** — Use weight or color, not underlines (reserve underlines for links)

---

## 4. Spacing System

### Philosophy

Consistent spacing creates visual rhythm and reduces cognitive load. Use a **base-8 spacing scale**.

### Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps, inline spacing |
| `--space-2` | 8px | Component internal padding |
| `--space-3` | 12px | Related element spacing |
| `--space-4` | 16px | Standard component padding |
| `--space-5` | 24px | Section spacing |
| `--space-6` | 32px | Major section breaks |
| `--space-7` | 48px | Page-level spacing |
| `--space-8` | 64px | Hero/major section dividers |
| `--space-9` | 96px | Page margins, large spacing |

### Rules

1. **Use tokens, not arbitrary values** — Every spacing value must reference the scale
2. **Consistent direction** — Prefer `margin-bottom` for vertical flow
3. **Component isolation** — Components own their internal spacing; parents own gaps between components

---

## 5. Component Philosophy

### Component Design Principles

1. **Single responsibility** — Each component does one thing well
2. **Composable** — Components combine to create complex layouts
3. **Self-contained styles** — CSS Modules scoped to each component
4. **Accessible by default** — Keyboard navigation, ARIA labels, semantic HTML
5. **Responsive by default** — Components adapt to container width

### MVP Component Inventory

#### Layout Components

| Component | Purpose |
|-----------|---------|
| `PageLayout` | Standard page wrapper with header, main, footer |
| `Header` | Global navigation header |
| `Footer` | Global footer |
| `Breadcrumbs` | Breadcrumb navigation |
| `Container` | Max-width content container |
| `Grid` | Responsive grid layout |

#### Tool Components

| Component | Purpose |
|-----------|---------|
| `ToolCard` | Compact tool display for listings |
| `ToolHeader` | Tool page hero with name, logo, category, scores |
| `ToolPricing` | Pricing tier display |
| `ToolFeatures` | Feature list/grid |
| `ToolLimitations` | Limitations display |
| `AffiliateButton` | CTA button with disclosure |

#### P.A.C.E. Components

| Component | Purpose |
|-----------|---------|
| `PaceScore` | Single dimension score display |
| `PaceScoreCard` | Complete 4-dimension score card |
| `PaceComposite` | Composite score display |
| `PaceBar` | Horizontal bar visualization for a score |
| `PaceRadar` | Radar/spider chart for comparing P.A.C.E. profiles (post-MVP) |
| `ConfidenceIndicator` | Confidence level badge |

#### Comparison Components

| Component | Purpose |
|-----------|---------|
| `ComparisonHeader` | "Tool A vs Tool B" page header |
| `ComparisonTable` | Side-by-side feature comparison |
| `ComparisonScores` | Side-by-side P.A.C.E. scores |
| `ComparisonVerdict` | "Best for..." verdict section |

#### Stack Components

| Component | Purpose |
|-----------|---------|
| `StackOverview` | Stack summary with total cost |
| `StackStep` | Single step in a stack workflow |
| `StackCostBreakdown` | Cost breakdown table |
| `StackAlternatives` | Alternative tools per stack position |

#### UI Primitives

| Component | Purpose |
|-----------|---------|
| `Button` | Action buttons (primary, secondary, ghost) |
| `Badge` | Category tags, status indicators |
| `Tag` | "Best for" tags, feature tags |
| `Divider` | Section dividers |
| `Tooltip` | Contextual information |
| `LastUpdated` | "Last verified" date display |
| `Disclosure` | Affiliate disclosure component |

---

## 6. Cards

### Card Design Principles

Cards are the primary content container for tool listings, comparisons, and stack items.

| Principle | Implementation |
|-----------|---------------|
| **Clear hierarchy** | Tool name > Score > Key differentiator > Price |
| **Scannable** | Users should extract key info without reading the full card |
| **Consistent** | Same card structure across all tool listings |
| **Interactive** | Subtle hover state indicating clickability |
| **Informative** | Essential decision-supporting data visible at a glance |

### Card Anatomy

```
┌─────────────────────────────────────┐
│  [Logo]  Tool Name                  │
│          Category Tag               │
│                                     │
│  P [█████████░] 8                   │
│  A [███████░░░] 7                   │
│  C [██████░░░░] 6                   │
│  E [█████████░] 9                   │
│                                     │
│  "Best for faceless YouTube"        │
│                                     │
│  From $5/mo · Free tier available   │
│                                     │
│  [View Details →]                   │
└─────────────────────────────────────┘
```

---

## 7. Tables

### Table Design Principles

Tables are used for feature comparisons, pricing, and data-heavy displays.

| Principle | Implementation |
|-----------|---------------|
| **Readable** | Adequate cell padding, clear headers, alternating row hints if needed |
| **Responsive** | Horizontal scroll on mobile for complex tables; card layout for simple data |
| **Sortable** | Post-MVP: column sorting for data tables |
| **Highlighted** | Key differences highlighted visually |

### Comparison Table Pattern

```
┌──────────────┬─────────────┬─────────────┐
│   Feature    │   Tool A    │   Tool B    │
├──────────────┼─────────────┼─────────────┤
│ Feature X    │     ✓       │     ✓       │
│ Feature Y    │     ✓       │     ✗       │  ← Highlighted difference
│ Feature Z    │     ✗       │     ✓       │  ← Highlighted difference
│ Price        │   $10/mo    │   $15/mo    │
│ Free Tier    │     ✓       │     ✗       │  ← Highlighted difference
└──────────────┴─────────────┴─────────────┘
```

---

## 8. Score Visualization

### P.A.C.E. Score Display

The primary score visualization is a **horizontal bar** with numerical label:

```
Price per Result    [████████░░]  8/10
Accuracy            [███████░░░]  7/10
Customization       [██████░░░░]  6/10
Ease for Beginners  [█████████░]  9/10
                    ──────────────────
Composite                        7.5
```

### Design Requirements

1. **Color-coded bars** — Color maps to score range (see Color Direction)
2. **Numerical score always visible** — The number is the primary data point
3. **Dimension labels always visible** — Users must know what each bar means
4. **Composite visually distinct** — Separated from individual dimensions
5. **Confidence indicator** — Small badge or indicator near the score card
6. **Accessible** — Scores conveyed via text, not just color

### Comparison Score Display

When comparing two tools, show scores side by side with visual advantage indication:

```
                    Tool A          Tool B
Price               8 [████████]   6 [██████]    ← A wins
Accuracy            7 [███████]    8 [████████]  ← B wins
Customization       6 [██████]     6 [██████]    ← Tie
Ease                9 [█████████]  7 [███████]   ← A wins
```

---

## 9. Page Layouts

### Tool Page Layout

```
┌──────────────────────────────────────────┐
│ Header / Navigation                       │
├──────────────────────────────────────────┤
│ Breadcrumbs: Home > AI Voice > ElevenLabs │
├──────────────────────────────────────────┤
│                                          │
│ [Logo] ElevenLabs                        │
│ AI Voice · Text-to-Speech                │
│                                          │
│ ┌─────────────────┐  ┌────────────────┐  │
│ │ P.A.C.E. Scores │  │  Quick Info    │  │
│ │ [Score Card]     │  │  Price: From   │  │
│ │                  │  │  Free Tier: ✓  │  │
│ │                  │  │  Best For: ... │  │
│ │                  │  │ [Try Tool →]   │  │
│ └─────────────────┘  └────────────────┘  │
│                                          │
│ ## Overview                              │
│ [Description text]                       │
│                                          │
│ ## Pricing                               │
│ [Pricing table]                          │
│                                          │
│ ## Key Features                          │
│ [Feature grid]                           │
│                                          │
│ ## Limitations                           │
│ [Limitations list]                       │
│                                          │
│ ## Commercial Rights                     │
│ [Rights summary]                         │
│                                          │
│ ## Compare & Alternatives                │
│ [Related content links]                  │
│                                          │
│ [Affiliate Disclosure]                   │
├──────────────────────────────────────────┤
│ Footer                                   │
└──────────────────────────────────────────┘
```

### Stack Page Layout

```
┌──────────────────────────────────────────┐
│ Header / Navigation                       │
├──────────────────────────────────────────┤
│                                          │
│ Faceless YouTube — Beginner Stack        │
│ Budget: $0-50/mo · Experience: Beginner  │
│                                          │
│ Total Monthly Cost: $37                  │
│                                          │
│ ┌────────────────────────────────────┐   │
│ │ Step 1: Research                   │   │
│ │ → Tool A · P.A.C.E. [8.2] · Free  │   │
│ │   Why: [reasoning]                 │   │
│ │   Alt: Tool X (cheaper), Tool Y   │   │
│ ├────────────────────────────────────┤   │
│ │ Step 2: Script                     │   │
│ │ → Tool B · P.A.C.E. [7.5] · $10  │   │
│ │   Why: [reasoning]                 │   │
│ │   Alt: Tool Z (free)              │   │
│ ├────────────────────────────────────┤   │
│ │ Step 3: Voice                      │   │
│ │ → Tool C · P.A.C.E. [8.0] · $5   │   │
│ │   ...                             │   │
│ ├────────────────────────────────────┤   │
│ │ Step 4: Video                      │   │
│ │ → Tool D · P.A.C.E. [7.0] · $15  │   │
│ │   ...                             │   │
│ ├────────────────────────────────────┤   │
│ │ Step 5: Thumbnail                  │   │
│ │ → Tool E · P.A.C.E. [7.8] · $7   │   │
│ │   ...                             │   │
│ └────────────────────────────────────┘   │
│                                          │
│ ## Cost Breakdown                        │
│ [Detailed cost table]                    │
│                                          │
│ [Affiliate Disclosure]                   │
├──────────────────────────────────────────┤
│ Footer                                   │
└──────────────────────────────────────────┘
```

---

## 10. Responsive Behavior

### Breakpoints

| Breakpoint | Name | Target |
|-----------|------|--------|
| < 640px | Mobile | Phone portrait |
| 640–768px | Mobile landscape | Phone landscape, small tablet |
| 768–1024px | Tablet | Tablet, small laptop |
| 1024–1280px | Desktop | Standard desktop |
| > 1280px | Wide | Large monitors |

### Responsive Rules

1. **Mobile-first CSS** — Base styles target mobile; larger screens add complexity
2. **Content reflow, not hiding** — Critical information is never hidden on mobile
3. **Touch targets** — Minimum 44×44px for interactive elements on mobile
4. **Comparison tables** — Switch to stacked card layout on mobile
5. **Navigation** — Collapse to hamburger menu on mobile
6. **Score bars** — Maintain readability at all sizes; consider compact score display on mobile

---

## 11. Accessibility Requirements

### WCAG 2.1 AA Compliance

| Requirement | Implementation |
|-------------|---------------|
| Color contrast | 4.5:1 for normal text, 3:1 for large text |
| Keyboard navigation | All interactive elements focusable and operable via keyboard |
| Focus indicators | Visible focus ring on all interactive elements |
| Screen reader support | Semantic HTML, ARIA labels where needed |
| Alt text | All informational images have descriptive alt text |
| Form labels | All inputs have associated labels |
| Error identification | Clear error messages associated with form fields |
| Reduced motion | `prefers-reduced-motion` support for animations |
| Text scaling | Layout functional up to 200% browser zoom |

### Score Accessibility

P.A.C.E. scores must be conveyed through:
- Numerical value (primary)
- Color (supplementary, never sole indicator)
- Bar length (supplementary visual)
- Screen reader text (e.g., "Price per Result: 8 out of 10, rated Good")

---

## 12. Motion Principles

### Philosophy

Motion should **clarify interactions**, not decorate. Every animation must have a **functional purpose**.

### Guidelines

| Principle | Rule |
|-----------|------|
| **Duration** | 150–300ms for micro-interactions; 300–500ms for layout transitions |
| **Easing** | `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for state changes |
| **Purpose** | Hover feedback, state transitions, content loading, scroll-based reveals |
| **Restraint** | No animation for animation's sake. No bouncing logos. No pulsing elements. |
| **Reduced motion** | All animations respect `prefers-reduced-motion: reduce` |

### Permitted Animations

| Element | Animation | Purpose |
|---------|-----------|---------|
| Buttons | Background color transition on hover/focus | Interaction feedback |
| Cards | Subtle elevation/shadow change on hover | Indicate interactivity |
| Score bars | Width animation on page load | Draw attention to scores |
| Navigation | Smooth transitions for mobile menu | Orientation |
| Page transitions | Fade or subtle slide | Context change indication |

### Forbidden Animations

- Auto-playing carousels
- Parallax scrolling effects
- Continuous background animations
- Animated gradients
- Bouncing/pulsing call-to-action elements

---

*End of Design System.*
