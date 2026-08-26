# MASTER PROJECT DIRECTIVE

## Creator AI Decision Platform

### Project Management & Development Reference — v1.0

---

# 0. ROLE OF THIS DOCUMENT

هذه الوثيقة هي **المرجع الأعلى للمشروع**.

أي AI Agent أو Developer أو Designer أو Researcher يعمل على المشروع يجب أن يقرأ هذه الوثيقة ويفهمها قبل تنفيذ أي مهمة.

هذه الوثيقة تحدد:

* رؤية المنتج
* المشكلة التي يحلها
* الجمهور المستهدف
* حدود الـMVP
* فلسفة المنتج
* المعمارية
* نموذج البيانات
* تجربة المستخدم
* نظام التقييم
* الـBenchmarks
* استراتيجية المحتوى
* استراتيجية SEO/GEO
* استراتيجية الربح
* مراحل التطوير
* ترتيب تنفيذ البنية التحتية
* أدوار أدوات الذكاء الاصطناعي
* قواعد منع Scope Creep
* معايير قبول كل مرحلة

## قاعدة أساسية

> **لا تنفذ أي شيء يخالف هذه الوثيقة دون طلب موافقة Project Manager.**

إذا تعارض طلب جديد مع هذه الوثيقة، يجب على Agent:

1. تحديد التعارض.
2. عدم تنفيذ الجزء المتعارض تلقائيًا.
3. إبلاغ Project Manager.
4. اقتراح الحل.
5. انتظار القرار إذا كان التغيير يؤثر على Architecture أو Scope أو Product Strategy.

---

# 1. PROJECT VISION

نحن لا نبني:

> AI Tools Directory

ولا نبني:

> موقعًا يحتوي آلاف أدوات الذكاء الاصطناعي.

ولا نبني:

> Generic AI Decision Engine.

نحن نبني:

# Creator AI Decision Platform

منصة تساعد صانع المحتوى على اتخاذ القرار الصحيح بشأن أدوات الذكاء الاصطناعي وبناء Workflow مناسب له.

## الوعد الأساسي

> **Find the right AI tools and build the right AI workflow for your content.**

المنتج يجب أن يحول سؤال المستخدم من:

> "ما أفضل أداة AI؟"

إلى:

> "ما أفضل مجموعة أدوات بالنسبة لهدفي وميزانيتي وخبرتي؟"

---

# 2. CORE PRODUCT PHILOSOPHY

المنتج مبني حول:

```text
Goal
↓
Constraints
↓
Workflow
↓
Recommendation
↓
Comparison
↓
Evidence
↓
Decision
↓
Action
```

وليس:

```text
Directory
↓
Browse
↓
Search
↓
Leave
```

## قاعدة المنتج

> **We optimize for decisions, not page views.**

---

# 3. TARGET AUDIENCE

الجمهور الأول:

## Creators

خصوصًا:

* YouTubers
* Faceless YouTubers
* Shorts creators
* Podcasters
* Solo creators
* Beginners
* Small creator teams

لا نستهدف في البداية:

* الشركات الكبيرة
* Enterprise
* جميع مستخدمي AI
* Developers
* Agencies
* Marketers

هذه قطاعات توسع مستقبلية.

---

# 4. VERTICAL STRATEGY

## Phase 1

Creators / YouTubers

## Phase 2

Marketing / Agencies

## Phase 3

Developers

## Phase 4

General AI Decision Engine

### ممنوع

التوسع إلى القطاعات الأخرى قبل إثبات نجاح Creator vertical.

---

# 5. PRODUCT POSITIONING

المنافسون التقليديون:

> "لدينا آلاف الأدوات."

نحن:

> "أخبرنا ماذا تريد أن تنجز، وسنساعدك في اختيار الأدوات المناسبة."

## مثال

المستخدم:

```text
Goal:
Create Faceless YouTube videos

Budget:
$50/month

Experience:
Beginner

Requirements:
Commercial use
Good voice quality
Long-form video
```

المنصة:

```text
Recommended Workflow

Research → Tool A
Script → Tool B
Voice → Tool C
Video → Tool D
Thumbnail → Tool E

Estimated monthly cost:
$37

Best for:
Beginner

Cheaper alternative:
...

Higher-quality alternative:
...

Commercial-use notes:
...
```

هذا هو المنتج.

---

# 6. MVP PRINCIPLE

## MVP يجب أن يكون صغيرًا وعميقًا.

