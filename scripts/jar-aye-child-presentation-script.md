# Jar Aye Child App -- Presentation Script

**Case Study:** Making Hard Math Feel Tractable
**Duration:** 5-8 minutes (target 6:30)
**Tone:** Conversational professional, story-driven
**Presenter:** Harry Hein, UX Lead

---

## Opening -- The Hook (0:00 - 0:40)

*[Stand center. No slide yet -- or show the hero video of the HOTS interface. Pause before speaking.]*

> Maya is nine years old. She opens a combinatorics question on her tablet. Reads it once. Reads it again. She doesn't know where to start.

*[Beat.]*

> The app has three seconds before she taps away. Not because the content is boring -- but because the interface gives her no foothold. She sees a wall of text and a blank answer field. No scaffold. No hint. The cognitive load hits before the learning even starts.

> That was the design challenge we faced at Jar Aye: make rigorous mathematical reasoning feel tractable to a seven-year-old -- without dumbing it down. This is not a gamification problem. It is a scaffolding problem.

---

## 01 -- Three Users, Three Anxieties (0:40 - 1:30)

*[Transition to the constraint card. Gesture to emphasize the three-way tension.]*

> Here is what made this project difficult. One product. Three users. Each with a different anxiety.

> The child fears being wrong. Getting something wrong on a screen feels just as exposing as getting it wrong in front of the class. Every state we design must answer one question: does this make a child feel safe enough to try again?

> The parent fears wasting money. They can't tell if their child genuinely understands math or is just clicking buttons to earn points.

> The teacher fears missing who needs help. They are manually analyzing thirty individual student accounts to find the three who are falling behind.

> Every screen must serve all three without compromising any of them. And it is a subscription product -- so over-optimizing for engagement risks teaching children to chase points rather than understand mathematics.

---

## 02 -- Research: Observed, Not Self-Reported (1:30 - 2:30)

*[Show the persona card for Maya. Lean in slightly -- this is the credibility section.]*

> Before designing anything, we needed to understand what real child behavior actually looks like. Children don't self-report well. So we ran remote sessions in Mandalay with five children -- but here is the key: they were using competitor products, not Jar Aye. This removed product-specific bias entirely.

> We watched navigation patterns, confusion responses, and difficulty-handling in real time. Not inferred from what children say they'd do -- observed.

> Two findings shaped the entire product. First, all five children navigated core flows successfully on competitor apps. That validated that a similar navigation structure would minimize the learning curve.

> Second -- and this one changed everything -- one child went completely silent when confused. Didn't ask for help. Didn't retry. Just stopped. That behavior informed the need for built-in question explanations that appear automatically. You can't rely on a child to ask.

*[Pause. Let that land.]*

---

## 03 -- Sign-In: Remove the Failure Mode (2:30 - 3:10)

*[Show the login video. Quick section -- keep it crisp.]*

> Let me show you the first screen a child sees. A login. Sounds simple. It is not.

> Primary 1 children often don't know their email address. A traditional email-and-password login is a failure mode before the product even begins. So every decision on this screen is about preventing the error from being possible in the first place.

> Username, not email -- school-assigned. A segmented four-box PIN so the child always knows how many characters remain. And the submit button stays disabled until both fields are filled. The child never sees a "wrong" state from an empty submission.

> Error prevention over error recovery. That principle runs through every screen.

---

## 04 -- The Learning Loop (3:10 - 3:50)

*[Show the learning loop video. Walk through the sequence with your hand, left to right.]*

> Once the child is in, here is the learning loop. Class, topic, video, question, feedback, self-check, report. Each step exists for a pedagogical reason.

> Video comes before the question because novice learners benefit from seeing a solved problem before attempting their own. And the self-check -- this is important -- asks the learner to evaluate their own understanding. That is a metacognitive step most edtech products skip entirely.

> We are not just testing whether the child got the answer right. We are building their awareness of what they know and what they don't know.

---

## 05 -- Five Question States (3:50 - 4:30)

*[Show the question states. Slow down here -- this is the design craft section.]*

> When a child faces a question, there are five distinct states, and each one teaches.

> Default state is clean. No noise until the child is ready to submit. When they get it correct, a celebration header appears -- but the question and illustration stay visible. That keeps the cognitive link between the right answer and the reasoning.

> When they get it wrong -- and this is deliberate -- a solution pop-up shows the reasoning, not just the answer. The child compares the solution to their own thinking. After viewing the solution, they see a corrected answer state. That builds the mental model for next time.

> We also give two CTAs after a correct answer: "Show Solution" and "Next Question." That serves both the intuitive guesser and the child who understood the process.

