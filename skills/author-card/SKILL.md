---
name: author-card
description: Author one 16:9 teaching card from the gold catalog. Use when the user wants a Concept Page, Number, Sequence, Predict, Wipe, Explorable, Live Instrument, Reveal Board, Cold Open, Contract, Evidence, or Branching Scenario. Job first. Copy the gold pattern. Swap the content. Do not invent a new chrome.
---

# Author card

Build one card. Not a course. Not a player shell.

## 1. Job first

Open `references/00-job-to-card-chooser.md`. Name the learning job in one sentence (open, teach, prove, recall, explore, sequence, discriminate, predict). Then take the card it maps to.

If two cards could work, read the "use when" column. Do not pick Wipe because it looks interactive.

**Wipe (10)** is two **identical** scenes except the defect. Isolated ohms vs in-circuit ohms on the same specimen. Not volts vs amps. Not two different photos.

**Sequence (09)** is procedure order with a real consequence.

**Predict (11)** is commit first, then data.

**Number (04)** is one real figure, big.

**Concept (03)** is a term lockup plus two or three distinctions, not a paragraph wall.

## 2. Copy gold, then swap

Open `gold/aero-slide-types-beyond-video.html` and `references/slide-types-catalog.md`.

Copy the interaction and the AERO register:

- Warm paper `#f4f0e7`, near-navy ink `#23201b`, green `#145c4f`
- Newsreader display, Hanken Grotesk body
- 16:9 stage, `container-type: size`, sizes in `cqw` / `cqh`
- Technical-drawing motifs (thin rules, dimension lines, registration marks)

If the host page already uses class `.stage` for something else, name the CardCraft root `.cc-stage` and scope tokens under `.cc-card`. Do not put paper `#f4f0e7` on `:root` of a dark lesson.

Swap checklist: `references/01-swap-protocol-checklist.md`.

## 3. Voice

If `voice.md` exists, every learner-facing string follows it. If it does not, stop and run `/ingest-voice` or ask for source writing.

No em dashes. Complete sentences. Second person. Present tense. Shop words. No magazine kickers.

## 4. Wire the poke

If the host lesson gates Continue, unlock on the real interaction (sequence pass, predict commit, wipe complete, instrument in band). Do not unlock on scroll.

No `Math.random()`. No `Date.now()`.

## 5. Check

```bash
npm run check
```

Fix FAILs. Render and look at the 16:9 stage. Caption floor 16px. Body 18px.
