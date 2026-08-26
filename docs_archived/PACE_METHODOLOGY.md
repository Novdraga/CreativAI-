# Stackwise — P.A.C.E. Methodology

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** TOOL_EVALUATION_PROTOCOL.md, RESEARCH_PROTOCOL.md

---

## 1. Overview

P.A.C.E. is Stackwise's proprietary evaluation framework for scoring AI tools. It provides a structured, evidence-based methodology that ensures consistency across evaluations and enables meaningful comparisons.

**P.A.C.E. is NOT marketing decoration.** It is a structured measurement system with defined criteria, evidence requirements, and confidence indicators.

### The Four Dimensions

| Dimension | Full Name | Question It Answers |
|-----------|-----------|-------------------|
| **P** | Price per Result | "How cost-effective is this tool for the output I need?" |
| **A** | Accuracy | "How close is the output to what I asked for?" |
| **C** | Customization | "How much control do I have over the output?" |
| **E** | Ease for Beginners | "How quickly can a non-technical creator get good results?" |

---

## 2. Scoring Scale

### Universal Scale

All P.A.C.E. dimensions use a **1–10 integer scale**.

| Score | Label | Meaning |
|-------|-------|---------|
| 1–2 | Poor | Fails to meet basic expectations |
| 3–4 | Below Average | Significant limitations for most users |
| 5–6 | Average | Functional but unremarkable |
| 7–8 | Good | Meets expectations well for most users |
| 9–10 | Excellent | Exceptional performance in this dimension |

### Rules

- Scores are **integers only** (no 7.5, no decimals)
- A score of **10** requires documented exceptional evidence
- A score of **1** requires documented failure evidence
- **No score may be assigned without at least one piece of supporting evidence**
- Scores are always relative to the category (an AI voice tool is scored against other AI voice tools, not against all AI tools)

---

## 3. Dimension Definitions

### 3.1 P — Price per Result

> **Question:** "How cost-effective is this tool for the output I need?"

#### What It Measures

The economic efficiency of the tool — not just the subscription price, but the actual cost to produce a usable output.

#### Scoring Criteria

| Score Range | Criteria |
|-------------|----------|
| 9–10 | Free tier sufficient for regular creator use, OR extremely low per-result cost |
| 7–8 | Affordable for budget-conscious creators; good value relative to output quality |
| 5–6 | Moderate cost; reasonable for creators with established revenue |
| 3–4 | Expensive relative to alternatives; requires significant budget commitment |
| 1–2 | Prohibitively expensive for most independent creators |

#### Measurement Method

1. **Identify the target output** — e.g., one 10-minute video, one podcast episode, 5 thumbnails
2. **Calculate cost per output** using the most relevant pricing tier for a solo creator
3. **Factor in free tier limits** — Does the free tier cover realistic use?
4. **Compare to category average** — How does this cost compare to alternatives?
5. **Note hidden costs** — Credits that expire, required add-ons, export fees

#### Required Evidence

- Pricing tier documentation (with verification date)
- Per-unit or per-credit cost calculation
- Free tier limitations
- Cost estimate for a defined "standard creator output"

#### What It Does NOT Measure

- Overall subscription price in isolation (a $50/month tool might be cheaper per result than a $20/month tool)
- Enterprise pricing
- Annual vs monthly pricing differences (both should be noted, but scoring uses monthly)

---

### 3.2 A — Accuracy

> **Question:** "How close is the output to what I asked for?"

#### What It Measures

How faithfully and correctly the tool produces the requested output. This encompasses factual accuracy (for text), visual accuracy (for images/video), vocal accuracy (for voice), and instruction-following.

#### Scoring Criteria

| Score Range | Criteria |
|-------------|----------|
| 9–10 | Output consistently matches intent with minimal correction needed |
| 7–8 | Output mostly matches intent; minor corrections occasionally needed |
| 5–6 | Output partially matches intent; noticeable deviations or errors common |
| 3–4 | Output frequently deviates from intent; significant correction needed |
| 1–2 | Output rarely matches intent; unusable without major rework |

#### Measurement Method

