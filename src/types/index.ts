export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  period: string;
  limits: string;
}

export interface CommercialUse {
  allowed: boolean;
  plan_restrictions: string[];
  attribution: string;
  ownership_notes: string;
}

export interface PaceScores {
  P: number;
  A: number;
  C: number;
  E: number;
  reasons: {
    P: string;
    A: string;
    C: string;
    E: string;
  };
  evidence_refs: string[];
  last_verified: string;
}

export interface EvidenceRecord {
  id: string;
  tested_at: string;
  tested_by: string;
  test_method: string;
  test_prompt: string | null;
  test_conditions: string;
  observations: string;
  result: string;
}

export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategories: string[];
  description: string;
  website: string;
  pricing: PricingPlan[];
  pricing_model: string;
  free_plan: boolean;
  starting_price: {
    amount: number;
    currency: string;
    period: string;
  };
  features: string[];
  strengths: string[];
  weaknesses: string[];
  best_for: string[];
  not_for: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  commercial_use: CommercialUse;
  license_notes: string[];
  supported_formats: string[];
  platforms: string[];
  pace_scores: PaceScores;
  evidence: EvidenceRecord[];
  benchmark_results: any[];
  alternatives: string[];
  comparison_links: string[];
  last_verified: string;
  source: string;
  verification_status: 'verified' | 'unverified' | 'partial';
  affiliate?: {
    url: string;
    network: string | null;
    disclaimer: string;
  } | null;
}

export interface WorkflowStep {
  order: number;
  name: string;
  job_to_be_done: string;
  inputs: string[];
  outputs: string[];
  tool_slots: {
    recommended: string[];
    alternative: string[];
  };
}

export interface Workflow {
  id: string;
  name: string;
  slug: string;
  goal: string;
  audience: string;
  budget_range: string;
  experience_level: string;
  steps: WorkflowStep[];
  recommended_tools: string[];
  alternative_tools: string[];
  estimated_cost: string;
  estimated_cost_per_result: {
    unit: string;
    starter_profile_cost: string;
    volume_profile_cost: string;
    assumptions: string;
  };
  commercial_notes: string;
  evidence: string[];
  last_verified: string;
}

export interface ComparisonDimension {
  dimension: string;
  value_a: string;
  value_b: string;
  winner: 'tool_a' | 'tool_b' | 'neutral';
  evidence_ref: string;
}

export interface Comparison {
  id: string;
  slug: string;
  title: string;
  tool_a_id: string;
  tool_b_id: string;
  who_should_choose_a: string;
  who_should_choose_b: string;
  dimensions: ComparisonDimension[];
  pace_comparison: {
    tool_a: { P: number; A: number; C: number; E: number };
    tool_b: { P: number; A: number; C: number; E: number };
  };
  verdict: {
    recommendation: string;
    summary: string;
    reasoning: string[];
    conditions: string;
  };
  evidence: string[];
  last_verified: string;
}

export interface Benchmark {
  id: string;
  tool_id: string;
  test_name: string;
  category: string;
  test_prompt: string;
  test_conditions: string;
  tested_at: string;
  tested_by: string;
  test_method: string;
  generation_time_sec: number;
  output_quality: string;
  limitations_encountered: string;
  observations: string;
  result: string;
  evidence_ref: string;
}

export interface AlternativeCandidate {
  tool_id: string;
  best_for_reasons: string[];
  tradeoffs: string[];
  pace_scores: { P: number; A: number; C: number; E: number };
}

export interface SituationMapping {
  leaving_reason: string;
  recommended_tool_ids: string[];
  justification: string;
  tradeoff_statement: string;
}

export interface Alternative {
  id: string;
  slug: string;
  incumbent_tool_id: string;
  title: string;
  description: string;
  incumbent_strengths: string[];
  leaving_reasons: string[];
  candidates: AlternativeCandidate[];
  situation_mapping: SituationMapping[];
  evidence: string[];
  last_verified: string;
}


