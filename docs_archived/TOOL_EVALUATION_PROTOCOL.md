# Stackwise — Tool Evaluation Protocol

> **Version:** 1.0.0  
> **Last Updated:** 2026-08-25  
> **Authority:** Reports to PROJECT_CONSTITUTION.md  
> **Related:** PACE_METHODOLOGY.md, RESEARCH_PROTOCOL.md

---

## 1. Purpose

This document defines the standardized hands-on testing process for AI tools covered by Stackwise. It ensures evaluations are consistent, reproducible, and evidence-based.

Every P.A.C.E. score must be backed by evaluation data produced through this protocol.

---

## 2. Evaluation Principles

1. **Standardization** — Use consistent prompts and procedures so tools are compared fairly
2. **Reproducibility** — Another evaluator following this protocol should reach comparable results (±1 P.A.C.E. point per dimension)
3. **Evidence capture** — Every observation must be recorded with sufficient detail
4. **Honest reporting** — Report what happened, including failures and limitations
5. **Creator perspective** — Evaluate from the perspective of the target personas, not expert users

---

## 3. Pre-Evaluation Checklist

Before beginning hands-on testing:

- [ ] Tool has passed Research Protocol discovery criteria
- [ ] Basic data collected (pricing, features, terms) per Research Protocol
- [ ] Account created on the most relevant tier for evaluation
- [ ] Evaluation environment documented (browser, OS, connection speed)
- [ ] Standardized prompts prepared for the tool's category
- [ ] Evidence capture method ready (screenshots, recordings, output files)

---

## 4. Evaluation Structure

Every evaluation follows this structure:

### Phase 1: First-Run Experience (Ease Dimension)

| Step | Action | Record |
|------|--------|--------|
| 1 | Create account from scratch | Time to account creation, friction points |
| 2 | Navigate to core functionality without tutorials | Intuitiveness, clarity of UI |
| 3 | Attempt first output using default settings | Time to first output, success/failure |
| 4 | Note onboarding experience | Guided tour, tooltips, documentation links |
| 5 | Identify first point of confusion | What confused a beginner-perspective user? |

**Output:** First-run experience narrative + time to first usable output

### Phase 2: Standardized Prompt Testing (Accuracy Dimension)

| Step | Action | Record |
|------|--------|--------|
| 1 | Run Standardized Prompt 1 (basic) | Input, settings, output, time, cost |
| 2 | Run Standardized Prompt 2 (intermediate) | Input, settings, output, time, cost |
| 3 | Run Standardized Prompt 3 (advanced/edge case) | Input, settings, output, time, cost |
| 4 | Evaluate each output against prompt intent | Accuracy observations per output |
| 5 | Note artifacts, errors, hallucinations | Specific quality issues |

**Output:** Three evaluated prompt-output pairs with accuracy notes

### Phase 3: Customization Assessment (Customization Dimension)

| Step | Action | Record |
|------|--------|--------|
| 1 | Inventory all available controls/parameters | Complete list |
| 2 | Test style/preset options | Variation range, quality of presets |
| 3 | Test parameter adjustments | Effectiveness of each major parameter |
| 4 | Attempt to iterate/refine a result | Iteration workflow, effectiveness |
| 5 | Check for advanced features (API, export, custom models) | Availability and accessibility |

**Output:** Customization inventory + effectiveness assessment

### Phase 4: Cost Analysis (Price Dimension)

| Step | Action | Record |
|------|--------|--------|
| 1 | Record credits/resources consumed during testing | Exact consumption |
| 2 | Calculate cost per standardized prompt output | Per-output cost |
| 3 | Estimate monthly cost for "standard creator usage" | See category-specific definitions below |
| 4 | Compare to free tier limits | Sustainability of free tier |
| 5 | Identify hidden costs | Costs not obvious from pricing page |

**Output:** Cost analysis with per-result and monthly estimates

### Phase 5: Limitations & Edge Cases

