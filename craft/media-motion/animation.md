# Animation in lessons: when motion teaches, the technical rules, and four recipes

Written 2026-10-01 for every CAET lesson page that moves.

**In plain words:** motion is worth adding only when the thing we are teaching moves or changes over time (current
flowing, a sine wave building, bits travelling on a bus, a gyro tipping 90 degrees away from the push). Even then, the
student should be able to stop it, step it and replay it. Motion that only decorates makes a lesson worse, not better.
Every animation starts when its page shows, stops when the page is left, and has a still version for people who turn
motion off.

---

## 1. When motion teaches (the research in seven lines)

1. **Animation is not better than a good still picture by default.** Tversky, Morrison and Betrancourt reviewed the
   studies and found that most cases where animation "won" had shown the animated group more information (steps the
   still version left out) or given it more interaction. Animation fits change over time (the **congruence**
   principle) but only if it is slow, clear and schematic enough to be perceived (the **apprehension** principle); a
   well-drawn sequence of still frames with arrows may teach as well
   ([Tversky, Morrison and Betrancourt 2002](http://serc.carleton.edu/files/NAGTWorkshops/visualize04/Tversky_2002.pdf)).
2. **Representational motion helps; decoration does not.** Across 26 studies and 76 comparisons, animation beat static
   pictures by d = 0.37 overall: d = 0.40 when the animation showed the content itself, and d = 1.06 for
   procedural and motor knowledge, such as how to do something with your hands
   ([Hoffler and Leutner 2007](https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis)).
   A later meta-analysis of 61 studies found a smaller overall gain (g = 0.226), larger with spoken commentary
   (g = 0.336) and largest with no text competing on screen (g = 0.883)
   ([Berney and Betrancourt 2016](https://archive-ouverte.unige.ch/unige:92234)): pair motion with a short caption or
   narration, never a paragraph.
3. **Cut it into segments.** Breaking an explanation into short pieces with a Continue between them improved retention
   (d = 0.32) and transfer (d = 0.36) across 88 comparisons
   ([Rey et al. 2019](https://maria-wirzberger.de/wp-content/uploads/2019/01/Rey2019_Article_AMeta-analysisOfTheSegmentingE.pdf));
   the classic study cut a narrated animation into 16 pieces of 8 to 10 seconds
   ([Mayer and Chandler 2001](https://eric.ed.gov/?id=EJ638751)).
4. **Build the pauses in; do not count on a pause button.** Learner-paced animation beat system-paced animation even
   though students rarely pressed stop and play ([Hasler, Kersten and Sweller 2007](https://www.runi.ac.il/media/j2jbwbjw/learnercontrolcognitiveloadandinstructional.pdf));
   only 5 of about 80 PhET interviewees found play and pause buttons on their own
   ([Adams et al. 2008, Part II](https://phet.colorado.edu/publications/archive/PhET%20interview%20Paper%20Part%20II.pdf));
   learners with full playback control "rarely chose to pause on the frames that were of most relevance"
   ([Lowe 2004](https://www.ascilite.org/conferences/perth04/procs/lowe-r.html)). So a teaching animation stops by
   itself at the end of each step and waits for Next. Pause and replay controls still help a hands-on procedure
   ([Schwan and Riempp 2004](https://doi.org/10.1016/j.learninstruc.2004.06.005), nautical knots).
5. **Motion is transient and grabs the eye.** Novices watch what is bright and fast, not what matters
   ([Lowe 2004](https://www.ascilite.org/conferences/perth04/procs/lowe-r.html)), and anything that has moved off screen
   must be held in memory ([Castro-Alonso, Ayres and Paas 2014](https://repub.eur.nl/pub/67433)). Leave a trace or a
   ghost of the last state, or show key states side by side.
6. **Cue in space and in time, then make the student do something.** Spreading color along the part that is acting,
   in step with the motion, helped where arrows only drew the eye; cues alone do not produce understanding, so pair them
   with a question or an action
   ([de Koning, Tabbers, Rikers and Paas 2009](https://repub.eur.nl/pub/16961/)). For a mechanism, show two linked parts
   at a time in cause and effect order (pressure moves the diaphragm, then the diaphragm moves the pointer), then the
   whole ([Lowe and Boucheix 2016](https://lead.ube.fr/wp-content/uploads/2023/09/001168-principled-animation-design-improves-comprehension-of-complex-dynamics.pdf)).
7. **Watching is not learning; acting is.** In PhET interviews "anything in motion draws the student's attention
   first", but students who only watched took what they saw as fact without understanding it; learning began when they
   changed something and saw the response ([Adams et al. 2008, Part I](https://phet.colorado.edu/publications/PhET_Interviews_I.pdf)).
   A slider or a step control is better than a play button. "We must not be slaves to real time"
   ([Bret Victor, Up and Down the Ladder of Abstraction](http://worrydream.com/LadderOfAbstraction/)).

**The house decision rule.** Animate only when all four hold:
- the change over time IS the concept (not a transition, not a flourish);
- the student cannot easily see it in the real world (current, fields, bits, precession);
- it is cued: one moving thing at a time, the rest dimmed, a label and the quantity color on the moving part;
- the student drives it or it stops at each step: a slider, a step strip with Next, or a drag on the figure (see
  `scroll-techniques-in-lessons.md`); a play button is extra, not the only control.

If a point only needs two or three states, show them side by side as still frames (before, during, after). Small
multiples let the eye compare without memory.

---

## 2. Technical rules (every animation, every time)

### 2a. Start on page show, stop on page leave, stop in a hidden tab

The pager fires `lp:enter` and `lp:leave` on the page section and pauses only `video`, `audio` and lecture players
itself (`frontend/public/core/lesson-pager.js`, `go()` and `pauseIn`). Every frame loop stops itself. Use one page-life
registry per lesson, as in `tools/curriculum/revamp/examples/oscilloscopes/script.tpl` (lines 36 to 47):

```js
var RUN = {}, running = {};
function curId(){ var P = window.AeroLessonPager, c = P && P.current(); return c ? c.id : null; }
function onPage(id, start, stop){ (RUN[id] = RUN[id] || []).push({ start: start, stop: stop }); }
function startPage(id){ if (running[id] || !RUN[id] || document.hidden) return; running[id] = true;
  RUN[id].forEach(function (r){ try { r.start(); } catch (e) { console.warn(e); } }); }
function stopPage(id){ if (!running[id]) return; running[id] = false;
  RUN[id].forEach(function (r){ try { r.stop(); } catch (e) { console.warn(e); } }); }
document.addEventListener('lp:enter', function (e){ if (e.target && e.target.id) startPage(e.target.id); });
document.addEventListener('lp:leave', function (e){ if (e.target && e.target.id) stopPage(e.target.id); });
document.addEventListener('visibilitychange', function (){ var id = curId(); if (!id) return;
  if (document.hidden) stopPage(id); else startPage(id); });
window.addEventListener('load', function (){ setTimeout(function (){ var id = curId(); if (id) startPage(id); }, 50); });
```

- A loop that checks `.is-current` every frame instead of stopping keeps the phone busy on every page. Stop the loop.
- The `simulation-builder` skill says "the animation loop never stops"; in a paged lesson it stops on `lp:leave` and
  restarts on `lp:enter`.
- Something that moves far down a long page can also pause while off screen with an `IntersectionObserver` (the
  HyperFrames host, `core/concept-animation-host.js`, plays only while 30 percent of the frame is visible).
- The pager sends a synthetic `resize` 60 ms after a page change so a canvas sized while hidden gets its real size;
  size canvases in a `resize` handler, not once at load.

### 2b. Reduced motion is a different picture, not a blank one

- Read `matchMedia('(prefers-reduced-motion: reduce)')` and listen for changes
  ([MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)).
- Under reduced motion, show the **information** without the movement: static arrows and the current reading instead
  of moving dots; the full sine wave with angle markers instead of a building one; a step button that moves the gyro a
  quarter turn per press (`ac-principles/gen3d.tpl` lines 281 to 285 does this for the generator).
- Never leave a frozen blank stage. (Capacitors and Inductors' `pageLoop` does not start under reduced motion and draws
  no static frame: that is the bug to avoid.)
- Interaction stays: the student can still drag, step and scrub; only automatic motion stops.
- WCAG: anything that moves by itself for more than 5 seconds needs a pause control
  ([WCAG 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)); motion
  triggered by an interaction can be turned off ([WCAG 2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)).
  No flashing more than three times a second, which matters for any strobe or warning light demonstration
  ([WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)).

### 2c. Timing and smoothness

- UI feedback 150 to 250 ms; a teaching reveal 400 to 600 ms, ease-out on enter (from `03-patterns-and-libraries.md`).
- Teaching motion is slow enough to follow: a dot crossing a schematic takes 1 to 3 seconds, a phasor turn 4 to 8
  seconds at "normal" speed, with a slower speed button.
- Animate `transform` and `opacity` (cheap) and SVG attributes on a small number of elements; never `width`, `top`,
  `left` or `transition: all`.
- Clamp the frame step (`dt = Math.min(50, t - last) / 1000`) so a background tab does not cause a jump.
- Motion in a teaching figure is a function of time or of the control, never `Math.random()`, so every student sees
  the same thing and screenshots are repeatable.
- CSS first (flip, fade, highlight). SVG plus a small frame loop for up to about 50 moving elements. Canvas for more.
  GSAP only when a sequence of many steps needs a timeline (it is vendored at `frontend/public/vendor/gsap-3.12.5.min.js`;
  current is 3.15.0; see `sources.md`); wrap GSAP motion in `gsap.matchMedia()` with a reduced-motion condition so it
  reverts itself when the setting changes ([gsap.matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia())).
- Drive motion from the frame timestamp, not a frame count: `requestAnimationFrame` pauses in background tabs and runs
  faster on high refresh rate screens ([MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame)).

### 2d. Cueing

One thing moves at a time. The part the text is talking about is bright and labeled; the rest dims to about 40
percent. The moving thing carries its quantity color (current cyan, voltage violet). A caption under the figure says
what is happening in this step, in one sentence.

---

## 3. Recipes

### Recipe 1: current flow

**Teaches:** current is the same all the way round a series loop; it splits in parallel branches; it stops when the
circuit opens; more current means more flow.

- Dots ride a path that traces the drawn wires exactly (an array of straight segments from source positive, through
  every part, back to negative), in the direction of **conventional current** (positive to negative outside the
  source), matching every schematic the student will read (`simulation-builder/references/animation-engine.md`).
  If the lesson teaches electron flow too, show it as a second, labeled mode, as `current-direction.mp4` does.
- Dot speed is proportional to the solved current (for example 90 px per second per amp, capped); switch open, speed 0.
- About 28 dots for one loop. Parallel branches: give each branch its own path and share the dots in proportion to the
  branch current.
- Say on the page that the dots show the amount of current, not how fast electrons move (electron drift is very slow).
- Reduced motion: no dots; arrows on the wires and the reading ("3.6 A") beside each branch.

```js
const segs = flowPath.map(s => Math.hypot(s.x2 - s.x1, s.y2 - s.y1)), total = segs.reduce((a, b) => a + b, 0);
function posAt(s){ let acc = 0; for (let i = 0; i < flowPath.length; i++){ if (s <= acc + segs[i]){ const t = (s - acc) / segs[i], g = flowPath[i];
  return { x: g.x1 + (g.x2 - g.x1) * t, y: g.y1 + (g.y2 - g.y1) * t }; } acc += segs[i]; } return { x: flowPath[0].x1, y: flowPath[0].y1 }; }
function frame(t){ const dt = Math.min(50, t - last) / 1000; last = t;
  const v = Math.min(solve().amps * 90, 400);                  // from the live solve, never a scripted speed
  dots.forEach(d => { d.s = (d.s + v * dt) % total; const p = posAt(d.s); d.el.setAttribute('cx', p.x); d.el.setAttribute('cy', p.y); });
  raf = requestAnimationFrame(frame); }
```

Examples in the repo: Series Circuits landing-light 3D scene (`series-circuits/scene3d.js`, dots hidden under reduced
motion), the Circuit Lab (wire color is voltage, moving dots are current).

### Recipe 2: a sine wave building

**Teaches:** an AC sine wave is a turning loop seen from the side; peak, zero crossing, period, and that RMS is 0.707 of
peak.

- Left: a phasor (a line from the center of a circle) turning counterclockwise. Right: the wave traced point by point;
  a dashed horizontal line links the phasor tip to the newest point on the wave.
- Driven by the angle `theta`, either from a slider (0 to 360 degrees, detents at 90, 180, 270) or from Play.
- Readout: `theta`, and instantaneous volts `v = Vpeak x sin(theta)` with the unit; mark the peak and the 0.707 RMS line.
- Tie it to the AC generator 3D scene (`ac-principles/gen3d.tpl`): the same angle turns the loop and moves the meter
  needle, so the student sees one cause and two pictures.
- Reduced motion: draw the whole wave with markers at 0, 90, 180, 270 degrees; the slider still works.

```js
function render(theta){                                        // theta in degrees, 0 to 360
  const r = Math.PI / 180, x = cx + R * Math.cos(theta * r), y = cy - R * Math.sin(theta * r);
  arm.setAttribute('x2', x); arm.setAttribute('y2', y);
  let d = ''; for (let a = 0; a <= theta; a += 2) d += (a ? 'L' : 'M') + (x0 + a * k) + ',' + (cy - R * Math.sin(a * r));
  wave.setAttribute('d', d);
  link.setAttribute('x1', x); link.setAttribute('y1', y); link.setAttribute('x2', x0 + theta * k); link.setAttribute('y2', y);
  out.textContent = Math.round(theta) + ' degrees, ' + (Vpk * Math.sin(theta * r)).toFixed(1) + ' V';
}
```

### Recipe 3: a signal on a bus

**Teaches:** a databus word is a sequence of bits sent one after another on a pair of wires; one transmitter, many
listeners; the shape of the voltage tells the receiver each bit.

- Draw the real topology: for ARINC 429, one transmitter on a twisted shielded pair to several receivers (up to 20);
  for MIL-STD-1553, a bus controller, remote terminals on stubs, terminators at the ends.
- Bits travel as short pulses in the right line code: ARINC 429 is bipolar return to zero (HI about +10 V, NULL 0 V, LO
  about minus 10 V between the two wires), sent at 12.5 or 100 kilobits per second, label first, with at least four
  bit times of null between words. MIL-STD-1553 is Manchester II at 1 megabit per second, and a remote terminal answers
  a command after a short response gap of microseconds. ([AIM ARINC 429 tutorial](https://www.aim-online.com/wp-content/uploads/2019/07/aim-tutorial-oview429-190712-u.pdf);
  [ARINC 429 overview](https://en.wikipedia.org/wiki/ARINC_429); [MIL-STD-1553 overview](https://en.wikipedia.org/wiki/MIL-STD-1553).)
  Check every value against the lesson's own source before it ships.
- Time is slowed enormously; say so on the figure ("slowed about 40,000 times").
- Best as a **step or scrub control** (one bit per step, see the "bit clock" in `scroll-techniques-in-lessons.md`),
  with four synchronized layers: line voltage, bit value, field (label, SDI, data, SSM, parity), decoded value.
- Reduced motion: the whole word drawn as a timing diagram (WaveDrom style, see `sources.md`) with the current bit
  highlighted by the step control.

### Recipe 4: gyro precession

**Teaches:** a spinning rotor stays fixed in space (rigidity); a force on its rim acts as if it were applied 90 degrees
later in the direction of spin (precession); that is why a heading indicator drifts and an attitude indicator erects.

- Use the existing scene: `gyroscopic-instruments/gyro3d.tpl` computes precession from the torque cross product
  (lines 8 to 11 and 405 to 423) and shows a marker that sweeps the 90 degrees.
- The student pushes (drag or a button), the force arrow appears at the push point, then a ghost marker travels 90
  degrees around the rim in the spin direction, then the rotor tips where the marker stopped. One step at a time, with
  a caption per step.
- Spin is shown with a painted stripe on the rotor, not motion blur; spin speed for the eye is slow (about 1 turn per
  second) and labeled "drawn slow".
- Reduced motion: three still frames (push, 90 degree marker, result) with Back and Next.

---

## 4. Animation checklist

1. It passes the house decision rule (section 1): change over time is the concept, it is hidden in real life, it is
   cued, the student controls it.
2. It starts on `lp:enter` (and on load if its page is first), stops on `lp:leave` and in a hidden tab.
3. It stops by itself at the end of each step, or the student drives it with a slider, step strip or drag; anything
   moving by itself for over 5 seconds can be paused.
4. Reduced motion shows the same information still; never blank, never frozen mid-move.
5. One moving thing at a time; the rest dimmed; the moving part labeled and in its quantity color.
6. Every number it shows comes from the model or the control, with units.
7. Smooth at 60 frames per second on a mid-range phone; animates transform, opacity or a few SVG attributes only.
8. Deterministic: the same input gives the same picture.
9. Phone screenshot at three moments (start, middle, end) and the reduced-motion version, each looked at.
