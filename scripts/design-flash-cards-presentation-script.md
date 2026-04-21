# Design Flash Cards -- Presentation Script

**Total Duration:** 6-7 minutes
**Format:** Portfolio walkthrough / case study presentation
**Tone:** Conversational, story-driven, confident but humble

---

## Section 1: Origin -- "Learning Design Should Be Free"

**Duration:** ~1:30

*(Open with the project on screen. Pause before speaking.)*

> So this project started from a frustration I kept running into.

> I'm from Myanmar, and there's no structured design education pipeline there. Junior designers learn by copying what they see on Dribbble -- nice visuals, but no understanding of the principles behind them. They can replicate a card layout but can't tell you why the hierarchy works.

> I wanted to build something that teaches design principles through testing -- not through passive tutorials. The core idea was simple: if you can't name a principle without being prompted, you don't actually know it yet.

*(Gesture toward the quote card on screen.)*

> There's a line I kept coming back to: most design education is passive. You read, you nod, you forget. That's the problem I wanted to solve.

> The tool ships with over a hundred cards, in both English and Myanmar. Two languages, because access shouldn't depend on which language you think in.

---

## Section 2: Problem -- "Passive Learning Doesn't Stick"

**Duration:** ~1:15

*(Transition to the retention data. Let the numbers land before explaining.)*

> So before I jumped into design, I looked at the research. The Ebbinghaus forgetting curve tells us something uncomfortable: without active retrieval practice, you lose about eighty percent of what you learn within a week.

> And the format matters enormously.

*(Point to the three retention cards in sequence.)*

> Passive reading -- articles, blog posts -- gets you roughly ten percent retention after a week. Watching tutorials bumps that to about thirty percent. But active recall -- actually testing yourself, pulling the answer from memory -- that gets you to seventy-five percent.

> The problem was never access to information. Designers have more free content than ever. The problem is the format. Reading is not learning.

---

## Section 3: Design -- "One Card. Two Languages. One Concept."

**Duration:** ~1:15

*(Show the card interface if possible. Slow down here -- this is where design decisions live.)*

> The design philosophy was restraint. Each card has a front -- the English concept name -- and a back with the definition in English plus a Myanmar translation. Category filters let you drill into specific domains, and a progress ring shows where you are in the session.

> A few deliberate decisions I want to call out.

*(Walk through each design decision.)*

> First, the cards are monochrome. That was intentional -- it removes visual distraction and keeps focus on the content itself. I didn't want the UI competing with the learning.

> Second, the Myanmar script plays a supporting role. It's a native-language explanation, not a translation crutch. The goal is comprehension, not dependency.

> Third, there's no timer. A lot of flash card apps add countdown pressure, but that introduces anxiety into the learning loop. I wanted this to feel calm and self-paced.

> And fourth, keyboard shortcuts -- because designers tend to prefer not reaching for the mouse.

---

## Section 4: Build -- "Next.js + Vercel in a Weekend"

**Duration:** ~1:00

*(Keep this section brisk. The audience cares about decisions, not stack details.)*

> On the technical side, I built this solo over two weekends. The stack is Next.js, React, Tailwind, and Framer Motion for the card animations. Deployed on Vercel with instant global CDN.

> One architectural choice I'm proud of: all the card data lives in a single JSON file. That means anyone can extend the content -- add new cards, new categories, new languages -- without touching the UI code at all.

> Zero backend. Zero auth. Zero friction. You open it, you start learning. That was the whole point.

*(Brief pause.)*

> The site is live and open source. I'll share the link at the end.

---

## Section 5: Reflection -- "What I'd Do Differently"

**Duration:** ~1:30

*(Slow down. This section builds credibility. Make eye contact.)*

> So, three honest lessons from this project.

*(Hold up one finger.)*

> Number one: content is the hard part. Writing over a hundred good card pairs took longer than building the entire UI. The quality of each prompt -- the wording, the clarity, the translation -- matters more than any design decision. Next time, I'd start with content architecture, not component architecture.

*(Two fingers.)*

> Number two: Myanmar font rendering varies wildly across devices. On some Android phones, the script renders incorrectly. I should have chosen a better web-safe Myanmar font from day one and tested on low-end Android hardware before launch, not after. That was a miss.

*(Three fingers.)*

> And number three: ship earlier. I spent time on animations that honestly nobody notices. The card flip itself was enough. The real value is in the content, and content only improves through user feedback -- not through more polish.

*(Pause. Then deliver the closing.)*

> This project reinforced something I believe deeply: the best tools disappear. You don't notice the UI. You just learn. That's what I was aiming for, and I think we got close.

> Thanks. Happy to take questions.

---

## Timing Summary

| Section | Title | Target Duration |
|---------|-------|-----------------|
| 01 -- Origin | Learning Design Should Be Free | 1:30 |
| 02 -- Problem | Passive Learning Doesn't Stick | 1:15 |
| 03 -- Design | One Card. Two Languages. One Concept. | 1:15 |
| 04 -- Build | Next.js + Vercel in a Weekend | 1:00 |
| 05 -- Reflection | What I'd Do Differently | 1:30 |
| **Total** | | **~6:30** |

---

## Presentation Tips

- **Pause after data.** Let the retention percentages (10%, 30%, 75%) sink in before explaining them. Numbers need silence to land.
- **Use the screen.** Point to specific elements -- the quote card, the retention grid, the tech stack -- rather than describing them verbally.
- **Slow down on Section 3.** Design decisions are where interviewers form opinions. Don't rush through the rationale.
- **Own the mistakes in Section 5.** The Myanmar font rendering issue and the over-polishing admission are your strongest credibility builders. Don't soften them.
- **Keep Section 4 short.** The tech stack is not the story. The story is the problem and the design response.
- **End clean.** The closing line about tools disappearing is your anchor. Deliver it simply, without rushing into "any questions."
- **Have the live site ready.** If someone asks to see it, pull up design-flash-card.vercel.app immediately. Nothing sells a side project like a working demo.
