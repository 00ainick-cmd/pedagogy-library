# HyperFrames in lessons: short teaching videos inside a paged lesson

Written 2026-10-01. For anyone adding a HyperFrames clip to a CAET lesson page.

**In plain words:** HyperFrames turns a web page into a video. We draw the system (a wire, a scope, a VOR station),
animate it on a timeline, and render an MP4. In a lesson, a clip is the right choice when the student needs to watch
something change in order, with the important part highlighted at the right moment. If the student should be the one
changing it, build a sim or a stepped figure instead (`simulations.md`, `scroll-techniques-in-lessons.md`).

---

## 1. What it is and where it lives

- **HyperFrames** (HeyGen, Apache-2.0 licence, [github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes))
  renders video from an HTML file. The file declares timing with `data-*` attributes and one paused GSAP timeline;
  the renderer seeks that timeline frame by frame in headless Chrome and encodes with FFmpeg. Motion must be a pure
  function of time: no `Math.random()`, no `Date.now()`, no network.
- **Home:** `OneDrive/E-Learning Development/aero-video-studio/` (the established studio). Front door:
  `HYPERFRAMES-START-HERE.md`. Builder rules: `_builder-kit.md`, `AGENTS.md`. Skill: `~/.claude/skills/hyperframes/`
  (routes to `general-video` or `motion-graphics`) and `aero-video-builder`.
- **Render:** `.\Render-CaetVideo.ps1 -Composition '<file>.html' -Output '<full path>.mp4'` (add `-CheckOnly` to
  validate). It stages one master, checks it with CLI 0.8.78, renders, and writes a contact sheet. The studio root's
  npm scripts stay pinned to 0.7.5; do not bump them.
- **Queue:** `docs/references/caet-lesson-enhancements/video-proposals.csv` (70 unique proposals: 28 explainers, 23
  simulator recordings, 19 phone demonstrations, each with source gates). Pick a proposal ID before building.
- **Style reference:** Nick's `D31-3-talker-listener.mp4` (system or bench view first, one explanation at a time,
  highlight the exact wire or reading, captions in a lower band, end on a diagnostic question and a held frame).

---

## 2. When a clip teaches (and when it does not)

