# Jar Aye Parent App -- Presentation Script

**Case Study:** Closing the Visibility Gap
**Duration:** 5--8 minutes (target ~6:30)
**Presenter:** Harry Hein, UX Lead
**Format:** Scrolling case study walkthrough with live demos

---

## Opening -- Set the Scene (0:00--0:30)

*[Stand center. Pause before speaking. Let the hero video loop behind you.]*

> Imagine you are paying for your daughter's math tutoring app every single month. She uses it every evening after school. You see colorful problems, progress bars, point counters on her screen. But here is the thing -- you have no idea if she is actually learning, or just clicking buttons to earn points.

> The math is advanced. Higher-Order Thinking Skills. You are not a math expert. You cannot evaluate her comprehension yourself. So you are paying for something you literally cannot verify.

> That is the problem we solved.

---

## 01 -- The Invisible Investment (0:30--1:15)

*[Advance to section 01. Gesture toward the parent quote on screen.]*

> This is Aye. She is a parent of two children on the Jar Aye platform. She pays for the subscription, but her children are the ones using the product. And she told us something that became our north star for every design decision:

> "I cannot directly observe whether the investment is working."

> This is not a minor UX complaint. This is a structural product problem. The person paying for the subscription is never the person using it. That means every single screen the parent sees must justify the subscription cost -- through data she can understand, not mathematical concepts she cannot evaluate.

*[Pause. Let that land.]*

---

## 02 -- Five Constraints (1:15--2:00)

*[Advance to the constraints list. Walk through each one briefly.]*

> So what does that actually mean for the design? We identified five constraints that shaped every screen in the parent app.

> First -- the paying user is never the primary user. Aye's entire relationship with the product is mediated through her children's data.

> Second -- the domain is technical. HOTS math is not something most parents can assess. We have to translate raw performance into human-readable signals.

> Third -- one account, multiple children. She needs family-level oversight without switching between profiles constantly.

> Fourth -- subscription moments are emotionally charged. Renewal, freezing, cancellation. These flows must feel trustworthy, never manipulative.

> And fifth -- she is time-poor. The critical signal must land in seconds. Depth is available on demand, but the first screen can never require more than a glance.

> We distilled all five into one design principle: every parent-facing screen must answer the question, "Is this worth it?"

---

## 03 -- Research Approach (2:00--2:45)

*[Advance to the research section. Speak openly about the methodology.]*

> Now, a quick note on how we got here. Our client is themselves a parent. A domain expert on the parent experience. Rather than external recruitment, we used the client as our primary knowledge source for pain points, mental models, and emotional triggers.

> To compensate for single-source risk, we cross-referenced insights against published parent UX studies in edtech -- Duolingo family plans, Khan Academy parent dashboards, SplashLearn engagement reports. And we built the report screen with A/B test capability for post-launch validation.

> From the research, three jobs emerged. Job one: know whether the money and time is working. Job two: manage the subscription without confusion. Job three: feel pride in the child's achievement. That last one is interesting because pride is also an organic acquisition channel -- parents sharing milestones is low-cost referral.

*[Transition naturally.]*

> We also defined clear success metrics upfront. Under 50 seconds for report comprehension. Four out of five accuracy on identifying the weakest topic. And above 4.5 out of 5 on subscription value clarity.

---

## 04 -- Registration Flow (2:45--3:15)

*[Advance to registration. If live demo is available, show the video.]*

> Starting from job two -- managing the subscription. The registration flow establishes the parent as the controlling entity from the first screen.

> We mirrored the child app login intentionally. Same username model, same PIN instead of password. This is deliberate. Consistency across both apps reduces cognitive overhead and reinforces product trust. The parent recognizes the system their child uses.

> Username instead of email reduces friction on mobile. PIN over password reinforces the unified product identity. And we included a forgot-PIN flow because parents should never feel locked out of a product they are paying for.

---

## 05 -- The Report Screen (3:15--4:30)

*[This is the centerpiece. Slow down. Advance to the report section. Let the video play.]*

> Now we arrive at the most strategic screen in the entire product. The report screen.

> Let me be direct about what this screen is. It is not a dashboard. It is the product's renewal argument, rendered as data. A parent who opens this and immediately understands their child's status is a parent who renews. A parent who opens it confused is a parent who cancels.

*[Point to specific elements on screen as you walk through them.]*

> Three key design decisions here.

> First -- "24 out of 120 skills mastery." A number a parent can track over time. Concrete, countable, meaningful without any mathematical expertise. Not a percentage. Not a grade. A clear fraction she can watch grow.

