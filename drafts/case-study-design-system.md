# Three Platforms. One Source of Truth.

> One Figma file for POS, Web, and Mobile. A brand color change took 2 days and QA still found 14 mismatched screens.

---

## Metadata

| | |
|---|---|
| **Role** | Lead UX Designer, Raytail |
| **Team** | 1 Lead Designer, 3 Platform Design Teams (POS, Web, Mobile) |
| **Year** | 2025 |

**Responsibilities:**
- Led multi-platform design system architecture and governance
- Ran token and component audits across 3 platforms
- Designed two-level foundation + platform library structure
- Defined naming conventions and contribution model

## Key Metrics

- **70-90%** Faster Handover
- **3** Platforms Unified
- **100%** Design Consistency

---

## 01 — The Breaking Point

The brand green changed. The team spent two days manually updating components across every platform file. QA found 14 screens they missed.

Three products: POS for cashiers, Web dashboard for managers, Mobile for staff. Three interaction models. One team trying to keep them consistent with a single Figma file.

**That file was the problem.**

---

## 02 — What the Audit Revealed

**Token Audit:** 47 duplicate color values. `color/brand/primary` had drifted 2-6 shades from spec -- #1B7A4A in POS, #1C7B4B in Web, #1A794A in Mobile.

**Component Audit:** 31 near-duplicate components. Fixing one never fixed the others. Button height: 48px in POS, 36px in Web, 44px in Mobile.

**Interviews:** "I don't know which file is right." New designers took 3 days to onboard.

**The root cause was clear: one shared library doesn't scale for three radically different surfaces.**

---

## 03 — Old vs. New Mental Model

**Old Model:** One library for all platforms. Fast to start. Catastrophic to maintain. Changes ripple unpredictably.

**New Model:** Foundation + Platform layers. Shared core. Each platform extends without redefining the foundation.

---

## 04 — Two-Level Architecture

**Level 1 -- Global Foundation:** Raytail Style Guidelines. Primitives, Typography, Brand, Base Logic. Published once. Consumed by all.

**Level 2 -- Platform Libraries:**
- **POS:** 48px targets, dark surface.
- **Web:** Light surface, dense tables.
- **Mobile:** Gesture-aware, bottom sheets.

**How do the tokens flow through this?**

---

## 05 — Token Architecture

Three tiers. Zero ambiguity.

- **Tier 1 -- Reference:** Raw primitives. `color/green/500: #1B7A4A`. Never used in components directly.
- **Tier 2 -- Semantic:** Named by intent. `action/primary` resolves differently per platform. `surface/base` is #0D0E0F on POS, #FFFFFF on Web.
- **Tier 3 -- Component:** Scoped overrides. `button/bg/primary` points to `action/primary`. Reskin without touching globals.

---

## 06 — POS Design Decisions

| Constraint | Decision | Outcome |
|-----------|----------|---------|
| High-ambient retail lighting | Dark surface default | Legible under direct and ambient light |
| Touch hardware, no mouse | 48px minimum touch target | Tap errors reduced |
| Fast transaction queue | Sidebar collapses to icon-only | Maximum screen area for transactions |
| Payment failure is costly | High-contrast error state | Errors caught at POS, not reconciliation |
| Scanning text is slow | Image-forward product grid | Faster item selection |

---

## 07 — Component Strategy

- **Atoms (Global):** Color, Type Scale, Icon Set, Spacing, Radius, Shadow. Defined once. Inherited everywhere.
- **Molecules (Platform):** POS: Numpad, Txn Row. Web: Data Table, Filter Chip. Mobile: List Item, Bottom Sheet.
- **Organisms (Platform):** POS: Txn Panel, Product Grid. Web: Analytics Header, Inventory Table.

Constraint: POS Button has no Small variant -- 32px is inaccessible on touchscreen.

---

## 08 — Governance

- **Foundation Team** owns Level 1. Breaking changes require cross-team coordination.
- **Platform Teams** own Level 2. Can add components freely. Cannot redefine global tokens. Gaps become proposals, not workarounds.
- **Naming Convention:** `category/property/variant`. Enforced globally. Inconsistent naming is the #1 cause of drift.
- **Docs live in Figma.** Docs that drift from the component are worse than no docs.
- **Global token update** syncs all platforms on publish. Manual propagation is architecturally impossible.

---

## 09 — Before & After

| Metric | Before | After |
|--------|--------|-------|
| Handover Time | 3-5 days | <1 day |
| Manual Style Overrides | Many | Zero |
| QA Visual Bugs | Routine | Rare |
| Duplicate Token Values | 47 | 0 |
| Designer Onboarding | ~3 days | <1 day |

- **70-90%** faster handover. POS at 90% (simpler components), Web at 70% (more complex tables).
- **50-80%** fewer maintenance tickets.

---

## 10 — Resolution

Brand primary green changed again. One token update. Every screen across POS, Web, and Mobile reflected it by end of day. QA flagged zero inconsistencies.

The system shifted from designer overhead to a strategic asset.

---

## 11 — What I Would Revisit

**Motion Tokens:** Left out of v1. Platform teams implemented animations independently -- jarring inconsistencies at QA.

**Accessibility Tokens:** Minimum contrast ratios should be token constraints, not designer knowledge.

**Component Status:** Without `stable / experimental / deprecated` labels, teams consumed experimental components and hit breaking changes.

**Theming Architecture:** Two-level model supports white-labeling -- but only if semantic tokens never reference raw hex directly.
