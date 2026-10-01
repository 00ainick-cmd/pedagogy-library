# Scroll techniques in lessons: Scrollcraft ideas that fit a paged lesson

Written 2026-10-01. Source toolkit: the `scrollcraft` skill
(`~/.claude/plugins/marketplaces/nateherk/plugins/nateherk-design/skills/scrollcraft/`, SKILL.md and
`references/devices.md`, `feel.md`, `verify.md`) and Nick's trial build
`OneDrive/E-Learning Development/scrollcraft/builds/digital-databus/` (2026-08-25).

**In plain words:** Scrollcraft makes landing pages where scrolling plays a film. Our lessons are different: one page
at a time, Continue moves left to right, and the student reads on a phone. On a lesson page, scrolling must stay
plain reading. So we keep Scrollcraft's best idea, "one number from 0 to 1 drives the whole picture", and hand that
number to a control the student owns: a slider, a row of step buttons, or a drag on the figure. The result is a
**scrubbed explainer**: a figure the student plays forward and back at their own pace.

---

## 1. Why page scroll cannot drive a lesson figure

1. **The pager owns movement between pages** (`frontend/public/core/lesson-pager.js`). Inside a page the window
   scrolls normally (`go()` calls `scrollTo(0, 0)` on each page change). A figure that also listens to scroll fights
   the reading scroll, especially with phone momentum scrolling.
2. **Continue sits at the end of the page's content.** A long pinned scroll section would push Continue several
   screens down and make a short page feel endless.
3. **Reduced motion and testing.** A scroll-position figure has no single state; Scrollcraft needs a custom harness to
   screenshot six positions per act. A slider or step figure has named states we can test directly.
4. **CSS scroll-driven animations are not yet safe as the only mechanism.** MDN marks `animation-timeline` as not
   Baseline (not in all major browsers) ([MDN animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)).
   Use them, if at all, as a progressive enhancement inside `@supports (animation-timeline: view())`.
