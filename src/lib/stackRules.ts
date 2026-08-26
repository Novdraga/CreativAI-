import { getToolById } from './data';
import { Tool } from '../types';

export type GoalId = 'faceless-youtube' | 'shorts' | 'longform' | 'podcast' | 'repurposing' | 'live-streaming' | 'education-elearning' | 'music-production';
export type BudgetId = '0' | '25' | '50' | '100' | '200' | '500' | '1000';
export type ExperienceId = 'beginner' | 'intermediate' | 'advanced' | 'no-experience' | 'expert' | 'agency';
export type RequirementId = 'commercial' | 'quality' | 'cheapest' | 'fastest' | 'easiest' | 'support' | 'scalability';

export interface StackInput {
  goal: GoalId;
  budget: BudgetId;
  experience: ExperienceId;
  requirement: RequirementId;
}

export interface ResolvedStep {
  key: string;
  label: string;
  role: string;
  toolId: string;
  toolName: string;
  slug: string;
  planName: string;
  monthlyPrice: number;
  warning?: string;
}

export interface StackRecommendation {
  goal: GoalId;
  goalLabel: string;
  tagline: string;
  steps: ResolvedStep[];
  monthlyTotal: number;
  perResultStarter: number;
  perResultVolume: number;
  outputsStarter: number;
  outputsVolume: number;
  reasons: string[];
  commercialNotes: string[];
  workflowHref: string | null;
}

export const OUTPUTS_STARTER = 4;
export const OUTPUTS_VOLUME = 20;

export const GOAL_OPTIONS: { id: GoalId; label: string }[] = [
  { id: 'faceless-youtube', label: 'Faceless YouTube Video' },
  { id: 'shorts', label: 'YouTube Shorts / TikTok' },
  { id: 'longform', label: 'Long-form Video Essay' },
  { id: 'podcast', label: 'Podcast & Audio Narration' },
  { id: 'repurposing', label: 'Content Repurposing' },
  { id: 'live-streaming', label: 'Live Streaming' },
  { id: 'education-elearning', label: 'Education / E-learning' },
  { id: 'music-production', label: 'Music Production' },
];

export const EXPERIENCE_OPTIONS: { id: ExperienceId; label: string }[] = [
  { id: 'no-experience', label: 'No Experience (Absolute Beginner)' },
  { id: 'beginner', label: 'Beginner (Zero Technical Skill)' },
  { id: 'intermediate', label: 'Intermediate (Comfortable with Prompts)' },
  { id: 'advanced', label: 'Advanced (High-volume workflows)' },
  { id: 'expert', label: 'Expert / Professional' },
  { id: 'agency', label: 'Agency / Production Team' },
];

export const REQUIREMENT_OPTIONS: { id: RequirementId; label: string }[] = [
  { id: 'commercial', label: 'Commercial Rights Guaranteed' },
  { id: 'quality', label: 'Highest Output Quality' },
  { id: 'cheapest', label: 'Lowest Possible Cost' },
  { id: 'fastest', label: 'Fastest Production Speed' },
  { id: 'easiest', label: 'Easiest to Use' },
  { id: 'support', label: 'Best Customer Support' },
  { id: 'scalability', label: 'Scalability for Growth' },
];

export const DEFAULT_INPUT: StackInput = {
  goal: 'faceless-youtube',
  budget: '50',
  experience: 'beginner',
  requirement: 'commercial',
};

function isBudget(v: string): v is BudgetId {
  return ['0', '25', '50', '100', '200', '500', '1000'].includes(v);
}
function isExperience(v: string): v is ExperienceId {
  return ['beginner', 'intermediate', 'advanced', 'no-experience', 'expert', 'agency'].includes(v);
}
function isRequirement(v: string): v is RequirementId {
  return ['commercial', 'quality', 'cheapest', 'fastest', 'easiest', 'support', 'scalability'].includes(v);
}
function isGoal(v: string): v is GoalId {
  return GOAL_OPTIONS.some((g) => g.id === v);
}

