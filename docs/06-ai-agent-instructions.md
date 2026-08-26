# 06 — AI Agent Instructions

> **Document:** `06-ai-agent-instructions.md` · **Version:** 1.0 · **Date:** 2026-08-25
> **Authority:** Master Project Directive v1.0 (`1.txt`) §37–40, §70–72.
> **Related:** `05-mvp-backlog.md` (phases), `15-changelog.md` (reporting log).

---

## 1. Governing Rules

1. Agents are used intensively but in an organized way (Directive §37): architecture review, coding, refactoring, testing, UI generation, research, content drafting, data normalization, SEO assistance, QA, documentation.
2. **AI never determines product strategy by itself.** The Project Manager owns scope, priorities, architecture changes, feature approval, phase transitions, tool selection, and release decisions (Directive §70).
3. No blind implementation: ambiguity → **Report → Recommendation → Decision** — never Ambiguity → Guess → Implement (Directive §40).

## 2. Role Definitions (Directive §38)

### 2.1 Lead Coding Agent
- Primary owner of execution.
- Only role authorized to implement major changes, unless the PM decides otherwise.
- Sequences work per `05-mvp-backlog.md`; enforces constraints (15-tool cap, local JSON, zero scope creep).

### 2.2 Architecture / Senior Review Agent
Reviews:
- Architecture decisions against Directive §30–36 (tech direction, local-first build, database/auth/storage/vector/AI-engine rules).
- Code quality, scalability, security (Directive §61 rules apply when code exists).
- Schema fidelity to `03-data-schema.md`.

### 2.3 UI/UX Agent
Reviews:
- Design and UX against `04-design-system.md` (tokens, components, states).
- Accessibility (Directive §63) and consistency across pages (`02-info-architecture.md`).
- Rejection list compliance (no dashboard-heavy UI, no dark patterns, etc.).

### 2.4 Research Agent
Finds and verifies:
- Tools, pricing, competitors, market data, official sources.
- Output is **Research Input, not Ground Truth** (Directive §58): all critical facts (pricing, terms, commercial rights, features) must be verified from official sources before entering `/data`.
- Maintains `last_verified` discipline with every fact delivered.

### 2.5 Content Agent
Assists with:
- Drafting tool pages, comparisons, alternatives, workflow content, decision pages.
- All drafts must be grounded in verified data records and evidence links; the Content Agent never invents scores, benchmarks, or claims (trust rules, Directive §56).

## 3. Collaboration Matrix

| Decision type | Proposer | Approver |
|---------------|----------|----------|
| Product strategy / scope | Any agent | **Project Manager only** |
| Architecture change | Lead or Architecture Agent | PM (+ Architecture review) |
| Data entry into `/data` | Research Agent | Lead Agent |
| Score publication | Evaluation process (`08`) | Lead Agent |
| Content publication | Content Agent | Lead Agent |

## 4. Universal Working Rules (Directive §39)

Every agent must:
1. Read the project specification set in `/docs`.
2. Inspect the project before modifying anything.
3. Understand current architecture before proposing changes.
4. Not rewrite stable parts without cause.
5. Not add dependencies without justification.
6. Not change contracts/APIs without approval.
7. Not create duplicate files.
8. Not delete functionality without documented reason.
9. Run tests after changes (once a testable codebase exists).
10. State exactly what was changed.

## 5. Reporting Protocol

Every task ends with the §72 report format:

```text
TASK: …
CHANGED: …
CREATED: …
REMOVED: …
TESTS: …
RESULT: PASS / FAIL
RISKS: …
NEXT RECOMMENDATION: …
```

Significant events are appended to `15-changelog.md`.
