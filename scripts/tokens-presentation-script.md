# Unified Design Tokens — Presentation Script

**Duration:** 6-7 minutes (with flexibility to 8 minutes for Q&A pauses)
**Tone:** Conversational professional, story-driven
**Setup:** Scrolling case study page open, advance through sections as you speak

---

## Opening / Hero (0:00 - 0:45)

*[Stand centered. Case study hero section visible with the title, metrics, and cover image.]*

> Here's a question for you. How many names can one variable have?

*[Pause 2 seconds. Let the question land.]*

> If you're working across six platforms — CSS, Swift, Kotlin, Flutter, JavaScript, JSON — the answer is six. One variable. Six names. And every single one of them was being translated by hand.

> I'm Harry Hein. I'm a Senior Product Designer at Raytail, and this is the story of how I built a Figma plugin that eliminated manual token translation across three development teams.

*[Gesture toward the hero metrics on screen.]*

> Fifty percent export time reduction. Near-zero naming errors. Six platform formats from a single source. Those are the results — but let me show you how we got there.

---

## 01 — The Problem (0:45 - 1:30)

*[Scroll to Section 01: "One Variable. Six Names. Zero Sync."]*

> The setup sounds simple. Designers define tokens in Figma. Developers use them in code. But the handoff was broken.

> Every release, developers spent two to three hours just fixing naming mismatches. CSS needs kebab-case. Swift needs PascalCase. Kotlin needs snake_case. The export from Figma used one format. Each platform needed a different one. The translation was manual every single time.

*[Pause briefly. Lower your voice slightly for emphasis.]*

> But the real cost wasn't the hours. It was the trust. After enough mismatches, developers stopped trusting the design file. They started hard-coding values. And that silent drift? It accumulated across six platforms until someone noticed the wrong button color — in production.

*[Scroll to the hook line: "What if we could export once and use everywhere?"]*

> So we asked a simple question: what if we could export once and use everywhere?

---

## 02 — Research / Discovery (1:30 - 2:30)

*[Scroll to Section 02: "The Discovery"]*

> I interviewed four designers and six developers across all three platform teams. The question was straightforward: what's the number one frustration in design-to-code handoff?

> The answer was unanimous — and honestly, it surprised me. It wasn't missing tokens. It wasn't wrong values. It was wrong names.

*[Scroll to the developer quote. Point to it or read it with a slightly different cadence to distinguish it as a quote.]*

> One frontend developer told me — and I'm paraphrasing — the values are always right in Figma, but by the time they reach code, the names are different. They spent more time renaming than implementing.

> So the gap wasn't between Figma and code. It was between Figma's naming conventions and each platform's naming conventions. And that translation layer? Manual, error-prone, repeated on every release.

*[Scroll to the Persona section. Gesture toward the pain points and stats.]*

> We mapped this to a primary persona — the frontend developer implementing tokens across six platforms. Two to three hours per sprint fixing mismatches. Eight to twelve naming errors per sprint. And eventually, total erosion of trust in the design file.

---

## 03 — Strategy / Four Core Jobs (2:30 - 3:30)

*[Scroll to Section 03: "Four Core Jobs"]*

> From those interviews, four jobs-to-be-done emerged. Each one mapped to a specific failure mode.

*[Walk through each job. Use your fingers to count them off or gesture to each list item.]*

> First — filter by token type. Colors, spacing, and typography don't all export the same way. Designers needed control over what gets exported, not an all-or-nothing dump.

> Second — support light and dark modes in a single pass. The old workflow meant running the plugin twice, then manually merging the results.

> Third — smart naming conventions. Apply camelCase, PascalCase, or snake_case automatically on export. Match the platform. Never touch the Figma source.

> Fourth — sync to Notion. A single source of truth where designers and developers see the same token data in real time. No more screenshots of Figma variables pasted into Slack.

*[Scroll to the Success Metrics section.]*

> We also defined how we'd know it worked. Zero semantic naming errors. Six platforms from one source. Over fifty percent reduction in theming time. And above ninety percent team adoption — because high adoption validates the abstraction is intuitive, not just technically correct.

---

## 04 — Design / Plugin Architecture (3:30 - 4:30)

*[Scroll to Section 04: "Four Stages. Zero Manual Translation."]*

> The plugin architecture followed a four-stage linear pipeline. Each stage reduces the chance of error before the next one.

*[Point to each timeline step as you describe it.]*

> Stage one: Select. Choose which token types to export — colors, spacing, typography, or all of them.

> Stage two: Configure. Set the naming convention per platform.

> Stage three: Preview. This is the critical one. See the generated code before you export. Catch errors at zero cost.

> Stage four: Export. Download to all six platforms in a single click. No manual translation.

*[Scroll to the "Why Preview Matters" card.]*

> Every tester in our usability sessions said the same thing about the preview panel — it caught errors they would have missed. Real-time validation turns a two-hour post-export fix into a two-second glance.