export function sanitizeInput(
  raw: Partial<Record<'goal' | 'budget' | 'experience' | 'requirement', string | string[] | undefined>>
): StackInput {
  const g = typeof raw.goal === 'string' ? raw.goal : '';
  const b = typeof raw.budget === 'string' ? raw.budget : '';
  const e = typeof raw.experience === 'string' ? raw.experience : '';
  const r = typeof raw.requirement === 'string' ? raw.requirement : '';
  return {
    goal: isGoal(g) ? g : DEFAULT_INPUT.goal,
    budget: isBudget(b) ? b : DEFAULT_INPUT.budget,
    experience: isExperience(e) ? e : DEFAULT_INPUT.experience,
    requirement: isRequirement(r) ? r : DEFAULT_INPUT.requirement,
  };
}

function pickPlan(tool: Tool, budget: BudgetId, experience: ExperienceId = 'beginner', requirement: RequirementId = 'commercial'): { planName: string; price: number; warning?: string } {
  const byName = (name: string) => {
    const plan = tool.pricing.find((p) => p.name.toLowerCase() === name.toLowerCase());
    return plan ? { planName: plan.name, price: plan.price } : { planName: name, price: tool.starting_price.amount };
  };

  const isProBudget = budget === '100' || budget === '200' || budget === '500' || budget === '1000' || experience === 'agency' || requirement === 'scalability';
  const isStudioBudget = budget === '500' || budget === '1000' || (experience === 'agency' && budget !== '0');

  switch (tool.id) {
    case 'chatgpt':
      if (budget === '1000') return byName('Pro');
      return isProBudget ? byName('Plus') : { planName: 'Free', price: 0 };
    case 'claude':
      return isProBudget ? byName('Pro') : { planName: 'Free', price: 0 };
    case 'perplexity':
      return isProBudget ? byName('Pro') : { planName: 'Free', price: 0 };
    case 'jasper':
      return byName('Creator');
    case 'elevenlabs':
      if (budget === '0') return { planName: 'Free', price: 0, warning: 'Free tier is non-commercial and requires attribution.' };
      if (isStudioBudget) return byName('Pro');
      return isProBudget ? byName('Creator') : byName('Starter');
    case 'suno':
      if (budget === '0') return { planName: 'Basic (Free)', price: 0, warning: 'Free tier is non-commercial only (personal testing).' };
      return isProBudget ? byName('Premier Plan') : byName('Pro Plan');
    case 'murf':
      if (budget === '0') return { planName: 'Free', price: 0, warning: 'Free tier blocks audio downloads (preview only).' };
      return byName('Creator');
    case 'play-ht':
      if (budget === '0') return { planName: 'Free', price: 0, warning: 'Free tier has one-time allocation and requires attribution.' };
      return byName('Creator');
    case 'runway':
      if (budget === '0') return { planName: 'Free', price: 0, warning: 'Free exports are watermarked (125 one-time credits).' };
      if (isStudioBudget) return byName('Unlimited');
      return isProBudget ? byName('Pro') : byName('Standard');
    case 'synthesia':
      if (budget === '0') return { planName: 'Free', price: 0, warning: 'Free exports contain Synthesia watermark (3 mins/mo).' };
      return isProBudget ? byName('Creator') : byName('Starter');
    case 'pictory':
      if (budget === '0') return { planName: 'Free Trial', price: 0, warning: 'Free trial includes watermark on exported videos.' };
      return isProBudget ? byName('Premium') : byName('Standard');
    case 'descript':
      if (budget === '0') return { planName: 'Free', price: 0, warning: 'Free exports are watermarked and limited to 720p.' };
      return isProBudget ? byName('Creator') : byName('Hobbyist');
    case 'canva-ai':
      return isProBudget ? byName('Pro') : { planName: 'Free', price: 0 };
    case 'adobe-firefly':
      if (budget === '0') return { planName: 'Free Tier', price: 0, warning: 'Free tier exports may contain watermarks.' };
      return byName('Premium Plan');
    case 'midjourney':
      if (isStudioBudget) return byName('Pro');
      return isProBudget ? byName('Standard') : byName('Basic');
    case 'capcut':
      return ['25', '50', '100', '200', '500', '1000'].includes(budget) ? byName('Pro') : { planName: 'Free', price: 0 };
    case 'davinci-resolve':
      return ['100', '200', '500', '1000'].includes(budget) ? byName('DaVinci Resolve Studio') : { planName: 'DaVinci Resolve (Free)', price: 0 };
    case 'final-cut-pro':
      return byName('Final Cut Pro');
    case 'premiere-pro':
      return byName('Premiere Pro Single App');
    case 'after-effects':
      return byName('After Effects Single App');
    case 'obs-studio':
      return { planName: 'OBS Studio', price: 0 };
    case 'streamlabs':
      return ['50', '100', '200', '500', '1000'].includes(budget) ? byName('Streamlabs Prime') : { planName: 'Streamlabs Desktop', price: 0 };
    case 'audacity':
      return { planName: 'Audacity', price: 0 };
    case 'reaper':
      return ['100', '200', '500', '1000'].includes(budget) ? byName('Commercial License') : byName('Discount License');
    default:
      return { planName: 'Free', price: tool.starting_price.amount };
  }
}

