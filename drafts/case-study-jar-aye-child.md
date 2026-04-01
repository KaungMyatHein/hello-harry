# Making Hard Math Feel Tractable.

How do you make rigorous HOTS math feel approachable to a 7-year-old -- without dumbing it down? The app has 3 seconds before the child taps away.

---

## Metadata

| | |
|---|---|
| **Role** | UX Lead |
| **Team** | 3 (1 UI Designer, 2 UX/UI Designers) |
| **Scope** | End-to-end UX, Child-facing app |
| **Year** | 2025 |

**Responsibilities:**
- Led design direction and managed team of 3
- Ran weekly design critiques and assigned screen ownership
- Conducted observational research with 5 children on competitor products
- Async Figma feedback and design QA across all screens

## Key Metrics

- **5** HOTS Strategies as Interface
- **4/5** Children Completed Flow Unassisted
- **2.8min** Avg Time Per Question

---

## 01 -- Three Seconds to Lose Her

*Maya opens a combinatorics question. Reads it twice. Doesn't know where to start.*

The app has 3 seconds before she taps away. The design must make rigorous mathematical reasoning feel tractable without diluting its cognitive demands.

**One product. Three users with competing anxieties.**

---

## 02 -- Three Jobs to Be Done

**The Child** -- Feel capable and make progress. Anxiety: getting something wrong, not knowing what to do next, looking stupid in front of peers.

**The Parent** -- Know if the money is working. Anxiety: can't tell if their child genuinely understands or is just clicking buttons.

**The Teacher** -- Identify who needs help before the test. Anxiety: manually analyzing 30 individual student accounts.

> The child's anxiety about being wrong is the single most important UX constraint. Every state must answer: does this make a child feel safe enough to try again?

It's a subscription product -- over-optimizing for engagement risks teaching children to chase points rather than understand mathematics.

**What does real child behavior actually look like?**

---

## 03 -- Observed, Not Self-Reported

*5 children. Competitor products. Unmediated behavior.*

Remote sessions in Mandalay. Participants used competing Singaporean edtech products -- not Jar Aye. This removed product-specific bias.

- **What:** Navigation patterns, confusion responses, difficulty-handling -- watched in real sessions, not inferred from what children say they'd do.
- **Why:** Assumptions about how children learn are easy to get wrong. We watched real children use real products before designing anything.

**Finding 1:** 100% navigated core flows -- validating that a similar navigation structure would minimize learning curve.

**Finding 2:** 1 child went silent on confusion -- didn't ask for help, didn't retry. This informed the need for built-in question explanations.

> Children don't self-report. Observational research produces different -- and more honest -- data than interviews.

**How do you translate these findings into a login screen for a 6-year-old?**

---

## 04 -- Sign-In: Remove the Failure Mode

*Error prevention over error recovery.*

> `video` images/Jar Aye Child/login.mov