> Second -- "Incomplete" is not zero. We explicitly separated "hasn't attempted" from "attempted and failed." This prevents a gap from reading as a failing grade. That distinction matters emotionally.

> Third -- attempt history with timestamps. Each attempt is color-coded and dated. Parents see the process of improvement, not just a final score. The journey, not just the destination.

> The result: the report translates raw HOTS math performance into language a non-expert parent can read in under 50 seconds. No mathematical knowledge required. No interpretation ambiguity.

---

## 06 -- Social Pride and Subscription Trust (4:30--5:30)

*[Advance to the social pride section. Show the video.]*

> The report handles comprehension. But we also needed to address pride and subscription trust.

> Hall of Fame -- achievement sharing to Instagram and Telegram. This is parent-targeted on purpose. A parent sharing their child's badge is organic acquisition. Low-cost referral without peer comparison pressure on the child. The child earns it; the parent shares it.

> For subscription management, we separated freeze from cancel with distinct flows and labels. "Frozen" means temporary and reversible. "Cancelled" means permanent. That semantic difference matters. One ambiguous label causes a support ticket. One clear label prevents churn.

> Active plan details, renewal dates, and upgrade paths are visible upfront. This directly reduces the "what am I paying for?" question that precedes most cancellations.

> And one more thing -- locked content as visible aspiration. Expired tags on lesson cards show what the child is missing. This drives renewal more effectively than a blocking modal. Show the value; do not hide it.

---

## 07 -- What I Would Revisit (5:30--6:00)

*[Shift tone slightly. Be candid and reflective.]*

> Every design has trade-offs, and I want to be honest about the open questions.

> Priority one for the next iteration: a cross-child dashboard. For parents managing multiple children, no family-level view exists yet. Parents are switching between profiles constantly to compare progress.

> Priority two: proactive reporting alerts. A weekly digest summarizing the child's week. This closes the engagement loop without requiring the parent to open the app.

> Priority three: subscription transparency on the home screen. Next billing date and amount should not be buried in settings.

> And the biggest risk? Untested parent comprehension at scale. Phase two priority is a comprehension test with five parents -- show a report screen and ask them to identify strongest topic, weakest topic, and trend direction.

---

## 08 -- Resolution and Results (6:00--6:30)

*[Advance to results. Let the metrics speak.]*

> Despite the open questions, the validation data told a clear story.

> The client correctly identified her daughter's strongest skill area, weakest skill area, and week-over-week trend direction from the report screen alone -- all under 40 seconds. This confirmed the four-tier mastery visualization is legible to non-expert parents.

*[Gesture to the three result metrics on screen.]*

> Under 50 seconds for report comprehension. Four out of five on identifying the weakest topic. 4.8 out of 5 on subscription flow clarity.

> The parent app did not turn Aye into a mathematics expert. It gave her a language for her daughter's progress -- and the confidence to know the subscription was worth renewing.

> Thank you.

*[Pause. Open for questions.]*

---

## Timing Table

| Section | Title | Target Time | Duration |
|---------|-------|-------------|----------|
| Opening | Set the Scene | 0:00--0:30 | 30s |
| 01 | The Invisible Investment | 0:30--1:15 | 45s |
| 02 | Five Constraints | 1:15--2:00 | 45s |
| 03 | Research Approach | 2:00--2:45 | 45s |
| 04 | Registration Flow | 2:45--3:15 | 30s |
| 05 | The Report Screen | 3:15--4:30 | 75s |
| 06 | Social Pride & Trust | 4:30--5:30 | 60s |
| 07 | What I Would Revisit | 5:30--6:00 | 30s |
| 08 | Resolution & Results | 6:00--6:30 | 30s |
| **Total** | | | **~6:30** |

---

## Presentation Tips

- **The report screen is the climax.** Spend the most time there. Slow your pace. Point to specific UI elements. This is where the audience should feel the design thinking most clearly.
- **Use Aye's quote as an anchor.** Return to it mentally throughout. Every section should feel like it traces back to solving her problem.
- **Do not rush the constraints section.** Five items sounds like a lot, but each one is a sentence. Deliver them with rhythm -- short punches, not a list you are reading off.
- **Be candid in section 07.** Audiences trust presenters who acknowledge what they would do differently. This builds more credibility than a polished-only narrative.
- **Land the closing metric with silence.** After you say "under 40 seconds," pause. Let the number sit. Then deliver the final line about giving Aye a language for her daughter's progress.
- **If running long,** trim section 04 (Registration) to two sentences and compress section 07 (Revisit) to the single biggest priority. This saves roughly 45 seconds.
- **If running short,** expand section 03 (Research) with more detail on the edtech benchmarks, or add a brief anecdote about the persona's daily friction in section 01.