function pickScriptTool(goal: GoalId, requirement: RequirementId, experience: ExperienceId = 'beginner'): string {
  if (requirement === 'easiest' || experience === 'no-experience') return 'chatgpt';
  if (requirement === 'support') return 'jasper';
  if (requirement === 'scalability' || experience === 'agency') return goal === 'longform' ? 'claude' : 'jasper';
  if (experience === 'expert') return 'claude';
  if (goal === 'longform') return requirement === 'cheapest' ? 'chatgpt' : 'claude';
  if (goal === 'shorts') return 'chatgpt';
  return requirement === 'quality' ? 'claude' : 'chatgpt';
}

function pickVisualTool(goal: GoalId, requirement: RequirementId, budget: BudgetId, experience: ExperienceId = 'beginner'): string {
  if (budget === '0') {
    if (requirement === 'quality' || experience === 'expert') return 'davinci-resolve';
    if (goal === 'shorts' || requirement === 'fastest') return 'capcut';
    return 'capcut';
  }

  if (requirement === 'easiest' || experience === 'no-experience') {
    return goal === 'shorts' ? 'capcut' : 'pictory';
  }

  if (requirement === 'support') return 'synthesia';

  if (requirement === 'scalability' || experience === 'agency') {
    return Number(budget) >= 50 ? 'premiere-pro' : 'runway';
  }

  if (experience === 'expert' || requirement === 'quality') {
    if (Number(budget) >= 100) return 'davinci-resolve';
    if (Number(budget) >= 50) return 'premiere-pro';
    return 'davinci-resolve';
  }

  if (goal === 'shorts') return requirement === 'fastest' ? 'capcut' : 'runway';
  if (goal === 'longform') return Number(budget) >= 50 ? 'premiere-pro' : 'runway';

  return 'runway';
}

function pickThumbnailTool(requirement: RequirementId, budget: BudgetId, experience: ExperienceId = 'beginner'): string {
  if (requirement === 'easiest' || experience === 'no-experience') return 'canva-ai';
  if (requirement === 'scalability' || experience === 'agency') return 'canva-ai';
  if (requirement === 'quality' && budget !== '0') return 'midjourney';
  if (requirement === 'commercial' && budget !== '0') return 'adobe-firefly';
  return 'canva-ai';
}

interface StepSpec {
  key: string;
  label: string;
  toolId: (input: StackInput) => string;
  role: (toolName: string, planName: string, input: StackInput) => string;
}

