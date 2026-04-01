# 47 Applications. 2 Interviews.

Designers spend 40 minutes per application manually tailoring resumes with Google Docs and ChatGPT. The output is generic. 47 apps, 2 callbacks.

---

## Metadata

| | |
|---|---|
| **Role** | Product Designer |
| **Team** | Solo |
| **Scope** | AI resume pipeline, Designer OS |
| **Year** | 2026 |

**Responsibilities:**
- End-to-end product design from research through shipped feature
- Conducted 12 semi-structured designer interviews and 5 moderated usability tests
- Designed gap analysis engine and suggestion ranking system
- Prompt engineering for JD parsing, gap analysis, and suggestion generation

## Key Metrics

- **40 to 15 min** Per Application
- **4 to 1** Tools Replaced
- **<5min** Cover Letter

---

## 01 -- The Nightly Ritual

*Six weeks in. The spreadsheet had 47 rows. Two were highlighted green.*

> "Every evening I opened a new Google Doc, pasted the job description, and manually highlighted keywords I needed to match."
> -- Sarah, UX Designer (Composite persona from 12 designer interviews)

Google Doc for keyword hunting. ChatGPT for generic rewrites. Resume v47 -- still the same document. Every application started from scratch. No memory of what worked. No pattern from the 46 that didn't land.

**She wasn't failing. She was invisible.**

---

## 02 -- What 12 Designers Said

*Semi-structured interviews. 3-8 years experience. Jan-Feb 2026.*

- **10/12** reused the same resume across roles -- no structured starting point.
- **8/12** stopped using AI rewrite tools -- outputs didn't sound like them.
- **11/12** couldn't see the gap between what they wrote and what the JD wanted.

Three design decisions from these findings: base resume first (give them a structured starting point), gaps before praise (show problems first), no full AI rewrite (preserve voice and authenticity).

**The problem isn't the resume. It's the process.**

---

## 03 -- The Core Bet

*Treat the resume as a living argument. Every job description is a new brief.*

If AI can analyze a JD against the designer's actual resume data -- surface gaps, rank by impact, generate rewrite-ready suggestions -- the designer gets intelligence instead of guesswork. Build the engine once. Run it for every application.

**Why not something simpler?**

- **Rejected: Chrome Extension** -- Keyword matching without resume context. Too shallow.
- **Rejected: Figma Plugin** -- Wrong context. Resume editing happens in a doc editor.
- **Rejected: Simple Checklist** -- Still requires the designer to do all cognitive work.
- **Chosen: Integrated Pipeline** -- Base resume + JD input + AI gap analysis + ranked suggestions + cover letter. Full context, one environment.

**What does the actual pipeline look like?**

---

## 04 -- How It Was Built

1. **Vibe Code with Claude** -- Working proof of concept through conversational coding, validating pipeline logic before any pixel work.
2. **Sync Variables as Tokens** -- Design variables from codebase synced as Figma tokens. Design and code stay in lockstep.
3. **Create Components** -- Component library in Figma backed by synced tokens.
4. **Prototype, Test & Iterate** -- Figma Make prototypes. 5 moderated usability tests. Weekly reviews with 3 beta testers. Iterations shared with 8 beta users from the Designer OS community.

---

## 05 -- The Pipeline

*Six stages. One source of truth.*

![The Engine -- Base Resume builder](images/resume-builder-resources/the-engine.png)

1. **Base Resume** -- Split-panel editor with live PDF preview. The source of truth.
2. **Paste the JD** -- Any job board. System normalizes messy copy-paste.
   > `video` images/resume-builder-resources/addin jd in analyzer.mov
3. **AI Analyzes** -- Claude reads JD vs resume. Extracts skills, seniority signals, culture language.
   > `video` images/resume-builder-resources/analyze the gap.mov
4. **Gap Analysis** -- Match score + missing keywords + role intelligence in plain language.
5. **Suggestions** -- Specific rewrites ordered by impact. Apply, skip, or modify.
   > `video` images/resume-builder-resources/AI Suggesst, Designer Decide.mov
6. **Cover Letter** -- JD + resume to three-paragraph draft in under 5 minutes.
   ![Cover letter -- generated](images/resume-builder-resources/cover-letter-filled.png)

---

**Full Demo:**
> `video` images/resume-builder-resources/resume-builder-concept-video.mov

**UI Components:**
![UI Components overview](images/resume-builder-resources/Componnet.png)

---

## 06 -- Key Design Decisions

**01 -- Base Resume First.** The analyzer needs real data to measure the gap. Everything downstream depends on it.

**02 -- Gaps Before Praise.** Show problems first. Inverted from instinct -- drives action over reassurance.

**03 -- No Full AI Rewrite.** Fabricates claims, loses the designer's voice. Suggestions + editorial control preserve authorship.

**04 -- AI Badge Gone on Export.** A working-session marker only. The final deliverable is always clean.

**What we got wrong first:** V1 showed all suggestions simultaneously -- users felt overwhelmed. Added impact ranking so highest-leverage changes surface first. 3/5 participants said gap analysis felt discouraging. Softened from "missing" to "opportunity to strengthen."

---

## 07 -- Before & After

| Metric | Before | With Pipeline |
|--------|--------|--------------|
| Resume tailoring | ~40 min per role | ~15 min |
| Keyword gap analysis | Manual/guesswork | Structured in seconds |
| Cover letter | ~20 min per role | <5 min |
| Tools required | Google Doc + ChatGPT + manual | One pipeline |

---

## 08 -- Sarah's Story, Week Three

*She ran the pipeline for a Stripe role. Score: 74. Top gap: design systems at scale.*

One bullet rewritten. Applied. 5 tailored applications in 2 weeks -- 2 interview callbacks. Compared to 2 from her previous 47 generic applications.

The pipeline didn't guarantee interviews. It removed the bottleneck that made tailoring feel impossible.

---

## 09 -- Planned Metrics

*Signals to track post-launch for real-value validation.*

1. **Free to Pro Upgrade Driver** -- Is the JD Analyzer the feature that pushes free users to upgrade?
2. **24h Activation to Retention** -- Do users who run a JD analysis within 24 hours retain longer?
3. **Organic Reach via Shares** -- Every exported resume is a potential touchpoint. Tracking share-to-view ratio.

---

## 10 -- What This Taught Me

**01 -- Intelligence Over Automation.** Gap analysis + editorial control delivers 80% of time savings with 100% of authenticity.

**02 -- The Engine Model.** Build the Base Resume once. Every application is a run of that engine -- not a blank page.

**03 -- Context Changes Everything.** The same resume data produces different tailoring for each role. Intelligence is in the comparison.

**04 -- Trust as UX.** A designer who knows AI can't silently change their resume will engage with suggestions more openly. Agency builds trust.

---

## Key Takeaway

47 applications without systematic gap analysis produces 47 isolated attempts -- not 47 data points that make the 48th stronger. The pipeline doesn't just save time. It closes the intelligence gap between how designers present themselves and what hiring teams are looking for.

**Tools:** Claude (Anthropic), Figma, Next.js, Supabase
