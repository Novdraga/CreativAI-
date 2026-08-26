/**
 * First-party, privacy-preserving client analytics utility.
 * Zero external scripts, zero third-party cookies, no IP tracking.
 */

export type FunnelStep = 'home_visit' | 'stack_click' | 'result_view' | 'affiliate_click';

export interface EventPayload {
  eventName: string;
  properties?: Record<string, any>;
}

export function trackEvent(eventName: string, properties: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;

  const payload = {
    eventName,
    properties: {
      path: window.location.pathname,
      search: window.location.search,
      referrer: document.referrer || 'direct',
      ...properties,
    },
  };

  const data = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: 'application/json' });
      navigator.sendBeacon('/api/analytics', blob);
      return;
    }
  } catch (e) {
    // Fallback
  }

  try {
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
      keepalive: true,
    }).catch(() => {});
  } catch (e) {}
}

export function trackPageView(path?: string): void {
  trackEvent('page_view', { path: path || (typeof window !== 'undefined' ? window.location.pathname : '') });
}

export function trackFunnelStep(step: FunnelStep, properties: Record<string, any> = {}): void {
  trackEvent(`funnel_${step}`, {
    funnelStep: step,
    ...properties,
  });
}
