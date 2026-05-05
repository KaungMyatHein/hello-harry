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

  const { messages, context } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const CASE_STUDY_CONTEXT = {
    retail: `The user is viewing the "From Feedback to 427% ROI" case study — Raytail POS return process redesign (2025). Role: UX Designer. Key details: Cashiers couldn't find the return button. Used a two-lens research method (business vs user heat maps). Found returns were undervalued by business but #1 cashier frustration. Redesigned with grouped activities, frequency sorting, icon+text labels, product-level actions. Results: 427% ROI, >50% time reduction (60s to <30s), faster onboarding. 4 lessons: almost redesigned wrong thing, low frequency ≠ low impact, design debt compounds, data wins buy-in. Tools: Figma, FigJam, Maze.`,
    dashboard: `The user is viewing the "From Daily Ritual to 104% ROI" case study — TreeDots dashboard consolidation (2022). Role: Product Designer. Key details: Ops manager Mei spent 30 min every morning copy-pasting across Xero, spreadsheets, and supplier portal. Consolidated 3 tools into 1 real-time dashboard. Used Information Scent Theory for color-coded rows. Results: 104% ROI, 0.5h saved daily (125 hrs/year), real-time data freshness. User quote: "What do I do with my morning now?" Tools: Figma, FigJam, Notion, Xero.`,
    'design-system': `The user is viewing the "Three Platforms. One Source of Truth" case study — Raytail multi-level design system (2025). Role: Lead UX Designer. Key details: One Figma file for POS, web, mobile caused 47 duplicate tokens, 31 near-duplicate components, 3-day onboarding. Built two-level architecture: Level 1 (global foundation) + Level 2 (platform libraries). Three-tier token architecture: Reference → Semantic → Component. POS-specific: 48px touch targets, dark surface, image-forward grid. Results: 70-90% faster handover, 100% consistency, 50-80% fewer QA tickets. Brand color change: 2 days → instant.`,
    tokens: `The user is viewing the "Unified Design Tokens" case study — Raytail Figma plugin (2025). Role: Designer + Developer. Key details: Token names didn't match between Figma and code (camelCase vs PascalCase vs snake_case). Built a Figma plugin: Discovery → Config → Preview → Export to 6 platforms (CSS, JS/TS, Flutter, Kotlin, Swift, JSON). Syncs to Notion. Results: 50% time reduction, ~100% error reduction, 6 platforms, 4.3/5 dev satisfaction. Preview panel was most praised feature.`,
    'golden-paths': `The user is viewing the "11pm. One Demo. Zero Testers" case study — Designer OS Golden Paths (2026). Role: Product Designer, Solo. Key details: 6/8 designers skip testing under deadline, 7/8 get vague feedback. Built AI+Puppeteer system that simulates user paths through prototypes. Screenshot-based detection works for any prototype URL. 9/11 AI-flagged blockers matched real user confusion. Results: 60s time to first feedback, 3min test setup, 24/7 availability, $0 per test. Marcus resolved his 11pm demo in 4 minutes.`,
    'resume-pipeline': `The user is viewing the "47 Applications. 2 Interviews" case study — Designer OS AI Resume Pipeline (2026). Role: Product Designer, Solo. Key details: Designers spend 40 min per application with Google Doc + ChatGPT. Built 6-stage pipeline: Base Resume → Paste JD → AI Analyzes → Gap Analysis → Suggestions → Cover Letter. Key decisions: base resume first, gaps before praise, no full AI rewrite. Results: 40→15 min per application, 4→1 tools replaced, <5min cover letter. Sarah's story: 5 tailored apps, 2 callbacks.`,
    'jar-aye-child': `The user is viewing the "Making Hard Math Feel Tractable" case study — Jar Aye Child App (2025). Role: UX Lead, team of 3. Key details: App for 6-12 year olds doing Singapore Math HOTS. Three user types: child (anxiety about being wrong), parent (is money working?), teacher (identify struggling students). Observational research with 5 children on competitor products. 5 HOTS strategies as navigable interface. 4-tier mastery system. Engagement: calendar not streak, grade-filtered leaderboard, completion points. Subscription states: expired vs frozen (semantic precision).`,
    'jar-aye-parent': `The user is viewing the "Closing the Visibility Gap" case study — Jar Aye Parent App (2025). Role: UX Lead, team of 3. Key details: Parent pays but can't evaluate HOTS math herself. 5 constraints shaped every screen. Report screen is most strategic (comprehension = renewal). Social pride via Instagram/Telegram sharing. Freeze vs Cancel distinction. Results: <50s report comprehension, 4/5 identified weakest topic, 4.8/5 subscription flow clarity.`,
    karaoke: `The user is viewing the "Next-Gen Karaoke Application" case study — COVID lockdown MVP (2021). Role: Product Design Owner, team of 2 designers + 1 BA + developers. Key details: 20 user interviews. 65% search by artist first. 85% use KBZ Pay. Competitor analysis: Smule (social), Joox (catalogue), Star Maker (emotion). MVP: kept basic karaoke + artist search + subscription + KBZ Pay. Cut social rooms, video recording. Lessons: defaults compound, local payment = local product, constraints breed clarity.`,
    'po-ai-intent': `The user is viewing the "Speak, Don't Click." case study — Po AI Intent Palette for Myanmar live-sellers (2026). Role: Product Designer + Engineer (solo). Tools: Next.js 16, React 19, TypeScript, Tailwind, Supabase, Claude API.

DESIGN PROCESS:
1. DISCOVERY — Interviewed 5 Myanmar live-sellers (avg 4 yrs experience). Surfaced one shared question across all five: "What did I sell in the past 2 weeks?" Sellers were doing it by hand because the CRM dashboard turned that one sentence into a five-step hunt: open Orders → pick dates manually → translate English labels → scroll 600 rows → give up.
2. RESEARCH SYNTHESIS — Built a pain table with mention counts and severity. Top pains: date filtering (5/5, severe), bilingual mismatch (5/5, severe), endless scrolling (4/5, severe), context-switching across pages (3/5, moderate), exporting for Viber (3/5, moderate).
3. COMPETITIVE TEARDOWN — Audited Shopify Inbox, Intercom Fin, ChatGPT Operator, Manychat, Zoko. None handled Myanmar grammar (postpositions, subject markers). All required structured menu navigation. Decided to design a bilingual intent palette (Cmd/K) instead of redesigning the dashboard.
4. INTENT MAPPING — Started from 80 candidate phrases the sellers actually said. Clustered duplicates → 52 distinct intents. Scored each on impact × frequency × AI-fit. Result: 45 mapped → 38 prioritized → 28 scoped for MVP → 21 currently live in production.
5. CLASSIFIER ARCHITECTURE — Chose pure-function regex first (≤50ms, deterministic), AI fallback only on unknown. Wrote separate Myanmar / English / mixed regex families with postposition + subject-marker support. Tested 200 phrases in 5 minutes; threshold gate set at 90% accuracy before each phase ships.
6. INLINE RESULT CARDS — Designed ~25 cards that self-fetch their own data, cap list lengths, and end with a single primary CTA. URL contracts so palette filters always agree with destination pages. Shipped on existing /api/b/* — zero new backend endpoints.

KEY DESIGN DECISIONS:
- Palette over redesign: ride existing CRM, don't rebuild it.
- Speak the user's grammar, not the database's: Burmese postpositions matter.
- Regex before LLM: latency, cost, predictability — LLM only when regex fails.
- Inline cards over navigation: answer in place, never make the seller leave the palette.
- Honest funnel reporting: 45 → 38 → 28 → 21 (not a single vanity number).

WHAT'S TRACKED NEXT: per-intent success rate, time-to-answer vs old dashboard flow, % of palette uses ending in zero clicks afterward.`
  };

  let activePrompt = SYSTEM_PROMPT;
  if (context && CASE_STUDY_CONTEXT[context]) {
    activePrompt = SYSTEM_PROMPT + '\n\nCURRENT PAGE CONTEXT:\n' + CASE_STUDY_CONTEXT[context] + '\n\nFocus your answers on this specific project. Give detailed, specific answers about this case study. If asked something unrelated to this project, you can still answer from your general knowledge about Harry.';
  }

  const geminiMessages = [
    { role: 'user', parts: [{ text: activePrompt }] },
    { role: 'model', parts: [{ text: 'Understood. I am Harry Hein\'s AI assistant. I\'ll answer questions about his work, experience, and availability concisely and professionally.' }] },
    ...messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    })),
  ];

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: geminiMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    const data = await res.json();

    if (data.error) {
      return new Response(JSON.stringify({ error: data.error.message || 'Gemini API error', debug: data.error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t generate a response.';

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to reach AI service', detail: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
