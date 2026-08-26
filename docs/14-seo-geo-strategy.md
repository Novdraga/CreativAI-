# 14 — SEO / GEO Strategy

> **Document:** `14-seo-geo-strategy.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §22–24, §50–52.
> **Related:** `02-info-architecture.md`, `05-mvp-backlog.md` §10 (Phase 8), `09-evidence-model.md` §4 (asset leverage).

---

## 1. SEO Principle (Directive §51)

We do not write 1000 AI articles. We write **content that answers real decisions**, e.g.:

```text
Best AI voice for faceless YouTube
ElevenLabs alternatives
Best AI stack under $50
Best AI tools for beginners
Best video workflow for Shorts
```

## 2. Keyword Clusters → Page Types

| Cluster | Intent | Page type & route |
|---------|--------|-------------------|
| "best [tool-category] for [use-case]" (e.g., best AI voice for faceless YouTube) | Decision: pick winner | Best-for decision pages `/best/[use-case]` |
| "[tool] alternatives" | Switch intent | Alternatives pages `/alternatives/[tool]` (`11`) |
| "[tool a] vs [tool b]" | Comparison intent | Comparisons `/compare/[a]-vs-[b]` (`10`) |
| "AI stack under $X" / budget stacks | Budget-constrained stack building | Stack pages + Stack Builder entry `/stacks/[stack]` |
| "[use-case] workflow" (e.g., video workflow for Shorts) | Process guidance | Workflows `/workflows/[workflow]` (`12`) |
| "[tool] review / pricing / commercial use" | Evaluation intent | Tool Pages `/tools/[tool]` |

Cluster prioritization follows the vertical slice first (`07-vertical-slice-plan.md`), then expands with MVP content budget (`01-product-spec.md` §7).

## 3. GEO (Generative Engine Optimization) Rules

Content must be AI-search-friendly (Directive §50):

- Clear factual statements that can be quoted standalone (verdicts, prices, dates).
- Structured data reflecting page type (Product/Review-style semantics deferred to Phase 8 implementation).
- Explicit evidence citations and `last_verified` dates — freshness and provenance are ranking assets.
- Decision-first summaries at page top ("Our recommendation: X because …").

## 4. Content Engine Discipline (Directive §23)

Data is structured for reuse — one Tool yields Tool Page, Alternative Page, Comparison Page, Best-X Page, Workflow Page, Budget Page — but **no auto-generated low-value pages**. Every page adds real value.

Benchmark leverage multiplies content legitimately (Directive §22): one hands-on test feeds an article, comparison inputs, short video, social post, and tool-page evidence.

## 5. Internal Linking Model

- Tool ↔ Workflow (steps), Tool ↔ Comparison, Tool ↔ Alternatives, Best-for → Tool/Stack.
- Links derive from data relations (`03-data-schema.md` reference fields), not manual decoration.
- Every decision page links to ≥ 1 Tool Page CTA path (supports North Star metric, `01-product-spec.md` §10).

## 6. Phase 8 Technical Checklist (implementation later)

Per Directive §50 — executed only after the real product exists:

- Metadata & titles aligned to clusters above
- Canonical URLs (stable slugs per `02-info-architecture.md` §6)
- Sitemap & robots
- Structured data
- Internal linking automation from data relations
- Topic cluster architecture
- Search-intent pages audit
- Clear factual evidence markup

Measurement (Directive §52): traffic, search impressions, CTR, engagement on tool/comparison pages, outbound clicks — feeding Phase 9 validation.

## 7. Prohibitions

No mass-generated articles · no fake benchmarks as content · no misleading pricing claims · no aggressive affiliate CTAs disguised as editorial content (Directive §56).
