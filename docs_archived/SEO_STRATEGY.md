# Stackwise — SEO Strategy

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** CONTENT_STRATEGY.md, ARCHITECTURE.md, PRODUCT_REQUIREMENTS.md

---

## 1. SEO Philosophy

### Core Principle

Stackwise SEO is **search-intent first**. Every page exists to answer a specific question a creator is actively searching for. We do not create pages to fill a matrix; we create pages that solve real decision problems.

### What We Optimize For

| Priority | Focus | Why |
|----------|-------|-----|
| 1 | **Decision-intent queries** | Users actively choosing tools are our highest-value audience |
| 2 | **Comparison queries** | "X vs Y" signals high purchase intent |
| 3 | **Alternative queries** | "X alternatives" signals switching intent |
| 4 | **Best-for queries** | "Best AI [tool] for [use case]" signals active selection |
| 5 | **Tool-name queries** | Direct tool research |
| 6 | **Category queries** | Early-stage exploration |

### What We Do NOT Optimize For

- Vanity traffic from informational queries with no decision intent
- Mass-generated thin pages targeting long-tail queries
- Programmatic pages without genuine content backing them
- Clickbait titles that misrepresent content

---

## 2. Page Types & Search Intent

### 2.1 Tool Pages

**URL Pattern:** `/tools/{tool-slug}`  
**Example:** `/tools/elevenlabs`

**Target Queries:**
- `{tool name} review`
- `{tool name} pricing`
- `{tool name} for youtube`
- `is {tool name} worth it`

**Title Pattern:** `{Tool Name} — Review, Pricing & P.A.C.E. Score | Stackwise`  
**Meta Description Pattern:** `In-depth evaluation of {Tool Name} for creators. P.A.C.E. score: {composite}. {Key differentiator}. Pricing from {lowest price}. Last verified {date}.`

**Structured Data:** `SoftwareApplication` + `Review` (JSON-LD)

### 2.2 Comparison Pages

**URL Pattern:** `/compare/{tool-a}-vs-{tool-b}`  
**Example:** `/compare/elevenlabs-vs-playht`

**Target Queries:**
- `{tool A} vs {tool B}`
- `{tool A} or {tool B}`
- `{tool A} compared to {tool B}`
- `difference between {tool A} and {tool B}`

**Title Pattern:** `{Tool A} vs {Tool B} — Comparison for Creators (2026) | Stackwise`  
**Meta Description Pattern:** `Side-by-side comparison of {Tool A} and {Tool B}. {Tool A} scores {score}, {Tool B} scores {score}. Best for {use case}: {winner}. Pricing, features, and hands-on evaluation.`

**Structured Data:** `ItemList` with two `SoftwareApplication` items

### 2.3 Alternative Pages

**URL Pattern:** `/alternatives/{tool-slug}`  
**Example:** `/alternatives/elevenlabs`

**Target Queries:**
- `{tool name} alternatives`
- `alternatives to {tool name}`
- `{tool name} competitors`
- `cheaper than {tool name}`
- `free alternatives to {tool name}`

**Title Pattern:** `Best {Tool Name} Alternatives for Creators (2026) | Stackwise`  
**Meta Description Pattern:** `Top alternatives to {Tool Name} for creators. Cheaper, better quality, and free options compared. P.A.C.E. scored. Find the right replacement.`

**Structured Data:** `ItemList`

### 2.4 Best-For Pages

**URL Pattern:** `/best/{query-slug}`  
**Example:** `/best/ai-voice-for-youtube`

**Target Queries:**
- `best ai {tool type} for {use case}`
- `best free ai {tool type}`
- `best ai {tool type} for beginners`
- `best ai {tool type} {year}`

**Title Pattern:** `Best AI {Tool Type} for {Use Case} (2026) — Tested & Ranked | Stackwise`  
**Meta Description Pattern:** `We tested {N} AI {tool type} tools for {use case}. Our top pick: {winner} (P.A.C.E. {score}). Compare pricing, quality, and ease of use.`

**Structured Data:** `ItemList` with ranked `SoftwareApplication` items

### 2.5 Stack Pages

**URL Pattern:** `/stacks/{stack-slug}`  
**Example:** `/stacks/faceless-youtube-beginner`

**Target Queries:**
- `ai tools for {use case}`
- `how to start {use case} with ai`
- `{use case} ai workflow`
- `{use case} ai stack`

**Title Pattern:** `{Use Case} AI Stack — Complete Workflow for {Level} (${cost}/mo) | Stackwise`  
**Meta Description Pattern:** `Complete AI tool stack for {use case}. {N} tools, ${cost}/month total. Each tool P.A.C.E. scored. Includes cheaper and free alternatives.`

**Structured Data:** `HowTo` or `ItemList`

### 2.6 Category Pages

**URL Pattern:** `/categories/{category-slug}`  
**Example:** `/categories/ai-video`

**Target Queries:**
- `ai {category} tools`
- `ai {category} generators`
- `best ai {category} tools {year}`

**Title Pattern:** `AI {Category} Tools — Compared & Ranked for Creators | Stackwise`  
**Meta Description Pattern:** `Compare the top AI {category} tools for creators. P.A.C.E. scored, pricing compared, hands-on tested. Find the right tool for your workflow.`

**Structured Data:** `ItemList`

---

## 3. Technical SEO

### 3.1 Rendering

- All content pages are **statically generated** (SSG) for optimal crawlability and speed
- No critical content behind JavaScript interactions
- No client-side routing for content pages (full SSR URLs)

### 3.2 URL Strategy

