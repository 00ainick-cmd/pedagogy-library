---
pattern: live-model
family: do
principles: [predict-before-reveal, productive-failure, cognitive-load-theory, transfer-of-learning]
our_component: lesson-local live figures (.fig-live, .readout, Electric Ink .bench-wrap, canvas labs); not in lesson-parts
status: local
best_example: voltage-lesson, page "Divider" (#bench); antennas-coax, page "VSWR" (#vswr); power-distribution, page "Lab" (#explore)
last_reviewed: 2026-10-01
---

# Live Model

## Purpose

A working model of one system on the page: a voltage divider with a slider on R2, a coax line where the student changes what is on the end and watches reflected power and VSWR, a power bus where the student opens a branch and sees which loads go dark. The student moves a control; the figure and the readouts answer at once. Storyline builds these with sliders and dials; Brilliant and PhET are the standard to beat.

## The learner's action

Moves a slider, selects a state, or presses a step button. Reads the live values. In the best version, predicts first, runs it, and compares.

## When it teaches

- **Guided, not free, exploration.** Discovery with guidance helps; unguided discovery does not (Alfieri et al. 2011 meta-analysis: enhanced discovery beat other instruction, unassisted discovery did worse). Simulations teach when they come with tasks, hints and explanations (de Jong and van Joolingen 1998). Give every live model a job: "Set R2 so the lamp gets 6 V."
- **Interactivity that matches the system.** Students who could operate a model of a bicycle pump solved transfer problems better than students who watched it (Evans and Gibbons 2007). Students who learned DC circuits on a simulation outperformed students on real equipment, even at building real circuits (Finkelstein et al. 2005).
- **Predict, then run.** Asking for a prediction before the student moves the control turns the model into a test of their mental model ([predict-before-reveal](../../principles/04-delivery-patterns/predict-before-reveal.md)). power-distribution "Lab" does exactly this.
- **One control at a time.** Element interactivity drives load. Start with one control; unlock a second only after the first relationship is clear ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).
- **Felt before formula.** A student who has moved R2 and watched the drops always add to 9.00 V has an intuition the Kirchhoff page can name ([productive-failure](../../principles/04-delivery-patterns/productive-failure.md) for the try-first order, with care).

## When it does not