لا نبدأ بـ:

* 500 tools
* 1000 tools
* 10,000 tools
* AI recommendation engine
* Vector database
* Semantic search
* Authentication
* User dashboard
* Large cloud infrastructure

## MVP المستهدف

### Tools

12–15 أداة أساسية.

### Categories

5 فئات:

1. Video
2. Voice
3. Script / Writing
4. Thumbnails / Images
5. Research / Repurposing

### Workflows

5–10 workflows.

### Comparisons

5–10 comparisons.

### Alternatives

5–10 alternative pages.

### Hands-on Benchmarks

3–5 في البداية.

ثم نتوسع بناءً على البيانات الحقيقية.

---

# 7. WHY FEWER TOOLS?

الجودة أهم من العدد.

الهدف:

> 15 tools deeply evaluated

أفضل من:

> 500 tools superficially described.

كل أداة أساسية يجب أن تمتلك بيانات منظمة قابلة لإعادة الاستخدام.

---

# 8. CORE DATA MODEL

يجب أن يكون النظام مبنيًا حول كيانات واضحة.

## Tool

يجب أن يدعم على الأقل:

```text
id
name
slug
category
subcategories
description
website
pricing
pricing_model
free_plan
starting_price
features
strengths
weaknesses
best_for
not_for
difficulty
commercial_use
license_notes
supported_formats
platforms
pace_scores
evidence
benchmark_results
alternatives
comparison_links
last_verified
```

---

# 9. USE CASES

لا نريد أن يكون الموقع مبنيًا فقط حول Tools.

يجب أن يدعم:

```text
Tool
↓
Use Case
↓
Workflow
↓
Stack
```

مثال:

```text
Faceless YouTube Shorts
```

يتكون من:

```text
Research
→ Script
→ Voice
→ Video
→ Captions
→ Thumbnail
```

---

# 10. WORKFLOW MODEL

كل Workflow يجب أن يحتوي على:

```text
id
name
goal
audience
budget_range
experience_level
steps
recommended_tools
alternative_tools
estimated_cost
estimated_cost_per_result
commercial_notes
evidence
last_verified
```

---

# 11. DECISION SYSTEM

## V1 يجب أن يكون Rules-Based.

لا نحتاج AI API في البداية.

لا نحتاج Machine Learning.

لا نحتاج Vector DB.

لا نحتاج Embeddings.

نستخدم:

```text
User Input
+
Structured Tool Data
+
Scoring Rules
=
Recommendation
```

## Inputs

على الأقل:

* Goal
* Budget
* Experience
* Content type
* Required capabilities
* Commercial rights
* Quality preference

---

# 12. STACK BUILDER V1

واجهة بسيطة:

## Goal

* Faceless
* Shorts
* Long-form
* Tutorials
* Podcast
* Repurposing

## Budget

* $0
* $25
* $50
* $100+

## Experience

* Beginner
* Intermediate
* Advanced

## Requirements

* Commercial use
* Best quality
* Cheapest
* Fastest
* Easiest

ثم:

```text
Your Recommended Stack
```

---

# 13. STACK BUILDER RULE

لا نبني AI chatbot.

لا نحتاج:

> "Tell me about your content..."

في V1.

نريد نظامًا:

> Predictable + Explainable + Fast.

كل توصية يجب أن يكون لها سبب.

مثال:

```text
Recommended because:

✓ Fits your budget
✓ Beginner friendly
✓ Commercial use available
✓ Good voice quality
```

---

# 14. P.A.C.E EVALUATION SYSTEM

نظام التقييم الخاص بالمنصة:

# P.A.C.E

## P — Price per Result

كم تكلفة الحصول على نتيجة حقيقية؟

مثلاً:

* Cost per video
* Cost per voice minute
* Cost per image
* Cost per 100 Shorts

---

## A — Accuracy / Output Quality

جودة النتيجة.

حسب نوع الأداة:

* Voice quality
* Video quality
* Script quality
* Image quality
* Research quality

---

## C — Control

مدى التحكم والتخصيص.

---

## E — Ease

سهولة الاستخدام، خصوصًا للمبتدئين.

---

# 15. EVIDENCE LAYER

P.A.C.E لا يجب أن يكون مجرد رأي.

كل تقييم يجب أن يكون مرتبطًا بأدلة.

مصادر الأدلة يمكن أن تكون:

* Hands-on testing
* Official documentation
* Official pricing
* Official license terms
* Observed output
* Repeated testing