| Rule | Implementation |
|------|---------------|
| Clean URLs | No query parameters for content pages |
| Lowercase | All URLs lowercase |
| Hyphens | Use hyphens for word separation |
| No trailing slashes | Consistent trailing slash policy (no trailing slash) |
| Descriptive slugs | Slugs reflect content, not IDs |
| Stable URLs | Once published, URLs never change |

### 3.3 Canonical URLs

| Scenario | Canonical Strategy |
|----------|-------------------|
| Standard page | Self-referencing canonical |
| Comparison page | Alphabetical ordering (A vs B, not B vs A) |
| Paginated content | Canonical to first page (if pagination is needed) |
| Duplicate prevention | One canonical per content entity |

### 3.4 Sitemap

- Generated at build time from data files
- Includes all published pages with `lastmod` dates
- Submitted to Google Search Console
- Updated on every deployment
- Prioritized: homepage > tool pages > comparison pages > best-for pages > alternatives > stacks > category pages

### 3.5 robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://stackwise.io/sitemap.xml
```

### 3.6 Structured Data

| Schema Type | Used On | Fields |
|-------------|---------|--------|
| `SoftwareApplication` | Tool pages | name, description, offers, review, aggregateRating |
| `Review` | Tool pages | author, reviewRating, datePublished, dateModified |
| `ItemList` | Comparison, alternative, best-for, category pages | position, item |
| `BreadcrumbList` | All pages | position, name, item |
| `Organization` | Homepage | name, url, logo |
| `WebSite` | Homepage | name, url, potentialAction (SearchAction) |

### 3.7 Meta Tags

Every page must include:

```html
<title>{Unique, descriptive title} | Stackwise</title>
<meta name="description" content="{Compelling, accurate description}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{canonical URL}" />

<!-- Open Graph -->
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{canonical URL}" />
<meta property="og:image" content="{OG image URL}" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
```

---

## 4. Internal Linking Strategy

### Linking Principles

| Principle | Implementation |
|-----------|---------------|
| **Every tool page links out** | To comparisons, alternatives, stacks, and category |
| **Every comparison links back** | To both tool pages |
| **Every alternative links across** | To tool pages and comparison pages |
| **Stacks link to tools** | Each stack item links to its tool page |
| **Category pages link down** | To all tools in the category |
| **Breadcrumbs link up** | Hierarchical navigation on every page |

### Link Architecture

```
Homepage
├── Category Page ←→ Tool Pages
│       ↕                ↕
│   Best-For Pages ←→ Comparison Pages
│                        ↕
│                  Alternative Pages
│
└── Stack Pages → Tool Pages
```

### Contextual Internal Links

Within content sections, add contextual links:
- Tool descriptions mention related comparisons naturally
- Comparison verdicts link to alternative pages for the losing tool
- Stack pages link to best-for pages for each role

---

## 5. AI Search / GEO Considerations

### Generative Engine Optimization

As AI-powered search (Google AI Overviews, Bing Chat, Perplexity) becomes more prevalent:

| Strategy | Implementation |
|----------|---------------|
| **Structured, citable data** | P.A.C.E. scores and verdicts in clearly extractable format |
| **Clear expert voice** | Methodology page establishes authority |
| **Definitive answers** | Comparison verdicts give clear recommendations |
| **Fact-rich content** | Pricing, features, and scores are concrete, extractable data |
| **Schema markup** | Comprehensive structured data for AI comprehension |
| **E-E-A-T signals** | Hands-on evaluation, methodology, transparency |

### Content Format for AI Extraction

Pages should include clearly structured answer blocks:

```
## Quick Verdict
If you need [use case], choose [Tool A] (P.A.C.E.: 8.2, $10/month).
If budget is priority, choose [Tool B] (P.A.C.E.: 7.1, Free).
```

These "quick verdict" blocks are designed to be extracted by AI search engines while driving users to the full page for evidence.

---

## 6. Programmatic SEO Boundaries

### What We WILL Generate Programmatically

- Tool pages (from structured tool data)
- Comparison pages (from comparison data)
- Alternative pages (from alternative relationships)
- Category pages (from category data)
- Stack pages (from stack data)
- Sitemap entries

### What We Will NOT Generate Programmatically

- Best-for pages (curated editorially — each requires genuine evaluation)
- Arbitrary tool × tool comparison matrices (only meaningful comparisons)
- Thin "vs" pages for tools that don't compete
- Auto-generated content without editorial review
- Pages targeting queries without genuine decision intent

### Quality Threshold

A programmatically generated page must have:
- At least 500 words of unique, useful content
- Genuine evaluation data (P.A.C.E. scores at standard confidence)
- Accurate, verified pricing and feature data
- Clear user value (answers a question someone is actually asking)

Pages that don't meet this threshold are **not published**, even if the URL structure supports them.

---

## 7. Content Freshness Signals

| Signal | Implementation |
|--------|---------------|
| `dateModified` in structured data | Updated on every content change |
| "Last verified" date on page | Human-visible freshness indicator |
| Year in title (where natural) | "(2026)" in best-for and comparison titles |
| Changelog section (major pages) | "What's changed" for frequently updated tools |
| Regular sitemap updates | `lastmod` reflects actual content changes |

---

## 8. Measurement & Monitoring

### Key SEO Metrics (Post-MVP, Phase 9+)

| Metric | Tool | Target |
|--------|------|--------|
| Organic impressions | Google Search Console | Growth trend |
| Click-through rate | Google Search Console | > 4% average |
| Core Web Vitals | Lighthouse / CrUX | All green |
| Index coverage | Google Search Console | 95%+ of published pages |
| Structured data validity | Google Search Console | 0 errors |
| Top keyword rankings | Third-party tool | Top 10 for target queries |

---

*End of SEO Strategy.*
