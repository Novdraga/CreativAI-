# Stackwise — Research Protocol

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** TOOL_EVALUATION_PROTOCOL.md, PACE_METHODOLOGY.md, CONTENT_STRATEGY.md

---

## 1. Purpose

This document defines how Stackwise discovers, verifies, and maintains information about AI tools. It establishes the standard for data quality, source hierarchy, and the critical distinction between fact, observation, opinion, and inference.

---

## 2. Information Classification

Every piece of information in Stackwise must be classified:

| Type | Definition | Example | Standard |
|------|-----------|---------|----------|
| **Fact** | Objectively verifiable from primary sources | "ElevenLabs Starter plan costs $5/month" | Must cite primary source + verification date |
| **Observation** | Directly witnessed during hands-on evaluation | "Generation took 12 seconds for a 30-second clip" | Must cite evaluation ID + date |
| **Inference** | Logical conclusion drawn from facts and observations | "At this per-minute rate, a 10-minute video would cost ~$3" | Must state the facts it's based on |
| **Opinion** | Subjective judgment | "The interface feels cluttered" | Must be labeled as editorial assessment |

### Rules

- **Facts and observations** form the foundation of all content
- **Inferences** are permitted when the underlying facts are cited
- **Opinions** are permitted only in clearly labeled editorial sections
- **No information type may masquerade as another** — An inference presented as a fact is a data quality violation

---

## 3. Source Hierarchy

Sources are ranked by reliability. When sources conflict, higher-ranked sources take precedence.

| Tier | Source Type | Examples | Reliability |
|------|-----------|----------|------------|
| **S1** | Primary / Official | Tool's official website, pricing page, API docs, terms of service | Highest |
| **S2** | Direct Observation | Hands-on testing by Stackwise evaluators | High |
| **S3** | Official Communication | Tool's blog posts, changelogs, press releases | High |
| **S4** | Verified Third-Party | Reputable tech publications, verified benchmarks | Moderate |
| **S5** | Community Reports | Reddit, forums, social media (corroborated) | Low |
| **S6** | Unverified / Single-Source | Single anecdotal report, uncorroborated claim | Lowest — flag required |

### Conflict Resolution

When sources conflict:

1. **Higher-tier source wins** by default
2. If same tier, **more recent source wins**
3. If still ambiguous, **flag as disputed** and note both sources
4. **Never silently choose** the more convenient source

---

## 4. Tool Discovery

### How Tools Enter the Stackwise Pipeline

| Channel | Description | Validation |
|---------|------------|------------|
| Market scanning | Systematic review of AI tool landscape per category | Quarterly per category |
| User signals | Search query data, user requests, community mentions | Ongoing |
| Competitor monitoring | Tools featured by competing review sites | Monthly |
| Industry events | Product launches, announcements | As they occur |
| Referral | Recommendations from trusted sources | As received |

### Discovery-to-Coverage Criteria

A tool enters the evaluation pipeline only if it meets **all** of the following:

| Criterion | Requirement |
|-----------|------------|
| Category relevance | Falls within a covered Stackwise category |
| Creator applicability | Useful to at least one creator persona |
| Market presence | Evidence of real users (not vaporware) |
| Accessibility | Available for self-service signup (no enterprise-only) |
| Stability | Product is publicly available (not closed beta, unless significant) |

### What Disqualifies a Tool

- No public availability
- No relevance to covered creator use cases
- Shut down or announced end-of-life
- Duplicate / white-label of already-covered tool (unless meaningfully different)

---

## 5. Verification Procedures

### 5.1 Pricing Verification

| Step | Action | Source |
|------|--------|--------|
| 1 | Record all pricing tiers from official pricing page | S1 |
| 2 | Note free tier existence and limitations | S1 |
| 3 | Record per-unit costs (per credit, per minute, per word) | S1 |
| 4 | Check for hidden costs (export fees, API costs, required add-ons) | S1 + S2 |
| 5 | Verify during hands-on testing | S2 |
| 6 | Record verification date | — |

**Pricing data must be re-verified every 60 days** or when a change is reported.

### 5.2 Feature Verification

| Step | Action | Source |
|------|--------|--------|
| 1 | Record features from official product documentation | S1 |
| 2 | Verify feature availability during hands-on testing | S2 |
| 3 | Note tier restrictions (which features on which plans) | S1 + S2 |
| 4 | Record feature limitations not mentioned in marketing | S2 |
| 5 | Record verification date | — |