يجب تسجيل:

```text
tested_at
tested_by
test_method
test_prompt
test_conditions
observations
result
```

---

# 16. SCORE TRANSPARENCY

لا نكتب فقط:

> 8.7/10

بل:

```text
P: 8.5
A: 9.0
C: 8.0
E: 9.2
```

ثم نشرح السبب.

---

# 17. COMMERCIAL USE

هذه ميزة أساسية.

يجب إظهار:

* Commercial use allowed?
* Plan restrictions
* Attribution requirements
* Ownership notes
* Relevant license restrictions

لا نقدم استشارات قانونية.

نعرض فقط المعلومات المتاحة من المصادر الرسمية ونوضح تاريخ التحقق.

---

# 18. TRUE COST

لا نعتمد على السعر الشهري فقط.

يجب أن نساعد المستخدم على فهم:

> تكلفة تحقيق النتيجة.

مثال:

```text
Monthly subscriptions:
$30

Estimated:
100 Shorts/month

Estimated cost per Short:
$0.30
```

الهدف هو مساعدة المستخدم على اتخاذ قرار حقيقي.

---

# 19. ALTERNATIVE SYSTEM

Alternative pages هي Core Feature وليست مجرد SEO pages.

مثال:

> ElevenLabs Alternatives

يجب أن نضيف:

## Why are you leaving?

* Too expensive
* Too complicated
* Need better quality
* Need commercial rights
* Need another workflow

ثم:

> Best alternative for your situation

---

# 20. COMPARISON SYSTEM

المقارنة ليست:

> Feature A / Feature B فقط.

يجب أن تركز على:

* Who should choose A?
* Who should choose B?
* Price
* True cost
* Quality
* Ease
* Control
* Commercial use
* Workflow compatibility
* P.A.C.E
* Evidence

وفي النهاية:

> **Our recommendation**

---

# 21. HANDS-ON BENCHMARKING

هذه واحدة من أهم ميزات الـMoat.

يجب أن نستخدم منهجية موحدة.

عند اختبار أدوات متشابهة:

* نفس prompt
* نفس input
* نفس target
* نفس conditions قدر الإمكان
* نفس evaluation criteria

نسجل:

* Time
* Quality
* Accuracy
* Cost
* Ease
* Limitations
* Commercial considerations

---

# 22. BENCHMARK ASSET

الـBenchmark ليس مجرد مقال.

يمكن أن ينتج:

```text
Benchmark
↓
Article
↓
Comparison
↓
Short video
↓
Social post
↓
Tool page evidence
```

أي:

> One test → Multiple content assets.

---

# 23. CONTENT ENGINE

يجب تصميم البيانات بحيث يمكن إعادة استخدامها.

من Tool واحدة يمكن إنتاج:

```text
Tool Page

Alternative Page

Comparison Page

Best X Page

Workflow Page

Budget Page
```

لكن لا نولد صفحات آلية عديمة القيمة.

كل صفحة يجب أن تضيف قيمة حقيقية.

---

# 24. DECISION PAGES

نريد صفحات تبدأ من المشكلة.

أمثلة:

```text
I need to make YouTube Shorts

I need a faceless YouTube stack

I need AI voice under $20

I need an AI video tool for beginners

I need to create 100 Shorts/month
```

ثم نقدم القرار.

---

# 25. INFORMATION ARCHITECTURE

الهيكل الأولي:

```text
/
├── tools
├── tools/[tool]
├── categories/[category]
├── workflows/[workflow]
├── compare/[tool-a]-vs-[tool-b]
├── alternatives/[tool]
├── best/[use-case]
├── stacks/[stack]
└── about
```

يمكن تغيير البنية إذا أثبتت البيانات أو SEO research أن بنية أخرى أفضل.

---

# 26. HOMEPAGE

الصفحة الرئيسية يجب ألا تبدو كـDirectory.

الـHero يجب أن يبدأ بالمشكلة.

مثال:

> **Build the right AI stack for your content.**

ثم:

```text
What are you trying to create?
```

ثم خيارات مثل:

* YouTube Shorts
* Faceless videos
* Long-form videos
* Podcast
* Tutorials
* Repurposing

ثم:

> Find my stack

مع إمكانية البحث عن أدوات بشكل ثانوي.

---

# 27. TOOL PAGE

كل Tool Page يجب أن تحتوي على:

1. Overview
2. Best for
3. Not ideal for
4. Pricing
5. True cost
6. P.A.C.E
7. Commercial use
8. Hands-on test
9. Strengths
10. Weaknesses
11. Alternatives
12. Comparisons
13. Related workflows
14. CTA
15. Last verified

---

# 28. UX PRINCIPLES

الموقع يجب أن يكون:

* Fast
* Clean
* Premium
* Trustworthy
* Modern
* Mobile-first
* Accessible
* Easy to scan

لا نريد:

* Dashboard-heavy UI
* Excessive animations
* Artificial AI aesthetic
* Information overload
* Dark patterns
* Aggressive affiliate CTAs

---

# 29. DESIGN PRINCIPLE

المنتج يجب أن يشعر بأنه:

> **Decision product**

وليس:

> AI directory.

الواجهة يجب أن تعطي أولوية لـ:

* Recommendation
* Evidence
* Cost
* Comparison
* Action

---

# 30. TECHNOLOGY DIRECTION

التقنية المبدئية:

```text
Next.js
TypeScript
React
Tailwind CSS
```

يمكن إضافة مكتبات أخرى فقط عند وجود حاجة حقيقية.

---

# 31. LOCAL-FIRST PRODUCT BUILD

في البداية يجب أن يعمل المشروع دون الاعتماد على Cloud Infrastructure.

البيانات الأولية يمكن أن تكون:

```text
/data
  tools.json
  workflows.json
  comparisons.json
  alternatives.json
  benchmarks.json
```

أو أي بنية أفضل يقترحها Architect.

---

# 32. DATABASE RULE

لا نربط المشروع بقاعدة بيانات سحابية في المرحلة الأولى لمجرد أن "لدينا Database".

الـDatabase ستأتي عندما نحتاج:

* dynamic content
* admin management
* user accounts
* analytics-backed features
* scalable content operations

---

# 33. AUTHENTICATION RULE

Authentication ممنوع في MVP إلا إذا ظهر سبب منتجي حقيقي.

المستخدم يجب أن يستطيع:

* Browse
* Compare
* Build stack
* Read
* Click affiliate links

بدون تسجيل.

لاحقًا:

```text
Account
→ Save Stack
→ Favorites
→ History
→ Alerts
→ Personalization
```

---

# 34. STORAGE RULE

لا نستخدم R2 في البداية إلا عند وجود حاجة حقيقية.

R2 مناسب لاحقًا لـ:

* Benchmark assets
* User uploads
* Large media
* Generated assets

---

# 35. VECTOR SEARCH RULE

ممنوع إضافة:

* Vector DB
* Embeddings
* Semantic Search

في MVP.

نضيفها فقط عندما يصبح حجم البيانات والمحتوى يبررها.

---

# 36. AI ENGINE RULE

لا نبني AI Recommendation Engine في MVP.

V1:

```text
Rules + Scoring
```

V2:

```text
Rules + AI explanation
```

V3:

```text
Personalized AI Decision Engine
```

---

# 37. AI DEVELOPMENT STRATEGY

سنستخدم AI بكثافة، لكن بطريقة منظمة.

AI يمكن استخدامه في:

* Architecture review
* Coding
* Refactoring
* Testing
* UI generation
* Research
* Content drafting
* Data normalization
* SEO assistance
* QA
* Documentation

لكن:

> **AI لا يحدد Product Strategy من تلقاء نفسه.**

---

# 38. AI AGENT ROLES

لا نستخدم عدة Agents كـDevelopers مستقلين يكتبون على نفس المشروع عشوائيًا.

نحدد أدوارًا:

## Lead Coding Agent

المسؤول الرئيسي عن التنفيذ.

## Architecture / Senior Review Agent

يراجع:

* Architecture
* Code quality
* Scalability
* Security

## UI/UX Agent

يراجع:

* Design
* UX
* Accessibility
* Consistency

## Research Agent

يبحث عن:

* Tools
* Pricing
* Competitors
* Market data
* Official sources

## Content Agent

يساعد في:

* Drafting
* Comparisons
* Alternatives
* Workflow content

### قاعدة

> Lead Agent هو الوحيد الذي يملك صلاحية تنفيذ التغييرات الرئيسية، إلا إذا قرر Project Manager خلاف ذلك.

---

# 39. AI CODING RULES

كل Agent يجب أن:

1. يقرأ Project Specification.
2. يفحص المشروع قبل التعديل.
3. يفهم Architecture الحالية.
4. لا يعيد كتابة أجزاء مستقرة بلا سبب.
5. لا يضيف dependency دون مبرر.
6. لا يغير API contracts بلا موافقة.
7. لا ينشئ ملفات مكررة.
8. لا يحذف functionality بدون سبب موثق.
9. يشغل tests بعد التعديل.
10. يذكر ما تم تغييره.

---

# 40. NO BLIND IMPLEMENTATION

ممنوع على Agent أن يفعل:

> "I assumed..."

إذا كان هناك غموض:

```text
Ambiguity
↓
Report
↓
Recommendation
↓
Decision
```

وليس:

```text
Ambiguity
↓
Guess
↓
Implement
```

---

# 41. GIT STRATEGY

كل مرحلة يجب أن تكون قابلة للرجوع.

نستخدم:

```text
main
development / feature branches
```

ولا يتم اعتبار العمل منتهيًا إلا بعد:

* Build
* Tests
* Review
* Commit

---

# 42. PHASE 0 — PRODUCT SPECIFICATION

## الهدف

تثبيت المنتج قبل الكود.

### Deliverables

* Product Vision
* Target Audience
* User Personas
* Core Use Cases
* User Journeys
* MVP Scope
* Non-MVP Scope
* Monetization Strategy
* Data Model
* Evaluation Model
* Information Architecture
* Design principles

### Exit Criteria

لا يوجد غموض جوهري حول:

> ماذا نبني؟

---

# 43. PHASE 1 — DATA FOUNDATION

نبني:

* Tool schema
* Workflow schema
* Comparison schema
* Alternative schema
* Benchmark schema
* P.A.C.E schema
* Evidence model

ثم نضيف:

### 12–15 أدوات

---

# 44. PHASE 2 — DESIGN SYSTEM

نبني:

* Typography
* Colors
* Spacing
* Cards
* Buttons
* Tool cards
* Score cards
* Comparison components
* Evidence components
* Stack components
* Navigation
* Responsive behavior

### Exit Criteria

UI system متسق وقابل لإعادة الاستخدام.

---

# 45. PHASE 3 — CORE WEBSITE

نبني:

### Homepage

### Tools

### Tool page

### Categories

### Workflows

### Comparisons

### Alternatives

### About / methodology

لا نضيف Dashboard أو Authentication.

---

# 46. PHASE 4 — DECISION SYSTEM V1

نبني:

```text
Goal
+
Budget
+
Experience
+
Requirements
```

ثم:

```text
Recommendation
```

مع:

> Why this recommendation?

---

# 47. PHASE 5 — EVIDENCE & BENCHMARKS

نضيف:

* 3–5 hands-on tests
* P.A.C.E
* Evidence
* Last verified
* True cost

هذه المرحلة مهمة جدًا للثقة.

---

# 48. PHASE 6 — CONTENT MVP

المستهدف الأولي:

```text
12–15 tools

5–10 workflows

5–10 comparisons

5–10 alternatives

3–5 benchmarks

3–5 decision pages
```

---

# 49. PHASE 7 — MONETIZATION

نضيف:

* Affiliate links
* Outbound tracking
* CTA measurement
* Conversion tracking

لكن:

> لا نغير التوصية بسبب العمولة.

---

# 50. PHASE 8 — SEO / GEO

بعد أن يصبح المنتج الحقيقي موجودًا.

نضيف:

* Metadata
* Canonicals
* Sitemap
* Robots
* Structured Data
* Internal linking
* Topic clusters
* Search intent pages
* AI-search-friendly content
* Clear factual evidence

---

# 51. SEO PRINCIPLE

لا نكتب:

> 1000 AI articles.

نكتب:

> Content that answers real decisions.

مثلاً:

```text
Best AI voice for faceless YouTube

ElevenLabs alternatives

Best AI stack under $50

Best AI tools for beginners

Best video workflow for Shorts
```

---

# 52. PHASE 9 — VALIDATION

نراقب:

* Traffic
* Search impressions
* CTR
* Tool page engagement
* Comparison engagement
* Stack builder usage
* Outbound clicks
* Affiliate clicks
* Returning users

---

# 53. NORTH STAR METRIC

الـNorth Star Metric:

# Qualified Decision Sessions

جلسة وصل فيها المستخدم إلى:

```text
Goal
→ Recommendation
→ Tool/Stack
→ Action
```

وليس مجرد pageview.

---

# 54. EARLY SUCCESS SIGNALS

