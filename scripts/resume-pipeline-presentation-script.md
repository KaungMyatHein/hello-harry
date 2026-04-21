# AI Resume Pipeline -- Presentation Script

**Total Duration:** 6--7 minutes
**Tone:** Conversational professional. Story-driven. You are walking the audience through a real problem you lived, researched, and solved.
**Pacing:** Slower on the hook and persona moments. Brisker through the pipeline walkthrough. Land hard on the results.

---

## (01) The Nightly Ritual -- The Hook

**Time:** ~1 minute
**Visual:** Hero section. "47 Applications. 2 Interviews." large on screen.

> Forty-seven applications. Two interviews. That was the scoreboard for Sarah -- a composite persona built from twelve real designer interviews I conducted.

> Every evening, same ritual. Open a new Google Doc. Paste the job description. Manually highlight keywords. Switch to ChatGPT for generic rewrites that never sounded like her. Resume version forty-seven was fundamentally the same document as version one.

*[Pause. Let the number land.]*

> She wasn't failing. She was invisible. Her resume said the right things -- in the wrong language for each specific role. And she had no systematic way to see the gap.

> So the question became: what if the problem isn't the resume itself -- but the process of tailoring it?

---

## (02) What 12 Designers Said -- Research

**Time:** ~1 minute
**Visual:** Research findings list with bold stats.

> I spoke with twelve product designers between January and February 2026. Semi-structured interviews, three to eight years of experience. Three patterns showed up in almost every conversation.

> Ten out of twelve reused the same resume across roles. No structured starting point meant no structured variation.

> Eight out of twelve had stopped using AI rewrite tools entirely. The outputs didn't sound like them -- fabricated claims, corporate tone, lost personality.

> And eleven out of twelve couldn't see the gap between what they wrote and what the JD actually wanted. They were guessing.

*[Gesture toward the screen.]*

> Three design principles fell directly out of these findings. Base resume first -- give designers a structured starting point they own. Gaps before praise -- show problems before reassurance. And no full AI rewrite -- preserve voice and authenticity at every step.

---

## (Persona) Sarah

**Time:** ~30 seconds
**Visual:** Persona bento card with stats (40 min per app, 47 to 2 callbacks).

> So let me ground this in one person. Sarah. Product designer, active job search. Forty minutes per application, manually. Forty-seven applications sent, two callbacks. Not because her work isn't strong -- but because her resume doesn't change enough between applications to signal a real fit.

> Her daily friction: reusing the same resume, quitting AI tools that strip her voice, and having no structured way to compare herself against the JD. That's the user we're designing for.

---

## (03) The Core Bet -- Strategy

**Time:** ~45 seconds
**Visual:** Comparison table showing rejected approaches vs. chosen integrated pipeline.

> We explored four approaches. A Chrome extension -- rejected, keyword matching without resume context is too shallow. A Figma plugin -- wrong context entirely, resume editing happens in a doc editor. A simple checklist -- still requires the designer to do all the cognitive work.

> The bet we made: an integrated pipeline. Base resume plus JD input plus AI gap analysis plus ranked suggestions plus cover letter. Full context, one environment.

*[Advance to success metrics.]*

> We defined four KPIs upfront. Under fifteen minutes per application. One hundred percent candidate voice preserved. Four tools consolidated to one. And more than two-x improvement in interview callback rate.

---

## (04) How It Was Built -- Process

**Time:** ~30 seconds
**Visual:** Build process list.

> The build followed a deliberate sequence. Vibe code first with Claude -- working proof of concept through conversational coding, validating pipeline logic before any pixel work. Then sync design variables from the codebase as Figma tokens so design and code stay in lockstep. Components built on top of those synced tokens. And finally -- prototype, test, iterate. Five moderated usability tests. Weekly reviews with three beta testers. Iterations shared with eight beta users.

---

## (05--06) The Pipeline -- Five Stages

**Time:** ~1 minute 30 seconds
**Visual:** Pipeline sidebar with five steps. Advance through each as you narrate.

> Here is the pipeline from the designer's perspective. Five stages.

*[Step 1: Base Resume]*

> Stage one. A split-panel editor with live PDF preview. Edit on the left, see your resume rendered on the right in real time. This is your single source of truth for every application.

*[Step 2: Paste the JD]*

> Stage two. Drop in a raw job description -- messy formatting, bullet points, whatever. The AI normalizes it into structured role data: title, seniority, required skills, culture signals.

*[Step 3: AI and Gap Analysis]*

> Stage three -- and this is the core of the product. The AI reads your resume and the JD, then maps them against each other. You get a match score, a list of missing keywords, and role intelligence. Explained in plain language. No jargon. Just what's missing and why it matters.

*[Step 4: Suggestions]*

> Stage four. Impact-ranked rewrites for each gap. The AI proposes changes -- you decide what to keep. Editorial control stays with you. Nothing gets changed without your approval.

*[Step 5: Cover Letter]*

> Stage five. A three-paragraph cover letter draft generated from the JD plus your resume context. Under five minutes. Structured, specific, and already tailored to the role.

---

## (07) Key Design Decisions

