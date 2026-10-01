---
pattern: state-toggle-figure
family: explore
principles: [cognitive-load-theory, self-explanation-elaborative-interrogation, dual-coding]
our_component: lesson-local segmented buttons (.seg with .segb or .seg-b) and toggles (.tg); used on about 80 pages, not in lesson-parts
status: local
best_example: digital-logic, page "AND" (#and); efis-glass, page "Red X" (#redx)
last_reviewed: 2026-10-01
---

# State Toggle Figure

## Purpose

One figure, two to four named states, and buttons that switch between them: switch A open or closed, air data computer failed or AHRS failed, antenna at 0, 30, 60 or 90 degrees, a branch open or shorted. The figure and a one-line readout change with the state. It is the most used interaction in the rebuilt lessons, and the cheapest way to make a figure answer "what if?"

## The learner's action

Selects a state button. The figure, the readout and the caption change. In the best version the student is asked to try every state, and a table or list ticks off each one tried.

## When it teaches

- **Contrast in place.** The student sees the same figure in a different state without losing their place, so the only thing that changes is the thing that matters (Alfieri, Nokes-Malach and Schunn 2013 on comparison; [cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).
- **Controlled manipulation.** Moreno and Mayer (2007) list controlling and manipulating among the forms of interactivity that can drive real processing, when the student is looking for a relationship. "Close both switches and watch the lamp" is a relationship to find.
- **Explaining each state.** A one-line readout that says why ("Both switches closed: the lamp is lit, output 1") turns each click into a worked micro-example and invites the student to explain the next one ([self-explanation-elaborative-interrogation](../../principles/01-learning-science/self-explanation-elaborative-interrogation.md)).
- **Exhaustive tries.** Ticking off the rows of a truth table as each switch combination is tried makes the student cover the whole space instead of one case.

## When it does not

- The states change continuously (a voltage, a resistance). Use a [live-model](live-model.md) with a slider or stepper.
- The student should predict the state before seeing it. Put a [predict-then-reveal](predict-then-reveal.md) first, then the toggle.
- The two states are different photos that need careful comparison. Side by side, or the [image-compare-slider](image-compare-slider.md) if they are aligned.
- Five or more states. The student loses track. Group them or use a stepper.

## Anatomy

- **Button group** (`.seg`, `role="group"` with an `aria-label`) of two to four buttons, each `aria-pressed`, labeled with the state in words ("Switch A: open"). The label updates when the state changes.
- **Figure** that redraws for the state, with the changed part signaled (lamp lit, red X shown, signal bar length).
- **Readout or caption** in a live region that names the state and its result in one sentence.
- **Optional tried-list**: a truth table or a list with a tick per state tried.
- **Rule box** stating the general rule, shown above or after.

## Mobile and accessibility

- Buttons at least 44 px tall, in one row on a phone if two or three fit; otherwise two rows.
- `aria-pressed` reflects the state; the live readout says what changed. Color is never the only signal (a lit lamp also has a label).
- Any transition under 250 ms, none under reduced motion.

## Our implementation

Lesson-local. digital-logic "AND":

```html
<figure class="dia and-fig">{{AND_SVG}}
  <div class="seg sw-btns" role="group" aria-label="Switches">
    <button class="tg" type="button" data-sw="A" aria-pressed="false">Switch A: open</button>
    <button class="tg" type="button" data-sw="B" aria-pressed="false">Switch B: open</button></div>
  <figcaption class="figcap"><b>FIG 2</b> Two switches in series with a lamp. ... Drawn from FAA-H-8083-30B, Figure 12-256.</figcaption></figure>
<table class="tt" id="andTT" aria-label="AND truth table">
  <thead><tr><th>A</th><th>B</th><th>Output</th><th><span class="sr">Tried</span></th></tr></thead>
  <tbody><tr data-r="00"><td>0</td><td>0</td><td>0</td><td class="tick"></td></tr> ...</tbody></table>
```

efis-glass "Red X" swaps two FAA figures:

```html
<div class="seg" role="group" aria-label="Figure">
  <button class="btn seg-b" type="button" data-f="27" aria-pressed="true">Air data computer failed</button>
  <button class="btn seg-b" type="button" data-f="28" aria-pressed="false">AHRS failed</button></div>
<img id="rxImg" src=".../faa-adc-fail-fig2-7.png" alt="FAA drawing of a primary flight display with large red Xs over the airspeed tape, ..."/>
```

Because it is used so often and built a little differently each time, a shared `toggle-figure` part (button group, state map, live readout, optional tried-list) would remove a lot of repeated code. It sits inside gap 6 (shared figure parts) in [gaps.md](gaps.md).

## Strong CAET example

- **digital-logic, "AND" (`#and`)**: two switches in series with a lamp, drawn from FAA Figure 12-256. Each switch toggles; the lamp and the output follow; the truth table ticks each combination tried. Built lesson: `frontend/public/aero/courses/digital-databus/lessons/digital-logic.html`.
- **efis-glass, "Red X" (`#redx`)**: the same PFD with the air data computer failed and with the AHRS failed. The student sees which tapes go red X for which failure.

## A CAET idea

**Digital Signals** (not yet rebuilt; its Blueprint goal ends with "trace a blank indication along the digital chain"): one chain drawing (sensor, computer, bus, display) with three toggles, Sensor failed, Bus wire open, Display failed, and the display face and a one-line readout changing for each. A tried-list makes the student see all three before the scenario that asks where to start.

## Common mistakes

- States labeled with symbols only ("1", "2"). Name the state.
- A figure that changes somewhere off screen on a phone. Keep buttons and the changed part in one view.
- No readout, so the student sees a change but is not told what it means.
- Using a toggle where the student should have predicted first.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/digital-logic/pages-*.tpl`, `.../efis-glass/pages-*.tpl`, `.../antennas-coax/pages-1.tpl` and `pages-2.tpl`
- Moreno, R., and Mayer, R. (2007). Interactive multimodal learning environments. Educational Psychology Review, 19(3), 309-326. https://doi.org/10.1007/s10648-007-9047-2
- Alfieri, L., Nokes-Malach, T. J., and Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. Educational Psychologist, 48(2), 87-113. https://doi.org/10.1080/00461520.2013.775712
- Evans, C., and Gibbons, N. J. (2007). The interactivity effect in multimedia learning. Computers and Education, 49(4), 1147-1160. https://doi.org/10.1016/j.compedu.2006.01.008
- NN/g, Microinteractions in user experience: https://www.nngroup.com/articles/microinteractions/
- WAI-ARIA APG, Button pattern (toggle buttons with aria-pressed): https://www.w3.org/WAI/ARIA/apg/patterns/button/
- WCAG 2.2, Use of Color: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- Storyline 360 user guide (states and triggers): https://community.articulate.com/kb/user-guide-series/storyline-360-user-guide/1193854
