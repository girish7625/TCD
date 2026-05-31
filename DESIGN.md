<!-- SEED: the palette, cream surface, type structure, and motion posture below are LOCKED. Exact font families, the radius/spacing scales, and all components are still gaps — re-run /impeccable document once there are real screens to extract tokens and generate the .impeccable/design.json sidecar. -->
---
name: The Care Den
description: The front porch for The Care Den — a slow, kept brand surface that sends family caregivers to the community.
colors:
  den-green: "#3a7d3f"
  porch-cream: "#f4efe6"
  iris-purple: "#6c489b"
  lamplight-yellow: "#efb42c"
  brick-red: "#a7463e"
  lake-teal: "#1690aa"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
---

# Design System: The Care Den

## 1. Overview

**Creative North Star: "The Front Porch"**

The Care Den's website is a front porch. The light is on, you can sit without knocking, and no one asks why you came. It is a threshold, not a lobby — a place to feel the room before deciding whether to step inside, and a place where simply sitting and witnessing is a complete and valid visit. Every visual decision is settled by one test: *does this feel like being pushed through a door, or invited to sit?* If it pushes, it is wrong.

The reader arrives tired in a chronic way, on her phone, late at night, in stolen minutes between caregiving tasks. She has already heard Jacquelyn's voice and trusts it; she is three-quarters of the way in. So the porch does not reintroduce itself, oversell, or convince. It continues a conversation already underway. The surface is warm paper-cream, the voice is a muted forest green, and the page is generous with air — roomy margins, long line-height, real silence between elements. The community's diversity shows through quietly: the four colors of the painted ring are glimpsed one at a time, never all at once, the way you'd notice a single bright endpaper inside an otherwise plain grey book.

This system explicitly rejects the marketplace energy and listings density of **Care.com / AARP**, the wellness-app gradients and glossy abstract shapes of **Headspace / Calm**, and the transactional checklist voice of **Cake**. It is not a directory, not a wellness app, not a product to be configured. It is a made object treated with care — closer to a small-press paperback than to software. The reader does the keeping for everyone else; here, she is kept.

**Key Characteristics:**
- **Roomy.** Generous margin, generous line-height, generous silence. Nothing crowded.
- **Painted, not rendered.** Hand over machine — soft edges, organic forms, paper warmth.
- **One voice, glimpsed diversity.** Green leads; the four ring colors punctuate, never crowd.
- **Designed for the phone at midnight, with one free hand.** Mobile is the design target; desktop is the visiting case.
- **Stillness is a valid response.** No urgency is baked into the layout. The page waits.

### Reference Anchors

The named objects this system should feel like. Each lists its **target** (the specific artifact, not the brand at large) and what we **take** from it. A reference without a target is a trap — an agent will guess wrong.

1. **Persephone Books — the books themselves** (dove-grey covers with a single patterned endpaper). *Not* their website. **Take:** "ring as punctuation" in a physical object — restrained, uniform exterior with one contained flash of color; the kept object.
2. **NYRB Classics — the book covers** (serif wordmark, colored spine band, framed image, systematic restraint). *Not* their website. **Take:** editorial cover language and restrained, systematic color use — proof a rigid system can feel humane.
3. **Kettle's Yard — the house as photographed** (held domestic quiet, objects arranged with care, light doing the work). *Not* their website. **Take:** room-shaped space and the porch metaphor made physical — stillness, warmth, an invited guest.
4. **Maria Fabrizio — her illustration work** (*Stress Less Awe Walk*, *Slow Medicine*). *Not* her portfolio site. **Take:** the master illustration tone — warm, painterly, human.
5. **On Being — the website itself** (onbeing.org). **Take:** page rhythm, body type, slow CTAs, and editorial posture.

## 2. Colors

A warm paper-cream surface carrying one muted forest green as the working voice, with the four painted ring colors held in reserve as rare, single accents.

### Primary
- **Den Green** (`#3a7d3f`): The voice of the brand and the color of the wordmark. The single working UI color — body links, primary button, active states, headings where color is wanted, hairline rules. If a screen needs a color decision and nothing else is specified, the answer is Den Green.

### Secondary — The Ring (Glimpse Accents)
The four non-green colors of the painted logo ring. Co-equal, never ranked, used **one at a time** as rare punctuation — a section marker, a single underline, one illustrated moment, a hover. Each appears on far less than 10% of any screen.
- **Iris Purple** (`#6c489b`): A glimpse accent.
- **Lamplight Yellow** (`#efb42c`): A glimpse accent; the warmest, use most sparingly on cream (lowest contrast).
- **Brick Red** (`#a7463e`): A glimpse accent.
- **Lake Teal** (`#1690aa`): A glimpse accent.

### Neutral
- **Porch Cream** (`#f4efe6`, approximate): The surface of everything. Warm, paper-like, never clinical white. Pages, sections, and cards all sit on this; depth comes from tone and air, not from boxing things in white.
- **Body Ink** *(to be resolved in implementation)*: A warm near-black for body text. Must hit **AAA** contrast on Porch Cream at 18–19px — a true black is too hard; aim for a deep warm charcoal or near-black brown. Resolve and add to frontmatter on the next pass.
- **Den Green Deep** *(to be resolved in implementation)*: A deepened Den Green for button hover / pressed states. Resolve and add to frontmatter on the next pass.

### Named Rules
**The Ring Stays Whole.** The four ring colors only ever appear *together*, as the complete painted mark. They are never disassembled into a UI palette — no lone-purple button, no all-teal section. The five-together is the community; taking the circle apart dilutes it.

**The One Glimpse Rule.** Green is the voice. At most **one** non-green accent is visible on any given screen, and it occupies a sliver. Diversity is glimpsed, never paraded. If a second ring color wants to appear, one of them is wrong.

