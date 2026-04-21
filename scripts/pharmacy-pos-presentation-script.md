# Raytail Pharmacy POS — Presentation Script
## "Two Stores. One System."

---

### HERO (10 seconds)
> "This is Raytail — a complete POS system I designed for STO, the largest retail chain in the Maldives. One system serving both their pharmacy and supermarket — 14 modules, 200+ screens, and I was the sole designer."

---

### 01 — THE PROBLEM (30 seconds)
> "STO's pharmacy and supermarket were running on a legacy Windows-based POS. Mouse-driven, built for desktops — completely wrong for a busy counter where every second matters.
>
> The goal wasn't to port the old system to a touchscreen. It was a complete UX rethink — redesign everything from login to receipt for touch-first POS hardware."

---

### SUCCESS METRICS (20 seconds)
> "Before designing anything, I defined what success looks like. Four measurable targets:
>
> - Zero support calls caused by UI confusion — the old system generated constant requests because staff couldn't find features.
> - Zero training dependency — new staff should learn by doing, not by sitting through sessions.
> - Zero rework cycles — no more building on unconfirmed designs.
> - One unified system — serving both pharmacy and supermarket without forking the codebase."

---

### 02 — THE REWORK TRAP (40 seconds)
> "Before I touched any UI, I mapped the team's workflow — and found a cycle of waste.
>
> Developers were building on designs the IS Team hadn't approved. Every module went through the same loop: design, build, review, rework. Time wasted on both sides.
>
> *(gesture to FigJam diagram)*
>
> I mapped three workflows side by side — ideal, what was actually happening, and my proposal. The gap made the waste undeniable.
>
> My fix: prototype-first validation. I put interactive Figma prototypes directly on the actual POS devices. The IS Team could test on real hardware before a single line of code was written. No more building on assumptions."

---

### FEATURE PRIORITIZATION (20 seconds)
> "With 14+ modules, I couldn't design everything at once. I created a prioritization board:
>
> - **P0 — Must Launch**: Login, Checkout, Tender, Receipts, Second Screen. The core transaction loop.
> - **P1 — High Priority**: E-Prescription, Customers, Check Stock, Manage Cash. Daily operations.
> - **P2 — Planned**: BNPL, Discounts, Notifications, Settings, and others."

---

### USER FLOWS (15 seconds)
> "Every module started as a FigJam flow before any UI was designed. Happy paths, edge cases, decision points — all mapped first.
>
> *(interact with embedded FigJam)*
>
> This is the complete system flow. You can zoom in to see how each module connects back to the central checkout hub."

---

### FEATURE WALKTHROUGH (3-4 minutes total)

**Login — One Tap In (30 seconds)**
> "The old login was a standard username/password form. The new design supports NFC card tap — one touch and you're in. Manual fallback with on-screen keyboard for when NFC isn't available.
>
> And there's a float gate — the POS won't start until the starting cash in the drawer is confirmed. Prevents accounting problems from the very first transaction."

**Checkout — The Central Hub (30 seconds)**
> "This is the heart of the system. Split-screen layout — products on the left, transaction summary on the right. Everything visible at once, no tab switching.
>
> Quantity, unit of measure, batch number — all editable inline, directly in the table. No modal pop-ups for routine changes. The bottom menu gives one-tap access to all 14 modules."

**Add Articles (15 seconds)**
> "Search by code, name, or description. Autocomplete shows LOT number, expiry date, and price. Price overrides require supervisor permission with mandatory reason logging — audit trail built in."

**Modify Qty (15 seconds)**
> "Edit quantity, unit of measure, and batch directly in the product table. When modifications trigger promotion conditions, the system auto-detects and applies them."

**E-Prescription (30 seconds)**
> "This is the pharmacy differentiator — the module that doesn't exist in supermarket mode.
>
> Drug overlap detection is mandatory. If the system flags a potential interaction, the pharmacist must log a reason before overriding. This isn't a dismissable dialog — it's a required field. Patient safety over convenience."

**BNPL (15 seconds)**
> "Buy Now Pay Later with installment plans. I used comic-style storyboards to pitch this feature to stakeholders — showing the real cashier-customer interaction at the counter. That visual story got the feature funded."

**Tender Operations (20 seconds)**
> "Ten payment types — Cash in both MVR and USD, cards, BNPL, mobile money, insurance, cheques, coupons, loyalty points. Split tender support means a customer can pay partially with cash, partially with card, and cover the rest with loyalty points — all in one transaction.
>
> I designed a reusable base component that handles all ten types with consistent interaction patterns."

**Second Screen (15 seconds)**
> "Customer-facing display showing the transaction in real time. QR code for m-Faisaa mobile payment — customers scan from their phone, no cashier phone handling needed. Designed for two hardware sizes: full HD monitors and compact POS displays."

**Transactions, Check Stock, Manage Cash (20 seconds)**
> "Transaction history with reprint, recall, void, and return — all with supervisor authorization for sensitive operations.
>
> Quick stock lookup without leaving checkout — batch details, expiry dates, multi-store visibility.
>
> Cash drawer operations — float declaration at shift start, cash in/out tracking throughout."

---

### BUSINESS IMPACT (30 seconds)
> "Let me show you how we measured against the KPIs I set at the beginning.
>
> *(gesture to before/after table)*
>
> We went from Windows desktop to touchscreen POS. Mouse and keyboard to touch and NFC. No design system to Raytail Global Library. Build-then-review to prototype-on-device-first. And pharmacy-only to pharmacy plus supermarket — one codebase, two store types.
>
> 14+ modules redesigned. 200+ screens delivered. Two store types unified."

---

### DESIGN SYSTEM CALLOUT (10 seconds)
> "All of this was backed by the Raytail Global Library — a design system I built to keep everything consistent. That's actually a separate case study if you're interested."

---

### TIME MACHINE (20 seconds)
> "If I could go back, I'd build the design system first — before the first feature, not alongside it. I started with a single library file, but 14 modules needed a fully tokenized architecture from day one. Later modules would have composed from existing tokens instead of creating new patterns."

---

### REFLECTION (30 seconds)
> "Four things this project taught me:
>
> **Fix the process first.** The prototype-on-hardware approach saved more time than any UI change.
>
> **Design for the harder context first.** Pharmacy complexity set the floor. You can remove guardrails — you can't bolt them on.
>
> **Consistency at scale is structural, not personal.** The repeatable 6-page file structure held 200+ screens together.
>
> **Stakeholder buy-in is a deliverable.** The comic storyboards got BNPL funded. The PPOS diagram got the process change approved. Design for decision-makers too."

---

### CLOSING (10 seconds)
> "That's Raytail — from a legacy Windows app to a modern touchscreen POS, designed to serve two very different retail environments with one consistent system. Thank you."

---

## Timing Guide
| Section | Duration |
|---------|----------|
| Hero + Problem + KPIs | ~1 min |
| Discovery + Prioritization | ~1 min |
| User Flows + Features | ~4 min |
| Impact + DS + Reflection | ~1.5 min |
| **Total** | **~7-8 min** |

## Tips
- **Keep scrolling smooth** — let the scroll-snap guide the pacing
- **Pause on before/after sliders** — drag slowly so the interviewer can see the transformation
- **Interact with FigJam embeds** — zoom into specific flows when asked about process
- **Lead with the problem, not the solution** — interviewers want to see how you think
- **Be ready for deep-dives** — they may ask about drug overlap, dual currency, or the process change
