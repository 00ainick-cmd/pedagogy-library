# HyperFrames: lesson clips and classroom lecture decks

Written 2026-10-01. How to place a clip on a lesson page, the phone text-size math and the build checklist for one
clip are in [Lesson Craft: HyperFrames in lessons](../craft/media-motion/hyperframes-in-lessons.md). This
file is about the tool itself and the two production lines that use it.

**In plain words:** HyperFrames turns a web page into a video. You write the scene as HTML and animate it on a
timeline; HyperFrames plays the timeline frame by frame in a hidden browser and saves an MP4. Because the scene is
code, the same input always makes the same video, a changed line of narration moves its animation with it, and a
figure can be drawn exactly as the technician will see it. The CAET course uses it twice: for short teaching clips
inside lesson pages, and for the narrated classroom lecture of every lesson.

---

## What it is

- **HyperFrames** is an open-source renderer from HeyGen (Apache-2.0,
  [github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)).
- A **composition** is an HTML file. Its elements declare when they appear with `data-*` timing attributes, and the
  motion is one paused GSAP timeline (GSAP is a common JavaScript animation library). The renderer seeks that
  timeline to each frame in headless Chrome and encodes the frames with FFmpeg.
- **Motion must be a pure function of time.** No `Math.random()`, no clock reads, no network calls during a render.
  This is what makes every render identical and every frame testable.
- It needs Node.js 22 or newer and FFmpeg. It brings its own Chrome.
- It ships its own agent skills (`hyperframes`, `hyperframes-core`, `hyperframes-cli`, `hyperframes-animation` and
  others). Read `hyperframes-core` before writing a composition: it is the contract for timing, tracks and media.

## When to use it in training

| Use a HyperFrames video | Use something else |
|---|---|
| A process the student cannot see and cannot yet drive: a databus conversation, an ILS signal forming, a transponder reply | The student can drive it: a sim or a stepped figure |
| A simulator walkthrough with timed highlights | One still state matters: a labeled figure |
| An incident told from the official report, beat by beat | A number the student must work out: a worked example |
| A classroom lecture: two instructors, the idea drawn and animated on their words | A fact list: graphical text on the page |

Motion is not better than a good still picture by default. Use a clip when the change over time is the lesson
([animation](../craft/media-motion/animation.md)). A clip that only sets a mood is cut.

## How to start

```
npx hyperframes init my-clip          # a blank composition project
npx hyperframes lint                  # fast feedback while you write
npx hyperframes check                 # the full gate before rendering
npx hyperframes preview --background  # open the studio preview and look
npx hyperframes render                # write the MP4 (draft quality while iterating)
```

Then look at real frames from the MP4 (a contact sheet or `ffmpeg -ss <t> -i clip.mp4 -frames:v 1 frame.png`).
The check does not see bad design; only looking does.

---

## Use 1. Short clips inside lessons

| | |
|---|---|
| Home | The course's video studio folder (`aero-video-studio`, part of the course team's e-learning workspace, not public). Front door: `HYPERFRAMES-START-HERE.md`; builder rules: `_builder-kit.md` |
| Skill | `aero-video-builder` (see [skills.md](skills.md)) |
| Render | A wrapper script stages one composition and its assets, checks it, renders it, and writes a contact sheet. It refuses to overwrite an existing MP4 and keeps the source hash with each job |
| Queue | 70 proposed clips from a media review of 45 lessons: 28 explainers, 23 simulator recordings, 19 phone demonstrations, each with its source questions |
| Templates | Definition card (one term, a masked line-by-line reveal), stat punch (one hard number), concept animation (a model shown by motion), incident timeline |

The house style for clips:

1. Begin with a concrete system or bench view.
2. Introduce each term when the learner needs it, one explanation on screen at a time.
3. Highlight the exact wire, box, control or reading that matters, with calm changes and colors that carry meaning.
4. Keep captions in their own lower band, clear of the diagram's labels.
5. Change one thing, then explain the evidence. End on a diagnostic question and hold the last frame so the student
   can read it.
6. Values from a training model are labeled as such and never presented as aircraft limits.
7. Keep a clip under two minutes. Deliver the editable HTML, the MP4, a poster, captions or a transcript, source notes
   and the exact lesson insertion point.

Clips already in lessons: current direction in the Current lesson, a databus conversation in MIL-STD-1553, the EFIS
data path in EFIS.

---

## Use 2. Classroom lecture decks