## 3. Typography

**Display Font:** Fraunces *(leading candidate — confirm in implementation)*, with Georgia, serif fallback.
**Body Font:** Hanken Grotesk *(leading candidate — confirm in implementation)*, with a system-ui sans fallback.

**Character:** Book-serif territory, deliberately — not literary-modern, not editorial-sharp. The display serif is an old-style face with optical warmth and a faint hand-drawn softness that echoes the wordmark's calligraphic *Care*. The body is a **warm humanist** sans chosen for legibility on a phone in low light. The pairing should read like a well-set small-press paperback, never like a software product.

### Hierarchy
- **Display** (Fraunces, 400, `clamp(2rem, 5vw, 3.25rem)`, line-height ~1.1): Hero and page-opening headlines. Where the serif warmth lives.
- **Headline / Title** *(scale to be resolved)*: Section openers; serif, kept calm — no tight tracking, no all-caps shouting.
- **Body** (Hanken Grotesk, 400, **19px / 1.1875rem minimum on mobile**, line-height **1.6**): All narrative copy. Comfortable measure of **~65 characters**. Never below 18px on mobile, never below 16px even for tertiary copy.
- **Label** *(to be resolved)*: Small supporting copy; warm sans, sentence case. Avoid uppercase eyebrow labels unless they earn their keep — the brand does not shout.

### Named Rules
**The Warm-Sans Rule.** The body sans is warm and humanist — open apertures, a little softness. A cool grotesque (Helvetica/Inter-type neutrality) is forbidden; it drags the page straight into generic-SaaS territory the brand rejects.

**The Midnight Floor.** Body type is **never** below 18px on mobile and line-height is **never** below 1.6. Body text holds **AAA** contrast on cream, verified on a small screen in low light — the real reading environment, not a bright desktop monitor.

## 4. Elevation

This system is **flat by default**. Surfaces are paper on paper: the whole site sits on Porch Cream, and depth is conveyed by **tone and air** — a slightly different cream, generous spacing, a hairline rule — not by drop shadows. There are no glossy cards floating over gradients; that is the wellness-app look the brand rejects. At most, a single soft, diffuse shadow may appear as a *response to touch* on the primary button — never as ambient decoration at rest.

### Named Rules
**Flat as Paper.** Surfaces are flat at rest. If a shadow is visible without the user touching anything, it is wrong. Depth is built from cream tones, margin, and silence — the qualities of a printed page, not a UI chrome.

## 5. Components

*Provisional — no components exist in code yet. One component is doctrinally fixed by PRODUCT.md and is sketched here as direction; the rest (cards, inputs, navigation, chips) will be documented for real on the scan-mode pass once screens exist.*

### The Single Warm Button (signature component)
The site's entire conversion surface is **one** button — *Join the community* / *Become a member* — that sends the visitor to Heartbeat.
- **Character:** Warm, singular, unhurried. A held-out hand, not a sales CTA.
- **Color:** Den Green fill on cream, deepening (Den Green Deep) on hover/press. Generous internal padding — it should feel roomy, like everything else.
- **Motion:** Soft transition on touch (~250ms, gentle easing); honours the motion rules below.
- **Doctrine:** **Never stacked.** No hero with two or three CTAs competing. One door, one direction. Multiple stacked CTAs are forbidden.

### Motion (system-wide behavior)
- **The Page Sits Down.** On first load, a page or section may perform **one** quiet fade-and-rise as it settles — once, never looping. Nothing animates on scroll mid-page. Touch feedback (hover/focus/tap) is soft and slow (~250ms, gentle easing).
- **Reduced motion is absolute.** Under `prefers-reduced-motion`, every transition collapses to instant. No autoplay video or audio anywhere; no motion that triggers without a user action.

## 6. Do's and Don'ts

### Do:
- **Do** treat Porch Cream (`#f4efe6`) as the surface of everything; build depth from tone, margin, and silence, not from boxes or shadows (**Flat as Paper**).
- **Do** keep Den Green (`#3a7d3f`) as the single working voice, and let at most **one** ring color glimpse through per screen (**The One Glimpse Rule**).
- **Do** set body at **18–19px minimum on mobile, line-height ≥ 1.6**, ~65-character measure, **AAA** contrast on cream (**The Midnight Floor**).
- **Do** use a **warm humanist** body sans and an **old-style** display serif that echoes the wordmark (**The Warm-Sans Rule**).
- **Do** present exactly **one** warm CTA — *Join the community* — as the only destination. One door, one direction.
- **Do** let stillness be a valid response: the page waits, and a visitor who only reads and leaves has been served.
- **Do** honour `prefers-reduced-motion` fully; allow only one soft settle on arrival (**The Page Sits Down**).

### Don't:
- **Don't** feel like **Care.com / AARP** — no marketplace energy, no listings density, no browse-providers posture. This is not a directory.
- **Don't** feel like **Headspace / Calm** — no wellness-app gradients, no glossy abstract shapes, no app-screenshot heroes.
- **Don't** feel like **Cake (joincake.com)** — no transactional, checklist voice.
- **Don't** use countdown timers, autoplay, popups, "limited spots available," "act now," exit-intent modals, pricing tables, FAQ accordions used as content padding, or hero CTAs stacked three-deep.
- **Don't** disassemble the painted ring into UI color — no lone-purple button, no all-teal section (**The Ring Stays Whole**).
- **Don't** reach for a cool grotesque body font (Helvetica/Inter-type neutrality); it reads as generic SaaS.
- **Don't** float cards over gradients or apply ambient shadows at rest; a shadow appears only as a response to touch, if at all.
- **Don't** bake urgency into the layout — no motion that fires without user action, nothing that punishes the visitor who simply sits.
