# Shared lesson parts: a dated snapshot

These four files are a snapshot, taken on 1 October 2026, of the shared lesson parts of the CAET avionics course. They
are copied unchanged. The live demos on this site run on them, so what you try here is the code the course lessons run
on, not an imitation of it.

| File | What it does |
|---|---|
| `lesson-parts.js` | The ask card (a question whose feedback pops up over it) and the one-card sort (drag, keys or tap) |
| `lesson-parts.css` | Their look, plus the page hero and the graphical text blocks: stat cards, term cards, rule boxes, step cards, objectives |
| `lesson-pager.js` | Turns a long lesson page into pages that move left to right, with one header, a side panel of page labels, and Continue and Back |
| `lesson-pager.css` | The pager's look |

## Where the originals live

The originals are in the CAET course repository (`aero-caet-source`, private), folder `frontend/public/core/`, as of
commit `accb262` (1 October 2026). The course's copy is the one that ships to students and keeps changing. This copy
is frozen, so it can fall behind. To refresh it, copy the four files again and change the date above.

SHA-256 of the files as copied:

```
ba3182ae41ec5ab24b4a2ec4340718d505942fcdc8bc1b6c756c1dc30b62952d  lesson-parts.js
2e9b4dfaa181bbf75d213018879b734a4eee17ef05927c314335d5dfb8d6bc32  lesson-parts.css
aed74f2380190c312aca69143e48cf4516ea07e4a5fea395f50b3341c6c26739  lesson-pager.js
8c033f27f7208054aea93694e4a68a98c21ebd66debfbf8a9cf6f75b1b5121d0  lesson-pager.css
```

## What the showcase adds on top

The parts use the lesson's own color tokens (`--ink`, `--paper`, `--hero` and the rest). The showcase declares those
tokens in `../site.css`, and keeps its own additions in `../demo.css` and `../demo.js`: the parts that each course
lesson carries locally (flip cards, the document reader, the process stepper, predict then reveal) and a 16 px text
floor on phones. Nothing in this folder is edited.

How each part should look and teach is in the library's Lesson Craft notes (`craft/interactions/`). How the parts fit
into a lesson is in `build/lesson-format.md`.

Licence: MIT, like the rest of the code in this showcase.
