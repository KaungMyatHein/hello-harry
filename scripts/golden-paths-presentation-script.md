# Golden Paths -- Presentation Script

**Case Study:** AI Usability Testing & Golden Paths
**Presenter:** Harry Hein, Senior Product Designer
**Total Duration:** 6-7 minutes
**Tone:** Conversational professional, story-driven

---

## 1. Hook -- Marcus at 11pm
**Time: ~40 seconds**

*[Open on hero section. Video demo playing in background. Let it breathe for 2-3 seconds before speaking.]*

> It's 11pm. The client demo is at 9am. Marcus -- a senior product designer -- has been staring at his onboarding flow for three weeks. He knows every screen transition by heart. And that is exactly the problem. He can no longer tell whether the flow is genuinely intuitive or whether he has just memorized every path through it.

> He sends the Figma link to four colleagues. Three replies trickle in over three hours. One says "looks clean." Another says "felt busy." The third sends a thumbs-up emoji. Nobody told him which screen caused confusion. Nobody followed the intended path. Nobody gave him evidence.

*[Pause. Let the tension sit.]*

> This is the story of Golden Paths -- and why I built it.

---

## 2. Research -- What 8 Designers Told Us
**Time: ~60 seconds**

*[Scroll to Section 02. Reference the research stats as you speak.]*

> I interviewed 8 product designers about their testing habits. Thirty minutes each, semi-structured, focused on three themes: when they test, what feedback they get, and what would change their behavior.

> The pattern was remarkably consistent. Six out of eight skip testing under deadline pressure. Seven out of eight receive vague, unusable feedback -- vibes, not evidence. And all eight -- every single one -- said they would test more if it took under five minutes.

*[Gesture to the persona section if on screen.]*

> Three blockers kept surfacing. First, coordination tax -- scheduling testers takes half a day just to get ninety minutes of actual data. Second, unstructured feedback with zero diagnostic value. Third, a schedule mismatch -- the moment you most urgently need to validate never aligns with anyone else's calendar.

> That finding set the north star: time to first structured feedback must be under 60 seconds. Not faster testing. Instant testing.

---

## 3. The Core Bet -- Simulate, Don't Recruit
**Time: ~50 seconds**

*[Scroll to Section 03. Reference the comparison table.]*

> The core bet was specific: use AI-driven personas navigating a live prototype to produce step-by-step behavioral evidence. Not heuristic checklists. Not design linting. Actual simulated navigation with observable reasoning.

> We evaluated three approaches. Heuristic checklists -- rejected, because they measure against rules but produce no path evidence. Figma API automation -- rejected, because it is brittle, breaks when component names change, and locks you to one tool. The winner was AI plus Puppeteer: screenshot-based detection that works for any prototype URL.

> The non-obvious call was choosing Puppeteer over the Figma API. We traded tight integration for tool-agnostic flexibility. Figma, InVision, a hosted staging environment -- all handled identically.

---

## 4. The Flow -- Five Stages to Evidence
**Time: ~60 seconds**

*[Scroll to Section 04 timeline. Walk through each stage briskly.]*

> The flow was designed to get a designer from zero to structured feedback in under three minutes. Five stages, each collapsing what previously took hours into a single focused action.

> Stage one: paste any live URL. Thirty seconds. Stage two: define your goal in plain language, set a step limit, pick your personas -- PM, Developer, Designer -- each with distinct behavioral traits. Stage three: navigate to the goal screen and click once. The AI captures it as the target state using a dual signal -- text plus screenshot -- so detection stays robust even when dynamic content shifts pixels around.

*[Pause briefly, shift energy.]*

> Stage four: the AI runs the test. Each persona navigates independently. Steps stream live via server-sent events. Stage five: review the results. Pass or fail, step count, backtrack count, and per-decision AI observations explaining what it saw, what it considered, and what it dismissed.

---

## 5. Key Design Decisions
**Time: ~50 seconds**

*[Scroll to Section 09. Hit each decision crisply.]*

> Four deliberate trade-offs shaped the product.

> First, free-form goal text. Natural language over dropdowns. "Reach the dashboard without backtracking" is more honest than any preset option. It forces the designer to articulate their actual success criteria.

> Second, screenshot-based detection. Works regardless of prototype tool. No integration dependencies to maintain or break.

> Third, a linear stage machine. No back navigation mid-session. Focus over flexibility. Eliminating choice paralysis in the setup flow keeps the designer moving forward.

> Fourth -- and this one matters -- steps, not time. Step count is more diagnostic than seconds elapsed. A user who takes 30 seconds on the right path is fine. A user who takes 10 seconds but backtracks twice is not.

---

## 6. Validation -- AI vs. Real Users
**Time: ~50 seconds**

*[Scroll to Section 08. Let the 9/11 stat land visually before speaking.]*

> Here is the question that determines whether this tool is useful or just impressive: does AI actually match real user behavior?

