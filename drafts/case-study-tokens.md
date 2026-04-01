# Accelerating Development with Unified Design Tokens

> Token names don't match between Figma and code. CSS wants camelCase, Flutter wants snake_case. Developers spend 2-3 hours per release fixing naming inconsistencies.

---

## Metadata

| | |
|---|---|
| **Role** | Designer + Developer (dual role), Raytail |
| **Team** | 1 Designer/Developer, 3 Development Teams (POS, Web, Mobile) |
| **Year** | 2025 |

**Responsibilities:**
- Identified token naming mismatch as the core handoff bottleneck
- Designed and built a Figma plugin for multi-platform token export
- Ran usability testing with designers and developers pre-launch
- Shipped export support for 6 platforms (CSS, JS/TS, Flutter, Kotlin, Swift, JSON)

## Key Metrics

- **50%** Export Time Reduction
- **~100%** Naming Error Reduction
- **6** Platform Formats

---

## 01 — The Problem

One variable. Six naming conventions. Zero sync.

Designers export tokens from Figma. Developers manually translate to platform formats. CSS needs camelCase. Swift needs PascalCase. Kotlin needs snake_case. Every release, developers spend 2-3 hours fixing naming mismatches.

Every sync failure erodes trust between design and engineering. The design system promises speed -- manual token exports break that promise.

**What if we could export once and use everywhere?**

---

## 02 — The Discovery

Interviewed 4 designers and 6 developers across all 3 platform teams.

Key finding: naming mismatches were the #1 design-to-code handoff frustration. Not missing tokens. Not wrong values. Wrong names.

The gap isn't between Figma and code. It's between Figma variables and platform-specific naming conventions.

---

## 03 — Four Core Jobs

1. **Filter by Token Type** -- Colors, spacing, typography, shadows don't all export the same way. Give designers control.
2. **Support Light & Dark Modes** -- One variable, multiple theme values. Export them in a single pass.
3. **Smart Naming Conventions** -- Apply camelCase, PascalCase, or snake_case on export. Match platform norms automatically.
4. **Sync to Notion** -- Single source of truth. Designers and developers see the same data in real-time.

---

## 04 — Plugin Architecture

Four stages. Zero manual translation.

1. **Discovery** -- Read all Figma variables from selected collections automatically.
2. **Config** -- Choose naming convention. Select which modes to include.
3. **Preview** -- See generated code in real-time before export. Catch errors at zero cost.
4. **Export** -- CSS, JS/TS, Flutter, Kotlin, Swift, JSON -- all from one plugin.

**The preview stage turned out to be the hero.**

---

## 05 — Smart Controls

Every export decision in one panel.

- **Collections** -- Select which variable groups to export. Filter by type.
- **Modes** -- Include light/dark/custom theme variations in a single export.
- **Naming** -- camelCase for JS, PascalCase for Swift, snake_case for Python/SQL. Applied on export, not in Figma.
- **Format** -- CSS/SCSS variables, JS objects, Dart constants, Kotlin objects, Swift structs, raw JSON.

---

## 06 — Before & After

| Metric | Before | After |
|--------|--------|-------|
| Token Export Time | 45-60 min | 15-30 min |
| Naming Errors | 8-12 per release | 0 |
| QA Cycles | 2-3 per release | 0-1 per release |
| Platform Coverage | 3-4 platforms | 6 platforms |
| Sync Latency | Manual, 1-2 days | Real-time |

- **3 teams** adopted the plugin within the first sprint.
- **92%** of token releases now use the plugin pipeline.
- **4.3/5** post-launch developer satisfaction.

This plugin is the delivery mechanism for the multi-level design system. Without it, the three-tier architecture would require manual translation -- reintroducing the exact drift the system was built to eliminate.

---

## 07 — Usability Testing

Tested with 3 designers and 2 developers before launch.

**Finding 01:** Collection selector needed search for 40+ collections. Developers requested CLI export -- added to v2 roadmap.

**Finding 02:** Preview panel was the most praised feature. Every tester said it caught errors they would have missed.

---

## 08 — Five Technical Lessons

**01 -- Preserve original casing.** Store token names as-is in Figma. Apply conventions only at export. Never overwrite the source.

**02 -- Test multi-segment names.** "color-primary-hover-dark" exposes casing logic bugs. Test edge cases early.

**03 -- Preview catches errors.** Real-time validation eliminates most export bugs before they ship.

**04 -- Proxy simplifies CORS.** Local server handles Notion API auth. Eliminates cross-origin headaches.

**05 -- Smart defaults win adoption.** Default camelCase for JS, snake_case for Python. Less thinking = more adoption.
