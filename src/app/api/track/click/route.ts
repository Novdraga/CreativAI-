import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { toolId, affiliateUrl, referrer } = body;

    if (!toolId) {
      return NextResponse.json({ error: 'toolId is required' }, { status: 400 });
    }

    const clicksFilePath = path.join(process.cwd(), 'data', 'clicks.json');
    let clicks: Array<{
      id: string;
      timestamp: string;
      toolId: string;
      affiliateUrl?: string;
      referrer?: string;
      userAgent?: string;
    }> = [];

    if (fs.existsSync(clicksFilePath)) {
      try {
        const fileContent = fs.readFileSync(clicksFilePath, 'utf8');
        clicks = JSON.parse(fileContent || '[]');
      } catch (e) {
        clicks = [];
      }
    }

    const userAgent = request.headers.get('user-agent') || 'unknown';

    const newClick = {
      id: `clk-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      toolId,
      affiliateUrl: affiliateUrl || '',
      referrer: referrer || 'direct',
      userAgent: userAgent.substring(0, 150),
    };

    clicks.push(newClick);

    // Keep file size bounded to last 5,000 events in local MVP
    if (clicks.length > 5000) {
      clicks = clicks.slice(-5000);
    }

    fs.writeFileSync(clicksFilePath, JSON.stringify(clicks, null, 2), 'utf8');

    return NextResponse.json({ ok: true, redirect: affiliateUrl || '' });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to track click' }, { status: 500 });
  }
}