**Time:** ~1 minute
**Visual:** Four lessons plus the "What We Got Wrong" card.

> Four deliberate choices -- and one mistake.

> Base resume first. The analyzer needs real data to measure the gap. Everything downstream depends on a structured starting point the designer owns.

> Gaps before praise. Show problems first. This is inverted from instinct -- most tools lead with encouragement. But surfacing gaps first drives action over reassurance.

> No full AI rewrite. AI fabricates claims and loses the designer's voice. Suggestions plus editorial control preserve authorship.

> And -- AI badge gone on export. The AI-assisted markers are a working-session indicator only. The final exported resume is always clean.

*[Pause. Shift tone slightly.]*

> Now, what we got wrong. Version one showed all suggestions simultaneously. Users felt overwhelmed. We added impact ranking so the highest-leverage changes surface first. And separately -- three out of five test participants said gap analysis felt discouraging. We softened the language from "missing" to "opportunity to strengthen."

---

## (08--09) Before and After / Sarah's Resolution

**Time:** ~45 seconds
**Visual:** Before/After comparison table, then Sarah's week-three story.

> Here is the before and after. Resume tailoring: forty minutes down to fifteen. Keyword gap analysis: manual guesswork to structured in seconds. Cover letter: twenty minutes down to under five. And four separate tools consolidated into one pipeline.

*[Advance to Sarah's resolution.]*

> Back to Sarah. Three weeks after she started using the pipeline, she ran it for a Stripe role. Match score: seventy-four. Top gap identified: design systems at scale. One bullet rewritten to address that specific gap. She applied.

> Five tailored applications in two weeks produced two interview callbacks -- compared to two callbacks from her previous forty-seven generic applications.

> The pipeline didn't guarantee interviews. It removed the bottleneck that made tailoring feel impossible. Each application became a run of the engine -- not a blank page.

---

## (10--11) Planned Metrics and Lessons

**Time:** ~45 seconds
**Visual:** Planned metrics, then four lessons cards.

> Post-launch, we are tracking three signals. First, is the JD Analyzer the feature that pushes free users to upgrade? Second, do users who run an analysis within twenty-four hours of signup retain longer? And third, every exported resume is a potential touchpoint -- tracking the share-to-view ratio as an organic acquisition signal.

*[Advance to lessons.]*

> Four lessons from building this pipeline.

> Intelligence over automation. Gap analysis plus editorial control delivers eighty percent of time savings with one hundred percent of authenticity.

> The engine model. Build the base resume once. Every application is a run of that engine. Structure compounds.

> Context changes everything. The same resume data produces different tailoring for each role.

> And trust as UX. A designer who knows AI cannot silently change their resume will engage with suggestions more openly. Agency builds trust. Transparency builds adoption.

---

## (Time Machine) If I Could Go Back

**Time:** ~20 seconds
**Visual:** Time Machine cards.

> If I could go back -- I assumed showing all suggestions at once would maximize impact. What I missed is that more options does not mean better. Users froze when presented with twenty-plus suggestions. What I would do differently: impact-ranked progressive disclosure. Show the top three highest-impact changes first, reveal more on demand. Expected outcome: higher adoption because users aren't overwhelmed by choice.

---

## Closing

**Time:** ~15 seconds
**Visual:** CTA section.

> That is the AI Resume Pipeline. From forty minutes of guesswork to fifteen minutes of intelligence. I am open to senior roles in product and UX -- looking for a team that ships things and cares whether they work. Thank you.

---

## Timing Summary

| Section | Duration |
|---------|----------|
| (01) The Nightly Ritual -- Hook | ~1:00 |
| (02) What 12 Designers Said -- Research | ~1:00 |
| (Persona) Sarah | ~0:30 |
| (03) The Core Bet -- Strategy | ~0:45 |
| (04) How It Was Built -- Process | ~0:30 |
| (05--06) The Pipeline -- Five Stages | ~1:30 |
| (07) Key Design Decisions | ~1:00 |
| (08--09) Before/After and Resolution | ~0:45 |
| (10--11) Planned Metrics and Lessons | ~0:45 |
| (Time Machine) If I Could Go Back | ~0:20 |
| Closing | ~0:15 |
| **Total** | **~6:20 -- 7:00** |

---

## Presentation Tips

- **Open slow, close fast.** The hook and persona sections need breathing room. The pipeline walkthrough should feel confident and fluid.
- **Pause after key numbers.** "47 applications, 2 interviews" -- let the audience do the math. "10 out of 12" -- let it register.
- **Use the visuals as anchors, not crutches.** Point at the screen when advancing pipeline steps. Look at the audience when delivering insight lines.
- **The "What We Got Wrong" moment is your credibility play.** Lean into it. Hiring managers remember honesty over polish.
- **Sarah is the through-line.** She opens the story and closes it. Reference her by name when you return to the resolution -- it creates emotional payoff.
- **If running short on time (~5 min):** Compress sections 04 (How It Was Built) and 10 (Planned Metrics) into single sentences each. The pipeline walkthrough and design decisions are the core.
- **If running long (~8 min):** You are likely lingering on the pipeline steps. Practice the five-stage narration as a single continuous flow -- no pauses between stages.
