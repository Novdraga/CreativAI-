/**
 * First-party, lightweight, privacy-friendly metrics utility.
 * No third-party scripts, no tracking cookies, no personal identifiable information.
 */

export interface ClickTrackPayload {
  toolId: string;
  affiliateUrl: string;
  referrer?: string;
}

export function trackAffiliateClick(payload: ClickTrackPayload): void {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify({
    toolId: payload.toolId,
    affiliateUrl: payload.affiliateUrl,
    referrer: payload.referrer || window.location.pathname,
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: 'application/json' });
      navigator.sendBeacon('/api/track/click', blob);
      return;
    }
  } catch (e) {
    // Fallback below
  }

  // Fallback to fetch with keepalive
  try {
    fetch('/api/track/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
      keepalive: true,
    }).catch(() => {
      // Non-blocking catch
    });
  } catch (e) {
    // Fail silently to never block user navigation
  }
}

export function trackDecisionSession(goal: string, toolsSelected: string[]): void {
  if (typeof window === 'undefined') return;

  const data = JSON.stringify({
    toolId: `decision-session:${goal}`,
    affiliateUrl: `stack-result:${toolsSelected.join(',')}`,
    referrer: window.location.pathname + window.location.search,
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: 'application/json' });
      navigator.sendBeacon('/api/track/click', blob);
      return;
    }
  } catch (e) {
    // Fallback
  }

  try {
    fetch('/api/track/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
      keepalive: true,
    }).catch(() => {});
  } catch (e) {}
}
