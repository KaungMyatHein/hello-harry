# Recovery TODO — Features to Restore

## Context
Git restore operation accidentally reverted 5 case study files to an older commit state.
Section 01 content was successfully restored but other features added during the session were lost.

## Files Affected
ALL 9 case study files need these features re-added:

### Missing from ALL files:
- [ ] Scroll indicator (js/scroll-indicator.js) — script reference
- [ ] Ending section (cs-ending) — full CTA section before More Case Studies
- [ ] Time Travel bento cards (cs-timetravel) — 4-card grid in Time Machine section
- [ ] Persona bento section (cs-persona-section) — full bento card grid after Research
- [ ] KPI section (cs-kpi-section) — Design + Business KPIs before Implementation
- [ ] HTML balance check (all files should be diff:0)

### Missing from 5 files (dashboard, design-system, karaoke, retail, tokens):
- [ ] Cursor elements (id="cursor", id="cursorDot")
- [ ] atoms.js script reference
- [ ] tts.js script reference
- [ ] lightbox.js script reference
- [ ] Page loader dismiss JS (pageLoader classList done)

### Features that ARE working (don't touch):
- chat.js + chat.css — present in all files ✅
- Chat trigger HTML — present ✅
- Chat panel HTML — present ✅
- Chat overlay HTML — present ✅
- Page loader CSS — present ✅
- Page loader HTML — present ✅
- Glass effect tokens (tokens.css) — working ✅
- Section 01 content — RESTORED ✅

## CSS that exists in files but needs HTML:
- cs-ending CSS — exists in all files
- cs-timetravel CSS — exists in all files
- cs-persona-section CSS — exists in all files
- cs-kpi-section CSS — exists in all files
- cs-timeline CSS — exists in all files
- TTS CSS — exists in all files
- Lightbox CSS — exists in all files

## Data Reference (for re-creating content):

### Time Travel bento cards per file:
- retail: Pre-launch usability testing / Lab ≠ Real environment / Shadow testing in stores / Catch edge cases
- dashboard: Structured usability test / Anecdote vs evidence / A/B test with time-tracking / Bulletproof ROI
- design-system: Motion tokens from day one / Interaction consistency / Motion token tier in v1 / Zero animation QA
- tokens: CLI export alongside GUI / Manual step in automation / CLI wrapper + GitHub Action / Fully automated
- golden-paths: Persona calibration depth / Same input = same output / Behavioral trait injection / 3x more findings
- resume-pipeline: Suggestion overwhelm in v1 / More options ≠ better / Impact-ranked progressive disclosure / Higher adoption
- jar-aye-child: Hamburger → bottom nav / Children don't explore menus / 4-tab bottom nav / Faster discovery
- jar-aye-parent: Cross-child dashboard / Multi-child = multi-friction / Family summary screen / 50% less navigation
- karaoke: Social features in MVP / Solo karaoke ≠ karaoke / Lightweight social layer / 2x engagement

### KPI data per file:
- retail: <30s return time, 0.80+ clarity, >200% ROI, 0 onboarding dependency
- dashboard: 0 min prep, Real-time data, >100% ROI, 0 copy-pastes
- design-system: <1 day handover, 0 duplicate tokens, >50% fewer QA, <1 day onboarding
- tokens: 0 naming errors, 6 platforms, >50% time reduction, >90% adoption
- golden-paths: <60s feedback, >80% blocker match (Design KPIs only)
- resume-pipeline: <15 min per app, 100% voice preserved, 4→1 tools, >2x callbacks
- jar-aye-child: 4/5 unassisted, <5 min per question, >60% self-assessment, Persist after wrong
- jar-aye-parent: <50s comprehension, 4/5 weakest topic ID, >4.5/5 sub clarity, Renew intent
- karaoke: Artist-first search, KBZ Pay primary, Sub model, MVP ship

### Persona data per file:
- retail: The Cashier (1000s txns, 60s returns, 4 hidden features)
- dashboard: Mei, Ops Manager (30min ritual, 12 copy-pastes, 3 tools)
- design-system: Platform Designer (47 duplicates, 31 components, 3 days onboard)
- tokens: Frontend Developer (6 conventions, 8-12 errors, 2-3h fixing)
- golden-paths: Marcus (6/8 skip, 7/8 vague, 8/8 would test)
- resume-pipeline: Sarah (10/12 reuse, 8/12 quit AI, 11/12 can't see gap)
- jar-aye-child: Maya age 9 (3 sec window, #1 fear wrong, 3 user types)
- jar-aye-parent: Aye (anxiety money, can't evaluate, 2 children)
- karaoke: Karaoke Enthusiast (80% stress relief, 65% artist, 85% KBZ Pay)

### Ending section content (same for all):
- "Thanks for Reading" label
- "Let's build something great" heading
- Email Me button + LinkedIn button
- Contact: kaungmyat9702@gmail.com, Open to Work, Senior Product Designer

### Next Case Study pairings:
- retail → dashboard + design-system
- dashboard → retail + golden-paths
- design-system → tokens + retail
- tokens → design-system + resume-pipeline
- golden-paths → resume-pipeline + jar-aye-child
- resume-pipeline → golden-paths + retail
- jar-aye-child → jar-aye-parent + golden-paths
- jar-aye-parent → jar-aye-child + dashboard
- karaoke → retail + jar-aye-child