const GOAL_SPECS: Record<
  GoalId,
  {
    label: string;
    tagline: string;
    steps: StepSpec[];
    reasons: (input: StackInput, steps: ResolvedStep[]) => string[];
    commercial: (input: StackInput, steps: ResolvedStep[]) => string[];
    workflowHref: string | null;
  }
> = {
  'faceless-youtube': {
    label: 'Faceless YouTube Video',
    tagline: 'Complete narrated videos without showing your face.',
    workflowHref: '/workflows/faceless-youtube',
    steps: [
      {
        key: 'script',
        label: 'Step 1 — Script',
        toolId: (i) => pickScriptTool(i.goal, i.requirement, i.experience),
        role: (t) => `${t} — Hooks, outlines & full spoken script`,
      },
      { key: 'voice', label: 'Step 2 — Voice', toolId: () => 'elevenlabs', role: (t, p) => `${t} (${p}) — ultra-realistic commercial narration` },
      { key: 'video', label: 'Step 3 — Video', toolId: (i) => pickVisualTool(i.goal, i.requirement, i.budget, i.experience), role: (t, p) => `${t} (${p}) — cinematic scene b-roll` },
      { key: 'thumb', label: 'Step 4 — Thumbnail', toolId: (i) => pickThumbnailTool(i.requirement, i.budget, i.experience), role: (t) => `${t} — high-CTR visual assets` },
    ],
    reasons: (i, s) => [
      i.budget === '0'
        ? 'Configured for zero upfront investment using free tiers and trial credits.'
        : 'Includes paid voice/video tiers so monetized uploads stay watermark-free and licensed.',
      s[0].toolId === 'claude'
        ? 'Claude selected for superior narration tone and 200k-context long scripts.'
        : 'ChatGPT selected for instant hook ideation and flexible outline drafting.',
      'Canva AI / Midjourney covers thumbnails with high visual contrast.',
      i.budget === '0'
        ? 'Runway Free supplies 125 trial credits for first test renders.'
        : 'Runway paid tier unlocks unwatermarked cinematic scene b-roll.',
    ],
    commercial: (i, s) => {
      const notes = [
        'Scripting: ChatGPT/Claude outputs are yours to monetize on every tier (OpenAI ToS §3; Anthropic Consumer Terms §4).',
      ];
      const voice = s.find((x) => x.key === 'voice');
      const video = s.find((x) => x.key === 'video');
      if (voice?.warning) notes.push(`Voice: ${voice.warning} Upgrade to ElevenLabs Starter ($5/mo) before enabling ads.`);
      else notes.push('Voice: ElevenLabs paid tier includes the full commercial license — no attribution required.');
      if (video?.warning) notes.push(`Video: ${video.warning}`);
      else notes.push('Video: Video tool paid tier exports are unwatermarked and cleared for commercial publishing.');
      notes.push('Thumbnails: Commercial use cleared for monetized YouTube publishing.');
      return notes;
    },
  },
  shorts: {
    label: 'YouTube Shorts / TikTok',
    tagline: 'Fast vertical short-form produced in batches.',
    workflowHref: '/workflows/youtube-shorts',
    steps: [
      { key: 'script', label: 'Step 1 — Hook Script', toolId: (i) => pickScriptTool(i.goal, i.requirement, i.experience), role: (t) => `${t} — punchy hooks & 30–60s scripts` },
      { key: 'voice', label: 'Step 2 — Voiceover', toolId: () => 'elevenlabs', role: (t, p) => `${t} (${p}) — energetic short-form narration` },
      { key: 'video', label: 'Step 3 — Video & Captions', toolId: () => 'pictory', role: (t, p) => `${t} (${p}) — auto stock B-roll & animated captions` },
      { key: 'cover', label: 'Step 4 — Cover Frame', toolId: () => 'canva-ai', role: (t) => `${t} — scroll-stopping vertical cover frames` },
    ],
    reasons: (i, s) => [
      'Pictory auto-matches stock footage and burns animated subtitles in under 2 minutes.',
      s[0].toolId === 'copy-ai' ? 'Copy.ai generates rapid-fire hook variations.' : 'ChatGPT/Claude writes structured viral scripts.',
      'ElevenLabs keeps a consistent, high-energy narrator voice across all Shorts.',
      'Canva cover frames are sized 9:16 for vertical feeds out of the box.',
    ],
    commercial: (i, s) => {
      const voice = s.find((x) => x.key === 'voice');
      const video = s.find((x) => x.key === 'video');
      const notes = ['Short-form monetization follows commercial license guidelines across YouTube Shorts & TikTok.'];
      notes.push(voice?.warning ? `Voice: ${voice.warning}` : 'Voice: ElevenLabs paid tier is fully commercial, no attribution needed.');
      notes.push(video?.warning ? `Visuals: ${video.warning}` : 'Visuals: Pictory paid tier includes licensed Getty/Storyblocks stock assets.');
      notes.push('Covers: Canva commercial use allowed on Free and Pro.');
      return notes;
    },
  },
  longform: {
    label: 'Long-form Video Essay',
    tagline: 'Deep-dive documentary storytelling, 10–30 minutes.',
    workflowHref: '/workflows/longform-essay',
    steps: [
      { key: 'research', label: 'Step 1 — Deep Research', toolId: () => 'perplexity', role: (t, p) => `${t} (${p}) — citation-backed web research` },
      { key: 'script', label: 'Step 2 — Narrative Script', toolId: () => 'claude', role: (t, p) => `${t} (${p}) — 200k context documentary prose` },
      { key: 'voice', label: 'Step 3 — Narration', toolId: () => 'elevenlabs', role: (t, p) => `${t} (${p}) — consistent documentary voiceover` },
      { key: 'broll', label: 'Step 4 — B-Roll & Assembly', toolId: (i) => pickVisualTool(i.goal, i.requirement, i.budget, i.experience), role: (t, p) => `${t} (${p}) — cinematic scene b-roll` },
      { key: 'thumb', label: 'Step 5 — Thumbnail Visual', toolId: (i) => pickThumbnailTool(i.requirement, i.budget, i.experience), role: (t) => `${t} — photorealistic concept thumbnail` },
    ],
    reasons: (i, s) => [
      'Perplexity delivers verified source footnotes so video essays remain factually grounded.',
      'Claude 3.5 Sonnet provides literary documentary tone with zero robotic clichés.',
      'ElevenLabs delivers consistent host narration across multi-chapter deep dives.',
      'Runway Gen-3 Alpha fills visual gaps with atmospheric cinematic scenes.',
    ],
    commercial: (i, s) => {
      const voice = s.find((x) => x.key === 'voice');
      const video = s.find((x) => x.key === 'broll');
      const notes = ['Long-form monetization depends on verified primary sources and clear media licensing.'];
      notes.push(voice?.warning ? `Narration: ${voice.warning}` : 'Narration: ElevenLabs paid plan grants the commercial license for full episodes.');
      notes.push(video?.warning ? `B-Roll: ${video.warning}` : 'B-Roll: Paid plan exports cleanly for monetized YouTube uploads.');
      notes.push('Research: Perplexity citations guarantee copyright-safe factual synthesis.');
      return notes;
    },
  },
  podcast: {
    label: 'Podcast & Audio Narration',
    tagline: 'Audio-first production — no camera required.',
    workflowHref: '/workflows/podcast-narration',
    steps: [
      { key: 'outline', label: 'Step 1 — Topic & Outline', toolId: () => 'perplexity', role: (t) => `${t} — verified research & talking points` },
      { key: 'script', label: 'Step 2 — Dialogue Script', toolId: () => 'claude', role: (t) => `${t} — multi-speaker conversational script` },
      { key: 'voice', label: 'Step 3 — Voice Generation', toolId: () => 'elevenlabs', role: (t, p) => `${t} (${p}) — broadcast-quality voice acting` },
      { key: 'audio', label: 'Step 4 — Audio Mastering', toolId: () => 'descript', role: (t, p) => `${t} (${p}) — Studio Sound noise cleanup` },
    ],
    reasons: (i, s) => [
      'Audio-only stacks avoid heavy video rendering costs, keeping monthly production overhead low.',
      'Descript Studio Sound turns microphone audio into broadcast studio quality with 1 click.',
      'ElevenLabs provides human-like breathing and pacing essential for long listening sessions.',
      'Perplexity supplies cited discussion questions and up-to-date facts.',
    ],
    commercial: (i, s) => {
      const voice = s.find((x) => x.key === 'voice');
      const notes = ['Podcast ad monetization requires commercial clearance across Spotify and Apple Podcasts.'];
      notes.push(voice?.warning ? `Voice: ${voice.warning}` : 'Voice: ElevenLabs commercial license covers podcast ad sponsorships.');
      notes.push('Mastering: Descript paid plan removes all export watermarks.');
      return notes;
    },
  },
  repurposing: {
    label: 'Content Repurposing',
    tagline: 'Turn 1 recording into 20+ social assets.',
    workflowHref: '/workflows/content-repurposing',
    steps: [
      { key: 'transcribe', label: 'Step 1 — Clip Extraction', toolId: () => 'descript', role: (t, p) => `${t} (${p}) — text-based video clipping & captions` },
      { key: 'written', label: 'Step 2 — Social Adaptation', toolId: () => 'chatgpt', role: (t, p) => `${t} (${p}) — newsletter summaries, scripts & social threads` },
      { key: 'visuals', label: 'Step 3 — Social Covers', toolId: () => 'canva-ai', role: (t) => `${t} — multi-platform thumbnail cards` },
    ],
    reasons: (i, s) => [
      'Descript transcribes full recordings and highlights the best viral moments in text.',
      'ChatGPT converts transcripts into newsletters, LinkedIn posts, and Twitter threads in seconds.',
      'Canva sizes cover assets for YouTube, Instagram Reels, and TikTok simultaneously.',
      'Repurposing maximizes the ROI on existing long-form content libraries.',
    ],
    commercial: (i, s) => [
      'Descript exports are unwatermarked on Hobbyist tier ($12/mo) and cleared for client delivery.',
      'ChatGPT written outputs belong to the user with zero platform attribution required.',
      'Canva social templates carry full commercial publishing clearance.',
    ],
  },
  'live-streaming': {
    label: 'Live Streaming',
    tagline: 'Real-time interactive broadcasting with automated clip highlights & custom audio.',
    workflowHref: '/workflows/content-repurposing',
    steps: [
      {
        key: 'broadcast',
        label: 'Step 1 — Broadcast Engine & Capture',
        toolId: (i) => (i.requirement === 'easiest' || i.experience === 'no-experience' || i.experience === 'beginner' ? 'streamlabs' : 'obs-studio'),
        role: (t, p) => `${t} (${p}) — real-time scene capture, audio mixing & RTMP broadcasting`
      },
      { key: 'graphics', label: 'Step 2 — Overlays & Alerts', toolId: () => 'canva-ai', role: (t, p) => `${t} (${p}) — 1080p stream overlays, BRB screens & alerts` },
      { key: 'music', label: 'Step 3 — Copyright-Safe Soundtrack', toolId: () => 'suno', role: (t, p) => `${t} (${p}) — DMCA-safe original instrumental background tracks` },
      {
        key: 'highlights',
        label: 'Step 4 — Stream VOD Repurposing',
        toolId: (i) => (i.requirement === 'fastest' ? 'capcut' : 'descript'),
        role: (t, p) => `${t} (${p}) — VOD transcript clipping & viral vertical highlight extraction`
      },
    ],
    reasons: (i, s) => [
      'OBS Studio and Streamlabs provide rock-solid RTMP broadcasting with hardware-accelerated video encoding.',
      'Suno generates 100% original background instrumental tracks to prevent automated DMCA copyright muting during live streams.',
      'Descript and CapCut ingest stream recordings to rapidly extract viral vertical clips with animated auto-captions.',
      'Canva AI builds professional broadcast overlays, alert cards, and stream starting screens with zero graphic design barrier.',
    ],
    commercial: (i, s) => [
      'Broadcasting: OBS Studio (GPL v2) and Streamlabs Free/Prime grant full commercial monetization on Twitch and YouTube.',
      'Music: Suno Pro/Premier tiers grant complete commercial rights for monetized streams.',
      'Highlights: Descript and CapCut outputs carry commercial distribution clearance.',
      'Overlays: Canva designs carry full commercial publishing clearance for stream branding and sponsorships.',
    ],
  },
  'education-elearning': {
    label: 'Education / E-learning',
    tagline: 'Structured curriculum modules, instructional avatars, and course materials.',
    workflowHref: '/workflows/faceless-youtube',
    steps: [
      { key: 'curriculum', label: 'Step 1 — Curriculum & Script', toolId: () => 'claude', role: (t) => `${t} — pedagogical lesson planning, module outlines & comprehension quizzes` },
      { key: 'avatar', label: 'Step 2 — AI Instructor / Presenter', toolId: () => 'synthesia', role: (t, p) => `${t} (${p}) — lifelike AI instructor avatar delivering video modules` },
      { key: 'slides', label: 'Step 3 — Presentation Decks', toolId: () => 'canva-ai', role: (t, p) => `${t} (${p}) — clean visual slides, diagrams & student handouts` },
      { key: 'captions', label: 'Step 4 — Captions & Editing', toolId: () => 'descript', role: (t, p) => `${t} (${p}) — text-based video polish & multi-language caption synchronization` },
    ],
    reasons: (i, s) => [
      'Synthesia provides professional AI avatars so instructors can publish high-definition course modules without expensive studio camera gear.',
      'Claude Sonnet excels at structured pedagogical lesson plans, learning objectives, and student quiz questions.',
      'Canva AI generates branded educational slides, diagram infographics, and downloadable course workbooks.',
      'Descript synchronizes word-by-word captions, crucial for student comprehension and accessibility compliance.',
    ],
    commercial: (i, s) => [
      'Avatars: Synthesia paid tiers include commercial distribution rights to sell courses on Udemy, Teachable, or Coursera.',
      'Curriculum: Claude lesson materials are 100% owned by the instructor with full commercial copyright.',
      'Captions: Descript outputs are unwatermarked and cleared for commercial educational platforms.',
    ],
  },
  'music-production': {
    label: 'Music Production',
    tagline: 'AI songwriting, soundtrack generation, and vocal drop production.',
    workflowHref: '/workflows/podcast-narration',
    steps: [
      { key: 'lyrics', label: 'Step 1 — Lyrics & Arrangement', toolId: () => 'chatgpt', role: (t) => `${t} — song concepts, lyrical rhyme schemes & stylistic direction` },
      { key: 'song', label: 'Step 2 — Full Track Generation', toolId: () => 'suno', role: (t, p) => `${t} (${p}) — multi-genre original music generation with stem separation` },
      { key: 'vocal', label: 'Step 3 — Vocal Drops & Spoken Intro', toolId: () => 'elevenlabs', role: (t, p) => `${t} (${p}) — radio-ready vocal tags, narrator drops & spoken intros` },
      { key: 'master', label: 'Step 4 — Multi-Track Mastering & DAW', toolId: (i) => (i.budget === '0' ? 'audacity' : (i.experience === 'expert' || i.experience === 'agency' ? 'reaper' : 'descript')), role: (t, p) => `${t} (${p}) — professional multi-track mixing, stem processing & audio mastering` },
    ],
    reasons: (i, s) => [
      'Suno AI creates original, high-fidelity songs, background soundtracks, and instrumentals in under 30 seconds.',
      'ChatGPT assists with creative song lyric writing, theme conceptualization, and structured verse-chorus arrangements.',
      'ElevenLabs generates clear vocal tags, podcast intro hooks, and voice drops to brand musical compositions.',
      'Descript Studio Sound cleans up audio stems and balances loudness for streaming distribution.',
    ],
    commercial: (i, s) => [
      'Music: Suno Pro ($8/mo) or Premier ($24/mo) unlocks complete commercial ownership of all generated musical compositions.',
      'Vocal Tags: ElevenLabs Starter tier ($5/mo) grants full commercial rights for musical releases and sync licensing.',
      'Mastering: Descript exports are cleared for commercial streaming uploads on Spotify, Apple Music, and YouTube.',
    ],
  },
};

