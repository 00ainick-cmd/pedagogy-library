---
pattern: build-the-circuit
family: do
principles: [transfer-of-learning, schema-theory-knowledge-components, predict-before-reveal]
our_component: lesson-local builders (series and parallel builder .spgrid lifted into voltage-lesson; add or remove branch in parallel-circuits); placing parts on a schematic is a GAP
status: partial
best_example: voltage-lesson, page "Battery hookup" (#network); parallel-circuits, page "Current law" (#kcl)
last_reviewed: 2026-10-01
---

# Build the Circuit

## Purpose

The student puts the circuit together and sees what it does: adds a cell in series and watches the voltage climb, adds a cell in parallel and watches it stay; adds a branch and watches the total current add; places a breaker, a switch and a lamp on a bus and makes the lamp light. Building is the step from reading a schematic to making one. Nick liked "the new series and parallel builder" on the first pilot.

## The learner's action

Adds or removes parts, or places parts into positions on a schematic. Reads the live totals. In the full version, works to a goal ("Make the landing light work with its own breaker and switch") and selects Check.

## When it teaches

- **Constructing is deeper than watching.** ICAP ranks constructive activities, where the student produces something new, above active ones, where the student only manipulates what is given (Chi and Wylie 2014). Building a circuit to a goal is constructive.
- **The sim transfers to the bench.** Students who learned DC circuits by building them in the Circuit Construction Kit outperformed students using real equipment on concept questions and on building a real circuit and explaining it (Finkelstein et al. 2005; [transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Series and parallel as a structure.** Adding the same cell two ways side by side builds the two patterns as one schema with a contrast ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).
- **Predict before you add.** "What will the total be with a third branch?" before the student adds it ([predict-before-reveal](../../principles/04-delivery-patterns/predict-before-reveal.md)).

## When it does not

- Free wiring of any part to any part, for a first-week student. Too many choices, too many dead ends ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)). Give slots and a goal.
- The builder shows a value not yet taught (current before Ohm's Law). Hide it.
- The point is reading a given schematic. Use [find-the-hotspot](find-the-hotspot.md) or a [labeled-graphic](labeled-graphic.md).
- A goal with one obvious build. Then it is a sort, not a build.

## Anatomy

- **Two-card builder** (built today): a series card and a parallel card side by side, each with Add and Remove, a live drawing and a live total ("2 branches × 0.50 A = 1.00 A total"), and a one-line reaction.
- **Slot builder** (gap): a schematic with empty positions (source, protection, control, load, ground), a tray of real parts (breaker, fuse, switch, relay, lamp, resistor), a goal line, Check, and a reason for each wrong placement.
- **Readouts** in a live region, with units.
- **Electron flow dots** only where the lesson teaches flow, with a caption saying which way they move.

## Mobile and accessibility

- Add and Remove are buttons. In a slot builder, select a slot, then select a part from the tray (no drag required; drag can be added on top).
- The drawing has `role="img"` and a label that changes with the build ("A 9 volt supply and three parallel branches").
- Totals and reactions in a live region.
- Flow dots stop under `prefers-reduced-motion`, and pause when the page is hidden.

## Our implementation

Lesson-local. parallel-circuits "Current law":

```html
<div class="spcard">
  <h3>Adding and Removing Branches</h3><p class="note">Branch readings are in amps. The supply stays at 9 V.</p>
  <svg id="paraSvg" role="img" viewBox="0 0 320 160" aria-label="A 9 volt supply and its parallel branches, with electrons flowing. ..."></svg>
  <div class="sp-rt" id="paraRt">1.00 A <span>total</span></div>
  <div class="sp-acts"><button class="btn" id="paraAdd" type="button">Add a branch</button>
    <button class="btn" id="paraRm" type="button">Remove a branch</button></div>
  <p id="kclSummary" class="sp-sum">2 branches × 0.50 A = 1.00 A total.</p>
  <p class="sp-react" id="paraReact" aria-live="polite">Two 18 ohm branches. Add a branch and watch the total.</p>
  <p class="sp-flow">The dots move the way electrons flow, from negative to positive.</p></div>
```

The series and parallel builder in voltage-lesson is lifted from the original lesson (component catalog family F6, also in current-lesson, resistance-lesson and ohms-law-lesson). For full circuit work the Avionics Circuit Lab runs as an iframe with presets (`/simulators/circuit-lab/index.html?preset=...`).

GAP, the slot builder (listed under "Worth building later" in [gaps.md](gaps.md)). Data shape:

```json
{"goal": "Make the landing light work with its own breaker and switch.",
 "slots": [{"id": "s1", "role": "protection"}, {"id": "s2", "role": "control"}, {"id": "s3", "role": "load"}],
 "tray": ["breaker", "switch", "lamp", "resistor"],
 "answer": {"s1": "breaker", "s2": "switch", "s3": "lamp"},
 "why": {"s1:switch": "A switch first leaves the wire to the switch unprotected. Protection sits closest to the bus."}}
```

## Strong CAET example

- **voltage-lesson, "Battery hookup" (`#network`)**: the series and parallel builder; add or remove cells and see series add while parallel stays. Built lesson: `frontend/public/aero/courses/dc-fundamentals/lessons/voltage-lesson.html`.
- **parallel-circuits, "Current law" (`#kcl`)**: Kirchhoff's current law as a rule box, then add and remove 18 ohm branches on 9 V and watch each branch stay at 0.50 A while the total adds. Built lesson: `frontend/public/aero/courses/dc-fundamentals/lessons/parallel-circuits.html`.

## A CAET idea

**Lighting Systems** (rebuilt; a freshen): a slot build of a landing light circuit from the bus: breaker, switch, relay coil and contacts, lamp, ground. The goal makes the student put the switch on the relay coil and the lamp on the relay contacts, which is why a small panel switch can run a big lamp. Wrong placements explain themselves.

## Common mistakes

- Free wiring with no goal.
- A builder that shows a quantity not yet taught.
- Flow dots with no caption saying which way and why.
- Drag-only part placement.

## Sources

- Nick's preference: `aero-caet-source/curriculum/revamp-kit/CHANGELOG.md`; lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/parallel-circuits/pages-*.tpl`, `.../voltage/`; family F6: `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`
- Chi, M. T. H., and Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. Educational Psychologist, 49(4), 219-243. https://doi.org/10.1080/00461520.2014.965823
- Finkelstein, N. D., et al. (2005). When learning about the real world is better done virtually: A study of substituting computer simulations for laboratory equipment. Physical Review Special Topics, Physics Education Research, 1, 010103. https://doi.org/10.1103/PhysRevSTPER.1.010103
- Moreno, R., and Mayer, R. (2007). Interactive multimodal learning environments. Educational Psychology Review, 19(3), 309-326. https://doi.org/10.1007/s10648-007-9047-2
- Storyline 360 freeform Drag and Drop: https://community.articulate.com/series/articulate-storyline-360/articles/articulate-storyline-360-user-guide-how-to-add-freeform-questions
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