| Step | Action | Record |
|------|--------|--------|
| 1 | Test with non-English input (if applicable) | Language support |
| 2 | Test with edge case input (long, complex, unusual) | Failure modes |
| 3 | Record any crashes, errors, or unexpected behavior | Stability issues |
| 4 | Note rate limits, queue times, processing delays | Performance constraints |
| 5 | Record commercial rights limitations from testing | Watermarks, usage restrictions |

**Output:** Limitations summary

---

## 5. Standardized Prompts by Category

Each category has a defined set of standardized prompts. These prompts are designed to:

- Test a **range of difficulty** (basic → advanced)
- Be **relevant to creator use cases**
- Produce **comparable results** across tools
- Be **updated as the category evolves**

### 5.1 AI Video

| Prompt ID | Level | Description |
|-----------|-------|-------------|
| VID-01 | Basic | Generate a 5-second clip of a nature scene (specified setting, weather, time of day) |
| VID-02 | Intermediate | Generate a 10-second clip of a person performing a specific action with defined style |
| VID-03 | Advanced | Generate a 15-second clip requiring scene transitions, specific camera movements, and consistent character |

**Standard Creator Usage:** 8 short clips per month (for a faceless YouTube channel producing 2 videos/week)

### 5.2 AI Voice

| Prompt ID | Level | Description |
|-----------|-------|-------------|
| VOC-01 | Basic | Generate 60 seconds of narration from a standard script paragraph in a neutral tone |
| VOC-02 | Intermediate | Generate 60 seconds of narration with specified emotional tone and pacing |
| VOC-03 | Advanced | Generate 60 seconds of narration requiring voice cloning or specific character voice |

**Standard Creator Usage:** 40 minutes of generated voice per month (for 4 videos at ~10 minutes each)

### 5.3 AI Script / Writing

| Prompt ID | Level | Description |
|-----------|-------|-------------|
| SCR-01 | Basic | Generate a 500-word YouTube script on a specified topic with standard structure |
| SCR-02 | Intermediate | Generate a 1,000-word script with specified tone, hooks, and call-to-action |
| SCR-03 | Advanced | Generate a 1,500-word script requiring research integration, specific formatting, and multiple sections |

**Standard Creator Usage:** 8 scripts per month

### 5.4 AI Images / Thumbnails

| Prompt ID | Level | Description |
|-----------|-------|-------------|
| IMG-01 | Basic | Generate a YouTube thumbnail with specified subject and text overlay concept |
| IMG-02 | Intermediate | Generate a styled image with specific composition, color scheme, and mood |
| IMG-03 | Advanced | Generate an image requiring specific object placement, style consistency, and detailed scene |

**Standard Creator Usage:** 20 images per month (thumbnails + social media)

### 5.5 AI Research / Repurposing

| Prompt ID | Level | Description |
|-----------|-------|-------------|
| RES-01 | Basic | Summarize a specified article/video into key points |
| RES-02 | Intermediate | Research a topic and provide structured findings with sources |
| RES-03 | Advanced | Repurpose a long-form content piece into multiple format summaries (tweet thread, blog post, video script outline) |

**Standard Creator Usage:** 12 research/repurposing tasks per month

---

## 6. Evidence Requirements

### Minimum Evidence Per Evaluation

| Evidence Type | Requirement |
|---------------|------------|
| Screenshots | At least 3 (first-run, output example, settings/controls) |
| Output samples | At least 3 (one per standardized prompt) |
| Timing data | Time to first output, generation time per prompt |
| Cost data | Credits consumed, calculated per-output cost |
| Written observations | Structured notes for each evaluation phase |

### Evidence Storage

- All evidence is stored with the evaluation record
- Evidence is linked to specific P.A.C.E. dimension scores
- Evidence is retained for historical comparison when tools are re-evaluated
- Evidence format: screenshots as PNG/WebP, text outputs as markdown, audio/video as original format

### Evidence Naming Convention