The research is clear that motion is not better than a good still picture by default. Tversky, Morrison and
Betrancourt found that many studies where animation "won" had given the animated group more information or more
interaction than the static group
([Tversky, Morrison and Betrancourt 2002](http://serc.carleton.edu/files/NAGTWorkshops/visualize04/Tversky_2002.pdf)).
Animation helps when the change itself is the content (congruence) and when it is slow and clear enough to perceive
(apprehension). Spoken commentary helps an animation, and blocks of text competing with it hurt
([Berney and Betrancourt 2016](https://archive-ouverte.unige.ch/unige:92234)): a clip gets narration or one short
caption at a time. See `animation.md` section 1.

| Use a HyperFrames clip | Use something else |
|---|---|
| A process the student cannot see and cannot drive yet: a databus conversation, an ILS signal forming, a transponder reply | The student can drive it: build a sim or a slider figure |
| A simulator walkthrough recorded with timed highlights (D09 probe polarity in the Circuit Lab) | One still state matters: a labeled figure |
| A real shop procedure on approved footage, packaged with captions and callouts | A number the student must work out: a worked example |
| An incident timeline told from the official report | A fact list: graphical text block |
| A narrated overview before a sim, so the sim has context | Decoration, mood, a "hook" with no teaching point (banned) |

---

## 3. Three ways a clip lands on a lesson page

### A. Rendered MP4 in a `<video>` (default)

Already in use: `dc-fundamentals/lessons/current-lesson.html` (current-direction.mp4),
`digital-databus/lessons/mil-std-1553.html` (concept-databus-conversations.mp4),
`flight-instruments/lessons/efis-glass.html` (concept-efis-data-path.mp4).

```html
<figure class="vid">
  <video controls playsinline preload="metadata" poster="assets/<lesson>/clip-poster.jpg"
         aria-label="What the clip teaches, in one sentence">
    <source src="assets/<lesson>/clip.mp4" type="video/mp4">
    <track kind="captions" src="assets/<lesson>/clip.en.vtt" srclang="en" label="English" default>
  </video>
  <p class="credit">Animation: AEA. Source: FAA-H-8083-30B, Chapter 10.</p>
</figure>
```

- Controls always on; never `autoplay loop` a teaching clip in a CAET lesson (the old AERO player "video beat"
  sketch in `player-integration/video-beat.html` autoplays and loops; that was for the narrated course player).
- `preload="metadata"` on the page where it plays, `preload="none"` if the page is far down the lesson.
- The pager already pauses `video` and `audio` when a page is left (`lesson-pager.js`, `pauseIn`). Nothing extra needed.
- Captions: a WebVTT file for narrated clips. A silent clip carries its teaching sentence in the `aria-label` and on
  the page.
- Size guide from real renders: concept-databus-conversations.mp4 is 1.9 MB for 32 s; D09 probe polarity is 5.3 MB for
  92 s (both 1920 x 1080, H.264). Keep a clip under about 6 MB.

### B. The live composition in an iframe (no MP4)

The house already has the two small scripts for this: `frontend/public/core/concept-animation-host.js` (in the page:
plays the iframe's timeline only while at least 30 percent of it is on screen and the tab is visible, plus a full
screen button) and `core/concept-animation-frame.js` (inside the composition: scales the 1920 x 1080 root to fit, plays
on the host's message, and under reduced motion jumps the timeline to its final frame and stops). Because a hidden
pager page is not intersecting, the clip pauses on page change by itself.

Use it when the clip must stay sharp at any size, or is short and has no audio. Cost: GSAP runs live on the phone.

### C. A stepped or scrubbed clip (the student controls the pace)

`@hyperframes/player` (Apache-2.0, version 0.8.78 in the local checkout,
`aero-video-studio/tools/hyperframes/packages/player/README.md`) is a web component that loads a composition and
exposes `play()`, `pause()`, `seek(seconds)`, `currentTime`, and `ready`, `timeupdate` and `ended` events.

```html
<hyperframes-player id="clip" src="assets/<lesson>/vor-phase/index.html" poster="assets/<lesson>/vor-phase.jpg"
  width="1080" height="1080" disable-click-to-play></hyperframes-player>
<ol class="steps" data-for="clip">
  <li><button data-t="0">1. Reference signal</button></li>
  <li><button data-t="6">2. Variable signal</button></li>
  <li><button data-t="12">3. Compare the phase</button></li>
  <li><button data-t="18">4. Read the radial</button></li>
</ol>
<script type="module">
  import "/aero/vendor/hyperframes-player/hyperframes-player.js"; // example path: vendor the player first (sources.md)
  const p = document.getElementById('clip');
  document.querySelectorAll('[data-for="clip"] button').forEach(b =>
    b.addEventListener('click', () => { p.seek(+b.dataset.t); p.play(); }));
  // each step's segment ends on a hold: pause at the next step time (timeupdate) so the student reads, then taps on
</script>
```

This turns one clip into learner-paced segments that stop by themselves at each step boundary, which is what the
segmenting research supports ([Mayer and Chandler 2001](https://eric.ed.gov/?id=EJ638751);
[Rey et al. 2019](https://maria-wirzberger.de/wp-content/uploads/2019/01/Rey2019_Article_AMeta-analysisOfTheSegmentingE.pdf)).
Do not rely on the player's own play and pause: students rarely use them
([Hasler, Kersten and Sweller 2007](https://www.runi.ac.il/media/j2jbwbjw/learnercontrolcognitiveloadandinstructional.pdf)). It is the bridge to the scrubbed explainers in
`scroll-techniques-in-lessons.md`: a slider can call `seek()` too. Vendor the player file into the site rather than
loading it from a CDN at run time.

---

## 4. Phone first: the text size math

A lesson is reviewed on a phone. A 16:9 clip shown inline on a 390 px phone is about 358 px wide, so everything in a
1920 px frame shrinks to 19 percent.

| Frame | Shown at | Scale | Smallest text in the composition for 16 px on screen |
|---|---|---|---|
| 1920 x 1080 (16:9) inline on a phone | 358 px wide | 0.19 | 86 px |
| 1920 x 1080 full screen, phone turned sideways | 844 px wide | 0.44 | 36 px |
| 1080 x 1080 (1:1) inline on a phone | 358 px wide | 0.33 | 48 px |
| 1080 x 1350 (4:5) inline on a phone | 358 px wide | 0.33 | 48 px |

The current CAET masters draw text at 23 to 70 px in a 1920 frame (for example `D09-1-probe-points-polarity.html`),
which is 4 to 13 px on a phone inline. They read only full screen and sideways. Rules from now on:

1. **Inline explainers render square (1080 x 1080) or 4:5**, with no text under 48 px and labels kept to a few words.
2. **16:9 is for full-screen viewing** and simulator recordings; give it a "Watch full screen" control and text no
   smaller than 36 px.
3. **Captions in a lower band** that never covers a label (studio style rule 4). Labels never sit on a line or a shape
   (`_builder-kit.md`; `graphics-standard.md`).
4. Use the lesson's own look: Electric Ink tokens (`graphics-standard.md` section 2), so the clip looks like part of the
   page. The studio's older green-black "AERO" style (`_builder-kit.md`) was made for the narrated course player.

---

## 5. Build checklist (one clip)

1. Choose the proposal ID, the lesson page it lands on, the misconception it fixes and the one thing the student can
   do after watching. Check `video-proposals.json` for source gates and answer them first.
2. Check what already exists in `aero-video-studio/renders/` (54 compositions, many CAET concepts) before building.
3. Read `AGENTS.md`, `_builder-kit.md`, the `hyperframes` skill, then `hyperframes-core`. One paused timeline at
   `window.__timelines["main"]`, `class="clip"` and `data-start`, `data-duration`, `data-track-index` on timed
   elements, local fonts only.
4. Technical traps from `_builder-kit.md`: never call `getTotalLength()` on an element not in the DOM (blank render);
   per-frame `setAttribute` on an SVG `<line>` or a group transform is not picked up (move a `<rect>` or animate with
   GSAP transforms).
5. Script it: one idea, under 2 minutes, each term introduced when it is needed, one highlight at a time, end on a held
   frame and a question. Values from a training simulator are labeled as training values.
6. Render with the wrapper, then LOOK at the contact sheet and at least the first frame, each teaching change, and the
   final hold. Check text size at phone scale.
7. Deliver: the HTML master, the MP4, a poster JPG, captions (VTT) or the on-page text, source notes, and the exact page
   it goes on. Put the files in the course's `lessons/assets/<lesson>/` folder.
8. In the lesson's browser test: the video element loads, its poster shows, and it pauses when the page is left.

---

## 6. CAET examples

| Lesson | Clip | Route | Why motion teaches here |
|---|---|---|---|
| Current | `current-direction.mp4` (built, in use) | A | Conventional and electron flow on the same circuit, same 3.6 A reading |
| Multimeter, Voltage | D09-1 probe points and polarity (rendered 2026-09-26) | A, full screen | Reversing the probes changes the sign, not the size |
| Digital Signals | D25-1 receiver voltage bands (rendered) | A or C | The same bit survives a changing voltage until it leaves its band |
| MIL-STD-1553 | `concept-databus-conversations.mp4` (built, in use) | A | Who speaks, who listens, who waits |
| Databus Types | `concept-arinc429` (master exists) | C, stepped by field | Label, SDI, data, SSM, parity arrive in order on the wire |
| ILS and DME | `concept-ils` (master exists); DME slant range (to build) | C | Lobes overlap into a course; slant range grows with altitude |
| Radio Navigation | `concept-vor` (master exists) | C, as the overview before the VOR fly sim | Phase difference becomes the radial |
| Transponders | `concept-transponder` (master exists) | A | Interrogation and reply timing |
| Gyroscopic Instruments | `attitude-indicator` (master exists) | A, then the gyro 3D scene | Horizon and aircraft symbol through a turn |
| Transformers | Transformer induction (to build, on the studio's priority list) | C | Changing flux in the core makes the secondary voltage |
| Incidents (history pages) | Incident timeline in the `hf-scenario-timeline` style | A | Events in order from the official report |

---

## 7. Limits

- A video cannot check understanding. Pair every clip with a predict question before it or an ask card after it.
- MP4s do not change when the lesson text changes. Note any line a clip says that the lesson no longer says (the same
  rule as the lecture `LECTURE-NOTES.md`).
- Rendering needs local Chrome and FFmpeg (path in `_builder-kit.md`); the studio root is a catalog of masters and the
  0.8.78 CLI rejects it as one project, so always use the wrapper.
- On phones, audio inside an iframe needs a tap in the same frame; `@hyperframes/player` handles this for same-origin
  compositions. MP4 with controls avoids the issue.
- The Lecture Video page (page 3 of every lesson) is the hangar lecture player (`lecture-player.js`), not HyperFrames.
  Lectures are not rebuilt in this pass.
