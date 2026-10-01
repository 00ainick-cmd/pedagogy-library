---
pattern: one-card-sort
family: check
principles: [testing-effect, interleaving, schema-theory-knowledge-components, error-analysis-corrective-feedback]
our_component: shared, .rsort in core/lesson-parts.js and .css (AeroParts.sort)
status: shared
best_example: safety-data-sheets, pages "Section sort" (#keysort) and "Access sort" (#accesssort)
last_reviewed: 2026-10-01
---

# One-Card Sort

## Purpose

One card at a time, the student sorts short real situations into two or three buckets: before the job, during an exposure or spill, after the job; meets the requirement, does not; series, parallel. A wrong drop shakes the bucket and explains; a right drop flies the card in and says why. Nick liked the drag-card sort from the first pilot, and the brief makes it the only sort: "never the old tap-then-bucket." Rise's Sorting Activity is the model.

## The learner's action

Drags the card to a bucket (holds and drops on a phone), or presses the left or right arrow key or 1 to 9, or taps a bucket. Reads the line under the arena. Continues until every card is sorted. Start over resets it.

## When it teaches

- **Classification is retrieval plus a rule.** To sort "A coworker gets solvent in an eye" the student must recall which section covers it and why. That is retrieval with immediate feedback ([testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **Mixed cards make the student choose the category.** Cards from different buckets arrive in mixed order, so each one asks "which kind of problem is this?" before "what is the answer?" That discrimination is what interleaving trains ([interleaving](../../principles/01-learning-science/interleaving.md); Rohrer and Taylor 2007).
- **The buckets are a schema.** Two or three named buckets with a one-line description give the student the categories an expert uses ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).
- **Each card's own feedback.** A card carries its own "why" for a right drop and its own "no" for a wrong one, so the miss teaches the specific mistake ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).

## When it does not

- The categories are not yet taught. Sorting before teaching is guessing; put the sort after the concept page (SDS puts "Section sort" right after "Key sections").
- Four or more buckets. Recognition gets slow and the phone layout breaks. Split into two sorts, or use [matching](matching.md).
- Every card is obvious. If a card cannot be sorted wrong by a real student, cut it.
- The answer depends on an order, not a kind. Use [drag-to-order](drag-to-order.md).
- More than about seven cards. The point is made by five.

## Anatomy

- **Count** (`.rs-count`, live): "Card 2 of 5", then "All 5 sorted".
- **Phone tip** (`.rs-tilt`, added by the script): "Tip: turn your phone sideways to make dragging easier." Shown only on a touch screen held upright, gone when the sort is done.
- **Arena** (`.rs-arena`): two buckets either side of the card, or three under it (`.is-three`). Each bucket: a name (`h4`), a one-line description, a list of sorted cards (`.got`).
- **Card** (`.rs-card`): one short real situation, large type, `tabindex="0"`.
- **Hint** (`.rs-hint`): "Tap the bucket where the card belongs. On a computer you can also drag the card."
- **Message** (`.dmsg`, live): the card's "why" when right, its "no" when wrong; at the end, the sort's `data-done` summary plus the last card's why.
- **Feedback motion**: right, the card shrinks into the bucket (none under reduced motion); wrong, the bucket shakes for 0.4 s and the card springs back.
- **Start over** button.

## Mobile and accessibility

- Three ways to answer, which covers WCAG 2.2 2.5.7 Dragging Movements: drag, keys (arrows, 1 to 9) and a single tap on the bucket.
- Buckets are `role="button" tabindex="0"` with an `aria-label` of name and description; Enter or Space drops the card there.
- The card is a `role="group"` with an `aria-label` that tells keyboard users the keys.
- Count and message are `aria-live="polite"`.
- On a phone held upright, two buckets sit side by side under the card and three stack under it; keep card and buckets on one screen (check at 390 by 844).
- The card's arrow keys call `preventDefault()`, so the pager does not turn the page while the student sorts by keyboard.

## Our implementation

Shared: `frontend/public/core/lesson-parts.js` and `.css`. safety-data-sheets builds the markup from data:

```python
SORT_KEY = dict(id='sort-key', three=True,
    no='Not quite. Think about when in the job you would open the sheet.',
    done='Sections 7 and 8 are read before the job, Sections 4 and 6 after an exposure or a spill, and Section 13 after the job.',
    buckets=[dict(bin='before', h='Before you start', p='Storing the product and choosing protective gear.'),
             dict(bin='problem', h='An exposure or a spill', p='First aid and cleanup.'),
             dict(bin='after', h='After the job', p='Leftovers and waste.')],
    cards=[dict(t='A coworker gets solvent in an eye.', b='problem',
                why='Right. Section 4, first-aid measures, tells you what to do right away.',
                no='Not quite. An exposure is an emergency, and the first-aid section is Section 4.'), ...])
```

```html
<div class="rsort" id="sort-key" data-no="..." data-done="..." data-cards='[{"t":"...","b":"problem","why":"...","no":"..."}]'>
  <p class="rs-count" aria-live="polite"></p>
  <div class="rs-arena is-three">
    <div class="rs-bucket b1" data-bin="before" role="button" tabindex="0" aria-label="Before you start. ..."><h4>Before you start</h4><p>...</p><div class="got"></div></div>
    <div class="rs-well"><div class="rs-card" tabindex="0" role="group" aria-label="Card to sort. Press the number keys, or the left and right arrow keys, to pick a bucket."></div>
      <p class="rs-hint">Tap the bucket where the card belongs. On a computer you can also drag the card.</p></div>
    <div class="rs-bucket b2" data-bin="problem" ...>...</div><div class="rs-bucket b3" data-bin="after" ...>...</div>
  </div>
  <p class="dmsg" aria-live="polite">Which bucket does this card belong in?</p>
  <button class="btn rs-reset" type="button">Start over</button></div>
```

## Strong CAET example

- **safety-data-sheets, "Section sort" (`#keysort`)**: five job moments into Before you start, An exposure or a spill, After the job, each card answered with its section number. Its own page, because the number cards before it fill a phone screen.
- **safety-data-sheets, "Access sort" (`#accesssort`)**: five real arrangements of the sheets (a locked office, a sign-out binder, a computer with no backup) into Meets the requirement and Does not. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.

## A CAET idea

**RS Serial Interfaces** (not yet rebuilt): three buckets, RS-232, RS-422 and RS-485, and cards that are real facts from installation manuals: "One driver, one receiver, signal measured against ground", "One driver, up to ten receivers, differential pair", "Many drivers share one pair, each takes its turn." The objective is to tell them apart by signaling and device count, which is exactly what each card asks.

## Common mistakes

- Cards that are definitions ("Section 8 is protective equipment") instead of situations ("You need to know which gloves to wear").
- The old tap-a-card-then-tap-a-bucket design. Nick's standard is the one-card sort.
- Buckets with vague names ("Good", "Bad"). Name the category.
- A generic "Try again" for every wrong drop. Give each card its own "no".
- A sort on the same page as a full stat panel, so the arena falls off a phone screen. Give the sort its own page.

## Sources

- Shared part: `aero-caet-source/frontend/public/core/lesson-parts.js` and `.css`; skill rule: `aero-caet-source/.claude/skills/lesson-revamp/SKILL.md`; Nick's preference: `aero-caet-source/curriculum/revamp-kit/CHANGELOG.md`
- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/` (`content.py` SORT_KEY and SORT_ACCESS, `assemble.py` `sort()`)
- Rohrer, D., and Taylor, K. (2007). The shuffling of mathematics problems improves learning. Instructional Science, 35(6), 481-498. https://doi.org/10.1007/s11251-007-9015-8
- Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Rise 360, Sorting Activity blocks: https://www.articulatesupport.com/article/Rise-How-to-Use-Sorting-Activity-Blocks
- Rise 360 accessibility maturity plan (sorting accessible by keyboard and screen reader, February 2026): https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- Evolve Sorting component: https://experience.intellum.com/student/page/958332-sorting-component
- NN/g, Drag and drop: how to design for ease of use: https://www.nngroup.com/articles/drag-drop/
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- Salesforce accessible drag and drop patterns: https://salesforce-ux.github.io/dnd-a11y-patterns/
