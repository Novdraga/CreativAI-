# 01 — Product Specification

> **Document:** `01-product-spec.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §1–7, §53–55.
> **Related:** `02-info-architecture.md`, `03-data-schema.md`, `05-mvp-backlog.md`.

---

## 1. Product Vision

We are **not** building an AI tools directory, a site with thousands of AI tools, or a generic AI decision engine.

We are building a **Creator AI Decision Platform** — a platform that helps content creators make the correct decision about AI tools and build the workflow that fits them.

### Core Promise

> **Find the right AI tools and build the right AI workflow for your content.**

The product transforms the user's question from:

> "What is the best AI tool?"

into:

> "What is the best set of tools for my goal, my budget, and my experience level?"

## 2. Product Philosophy

The product is built around the chain:

```text
Goal → Constraints → Workflow → Recommendation → Comparison → Evidence → Decision → Action
```

And explicitly **not**:

```text
Directory → Browse → Search → Leave
```

**Product rule:** We optimize for decisions, not page views.

## 3. Target Audience

Primary audience: **Creators**, specifically:

- YouTubers
- Faceless YouTubers
- Shorts creators
- Podcasters
- Solo creators
- Beginners
- Small creator teams

Explicitly excluded from initial targeting (future expansion segments only): large companies, Enterprise, all AI users, Developers, Agencies, Marketers.

## 4. Vertical Strategy

| Phase | Vertical | Rule |
|-------|----------|------|
| Phase 1 | Creators / YouTubers | Only vertical for MVP |
| Phase 2 | Marketing / Agencies | Blocked until Creator vertical succeeds |
| Phase 3 | Developers | Blocked until Phase 2 succeeds |
| Phase 4 | General AI Decision Engine | Long-term vision |

Expanding into other segments before proving the Creator vertical is **forbidden**.

## 5. Personas

### P1 — "Beginner Faceless YouTuber" (primary persona)

- **Profile:** New creator, no on-camera presence, limited technical skill.
- **Goal:** Launch a faceless YouTube channel (Shorts first, then long-form).
- **Budget:** $50/month maximum.
- **Constraints:** Must allow commercial use; beginner-friendly tools only; predictable monthly cost.
- **Success:** Publishes consistently using a recommended stack without wasted subscriptions.

### P2 — "Shorts Volume Creator"

- **Profile:** Publishes high volume (target: ~100 Shorts/month).
- **Goal:** Minimize cost-per-output while keeping acceptable quality.
- **Budget:** $0–$25/month preferred; evaluates True Cost per Short.
- **Constraints:** Speed and batch production; captions and thumbnails included.

### P3 — "Solo Podcaster / Repurposer"

- **Profile:** Produces long-form audio/video; repurposes into clips, articles, posts.
- **Goal:** One research-and-repurposing workflow fed by existing content.
- **Budget:** $25–$100/month.
- **Constraints:** Quality of transcripts/summaries; commercial rights for client work.

All three personas share the core need: **a confident, evidence-backed decision, not another browsing session.**

## 6. User Journeys

### Journey A — "Build my stack" (Stack Builder V1)

1. User lands on Homepage; Hero states the problem ("Build the right AI stack for your content").
2. User selects Goal (e.g., Faceless videos), Budget ($50), Experience (Beginner), Requirements (Commercial use).
3. System returns a **Recommended Workflow** with mapped tools, estimated monthly cost, and reasons ("Fits your budget ✓ Beginner friendly ✓ Commercial use available ✓").
4. User inspects Evidence, compares alternatives, opens Tool Pages.
5. User exits via CTA to the chosen tool.

### Journey B — "Compare before I pay"

1. User arrives via search at a Comparison page (`compare/[tool-a]-vs-[tool-b]`).
2. Reads "Who should choose A / Who should choose B", P.A.C.E scores, True Cost, Commercial use notes.
3. Reads **Our recommendation** verdict with justification.
4. Clicks through to the winning tool or its Alternatives page.

### Journey C — "I'm leaving tool X"

1. User arrives at an Alternatives page (`alternatives/[tool]`).
2. Selects a leaving reason (too expensive / too complicated / need better quality / need commercial rights / need another workflow).
3. Gets "Best alternative for your situation" with trade-off reasoning.
4. Proceeds to the alternative's Tool Page and CTA.

## 7. MVP Scope

| Item | Target | Notes |
|------|--------|-------|
| Tools | **12–15 (hard cap 15)** | Deep evaluation over volume; expansion beyond 15 requires written PM approval based on real data analysis |
| Categories | 5 | Video, Voice, Script/Writing, Thumbnails/Images, Research/Repurposing |
| Workflows | 5–10 | Each maps steps → recommended + alternative tools |
| Comparisons | 5–10 | Verdict-driven, evidence-linked |
| Alternative pages | 5–10 | Core feature, not SEO filler |
| Hands-on benchmarks | 3–5 initially | Expand only based on real data |
| Decision pages | 3–5 | Problem-first pages ("I need a faceless YouTube stack") |

MVP includes: Homepage, Tools index, Tool Pages, Categories, Workflows, Comparisons, Alternatives, Best-for pages, Stacks, About/Methodology, Stack Builder V1 (rules-based).

## 8. Non-MVP Scope (Explicitly Deferred)

Authentication/user accounts, user dashboard, admin panel/CMS, vector database, embeddings, semantic search, AI recommendation engine (V1 is Rules + Scoring only), chatbot, marketplace, user-generated reviews, social features, enterprise dashboards, complex analytics. Any addition requires explicit PM approval (Directive §68–70).

## 9. Monetization (Summary)

1. **Affiliate links** — primary initial source.
2. Sponsored placements — later, clearly separated from editorial evaluation.
3. Premium features — later.
4. Advanced decision engine — later.

Trust rule: recommendations are never changed because of commission (Directive §49, §56).

## 10. North Star Metric

**Qualified Decision Sessions** — sessions reaching:

```text
Goal → Recommendation → Tool/Stack → Action
```

Early success signals (not artificial targets): users reaching recommendations, tool clicks, comparison usage, affiliate CTR, repeat usage. Traffic without decisions means the product needs adjustment (Directive §54).

---

*Cross-references: URL structure in `02-info-architecture.md`; entity schemas in `03-data-schema.md`; phase tasks in `05-mvp-backlog.md`; scoring in `08-evaluation-model.md`.*
