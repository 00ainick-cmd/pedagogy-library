---
pattern: matching
family: check
principles: [testing-effect, schema-theory-knowledge-components, item-writing-rules]
our_component: GAP (nearest today: one-card-sort with one card per bucket)
status: gap
best_example: none built
last_reviewed: 2026-10-01
---

# Matching

## Purpose

Pair each item on the left with its partner on the right: a fault with its meter signature, a connector pin with its signal, a schematic symbol with the part, a test with the rule that requires it. Rise has a Matching knowledge check; Storyline has Matching drag-and-drop and Matching drop-down; Evolve has a Matching component; H5P has Image Pairing.

## The learner's action

Selects an item on the left, then its partner on the right (or picks the partner from a short list beside each left item). Selects Check. Reads which pairs are right and why. Fixes the wrong ones.

## When it teaches

- **One-to-one associations the job depends on.** A technician must know that OL on a wire means an open and near zero ohms to ground means a short. Recalling each pairing with feedback is retrieval practice on exactly those links ([testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **Seeing the set at once.** Matching shows the whole family of faults or signals together, which helps the student build the set as one structure instead of loose facts ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).
- **Efficient for a homogeneous set.** Assessment guidance treats matching as an efficient format for a set of parallel associations, provided the set is homogeneous and has extra options on one side ([item-writing-rules](../../principles/03-assessment-science/item-writing-rules.md); Haladyna, Downing and Rodriguez 2002).

## When it does not

- The items are not all the same kind. Mixing "a meter reading" with "a regulation" on one side gives the answer away by elimination.
- Two or three pairs. Use an [ask-card](ask-card.md) or a [one-card-sort](one-card-sort.md).
- More than six pairs. Working memory and a phone screen both run out.
- The pairs need reasoning, not recall. Then a [scenario-branching](scenario-branching.md) or [find-the-fault](find-the-fault.md) teaches more.

## Anatomy

- **Left column**: three to six items, short.
- **Right column**: the same number plus one or two extra options, so the last pair is not free.
- **Pairing**: select a left item (it lights), select a right item; a numbered tag shows the pair on both sides. A line between them is a nice touch on desktop, never the only marker.
- **Check**: each pair marked right or wrong with a symbol and a word, and the why for each pair.
- **Start over**.

## Mobile and accessibility

- At 390 px two columns of sentences do not fit. Use the drop-down form on phones: each left item is a card with a native `<select>` of the right-side options. Native selects work with every screen reader and keyboard and need no drag (WCAG 2.2 2.5.7).
- On desktop, the tap-left then tap-right form; each item is a button with `aria-pressed`; the pairing is announced ("OL paired with Open circuit").
- Results in an `aria-live` region; right and wrong never by color alone.
- Rise reworked its own matching check for keyboard and screen reader access in January 2025; matching is easy to build badly.

## Our implementation

GAP (gap 8 in [gaps.md](gaps.md)). Build spec, one builder, as `frontend/public/core/parts/match.js` and `.css` (new files only):

```html
<div class="rmatch" id="match-faults"
     data-pairs='[{"a":"Open circuit","b":"OL between the two ends of the wire","why":"An open has no path, so the meter reads over limit."},
                  {"a":"Short to ground","b":"Near 0 ohms from the wire to airframe ground","why":"..."},
                  {"a":"High-resistance joint","b":"A reading well above the wire table value","why":"..."}]'
     data-extra='["0 ohms between the two ends of the wire"]'>
  <p class="rm-hint">Select a fault, then the reading it gives. Then select Check.</p>
  <div class="rm-cols"><ol class="rm-left"></ol><ol class="rm-right"></ol></div>
  <p class="rm-msg" aria-live="polite"></p>
  <button class="btn active rm-check" type="button">Check</button><button class="btn rm-reset" type="button">Start over</button></div>
```

The script shuffles the right column, builds buttons on desktop and `<select>` cards under 720 px, records `AeroLesson.interaction({id, kind:'match', correct})`, and shows each pair's `why` after Check.

## Strong CAET example

None built. The nearest is a [one-card-sort](one-card-sort.md) with as many buckets as cards, which is clumsy past three.

## A CAET idea

**Wiring Troubleshooting** (not yet rebuilt): its Blueprint goal lists the fault signatures a technician must read: an open, a short, a miswire, a high-resistance joint, an intermittent and reversed polarity. Match each fault to the reading or behavior that signals it on the meter, with one extra reading that fits none. Then [find-the-fault](find-the-fault.md) on a harness puts the signatures to work.

## Common mistakes

- Equal numbers on both sides, so the last pair is free.
- Mixed kinds of items on one side.
- Drag-only pairing.
- Long sentences on both sides on a phone.

## Sources

- Haladyna, T. M., Downing, S. M., and Rodriguez, M. C. (2002). A review of multiple-choice item-writing guidelines for classroom assessment. Applied Measurement in Education, 15(3), 309-333. https://doi.org/10.1207/S15324818AME1503_5
- Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Rise 360 block types (Matching knowledge check): https://www.articulatesupport.com/article/Rise-Lesson-and-Block-Types
- Rise 360 release notes (matching reworked for keyboard access, 2025): https://help.rise.com/en/articles/3508729-rise-release-notes
- Rise 360 accessibility maturity plan (matching accessible January 2025): https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- Storyline 360 form-based questions (Matching drag-and-drop, Matching drop-down): https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-add-form-based-questions
- Evolve course components (Matching): https://clients.intellum.com/student/path/853033-course-components
- H5P accessibility ratings (Image Pair: requires alternative activity): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- Blueprint goal for Wiring Troubleshooting: `aero-caet-source/curriculum/blueprint/plans/digital-databus-wiring.json`
