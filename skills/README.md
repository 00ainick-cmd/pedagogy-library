# Skills: HTML Training Craft

These skills were the public `html-training-craft` repo; they now live here, in the `skills/` folder of the Pedagogy Library. Paths below are relative to this folder.

Upload an HTML training file. An agent audits it like an instructional designer who stares at the stage, not a course catalog.

Gold 16:9 cards are the source of truth. Your writing becomes `voice.md`. Lint fails the contract.

This is not Articulate Rise, not Mindsmith, and not HyperFrames. Rise authors courses. Mindsmith turns source files into Rise-shaped lessons. HyperFrames turns HTML into video. This repo audits **your** lesson HTML against gold cards, then rewrites it in **your** voice.

```bash
npx skills add 00ainick-cmd/pedagogy-library
```

Then in the agent:

1. `/html-training-craft` if the job is unclear.
2. `/ingest-voice` when the user drops writing they own. Output is `voice.md` in their project. Never invent a house voice.
3. `/audit-lesson` when they upload or point at lesson HTML.
4. `/author-card` when the job is a new 16:9 card, not a whole-file rewrite.

Then:

```bash
npm run check
```

Zero FAILs. Warnings get a look before you call it done.

## Why this shape

HyperFrames won agents because gold HTML is the source of truth, a router skill picks the workflow, and lint fails the contract. Copy that shape. Ship CardCraft cards plus a voice ingest.

Mindsmith and Rise already author courses. Nobody ships: upload your HTML, ingest your writing, fail a craft lint against gold 16:9 cards, rewrite like an ID who stares at the stage.

## What ships

| Path | Job |
| --- | --- |
| `gold/aero-slide-types-beyond-video.html` | Open this. The look is a file, not a paragraph. |
| `references/slide-types-catalog.md` | Twelve cards. Pick by learning job. |
| `references/00-job-to-card-chooser.md` | Job first, then the card. |
| `html-training-craft/` | Router. Read first. |
| `skills/audit-lesson` | Fail the file against gold + `voice.md`. |
| `skills/author-card` | One 16:9 stage. Copy the pattern. Swap the content. |
| `skills/ingest-voice` | User corpus in. `voice.md` out. Scaffold only. |
| `tools/validate.py` | Em dash, font floor heads-up, banned AI phrases, self-contained files. |

## What does not ship

- A default instructor voice. You bring writing you own.
- Certification items, exam banks, or a private course player chrome.
- A ninth copy of any private library.

Canonical CardCraft library stays private. This repo is the public extract: gold, catalog, skills, lint.

## House rules (always)

- No em dashes or en dash HTML entities. Spaced hyphen, comma, colon, or a period.
- Body 18px floor. Caption 16px floor.
- Body contrast 7:1. Heading contrast 4.5:1.
- One idea per card. The headline is a claim. The body earns it.
- Mastery, not attendance. Interactive cards gate Continue on a real poke.
- Honest media. A control that implies audio drives real audio.
- Compare Wipe is two identical scenes except the defect. Two different pictures is the wrong card.
- Pick the card by the learning job, not by what looks fancy.

## Install

```bash
git clone https://github.com/00ainick-cmd/pedagogy-library.git
cd pedagogy-library/skills
npm run check
```

Open `gold/aero-slide-types-beyond-video.html` in a browser. That file is the visual contract.

## License

MIT. Gold card patterns are for instructional designers to copy and swap. Do not paste someone else's copyrighted lesson prose into a public fork.