1. **Use standardized prompts** — Defined in TOOL_EVALUATION_PROTOCOL.md per category
2. **Evaluate output against prompt intent** — Does the output match what was asked?
3. **Check factual accuracy** (for text tools) — Are claims correct?
4. **Check quality artifacts** — Hallucinations, distortions, artifacts, errors
5. **Repeat with multiple prompts** — Minimum 3 standardized prompts per evaluation
6. **Score the typical result** — Not the best, not the worst, but the representative result

#### Required Evidence

- Standardized prompt(s) used
- Output sample(s) or description
- Accuracy observations
- Number of prompts tested
- Notable failure cases

#### What It Does NOT Measure

- Aesthetic quality (partially covered by Customization)
- Speed of generation
- Output format compatibility

---

### 3.3 C — Customization

> **Question:** "How much control do I have over the output?"

#### What It Measures

The degree to which a creator can shape, refine, and control the tool's output to match their specific creative vision.

#### Scoring Criteria

| Score Range | Criteria |
|-------------|----------|
| 9–10 | Extensive control: styles, parameters, fine-tuning, templates, API access |
| 7–8 | Good control: multiple adjustable parameters, presets, style options |
| 5–6 | Moderate control: some options available but limited range |
| 3–4 | Limited control: few customization options; mostly default output |
| 1–2 | Minimal to no control: "take it or leave it" output |

#### Measurement Method

1. **Inventory available controls** — List all user-adjustable parameters
2. **Test control effectiveness** — Do adjustments produce meaningfully different results?
3. **Evaluate preset/template quality** — Are they useful and varied?
4. **Check for advanced options** — API, custom models, import/export
5. **Assess iteration capability** — Can the user refine results through feedback?

#### Required Evidence

- List of available customization parameters
- Assessment of each parameter's effectiveness
- Comparison of default vs customized output (where practical)
- Advanced customization options inventory

#### What It Does NOT Measure

- UI quality (covered by Ease)
- Whether customization is *needed* (some tools are good enough by default)
- Third-party integrations

---

### 3.4 E — Ease for Beginners

> **Question:** "How quickly can a non-technical creator get good results?"

#### What It Measures

How accessible the tool is to a creator with no prior AI tool experience. This is specifically calibrated for beginners, not general "usability."

#### Scoring Criteria

| Score Range | Criteria |
|-------------|----------|
| 9–10 | Intuitive for first-time users; good results achievable in under 5 minutes |
| 7–8 | Clear interface; usable with brief exploration; minimal learning curve |
| 5–6 | Requires some learning; documentation needed for key features |
| 3–4 | Steep learning curve; technical knowledge advantageous |
| 1–2 | Requires technical expertise; CLI-only or complex configuration |

#### Measurement Method

1. **First-run experience** — Can a new user produce a result without tutorials?
2. **Time to first output** — How long from signup to first usable result?
3. **Documentation quality** — Is help available and accessible?
4. **Error handling** — Does the tool help users recover from mistakes?
5. **Onboarding flow** — Is there guided setup?
6. **Cognitive load** — How many decisions must the user make before getting output?

#### Required Evidence

- Documented first-run experience
- Time to first usable output
- Number of steps to first output
- Key friction points observed
- Documentation/onboarding quality assessment

#### What It Does NOT Measure

- Expert usability (an advanced tool can score low on E but high on C)
- Mobile experience specifically (noted separately)
- Accessibility compliance (a separate requirement)

---

## 4. Composite Score

### Calculation

The **P.A.C.E. composite score** is the **unweighted arithmetic mean** of the four dimensions, rounded to one decimal place.

```
Composite = (P + A + C + E) / 4
```

**Example:** P=7, A=8, C=6, E=9 → Composite = 7.5

### Why Unweighted?

Different users weight dimensions differently:

- Budget-conscious creators care most about **P**
- Quality-focused creators care most about **A**
- Advanced creators care most about **C**
- Beginners care most about **E**

An unweighted composite provides a neutral baseline. The individual dimension scores are always displayed prominently, so users can apply their own weighting.

### Composite Score Rules

- The composite is a **supplementary indicator**, not the primary recommendation driver
- Individual dimension scores are **always displayed** alongside the composite
- Recommendations are based on **dimension-specific** analysis, not composite ranking
- Two tools with the same composite but different dimension profiles are NOT equivalent

---

## 5. Confidence Level