لا نضع أرقامًا مصطنعة كحقيقة.

نستخدمها كإشارات.

مثلاً:

```text
Users reaching recommendation
Users clicking tools
Users comparing tools
Affiliate CTR
Repeat usage
```

إذا كان هناك traffic ولكن لا توجد decisions:

> المنتج يحتاج تعديل.

---

# 55. MONETIZATION

مصادر الربح المحتملة:

## 1. Affiliate

المصدر الأولي.

## 2. Sponsored placements

لكن يجب فصلها بوضوح عن التقييم التحريري.

## 3. Premium features

لاحقًا.

## 4. Advanced decision engine

لاحقًا.

## 5. B2B / creator teams

لاحقًا.

---

# 56. TRUST PRINCIPLE

الثقة أهم من الإيراد قصير المدى.

ممنوع:

* Fake reviews
* Fake benchmarks
* Fake users
* Artificial scores
* Hidden sponsorships
* Misleading pricing
* Inflated claims

---

# 57. DATA VERIFICATION

كل معلومة متغيرة يجب أن تحتوي على:

```text
last_verified
source
```

خصوصًا:

* Pricing
* Free plans
* Limits
* Commercial rights
* Features

---

# 58. RESEARCH RULE

قاعدة البيانات البحثية التي سيتم توفيرها لنا تعتبر:

> **Research Input**

وليست:

> Ground Truth.

يجب التحقق من البيانات المهمة من المصادر المناسبة، وخصوصًا المصادر الرسمية عندما يتعلق الأمر بـ:

* Pricing
* Terms
* Commercial rights
* Product features

---

# 59. INFRASTRUCTURE PHASE

البنية التحتية تأتي **بعد بناء المنتج الأساسي**.

الترتيب المبدئي:

```text
GitHub
↓
Hosting
↓
Database
↓
Storage if needed
↓
Auth if needed
↓
Analytics
↓
Email
```

لا يتم اختيار خدمة معينة بشكل نهائي اعتمادًا على أرقام مجانية قديمة.

يجب التحقق من الأسعار والحدود الحالية وقت التنفيذ.

---

# 60. INFRASTRUCTURE GOAL

المطلوب:

> Lowest practical cost without compromising reliability.

وليس:

> Zero cost at any price.

الصفرية هدف اقتصادي، وليست Architecture Principle.

---

# 61. SECURITY

يجب:

* عدم وضع secrets في client
* عدم تخزين API keys في Git
* استخدام environment variables
* حماية admin functionality
* validation لكل input
* sanitize user-generated content
* least privilege
* secure authentication عند إضافتها

---

# 62. PERFORMANCE

المنتج يجب أن يكون:

* Fast initial load
* Optimized images
* Minimal JavaScript
* Good Core Web Vitals
* Mobile-first
* Cache-friendly

---

# 63. ACCESSIBILITY

يجب أن يدعم:

* Keyboard navigation
* Semantic HTML
* Accessible labels
* Focus states
* Contrast
* Screen reader basics
* Reduced motion

---

# 64. ADMIN SYSTEM

ليس جزءًا من أول MVP.

عند الحاجة:

```text
Admin
→ Tools
→ Pricing
→ Benchmarks
→ Comparisons
→ Alternatives
→ Workflows
→ Verification dates
```

يجب أن يجعل تحديث المحتوى سريعًا.

---

# 65. FUTURE ROADMAP

بعد إثبات MVP:

## V2

* Admin CMS
* Accounts
* Saved stacks
* Favorites
* Better recommendation engine
* More benchmarks
* More tools

## V3

* Semantic search
* AI explanations
* Personalized recommendations
* User feedback loop
* Decision history

## V4

* Creator vertical expansion
* Marketing
* Agencies
* Developers

## V5

General AI Decision Engine.

---

# 66. DATA MOAT

على المدى الطويل نريد بناء:

# Decision Dataset

يمكن أن يتكون من:

```text
User Goal
+
Budget
+
Experience
+
Requirements
+
Recommended Stack
+
Selected Tools
+
Feedback
+
Outcome
```

هذه البيانات قد تصبح أحد أهم أصول الشركة.

---

# 67. CONTENT MOAT

نريد:

```text
Hands-on testing
+
Structured evaluations
+
Decision data
+
Workflow knowledge
+
Real user feedback
```

وليس مجرد:

```text
AI-generated articles
```

---

# 68. WHAT WE DO NOT BUILD