- **Username, not email** -- Primary 1 children often don't know their email address. School-assigned username removes the failure mode entirely.
- **Segmented 4-box PIN** -- Chunking into 4 visible cells reduces working memory load. The child always knows how many characters remain.
- **Disabled until both fields filled** -- Error prevention (Nielsen's 5th heuristic). The child never sees a "wrong" state from an empty submission.

---

## 05 -- The Learning Loop

*Video before question. Self-check before report.*

> `video` images/Jar Aye Child/Learning Loop.mov

Flow: Class, Topic, Video, Question, Feedback, Self Check, Report.

- **Video-first** -- Novice learners benefit from seeing a solved problem before attempting their own (Sweller, 1988). Video comes before the question, not after.
- **Self-check** -- Asks the learner to evaluate their own understanding. Adds a metacognitive step most edtech products skip entirely.

**What happens when the child actually faces a question?**

---

## 06 -- Five Question States

Each state is deliberate.

- **Default / Filled** -- Clean state. No noise until ready to submit. Disabled submit prevents empty submissions.
- **Correct** -- Celebration header appears but the question and illustration remain. Keeps the cognitive link between "I got it right" and the reasoning.
- **Wrong** -- Solution pop-up shows the reasoning, not just the answer. Child compares to their own thinking.
- **Two CTAs after correct** -- "Show Solution" (secondary) + "Next Question" (primary). Serves both the intuitive guesser and the child who understood the process.
- **Fixed state** -- After viewing the solution, the corrected answer state. Builds the mental model for next time.

---

## 07 -- HOTS Framework as Interface

*Pedagogy as navigable screen states, not a teacher guide PDF.*

> `video` images/Jar Aye Child/HOTS.mp4

1. **Making a Guess** -- Activates prior knowledge. The child commits to an estimate before reasoning -- reducing blank-page paralysis.
2. **Using a Representation** -- Draw it. Table it. Diagram it. Externalizes working memory.
3. **Walking Through the Process** -- Step-by-step reasoning scaffold. Makes thinking explicit and auditable.
4. **Changing the Problem** -- What if the numbers were different? Builds transfer to novel problems.
5. **Adventure Quest Challenge** -- Extension gated behind lesson completion. Genuine leaderboard differentiator.

> The child learns how to think, not just what to answer.

**How do you make progress legible to both a 7-year-old and their parent?**

---

## 08 -- 4-Tier Mastery

> `video` images/Jar Aye Child/progress report.mov

- **80%+** Mastery (80-100%)
- **60%+** Competent (60-79%)
- **<60%** Beginning (0-59%)
- **--** Incomplete (<10 questions attempted)

**"Incomplete" is not zero** -- Separates "hasn't done it yet" from "attempted and failed." Prevents a blank from appearing as a failing grade.

**24 out of 120 skills** -- Concrete, countable north-star metric. More meaningful than a percentage dial.

**Attempt history with timestamps** -- Each wrong/correct answer is color-coded and dated. For parents: diagnostic data. For children: a record of improvement.

---

## 09 -- Engagement Without Anxiety

*Forgiving mechanics. No streak punishment.*

> `video` images/Jar Aye Child/engagement calendar.mov

- **Calendar, not streak counter** -- A Duolingo-style streak punishes missed days. A calendar grid accumulates without punishment -- appropriate for children whose screen time is parent-controlled.
- **Achievement sharing** -- Parent-targeted, not child-to-child. Sharing to Instagram/Telegram drives organic acquisition without peer comparison.
- **Grade-filtered leaderboard** -- A P1 student competes with P1 students only. Psychologically safe comparison.
- **Jar Yit Points for completion** -- Points earned for lesson completion, not correct answers alone. A struggling child who completes the lesson still earns social standing. Rewards persistence.

---

## 10 -- Subscription States

> `video` images/Jar Aye Child/Trial End.mov

- **Trial Expired** -- Content browsable but gated with clear upgrade path. Show what's missing, not a blank wall.
- **Subscription Expired** -- Expired tags on lesson cards, renewal path visible.
- **Subscription Frozen** -- State preserved. No progress lost. "Frozen" implies temporary -- prevents parents from assuming they've lost history.

> "Expired" vs "Frozen" aren't just states -- they're semantic contracts with the user.

---

## 11 -- What I Would Revisit

**Navigation Discoverability** -- Hamburger menu was a deliberate trade-off for screen real estate. For young users, a bottom nav bar would be more persistent and legible.

**Video-First Assumption** -- Lower-proficiency students may need a simplified example problem, not just a passive video.

**Parent Visibility Gap** -- The report gives excellent data after a problem develops. A push notification on consistent failure would close this loop.

---

## 12 -- Resolution

> "I got it wrong but I could see why. The next one I tried a different way and got it right."
> -- Maya, Age 9, Primary 3 -- After 3 weeks

- **6** Topics moved from Beginning to Competent in one week.
- **4/5** Children completed the flow without assistance.
- **2.8min** Avg time per question (target: under 5 min).
- **68%** Self-assessment matched actual performance.

In the final test session, Maya got question 3 wrong. Instead of closing the app, she opened the solution explanation, said "oh, I see," and immediately attempted a similar problem. That's the behavior the design aimed to produce -- persistence through understanding, not points.
