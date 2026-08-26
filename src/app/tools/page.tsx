import React from 'react';
import { getAllTools } from '../../lib/data';
import { ToolsCatalogClient } from './ToolsCatalogClient';

export const metadata = {
  title: 'Verified AI Tools Catalog — CreativAI',
  description: 'Evidence-backed evaluations of 24 AI tools for content creators, YouTubers, and video producers. Audited pricing, PACE benchmarks, and license terms.',
};

export default function ToolsPage() {
  const tools = getAllTools();
  return <ToolsCatalogClient initialTools={tools} />;
}