Every P.A.C.E. evaluation includes a **confidence level** indicating the depth of testing behind the scores.

| Level | Label | Meaning |
|-------|-------|---------|
| 1 | Preliminary | Based on publicly available information only; no hands-on testing |
| 2 | Basic | Limited hands-on testing (1–2 prompts, free tier only) |
| 3 | Standard | Full evaluation per protocol (3+ prompts, relevant tier tested) |
| 4 | Deep | Extended testing, multiple scenarios, edge cases explored |

### Rules

- **Confidence level must be displayed alongside scores**
- A Level 1 evaluation should be clearly marked as preliminary
- Scores from Level 1 evaluations carry lower authority in comparisons
- Target confidence for MVP tool coverage: **Level 3 minimum**

---

## 6. Handling Missing Data

### When a Dimension Cannot Be Scored

Sometimes a dimension cannot be meaningfully scored (e.g., a free-only tool makes Price per Result trivially easy to score but not very informative).

**Rules:**

- **Never fabricate scores** to fill gaps
- Mark unscored dimensions as **"N/A — [reason]"**
- Do NOT include N/A dimensions in composite calculation
- Document why the dimension could not be scored
- Re-evaluate when more data becomes available

### Partial Data

If evidence exists but is insufficient for full confidence:

- Assign a provisional score
- Set confidence level to 1 (Preliminary)
- Mark as "provisional" in display
- Prioritize for re-evaluation

---

## 7. Versioning & Re-Testing

### Evaluation Versioning

Each P.A.C.E. evaluation is versioned:

```
{tool_slug}-pace-v{version}-{date}
Example: elevenlabs-pace-v1-2026-08-25
```

### Re-Testing Triggers

An evaluation must be re-tested when:

1. **The tool releases a major update** (new model, significant feature change)
2. **Pricing changes** (new tiers, price increases, free tier modifications)
3. **90 days have elapsed** since last evaluation (staleness threshold)
4. **User reports** indicate scores may be inaccurate
5. **Comparison requested** with a tool not yet evaluated at comparable depth

### Re-Testing Policy

- Previous evaluation data is **preserved** (not overwritten) for historical comparison
- Version number increments on re-evaluation
- Changes from previous evaluation are documented
- If scores change by ≥2 points in any dimension, an explanation is required

---

## 8. Category-Specific Considerations

P.A.C.E. scoring is **relative to category**. The same criteria apply, but what "accuracy" means differs between categories:

| Category | Accuracy Means | Price Basis | Customization Focus |
|----------|---------------|-------------|-------------------|
| AI Video | Visual quality, motion coherence, prompt adherence | Per minute/clip | Style, length, resolution, scene control |
| AI Voice | Naturalness, pronunciation, emotional tone | Per character/minute | Voice selection, speed, emotion, SSML |
| AI Script/Writing | Content relevance, coherence, factual correctness | Per word/document | Tone, length, format, templates |
| AI Images/Thumbnails | Visual quality, prompt adherence, composition | Per image | Style, aspect ratio, elements, editing |
| AI Research/Repurposing | Accuracy, completeness, source quality | Per query/document | Output format, depth, source filtering |

These category-specific interpretations are detailed in the Tool Evaluation Protocol.

---

## 9. Anti-Gaming Rules

To maintain integrity:

1. **No tool may sponsor its own score** — Sponsored placements are separated from P.A.C.E. scores
2. **Affiliate status does not affect scoring** — Same methodology applies regardless of monetization
3. **Re-evaluation requests from tool vendors** are processed through the standard protocol, not as expedited reviews
4. **All scores must be reproducible** — Another evaluator using the same protocol should reach comparable scores (±1 point per dimension)
5. **Scoring disputes** are resolved by re-testing, not negotiation

---

## 10. Public Communication

### What We Disclose Publicly

- The complete P.A.C.E. methodology (this document, adapted for public consumption)
- Scoring criteria for each dimension
- Confidence levels
- Update dates
- The principle that affiliate status does not affect scoring

### What We Do NOT Disclose Publicly

- Exact standardized prompts (to prevent gaming — prompts are described, not published verbatim)
- Internal weighting considerations for future versions
- Specific re-testing schedules per tool

---

*End of P.A.C.E. Methodology.*
