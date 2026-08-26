import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://creativai.vercel.app';
  const now = new Date().toISOString();

  const dataDir = path.join(process.cwd(), 'data');
  const tools = JSON.parse(fs.readFileSync(path.join(dataDir, 'tools.json'), 'utf8') || '[]');
  const workflows = JSON.parse(fs.readFileSync(path.join(dataDir, 'workflows.json'), 'utf8') || '[]');
  const comparisons = JSON.parse(fs.readFileSync(path.join(dataDir, 'comparisons.json'), 'utf8') || '[]');
  const alternatives = JSON.parse(fs.readFileSync(path.join(dataDir, 'alternatives.json'), 'utf8') || '[]');

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/stack`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/workflows`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/alternatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/benchmarks`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  // High-Intent Decision Guides
  const decisionRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/best-ai-voice-for-faceless-youtube`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/best-ai-stack-under-50`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/best-ai-tools-for-beginners`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/best-elevenlabs-alternatives`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/best-ai-video-workflow-for-shorts`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Tool detail routes (active verified tools)
  const verifiedTools = tools.filter((t: { verification_status?: string }) => t.verification_status === 'verified');
  const toolRoutes: MetadataRoute.Sitemap = verifiedTools.map((t: { slug: string; last_verified?: string }) => ({
    url: `${baseUrl}/tools/${t.slug}`,
    lastModified: t.last_verified ? new Date(t.last_verified).toISOString() : now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Workflow detail routes
  const workflowRoutes: MetadataRoute.Sitemap = workflows.map((w: { slug: string; last_verified?: string }) => ({
    url: `${baseUrl}/workflows/${w.slug}`,
    lastModified: w.last_verified ? new Date(w.last_verified).toISOString() : now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Comparison detail routes
  const comparisonRoutes: MetadataRoute.Sitemap = comparisons.map((c: { slug: string; last_verified?: string }) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: c.last_verified ? new Date(c.last_verified).toISOString() : now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Alternative detail routes
  const alternativeRoutes: MetadataRoute.Sitemap = alternatives.map((a: { slug: string; last_verified?: string }) => ({
    url: `${baseUrl}/alternatives/${a.slug}`,
    lastModified: a.last_verified ? new Date(a.last_verified).toISOString() : now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...decisionRoutes,
    ...toolRoutes,
    ...workflowRoutes,
    ...comparisonRoutes,
    ...alternativeRoutes,
  ];
}
