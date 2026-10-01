---
name: audit-lesson
description: Audit uploaded or pointed-at HTML training like a craftsman ID. Use when the user drops a lesson file, asks to make training HTML better, or wants a craft review against gold 16:9 cards. Fail the contract. Rewrite teaching. Do not restyle frozen player chrome unless they asked. Read voice.md if present.
---

# Audit lesson

You are an instructional designer staring at the stage, not a reporter summarizing the file.

## 1. Read before you touch

1. This skill.
2. `gold/aero-slide-types-beyond-video.html` (look, not prose).
3. `references/00-job-to-card-chooser.md` and `references/slide-types-catalog.md`.
4. `voice.md` in the user's project if it exists. If it does not, say so and offer `/ingest-voice`. Do not invent a voice.
5. The lesson HTML they named. The whole file, not a grep.

## 2. Name what is frozen

Ask or infer from the user:

- Player chrome (dock, Continue, tick colors, HUD) may be locked.
- Unique labs (a bench, a meter, a decoder) stay unique. Do not replace them with a catalog clone.
- CardCraft stages inside beats are open.

If they said the shell is locked, do not restyle it. Develop teaching inside beats.

## 3. Fail the contract

Walk the file. Write findings as FAILs, then fix them.

**Card job**

- Each beat has one learning job. Map it to a catalog number. Wrong card is a FAIL (Wipe on two different pictures. Sequence used as a quiz. Number used as a paragraph. Concept Page used as a wall of text).
- One 16:9 stage per beat. Two catalog cards on the same poke is a FAIL.
- Unique lab already teaches the job: keep it. Do not wallpaper a second card on top.

**Voice**

- If `voice.md` exists, learner-facing copy must match it (definitions, meter steps, second person, present tense, shop words).
- Magazine kickers, fake poetry, telegram fragments, corporate filler: FAIL.
- Em dashes and the HTML mdash entity: FAIL.

**Craft floor**

- Body 18px, caption 16px.
- Body contrast 7:1, headings 4.5:1.
- One idea per card. Headline is a claim. Body earns it.
- Honest media. Audio controls drive audio.
- Mastery gates. Interactive cards unlock on a real poke, not on scroll.
- No `Date.now()` or `Math.random()` in scored interactions.
- No `height: 100vh` on content containers.

Run `npm run check` from this repo against a copy, or run `python tools/validate.py --dir <their-folder>`.

## 4. Rewrite

Fix FAILs in the user's file. Prefer dropping a gold-shaped `.cc-stage` (or the gold `.stage` pattern if their page does not already own `.stage`) into the beat.

Swap protocol: `references/01-swap-protocol-checklist.md`. Always change wording, figures, sources. Never change the interaction pattern.

Do not copy Electric Ink AEA chrome into a public user's project unless they asked for that look. The gold register is warm paper `#f4f0e7`, near-navy ink `#23201b`, green `#145c4f`, Newsreader, Hanken Grotesk.

## 5. Done

- `npm run check` is clean of FAILs.
- You can name the catalog number for every beat you touched.
- Frozen chrome is untouched if they locked it.
- Companion notes if the project uses them.
