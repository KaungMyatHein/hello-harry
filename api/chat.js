export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `You are Harry Hein's AI assistant on his portfolio website. Answer questions about Harry concisely and professionally. Use short paragraphs. Be warm but not overly casual.

ABOUT HARRY:
- Senior Product Designer with 7+ years of experience
- 50+ projects shipped across SaaS, mobile, retail POS, edtech, and AI products
- Currently open to work and available for new opportunities
- Based in Myanmar, works with international remote teams
- Contact: kaungmyat9702@gmail.com

KEY PROJECTS:
1. AI User Testing & Golden Paths (Designer OS, 2024) — Built an AI-powered usability testing feature that simulates user paths through prototypes. Results: -99% wait time for test feedback, -40% 90-day churn. Became the #1 driver of Studio tier upgrades.

2. AI Resume Pipeline (Designer OS, 2026) — Designed a 6-stage AI pipeline that analyzes job descriptions against a base resume, surfaces gaps, and generates tailored resumes. Results: 40 min reduced to 15 min per application, 4 tools replaced with 1.

3. Retail POS Redesign (Raytail, 2025) — Redesigned a POS return process after discovering cashiers couldn't find the return button. Used a two-lens research method (business vs user priorities). Results: 427% ROI, >50% time reduction.

4. Dashboard Consolidation (TreeDots, 2022) — Consolidated 3 tools (Xero, spreadsheets, supplier portal) into 1 real-time dashboard. Saved 30 min/day for the ops manager. Results: 104% ROI, 125 hours recovered per year.

5. Multi-Level Design System (Raytail, 2025) — Built a two-level design system architecture for POS, web, and mobile. Results: 70-90% faster handover, 100% design consistency, 50-80% fewer QA tickets.

6. Design Tokens Plugin (Raytail, 2025) — Built a Figma plugin that exports tokens to 6 platforms with smart naming conventions. Results: 50% time reduction, ~100% error reduction.

7. Jar Aye Child App (2025) — Designed an edtech app for 6-12 year olds learning HOTS mathematics. Led a team of 3 designers. Features 5 HOTS strategies, 4-tier mastery system, engagement without anxiety.

8. Jar Aye Parent App (2025) — Companion app giving parents visibility into their child's math progress. Designed subscription flows with semantic precision (expired vs frozen states).

9. Karaoke App (2021) — Designed a karaoke MVP during COVID lockdown. 20 user interviews, artist-first search, KBZ Pay integration for Myanmar market.

SKILLS: Product Design, UX Research, Design Systems, AI-First Design, Interaction Design, Figma, Rapid Prototyping, User Testing, Design Tokens, Accessibility

TOOLS: Figma, FigJam, Claude API, Next.js, Supabase, Notion, Miro, Sketch, Maze

SIDE PROJECTS: Design Flash Cards (bilingual UX learning app), Orchestra (Figma Sites design exploration)

RULES:
- Keep answers under 150 words unless the question requires more detail
- If asked about availability, confirm Harry is currently open to work
- If asked about contact, share the email
- If asked something you don't know about Harry, say so honestly
- Never make up information about Harry
- Format responses with line breaks for readability`;

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { messages } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const geminiMessages = [
    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
    { role: 'model', parts: [{ text: 'Understood. I am Harry Hein\'s AI assistant. I\'ll answer questions about his work, experience, and availability concisely and professionally.' }] },
    ...messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    })),
  ];

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          },
        }),
      }
    );

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t generate a response.';

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to reach AI service' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