**Feature data must be re-verified every 90 days.**

### 5.3 Terms & Licensing Verification

| Step | Action | Source |
|------|--------|--------|
| 1 | Read Terms of Service for commercial rights provisions | S1 |
| 2 | Check content ownership / usage rights | S1 |
| 3 | Identify restrictions on generated content | S1 |
| 4 | Check data retention / privacy policy | S1 |
| 5 | Summarize in plain language for creators | — |
| 6 | Record verification date and ToS version/date | — |

**Terms data must be re-verified every 90 days** or when ToS changes are announced.

### 5.4 Affiliate Research

| Step | Action | Source |
|------|--------|--------|
| 1 | Check if the tool offers an affiliate program | S1 |
| 2 | Record commission structure | S1 |
| 3 | Record cookie duration | S1 |
| 4 | Record any restrictions or requirements | S1 |
| 5 | Note whether affiliate relationship exists | — |

**Affiliate status is recorded for transparency but does NOT influence tool coverage or scoring decisions.**

---

## 6. Data Freshness

### Freshness Categories

| Category | Maximum Age | Action When Stale |
|----------|------------|-------------------|
| Pricing | 60 days | Flag for re-verification; display "last verified" date |
| Features | 90 days | Flag for re-verification |
| P.A.C.E. scores | 90 days | Flag for re-evaluation |
| Terms / Licensing | 90 days | Flag for re-verification |
| Tool existence / status | 30 days | Verify tool is still active |

### Staleness Response

When data exceeds its freshness threshold:

1. **Display** "last verified" date prominently on the page
2. **Flag** internally for re-verification
3. **Do NOT remove** the data unless it's confirmed incorrect
4. **Prioritize** re-verification by page traffic (higher-traffic pages first)

---

## 7. Data Collection Template

For each tool entering the pipeline, collect:

```
## Basic Information
- Tool name
- Official URL
- Company / Developer
- Category (primary + secondary)
- Date added to pipeline
- Current status (active, beta, deprecated)

## Pricing
- Free tier: yes/no
- Free tier limitations
- Paid plans (name, price, billing cycle)
- Per-unit costs
- Hidden costs
- Verification date
- Source URL

## Features
- Core features list
- Feature availability by tier
- Notable limitations
- Verification date
- Source URL

## Terms & Rights
- Content ownership
- Commercial use rights
- Data retention policy
- Notable restrictions
- ToS URL
- ToS date/version
- Verification date

## Creator Relevance
- Primary use cases for creators
- Content types supported
- Experience level suitability
- Best-for tags

## Affiliate
- Program available: yes/no
- Commission structure
- Cookie duration
- Affiliate relationship status
- Disclosure note

## Evaluation Status
- P.A.C.E. evaluation: pending/complete
- Confidence level
- Last evaluation date
- Evaluation ID
```

---

## 8. Update Frequency

### Proactive Updates

| Trigger | Response Time | Action |
|---------|--------------|--------|
| Major tool update announced | Within 7 days | Verify changes, update data, re-evaluate if needed |
| Pricing change | Within 3 days | Verify and update pricing data |
| Tool shutdown / major incident | Within 1 day | Update status, add notice |
| New major competitor enters category | Within 14 days | Begin discovery process |

### Scheduled Updates

| Cadence | Activity |
|---------|---------|
| Monthly | Review data freshness flags, prioritize re-verifications |
| Quarterly | Category landscape scan for new tools |
| Bi-annually | Full re-evaluation of all covered tools |

---

## 9. Research Ethics

### What Stackwise Commits To

1. **Accuracy** — We do not knowingly publish incorrect information
2. **Transparency** — We disclose our methodology, sources, and affiliations
3. **Independence** — Affiliate relationships do not influence research or scoring
4. **Correction** — When errors are identified, we correct them promptly and visibly
5. **Completeness** — We report limitations and negatives, not just positives
6. **Attribution** — We credit sources appropriately

### What Stackwise Does NOT Do

- Accept payment for favorable reviews
- Suppress negative findings about affiliate partners
- Publish unverified claims as facts
- Copy evaluations from other sources without attribution
- Guarantee that information is current (we provide verification dates instead)

---

*End of Research Protocol.*
