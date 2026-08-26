# Stackwise — Affiliate Strategy

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** CONTENT_STRATEGY.md, RESEARCH_PROTOCOL.md

---

## 1. Monetization Philosophy

Stackwise's primary revenue model is **affiliate commissions** — earning a referral fee when a user signs up for a recommended tool.

### Foundational Rule

> **Commercial incentives must NEVER secretly determine rankings, recommendations, or visibility.**

Affiliate revenue is a **consequence** of trust and good recommendations. If users trust Stackwise, they use our links. If we compromise trust for revenue, we lose both.

---

## 2. Revenue Streams

### Current (MVP)

| Stream | Description | Priority |
|--------|-------------|----------|
| **Affiliate commissions** | Referral fees from tool signups | Primary |

### Future (Post-MVP)

| Stream | Description | Phase | Notes |
|--------|-------------|-------|-------|
| **Sponsored placements** | Paid visibility in designated sections | Phase 12+ | Clearly labeled, outside editorial rankings |
| **Premium research** | In-depth evaluation reports | Phase 12+ | Requires significant evaluation data |
| **Display advertising** | Contextual ads | Phase 14+ | Last resort; must not degrade experience |
| **API access** | Programmatic access to evaluation data | Phase 14+ | For developers/agencies |

---

## 3. Ranking Independence

### The Trust Wall

Stackwise maintains a **strict separation** between:

| Domain | Independence Rule |
|--------|-------------------|
| **P.A.C.E. scores** | Never influenced by affiliate status |
| **Comparison verdicts** | Never influenced by affiliate status |
| **Best-for rankings** | Never influenced by affiliate status |
| **Stack recommendations** | Never influenced by affiliate status |
| **Tool coverage decisions** | Tools covered based on creator relevance, not affiliate availability |
| **Content quality** | Same editorial standards apply regardless of monetization |

### What IS Permitted

| Action | Permitted | Condition |
|--------|-----------|-----------|
| Adding affiliate links to recommended tools | ✓ | Disclosed per policy |
| Prioritizing tools WITH affiliate programs over equally-ranked tools WITHOUT | ✗ | Violates ranking independence |
| Including "try this tool" CTAs | ✓ | Honest recommendation, disclosed |
| Noting affiliate relationship in tool data | ✓ | Transparency requirement |
| Covering tools without affiliate programs | ✓ | Required — coverage is merit-based |

### What Is NOT Permitted

- Adjusting P.A.C.E. scores based on commission rates
- Omitting a better tool because it lacks an affiliate program
- Placing affiliate tools higher in rankings than evidence supports
- Suppressing negative evaluations of affiliate partners
- Creating content solely to promote high-commission tools

---

## 4. Disclosure Requirements

### On-Page Disclosure

**Required on every page containing affiliate links:**

> **Disclosure:** Stackwise may earn a commission when you sign up through links on this page. This does not affect our scores or recommendations. [Learn about our methodology →]

**Placement rules:**
- Visible **before the first affiliate link** on the page
- In the page footer
- Written in plain language

### Affiliate Link Identification

| Rule | Implementation |
|------|---------------|
| Visual indicator | Affiliate links may have a subtle external link icon |
| Hover text | Link title attribute includes "affiliate link" |
| Separate from editorial links | Editorial outbound links (to docs, sources) are clearly different from affiliate CTAs |

### Data Transparency

The tool data model includes:
- `hasAffiliateRelationship: boolean` — recorded for every tool
- This data is used internally for transparency tracking
- The methodology page explains the affiliate model

---

## 5. Affiliate Metadata

### Per-Tool Affiliate Data

For each tool with an affiliate relationship:

```
affiliateProgram:
  hasRelationship: boolean
  programName: string          # e.g., "ElevenLabs Partner Program"
  commissionType: enum         # "percentage", "flat", "recurring"
  commissionValue: string      # e.g., "20%", "$50"
  cookieDuration: string       # e.g., "30 days"
  affiliateUrl: string         # Tracking URL
  programUrl: string           # Where to find the program
  notes: string                # Any special conditions
  verifiedAt: datetime         # Last verification date
```

This metadata is **internal only** — not displayed to users. It supports tracking and audit.

---

## 6. Tracking Strategy

### Link Structure

Affiliate links should use a consistent, auditable structure:

```
https://stackwise.io/go/{tool-slug}
→ Redirects to affiliate URL with tracking parameters
```

**Benefits:**
- URLs are readable and trustworthy
- Redirects can be updated without changing published content
- Click tracking is centralized
- Broken affiliate links are caught at the redirect layer

### Tracking Implementation (Post-MVP)

| Metric | Description | Phase |
|--------|-------------|-------|
| Click-through rate | % of page visitors who click affiliate links | Phase 9 |
| Conversion attribution | Signups attributed to Stackwise (via affiliate dashboard) | Phase 12 |
| Revenue per page | Which pages generate the most revenue | Phase 12 |
| Revenue per tool | Which tool partnerships are most valuable | Phase 12 |

**No tracking in MVP.** Affiliate links are direct links initially. The `/go/` redirect system is implemented in Phase 9.

---

## 7. Sponsored Placement Rules

### When Sponsored Content Is Introduced (Phase 12+)

| Rule | Requirement |
|------|------------|
| **Labeling** | Must be clearly labeled as "Sponsored" or "Promoted" |
| **Separation** | Must NOT appear within P.A.C.E. rankings, comparison verdicts, or editorial recommendations |
| **Designated sections** | Appears in clearly separate UI sections (e.g., "Sponsored Pick", sidebar placement) |
| **Quantity limits** | Maximum 1 sponsored placement per page |
| **Quality threshold** | Sponsored tools must still meet basic quality criteria (no obviously bad tools promoted) |
| **Disclosure** | Included in the page disclosure statement |

### Sponsored Content Is NOT

- A way to buy a better P.A.C.E. score
- A way to suppress negative evaluations
- A way to appear in "Best For" rankings
- A way to influence comparison verdicts

---

## 8. Trust Audit

### Periodic Trust Checks

Every 90 days, audit the following:

| Check | Question |
|-------|---------|
| Score independence | Have any scores been influenced by affiliate status? |
| Coverage balance | Are non-affiliate tools represented fairly? |
| Disclosure compliance | Is every affiliate page properly disclosed? |
| Content quality | Is affiliate content quality equal to non-affiliate content? |
| User trust | Any negative feedback about commercial bias? |

### Red Flags

If any of these occur, investigate immediately:

- All top recommendations happen to be affiliate partners
- A non-affiliate tool with better scores is ranked below an affiliate tool
- User feedback questions the independence of recommendations
- An affiliate partner requests score changes
- Content is created primarily for affiliate revenue rather than user value

---

## 9. Legal Compliance

### FTC Guidelines (US)

- Affiliate relationships are **material connections** requiring disclosure
- Disclosures must be **clear and conspicuous**
- Disclosures must be **near the relevant claim/link**, not buried in footer only
- "Affiliate link" must be understandable to the average consumer

### GDPR Considerations (EU)

- Affiliate tracking cookies require consent where applicable
- Privacy policy must mention affiliate tracking
- Cookie consent mechanism required when tracking is implemented

### General

- Comply with each affiliate program's terms of service
- Maintain records of affiliate agreements
- Report affiliate revenue as required by tax law

---

*End of Affiliate Strategy.*
