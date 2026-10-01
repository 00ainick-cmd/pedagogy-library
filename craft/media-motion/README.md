# Lesson Craft: media, motion, simulations and 3D

Part of the Lesson Craft section (`65-Pedagogy-Library/08-lesson-craft/`), the house standard every future CAET
avionics lesson is built to. Sibling folders cover interactions and history and incidents. Written 2026-10-01.

**For Nick, in two minutes.** When you review a lesson, your notes usually land in one of three places: fix the
graphics, make the simulations better, or add something more interactive. This folder is the fix for each, written so
a builder (person or agent) does the same thing every time:

| Your review note | Open this | What the builder does |
|---|---|---|
| "Fix the graphic" | `graphics-standard.md`, checklist in section 7 | Real FAA figure or a faithful redraw, labels beside the parts with thin leader lines, readable on a phone, credited |
| "Make the sim better" | `simulations.md`, upgrade checklist in section 4 | A goal, a prediction first, real readouts, a hidden fault to find, fewer controls at first, and a self-test that proves it works |
| "Add something more interactive" | `scroll-techniques-in-lessons.md` section 6, then `animation.md` | Turn a still figure into one the student plays forward and back with a slider or step buttons |
| "This should move" | `animation.md` | Motion only where change over time is the lesson, with pause and a still version |
| "Let me turn it around" | `three-d.md` | A 3D model of the real part, tap to name its parts, works on a phone |
| "A short video would help" | `hyperframes-in-lessons.md` | A HyperFrames clip, sized so it reads on a phone, with captions |

## The files

| File | What it covers |
|---|---|
| `graphics-standard.md` | How a lesson figure must look: source order (real figure first), the Electric Ink palette with contrast values, labels and leader lines, the phone size formula, credits, accessibility, the "fix the graphic" checklist and a before and after table |
| `animation.md` | When motion teaches (Tversky, Hoffler and Leutner, Mayer), the technical rules (start on page show, stop on leave, reduced motion, timing, cueing), recipes for current flow, a sine wave building, a signal on a bus and gyro precession |
| `simulations.md` | What PhET's research says makes a sim teach, the CAET sim recipe, the "make the sim better" upgrade checklist, worked upgrades on real CAET labs, embedding the Avionics Circuit Lab on a phone |
| `three-d.md` | When 3D earns its place, model sources, every model we own, the house three.js pattern (page life, orbit, labels with leader lines, phone memory, WebGL fallback), fixes worth making once, and the models to build next |
| `hyperframes-in-lessons.md` | HyperFrames clips in a paged lesson: when a clip teaches, three ways to place one (MP4, live composition, stepped player), the phone text size math, the build checklist, CAET examples, limits |
| `scroll-techniques-in-lessons.md` | Which Scrollcraft techniques survive inside a paged, phone-first lesson: one progress number driven by a slider or step control instead of page scroll, the device translations, the databus "bit clock" |
| `sources.md` | Vetted library table (licence, how to load, best use, caution) and every research source cited in this folder |

## Related notes in this section

- `../interactions/`: the single interaction patterns these files build on, especially `live-model.md` (a sim on the
  page), `state-toggle-figure.md` (a figure with named states), `predict-then-reveal.md`, `3d-object-explorer.md`,
  `image-compare-slider.md` (the before and after wipe), `interactive-video.md` and `labeled-graphic.md`.
- `../history-incidents/`: history and incident pages (incident timelines are one place a HyperFrames clip fits).

## Constants every file assumes

- **Lesson model:** the approved Safety Data Sheets lesson (2026-09-30) and `curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
  in the CAET course repo, `aero-caet-source` (private).
- **Pager hooks:** `lp:enter` and `lp:leave` fire on the page section (bubbling); `lp:page` on the document;
  `window.AeroLessonPager.current()` gives the page showing. The pager pauses only video, audio and lecture players.
- **Palette:** Electric Ink tokens (`--ink #0a0b0d`, `--paper #eef1f4`, voltage violet `#b48cff`, current cyan
  `#39d7ff`, resistance amber `#ff9e3d`, ok `#5ddb9a`, bad `#ff6b6b`).
- **Phone test size:** 390 x 844; desktop 1280 x 800. Look at every screenshot.
- **Writing:** plain, no em or en dashes, units on every number, every term defined the first time.

## Where things live

| Thing | Path |
|---|---|
| Lesson sources (one folder per lesson) | `aero-caet-source/tools/curriculum/revamp/examples/<lesson>/` |
| Built lessons | `aero-caet-source/frontend/public/aero/courses/<course>/lessons/` |
| Shared lesson parts and pager | `aero-caet-source/frontend/public/core/` (`lesson-parts.*`, `lesson-pager.*`) |
| three.js r186 and tool models | `/aero/hangar/vendor/three/`, `/aero/tools3d/` (registry and GLBs) |
| Avionics Circuit Lab (sim home) | `OneDrive/CAET/CAET 9 Week Program/CAET 9 Week Program/Avionics Circuit Lab - work/` |
| Video studio (HyperFrames) | `OneDrive/E-Learning Development/aero-video-studio/` |
| Scrollcraft skill and trial build | `~/.claude/plugins/marketplaces/nateherk/plugins/nateherk-design/skills/scrollcraft/`, `OneDrive/E-Learning Development/scrollcraft/` |
| Visual design (the page look, SVG parts bin; replaces the retired Art Library) | `../visual-design/` |
| Skills | `simulation-builder`, `hyperframes`, `aero-video-builder`, `slide-builder` in `~/.claude/skills/` |

Note for the library's validator: `_schema/validate.py` walks every `.md` file under the library (`rglob`) and checks
it against the chapter schema. These Lesson Craft notes are practice guides, not chapters, so they will be reported as
failures until `08-lesson-craft` is added to `EXCLUDE_DIRS` in that script.
