# Stackwise — Data Model

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** ARCHITECTURE.md, PACE_METHODOLOGY.md, PRODUCT_REQUIREMENTS.md

---

## 1. Design Principles

1. **Model what's needed, not what's possible** — Only entities required by MVP or near-term phases
2. **Content as structured data** — Tool data, evaluations, and comparisons are structured records, not freeform content
3. **History by design** — Support re-evaluation and change tracking from day one
4. **Relationships are first-class** — Comparisons, alternatives, and stacks are modeled as explicit relationships
5. **No premature optimization** — Start with a clear relational model; denormalize only with evidence

---

## 2. Entity Overview

### MVP Entities

| Entity | Purpose | Phase |
|--------|---------|-------|
| Tool | Core entity representing an AI tool | MVP |
| Category | Tool category (AI Video, AI Voice, etc.) | MVP |
| PricingPlan | Structured pricing data for a tool | MVP |
| Evaluation | A P.A.C.E. evaluation record for a tool | MVP |
| Comparison | A structured comparison between two tools | MVP |
| Alternative | A tool-to-tool alternative relationship | MVP |
| Stack | A curated workflow recommendation | MVP |
| StackItem | A single tool-role assignment within a stack | MVP |
| ContentPage | Metadata for generated pages (SEO, status) | MVP |

### Post-MVP Entities

| Entity | Purpose | Phase |
|--------|---------|-------|
| Feature | Structured feature data for tools | Phase 4+ |
| UseCase | Standardized use case tags | Phase 5+ |
| AffiliateProgram | Affiliate program metadata | Phase 8+ |
| Author | Content author/evaluator identity | Phase 8+ |
| UpdateLog | Structured change history | Phase 8+ |

### Deferred Entities (Future)

| Entity | Purpose | Phase |
|--------|---------|-------|
| User | User accounts | Phase 13+ |
| UserPreference | Saved preferences, history | Phase 13+ |
| UserStack | User-created stacks | Phase 13+ |
| ResearchSource | Curated research sources | Phase 13+ |

---

## 3. MVP Entity Definitions

### 3.1 Tool

> The central entity. Represents a single AI tool tracked by Stackwise.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| slug | string | Yes | URL-safe unique identifier (e.g., `elevenlabs`) |
| name | string | Yes | Display name |
| tagline | string | Yes | One-line description |
| description | text | Yes | Full description (markdown) |
| url | string | Yes | Official website URL |
| logoUrl | string | No | Path to logo image |
| categoryId | UUID | Yes | Primary category (FK → Category) |
| secondaryCategoryIds | UUID[] | No | Additional categories |
| status | enum | Yes | `active`, `beta`, `deprecated`, `discontinued` |
| hasFreeTier | boolean | Yes | Whether a free tier exists |
| freeTierLimitations | text | No | Description of free tier limits |
| commercialRightsSummary | text | No | Plain-language commercial rights summary |
| tosUrl | string | No | Terms of Service URL |
| bestForTags | string[] | No | Use case tags (e.g., "faceless-youtube", "beginners") |
| affiliateUrl | string | No | Affiliate link (if applicable) |
| hasAffiliateRelationship | boolean | Yes | Transparency flag |
| lastVerifiedAt | datetime | Yes | Last time core data was verified |
| createdAt | datetime | Yes | Record creation |
| updatedAt | datetime | Yes | Last modification |

**Relationships:**
- Belongs to one primary `Category`
- Has many `PricingPlan`
- Has many `Evaluation`
- Participates in many `Comparison` (as toolA or toolB)
- Participates in many `Alternative` (as source or alternative)
- Participates in many `StackItem`

**Data Lifecycle:**
- Created when a tool passes the Research Protocol discovery criteria
- Updated when verification data changes
- Status changed to `deprecated`/`discontinued` (never hard-deleted)

---

### 3.2 Category

> A classification grouping for tools.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| slug | string | Yes | URL-safe identifier (e.g., `ai-video`) |
| name | string | Yes | Display name (e.g., "AI Video") |
| description | text | Yes | Category description |
| icon | string | No | Icon identifier |
| sortOrder | integer | Yes | Display order |
| createdAt | datetime | Yes | Record creation |

**Relationships:**
- Has many `Tool`

**Data Lifecycle:**
- Created during initial setup
- Rarely modified
- New categories require human approval per constitution

**MVP Categories:**
1. AI Video
2. AI Voice
3. AI Script / Writing
4. AI Images / Thumbnails
5. AI Research / Repurposing

---

### 3.3 PricingPlan

> Structured pricing data for a tool. Supports multiple plans per tool.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| toolId | UUID | Yes | FK → Tool |
| name | string | Yes | Plan name (e.g., "Starter", "Pro") |
| monthlyPrice | decimal | No | Monthly price (null for free or usage-based) |
| annualPrice | decimal | No | Annual price if different |
| currency | string | Yes | ISO currency code (default: USD) |
| pricingModel | enum | Yes | `free`, `flat`, `usage`, `freemium`, `credits` |
| unitName | string | No | What units are consumed (e.g., "credits", "minutes") |
| unitPrice | decimal | No | Per-unit cost |
| includedUnits | integer | No | Units included in the plan |
| keyFeatures | string[] | No | Features available on this plan |
| limitations | string[] | No | Plan-specific limitations |
| isPopular | boolean | No | Flag for "most popular" designation |
| verifiedAt | datetime | Yes | Last pricing verification date |
| sourceUrl | string | Yes | URL of pricing page used for verification |