خلال MVP ممنوع إضافة:

* Generic directory
* Thousands of tools
* User accounts
* Social network
* Chatbot
* Vector database
* Semantic search
* Complex AI engine
* Mobile app
* Browser extension
* Chrome extension
* Marketplace
* User-generated reviews
* Enterprise dashboard
* Complex analytics platform

إلا بقرار صريح من Project Manager.

---

# 69. ANTI-SCOPE-CREEP RULE

أي Feature جديدة يجب أن تجيب:

1. هل تحل Core Problem؟
2. هل تزيد Decision Quality؟
3. هل تحتاجها الـMVP؟
4. هل يمكن تأجيلها؟
5. ما تكلفة تنفيذها؟
6. ما أثرها على Architecture؟

إذا لم تكن ضرورية:

> **DEFER**

---

# 70. PROJECT MANAGER AUTHORITY

Project Manager هو صاحب القرار النهائي في:

* Scope
* Priorities
* Architecture changes
* Feature approval
* Phase transitions
* Tool selection
* Release decisions

AI Agents يقدمون:

> Analysis + Recommendation + Implementation

لكن لا يملكون تغيير Product Strategy من تلقاء أنفسهم.

---

# 71. TASK EXECUTION PROTOCOL

كل مهمة يجب أن تمر:

```text
Task
↓
Understand Context
↓
Inspect Existing Project
↓
Plan
↓
Implement
↓
Test
↓
Review
↓
Report
```

---

# 72. TASK REPORT FORMAT

بعد كل مهمة يجب أن يذكر Agent:

```text
TASK:
...

CHANGED:
...

CREATED:
...

REMOVED:
...

TESTS:
...

RESULT:
PASS / FAIL

RISKS:
...

NEXT RECOMMENDATION:
...
```

---

# 73. DEFINITION OF DONE

لا تعتبر المهمة مكتملة إلا إذا:

* Code implemented
* Tests pass
* No obvious regression
* UX verified where relevant
* Accessibility checked where relevant
* Documentation updated where relevant
* Git state clean or intentionally changed
* Agent reports result

---

# 74. DEFINITION OF MVP DONE

الـMVP يعتبر جاهزًا عندما:

### Product

* Core value proposition واضح.
* User يستطيع فهم المنتج خلال ثوانٍ.

### Content

* 12–15 أدوات عالية الجودة.
* 5–10 workflows.
* 5–10 comparisons.
* 5–10 alternatives.
* 3–5 benchmarks.

### Decision

* Stack Builder V1 يعمل.
* Recommendations قابلة للتفسير.

### Trust

* P.A.C.E.
* Evidence.
* Pricing verification.
* Commercial-use information.

### Technical

* Build passes.
* Tests pass.
* Responsive.
* Accessible.
* Fast.

### Business

* Affiliate tracking جاهز.
* Outbound clicks قابلة للقياس.

---

# 75. RELEASE GATES

قبل الانتقال بين المراحل:

## Gate 1

Product Definition approved.

## Gate 2

Data Model approved.

## Gate 3

Design System approved.

## Gate 4

Core Website functional.

## Gate 5

Decision System functional.

## Gate 6

Evidence / Benchmark system functional.

## Gate 7

Content MVP complete.

## Gate 8

SEO / analytics ready.

## Gate 9

Infrastructure connected.

## Gate 10

Production launch approved.

---

# 76. FIRST DEVELOPMENT TARGET

لا تبدأ ببناء كل شيء.

أول هدف تنفيذي هو:

# Build the smallest complete vertical slice.

أي:

```text
Homepage
↓
One Workflow
↓
Three Tools
↓
Comparison
↓
Recommendation
↓
Tool Page
↓
CTA
```

إذا كان هذا المسار يعمل جيدًا، نوسعه.

---

# 77. VERTICAL SLICE EXAMPLE

مثلاً:

```text
Goal:
Faceless YouTube

Workflow:
Script → Voice → Video

Tools:
A
B
C

Comparison:
A vs B

Recommendation:
Best stack under $25

CTA:
Try recommended tool
```

هذا المسار يجب أن يكون أول إثبات حقيقي للمنتج.

---

# 78. DEVELOPMENT ORDER

الترتيب الإلزامي المبدئي:

```text
1. Product Specification
2. Data Model
3. Design System
4. Vertical Slice
5. Tool Pages
6. Workflow Pages
7. Comparison
8. Alternative
9. P.A.C.E
10. Evidence
11. True Cost
12. Stack Builder V1
13. Content Expansion
14. SEO/GEO
15. Analytics
16. Monetization
17. Infrastructure
18. Production QA
19. Launch
```

---

# 79. IMPORTANT: DO NOT BUILD INFRASTRUCTURE FIRST

هذا المشروع لا يبدأ بـ:

```text
Database
Auth
Storage
API
Cloud
```

بل:

```text
Product
↓
Content
↓
Decision Experience
↓
Validation
↓
Infrastructure
```

---

# 80. PROJECT SUCCESS DEFINITION

نجاح المشروع ليس:

> "لدينا موقع جميل."

وليس:

> "لدينا 1000 Tool."

وليس:

> "لدينا AI chatbot."

النجاح هو:

> **A creator arrives with a real content problem, receives a useful recommendation, understands why it was recommended, trusts the evidence, and takes action.**

---

# 81. FINAL PROJECT PRINCIPLE

احفظ هذه القاعدة:

> **We are not building a catalog of AI tools.**
>
> **We are building a decision layer between creators and AI tools.**

وكل Feature وكل صفحة وكل Dataset وكل Benchmark وكل قرار تقني يجب أن يخدم هذه الفكرة.

---

# 82. CURRENT PROJECT STATUS

الحالة:

```text
STRATEGY:
APPROVED

PRODUCT:
NOT STARTED

CODE:
NOT STARTED

DATABASE:
NOT CONNECTED

INFRASTRUCTURE:
NOT CONNECTED

CONTENT:
RESEARCH PHASE

MVP:
NOT BUILT
```

---

# 83. IMMEDIATE NEXT STEP

قبل كتابة كود Production:

## Step 1

إنشاء:

**Product Specification v1.0**

## Step 2

إنشاء:

**Information Architecture v1.0**

## Step 3

إنشاء:

**Data Schema v1.0**

## Step 4

إنشاء:

**Design System Specification v1.0**

## Step 5

إنشاء:

**MVP Backlog**

## Step 6

إنشاء:

**AI Agent Instructions**

## Step 7

بدء أول Vertical Slice.

---

# 84. FINAL COMMAND TO ALL AI AGENTS

أنت تعمل على:

**Creator AI Decision Platform**

لا تتعامل مع المشروع على أنه:

* AI directory
* Blog
* Review website
* Generic SaaS
* Chatbot

تعامل معه على أنه:

# A Creator Decision Platform

هدفك في كل مهمة:

1. فهم المشكلة قبل التنفيذ.
2. الحفاظ على Architecture.
3. عدم توسيع Scope دون موافقة.
4. تفضيل الحل الأبسط.
5. بناء reusable components.
6. الحفاظ على جودة البيانات.
7. دعم Evidence-based decisions.
8. عدم اختلاق معلومات.
9. عدم تقديم نتائج Benchmark غير مختبرة.
10. عدم التضحية بالثقة من أجل Affiliate revenue.
11. عدم إضافة Cloud infrastructure قبل الحاجة.
12. عدم إضافة AI لمجرد أن المشروع متعلق بالـAI.
13. اختبار كل تغيير.
14. توثيق كل قرار مهم.
15. إبلاغ Project Manager بأي تعارض.

---

# PROJECT MANAGER DIRECTIVE

إذا لم تكن متأكدًا:

> لا تخمّن.

إذا وجدت طريقة أبسط:

> اقترحها.

إذا وجدت Feature غير ضرورية:

> أجّلها.

إذا وجدت مشكلة في Architecture:

> أوقف التنفيذ وأبلغ Project Manager.

إذا كان هناك تعارض بين طلب المستخدم وهذه الوثيقة:

> ارفع التعارض قبل التنفيذ.

إذا كانت المهمة صغيرة:

> لا تحولها إلى إعادة بناء للنظام.

إذا كان الكود يعمل:

> لا تعِد كتابته دون سبب.

إذا كان هناك حل يمكن تنفيذه محليًا:

> فضّله على إضافة خدمة Cloud.

إذا كان AI يمكن أن يحل المشكلة لكن Rules Engine يكفي:

> استخدم Rules Engine.

إذا كان لدينا خيار بين:

> More features

و:

> Better decision quality

اختر:

> **Better decision quality.**

---

# END OF MASTER PROJECT DIRECTIVE

## Core Motto

> **Don't help creators browse more tools.**
>
> **Help them make better decisions.**