- No task. A slider with nothing to find is a toy (Mayer 2004: behavioral activity is not the same as learning).
- The model shows something taught later. The brief: hide that part (a current readout before Ohm's Law), do not delete the sim.
- The exact value matters and the control is a slider. NN/g: sliders suit approximate values. Add step buttons or presets for exact values, as the Ohm's Law bench does.
- The concept is a motion the student just needs to see. An animation does that with less to operate (see `../media-motion/`).
- A real instrument does it better. The [guided-procedure](guided-procedure.md) on the Fluke meter trainer or the Avionics Circuit Lab is the next step up.

## Anatomy

- **Model figure**: a real schematic or a drawing of the real system, live (SVG or canvas).
- **Controls**: one slider or a small button group, with the current value printed beside or above it (NN/g: labels above, where the thumb does not hide them).
- **Readouts**: the measured values in a mono face with units, in a `role="status"` or `aria-live` region.
- **Says line** (`.fig-live`): one plain sentence that explains the current state ("Reflected power is 1.1 W. VSWR 2.0 is at the limit").
- **Task**: a sentence above the model, or a predict panel that must be answered before Run is enabled.
- **Compare**: after the run, the explanation to compare with the student's own (power-distribution `#labCompare`).
- **Presets** for the textbook's own numbers (the 28.1 V and 27.4 V probe case in voltage-lesson).

## Mobile and accessibility

- Sliders are native `<input type="range">` or a `role="slider"` with `aria-valuenow`, `aria-valuetext` ("R2 equals 47 ohms") and arrow key steps. The pager ignores arrow keys on these.
- Touch: the thumb at least 44 px; the figure does not scroll the page while the student drags.
- A canvas has `role="img"` and an `aria-label` that describes what it shows; the readouts carry the numbers as text.
- Pause animation when the page is not showing (`lp:leave`) and honor `prefers-reduced-motion` (show the state, not the motion).
- Size the canvas on `lp:enter`; the pager fires a resize because a canvas sized while hidden has no size.

## Our implementation

Lesson-local, often lifted from the original lesson (the brief: keep the original's working sims, lift their markup and script). antennas-coax "VSWR":

```html
<div class="seg" role="group" aria-label="Choose what is on the end of the coax">{{VSWR_BTNS}}</div>
<canvas id="vswCanvas" width="900" height="300" role="img" aria-label="The radio on the left sends power up the coax to the load on the right. ..."></canvas>
<div class="watt" aria-live="polite">
  <div class="wr"><span>Forward</span><b id="wFwd">10.0 W</b></div>
  <div class="wr"><span>Reflected</span><b id="wRef">0.0 W</b></div>
  <div class="wr big"><span>VSWR</span><b id="wSwr">1.0</b></div>
  <div class="wr lim"><span>Limit</span><b>2.0</b></div></div>
<p class="fig-live" id="vswSays" aria-live="polite"></p>
```

The Electric Ink benches (voltage, current, Ohm's Law, resistance) share one shape: `.bench-wrap` with a live schematic stage, a slider panel, `.ro` readouts and an `.eqbar` equation strip (component catalog family F4). A shared bench with a circuit config is a larger build than one builder can do; see [gaps.md](gaps.md), "Worth building later".

## Strong CAET example

- **voltage-lesson, "Divider" (`#bench`)**: the original voltage-divider bench lifted intact, a prediction card above it, R2 on a slider, the drops always summing to 9.00 V. Built lesson: `frontend/public/aero/courses/dc-fundamentals/lessons/voltage-lesson.html`.
- **antennas-coax, "VSWR" (`#vswr`)**: change the load on the coax, watch forward and reflected pulses and the standing wave, read VSWR against the 2.0 limit.
- **power-distribution, "Lab" (`#explore`)**: worked example first, then for each fault predict which loads go dark, run it, and compare your explanation.

## A CAET idea

**Wire Selection**: a live voltage-drop model. A 28 V bus, a load current slider (in 1 A steps, with exact buttons), a wire gauge button group and a run length. The load voltage and the drop update, with the AC 43.13-1B Table 11-6 allowable drop drawn as a line. Task: "Find the smallest gauge that keeps the drop inside the limit for 20 A over 18 feet." The student then checks the answer on the real chart (see [hotspot-on-real-document](hotspot-on-real-document.md)).

## Common mistakes

- Free play with no task or question.
- Three sliders at once on first exposure.
- A slider for a value the student must set exactly.
- Readouts that show quantities the lesson has not taught yet.
- Replacing a working original sim with a new cartoon. The brief forbids it.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/antennas-coax/pages-*.tpl`, `.../power-distribution/pages-*.tpl`, `.../voltage/` ; component catalog families F4 and F11: `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`
- Alfieri, L., Brooks, P. J., Aldrich, N. J., and Tenenbaum, H. R. (2011). Does discovery-based instruction enhance learning? Journal of Educational Psychology, 103(1), 1-18. https://doi.org/10.1037/a0021017
- de Jong, T., and van Joolingen, W. R. (1998). Scientific discovery learning with computer simulations of conceptual domains. Review of Educational Research, 68(2), 179-201. https://doi.org/10.3102/00346543068002179
- Evans, C., and Gibbons, N. J. (2007). The interactivity effect in multimedia learning. Computers and Education, 49(4), 1147-1160. https://doi.org/10.1016/j.compedu.2006.01.008
- Finkelstein, N. D., et al. (2005). When learning about the real world is better done virtually: A study of substituting computer simulations for laboratory equipment. Physical Review Special Topics, Physics Education Research, 1, 010103. https://doi.org/10.1103/PhysRevSTPER.1.010103
- Mayer, R. E. (2004). Should there be a three-strikes rule against pure discovery learning? American Psychologist, 59(1), 14-19. https://doi.org/10.1037/0003-066X.59.1.14
- NN/g, Slider design: rules of thumb: https://www.nngroup.com/articles/gui-slider-controls/
- Storyline 360, Using dials: https://community.articulate.com/kb/storyline-360-essentials/using-dials-in-storyline/1210861
- WAI-ARIA APG, Slider pattern: https://www.w3.org/WAI/ARIA/apg/patterns/slider/
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
