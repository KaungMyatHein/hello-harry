# From Daily Ritual to 104% ROI

> Every morning, the ops manager spent 30 minutes copy-pasting data across 3 tools. The team made decisions on yesterday's numbers.

---

## Metadata

| | |
|---|---|
| **Role** | Product Designer, TreeDots |
| **Team** | 1 Product Designer, 2 Finance Analysts, 1 Finance Lead, 1 Cash Collection Manager, 1 CS Supervisor |
| **Year** | 2022 |

**Responsibilities:**
- Led dashboard consolidation from discovery to launch
- Shadowed daily workflows and ran 5 stakeholder interviews
- Designed real-time KPI dashboard and amendment flow
- Calculated and presented ROI to leadership

## Key Metrics

- **104%** ROI
- **0.5h** Saved Daily
- **3 to 1** Systems Consolidated

---

## 01 — The Morning Ritual

Mei, the ops manager, did this every morning: open Xero for revenue, copy numbers into spreadsheets, check the supplier portal for payments. Twelve copy-pastes. Thirty minutes. Every single day.

- **Xero** -- Revenue & expenses, updated daily.
- **Spreadsheets** -- Manual compilation, 12 copy-pastes.
- **Supplier Portal** -- Payment tracking, separate login.

By the time data was compiled, it was already stale. The team made decisions on yesterday's numbers.

**What if we could give her those 30 minutes back?**

---

## 02 — Two Perspectives, One Pain

**Mei:** "I know exactly what numbers the team needs. I just don't have them in one place."

**Finance Lead:** "We make decisions based on Mei's reports. But sometimes the numbers are a day behind."

Same problem, different angle. Mei spent time assembling data. Finance got stale data. Both lost.

**The gap wasn't missing data -- it was scattered data.**

---

## 03 — Two Pain Points in the Old Design

![Old Order Amendments page](images/dash-ui-old.png)

1. **Buried in Nav** -- Hidden under Finance, then Amendments.
2. **No Status Clarity** -- Manual acknowledgement with no Xero sync and no visual hierarchy.

---

## 04 — What Changed

![Redesigned Invoice page](images/dash-ui-new.png)

1. **Alert Banner** -- Actionable notification for pending amendments.
2. **Xero Sync Status** -- Color-coded sync indicators at a glance.
3. **Amendment Badges** -- "Need Acknowledgement" visible per row.
4. **Color-Coded Rows** -- Visual hierarchy by payment status.

**Amendment Details -- 3 Key Improvements:**

![Amendment Details modal](images/dash-ui-ack.png)

1. Original vs. Amended -- side-by-side comparison in context.
2. Item-Level Changes -- price diffs and savings per product.
3. One-Click Acknowledge -- confirm without leaving the page.

---

## 05 — One Screen. Every KPI.

- **$42.8K** Revenue -- auto-refreshed from Xero.
- **847** Orders -- processed today.
- **Live** Fulfillment -- real-time rate.
- **12** Pending Payments -- requiring action.

No more tab-switching. No more copy-pasting. One screen.

---

## 06 — Before & After

| Metric | Before | After |
|--------|--------|-------|
| Data Sources | Xero + Sheets + Portal | 1 dashboard |
| Daily Prep Time | 30 minutes | 0 minutes |
| Data Freshness | Day-old | Real-time |
| Manual Steps | 12 copy-pastes | 0 (automated) |
| Error Risk | High (manual) | Near-zero |

---

## 07 — The Numbers

- **104% ROI** -- 30 min/day x 250 days = 125 hrs recovered. 125h x $11/h = ~$1,375 vs. ~$1,360 design cost. Break-even at month 6.
- **Real-time data** -- From day-old to always-current.
- **Adopted downstream** -- The KPI card component became part of TreeDots' internal design system.

---

## 08 — "What do I do with my morning now?"

> That was the best user feedback I've ever received. She didn't miss the 30 minutes. She'd already forgotten what she used to do with them.
> -- Mei, first morning after launch

Task completion dropped from 30 minutes to under 2 minutes.

---

## 09 — Four Lessons

**01 -- Time savings compound at scale.** 0.5h/day sounds small. Across a year, it's 125+ hours -- 3 extra work weeks.

**02 -- The data existed. The design didn't.** No new APIs needed. The entire ROI came from restructuring information architecture.

**03 -- Reducing tools > adding features.** 3 systems to 1 dashboard. The highest-impact decision was subtraction.

**04 -- Remote research works with the right questions.** Interviewing Mei about her daily routine surfaced the pain points -- and the time-cost data we needed for ROI.
