---
title: Interaction gaps in our lesson parts
last_reviewed: 2026-10-01
scope: what Rise 360, Storyline, Evolve and H5P offer that frontend/public/core/lesson-parts.* does not, ranked by teaching value for avionics
---

# Interaction Gaps

## Where we stand

The shared lesson parts (`frontend/public/core/lesson-parts.js` and `.css`) hold only two interactive parts, the ask card (`.ask`) and the one-card sort (`.rsort`), plus graphical blocks (hero, stat cards, term cards, pull quote, rule box, step cards, accordion, goals, history card). Everything else in the rebuilt lessons is built lesson by lesson: regulation readers three times, flip cards about twenty times, hotspot figures about twenty times under four class names, segmented state toggles on about eighty pages, steppers in three shapes, scenes in eight lessons, typed answers in eight. They work, and several are excellent, but each new lesson pays to rebuild them and each copy drifts.

Two kinds of gap follow:

- **Missing capability**: something Rise, Storyline, Evolve or H5P offers that no CAET lesson can do yet (graded find-the-part on a figure, matching, multi-step branching, pause points in the lecture, a compare slider, saved checklist ticks, picture fields in the final check).
- **Not shared**: something our lessons do well, but only as a copy (the regulation reader, the hotspot figure, flip cards, the stepper, the scene, typed answers, ordering).

The list is ranked by teaching value for an avionics technician, then by how often a lesson needs it. Each item is sized for one builder in one session.

## Rules for every build below