**Relationships:**
- Belongs to one `Tool`

**Data Lifecycle:**
- Created when tool pricing is verified
- Updated on re-verification (old data preserved in UpdateLog post-MVP)

---

### 3.4 Evaluation

> A P.A.C.E. evaluation record. Versioned — multiple evaluations per tool over time.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| toolId | UUID | Yes | FK → Tool |
| version | integer | Yes | Evaluation version (1, 2, 3...) |
| evaluationDate | date | Yes | Date evaluation was conducted |
| evaluatorId | string | No | Identifier of evaluator |
| toolVersionTested | string | No | Version or plan of tool tested |
| scorePrice | integer | Yes | P score (1-10) |
| scoreAccuracy | integer | Yes | A score (1-10) |
| scoreCustomization | integer | Yes | C score (1-10) |
| scoreEase | integer | Yes | E score (1-10) |
| compositeScore | decimal | Yes | Calculated (P+A+C+E)/4 |
| confidenceLevel | integer | Yes | 1-4 per PACE methodology |
| priceJustification | text | Yes | Reasoning for P score |
| accuracyJustification | text | Yes | Reasoning for A score |
| customizationJustification | text | Yes | Reasoning for C score |
| easeJustification | text | Yes | Reasoning for E score |
| summary | text | Yes | Overall evaluation summary |
| limitations | text | No | Discovered limitations |
| costPerOutput | decimal | No | Calculated cost per standard output |
| monthlyEstimate | decimal | No | Estimated monthly cost for standard usage |
| timeToFirstOutput | string | No | Time measured for first-run experience |
| evidencePaths | string[] | No | Paths to evidence files |
| previousEvaluationId | UUID | No | FK → Evaluation (previous version) |
| isCurrent | boolean | Yes | Whether this is the latest evaluation |
| createdAt | datetime | Yes | Record creation |

**Relationships:**
- Belongs to one `Tool`
- Self-referencing: links to previous evaluation version
- Referenced by `Comparison`

**Data Lifecycle:**
- Created per Tool Evaluation Protocol
- Never deleted — previous versions retained for history
- `isCurrent` flag manages which evaluation is displayed

---

### 3.5 Comparison

> A structured comparison between two tools. Contains editorial analysis beyond raw score comparison.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| slug | string | Yes | URL-safe identifier (e.g., `elevenlabs-vs-playht`) |
| toolAId | UUID | Yes | FK → Tool (first tool) |
| toolBId | UUID | Yes | FK → Tool (second tool) |
| title | string | Yes | Page title |
| summary | text | Yes | Comparison summary / verdict |
| bestForUseCases | jsonb | Yes | JSON mapping use cases to recommended tool |
| methodology | text | No | Notes on comparison methodology |
| publishedAt | datetime | No | Publication date |
| status | enum | Yes | `draft`, `review`, `published` |
| lastUpdatedAt | datetime | Yes | Last content update |

**Relationships:**
- References two `Tool` entities
- References current `Evaluation` for each tool

**Data Lifecycle:**
- Created when a high-value comparison pair is identified
- Updated when either tool's evaluation changes
- Status tracks editorial workflow

**Constraint:** `toolAId < toolBId` (alphabetical ordering prevents duplicate comparisons)

---

### 3.6 Alternative

> A directional relationship: "Alternative to [source tool]".

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| sourceToolId | UUID | Yes | FK → Tool (the tool users want alternatives to) |
| alternativeToolId | UUID | Yes | FK → Tool (the alternative) |
| reason | enum | Yes | `cheaper`, `better-quality`, `easier`, `free`, `general` |
| description | text | No | Why this is a good alternative |
| sortOrder | integer | Yes | Display order within reason group |

**Relationships:**
- References two `Tool` entities (directional)

**Data Lifecycle:**
- Created based on category analysis
- Updated when evaluations change the relative positioning

---

### 3.7 Stack

> A curated workflow recommendation for a specific creator use case.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| slug | string | Yes | URL-safe identifier (e.g., `faceless-youtube-beginner`) |
| title | string | Yes | Display title |
| description | text | Yes | Stack description and context |
| useCase | string | Yes | Target use case (e.g., "Faceless YouTube Channel") |
| experienceLevel | enum | Yes | `beginner`, `intermediate`, `advanced` |
| budgetRange | string | Yes | Budget context (e.g., "$0-50/month") |
| totalMonthlyCost | decimal | Yes | Calculated total monthly cost |
| reasoning | text | Yes | Why this stack was assembled |
| publishedAt | datetime | No | Publication date |
| status | enum | Yes | `draft`, `review`, `published` |
| lastUpdatedAt | datetime | Yes | Last content update |

