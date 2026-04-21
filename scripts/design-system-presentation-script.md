# Presentation Script: Three Platforms. One Source of Truth.

**Project:** Raytail Multi-Platform Design System
**Presenter:** Harry Hein, Lead UX Designer
**Total Duration:** ~6-7 minutes
**Audience:** Design leaders, hiring managers, cross-functional teams

---

## Opening / Hero

**[~30 seconds]**

> *(stand still, let the title slide breathe for a beat)*
>
> The brand green changed. A simple hex value. One token. The team spent two full days updating components across every platform file. And QA still found fourteen screens they missed.
>
> *(pause)*
>
> That moment was the breaking point. Not because the color was wrong -- because the system made it impossible to get it right.

---

## 01 -- The Problem: The Breaking Point

**[~50 seconds]**

> At Raytail, we had three products sharing a single Figma file. A point-of-sale system for cashiers. A web dashboard for managers. A mobile app for staff. Three radically different interaction models -- touch targets, information density, gesture patterns -- all crammed into one library.
>
> The shared file was supposed to keep things consistent. Instead, it became a single point of failure. Every change rippled unpredictably. And every new designer who joined the team asked the same question on day one:
>
> *(pause, then deliver the quote with weight)*
>
> "I don't know which file is right."
>
> That was a new designer, three days into onboarding. Three days, and they still couldn't find the source of truth. Because there wasn't one.

---

## 02 -- Audit: What the Audit Revealed

**[~60 seconds]**

> Before proposing anything, I ran three audits -- tokens, components, and team interviews. Each one told the same story: drift at every level.
>
> *(gesture to data)*
>
> The token audit found forty-seven duplicate color values. The brand primary had drifted two to six shades from spec -- a different hex in POS, Web, and Mobile. Nobody noticed because nobody had a single source to check against.
>
> The component audit uncovered thirty-one near-duplicate components. Button height was 48 pixels in POS, 36 in Web, 44 in Mobile. Three teams, three interpretations of what they thought was the same button.
>
> *(slow down for this)*
>
> And the team interviews revealed that new designers took three days to onboard -- most of that time spent figuring out which components were current and which were abandoned. Tribal knowledge had replaced documentation.
>
> The root cause was clear: one shared library does not scale for three radically different surfaces.

---

## 03 -- Strategy: Old vs. New Mental Model

**[~45 seconds]**

> So I proposed a fundamental shift in architecture.
>
> *(gesture: left hand)*
>
> The old model: one library for all platforms. Fast to start. Catastrophic to maintain. Every change ripples unpredictably because there's no separation between shared foundations and platform-specific needs.
>
> *(gesture: right hand)*
>
> The new model: Foundation plus Platform layers. A shared core that defines what's universal -- then platform libraries that extend it without redefining the foundation. Changes flow down, never sideways.
>
> Level one is the Global Foundation. Raytail Style Guidelines -- primitives, typography, brand, base logic. Published once, consumed by all three platform libraries.
>
> Level two is the Platform Libraries. POS gets dark surfaces and large touch targets. Web gets light surfaces and dense tables. Mobile gets gesture-aware components. Each extends the foundation. None of them redefine it.

---

## 04 -- Token Architecture: Three Tiers. Zero Ambiguity.

**[~50 seconds]**

> The token system needed to be strict enough to prevent drift, but flexible enough to support three different surfaces. We designed a three-tier model.
>
> *(count on fingers as you go)*
>
> Tier one -- Reference tokens. Raw primitives. Green 500 is a specific hex value. These are never used in components directly. They're the atomic building blocks that only semantic tokens reference.
>
> Tier two -- Semantic tokens. Named by intent, not by value. "Action primary" resolves differently per platform. "Surface base" is a dark color on POS, white on Web. Same name, appropriate value for each context.
>
> Tier three -- Component tokens. Scoped overrides. "Button background primary" points to "action primary." You can reskin a component without touching globals. It's the escape hatch that never breaks the system.
>
> *(pause for emphasis)*
>
> What this meant in practice: a brand color change was now a single token update at tier one. It propagated automatically. No manual hunt. No missed screens.

---

## 05 -- Platform Decisions: POS -- Design for the Shop Floor

**[~40 seconds]**

> Each platform needed its own design logic. Let me walk through POS, which had the most extreme constraints.
>
> Every decision was shaped by the physical environment. High-ambient retail lighting meant dark surfaces by default. Touch hardware with no mouse meant forty-eight pixel minimum touch targets. Fast transaction queues meant the sidebar collapses to icons to maximize screen real estate.
>
> *(lean in slightly)*
>
> The constraint that mattered most: POS Button has no small variant. Thirty-two pixels is inaccessible on touchscreen hardware. This wasn't a design preference. It was a platform requirement baked directly into the component library.

---

## 06 -- Components: Atoms, Molecules, Organisms

**[~30 seconds]**

> The component strategy followed the same two-level split. Global atoms owned by the foundation -- color, type scale, icons, spacing. No platform can redefine these.
>
> Platform molecules -- POS gets a numpad and transaction rows. Web gets data tables and filter chips. Mobile gets list items and bottom sheets. Each platform builds what it needs from shared atoms.
>
> And platform organisms -- complex compositions like a full transaction panel or analytics header that only make sense in their platform context.

