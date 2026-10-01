# Agent skills in this workflow

Written 2026-10-01.

**In plain words:** much of the CAET course is built by AI coding agents working from written instructions. A
**skill** is one folder of those instructions: a `SKILL.md` file whose first lines say what the skill is for and when
to use it, followed by the steps, the rules and links to reference files. The agent loads a skill when a task matches
its description. Skills are how a rule the owner set in one review ("plain noun headings", "never redraw a working
sim") reaches every later build without being repeated.

This page lists the skills in the workflow, one line each, and says which come with this library.

---

## Which skill for which step

| Pipeline step | Skill |
|---|---|
| Plan | `caet-player-editor` for coverage thinking; the Blueprint itself is planned from a written brief, not a skill |
| Brief, page copy, build | `lesson-revamp`, with `nick-aet-voice` for the words |
| One stand-alone card | `cardcraft`, or `author-card` from the public extract |
| A sim or lab | `simulation-builder` |
| A short teaching video | `aero-video-builder`, on the `hyperframes` skills |
| A classroom lecture | `classroom-deck`, on the `hyperframes` skills |
| Audit an existing lesson file | `audit-lesson` |
| A scroll-driven page outside the pager | `scrollcraft` |

---

## Skills that come with this library

These four skills and the lint tool come from the public `html-training-craft` extract (MIT), which is being folded
into this library.

| Skill | What it does |
|---|---|
| `html-training-craft` | The router. Read first; it sends the job to one of the three below and opens the gold card so the agent knows what good looks like |
| `audit-lesson` | Audits an uploaded lesson HTML file like an instructional designer: fails it against the gold cards and your `voice.md`, then rewrites the teaching |
| `author-card` | Builds one 16:9 teaching card from the gold catalog: job first, copy the pattern, swap the content |
| `ingest-voice` | Turns writing you own (books, scripts, workbooks) into a `voice.md` for your project. It never ships a default voice |
| `tools/validate.py` (a lint, not a skill) | Fails a file for em or en dashes, banned filler phrases, outside files, and flags the font floor |

One difference to know: the extract's cards gate Continue until the student performs the card's action. The paged
CAET lessons never gate Continue on an activity. Follow the rule of the format you are building.

## Skills in the CAET course repo

Kept in the course repo (`aero-caet-source`, private) at `.claude/skills/`, so every agent working in that repo gets
them.

| Skill | What it does |
|---|---|
| `lesson-revamp` | Rebuilds a lesson to the approved standard: inventory, tag, storyboard, approval, rebuild, test, hand over. Holds the page shape, the shared parts, the test commands and the traps already paid for |
| `classroom-deck` | Builds, revoices or fixes a classroom lecture deck: the script, the scenes, the voice, the check, the render and the publish, with the locked voices and look |

## Skills in the CardCraft library

| Skill | What it does |
|---|---|
| `cardcraft` | Builds one card to its type's contract: type from the objective's verb, then recipe, then build; scores it with the card gate; writes its notes file |

## The author's own skills

These live in the author's personal agent setup and are not published. They are listed so you can see the shape of
the workflow and write your own.

| Skill | What it does |
|---|---|
| `nick-aet-voice` | Writes lesson copy in the course owner's voice: reads his certification book and style guide first, keeps his locked definitions and meter hookup steps, cuts magazine-style filler, no dashes. Its example passages are private; to make your own, run `ingest-voice` on writing you own |
| `simulation-builder` | Builds a simulation from a slider demonstration up to a diagnostic sim with a solver, hidden faults and scoring. Six laws (scenarios are data, every value from the live solve, self-check through the real handlers, hidden faults) and the `autoSolve` contract |
| `slide-builder` | Builds a full-screen teaching slide in one of eleven types (narrated, case study, animated, flip, check, simulator, hotspot, drag to order, guided procedure, before and after, branching). Its interaction mechanics are reused in lesson parts; its slide frame is not |
| `aero-video-builder` | Makes a short motion-graphics clip with HyperFrames: brainstorm whether motion teaches, pick a template, render, look at real frames, hold the last frame |
| `visual-learning-builder` | Builds rich visual learning pages for the author's own study. Not for student material, but its block vocabulary (hero stat, pull quote, term card) shaped the lessons' graphical text |
| `caet-player-editor` | Writes a lesson as a textbook chapter first, one section per concept, then marks where interactions wrap the prose. Useful as a coverage check |
| `electric-ink-builder`, `electric-ink-id` | Build and design rules for the earlier, scrolling "Electric Ink" lessons, with Continue locked until each activity is done. Superseded by the paged format; kept for their reference material |
| `aero-training` | A router for an older training factory. Superseded for CAET lessons |
| `aero-course-player-builder` | Builds a narrated, SCORM-packaged multi-lesson course in a separate course player shell (SCORM is the standard way a course reports to a learning management system) |
| `aero-course-projector` | Builds the slides, interactions and video for that narrated course shell from an approved authoring file |
| `aero-course-inspector` | One quality gate for a built narrated course: contrast, font floor, language completeness, dashes, balance |
| `aero-export-packager` | Validates and packages a narrated course as a SCORM zip with progress tracking |

## Public third-party skills used

| Skill | What it does |
|---|---|
| `hyperframes` and its family (`hyperframes-core`, `-cli`, `-animation`, `-audio`, `-keyframes`, `-creative`, `-registry`, `-studio`, `general-video`, `media-use`) | Ship with HyperFrames (Apache-2.0). The entry skill routes a video job; `hyperframes-core` is the composition contract; the rest cover the command line, animation recipes, audio, media and studio review. See [hyperframes.md](hyperframes.md) |
| `scrollcraft` | Builds a scroll-driven page after an interview, with a uniqueness registry and self-screenshots (MIT). See [scrollcraft.md](scrollcraft.md) |

---

## Writing your own skill

1. **One folder, one `SKILL.md`.** The first lines are a `name` and a `description`. The description says what the skill
   does, when to use it, and when not to (name the other skill that owns that job). Agents choose skills from this line.
2. **Point to the standard, do not copy it.** A skill that repeats the build standard drifts from it. Link to the one
   standard and add only the workflow.
3. **Write down every rule that came from review**, with the reason in a few words. "Plain noun headings; slogans were
   rejected three times" teaches the next agent more than "write clearly".
4. **Name the reference build.** "Copy the approved Safety Data Sheets lesson" gives an agent something to open.
5. **Keep a "gotchas already paid for" list.** Each trap found once is written down so it is never paid for twice.
6. **Say what the skill must never do**: publish, merge, edit shared files, touch another builder's lesson.
