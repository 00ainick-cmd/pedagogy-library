---
name: html-training-craft
description: Router for HTML lesson craft. Use when the user uploads training HTML, wants an instructional-design audit, wants a 16:9 teaching card, or wants to ingest their writing into voice.md. Read this first. Route to audit-lesson, author-card, or ingest-voice. Do not invent a house voice. Do not restyle a frozen player chrome unless they asked.
---

# HTML Training Craft

Read this file first. Then open the gold HTML so you know what "good" looks like:

`gold/aero-slide-types-beyond-video.html`

Generic web docs will not teach you the card jobs. Skipping this router produces the wrong card (Wipe on two different pictures, a charcoal clone of a JS widget, a paragraph wall instead of a Concept Page).

## Route the job

| User intent | Skill |
| --- | --- |
| "Audit this HTML" / "make this lesson better" / they dropped a training file | `/audit-lesson` |
| "Build a card" / one beat / one 16:9 stage | `/author-card` |
| "Here's how I write" / they uploaded books, scripts, or notes they own | `/ingest-voice` |
| Unclear | Stay here. Ask which of the three. One question. |

Do not run two workflows on the same turn unless the user named both (example: ingest voice, then audit this file).

## Non-negotiables

- Job first. Open `references/00-job-to-card-chooser.md` before you pick a card.
- Gold is a file you can open, not a vibe you describe.
- One catalog stage per beat. Do not stack Sequence and Wipe on the same poke.
- If `voice.md` is missing and you are about to write learner-facing copy, run `/ingest-voice` or ask for source writing. Do not fall back to magazine AI.
- Frozen chrome stays frozen when the user says the player shell is locked. Teach inside the beats.
- `npm run check` after every HTML edit. Fix FAILs.

## What this is not

- Not HyperFrames (HTML to video).
- Not Mindsmith or Rise (they author LMS courses).
- Not a private certification voice pack.

The gap this repo fills: upload **your** HTML, ingest **your** writing, fail a craft lint against gold cards, rewrite like an ID who stares at the stage.