Every lesson has a classroom lecture. In the 3D hangar it plays on the classroom whiteboard while two instructors,
Marcus Hale and Dana Reyes, take turns by section. The same lecture plays on page 3 of the lesson
([lesson-format.md](lesson-format.md#lecture-player)). A deck is written for the classroom on its own terms. It borrows
what it needs from the lesson and leaves the rest at the desk.

| | |
|---|---|
| Home | The CAET course repo, `tools/hangar/decks/<lesson>/` |
| Skill | `classroom-deck` (in the course repo, `.claude/skills/classroom-deck/`) |
| Voices | Kokoro-82M, an open text-to-speech model (Apache-2.0), run locally with onnxruntime-node. Marcus is a British voice, Dana an American one. The model file is checked by its SHA-256 hash |
| Canvas | 1920 by 1080 at 30 frames per second |
| Pipeline | Node only. Setup installs FFmpeg, the packages, HyperFrames' Chrome, the voice model (about 350 MB) and HyperFrames' authoring skills |
| Reference deck | Ohm's Law (`ohms-law-lesson`), approved |

### The files

```
tools/hangar/decks/<lesson>/
  script.json    what the instructors say, section by section (the source of truth)
  index.html     the scenes: one <section class="clip"> per script section, animated on the line times
  build/         made by the build, never committed
tools/hangar/decks/shared/
  deck.css       the shared look: dark ink, the course fonts, a fixed color per electrical quantity
  deck.js        timing helpers and motion helpers (draw, flow, count, ticks)
```

### The script

Six to nine sections, each one idea of 15 to 30 seconds, voices alternating and starting with the low voice. A hook
first (a real aircraft or shop moment), a recap last that hands off to the knowledge check. `objectives` and
`left_out` (what the deck leaves to the lesson page, and why) are filled in. From the Ohm's Law deck:

```json
{
  "lesson": "ohms-law-lesson",
  "objectives": ["State Ohm's Law and select the correct form of the equation for a given unknown.", "..."],
  "left_out": ["Series strings and Kirchhoff's Voltage Law: taught in the Series Circuits classroom.",
               "The live sandbox and the tap tiles: they stay on the lesson page at the desk."],
  "sections": [
    { "id": "law", "title": "E = I x R", "voice": "low",
      "lines": [ { "text": "Put them together and you have Ohm's Law: E = I x R.",
                   "say":  "Put them together and you have Ohm's Law: E equals I times R." },
                 "Voltage equals current times resistance.",
                 "To get the other two forms, cover the one you're solving for." ] },
    { "id": "recap", "title": "Recap", "voice": "high", "lines": ["..."],
      "handoff": "Try the knowledge check at your desk." }
  ]
}
```

A line is plain text, or a `text` and `say` pair when the caption and the spoken words differ (symbols and numbers).

### The scenes

`index.html` has one clip per script section. Its timing comes from the voice: placeholders for each section's start
and length are filled in from the measured narration, and every tween is placed with a helper such as
`line('law', 3, 0.5)` (halfway through line 3 of the `law` section). Rewrite a line, rebuild, and its animation moves
with it.

### Build, look, publish

```
bash tools/hangar/decks/setup.sh               # once per machine
cd tools/hangar/decks
node build.mjs ohms-law-lesson --check         # voice every line (cached), fill the timings, run the check
node build.mjs ohms-law-lesson                 # render build/deck.mp4 with the voice, for review
node build.mjs ohms-law-lesson --publish       # cut one clip and one poster per section, write lecture.json
node review.mjs ohms-law-lesson                # a review video of a published deck, without a new render
```

`--publish` writes `frontend/public/aero/hangar/lectures/<lesson>/`: the narration, one silent video clip per section,
a poster still per section, and `lecture.json`. The hangar and the lesson's lecture player both read that folder, so
nothing else changes.

### The quality bar

- **Show, do not print.** Symbols, numbers, diagrams and motion on screen; the sentences belong to the instructors and
  the captions.
- **Colors mean quantities**, the same in every deck: volts violet, amps cyan, ohms orange, power gold.
- **Nothing appears before it is said, and nothing important appears without being said.**
- **Readable on a whiteboard:** nothing under 26 pixels on the canvas, key content 60 pixels and up.
- **Technically true:** worked numbers, no claim the lesson does not support.
- **Two lessons never teach the same thing twice.** When decks overlap, split the material and record the split in
  each deck's `left_out`.

### When a lesson is rebuilt

Lecture decks are not rebuilt inside a lesson rebuild. The lesson builder writes `LECTURE-NOTES.md` listing every
lecture line or scene that now disagrees with the lesson. Once the lesson is signed off on the Squawk Board, the deck
is re-cut from those notes ([method.md](method.md#step-9-lecture-video)).

An older production line, still in the course repo (`tools/hangar/lecture/`), read each lesson's own text aloud in
the two voices while the board showed stills of the lesson's figures. The written decks above replace it lesson by
lesson.