---

## 05 — Solution / Smart Controls (4:30 - 5:15)

*[Scroll to Section 05: "Every Decision in One Panel"]*

> The final UI consolidated every export decision into a single screen. No wizards, no multi-step flows. One panel, four control groups: collections, modes, naming, and format.

> But the detail that drove adoption was smart defaults. The plugin defaulted to camelCase for JavaScript projects, snake_case for Python. Less thinking meant more usage.

*[Pause for emphasis.]*

> Ninety-two percent of token releases now go through this plugin pipeline.

---

## 06 — Results (5:15 - 5:50)

*[Scroll to Section 06: "Before & After." Gesture to the comparison table.]*

> Let me give you the before and after. Token export time went from forty-five to sixty minutes down to fifteen to thirty. Naming errors went from eight to twelve per release down to zero. QA cycles dropped from two or three per release to zero or one. Platform coverage expanded from three or four platforms to six. And sync latency went from manual, one to two day turnaround, to real-time.

*[Gesture toward the three result cards.]*

> All three teams adopted in sprint one. Ninety-two percent plugin adoption. Developer satisfaction at four-point-three out of five.

---

## 07 — Validation / Usability Testing (5:50 - 6:15)

*[Scroll to Section 07: "Usability Testing"]*

> We tested with three designers and two developers before launch. Two findings shaped the final release.

> First, the collection selector needed search. Teams with forty-plus collections couldn't scroll through a flat list. Adding search dropped selection time from fifteen seconds to under three.

> Second, the preview panel was the most praised feature. One developer described it as the single reason they trusted the plugin over their previous manual process. That's the line that told us we'd solved the trust problem, not just the naming problem.

---

## 08 — Reflection + What Came Next (6:15 - 7:00)

*[Scroll to Section 08: "Five Technical Lessons." Don't read all five — pick the strongest two or three.]*

> I'll share two lessons that stuck with me. First: preserve original casing. Store token names as-is in Figma. Apply conventions only at export. The moment you mutate the source, you lose the ability to export to a different convention later.

> Second: smart defaults win adoption. The plugin that requires zero configuration on first use is the plugin that gets used.

*[Scroll to the "Time Machine" section, then to the Orchestra Syncs callout.]*

> And if I could go back? I'd ship a headless CLI and a GitHub Action from day one. Developers still had to manually trigger exports, which broke their CI/CD flow.

*[Gesture toward the Orchestra Syncs comparison.]*

> That limitation — along with every other ceiling this plugin hit — became the product brief for Orchestra Syncs. The plugin became a platform. Auto-sync on push. Plugin plus CLI plus GitHub Action. Full CI/CD pipeline. Every limitation turned into a feature.

---

## Closing (7:00 - 7:15)

*[Scroll to the ending section: "Let's build something great."]*

> This project taught me that design systems aren't just about tokens and components. They're about trust. The moment developers trust the design file, everything accelerates. The moment they don't, everything drifts.

> Thank you. I'm happy to take questions.

*[Pause. Smile. Wait for applause or questions.]*

---

## Timing Summary

| Section | Duration | Cumulative |
|---------|----------|------------|
| Opening / Hero | 0:45 | 0:45 |
| 01 — The Problem | 0:45 | 1:30 |
| 02 — Research / Discovery | 1:00 | 2:30 |
| 03 — Strategy / Four Core Jobs | 1:00 | 3:30 |
| 04 — Design / Plugin Architecture | 1:00 | 4:30 |
| 05 — Solution / Smart Controls | 0:45 | 5:15 |
| 06 — Results | 0:35 | 5:50 |
| 07 — Validation | 0:25 | 6:15 |
| 08 — Reflection + What Came Next | 0:45 | 7:00 |
| Closing | 0:15 | 7:15 |

**Total: ~7 minutes** (trim Reflection or Strategy to hit 6 minutes; expand Research or Results for 8 minutes)

---

## Presentation Tips

- **Scroll, don't click.** The case study is a single scrolling page. Advance smoothly as you talk — don't let the audience wait for page loads.
- **Pause after the opening question.** Let "How many names can one variable have?" sit for two full seconds. Silence creates tension.
- **Use the comparison table as your anchor.** The Before/After table in Section 06 is the most persuasive visual. Slow down there and let people read it.
- **Don't read all five lessons.** Pick two, deliver them with conviction, and move to the Orchestra Syncs evolution. Listing all five kills momentum.
- **End on trust, not metrics.** The closing line about trust vs. drift is more memorable than any number. Let it be the last thing they hear before Q&A.
- **Know your cuts.** If you're running long, cut the Persona section (fold it into Research) and shorten Strategy to just naming the four jobs without explaining each one.
- **Voice modulation.** Drop your voice for the "real cost" paragraph in Section 01 and for the developer quote in Section 02. These are emotional beats — give them room.