---

## 06 -- HOTS Framework as Interface (4:30 - 5:20)

*[Show the HOTS video. This is the differentiator -- give it energy.]*

> This is the part I am most proud of. Higher-Order Thinking Skills are typically locked inside teacher training documents. We translated five pedagogical strategies into interactive screen states that children navigate directly.

> Making a Guess -- activates prior knowledge, reduces blank-page paralysis. Using a Representation -- draw it, table it, diagram it -- externalizes working memory so the child can see their thinking. Walking Through the Process -- step-by-step reasoning scaffold. Changing the Problem -- what if the numbers were different? And Adventure Quest Challenge -- extension gated behind lesson completion.

> Pedagogy as navigable screen states, not a teacher guide PDF. That is the design innovation here.

---

## 07 -- Engagement Without Anxiety (5:20 - 5:50)

*[Show the engagement calendar video. Speak with conviction on the streak decision.]*

> Engagement model. A Duolingo-style streak counter punishes missed days. For children whose screen time is parent-controlled, that punishment is both unfair and anxiety-producing.

> We replaced streaks with a calendar grid that accumulates without punishment. Points are earned for lesson completion, not correct answers alone. A struggling child who finishes the lesson still earns social standing. The leaderboard is grade-filtered -- a Primary 1 student competes with Primary 1 students only.

> Rewards persistence, not perfection.

---

## 08 -- What I Would Revisit (5:50 - 6:10)

*[No video. Speak directly. Honesty builds credibility.]*

> Three things I would reconsider with more data. First, the hamburger menu -- I would test a bottom nav bar for younger users. Children under ten rarely open hamburger menus; they tap what is visible.

> Second, the video-first assumption. Lower-proficiency students may need a simplified example problem, not just a passive video.

> Third, a parent visibility gap. The report gives excellent data after a problem develops. A push notification on consistent failure would close that loop proactively.

---

## 09 -- Resolution (6:10 - 6:40)

*[Show the results metrics. Slow your pace. Let the numbers breathe.]*

> In the final test session, Maya got question three wrong. She didn't close the app.

*[Pause.]*

> She opened the solution explanation, said "oh, I see," and immediately attempted a similar problem. That is the behavior the design aimed to produce -- persistence through understanding, not points.

> Six topics moved from Beginning to Competent in one week. Four out of five children completed the flow unassisted. Average time per question: two point eight minutes. And sixty-eight percent of children's self-assessments matched their actual performance. The metacognitive step is working.

> Thank you.

*[Nod. Hold for questions.]*

---

## Timing Table

| Section | Topic | Duration | Cumulative |
|---------|-------|----------|------------|
| Opening | The Hook -- Maya's 3 seconds | 0:40 | 0:40 |
| 01 | Three Users, Three Anxieties | 0:50 | 1:30 |
| 02 | Research: Observed, Not Self-Reported | 1:00 | 2:30 |
| 03 | Sign-In: Remove the Failure Mode | 0:40 | 3:10 |
| 04 | The Learning Loop | 0:40 | 3:50 |
| 05 | Five Question States | 0:40 | 4:30 |
| 06 | HOTS Framework as Interface | 0:50 | 5:20 |
| 07 | Engagement Without Anxiety | 0:30 | 5:50 |
| 08 | What I Would Revisit | 0:20 | 6:10 |
| 09 | Resolution | 0:30 | 6:40 |

**Total: ~6 minutes 40 seconds** (leaves room for natural pauses and Q&A)

---

## Delivery Tips

1. **Open with Maya, not the product.** The audience remembers a person, not a feature list. Ground them in the child's experience before you talk about design decisions.

2. **Pause after the silent child finding.** That research insight is the emotional anchor of the talk. Let it land before moving on.

3. **Speed up through Sign-In, slow down through HOTS.** Login is a smart decision but not the differentiator. The HOTS framework is -- give it the energy it deserves.

4. **Use the videos as breathing room.** Let the audience watch for 3-5 seconds before narrating. They need time to process what they are seeing.

5. **The "What I Would Revisit" section builds trust.** Do not rush it or apologize. State the trade-offs confidently. Interviewers and audiences respect designers who name their own gaps.

6. **End on Maya's behavior, not a metric.** The final image should be a child choosing to persist. That is more memorable than a percentage.

7. **If running short (under 5 min):** Expand the HOTS section with examples of each strategy. If running long (over 7 min): Trim Sign-In to two sentences and compress Engagement.

8. **For portfolio reviews:** Expect follow-up questions on the research methodology, the mastery tier thresholds, and how you balanced child engagement with parent trust. Prepare one concrete anecdote for each.
