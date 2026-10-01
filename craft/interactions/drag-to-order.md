---
pattern: drag-to-order
family: check
principles: [testing-effect, 4c-id-model, error-analysis-corrective-feedback]
our_component: lesson-local tap-in-order (.seqbox in shop-emergencies, .order in harness-fabrication, .seq-grid in hangar-fod-tool-control); a shared, draggable order part is a GAP
status: local
best_example: shop-emergencies, page "Contact" (#contact); harness-fabrication, page "Build order" (#order)
last_reviewed: 2026-10-01
---

# Drag to Order

## Purpose

The student puts the steps of a procedure in the order they are done: remove the power, remove the person, get medical care; or the steps of a harness build. Storyline calls it Sequence drag-and-drop; H5P has Image Sequencing and Sort the Paragraphs; Evolve's Sorting component does it too.

## The learner's action

Places each step in its position: drags it, or taps the steps in order, or moves a selected step up and down with the keyboard. Selects Check order. Reads which positions are right and why the order is what it is. Starts over if needed.

## When it teaches

- **The order is the knowledge.** In many shop procedures the sequence is the safety rule: the power comes off before anyone touches the person, because "anyone who touches him while the power is on is shocked too" (shop-emergencies). Recalling the order with feedback is retrieval on the part that matters ([testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **Arranging is a fast, honest test of a procedure.** In computing education, Parsons problems (put given lines of code in order) produced the same learning as writing the code, in much less time (Ericson, Margulieux and Rick 2017). Ordering given steps is the procedural equivalent: it tests the sequence without asking a first-week student to write the procedure from nothing.
- **After the worked steps, before the real task.** Show the procedure (a [process-stepper](process-stepper.md)), then ask for the order, then do it on a sim ([guided-procedure](guided-procedure.md)). That is the fading path of 4C/ID ([4c-id-model](../../principles/02-instructional-design/4c-id-model.md)).
- **Feedback on the reason.** The close says why each step sits where it does, not only that it does ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).

## When it does not

- The order does not matter, or several orders are correct. Then grading one order teaches a false rule. Use a [checklist](checklist.md).
- The student has never seen the procedure. Ordering from nothing is guessing; show it first.
- More than about seven steps. Split the procedure into phases.
- On the same page as the stepper that just showed the order. Put it on the next page so it is recall, not copying.

## Anatomy

- **Instruction line**: "Select the steps in the order you would do them, then select Check order."
- **Pool**: the steps, shuffled, each a full sentence of real action.
- **Your order**: numbered slots that fill as steps are placed. A placed step can be sent back.
- **Status**: "2 steps left to place", then "All three steps are placed. Select Check order."
- **Check order**: marks each position right or wrong with a symbol and a word, and states how many are in place.
- **Close**: the correct order with the reason for it, in one or two sentences.
- **Start over**.

## Mobile and accessibility

- Today's lessons use tap-in-order (select steps in the order you would do them), which needs no drag at all and works with a keyboard. Keep that as the default on phones.
- A drag version must keep a non-drag alternative (WCAG 2.2 2.5.7) and keyboard reordering: select a step with Space, move it with the arrow keys, drop with Space, with each move announced ("Remove the person, moved to position 2 of 3"). The WAI-ARIA rearrangeable listbox example shows the pattern.
- Status line and result are `aria-live="polite"`.
- On a phone the pool sits above the slots; each step is a full-width button at least 48 px tall.

## Our implementation

Lesson-local. shop-emergencies "Contact":

```html
<p class="act-hint">Select the steps in the order you would do them, then select Check order.</p>
<div class="seqbox">
  <div class="seq-cols">
    <div><div class="colhead">Steps</div><div class="seq-pool" id="seqBank"></div></div>
    <div><div class="colhead">Your order</div><div id="seqSlots"></div></div></div>
  <div class="seq-acts"><button class="btn active" id="seqCheck" type="button">Check order</button>
    <button class="btn" id="seqReset" type="button">Start over</button></div>
  <p class="hint" id="seqHint" aria-live="polite"></p><div id="seqEnd"></div></div>
```

```python
SEQ = dict(steps=['Remove the power: turn off the bench disconnect, pull the plug or switch off the circuit breaker.',
                  'Remove the person: push him free with a dry rescue hook. Never use your hands.',
                  'Get medical care: call for emergency help, check breathing, and send the person for a medical check.'],
           order=[1, 2, 0],   # the shuffled display order
           good='Correct. You shut off the power, then remove the person, then get medical care.',
           done='The order is power, then the person, then medical care. The power comes off first because ...',
           bad='{n} of 3 steps are in the right place. Select Start over and try again.')
```

GAP (gap 5 in [gaps.md](gaps.md)): one shared `rorder` part with the same data shape plus an optional `why` per step, tap-in-order by default, drag and keyboard reordering on top, and `preventDefault()` on every arrow key it handles so the pager does not turn the page.

## Strong CAET example

- **shop-emergencies, "Contact" (`#contact`)**: the three steps of the response to electrical contact, after the term cards for rescue hook and circuit breaker. The close gives the reason for the order. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/shop-emergencies.html`.
- **harness-fabrication, "Build order" (`#order`)**: the order of a harness build beside the photo of a real build board.

## A CAET idea

**Databus Troubleshooting** (new in the Blueprint): its goal is to "work a databus squawk in order: the diagram and the symptom pattern, the BITE and system messages, the physical layer, then the bus analyzer." Put those four as cards; the close explains why the cheap, non-intrusive checks come before the analyzer. Then a [scenario-branching](scenario-branching.md) page applies the order to a real squawk.

## Common mistakes

- Grading one order when the procedure allows several.
- Steps written so the order is obvious from the wording ("First, ...", "Finally, ...").
- No reason in the close.
- Drag only, with no tap or keyboard path.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/shop-emergencies/` (`pages-2.tpl`, `content.py` SEQ), `.../harness-fabrication/pages-1.tpl`, `.../hangar-fod-tool-control/pages-*.tpl`
- Ericson, B. J., Margulieux, L. E., and Rick, J. (2017). Solving Parsons problems versus fixing and writing code. Proceedings of Koli Calling 2017, 20-29. https://doi.org/10.1145/3141880.3141895
- Storyline 360 form-based questions (Sequence drag-and-drop, Sequence drop-down): https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-add-form-based-questions
- H5P content types (Image Sequencing, Sort the Paragraphs): https://h5p.org/content-types-and-applications
- H5P accessibility ratings (Image Sequencing and Sort the Paragraphs: usable with workarounds): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- Evolve Sorting component (order items): https://experience.intellum.com/student/page/958332-sorting-component
- WAI-ARIA APG, Listbox with rearrangeable options: https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-rearrangeable/
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- NN/g, Drag and drop: https://www.nngroup.com/articles/drag-drop/
