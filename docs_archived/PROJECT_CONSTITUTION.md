# Stackwise — Project Constitution

> **Document Status:** RATIFIED  
> **Version:** 1.0.0  
> **Effective Date:** 2026-08-25  
> **Authority:** This document is the highest-level source of truth for the Stackwise project. No other document, agent, or contributor may contradict it without a formal amendment.

---

## 1. Project Identity

**Name:** Stackwise  
**Type:** AI Decision Platform  
**Initial Vertical:** Creators / Content Creators  
**Domain:** AI tool selection, workflow optimization, and stack building

---

## 2. Mission

**Help creators choose the right AI tools and build the right AI workflow for their specific content goals, budget, and experience level.**

Stackwise exists to eliminate decision paralysis. The AI tools landscape is growing faster than any human can track. Creators waste hours researching tools, watching biased reviews, and paying for tools that don't fit their workflow.

Stackwise provides **structured, evidence-based decision support** — not another directory.

---

## 3. Product Positioning

> "An AI decision platform for creators that helps them choose the right AI tools and build the right AI workflow for their specific content goals, budget, and experience level."

### Stackwise IS:
- A decision support platform
- An evidence-based evaluation system
- A workflow/stack recommendation engine
- A trust-first product with transparent methodology
- A research-driven resource with original data

### Stackwise is NOT:
- An AI tools directory
- A listing site ("browse thousands of tools")
- A review aggregator
- A marketplace
- A SaaS tool itself
- An AI model comparison benchmark site

---

## 4. Core Principles

### P1. Decisions Over Discovery
The primary value is answering **"which tool should I use for THIS job?"** — not **"what tools exist?"** Every feature, page, and piece of content must move the user closer to a confident decision.

### P2. Depth Over Breadth
20 deeply evaluated tools are worth more than 2,000 shallow listings. Quality of evaluation is the product. We will never chase tool count as a metric.

### P3. Evidence Over Opinion
Every claim must be backed by evidence. Scores are derived from methodology, not sentiment. The P.A.C.E. framework is a structured evaluation system, not marketing decoration.

### P4. Trust Over Revenue
Affiliate revenue is a consequence of trust, not a substitute for it. Commercial incentives must never secretly determine rankings, recommendations, or visibility. All affiliations are disclosed.

### P5. Creators First
The initial vertical is creators. All design decisions, content priorities, and feature development must serve creator use cases until expansion is justified by evidence.

### P6. Workflow Over Tools
Individual tool pages exist to support workflow-level decisions. The highest-value output is a complete stack recommendation, not an isolated tool review.

### P7. Clarity Over Cleverness
In code, content, and design: optimize for clarity, reliability, and maintainability. Avoid premature optimization, unnecessary abstraction, and complexity theater.

### P8. Original Data as Moat
Competitors can copy tool names, prices, and features. They cannot easily copy our testing methodology, standardized prompts, measured results, scoring, observations, and historical evaluations. Original research is the long-term moat.

---

## 5. Non-Goals

The following are explicitly **not goals** for Stackwise:

| Non-Goal | Rationale |
|----------|-----------|
| Maximum number of tools listed | Depth > breadth. Quality suffers at scale without proportional investment. |
| Fastest possible launch | Foundation and trust matter more than speed-to-market. |
| Vanity traffic | High-intent users who make decisions are more valuable than raw pageviews. |
| AI-generated content at scale | Content must be editorially supervised. AI assists; it does not author unsupervised. |
| Feature quantity | A small set of well-executed features beats a large set of half-built ones. |
| Social features / community | Out of scope for MVP and near-term roadmap. |
| Real-time tool monitoring | Periodic manual evaluation is the model, not automated scraping. |
| Building AI tools | We evaluate AI tools. We do not build competing AI tools. |

---

## 6. Target Audience

### Primary (MVP)

**Creators and Content Creators**, including:

- YouTubers (traditional and faceless)
- Short-form creators (TikTok, Reels, Shorts)
- Long-form video creators
- Podcasters
- Solo creators
- Beginner creators
- Budget-constrained creators

