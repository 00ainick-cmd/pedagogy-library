---
pattern: predict-then-reveal
family: check
principles: [predict-before-reveal, pretesting-effect, error-analysis-corrective-feedback, productive-failure]
our_component: lesson-local predict panels (.predict with .popts and .reveal; .pred with Check); not in lesson-parts
status: local
best_example: safety-data-sheets, page "Permeation" (#permeation); blocked-ports, page "Airspeed" (#airspeed)
last_reviewed: 2026-10-01
---

# Predict, Then Reveal

## Purpose

Before the lesson shows what happens, the student commits to what they think will happen. Then the reveal shows the real answer next to their prediction, and explains it. The science is in the library chapter [predict-before-reveal](../../principles/04-delivery-patterns/predict-before-reveal.md); this file is how we build it on a page.

## The learner's action

Reads a short situation, picks or enters a prediction, selects Check (or the pick itself reveals), reads the reveal with their own choice still marked, and moves on. Any choice is accepted. Nothing is locked.

## When it teaches

- Committing to a prediction, even a wrong one, improves memory for the answer that follows (St. Hilaire, Chan and Ahn 2024 meta-analysis, g about 0.54 on the predicted items; [pretesting-effect](../../principles/01-learning-science/pretesting-effect.md)). The prediction error is what does the work (Brod 2021).
- The reveal is corrective feedback on a real misconception, so the wrong option must be the mistake a student actually makes ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).
- Before a live model, a prediction turns play into a test of the student's model ([live-model](live-model.md)).

## When it does not

(From the library chapter, applied to our pages.)

- The reveal is not on the same page, within seconds.
- The student has no basis at all for a guess on high-interactivity material. Teach the parts first; predict on the second or third concept page, not the first ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).
- Two options, one obviously right. That is recognition, not prediction. Give three or four options that are each a real belief.
- The same stem appears again as an ask card on the same page. The component catalog found this duplicate in several template B lessons. Keep one.

## Anatomy

- **Situation**: two or three plain sentences with the real numbers ("The static line blocks at 8,500 feet while the airplane cruises at 120 knots").
- **Options**: three or four, each a real belief; or one row per case (blocked-ports predicts the airspeed at several altitudes, one row each).
- **Check** (multi-row only): enabled when every row has a pick.
- **Reveal**: the student's pick stays marked; the right answer is marked with a symbol and a word; a verdict line; the why in one to three sentences; often a short step list or a figure that shows the mechanism (SDS shows the three stages of permeation inside the glove).
- **Rule box** after the reveal with the general rule.
- **No Try again on a prediction** in the SDS form; blocked-ports offers Try again after the reveal for the multi-row case.

## Mobile and accessibility

- Options are buttons in a group, or radio-like buttons with `aria-pressed`. After the reveal they are disabled, and the right one carries `is-key` plus a text marker, not only green.
- The verdict takes focus (`tabindex="-1"`) so a screen reader reads it; the why follows in reading order.
- At 390 px the options stack full width; each at least 48 px tall.

## Our implementation

Lesson-local. safety-data-sheets "Permeation":

```html
<div class="predict" id="perm">
  <p class="scn">The hand protection line in Section 8 ... says only: Wear protective gloves. The only gloves in the work area are thin vinyl gloves. What do you do?</p>
  <div class="popts" id="permOpts">{{PERM_OPTS}}</div>
  <div class="reveal" id="permReveal" hidden>
    <p class="verdict" id="permVerdict" tabindex="-1"></p><p class="why" id="permWhy"></p>
    <h3 class="sort-h">Inside the Glove</h3><ol class="wall3" id="permSteps">{{PERM_STEPS}}</ol>
    <p class="plain" id="permClose">Swelling is one sign that a glove is failing ...</p></div></div>
```

Data (`content.py`):

```python
PERM = dict(opts=['Wear two pairs of the vinyl gloves and work quickly.',
                  'Stop and ask your supervisor which glove to use for this solvent.',
                  'Wear the vinyl gloves and change to a fresh pair every ten minutes.'],
            ans=1,
            why=['Two pairs of a glove nobody has chosen for this chemical are still the same material. ...',
                 'The sheet names no glove material, so the choice goes to your supervisor. ...',
                 'A fresh glove of the same material starts the same process again. ...'])
PERM_STEPS = [('Soaks in.', 'The chemical soaks into the outside surface of the glove.'), ...]
```

Every option has its own "why", so a wrong prediction is answered on its own terms.

The shared `.ask` card can carry a prediction, but it says "Not quite" and asks to try again, which suits a check better than a prediction. A shared `predict` mode for `.ask` (accept any answer, show "Your prediction" beside "What happens", no retry) would be a small addition; it is folded into gap 2 in [gaps.md](gaps.md).

## Strong CAET example

- **safety-data-sheets, "Permeation" (`#permeation`)**: two term cards, then "the only gloves are thin vinyl; what do you do?" The reveal explains permeation in three steps inside the glove and why bare hands are not the answer. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.
- **blocked-ports, "Airspeed" (`#airspeed`)**: predict the airspeed indication at several altitudes with the static line blocked at 8,500 feet, then Check. The rule box: the error grows the farther the airplane goes from the blockage altitude.
- **power-distribution, "Lab" (`#explore`)**: predict which loads go dark for each fault, then run it on the model.

## A CAET idea

**Bonding, Grounding and Shielding** (new in the Blueprint): "A ground joint that should measure a few milliohms now measures 0.5 ohm. A radio draws 5 A through it on a 28 V bus. What happens at the radio?" Options: nothing, the joint still conducts; the radio loses about 2.5 V and may misbehave; the breaker trips. The reveal works E = I × R on the joint (2.5 V lost) and shows the radio's supply sag on a small model, which turns "a bad bond" from a rule into a number.

## Common mistakes

- Revealing in a different place from the prediction, so the student cannot see their own pick against the answer.
- Grading a prediction ("Wrong!"). It is a guess. Say what happens and why.
- Predicting something the page then never explains.
- A prediction with an obvious answer.

## Sources

- Library chapter: [predict-before-reveal](../../principles/04-delivery-patterns/predict-before-reveal.md) (St. Hilaire, Chan and Ahn 2024; Brod 2021; Carpenter and Toftness 2017; Potts and Shanks 2014)
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/` (`pages-4.tpl`, `content.py` PERM and PERM_STEPS, `script.tpl` permeation), `.../blocked-ports/pages-*.tpl`, `.../power-distribution/pages-*.tpl`
- Duplicate stem finding: `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`, section 4
- St. Hilaire, K. J., Chan, J. C. K., and Ahn, D. (2024). Guessing as a learning intervention: A meta-analytic review of the prequestion effect. Psychonomic Bulletin and Review, 31(3), 919-942. https://doi.org/10.3758/s13423-023-02353-8
- Brod, G. (2021). Predicting as a learning strategy. Psychonomic Bulletin and Review, 28(6), 1839-1847. https://doi.org/10.3758/s13423-021-01904-1
- H5P Guess the Answer: https://h5p.org/content-types-and-applications
- WCAG 2.2, Use of Color: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
