---
pattern: guided-procedure
family: do
principles: [4c-id-model, cognitive-apprenticeship-mentor, worked-example-effect, transfer-of-learning]
our_component: Fluke meter trainer (.fluke-lab), Avionics Circuit Lab lab pages and Harness Bench (iframe or full screen app), 3D crimp lab; each lesson-local or its own page
status: local
best_example: multimeter, page "Meter lab" (#measure); harness-fabrication, page "Harness Bench" (#bench)
last_reviewed: 2026-10-01
---

# Guided Procedure

## Purpose

The student does a real procedure, step by step, on a working simulation of the instrument or the job: prove the meter, then take four measurements on the Fluke trainer; build twelve cable ends, ring out the harness and repair a fault on the Harness Bench; set and use a crimp tool in 3D. The procedure tells the student what to do next, checks each step, and logs what was done. This is the brief's "Hands-on: predict, then check, on a sim, a real document, a meter or a 3D object."

## The learner's action

Picks a job, reads the goal and the steps, works the controls (dial, jacks, probes, tool settings), predicts the reading before taking it, takes it, and sees the step ticked in the log. Moves to the next job.

## When it teaches

- **Whole task, with support that fades.** 4C/ID builds skill on whole, real tasks, with procedural information given just in time at the step it governs, and support removed as the student improves ([4c-id-model](../../principles/02-instructional-design/4c-id-model.md); van Merrienboer and Kirschner 2018).
- **Cognitive apprenticeship.** Model the procedure (a worked example or the lecture), coach the student through it on the sim with hints, then fade the hints ([cognitive-apprenticeship-mentor](../../principles/05-tutor-personas/cognitive-apprenticeship-mentor.md); Collins, Brown and Newman 1989).
- **Simulation that transfers.** Students who practiced circuits on a simulation built real circuits better than students who practiced on real equipment (Finkelstein et al. 2005). A meter trainer that refuses to read current with the leads in the volts jack teaches the same lesson the real fuse teaches, without the fuse.
- **Predict before each reading.** The Meter lab asks for a prediction before each measurement, which turns each step into a test of understanding, not button pushing ([predict-before-reveal](../../principles/04-delivery-patterns/predict-before-reveal.md)).

## When it does not

- The student has not seen the procedure. Show it first with a [process-stepper](process-stepper.md) or the lecture.
- The sim cannot do the step realistically. A fake step teaches a fake skill; leave it out and say so.
- Free play with no job list. Give jobs with a goal each.
- The sim shows a quantity the lesson has not taught yet. Hide that readout, do not delete the sim (the brief's rule).

## Anatomy

- **Job picker**: buttons for each job ("Prove the meter", "Voltage at R2", "Current in the main wire", "Continuity across the break").
- **Goal line**: what this job proves.
- **How-to list**: the steps for this job, each ticked when done.
- **Predict panel**: before the reading, three options; the result line says whether the reading matched.
- **The instrument**: dial, jacks, display, probes, fuse; or the bench stages; or the 3D tool.
- **Status and log**: "Steps done: 2 of 4" and the readings recorded beside the circuit.
- **Full screen and open in a new tab** for the larger apps.
- **Close**: the job's one-line lesson, then the next job.

## Mobile and accessibility

- Every control has a non-drag path: dial positions and jacks are buttons; probe placement is a tap on a labeled test point.
- The display reading is text in a live region, not only a picture of digits.
- Large apps (Harness Bench, Circuit Lab) open full screen with a clear way back; they save the job on the device so the student can leave and return.
- At 390 px the instrument and the job steps stack; the current step stays in view while the student works the controls.
- The lab is practice: Continue is never locked (the brief).

## Our implementation

Several working components, none in `lesson-parts`:

- **Fluke meter trainer** (`.fluke-lab`): LCD, dial, jacks, fuse, swap leads, a live circuit, a job list and predictions. In multimeter, voltage-lesson, current-lesson and resistance-lesson (component catalog family F5).
- **Avionics Circuit Lab lab pages**: an iframe to `/simulators/circuit-lab/index.html?preset=...` with a step log fed by `postMessage` (catalog family F10), and the full screen **Harness Bench** at `/simulators/circuit-lab/harness/index.html`.
- **3D crimp lab**: `/aero/tools3d/labs/crimp.html`, the DMC crimp tool, G125 gauge and six steps.
- **Applying the procedure** page in every rebuilt lesson (`.ap-steps`, `.apsteps`, or step cards beside the real document), the hook's problem solved as numbered steps.

multimeter "Meter lab" (shortened):

```html
<div class="fluke-lab">
  <div class="job-picks" id="labJobs" role="group" aria-label="Which job">{{LAB_JOBS}}</div>
  <div class="fluke-goal" id="flukeGoal"></div><ol class="howto" id="labHowto"></ol>
  <div class="lab-pred" id="labPred" hidden><p class="lp-q" id="labPredQ"></p><div class="lp-opts" id="labPredOpts"></div>
    <p class="lp-res" id="labPredRes" aria-live="polite"></p></div>
  <div class="job-won" id="jobWon" aria-live="polite"></div>
  <div class="fluke-grid"> ... the meter and the board ... </div></div>
```

A shared meter trainer with modes and a job list is a large build (catalog family F5), listed under "Worth building later" in [gaps.md](gaps.md).

## Strong CAET example

- **multimeter, "Meter lab" (`#measure`)**: a 12 V board with a switch, a break point, R1 and R2 in parallel and a headset jack. Prove the meter first, then each job with a prediction before the reading. Built lesson: `frontend/public/aero/courses/dc-fundamentals/lessons/multimeter.html`.
- **harness-fabrication, "Harness Bench" (`#bench`)**: read the work order and drawing, build all twelve cable ends, ring out the harness, find and repair the fault the bench hides.

## A CAET idea

**Terminations** (not yet rebuilt): a guided crimp on the 3D crimp lab with the real AFM8 tool and its data plate: choose the contact, read the selector setting off the plate, set the tool, strip to length against the gauge, crimp, inspect the inspection hole, pull test. Each step is checked, and a wrong selector setting produces the bad crimp that the next page's [image-compare-slider](image-compare-slider.md) shows.

## Common mistakes

- A sim with no job, or a job with no goal.
- Steps that the sim accepts in any order when the real procedure has an order.
- Locking Continue until the lab is done.
- Replacing the original working sim with a new drawing. The brief: lift it, keep it.

## Sources

- Brief (hands-on page, keep the sims): `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`; component families F4, F5, F10, F11: `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/multimeter/pages-*.tpl`, `.../harness-fabrication/pages-*.tpl`; tool models: `aero-caet-source/frontend/public/aero/tools3d/registry.json`
- van Merrienboer, J. J. G., and Kirschner, P. A. (2018). Ten Steps to Complex Learning (3rd ed.). Routledge. https://doi.org/10.4324/9781315113210
- Collins, A., Brown, J. S., and Newman, S. E. (1989). Cognitive apprenticeship: Teaching the crafts of reading, writing, and mathematics. In L. B. Resnick (Ed.), Knowing, Learning, and Instruction (pp. 453-494). Erlbaum. Cited in the library chapter [cognitive-apprenticeship-mentor](../../principles/05-tutor-personas/cognitive-apprenticeship-mentor.md).
- Finkelstein, N. D., et al. (2005). When learning about the real world is better done virtually. Physical Review Special Topics, Physics Education Research, 1, 010103. https://doi.org/10.1103/PhysRevSTPER.1.010103
- Storyline 360 user guide (sliders, dials, triggers for simulations): https://community.articulate.com/kb/user-guide-series/storyline-360-user-guide/1193854
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
