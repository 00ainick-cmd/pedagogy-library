---
pattern: process-stepper
family: explore
principles: [cognitive-load-theory, worked-example-effect, 4c-id-model]
our_component: lesson-local steppers (.stepper with .st-strip and .st-panel; .stepr; .stepstrip with .steppanel); static .stepcards is shared
status: local
best_example: antennas-coax, page "Install" (#install); series-parallel-circuits, page "Reduce" (#reduce)
last_reviewed: 2026-10-01
---

# Process Stepper

## Purpose

Walk a procedure, a chain or a calculation one step at a time, with a strip that shows every step and the current one lit, and a panel for the step: what to do, why, the real source text, and a figure of that step. Rise calls it the Process block; NN/g's research on wizards covers the same control.

## The learner's action

Selects Next and Back, or selects any step in the strip. Nothing is graded.

## When it teaches

- **Segmenting.** A long procedure delivered one step at a time, at the student's pace, beats the same procedure on one screen (Mayer's segmenting principle, d about 0.70; Rey et al. 2019 meta-analysis). [cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md).
- **Worked example.** Stepping through a solved reduction or a solved installation, with the reason for each step, is a worked example ([worked-example-effect](../../principles/01-learning-science/worked-example-effect.md)).
- **Procedural information at the moment of need.** 4C/ID puts how-to information right beside the step it governs ([4c-id-model](../../principles/02-instructional-design/4c-id-model.md)). A step panel that quotes AC 43.13-2B for that step does this.
- **A visible map.** NN/g on wizards: show "a list or a diagram of the steps" so the student keeps the whole process in view.

## When it does not

- The student should produce the order. Then the stepper gives the answer away. Use [drag-to-order](drag-to-order.md) after the stepper, not instead of it.
- Three short steps. Static step cards (`.stepcards`, shared) show them at once with no clicks.
- The steps must be compared. Show them together.
- The steps are a motion. A gyro precessing or current flowing is animation, not a stepper. Nick rejected a slide comparison where motion was the point and asked for a short animated video (Current lesson, page 6, 2026-09-29). See `../media-motion/`.
- An experienced student repeating a procedure they know. NN/g: wizards "limit the users' control" and frustrate experts.

## Anatomy

- **Strip**: numbered steps in a row (a column on a phone), each a button with a short label; current step lit; visited steps marked.
- **Count**: "Step 3 of 6" or "Stage 1 of 4" in a live region.
- **Panel**: step kicker, a plain title, one to three sentences, the real source quote where one exists (`blockquote` plus credit), and a figure of that step.
- **Controls**: Back and Next step at the end of the panel. Next becomes a done state on the last step; it never auto-advances.
- **Close**: a rule box or summary that appears after the last step (series-parallel-circuits shows its rule only then, `.rule-late`).

## Mobile and accessibility

- Strip buttons have `aria-current="step"` on the current step. Panel is `aria-live="polite"` so the new step is read.
- Moving to a step moves focus to the panel title only when the student used the strip; Next keeps focus on Next so repeated presses work.
- At 390 px the strip wraps to two rows of numbers or becomes a numbered list above the panel; the figure sits under the text.
- No timers and no auto-play (WCAG 2.2.2).

## Our implementation

Lesson-local, three shapes:

- `.stepper` with `.st-strip` and `.st-panel` (antennas-coax `#install`, hangar-fod-tool-control `#sequence`, shop-communication `#flight2574`).
- `.stepr` with `.stepr-top`, `.stepr-count`, `.stepr-nav` (series-parallel-circuits, four pages).
- `.stepstrip` with `.steppanel` (efis-glass `#chain`, `#redx`).

antennas-coax "Install" (shortened):

```html
<div class="stepper" id="stInstall">
  <ol class="st-strip">{{INSTALL_TABS}}</ol>
  <article class="st-panel" aria-live="polite">
    <div class="st-body"><div class="st-text"><p class="st-k" id="insK"></p><h4 class="st-title" id="insH"></h4><p id="insT"></p>
      <blockquote class="acq" id="insQ"></blockquote><p class="credit" id="insQs"></p></div>
      <figure class="st-fig"><img id="insImg" src="..." alt=""/><figcaption class="figcap" id="insCr"></figcaption></figure></div>
    <div class="st-acts"><button class="btn" id="insBack">Back</button><button class="btn active" id="insNext">Next step</button></div>
  </article></div>
```

Data per step (antennas-coax `content.py`):

```python
INSTALL = [dict(h='Template', t='Mark the location from the installation drawing. Tape the template on the fore-and-aft centerline, ...',
                img='fig11-161-template.png', alt='A typical antenna mounting template: ...', cr='Source: FAA-H-8083-31B, Figure 11-161.',
                q='Refer to installation drawing before drilling holes in aircraft skin to determine proper size and spacing.',
                qs='AC 43.13-2B, par. 309b(1)'), ...]
``` A shared stepper is gap 10 in [gaps.md](gaps.md).

## Strong CAET example

- **antennas-coax, "Install" (`#install`)**: the FAA's typical antenna installation as steps, each with the real words of AC 43.13-2B and a figure, behind a warning to check what is behind the skin before drilling. Built lesson: `frontend/public/aero/courses/cns/lessons/antennas-coax.html`.
- **series-parallel-circuits, "Reduce" (`#reduce`)**: a worked reduction of a combination circuit in four stages beside the circuit drawing.

## A CAET idea

**Bonding, Grounding and Shielding** (new in the Blueprint): making and proving a bond as a stepper on the real AC 43.13-1B figures: prepare the surface, assemble the hardware in the order Table 11-14 shows, then the millivolt drop test of Figure 11-19, each step with the AC's own words. Then a [drag-to-order](drag-to-order.md) on the next page asks the student to put the same steps in order from memory.

## Common mistakes

- Auto-advancing steps. The student sets the pace.
- A stepper whose steps are paragraphs with no figure. Each step should show its state.
- Hiding the step list, so the student cannot see where they are.
- Using the stepper for content with no order.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/antennas-coax/pages-*.tpl`, `.../series-parallel-circuits/pages-2.tpl` and `pages-3.tpl`, `.../efis-glass/pages-*.tpl`
- Nick's rejection of the slide comparison: `aero-caet-source/curriculum/revamp-kit/lessons/15-current-lesson/storyboard/approval.json`
- Rey, G. D., et al. (2019). A meta-analysis of the segmenting effect. Educational Psychology Review, 31, 389-419. https://link.springer.com/article/10.1007/s10648-018-9456-4
- Mayer, R. E. (2017). Using multimedia for e-learning. Journal of Computer Assisted Learning, 33(5), 403-423. https://onlinelibrary.wiley.com/doi/abs/10.1111/jcal.12197
- NN/g, Wizards: Definition and design recommendations: https://www.nngroup.com/articles/wizards/
- Rise 360, Process blocks: https://www.articulatesupport.com/article/Rise-How-to-Use-Process-Blocks
- Rise 360 accessibility maturity plan (process block focus indicator gap): https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- WCAG 2.2, Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
