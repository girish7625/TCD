#!/usr/bin/env python3
# ALL of today's changes in one idempotent pass (safe to re-run):
#   1) About: 64 -> 63 million
#   2) Alma Valencia: add Instagram handle (+ tidy stale placeholder comment)
#   3) Photo grade: add .photo-grade CSS rule (gentle) and tag the 5 Join
#      facilitator photos + the 2 About "who built this" photos.
# Illustrations are intentionally left untouched. Run from repo root (~/tcd).

import pathlib, sys, datetime
STAMP = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

def die(m):
    print("ABORTED:", m); print("Nothing written. Files untouched."); sys.exit(1)

RULE = (
    "\n/* Unifying grade for all real people photos (facilitators + About). "
    "Tune here to change every photo at once. Illustrations excluded. */\n"
    ".photo-grade {\n"
    "  filter: brightness(1.03) contrast(0.95) saturate(0.92) sepia(0.10);\n"
    "}\n"
)

bufs = {}
notes = []

# ---------- about/page.tsx ----------
pa = pathlib.Path("app/about/page.tsx")
if not pa.exists(): die("can't find app/about/page.tsx")
sa = pa.read_text()

if "More than 64 million" in sa:
    sa = sa.replace("More than 64 million", "More than 63 million", 1); notes.append("64->63: applied")
elif "More than 63 million" in sa:
    notes.append("64->63: already in place")
else:
    die("about: couldn't find 64/63 million line.")

OLD_IMG = 'className="aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover"'
NEW_IMG = 'className="aspect-[4/5] w-full max-w-[320px] rounded-2xl object-cover photo-grade"'
if "rounded-2xl object-cover photo-grade" in sa:
    notes.append("about photos grade: already in place")
elif sa.count(OLD_IMG) == 2:
    sa = sa.replace(OLD_IMG, NEW_IMG); notes.append("about photos grade: applied (2)")
else:
    die(f"about: image class expected 2 matches, found {sa.count(OLD_IMG)}.")
bufs[pa] = sa

# ---------- join/facilitators.tsx ----------
pf = pathlib.Path("app/join/facilitators.tsx")
if not pf.exists(): die("can't find app/join/facilitators.tsx")
sf = pf.read_text()

# Alma instagram
if "mom_has_dementia" in sf:
    notes.append("alma IG: already in place")
else:
    OLD_A = '''    photo: "/illustrations/alma.jpg",
  },'''
    NEW_A = '''    photo: "/illustrations/alma.jpg",
    instagram: "https://www.instagram.com/mom_has_dementia",
  },'''
    if sf.count(OLD_A) != 1:
        die(f"facilitators: Alma photo anchor expected 1 match, found {sf.count(OLD_A)}.")
    sf = sf.replace(OLD_A, NEW_A, 1); notes.append("alma IG: applied")
STALE = "  // Alma's Instagram handle still TBD; bio and photo confirmed.\n"
if STALE in sf:
    sf = sf.replace(STALE, "", 1)

# facilitator img grade
OLD_F = 'className="h-full w-full object-cover"'
NEW_F = 'className="h-full w-full object-cover photo-grade"'
if "object-cover photo-grade" in sf:
    notes.append("join photos grade: already in place")
elif sf.count(OLD_F) == 1:
    sf = sf.replace(OLD_F, NEW_F, 1); notes.append("join photos grade: applied")
else:
    die(f"facilitators: image class expected 1 match, found {sf.count(OLD_F)}.")
bufs[pf] = sf

# ---------- globals.css ----------
g = None
for cand in ["app/globals.css", "src/app/globals.css", "styles/globals.css"]:
    if pathlib.Path(cand).exists(): g = pathlib.Path(cand); break
if g is None: die("couldn't find globals.css.")
gs = g.read_text()
if ".photo-grade" in gs:
    notes.append("grade CSS: already in place")
else:
    bufs[g] = gs + RULE; notes.append("grade CSS: applied")

# ---------- write ----------
changed = 0
for p, s in bufs.items():
    if p.read_text() == s: continue
    bak = p.with_suffix(p.suffix + f".bak-{STAMP}")
    bak.write_text(p.read_text()); p.write_text(s); changed += 1
    print(f"OK  {p}   backup: {bak.name}")
print("Applied cleanly. " + " | ".join(notes))
print(f"{changed} file(s) changed.")
print("Reminder: also drop the clean jacquelyn.jpg into public/illustrations/.")