> We tested three prototype flows with three designers each, comparing AI navigation paths against human navigation paths. The result: 9 out of 11 navigation blockers identified by AI matched real user behavior. Where AI reported backtracks, real users also hesitated or took wrong paths.

> What AI cannot do -- and this is by design -- is judge aesthetic preference. Visual polish, brand tone, emotional resonance. Those remain human territory. Golden Paths de-risks interaction flows between formal research rounds. It does not replace research.

---

## 7. What Broke First
**Time: ~45 seconds**

*[Scroll to Section 12. Lean into the honesty here -- these failures build credibility.]*

> Three failures shaped the final product, and I think they are worth sharing.

> First, AI hallucinated screens. The early prompt just said "navigate to the goal." The AI invented click targets that did not exist on screen. The fix: constrain navigation to visible elements only.

> Second, personas felt identical. All three clicked the same way, same paths, same decisions. The fix: inject behavioral traits directly into each persona's system prompt -- not just role labels.

> Third, goal detection was too strict. Pixel-perfect screenshot matching failed on dynamic content -- loading spinners, timestamps, cursor positions. The fix: dual-signal detection with an 80% match threshold instead of exact comparison.

> Every one of these failures made the product more robust.

---

## 8. Resolution -- Marcus's Story Resolved
**Time: ~45 seconds**

*[Scroll to Section 11. Bring the energy back to the human story.]*

> Let me take you back to Marcus. It is still 11pm. But now he has a tool.

> He opens Golden Paths. Defines the success state in three minutes. Runs an AI test with a PM persona -- forty-seven seconds. One below-fold button gets flagged as a navigation obstacle. He fixes it in four minutes. Re-runs the test. Clean navigation. Zero backtracks.

> He goes to sleep knowing the demo will land.

*[Scroll to the Before & After table.]*

> The before and after tells the story. Time to first feedback: hours down to sixty seconds. Test setup: half a day of logistics down to three minutes. Availability: business hours to twenty-four seven. Feedback quality: "looks clean" replaced by step-by-step evidence.

---

## 9. Lessons & Close
**Time: ~50 seconds**

*[Scroll to Section 13. Deliver each lesson as a standalone insight.]*

> Four lessons I took from building Golden Paths.

> First: eliminate logistics, not research. The tool de-risks prototypes so that human research sessions produce signal, not basic corrections. AI handles the first pass. Humans handle the depth.

> Second: show, don't describe. Screenshot-based goal detection is more reliable than words alone. Dual-signal beats single-signal every time.

> Third: emergent over encoded. Prompt-based persona context produces more realistic behavior than hard-coded decision rules. Let the AI reason. Don't script it.

> Fourth: craft multiplier. When testing costs sixty seconds instead of three hours, designers test every sprint -- not once a quarter. Lower the cost and the behavior changes.

*[Pause. Final beat.]*

> Six out of eight designers shipped untested prototypes under deadline pressure before Golden Paths. After -- 100% of early adopters ran validation on every major iteration. That is the difference infrastructure makes.

> Thank you.

---

## Timing Summary

| Section | Topic | Duration |
|---------|-------|----------|
| 1 | Hook -- Marcus at 11pm | ~40s |
| 2 | Research -- What 8 Designers Told Us | ~60s |
| 3 | The Core Bet -- Simulate, Don't Recruit | ~50s |
| 4 | The Flow -- Five Stages | ~60s |
| 5 | Key Design Decisions | ~50s |
| 6 | Validation -- AI vs. Real Users | ~50s |
| 7 | What Broke First | ~45s |
| 8 | Resolution -- Marcus Resolved | ~45s |
| 9 | Lessons & Close | ~50s |
| **Total** | | **~6 min 30s** |

---

## Presentation Tips

- **Open with silence.** Let the hero video play for 2-3 seconds before you start speaking. The visual sets the mood.
- **Own the failures.** Section 7 is where you build credibility. Do not rush through it. Lean into the honesty.
- **Pause after big numbers.** After "9 out of 11 blockers matched" and "60 seconds," give the audience a beat to absorb.
- **Bookend with Marcus.** The story opens and closes with the same character. This is your narrative thread -- make the callback in Section 8 deliberate and warm.
- **Keep the Before & After table visible.** If presenting with the live page, linger on the comparison table in Section 10. It is the single most persuasive visual.
- **Trim for time.** If you need to hit 5 minutes, cut Section 5 (Design Decisions) and weave one or two decisions into Section 4 instead.
- **Extend for time.** If you need 8 minutes, pause on the Persona section after Research to walk through Marcus's daily friction points in detail, and expand Section 7 with a brief live demo of the tool.
- **End clean.** The final line is "That is the difference infrastructure makes." Do not add a trailing "any questions?" -- let the statement land, pause, then invite questions with a nod or gesture.