### Audience Characteristics

| Dimension | Profile |
|-----------|---------|
| Technical skill | Low to moderate |
| AI experience | Beginner to intermediate |
| Budget sensitivity | High |
| Decision confidence | Low (the problem we solve) |
| Content volume | Varies — weekly to daily |
| Tool switching cost | Moderate (workflow disruption) |

### Future Verticals (Post-Evidence)

1. Marketing teams / Agencies
2. Developers / Technical creators
3. General AI Decision Platform

**Expansion requires evidence**, not ambition. Each vertical expansion must be justified by demonstrated demand and validated content-market fit.

---

## 7. Initial Vertical Scope

### Categories (MVP)

| Category | Description |
|----------|-------------|
| AI Video | Video generation, editing, enhancement |
| AI Voice | Text-to-speech, voice cloning, voice enhancement |
| AI Script / Writing | Scriptwriting, copywriting, content generation |
| AI Images / Thumbnails | Image generation, editing, thumbnail creation |
| AI Research / Repurposing | Research assistance, content repurposing, summarization |

### Tool Scope

- **Target:** 20–30 carefully selected tools
- **Selection criteria:** Relevance to creator workflows, market significance, availability
- **Expansion policy:** New tools added only through the Research Protocol

---

## 8. Quality Standards

### Content Quality

- Every tool page must contain original evaluation data
- Every comparison must use the P.A.C.E. methodology
- Every claim must cite its evidence type (fact, observation, inference)
- Every page must have a defined update schedule
- AI-assisted writing requires human editorial review

### Technical Quality

- TypeScript with strict mode enabled
- All public interfaces must be typed
- No `any` types without documented justification
- All user-facing features must be accessible (WCAG 2.1 AA minimum)
- All pages must be responsive (mobile-first)
- Performance budgets must be defined and enforced
- Security considerations addressed by default (input validation, output encoding, CSP)

### Data Quality

- Pricing data must be verified against primary sources
- Feature data must be verified against product documentation
- Evaluation data must follow the Tool Evaluation Protocol
- All data must have a recorded verification date
- Stale data (>90 days unverified) must be flagged

---

## 9. Architecture Principles

1. **Modular Monolith** — No premature microservices. Clear module boundaries within a single deployable unit.
2. **Server-Side First** — SSR/SSG for SEO-critical pages. Client-side interactivity only where necessary.
3. **Data Ownership** — All critical data lives in our database. No critical dependency on third-party APIs for core functionality.
4. **Content as Data** — Tool evaluations, comparisons, and stacks are structured data, not freeform CMS content.
5. **Progressive Enhancement** — Core content accessible without JavaScript. Interactive features enhance, not gate, the experience.
6. **Separation of Concerns** — Clear boundaries between presentation, domain logic, and data access.
7. **No Unnecessary Dependencies** — Every dependency must justify its inclusion. Prefer standard library solutions where adequate.

---

## 10. AI Agent Governance

### Source of Truth Hierarchy

1. **PROJECT_CONSTITUTION.md** (this document)
2. **PRODUCT_VISION.md**
3. **PRODUCT_REQUIREMENTS.md**
4. Other `/docs/` documents
5. Code comments and inline documentation
6. Agent judgment

### Governance Rules

- **No agent may unilaterally redefine the product vision.** Changes to the constitution require explicit human approval.
- **No agent may expand MVP scope** beyond what is defined in PRODUCT_REQUIREMENTS.md without human approval.
- **No agent may introduce dependencies** not justified by a documented need.
- **No agent may bypass the review process.** All significant changes require review by the designated reviewer agent.
- **All agents must declare their reasoning** when making architectural or product decisions.
- **Conflicts between agents** are resolved by escalation to the human project owner.

### Agent Accountability

Each agent has defined responsibilities in AGENT_ROLES.md. Agents must:

- Stay within their defined scope
- Flag when they are operating outside their expertise
- Defer to the designated authority for out-of-scope decisions
- Document their rationale for significant decisions

