import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventName, properties } = body;

    if (!eventName) {
      return NextResponse.json({ error: 'eventName is required' }, { status: 400 });
    }

    const analyticsFilePath = path.join(process.cwd(), 'data', 'analytics.json');
    let events: Array<{
      id: string;
      timestamp: string;
      eventName: string;
      properties: Record<string, any>;
      userAgent: string;
    }> = [];

    if (fs.existsSync(analyticsFilePath)) {
      try {
        const fileContent = fs.readFileSync(analyticsFilePath, 'utf8');
        events = JSON.parse(fileContent || '[]');
      } catch (e) {
        events = [];
      }
    }

    const userAgent = request.headers.get('user-agent') || 'unknown';

    const newEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      eventName,
      properties: properties || {},
      userAgent: userAgent.substring(0, 150),
    };

    events.push(newEvent);

    // Keep file bounded to last 10,000 events
    if (events.length > 10000) {
      events = events.slice(-10000);
    }

    fs.writeFileSync(analyticsFilePath, JSON.stringify(events, null, 2), 'utf8');

    return NextResponse.json({ ok: true, eventId: newEvent.id });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to record event' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const analyticsFilePath = path.join(process.cwd(), 'data', 'analytics.json');
    let events = [];
    if (fs.existsSync(analyticsFilePath)) {
      events = JSON.parse(fs.readFileSync(analyticsFilePath, 'utf8') || '[]');
    }
    return NextResponse.json({ ok: true, totalEvents: events.length, events: events.slice(-50) });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to read analytics' }, { status: 500 });
  }
}
