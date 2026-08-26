import React from 'react';
import fs from 'fs';
import path from 'path';
import { Breadcrumbs } from '../../../components/Breadcrumbs';
import {
  BarChart3,
  TrendingUp,
  Users,
  MousePointerClick,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const metadata = {
  title: 'Internal Analytics & Funnel Dashboard — CreativAI Admin',
  description: 'First-party creator decision funnel analytics and feedback log.',
};

interface AnalyticsEvent {
  id: string;
  timestamp: string;
  eventName: string;
  properties: Record<string, any>;
  userAgent?: string;
}

interface ClickEvent {
  id: string;
  timestamp: string;
  toolId: string;
  affiliateUrl?: string;
  referrer?: string;
  userAgent?: string;
}

export default function AdminAnalyticsPage() {
  const analyticsPath = path.join(process.cwd(), 'data', 'analytics.json');
  const clicksPath = path.join(process.cwd(), 'data', 'clicks.json');

  let events: AnalyticsEvent[] = [];
  let clicks: ClickEvent[] = [];

  if (fs.existsSync(analyticsPath)) {
    try {
      events = JSON.parse(fs.readFileSync(analyticsPath, 'utf8') || '[]');
    } catch (e) {
      events = [];
    }
  }

  if (fs.existsSync(clicksPath)) {
    try {
      clicks = JSON.parse(fs.readFileSync(clicksPath, 'utf8') || '[]');
    } catch (e) {
      clicks = [];
    }
  }

  // Aggregate Funnel Metrics
  const homeVisits = events.filter((e) => e.eventName === 'funnel_home_visit' || e.properties?.funnelStep === 'home_visit').length;
  const stackClicks = events.filter((e) => e.eventName === 'funnel_stack_click' || e.properties?.funnelStep === 'stack_click').length;
  const resultViews = events.filter((e) => e.eventName === 'funnel_result_view' || e.properties?.funnelStep === 'result_view').length;
  const affiliateClicks = clicks.length + events.filter((e) => e.eventName === 'funnel_affiliate_click' || e.properties?.funnelStep === 'affiliate_click').length;

  const stackRate = homeVisits > 0 ? ((stackClicks / homeVisits) * 100).toFixed(1) : '0.0';
  const resultRate = stackClicks > 0 ? ((resultViews / stackClicks) * 100).toFixed(1) : '0.0';
  const outboundRate = resultViews > 0 ? ((affiliateClicks / resultViews) * 100).toFixed(1) : '0.0';

  // Top Recommended Tools
  const toolRecMap: Record<string, number> = {};
  events
    .filter((e) => e.eventName === 'funnel_result_view' && Array.isArray(e.properties?.tools))
    .forEach((e) => {
      e.properties.tools.forEach((tid: string) => {
        toolRecMap[tid] = (toolRecMap[tid] || 0) + 1;
      });
    });

  const topRecommendedTools = Object.entries(toolRecMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Top Outbound Clicks
  const clickMap: Record<string, number> = {};
  clicks.forEach((c) => {
    clickMap[c.toolId] = (clickMap[c.toolId] || 0) + 1;
  });
  const topClickedTools = Object.entries(clickMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Recent Feedback
  const feedbackList = events
    .filter((e) => e.eventName === 'user_feedback')
    .reverse()
    .slice(0, 15);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Admin Analytics (Private)' }]} />

      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/60">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Internal PM Telemetry · Directive §55</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Decision Funnel & Telemetry Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          100% First-party telemetry stored locally in <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-slate-200">/data/analytics.json</code>. Zero third-party scripts or user tracking cookies.
        </p>
      </div>

      {/* 1. Funnel KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>1. Home Visits</span>
            <Users className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {homeVisits}
          </div>
          <p className="text-[11px] text-slate-400">Entry page impressions</p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>2. Stack Starts</span>
            <Sparkles className="w-4 h-4 text-violet-500" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {stackClicks}
          </div>
          <p className="text-[11px] text-slate-400">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{stackRate}%</span> of home visitors
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>3. Result Views</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {resultViews}
          </div>
          <p className="text-[11px] text-slate-400">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{resultRate}%</span> completed engine
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>4. Outbound Clicks</span>
            <MousePointerClick className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {affiliateClicks}
          </div>
          <p className="text-[11px] text-slate-400">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{outboundRate}%</span> decision click-through
          </p>
        </div>
      </div>

      {/* 2. Top Recommended & Clicked Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Recommended */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <BarChart3 className="w-4 h-4 text-indigo-500" />
            <span>Top Recommended Tools by Decision Engine</span>
          </div>
          {topRecommendedTools.length === 0 ? (
            <p className="text-xs text-slate-500 italic">No decision sessions recorded yet.</p>
          ) : (
            <div className="space-y-2.5">
              {topRecommendedTools.map(([toolId, count], idx) => (
                <div key={toolId} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {idx + 1}. <strong className="capitalize">{toolId.replace('-', ' ')}</strong>
                  </span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    {count} recommendations
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top Outbound Clicks */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <MousePointerClick className="w-4 h-4 text-emerald-500" />
            <span>Top Outbound Partner & Tool Clicks</span>
          </div>
          {topClickedTools.length === 0 ? (
            <p className="text-xs text-slate-500 italic">No outbound clicks recorded yet.</p>
          ) : (
            <div className="space-y-2.5">
              {topClickedTools.map(([toolId, count], idx) => (
                <div key={toolId} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {idx + 1}. <strong className="capitalize">{toolId.replace('-', ' ')}</strong>
                  </span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {count} outbound clicks
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3. User Feedback & Inquiries */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-base">
            <MessageSquare className="w-4 h-4 text-indigo-500" />
            <span>Creator Inquiries & Feedback ({feedbackList.length})</span>
          </div>
          <span className="text-xs text-slate-400">Latest 15 submissions</span>
        </div>

        {feedbackList.length === 0 ? (
          <p className="text-xs text-slate-500 italic py-4">No feedback submissions received yet.</p>
        ) : (
          <div className="space-y-3">
            {feedbackList.map((fb) => (
              <div
                key={fb.id}
                className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 rounded-xl p-4 space-y-2 text-xs"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400 capitalize">
                    {fb.properties?.toolMentioned ? `Subject: ${fb.properties.toolMentioned}` : 'General Feedback'}
                  </span>
                  <span>{new Date(fb.timestamp).toLocaleString()}</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {fb.properties?.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