---

## 07 -- Governance: Rules That Prevent Drift

**[~35 seconds]**

> A design system without governance is a wiki that nobody reads. We established four rules, each addressing a specific failure mode from the old model.
>
> Foundation team owns level one. Breaking changes require cross-team coordination. Platform teams own level two -- they can add components freely but cannot redefine global tokens. Gaps become proposals, not workarounds.
>
> Naming convention: category, property, variant. Enforced globally. And documentation lives inside Figma, attached to the component. If the doc isn't attached, it doesn't exist.
>
> *(deliver this line with conviction)*
>
> The critical rule: global token updates sync all platforms on publish. Manual propagation is architecturally impossible. The system enforces consistency -- it doesn't rely on discipline.

---

## 08 -- Results: Before and After

**[~40 seconds]**

> *(scroll to results, let the numbers land)*
>
> Handover time went from three to five days down to less than one day. That is a seventy to ninety percent reduction. POS hit ninety percent because the components are simpler. Web landed at seventy because of more complex tables and data density.
>
> Duplicate token count: from forty-seven to zero.
>
> Manual style overrides: from many to zero.
>
> QA visual bugs: from routine to rare. Maintenance tickets dropped fifty to eighty percent across all three platforms.
>
> Designer onboarding: from roughly three days down to less than one.
>
> *(pause)*
>
> But the number that matters most to me is the next section.

---

## 09 -- Resolution: The Green Changed Again

**[~25 seconds]**

> *(slow, deliberate delivery)*
>
> The brand primary green changed again. This time: one token update. Every screen across POS, Web, and Mobile reflected it by end of day. QA flagged zero inconsistencies.
>
> The same change that took two days and missed fourteen screens now took minutes and missed nothing.
>
> The system shifted from designer overhead to a strategic asset.

---

## 10 -- Reflection: What I Would Revisit

**[~35 seconds]**

> No system ships perfectly, and I want to be honest about what I would do differently.
>
> Motion tokens. We left them out of version one. Platform teams implemented animations independently, creating jarring inconsistencies that only surfaced at QA. Motion should have been a foundation-level concern from the start.
>
> Accessibility tokens. Minimum contrast ratios should be token constraints, not designer knowledge. If the system can't enforce accessibility, it relies on individual awareness, and that doesn't scale.
>
> And component status labels -- stable, experimental, deprecated. Without them, teams consumed experimental components and hit breaking changes.
>
> *(wrap up with a forward look)*
>
> These are the things I would build into version two. The architecture supports all of them. It is a matter of sequencing, not rearchitecting.

---

## Closing

**[~15 seconds]**

> Three platforms. One source of truth. The goal was never to build a design system for its own sake. It was to make it impossible for the system to drift -- so the team could spend their time shipping real work instead of hunting inconsistencies.
>
> Thank you. I am happy to take questions.

---

## Timing Guide

| Section | Title | Duration |
|---------|-------|----------|
| Opening | Hero / Hook | ~30s |
| 01 | The Breaking Point | ~50s |
| 02 | What the Audit Revealed | ~60s |
| 03 | Old vs. New Mental Model | ~45s |
| 04 | Three Tiers. Zero Ambiguity. | ~50s |
| 05 | POS: Design for the Shop Floor | ~40s |
| 06 | Atoms, Molecules, Organisms | ~30s |
| 07 | Rules That Prevent Drift | ~35s |
| 08 | Before and After | ~40s |
| 09 | The Green Changed Again | ~25s |
| 10 | What I Would Revisit | ~35s |
| Closing | Wrap-up | ~15s |
| **Total** | | **~6 min 35 sec** |

---

## Presentation Tips

1. **Open with the pain, not the solution.** The two-day color change story is your hook. Let the audience feel the frustration before you reveal the fix.

2. **Slow down on the numbers.** When you hit the audit findings (47 duplicates, 31 near-duplicates, 3-day onboarding), pause after each one. Let them register.

3. **Use your hands for the architecture.** The old model vs. new model section works best with a physical gesture -- left hand for the flat single-file model, right hand for the layered foundation-plus-platform model.

4. **The quote is your emotional anchor.** "I don't know which file is right" should land quietly, not loudly. It is more powerful delivered softly.

5. **Let the resolution section breathe.** The green-changed-again moment is the payoff of the entire story. Slow your pace. Let the contrast between "two days, fourteen missed screens" and "minutes, zero missed" do the work.

6. **Be candid in the reflection.** Admitting what you missed (motion tokens, accessibility tokens) builds credibility. It shows systems thinking, not just execution.

7. **Do not read the metrics -- narrate them.** Instead of listing numbers, frame them as transformation: "Handover went from three to five days down to less than one."

8. **Keep the Q&A conversational.** Common questions will be about engineer adoption, cross-team governance, and how you measured the results. Prepare short, specific answers with examples.

9. **If presenting remotely:** Share the case study page in your browser and scroll through it as you speak. The visual flow of the page matches the script structure.

10. **If presenting in person:** Use a clicker and advance through screenshots of each section. Keep your body open to the audience, not turned toward the screen.
