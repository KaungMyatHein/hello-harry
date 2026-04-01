# From Feedback to 427% ROI

> Cashiers couldn't find the return button. Each wasted second, multiplied across thousands of daily transactions, bled money.

---

## Metadata

| | |
|---|---|
| **Role** | UX Designer, Raytail |
| **Team** | 1 UX Designer, 3 Stakeholders (CS, Warehouse, Finance) |
| **Year** | 2025 |

**Responsibilities:**
- Led end-to-end POS return process redesign
- Designed and ran two-lens research (business vs. user priorities)
- Built mid-fi prototypes and ran usability testing with real cashiers
- Translated usability data into ROI metrics for stakeholder buy-in

## Key Metrics

- **427%** ROI
- **>50%** Task Time Saved
- **1000s** Daily Transactions Impacted

---

## 01 — The Red Flag

It started with a single sentence at a workshop in Maldives.

> "Cashiers are struggling with the new return process. They can't understand the design... but we don't know why."
> — Colleague

That was all I needed to hear. I started watching cashiers work. Not through analytics dashboards — in person, on the shop floor, during real transactions.

What I saw was painful. Every hidden button, every missing label cost seconds. Not dramatic seconds — the kind nobody notices individually. But multiply a 30-second delay by thousands of transactions per day, across every store in the chain, and the cost becomes enormous.

The POS wasn't broken. It was invisibly expensive.

**I needed to find exactly where the friction lived — and prove it.**

---

## 02 — Four Features, All Invisible

![Old POS UI — pain points](images/retail-ui-old.webp)

I audited the interface against the tasks cashiers performed most. Four features stood out — not because they were complex, but because they were hidden:

1. **Return Process** — The single most frustrating task. Buried so deep that cashiers couldn't find it without asking a manager.
2. **Day End** — An icon with no text label. Cashiers memorized what it looked like — new hires had no chance.
3. **Discounts** — Hidden behind a menu, then another click on the product. Two steps too many for a task done dozens of times daily.
4. **Reprint** — High frequency, low visibility. Cashiers needed it constantly and could never find it quickly.

Four critical daily tasks. All invisible in the interface. But here's the question that changed the project:

**Which of these should we fix first? And how do we decide without guessing?**

---

## 03 — The Two-Lens Method

I could have asked stakeholders what matters most and started designing. That's what most teams do. But I had a hunch that business priorities and user pain wouldn't align perfectly — and the gap between them would be where the real opportunity lived.

So I ran the same importance-ranking exercise twice:

**First lens — Business.** Internal stakeholders voted on each activity's importance (1-5 scale). I compiled a heat map of what leadership valued most.

**Second lens — Users.** I asked the exact same questions to real cashiers on the shop floor. Same format, same scale. A second heat map — this one showing what actually caused daily friction.

Then I overlaid both maps.

The overlap was revealing. Total, Reprint, Void, and Hold scored high on both sides — clear mandate to invest heavily. But the real surprise was **Returns**. Business rated them low — "returns are rare." Cashiers rated them as their #1 frustration point.

Why the disconnect? Returns weren't frequent. But every single return had a customer standing there, watching, waiting. The per-incident impact was enormous — and invisible in the aggregate data.

> The assumption "returns are rare" was costing more than anyone realized.

**Now we had evidence-based priorities. Time to redesign — starting with the feature everyone underestimated.**

---

## 04 — Prototype & Test

I restructured the menu architecture around two principles: group by relationship, sort by frequency. The mid-fi prototype exposed every critical action on the primary screen.

![Mid-Fi Prototype](images/retail-ui-midfi.webp)

I tested it with cashiers using real transaction scenarios — not hypothetical tasks, but the actual workflows they ran daily. The usability scores told a clear story:

| Feature | Clarity Score |
|---------|--------------|
| Return | 0.85 |
| Reprint | 0.78 |
| Sale Flow | 0.75 |
| Discount | 0.60 |
| Hold/Recall | 0.56 |
| Day End | 0.50 |

Return scored highest — the exact feature that started this project, the one business had dismissed as "rare." The data validated the two-lens approach: we were fixing the right thing.

**But clarity scores only tell you if people can find things. The real question: would it actually save time at scale?**

---

## 05 — What Changed

![Final Design](images/retail-ui-final.webp)

Four structural changes, each solving a specific pain point from the audit:

1. **Grouped Activities** — Reprint, Recall, Void, and Return live together. Related actions in one place — no more hunting across menus.
2. **Sorted by Frequency** — Most-used functions in prime screen position. The interface now reflects how cashiers actually work, not how engineers organized the database.
3. **Icon + Text Labels** — Every button has a visible text label alongside its icon. 48px minimum touch targets sized for retail lighting conditions. New hires no longer need to memorize icon meanings.
4. **Product-Level Actions** — Discount and edit moved to item level. One tap on the product, not a detour through a separate menu.

**The prototype tested well. But could we put a number on the business impact?**

---

## 06 — The Numbers

Every second saved compounds. Here's what the redesign delivered:

| Task | Before | After |
|------|--------|-------|
| Return | ~1 min | <30s |
| Day End | ~1 min | <30s |
| Transactions | ~10s (inconsistent) | <10s (consistent) |
| Receipt Reprint | ~1 min | <30s |

The headline metrics:

- **427% ROI** on design investment — measured, not estimated.
- **>50% time reduction** on return processing — from 60s to under 30s, across every cashier, every store.
- **Faster onboarding** — new cashiers reached task proficiency faster because icon + text labeling removed the need to memorize icon-only meanings.

The redesign didn't just make things faster. It made the cost of UX debt visible — and gave stakeholders a framework to evaluate future design investments.

---

## 07 — What This Project Taught Me

**01 — We almost redesigned the wrong thing.**
The first stakeholder conversation pointed us toward the sale flow. It was only when I watched cashiers directly — not through reports, not through surveys — that returns emerged as the real friction point. Observation beats assumption every time.

**02 — Low frequency does not mean low impact.**
Returns were "rare" in aggregate. But every slow return had a customer standing at the counter, watching, waiting. The impact per incident was enormous — and completely invisible in dashboard metrics.

**03 — Design debt compounds like financial debt.**
The assumption "returns are rare" wasn't wrong once. It was wrong for years — creating hidden costs that grew with every new store, every new cashier, every new deployment. Nobody questioned it because nobody measured it.

**04 — Data wins stakeholder buy-in.**
The two-lens heat map made prioritization objective. When I showed the overlay to leadership, the conversation shifted from "I think we should..." to "the data shows we should..." Stakeholders agreed because it was evidence, not opinion.
