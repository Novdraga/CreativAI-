'use client';

import React, { useState } from 'react';
import { MessageSquarePlus, X, Send, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const TOOL_OPTIONS = [
  { value: '', label: 'General Feedback / Question' },
  { value: 'chatgpt', label: 'ChatGPT' },
  { value: 'claude', label: 'Claude' },
  { value: 'elevenlabs', label: 'ElevenLabs' },
  { value: 'suno', label: 'Suno AI' },
  { value: 'runway', label: 'Runway Gen-3' },
  { value: 'canva-ai', label: 'Canva AI' },
  { value: 'adobe-firefly', label: 'Adobe Firefly' },
  { value: 'jasper', label: 'Jasper AI' },
  { value: 'murf', label: 'Murf.ai' },
  { value: 'play-ht', label: 'Play.ht' },
  { value: 'synthesia', label: 'Synthesia' },
  { value: 'pictory', label: 'Pictory' },
  { value: 'descript', label: 'Descript' },
  { value: 'midjourney', label: 'Midjourney' },
  { value: 'perplexity', label: 'Perplexity AI' },
  { value: 'capcut', label: 'CapCut' },
  { value: 'davinci-resolve', label: 'DaVinci Resolve' },
  { value: 'final-cut-pro', label: 'Final Cut Pro' },
  { value: 'premiere-pro', label: 'Premiere Pro' },
  { value: 'after-effects', label: 'Adobe After Effects' },
  { value: 'obs-studio', label: 'OBS Studio' },
  { value: 'streamlabs', label: 'Streamlabs' },
  { value: 'audacity', label: 'Audacity' },
  { value: 'reaper', label: 'Reaper' },
  { value: 'stack-builder', label: 'Stack Builder Decision Engine' },
  { value: 'workflows', label: 'Production Workflows' },
];

export function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [tool, setTool] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    trackEvent('user_feedback', {
      toolMentioned: tool || 'general',
      message: message.trim(),
    });

    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      setMessage('');
      setTool('');
      setSubmitted(false);
      setIsOpen(false);
    }, 2200);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg border border-slate-700 dark:border-indigo-500 transition hover:scale-105 focus-visible:outline-none"
          aria-label="Give Feedback"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>Feedback</span>
        </button>
      </div>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Creator Feedback & Questions</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Feedback Received</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                  Thank you! Your feedback directly informs our benchmark test prompts and evaluation updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Related Tool or Workflow (Optional)
                  </label>
                  <select
                    value={tool}
                    onChange={(e) => setTool(e.target.value)}
                    className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    {TOOL_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Your Question, Observation, or Tool Suggestion *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="E.g., Have you tested the new Runway Gen-3 camera brush? Or: Can you add pricing for team accounts?"
                    className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500">
                    Anonymous · No cookies tracked
                  </span>
                  <button
                    type="submit"
                    disabled={loading || !message.trim()}
                    className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </> 
  );
}