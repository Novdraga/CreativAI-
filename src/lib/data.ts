import { Tool, Workflow, Comparison, Benchmark, Alternative } from '../types';
import toolsData from '../../data/tools.json';
import workflowsData from '../../data/workflows.json';
import comparisonsData from '../../data/comparisons.json';
import alternativesData from '../../data/alternatives.json';
import benchmarksData from '../../data/benchmarks.json';

const tools: Tool[] = toolsData as unknown as Tool[];
const workflows: Workflow[] = workflowsData as unknown as Workflow[];
const comparisons: Comparison[] = comparisonsData as unknown as Comparison[];
const benchmarks: Benchmark[] = benchmarksData as unknown as Benchmark[];
const alternatives: Alternative[] = alternativesData as unknown as Alternative[];

export function getAllAlternatives(): Alternative[] {
  return alternatives;
}

export function getAlternativeBySlug(slug: string): Alternative | undefined {
  return alternatives.find((a) => a.slug === slug);
}

export function getAlternativeForTool(toolId: string): Alternative | undefined {
  return alternatives.find((a) => a.incumbent_tool_id === toolId);
}

export function getAllBenchmarks(): Benchmark[] {
  return benchmarks;
}

export function getBenchmarkById(id: string): Benchmark | undefined {
  return benchmarks.find((b) => b.id === id);
}

export function getBenchmarksForTool(toolId: string): Benchmark[] {
  return benchmarks.filter((b) => b.tool_id === toolId);
}

export function getAllTools(): Tool[] {
  return tools.filter((t) => t.verification_status === 'verified');
}

export function getAllPreparedTools(): Tool[] {
  return tools;
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolById(id: string): Tool | undefined {
  return tools.find((t) => t.id === id);
}

export function getWorkflows(): Workflow[] {
  return workflows;
}

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((w) => w.slug === slug);
}

export function getComparisons(): Comparison[] {
  return comparisons;
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonsForTool(toolId: string): Comparison[] {
  return comparisons.filter((c) => c.tool_a_id === toolId || c.tool_b_id === toolId);
}

export function getWorkflowsForTool(toolId: string): Workflow[] {
  return workflows.filter((w) => w.recommended_tools.includes(toolId) || w.alternative_tools.includes(toolId));
}

export function getAlternativesForTool(tool: Tool): Tool[] {
  return tool.alternatives
    .map((altId) => getToolById(altId))
    .filter((t): t is Tool => t !== undefined);
}