**Relationships:**
- Has many `StackItem`

**Data Lifecycle:**
- Created editorially based on evaluated tools
- Updated when component tool evaluations change
- Total cost recalculated on update

---

### 3.8 StackItem

> A single tool-role assignment within a stack.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| stackId | UUID | Yes | FK → Stack |
| toolId | UUID | Yes | FK → Tool |
| role | string | Yes | Role in stack (e.g., "Script Writing", "Voice Generation") |
| reasoning | text | Yes | Why this tool was selected for this role |
| monthlyEstimate | decimal | Yes | Estimated monthly cost for this role |
| sortOrder | integer | Yes | Order in stack (workflow sequence) |
| alternativeToolIds | UUID[] | No | Alternative tools for this same role |

**Relationships:**
- Belongs to one `Stack`
- References one `Tool`

---

### 3.9 ContentPage

> Metadata for generated content pages. Tracks SEO, status, and freshness.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| slug | string | Yes | Full URL path |
| pageType | enum | Yes | `tool`, `comparison`, `alternative`, `best-for`, `stack`, `category`, `static` |
| title | string | Yes | SEO title |
| metaDescription | string | Yes | Meta description |
| canonicalUrl | string | No | Canonical URL if different |
| entityId | UUID | No | FK to the primary entity (tool, comparison, stack) |
| status | enum | Yes | `draft`, `review`, `published`, `archived` |
| publishedAt | datetime | No | First publication date |
| lastUpdatedAt | datetime | Yes | Last content update |
| lastReviewedAt | datetime | No | Last editorial review |

**Relationships:**
- References a primary entity (polymorphic by pageType)

---

## 4. Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────┐
│   Category   │──1:N──│     Tool     │
└──────────────┘       └──────┬───────┘
                              │
                 ┌────────────┼────────────┐
                 │            │            │
              1:N│         1:N│         N:M│
                 │            │            │
          ┌──────┴───┐  ┌─────┴─────┐  ┌──┴──────────┐
          │ Pricing  │  │Evaluation │  │ StackItem   │
          │  Plan    │  │           │  │             │
          └──────────┘  └───────────┘  └──────┬──────┘
                                              │N:1
                                        ┌─────┴─────┐
                                        │   Stack   │
                                        └───────────┘

          ┌───────────┐       ┌───────────────┐
          │Comparison │──N:2──│     Tool      │
          └───────────┘       └───────────────┘

          ┌───────────┐       ┌───────────────┐
          │Alternative│──N:2──│     Tool      │
          └───────────┘       └───────────────┘

          ┌───────────┐
          │ContentPage│── References any entity by ID + type
          └───────────┘
```

---

## 5. MVP Data Storage Strategy

### Phase 3 (Core MVP): File-Based

For the initial MVP, data will be stored as **TypeScript/JSON data files** within the repository:

```
/data/
  tools/
    elevenlabs.json
    playht.json
    ...
  categories/
    ai-video.json
    ai-voice.json
    ...
  evaluations/
    elevenlabs-v1.json
    ...
  comparisons/
    elevenlabs-vs-playht.json
    ...
  stacks/
    faceless-youtube-beginner.json
    ...
```

**Rationale:**
- No database infrastructure needed for launch
- Data is version-controlled alongside code
- Data files serve as the content management system initially
- Easy to validate with TypeScript types
- Migration to database later (Phase 8/10) is straightforward

### Phase 8+: Database Migration

When the admin panel is built, data migrates from files to PostgreSQL. The TypeScript interfaces defined for file-based data become the ORM model, ensuring continuity.

---

## 6. Data Validation Rules

| Rule | Applies To | Enforcement |
|------|-----------|-------------|
| Slug uniqueness | Tool, Category, Comparison, Stack | Unique constraint |
| P.A.C.E. score range | Evaluation | 1 ≤ score ≤ 10, integer only |
| Confidence level range | Evaluation | 1 ≤ level ≤ 4 |
| Comparison ordering | Comparison | toolAId < toolBId |
| Required justification | Evaluation | All 4 justification fields non-empty |
| Verified date recency | Tool, PricingPlan | Warn if > 90 days old |
| Stack cost consistency | Stack, StackItem | Sum of items must equal stack total |
| Alternative non-self-reference | Alternative | sourceToolId ≠ alternativeToolId |

---

## 7. Future Considerations

### Scalability Path

The file-based MVP approach supports ~30 tools comfortably. Beyond ~100 tools:
- Migrate to PostgreSQL with proper indexing
- Add full-text search via PostgreSQL `tsvector` or external search service
- Consider materialized views for comparison matrices

### Internationalization

Not in MVP. When needed:
- Add `locale` field to content entities
- Pricing supports multiple currencies via `currency` field already
- Consider a translation table pattern for tool descriptions

### Analytics Integration

Post-MVP analytics (Phase 9) will require:
- Click tracking on affiliate links (separate analytics event, not in main data model)
- Page view tracking (via analytics service, not in main data model)
- Decision completion tracking (lightweight event model)

---

*End of Data Model.*
