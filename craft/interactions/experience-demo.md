---
pattern: experience-demo
family: do
principles: [predict-before-reveal, productive-failure, desirable-difficulties, self-efficacy]
our_component: lesson-local timed tests (counting test on canvas, shelf comparison test, drive and color tests) in human-factors; not in lesson-parts
status: local
best_example: human-factors, pages "Count test" (#count) and "Shelf test" (#shelf), explained later on "Attention" (#attention)
last_reviewed: 2026-10-01
---

# Experience Demo

## Purpose

Let the student experience the effect before the lesson names it. Count every time a white wrench touches the edge of a panel for 20 seconds, and miss the gray nut that rolls across the middle. Find the one change between two flashes of an avionics shelf, and take far longer than expected. Later pages explain what the tests measured, using the student's own result. It turns "people miss things in plain view" from a claim into something the student just did.

## The learner's action

Reads short instructions, presses Start, does a timed task (count, find, react), sees a result. Later, on the explaining page, sees their own run replayed beside the research.

## When it teaches

- **Prediction error on yourself.** The student expects to see everything. Missing the object is a prediction error about their own attention, the mechanism that makes [predict-before-reveal](../../principles/04-delivery-patterns/predict-before-reveal.md) work (Brod 2021), and it is hard to argue with.
- **Struggle before the explanation.** Doing the task first and getting the concept after is the productive failure order; it works when the explanation follows closely and uses the student's attempt ([productive-failure](../../principles/04-delivery-patterns/productive-failure.md); Kapur 2014).
- **Real research behind the demo.** About half of viewers counting basketball passes missed a person in a gorilla suit (Simons and Chabris 1999); 20 of 24 radiologists missed a gorilla drawn into a lung scan (Drew, Vo and Wolfe 2013); people are least likely to notice an unexpected object that looks like what they are ignoring (Most et al. 2001). The demo lets the student join those numbers.
- **Calibrated confidence.** A technician who has felt their own blind spot is more willing to use the countermeasure (a second look, a second person) than one who was told about it ([self-efficacy](../../principles/06-motivation-engagement/self-efficacy.md), used carefully: the point is accurate confidence, not doubt).

## When it does not

- The demo is a trick with no job lesson. Each test must map to a maintenance error and a countermeasure.
- The explanation does not follow. A demo that is never explained leaves only confusion.
- It shames the student. Frame it as how every human eye works ("In this lesson you take a few short tests first, and later pages explain what they measured").
- Flashing or rapid motion that could trigger photosensitive reactions. Keep flashes under three per second (WCAG 2.3.1) and give a reduced motion path.
- The skill is better taught by doing the real task (a meter reading). Use a [guided-procedure](guided-procedure.md).

## Anatomy

- **Instructions**: plain, exact, short. Nothing that names what the test measures.
- **Start overlay**: "Press Start when you can see the whole panel."
- **Stage**: a canvas or SVG scene, a visible timer.
- **Response**: a count entry, a tap on the changed spot, a reaction button.
- **Result**: stored for later; a short neutral line now.
- **Explaining page**: the student's run replayed ("Your run of the Counting Test") beside the stat cards from the research, then the case file and the countermeasures.

## Mobile and accessibility

- The task must fit one phone screen without scrolling while the timer runs.
- Provide a non-timed path for a student who cannot do a timed visual task (WCAG 2.2.1 Timing Adjustable): a "Skip the test and read what it measures" button that does not block anything.
- No flashing above three per second; the shelf test's gray gap is a cut, not a strobe.
- Results are text as well as a replay.
- Under `prefers-reduced-motion`, offer the still-image version of the scene.

## Our implementation

Lesson-local in human-factors. "Count test":

```html
<p class="lede">In this lesson you take a few short tests first, and later pages explain what they measured. White wrenches and gray
screwdrivers move around the panel for 20 seconds. Count every time a white wrench touches an edge of the panel. ...</p>
<div class="ct"><div class="ct-stage" id="ctStage">
  <canvas id="ctCanvas" width="480" height="480" aria-label="Test panel"></canvas><div class="ct-time" id="ctTime" hidden></div>
  <div class="ct-over" id="ctOver"><p id="ctOverMsg">Press Start when you can see the whole panel.</p>
    <button class="btn active" type="button" id="ctStart">Start</button></div></div>
  <div class="ct-side"><div class="ct-steps" id="ctSteps" aria-live="polite"></div></div></div>
```

The explaining page ("Attention") replays the run on a second canvas (`#xCount`) with a "Take it now" button for a student who skipped the test.

## Strong CAET example

**human-factors, "Count test" (`#count`), "Shelf test" (`#shelf`), explained on "Attention" (`#attention`)**: the counting test hides a gray nut among gray screwdrivers; the shelf test flashes two views of a COMM and NAV avionics shelf with one change. The Attention page shows the student's run, the 1999 and 2013 gorilla studies as stat cards, and the A320 case file. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/human-factors.html`.

## A CAET idea

**Coax and Databus Cable** (new in the Blueprint), the "beep test": the student runs a continuity check on four coax jumpers on a bench drawing. All four beep. Then the lesson shows the time domain reflectometer (TDR) trace of each: one has a crushed dielectric and one a bad connector. The student has just trusted the beep, which is the Blueprint's point: "know why a continuity check cannot" prove a cable.

## Common mistakes

- A demo with no explanation page.
- Instructions that give the trick away.
- Timed tasks with no way out for a student who cannot do them.
- Flashing effects.

## Sources

- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/human-factors/` (`pages-*.tpl`, `script-*.tpl`)
- Simons, D. J., and Chabris, C. F. (1999). Gorillas in our midst: Sustained inattentional blindness for dynamic events. Perception, 28(9), 1059-1074. https://doi.org/10.1068/p281059
- Drew, T., Vo, M. L.-H., and Wolfe, J. M. (2013). The invisible gorilla strikes again: Sustained inattentional blindness in expert observers. Psychological Science, 24(9), 1848-1853. https://doi.org/10.1177/0956797613479386
- Most, S. B., Simons, D. J., Scholl, B. J., Jimenez, R., Clifford, E., and Chabris, C. F. (2001). How not to be seen: The contribution of similarity and selective ignoring to sustained inattentional blindness. Psychological Science, 12(1), 9-17. https://doi.org/10.1111/1467-9280.00303
- Brod, G. (2021). Predicting as a learning strategy. Psychonomic Bulletin and Review, 28(6), 1839-1847. https://doi.org/10.3758/s13423-021-01904-1
- Library chapter [productive-failure](../../principles/04-delivery-patterns/productive-failure.md) (Kapur 2008, 2014)
- WCAG 2.2, Three Flashes or Below Threshold: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
- WCAG 2.2, Timing Adjustable: https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html
- Blueprint goal for Coax and Databus Cable: `aero-caet-source/curriculum/blueprint/plans/digital-databus-wiring.json`