export function resolveStack(rawInput: StackInput | Partial<StackInput> | Partial<Record<string, unknown>>): StackRecommendation {
  const input = sanitizeInput(rawInput as Partial<Record<'goal' | 'budget' | 'experience' | 'requirement', string>>);
  const spec = GOAL_SPECS[input.goal];

  const resolvedSteps: ResolvedStep[] = spec.steps.map((step) => {
    const toolId = step.toolId(input);
    const tool = getToolById(toolId);
    if (!tool) {
      return {
        key: step.key,
        label: step.label,
        role: step.key,
        toolId,
        toolName: toolId,
        slug: toolId,
        planName: 'Free',
        monthlyPrice: 0,
      };
    }
    const { planName, price, warning } = pickPlan(tool, input.budget, input.experience, input.requirement);
    const role = step.role(tool.name, planName, input);
    return {
      key: step.key,
      label: step.label,
      role,
      toolId: tool.id,
      toolName: tool.name,
      slug: tool.slug,
      planName,
      monthlyPrice: price,
      warning,
    };
  });

  const toolCostMap = new Map<string, number>();
  for (const s of resolvedSteps) {
    const existing = toolCostMap.get(s.toolId) ?? 0;
    if (s.monthlyPrice > existing) {
      toolCostMap.set(s.toolId, s.monthlyPrice);
    }
  }

  let monthlyTotal = 0;
  toolCostMap.forEach((cost) => {
    monthlyTotal += cost;
  });

  const perResultStarter = Number((monthlyTotal / OUTPUTS_STARTER).toFixed(2));
  const perResultVolume = Number((monthlyTotal / OUTPUTS_VOLUME).toFixed(2));

  return {
    goal: input.goal,
    goalLabel: spec.label,
    tagline: spec.tagline,
    steps: resolvedSteps,
    monthlyTotal,
    perResultStarter,
    perResultVolume,
    outputsStarter: OUTPUTS_STARTER,
    outputsVolume: OUTPUTS_VOLUME,
    reasons: (() => {
      const base = spec.reasons(input, resolvedSteps);
      if (input.requirement === 'easiest' || input.experience === 'no-experience') {
        base.unshift('Selected tools prioritize the simplest visual interfaces and minimum learning curve.');
      } else if (input.requirement === 'scalability' || input.experience === 'agency') {
        base.unshift('Configured for high production throughput, bulk credit limits, and scalable team workflows.');
      } else if (input.requirement === 'support') {
        base.unshift('Prioritizes vendors with responsive onboarding, active support channels, and reliable SLAs.');
      }
      return base;
    })(),
    commercialNotes: spec.commercial(input, resolvedSteps),
    workflowHref: spec.workflowHref,
  };
}

export function money(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export const computeStack = resolveStack;