```
{tool_slug}/{evaluation_version}/{evidence_type}_{prompt_id}.{ext}

Example:
elevenlabs/v1/output_VOC-01.mp3
elevenlabs/v1/screenshot_first-run.png
elevenlabs/v1/observations.md
```

---

## 7. Evaluation Record Template

```markdown
# Evaluation Record

## Meta
- Tool: [tool name]
- Evaluator: [name/ID]
- Date: [YYYY-MM-DD]
- Version: v[N]
- Tool Version/Plan: [version or plan tested]
- Environment: [browser, OS, connection]
- Duration: [total evaluation time]

## P.A.C.E. Scores
- Price per Result: [1-10] — [one-line justification]
- Accuracy: [1-10] — [one-line justification]
- Customization: [1-10] — [one-line justification]
- Ease for Beginners: [1-10] — [one-line justification]
- Composite: [calculated]
- Confidence Level: [1-4]

## First-Run Experience
[Narrative]

## Standardized Prompt Results
### Prompt 1: [ID]
- Input: [prompt text]
- Settings: [configuration used]
- Output: [description + link to evidence]
- Time: [generation time]
- Cost: [credits/cost consumed]
- Accuracy Assessment: [evaluation]

### Prompt 2: [ID]
[same structure]

### Prompt 3: [ID]
[same structure]

## Customization Assessment
- Available controls: [list]
- Effectiveness: [assessment]
- Advanced features: [list]

## Cost Analysis
- Per-output cost: [calculated]
- Monthly estimate (standard usage): [calculated]
- Free tier sustainability: [assessment]
- Hidden costs: [if any]

## Limitations
[List of discovered limitations]

## Commercial Rights Summary
[Plain-language summary of commercial rights]

## Score Justification
[Detailed reasoning for each P.A.C.E. score]

## Changes from Previous Evaluation
[If re-evaluation: what changed and why]
```

---

## 8. Quality Control

### Pre-Publication Review

Every evaluation must be reviewed before scores are published:

- [ ] All standardized prompts tested
- [ ] Evidence captured and linked
- [ ] P.A.C.E. scores assigned with justification
- [ ] Confidence level set appropriately
- [ ] Cost calculations verified
- [ ] Limitations documented
- [ ] Commercial rights checked
- [ ] No unsupported claims
- [ ] Scores are defensible (another evaluator would agree ±1)

### Calibration

To maintain scoring consistency:

1. **First evaluation in a category** establishes the initial reference point
2. **Subsequent evaluations** are calibrated against existing scores in the category
3. **If a new tool shifts the scale** (significantly better or worse than all existing tools), consider re-calibrating the category
4. **Periodically compare** across evaluators (if multiple evaluators are used) to check for bias

---

## 9. Re-Evaluation Process

When a re-evaluation is triggered (per PACE_METHODOLOGY.md):

1. **Review previous evaluation** — Understand what was scored and why
2. **Check what changed** — New features, pricing, model updates
3. **Re-run standardized prompts** — Use the same prompts as previous evaluation
4. **Compare outputs** — Document differences from previous results
5. **Re-score** — Assign new scores based on current results
6. **Document changes** — Explain what changed and why scores shifted (or didn't)
7. **Increment version** — New evaluation version number

### Versioning Rules

- Previous evaluation data is **never deleted**
- Score history is maintained for transparency
- Users can see how a tool's scores have changed over time
- Version history supports the "is this tool getting better or worse?" question

---

## 10. Evaluation Prioritization

When resources are limited, prioritize evaluations by:

| Priority | Criteria |
|----------|---------|
| 1 (Highest) | Tools appearing in high-traffic comparisons or best-for pages |
| 2 | Tools with stale evaluations (>90 days) |
| 3 | Newly discovered tools with high creator relevance |
| 4 | Tools with reported changes |
| 5 (Lowest) | Tools with low traffic and stable evaluations |

---

*End of Tool Evaluation Protocol.*
