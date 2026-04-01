# Closing the Visibility Gap.

Parent pays for the subscription. Child uses the app. Parent has no way to tell if the money is working -- the content is HOTS math she can't evaluate herself.

---

## Metadata

| | |
|---|---|
| **Role** | UX Lead |
| **Team** | 3 (1 UI Designer, 2 UX/UI Designers) |
| **Scope** | End-to-end UX, Parent-facing app |
| **Year** | 2025 |

**Responsibilities:**
- Led design direction and managed team of 3
- Ran weekly design critiques and assigned screen ownership
- Designed the report screen -- the most strategic screen in the product
- Async Figma feedback and design QA across all screens

## Key Metrics

- **<50s** Report Comprehension
- **4/5** Identified Weakest Topic from Report Alone
- **4.8/5** Subscription Flow Clarity

---

## 01 -- The Invisible Investment

*Aye pays. Her daughter uses the app. She has no way to tell if it's working.*

> "I cannot directly observe whether the investment is working. The content is HOTS mathematics -- I can't evaluate her comprehension myself."
> -- Aye, Parent of Two (Paying subscriber, not a math expert)

She sees her daughter using the app. She can't tell if her daughter is learning -- or just clicking buttons to earn points.

**What constraints does this create?**

---

## 02 -- Five Constraints That Shaped Every Screen

1. **Paying User != Primary User** -- Aye's relationship with the product is entirely mediated through her child's data. Every screen must justify the subscription cost.
2. **Domain is Technical** -- HOTS math is not something most parents can assess. The app must translate raw performance into human-readable signals.
3. **Multiple Children** -- One parent account, multiple child profiles. The manage-child flow must support family-level oversight.
4. **Emotionally Charged Subscription** -- Renewal, freezing, and cancellation are high-stakes moments. These flows must feel trustworthy, not manipulative.
5. **Time-Poor Parent** -- The critical signal must land in seconds. Depth available on demand, but the first screen can never require more than a glance.

> Every parent-facing screen must answer: "Is this worth it?"

**Who informed these constraints?**

---

## 03 -- The Client as Domain Expert

*Primary source: a parent who lives the problem.*

The client is a parent themselves -- a domain expert on the parent experience. Rather than external recruitment, the client served as the primary knowledge source for pain points and mental models.

To compensate for single-source risk, we cross-referenced insights against published parent UX studies in edtech (Duolingo family plan, Khan Academy parent dashboard, SplashLearn engagement reports). The report screen was built with A/B test capability for post-launch validation.

**Supporting Research:** 5 children in Mandalay, Myanmar. Child-facing research provided indirect signal on what parents observe when watching their child use a learning app.

**Three Parent Jobs:**
1. Know whether money and time is working.
2. Manage subscription without confusion.
3. Feel pride in child's achievement.

**Starting from job #2 -- how does registration establish the parent as controlling entity?**

---

## 04 -- Registration: Parent as Controller

*Separation of concerns from the first screen.*

> `video` images/Jar Aye Parent/Registration.mov

- **Username, not email** -- Consistent with child app. Reduces friction on mobile and aligns with family device management.
- **PIN over password** -- Reinforces unified product identity across both apps.
- **Forgot PIN flow** -- Parents shouldn't feel locked out of a product they're paying for.
- **Mirrors child app login** -- Same mental model. Reduces cognitive overhead and reinforces product trust.

**Now the most strategic screen in the product.**

---

## 05 -- The Report Screen

*This is how the product justifies its subscription cost.*

> `video` images/Jar Aye Parent/Report.mp4

A parent who opens the report and immediately understands their child's status is a parent who renews. A parent who opens it confused is a parent who cancels.

- **"24 out of 120 skills mastery"** -- A number a parent can track over time.
- **"Incomplete" is not zero** -- Separates "hasn't attempted" from "attempted and failed." Prevents a gap reading as a failing grade.
- **Attempt history + timestamps** -- Each attempt is color-coded and dated. Parents see the process of improvement, not just a final score.

---

## 06 -- Social Pride & Subscription Trust

> `video` images/Jar Aye Parent/Social Pride.mov

- **Hall of Fame** -- Achievement sharing to Instagram/Telegram is parent-targeted. A parent sharing their child's badge is organic acquisition -- low-cost referral without peer comparison pressure.
- **Freeze vs Cancel** -- "Frozen" = temporary, reversible. "Cancelled" = permanent. Separate flows with distinct labels prevent accidental loss of progress history.
- **Manage Subscription** -- Active plan details, renewal dates, and upgrade paths visible upfront. Reduces the "what am I paying for?" question that precedes cancellation.
- **Locked content = visible aspiration** -- Expired tags on lesson cards show what the child is missing. Drives renewal more effectively than a blocking modal.

---

## 07 -- What I Would Revisit

**Priority 1 -- Cross-child dashboard.** For parents managing multiple children, no family-level view exists. A family summary would reduce navigation overhead of switching profiles.

**Priority 2 -- Proactive reporting alerts.** Weekly digest email summarizing the child's week. Closes the engagement loop between sessions.

**Priority 3 -- Subscription transparency.** Next billing date and amount should be visible on the home screen, not buried in settings.

**Priority 4 -- Report onboarding.** First-time tooltip for mastery tiers. Helps new parents understand what "Mastery" means.

> Biggest risk: untested parent comprehension at scale. Phase 2 priority: comprehension test with 5 parents -- show a report screen and ask them to identify strongest topic, weakest topic, and trend direction.

---

## 08 -- Resolution

*Validated comprehension. Under 50 seconds.*

The client correctly identified her daughter's strongest skill area, weakest skill area, and week-over-week trend direction from the report screen alone -- all under 40 seconds. Confirmed the 4-tier mastery visualization is legible to non-expert parents.

- **<50s** Report comprehension task completion.
- **4/5** Identified weakest topic from report screen alone.
- **4.8/5** Subscription flow clarity rating.

> The parent app didn't turn Aye into a mathematics expert. It gave her a language for her daughter's progress -- and the confidence to know the subscription was worth renewing.
