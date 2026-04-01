# 11pm. One Demo. Zero Testers.

Designers skip prototype testing because recruiting testers takes half a day of logistics. By the time feedback arrives, it's "Looks clean!" -- not evidence.

---

## Metadata

| | |
|---|---|
| **Role** | Product Designer |
| **Team** | Solo |
| **Scope** | AI usability testing feature, Designer OS |
| **Year** | 2026 |

**Responsibilities:**
- End-to-end product design from research through shipped feature
- Conducted 8 semi-structured designer interviews
- Designed AI persona system and golden path flow
- Validated AI output against real user testing sessions

## Key Metrics

- **60s** Time to First Feedback
- **3min** Test Setup
- **9/11** AI Blockers Matched Real Users

---

## 01 -- The Doubt

*11pm. Client demo tomorrow. The prototype looks right. But does it work?*

> "I've been staring at this onboarding flow for three weeks. I can't tell if it's genuinely intuitive or if I've just memorized every path through it."
> -- Marcus, Product Designer (Composite persona from 8 designer interviews)

He sent the Figma link to 4 colleagues. Three replies over 3 hours: "Looks clean!", "felt busy", and a thumbs-up emoji. None told him which screen caused confusion.

**So what are designers actually doing under pressure?**

---

## 02 -- What 8 Designers Told Us

*Semi-structured interviews. 30 minutes each. Testing habits and pain points.*

- **6/8** skip testing under deadline -- "When we're rushing, the first thing cut is the user test."
- **7/8** get vague feedback -- "Colleagues give you vibes, not evidence."
- **8/8** would test more if instant -- "If I could run a test in under 5 minutes, I'd do it every sprint."

Three blockers emerged: coordination tax (half a day of logistics for 90 minutes of data), unstructured feedback ("Looks clean!" tells you nothing), and schedule mismatch (your most urgent need to validate never aligns with anyone else's calendar).

> This finding set the core design target: time to first feedback under 60 seconds.

**What if the problem isn't willingness -- but infrastructure?**

---

## 03 -- The Core Bet

*Simulate, don't recruit.*

If AI can simulate how different user types approach a UI -- their decision patterns, hesitations, and assumptions -- designers get structured usability feedback at any hour, on any prototype, with zero coordination.

**Why AI + Puppeteer?**

- **Rejected: Heuristic Checklist** -- Measures against rules. No path evidence.
- **Rejected: Figma API Automation** -- Brittle. Breaks when component names change. Tool-locked.
- **Chosen: AI + Puppeteer** -- Screenshot-based detection works for any prototype URL. Persona-driven prompts produce behavior, not just clicks.

The non-obvious call: Puppeteer over Figma API -- traded tight integration for tool-agnostic flexibility.

**How does this translate into an actual workflow?**

---

## 04 -- The Golden Path Flow

*Five stages. One purpose: evidence before the demo.*

1. **Create Prototype** -- Add name + Figma URL + project link.
2. **Set Up Test** -- Define personas, user goals, and metrics.
3. **Define Golden Path** -- Navigate to goal screen -- AI captures it as target.
4. **AI Runs Test** -- Steps streamed live via SSE.
5. **Review Results** -- Pass/fail, steps, backtracks, AI observations.

---

## 05 -- Plan the Test

> `video` images/AI Test/Planning For AI UT.mov

- **User Goal:** Success criteria in plain language.
- **Max Count:** Cap AI navigation steps.
- **Track Metrics:** Steps, backtracks, pass/fail.
- **Select Personas:** PM, Dev, Designer.

---

## 06 -- Set the Golden Path

> `video` images/AI Test/Setting Golden Paths.mov

Navigate through a live Puppeteer session of your prototype. Reach the goal state, click "Set as Goal Screen" -- AI receives both the text goal and a screenshot as dual-signal target.

---

## 07 -- See the Evidence

> `video` images/AI Test/Showing Results.mov

Test Result: Pass. 5 steps. 0 backtracks. 0 backtracks = confident. 3+ = confusion.

**What AI Thinks:**
- Clicked 'Get Started' -- "Primary CTA visible."
- Skipped tooltip -- "Not blocking. Dismissed."
- Reached goal screen.

**Full Demo:**
> `video` images/AI Test/Demo.mov

**But does AI actually match real user behavior?**

---

## 08 -- Validation: AI vs. Real Users

*3 prototype flows. 3 designers each. AI vs. human comparison.*

- **9/11** navigation blockers matched -- where AI reported backtracks, real users also hesitated or took a wrong path.
- **By design out of scope:** Aesthetic preference. AI cannot replace human judgment on visual polish.

> Golden Paths de-risks flows between formal research rounds -- it doesn't replace them.

---

## 09 -- Key Design Decisions

1. **Free-Form Goal Text** -- Natural language over dropdowns. "Reach the dashboard without backtracking" is more honest than any preset.
2. **Screenshot-Based Detection** -- Works regardless of prototype tool. Figma, InVision, hosted -- all handled identically.
3. **Linear Stage Machine** -- No back navigation mid-session. Focus over flexibility eliminates choice paralysis.
4. **Steps, Not Time** -- Step count is more diagnostic than seconds elapsed.

---

## 10 -- Before & After

| Metric | Old Approach | Golden Paths |
|--------|-------------|-------------|
| Time to first feedback | Hours | ~60 seconds |
| Test setup | Brief + recruit | 3 min in builder |
| Comparable persona runs | 3 Zoom sessions | 3 AI runs in 5 min |
| Availability | Business hours | 24/7 instant |
| Feedback quality | "Looks clean!" | Step-by-step evidence |

---

## 11 -- Marcus's Story, Resolved

*11pm. Demo at 9am.*

He opened Golden Paths. Defined success state in 3 minutes. Ran AI test with PM persona -- 47 seconds. One below-fold button flagged. Fixed in 4 minutes. Re-ran. Clean navigation.

He went to sleep knowing the demo would land.

---

## 12 -- What Broke First

**AI Hallucinated Screens.** Early prompt: "navigate to the goal." AI invented click targets that didn't exist. Fix: constrain to visible elements only.

**Personas Felt Identical.** All personas clicked the same way. Fix: inject behavioral traits directly into the system prompt.

**Goal Detection Too Strict.** Screenshot matching failed on dynamic content. Fix: dual-signal with 80% match threshold instead of exact pixel comparison.

---

## 13 -- What This Taught Me

**01 -- Eliminate Logistics, Not Research.** The tool de-risks prototypes so human sessions produce signal, not basic corrections.

**02 -- Show, Don't Describe.** Screenshot-based goal detection is more reliable than words alone -- dual-signal beats single-signal.

**03 -- Emergent > Encoded.** Prompt-based persona context produces more realistic behavior than hard-coded rules.

**04 -- Craft Multiplier.** When testing costs 60 seconds instead of 3 hours, designers test every sprint -- not once a quarter.

---

## Skills & Tools

6/8 designers shipped untested prototypes under deadline pressure before Golden Paths. 100% early adopters ran validation on every major iteration after.

**Tools:** Figma, Puppeteer, Next.js, Supabase, SSE Streaming, AI Personas, Screenshot Detection

**Accessibility:** WCAG AA contrast ratios, full keyboard navigation, SSE status updates via aria-live regions.
