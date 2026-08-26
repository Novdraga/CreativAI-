# Stackwise — Changelog

> All notable changes to the Stackwise project will be documented in this file.  
> Format follows [Keep a Changelog](https://keepachangelog.com/).

---

## [1.0.0] — 2026-08-25

### Phase 1: Foundation & Constitution

#### Added

- **PROJECT_CONSTITUTION.md** — Supreme source of truth defining project identity, mission, principles, non-goals, target audience, quality standards, architecture principles, AI agent governance, definition of done, decision-making rules, and scope creep prevention guardrails.

- **PRODUCT_VISION.md** — Product vision defining the creator decision problem, existing market gap, four target personas, eight primary jobs-to-be-done, five core user journeys, long-term expansion strategy (Creators → Marketing → Developers → General AI), success metrics, and competitive positioning.

- **PRODUCT_REQUIREMENTS.md** — Phased product requirements with 70+ requirements across MVP (tool pages, comparisons, alternatives, best-for, stacks, SEO, trust), Post-MVP (Stack Builder, admin, analytics, enhanced search), and Future (personalization, community, Intelligence V2, vertical expansion). MVP explicitly constrained to ~75–110 pages covering 20–30 tools.

- **ARCHITECTURE.md** — Technical architecture defining Next.js App Router with TypeScript strict, CSS Modules, file-based data for MVP (migrating to PostgreSQL post-MVP). Includes complete directory structure, module architecture, rendering strategy (SSG-first), performance budgets, security considerations, testing strategy, and migration paths.

- **DATA_MODEL.md** — Conceptual data model with 9 MVP entities (Tool, Category, PricingPlan, Evaluation, Comparison, Alternative, Stack, StackItem, ContentPage) and 7 deferred entities. Includes field definitions, relationships, validation rules, entity relationship diagram, and file-based storage strategy.

- **DESIGN_SYSTEM.md** — Visual design direction establishing premium decision-product aesthetic. Defines color direction (with P.A.C.E. score color semantics), typography (Inter recommended), base-8 spacing system, component philosophy with ~30 component inventory, card and table patterns, score visualization, page layouts (tool page, stack page), responsive breakpoints, WCAG 2.1 AA accessibility requirements, and motion principles.

- **SEO_STRATEGY.md** — Search strategy covering six page types with URL patterns, title/meta templates, and structured data schemas. Defines internal linking architecture, AI Search/GEO considerations, programmatic SEO quality boundaries, and content freshness signals.

- **CONTENT_STRATEGY.md** — Editorial system defining content priorities (Alternatives → Comparisons → Stacks → Best-for → Tool pages), writing standards, AI-assisted content policy, update cadence (90-day cycles), source requirements, fact verification procedures, disclosure policy, and human review requirements.

- **PACE_METHODOLOGY.md** — Complete P.A.C.E. evaluation framework defining four dimensions (Price per Result, Accuracy, Customization, Ease for Beginners) with 1–10 scoring scale, measurement methods, evidence requirements, confidence levels (1–4), handling missing data, versioning and re-testing policy, category-specific considerations, anti-gaming rules, and public communication policy.

- **RESEARCH_PROTOCOL.md** — Tool research process defining information classification (fact/observation/inference/opinion), four-tier source hierarchy, discovery pipeline, verification procedures (pricing, features, terms, affiliate), data freshness thresholds, data collection template, update frequency triggers, and research ethics commitments.

- **TOOL_EVALUATION_PROTOCOL.md** — Standardized hands-on testing protocol with five evaluation phases, 15 category-specific standardized prompts (3 per category at basic/intermediate/advanced levels), evidence requirements, evaluation record template, quality control checklist, re-evaluation process, and prioritization framework.

- **AFFILIATE_STRATEGY.md** — Monetization strategy establishing ranking independence as the foundational rule. Defines disclosure requirements, affiliate metadata structure, link tracking strategy (future `/go/` redirect system), sponsored placement rules (Phase 12+), trust audit procedures, and legal compliance considerations.

- **AGENT_ROLES.md** — AI agent governance defining roles and responsibilities for seven agents (Claude Opus 4.6, Claude Sonnet 4.6, Gemini 3.7 Flash, Mimo V2.5, Muse Spark 1.2, Nemotron 3 Ultra, GPT-OSS 120B). Includes decision authority matrix, handoff protocols, conflict resolution hierarchy, and communication formats.

- **ROADMAP.md** — 15-phase project roadmap (Phase 0–14) with objectives, deliverables, dependencies, exit criteria, and risks for each phase. No calendar dates committed. Phases progress from Foundation through Beta Launch to Vertical Expansion.

- **CHANGELOG.md** — This file. Initial project changelog.

#### Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 15+ (App Router) | SSR/SSG for SEO, React ecosystem, Vercel-native |
| Language | TypeScript (strict) | Type safety, maintainability, self-documenting |
| Styling | CSS Modules + custom properties | No framework lock-in, performance, full control |
| MVP data storage | JSON files in repo | No infrastructure dependency, version-controlled |
| Future database | PostgreSQL | Relational model suited to structured tool data |
| Object storage | Cloudflare R2 | Cost-effective for media and evidence files |
| Hosting | Vercel | Next.js native, edge network |
| P.A.C.E. scoring scale | 1–10 integers | Simple, human-interpretable, sufficient granularity |
| P.A.C.E. composite | Unweighted mean | Neutral baseline; users apply own weighting |
| MVP tool count | 20–30 | Depth over breadth |
| MVP categories | 5 | Sufficient to demonstrate value; manageable scope |
| Architecture pattern | Modular monolith | No premature microservices |
| Rendering strategy | SSG-first | Maximum SEO performance |
| Authentication (future) | Firebase Auth | Managed service, not custom-built |
| Analytics (future) | Privacy-focused (Plausible/Umami) | Respect user privacy |

#### Important Assumptions

1. Vercel free/Pro tier is sufficient for MVP traffic
2. 20–30 tools provide enough coverage for meaningful comparisons
3. File-based data is adequate for pre-database phases
4. Creator vertical has sufficient search volume to validate the model
5. P.A.C.E. methodology will prove useful and trustworthy to users
6. Affiliate revenue will materialize at sufficient volume to sustain the project

#### Notes

- No product code was written during Phase 1
- No infrastructure was connected during Phase 1
- No external services were configured during Phase 1
- Phase 1 is documentation-only by design

---

*End of Changelog.*