5. **Learner control is the point.** Letting learners advance an explanation piece by piece beats one continuous run
   ([Mayer and Chandler 2001](https://eric.ed.gov/?id=EJ638751); a meta-analysis of 88 comparisons found the same,
   [Rey et al. 2019](https://maria-wirzberger.de/wp-content/uploads/2019/01/Rey2019_Article_AMeta-analysisOfTheSegmentingE.pdf));
   a step control is that, made physical. See `animation.md`.

---

## 2. The core pattern: one progress number, many controls

Every Scrollcraft act publishes `--sc-p` (0 to 1) and everything on the stage is a function of it. Do the same:

```js
// p is the only state. Every visual is computed from p, so any p can be shown, tested and screenshotted.
function render(p) {
  const deg = p * 360;                       // e.g. phasor angle for a sine wave building
  phasor.setAttribute('transform', `rotate(${-deg} 120 120)`);
  dot.setAttribute('cy', 120 - 90 * Math.sin(deg * Math.PI / 180));
  trace.setAttribute('d', sinePath(0, deg));  // the wave drawn up to this angle only
  readout.textContent = `${Math.round(deg)} degrees, ${(28 * Math.sin(deg * Math.PI / 180)).toFixed(1)} V`;
  stage.style.setProperty('--p', p.toFixed(4)); // CSS can read it too, as Scrollcraft does
}
```

Drive `p` from any of these, never from page scroll:

| Control | Feel | Use when |
|---|---|---|
| **Slider** (`<input type="range">`, 44 px tall touch area) | Continuous, the student scrubs | The quantity is continuous: an angle, a frequency, a time |
| **Step strip** (numbered buttons plus Back and Next) | Discrete, like Scrollcraft's pinned cues | The idea has stages: 1 ram air, 2 static port, 3 diaphragm, 4 a blocked port |
| **Drag on the figure** (pointer events on a handle) | Direct manipulation, the strongest | The thing has a natural handle: a gyro's tilt, a VOR aircraft's position, a probe |
| **Play button** that animates `p` from 0 to 1 | Watching | Only as an extra, after the student has scrubbed once. Students rarely find or use play and pause ([Adams et al. 2008, Part II](https://phet.colorado.edu/publications/archive/PhET%20interview%20Paper%20Part%20II.pdf): 5 of about 80), so a played sequence stops by itself at each step |

**Go up and down the ladder.** Next to a scrubbed figure, a small plot of the readout across the whole range (needle
deflection against radial, volts against angle) lets the student see every state at once; tapping a point on the plot
jumps the figure to that state. This is Bret Victor's "Up and Down the Ladder of Abstraction"
([worrydream.com/LadderOfAbstraction](http://worrydream.com/LadderOfAbstraction/)).

**Glide, do not jump.** Scrollcraft never writes the playhead directly from the wheel; it moves a target and a frame
loop eases toward it at 0.18 per frame, so uneven input still looks smooth (`devices.md`, "The playhead is lerped").
Do the same for a slider: `shown += (target - shown) * 0.18` each frame until within a small deadband, then stop the
loop. Under reduced motion, set `shown = target` and draw once.

**Snap to the teaching states.** Scrollcraft's "dwell" slows the film where the copy peaks. On a slider, add detents
at the states that teach (90 degrees for the peak, 180 for the zero crossing) with a `<datalist>` of tick marks and a
light snap within a few percent of each.

---

## 3. The Scrollcraft devices, translated

| Scrollcraft device | In a paged lesson | CAET example |
|---|---|---|
| `scrub` (video under the wheel) | **Scrub slider** over a drawn SVG or canvas computed from `p`. Prefer drawing to video: phone video seeking is unreliable unless the clip is encoded with a dense keyframe interval (`scripts/encode.sh`) and fetched whole. A HyperFrames composition can be scrubbed with `@hyperframes/player` `seek()` (`hyperframes-in-lessons.md`) | AC Principles: a phasor turns and the sine wave builds point by point as the student drags 0 to 360 degrees |
| `pin` with cues (frame holds, text changes) | **Stepped figure**: the figure stays put, a step strip changes one highlight and one caption at a time. Captions overlap Scrollcraft-style: the next one is ready before the last fades, so no step is ever empty | Pitot-Static: 1 ram air into the pitot, 2 static pressure at the port, 3 the airspeed diaphragm, 4 the static port blocked, what the altimeter does |
| `pan` (sideways rail) | **Step strip or snap rail** inside the page (`overflow-x: auto` with `scroll-snap-type: x mandatory`), next card peeking so it reads as more to see. The page itself never scrolls sideways at 390 px. Prefer the step strip: it is clearer to a first-week student | History: one card per year; the life of an ARINC 429 word field by field |
| `reveal` (a wipe is a change of state) | **Before and after wipe** with a drag divider (slide-builder's drag divider, `../interactions/image-compare-slider.md`) | Terminations and Bonding: a clean bonding jumper and a corroded one; the analog six-pack and the PFD in the same frame |
| `count` (numbers that land) | **Live readout** that changes because the student moved the control. Only real numbers, with units | Transformers: turns ratio slider, secondary voltage readout |
| `flow` plus `in` (reveal once on entry) | Start the page's one entrance animation on `lp:enter`, once. Content never hides again (Scrollcraft calls re-hiding "a defect, not an effect") | Any hero figure |
| `kinetic` (type assembles) | Not used. Headings must be readable at once; Nick rejects narrator-style drama | |
| `parallax`, `drift`, `tilt`, `magnet`, `spotlight` | Not used. Decoration, and touch has no hover | |

---

## 4. Rules carried over from Scrollcraft (they hold for any scrubbed figure)

1. **Ground or greet.** At `p = 0` the figure already shows something useful and labeled. A blank start reads as a
   failure to load (`devices.md`, the cue contract).
2. **No dead zones.** Every slider position shows a meaningful state. If a stretch of the range changes nothing, cut it
   or slow the mapping there.
3. **One reason per figure.** "If you cannot say in one sentence what an act's moment is, it does not have one." One
   figure, one idea, one control at first (unlock a second control only after the first is understood).
4. **One peak per lesson.** Scrollcraft gives its one peak the most room and puts a quiet beat before it. In a lesson,
   the scrubbed explainer that carries the main idea gets its own page, and the page before it is plain.
5. **Never a "scroll" cue, a bouncing arrow, a hand icon or a `01 / 06` counter.** The control's label says what it
   changes ("Rotor angle", "Bit"). Step buttons carry the step name, not just a number.
6. **Content that hides itself again is a defect.**
7. **Animate `transform` and `opacity`, never layout properties.** No `transition: all`.
8. **Verify by sampling positions.** Screenshot the figure at `p` = 0, 0.25, 0.5, 0.75 and 1 at 390 x 844 and
   1280 x 800, plus once with reduced motion. Look at every image. A green test proves the control moves; only looking
   proves the figure teaches.
9. **A real phone is a different machine.** Headless Chrome does not reproduce iPhone video decoding, Low Power Mode or
   touch behaviour (`SKILL.md`, Step 5). Check the slider and drag on a real phone before Nick's review.

Paged lesson specifics:
- A figure that should stay in view while its caption scrolls can use `position: sticky; top: var(--pgr-head)` (the
  pager's header height variable in `lesson-pager.css`). Test it on a phone; on a short screen it is usually better
  to keep the figure and its control together and let the caption sit under them.
- The slider and the figure must be on screen together on a 390 x 844 phone. If they are not, the figure is too tall.
- Arrow keys page the lesson (`lesson-pager.js`). A focused slider handles its own arrows; a custom drag handle that
  uses arrows must call `preventDefault()` and `stopPropagation()`.
- `touch-action: pan-y` on a draggable figure so a vertical swipe still scrolls the page and only sideways drags move
  the figure. Never `touch-action: none` on a large area: the student gets stuck.

---

## 5. A worked example: the databus "bit clock"

Nick's Scrollcraft trial on Digital Databus (BRIEF.md, 2026-08-25) chose one signature move: **"The scroll wheel is
the bit clock."** Scroll position is bus time, the student can hold one bit still and read all four layers at that
instant, and scrolling backwards runs the bus backwards so the parity bit recomputes. The trial ported and tested the
word encoder (`src/arinc429.js`, `test/arinc429.test.mjs`) but no page was built.

The same move fits a lesson page with a step control instead of the wheel:

- **Control:** a slider from bit 1 to bit 32, with Back and Next buttons for one bit at a time, and a play button.
- **Four layers drawn from the one bit index:** the line voltage (bipolar return to zero: high, null, low), the bit
  value, the field it belongs to (label, SDI, data, SSM, parity), and the decoded value so far.
- **Faults as a second control later:** flip one bit, watch parity fail (the trial's `corrupt` function).
- **Accuracy before building:** the trial's encoder says on its face that its label bit order and SSM encoding were
  "not verified against the governing standard". ARINC 429 sends the label first with its most significant bit first,
  then the rest of the word least significant bit first ([AIM ARINC 429 tutorial](https://www.aim-online.com/wp-content/uploads/2019/07/aim-tutorial-oview429-190712-u.pdf);
  [ARINC 429 overview](https://en.wikipedia.org/wiki/ARINC_429)). Check the encoder against a primary source and
  against the lesson's own text before the figure ships.

---

## 6. Where this helps the "make it more interactive" review note

When Nick asks for "something more interactive" on a page that only has a still figure, the cheapest strong fix is
usually to turn that figure into a scrubbed explainer: same drawing, one slider or step strip, a live readout, and a
predict question before the student touches it ("Where will the needle be at 90 degrees?"). Candidates:

| Lesson | Still figure today | Scrubbed version |
|---|---|---|
| AC Principles | Sine wave | Phasor angle slider builds the wave; readout of instantaneous volts |
| Capacitors and Inductors | Charge curve | Time slider in time constants; capacitor voltage and current readouts |
| Transformers | Core and windings | Turns ratio slider; secondary voltage and current readouts |
| Digital Signals, Databus Types | Bit diagram | Bit clock slider (section 5) |
| Gyroscopic Instruments | Precession figure | Drag the force arrow; the rotor responds as if the force acted 90 degrees later in the direction of spin |
| Radio Navigation (VOR) | Phase diagram | Drag the aircraft around the station; reference and variable signals and the radial update |
| Pitot-Static, Blocked Ports | System schematic | Step strip through normal, pitot blocked, static blocked, with each instrument's response |
| ILS and DME | Lobes figure | Drag the aircraft across the course; DDM and needle respond; altitude slider for slant range |