---

## 11. Definition of Done

A feature, page, or component is "done" when:

- [ ] It meets the requirements defined in PRODUCT_REQUIREMENTS.md
- [ ] It follows the architecture defined in ARCHITECTURE.md
- [ ] It adheres to the design system defined in DESIGN_SYSTEM.md
- [ ] It has been reviewed by the designated reviewer
- [ ] It passes all automated tests
- [ ] It meets accessibility requirements (WCAG 2.1 AA)
- [ ] It is responsive across defined breakpoints
- [ ] It meets performance budgets
- [ ] It has no known critical or high-severity bugs
- [ ] Documentation is updated if applicable

---

## 12. Decision-Making Rules

### Scope Decisions

- **Adding a new tool:** Requires Research Protocol completion
- **Adding a new category:** Requires evidence of creator demand + human approval
- **Adding a new feature:** Must be traced to PRODUCT_REQUIREMENTS.md phase
- **Changing architecture:** Requires Architecture Review + human approval
- **Changing the constitution:** Requires human approval + documented rationale

### Technical Decisions

- **New dependency:** Must be justified in writing. Prefer well-maintained, minimal dependencies.
- **Breaking change:** Must be documented in CHANGELOG.md with migration path.
- **Performance regression:** Must be justified or resolved before merge.

### Content Decisions

- **Publishing new content:** Must follow Content Strategy editorial standards
- **Updating evaluations:** Must follow Tool Evaluation Protocol
- **Affiliate inclusion:** Must follow Affiliate Strategy disclosure rules

---

## 13. Scope Creep Prevention

### Guardrails

1. **The MVP is defined.** Features not in MVP scope are explicitly deferred. "Nice to have" is not a valid MVP justification.
2. **Vertical expansion is gated.** No new verticals until the creator vertical demonstrates content-market fit.
3. **Tool count is bounded.** 20–30 tools for MVP. Adding tools requires protocol completion, not enthusiasm.
4. **Complexity requires justification.** "It would be cool" is not justification. "Users need this to make a decision" is.
5. **Infrastructure is deferred.** Service connections happen in their designated phase, not opportunistically.

### Red Flags

If any of the following occur, STOP and reassess:

- MVP scope exceeds 50 user stories
- Tool count exceeds 40 before launch
- More than 3 external service integrations before Phase 10
- Any agent introduces a feature not traceable to requirements
- Design system exceeds 30 unique components before launch

---

## 14. Amendment Process

This constitution may be amended through:

1. Written proposal with rationale
2. Impact analysis on existing documents
3. Human project owner approval
4. Version increment
5. CHANGELOG.md entry

Minor clarifications (typos, formatting) do not require the full amendment process but must still be tracked in the changelog.

---

## 15. Document Registry

The following documents form the complete Phase 1 foundation:

| Document | Purpose | Authority Level |
|----------|---------|----------------|
| PROJECT_CONSTITUTION.md | Supreme source of truth | 1 (highest) |
| PRODUCT_VISION.md | Problem, users, long-term direction | 2 |
| PRODUCT_REQUIREMENTS.md | Phased feature requirements | 2 |
| ARCHITECTURE.md | Technical architecture | 3 |
| DATA_MODEL.md | Conceptual data model | 3 |
| DESIGN_SYSTEM.md | Visual direction and standards | 3 |
| SEO_STRATEGY.md | Search strategy | 3 |
| CONTENT_STRATEGY.md | Editorial system | 3 |
| PACE_METHODOLOGY.md | Evaluation methodology | 3 |
| RESEARCH_PROTOCOL.md | Tool research process | 3 |
| TOOL_EVALUATION_PROTOCOL.md | Hands-on testing process | 3 |
| AFFILIATE_STRATEGY.md | Monetization principles | 3 |
| AGENT_ROLES.md | AI agent governance | 3 |
| ROADMAP.md | Project phases and milestones | 3 |
| CHANGELOG.md | Change history | 4 |

In case of conflict, higher authority documents prevail.

---

*End of Constitution.*
