# Handoff

*For Lynn and Jacq — and anyone who picks up The Care Den website after us.*

*This is a living document. We update it as decisions land — when Vercel is connected, when illustrations arrive, when the repo moves to a shared account. If something below is out of date, fix it; it's meant to be kept current, not preserved.*

*Last updated: 2026-05-31.*

---

## What this is

The Care Den is a peer community for family caregivers. The community itself lives on Heartbeat, where Lynn and Jacq run live sessions and hold the between-session conversations. **This project is the website only** — a calm, brand-led "front porch" whose single job is to welcome a visitor who arrived from one of Jacq's videos and send her to Heartbeat to join. The website is deliberately slow and still; it never lists sessions, prices, or time-limited offers. Those live on Heartbeat. The site is the porch; Heartbeat is the room.

## Where the code lives

GitHub: **https://github.com/girish7625/TCD**

It's a Next.js website. All the files — the pages, the design documents, the logo — are in that one repository.

## Where the site is deployed

**Live at https://tcd-liard.vercel.app.** The site deploys through **Vercel**, which publishes automatically every time a change is pushed to the `main` branch on GitHub — no separate publish step. Auto-deploy is active.

(This is Vercel's default address. If we later connect the **thecareden.com** domain, update this line to the custom URL.)

## The documents that govern decisions

Two files in the repo hold the thinking, so that anyone building or changing the site stays true to the brand:

- **[PRODUCT.md](./PRODUCT.md)** — who the site is for, what it's trying to do, the brand personality (roomy, unexplained, kept), and what it must *not* feel like.
- **[DESIGN.md](./DESIGN.md)** — the visual system: colors, type, spacing, motion. It is currently a *seed* (the big decisions are locked; a few details get finalised once real pages exist).

If you ever hand this to a developer, point them at these two files first. They answer most "how should this look / behave?" questions before they're asked.

## Where the copy lives

The website wording — Home, Join, About, Partners, Essays — is written and final, and lives in Notion:

**[Notion — TCD website copy, word for word](https://www.notion.so/awrightletsgather/Website-copy-word-for-word-36bb3a3ed98b812a9b7ff361d8ea7a25?source=copy_link)**

Notion is the source of truth for words. The website pulls from what's written there.

## Who designed what

- **Logo and brand colours:** Shravan. The logo file is in the repo at **`public/logo.png`** — the painted ring of five colours with "The Care Den" wordmark. The official colour codes are recorded in DESIGN.md.
- **Copy and voice:** Lynn McGuire-Raj and Jacquelyn Revere. The website wording is theirs, written and final, in the Notion link above.

## Illustrations

The site's illustration style is anchored to the work of **Maria Fabrizio** (her editorial illustration, e.g. *Stress Less Awe Walk*, *Slow Medicine*) — warm, painterly, human. Actual illustrations for the site are a **future commission**; none have been made yet. When they're commissioned and delivered, note here where the originals are stored.

> *To update when done:* illustrator, where final assets live.

## Account ownership

Right now the GitHub repository sits under Girish's personal account (**girish7625**). The plan is to move it to a shared **TheCareDen** GitHub organisation once Lynn or Jacq can create one — so the project belongs to The Care Den, not to any one person. When that move happens, the repo link above changes; update it here.

The domain **thecareden.com** is registered through Squarespace under Jacquelyn Revere's account. Domain ownership is correctly held with TCD founders, not with Girish.

> *To update when done:* new org-owned repo URL.

## How to make a change

**If you write code:** clone the repository, make your edit, and push it to GitHub. Once Vercel is connected, the live site updates on its own within a minute or two. No separate "publish" step.

**If you don't write code (most changes):** for wording changes, edit the copy in **Notion** and send Girish a note — he updates the site. You never have to touch code to change words.

## If Girish is unreachable

Everything needed to keep going is already in the repository — nothing is locked in one person's head:

1. Clone the repo: **https://github.com/girish7625/TCD**
2. Hire any **Next.js developer** (it's a common, well-supported framework).
3. Point them at **PRODUCT.md** and **DESIGN.md** — those explain the brand and the design rules.
4. The copy is in **Notion**; the logo is in the repo at `public/logo.png`.

The site is fully buildable from these pieces. The work is documented on purpose, so The Care Den is never dependent on any single person to move forward.