- New files only, under `frontend/public/core/parts/`, with unique names. The brief forbids editing any existing file in `frontend/public/core/`. Where a gap needs a change to an existing core file (the lecture player, the check engine's bank file), it is marked **owner change** and goes to the owner's session.
- Data in, markup out: each part reads a `data-*` JSON attribute or a small config object, like `.rsort` does, so lessons write content in `content.py` and never hand-write script.
- Every part: keyboard and tap paths with no drag required (WCAG 2.2 2.5.7), targets at least 24 px and in practice 44 px, live regions for results, right and wrong by word and symbol as well as color, `prefers-reduced-motion` honored, no horizontal scroll at 390 px, Electric Ink tokens (`--ink-2`, `--paper`, `--hero`, `--ok`, `--bad`) only.
- Record use with `window.AeroLesson.interaction({id, kind, ...})` as the existing parts do. Never gate Continue.
- A browser test on the model of `tools/hangar/tests/browser/sds-lesson.mjs`: desktop 1280 by 800 and phone 390 by 844, every path by pointer, keys and tap, no console errors, no overflow.
- Move one existing lesson onto the new part as the proof, and leave the others for their next rebuild.

## Ranked list

### 1. Real-document reader (not shared)

**Why first.** Nick's favorite interaction ("clicking on parts of the regulations") and the best transfer tool CAET has: the student reads the real 14 CFR text, AC 43.13-1B tables, FAA forms and Safety Data Sheets. Built three times already. Every regulations lesson, Wire Selection, Routing, Terminations and Bonding will want it. Pattern: [hotspot-on-real-document](hotspot-on-real-document.md).

**Build** `parts/doc-reader.js` and `.css`, lifted from certification-checks `reader()`:

```json
{"id": "rr411", "date": "2026-09-29",
 "docs": [{"key": "91.411", "cite": "14 CFR 91.411", "tab": "91.411", "url": "https://www.ecfr.gov/current/title-14/section-91.411",
           "head": "...", "items": [{"id": "a1", "label": "(1)", "lvl": 2, "kind": "p", "html": "...", "gloss": "This is the 24-month test. ..."}],
           "tables": [{"id": "tI", "caption": "...", "head": [], "rows": [], "rowGloss": {}}]}],
 "lookups": [{"doc": "91.411", "ans": "a", "task": "...", "hint": "...", "why": "..."}]}
```

Behaviors: paragraph buttons open their gloss beneath; tabs for multiple documents; search with Next match; lookup desk with hint on a wrong pick and why on a right one; optional "open the real page" dialog (`<dialog>` with zoom, from the SDS viewer). The build script stays per lesson (fetch the text, write the JSON); the part only renders. Proof: certification-checks "91.411 test".

### 2. Ask card and check upgrades: picture options, picture stems, predict mode (not shared, partly missing)

**Why.** The brief now asks for picture options or a picture stem in in-lesson questions and in the final check ("I like images bc it freshens it up"). In-lesson picture options need lesson CSS; the final check has no picture support, and maintenance-records patches its own copy of the engine. Pattern: [picture-option-question](picture-option-question.md), [predict-then-reveal](predict-then-reveal.md).

**Build** `parts/ask-plus.css` and `parts/ask-plus.js`:

- CSS: `.ask.has-pics .ask-opt` (key, picture, text in a row, 118 px picture, 96 px under 520 px), `.ask-fig` picture stem above the question. Pure CSS on the shared card.
- `data-mode="predict"` on an `.ask`: accept any answer, show "Your prediction" beside "What happens" with the feedback, no Try again. `ask-plus.js` adds this by listening for clicks before `lesson-parts.js` does, or by building the card itself with `AeroParts`-compatible markup.
- Check items: add optional `fig` (stem picture, SVG or image path with alt) and `pics` (one per option) to the `checks.json` item shape, and a small `window.AeroKcPics.render(item, stemEl, optionButtons)` helper the check engine calls. **Owner change**: `tools/curriculum/revamp/apply-checks.py` must carry the two fields into `caet-lesson-checks.js`, and the check engine copies must call the helper; agree the field names with the owner before building.

### 3. Find-the-part, graded (missing in shared form; one lesson-local copy)

**Why.** Locating a part on a real figure is a daily shop skill: a test point on a schematic, a cavity on a connector face, a static port on a fuselage, a block on Form 337, the wrong line in a logbook entry. H5P's Find the Hotspot does it with free clicks that fail on phones and screen readers. Our transistors-inverters version marks every candidate as a button, which solves that. Pattern: [find-the-hotspot](find-the-hotspot.md).

**Build** `parts/find-part.js` and `.css`:

```json
{"img": {"src": "...", "alt": "...", "w": 820, "h": 570}, "crop": null,
 "parts": [{"k": "Q3", "label": "Q3", "x": 50.7, "y": 58.2, "is": "The output transistor. ..."}],
 "tasks": [{"t": "Select every transistor.", "need": ["Q1", "Q4", "Q2", "Q3"], "done": "All four transistors found: ..."}]}
```

Text mode: the same part over a block of text, where each candidate is a phrase in the text (the H5P Mark the Words idea, made accessible): "Select the part of this entry that is missing a certificate number." Proof: transistors-inverters "Find Q".

### 4. Numeric answer and fill-the-table (not shared)

**Why.** Every math page ends with "your turn", and the brief requires it. Typed numbers beat multiple choice for math (generation, no elimination), and H5P's own accessibility review ranks typed blanks far above dragged words. Eight lessons have their own version. Pattern: [fill-the-table](fill-the-table.md), [worked-example](worked-example.md).

**Build** `parts/numq.js` and `.css`:

```json
{"q": "The same kind of LED, with a 2.0 V drop, must run at 0.015 A from a 14 V bus. What resistance does its series resistor need?",
 "label": "Resistance", "unit": "ohms", "ans": 800, "tol": 5,
 "right": "Right. (14 V - 2.0 V) / 0.015 A = 800 ohms.",
 "misses": [{"near": 933, "tol": 5, "say": "That uses the full 14 V. Subtract the LED's 2.0 V drop first."}],
 "hint": "Find the voltage the resistor must drop, then divide by the current.", "showAfter": 2}
```

Table mode: `rows` of cells, each `given` text or `{ans, tol}`, checked per cell. Parse "800", "800.0", "800 ohms". A worked-example block (problem, steps with reasons, Next step and Show all) can ship in the same files. Proof: lighting-systems "LED math".

### 5. Drag-to-order (not shared; drag missing)

**Why.** Procedures are half of avionics work, and the order is often the safety rule (power off before touching the person; the troubleshooting order for a databus squawk). Three lessons have tap-in-order copies. Pattern: [drag-to-order](drag-to-order.md).

**Build** `parts/order.js` and `.css`: data `{steps:[{t, why}], shuffle:[...], good, done, bad}`. Tap in order is the base; drag to reorder on top (pointer events, the same hold-and-drop feel as `.rsort`); keyboard: Space to lift, arrows to move, Space to drop, each move announced. Check order marks each position. Proof: shop-emergencies "Contact".

### 6. Shared figure parts: labeled graphic and state toggle (not shared)

**Why.** The two most used figure interactions in the rebuilt lessons, built over and over with different class names. Patterns: [labeled-graphic](labeled-graphic.md), [state-toggle-figure](state-toggle-figure.md).

**Build** `parts/hotfig.js` and `.css`:

- Labeled graphic: `{img|svg, markers:[{n, k, x, y, h, t, poly?}], panelStart}`; marker buttons with `aria-pressed`, optional SVG overlay polygons that light the selected part, a live panel, visited ticks, pulse only once and never under reduced motion.
- State toggle: `{states:[{k, label, says, img?}], tried:true|false}`; a `role="group"` of `aria-pressed` buttons that set `data-state` on the figure (the lesson's own SVG or script reacts to it), a live "says" line, and an optional tried-list.
Proof: safety-data-sheets "Risk diamond" and efis-glass "Red X".

### 7. Branching scenario with more than one decision (one-decision version not shared; multi-step missing)

**Why.** Judgment calls are where maintenance errors happen: sign or not, use the part or not, release or not. Rise, H5P and Evolve all branch over several decisions; ours handle one. Pattern: [scenario-branching](scenario-branching.md).

**Build** `parts/scene.js` and `.css`: `{start, nodes:{id:{title, narr, prompt, img?, choices:[{lab, text, to}]}}, ends:{id:{bad, title, text}}}`. Render a node; a choice goes to a node or an end; bad ends offer Try again from the last decision or from the start; the end shows the path taken. Focus to the new title on each step. Proof: move safety-data-sheets "Label scene" onto it, then build one two-step scene.

### 8. Matching (missing)

**Why.** Fault to meter signature, pin to signal, test to rule, symbol to part. Rise, Storyline and Evolve all have it. Pattern: [matching](matching.md).

**Build** `parts/match.js` and `.css`: `{pairs:[{a, b, why}], extra:[...]}`; tap left then right on desktop, native `<select>` cards under 720 px; Check marks pairs with the why. Proof: a new page in the next wiring lesson.

### 9. Pause points in the lecture video (missing) **owner change**

**Why.** Questions between lecture segments halved mind wandering and improved test scores (Szpunar, Khan and Schacter 2013). H5P Interactive Video and Evolve both do it. Pattern: [interactive-video](interactive-video.md).

**Build**: an optional `checks` array in `lecture.json` (`{after: chapterIndex, q, opts, ans, fb}`) and a pause at the chapter's end that shows a shared `.ask` overlay, resuming on Continue, never locking the seek bar. This needs a change to `core/lecture-player.js`, so it is the owner's build, not a lesson builder's.

### 10. Process stepper (not shared)

**Why.** Procedures, chains and staged calculations; three shapes exist. Pattern: [process-stepper](process-stepper.md).

**Build** `parts/stepper.js` and `.css`: `{steps:[{k, h, t, q?, qs?, img?, alt?, cr?}], close?}`; strip of step buttons with `aria-current="step"`, panel in a live region, Back and Next, a close rule box after the last step. Proof: antennas-coax "Install".

### 11. Flip cards (not shared)

**Why.** Used in about twenty lessons; a retrieval tool when the front asks for an answer. Small. Pattern: [flip-cards](flip-cards.md).

**Build** `parts/flip.js` and `.css` from the safety-data-sheets version: `{cards:[{front, sub, back:[{k, t}]}]}`, button with `aria-pressed`, face `aria-hidden` swap, label update, reduced motion swap. Proof: safety-data-sheets "Materials".

### 12. Checklist with saved ticks and print (missing in shared form)

**Why.** The job aid that goes to the hangar floor; Rise's checkbox list does not save ticks. Pattern: [checklist](checklist.md).

**Build** `parts/checklist.js` and `.css`: `{title, items:[{t, fields:["Where I think it is"]}]}`, native checkboxes in labels, ticks saved through `AeroLesson` state (with a `localStorage` fallback wrapped in try and catch), a print stylesheet with write-in lines. Proof: shop-emergencies "Labels".

### 13. Timeline (not shared)

**Why.** History and incident pages, which Nick now wants more of. A variant of the stepper with a figure that changes per step and year stops. Pattern: [timeline](timeline.md).

**Build** as a mode of item 10 (`mode: "timeline"`, stops with a year or short label, `figState` per step) rather than a new part.

### 14. Image compare slider (missing; build only on Nick's yes)

**Why last.** Useful for still before-and-after pairs (crimps, corrosion, a red X), but Nick rejected a wipe where the difference was motion, H5P's version is rated "requires alternative activity", and aligned photo pairs are hard to source. Pattern: [image-compare-slider](image-compare-slider.md).

**Build** `parts/compare-slider.js` and `.css`: two aligned images, a native range input as the handle, two buttons for each end, a required written difference. Show Nick one example before building more.

## Worth building later (too large for one builder, or consolidation only)

- **3D scene shell** (`.m3d` copied on about ten pages): lifecycle on `lp:enter` and `lp:leave`, WebGL check with still fallback, HTML labels with leader lines, view buttons, memory release. High value for reliability; coordinate with `../media-motion/`.
- **Meter trainer** with modes and a job list (component family F5) and the **Electric Ink bench** with a circuit config (family F4). Large; each is its own project.
- **Slot circuit builder** ([build-the-circuit](build-the-circuit.md)) and **record builder** ([build-the-record](build-the-record.md)).
- **Experience demo** timing harness ([experience-demo](experience-demo.md)): start overlay, timer, result store, replay hook.

## What we deliberately do not copy

- Rise's stock photo banners, illustrated scenario characters and bright themes (kit research, section 1d).
- Free-click hotspot questions with no visible candidates (H5P Find the Hotspot), drag-only activities, and auto-advancing carousels (NN/g: frames after the first are mostly missed).
- AI-generated blocks or questions shipped without review. Rise's AI Assistant now drafts blocks and knowledge checks from a document; any drafting help we use must still pass the item-writing rules and Nick's writing rules before a page ships.

## Sources

- Shared parts today: `aero-caet-source/frontend/public/core/lesson-parts.js` and `.css`; build rules: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md` ("Files you may change"); component families: `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`
- Rise 360 lesson and block types: https://www.articulatesupport.com/article/Rise-Lesson-and-Block-Types
- Rise 360 release notes: https://help.rise.com/en/articles/3508729-rise-release-notes
- Rise 360 accessibility maturity plan: https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- Rise 360 AI Assistant: https://community.articulate.com/kb/user-guides/rise-360-create-content-with-ai-assistant/1199630
- Articulate Q1 2026 feature release: https://www.articulate.com/blog/articulate-feature-release-whats-new-in-q1-2026/
- Storyline 360 freeform questions: https://community.articulate.com/series/articulate-storyline-360/articles/articulate-storyline-360-user-guide-how-to-add-freeform-questions
- Storyline 360 form-based questions: https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-add-form-based-questions
- Evolve content authoring: https://www.intellum.com/products/evolve-content-authoring ; components: https://clients.intellum.com/student/path/853033-course-components
- H5P content types: https://h5p.org/content-types-and-applications
- H5P accessibility ratings by activity (LibreTexts): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- Szpunar, K. K., Khan, N. Y., and Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering and improve learning of online lectures. PNAS, 110(16), 6313-6317. https://doi.org/10.1073/pnas.1221764110
- NN/g, Designing effective carousels: https://www.nngroup.com/articles/designing-effective-carousels/
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html ; Target Size (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
