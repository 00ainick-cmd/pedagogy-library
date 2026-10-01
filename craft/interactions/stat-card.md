---
pattern: stat-card
family: carry
principles: [cognitive-load-theory, dual-coding]
our_component: shared, .stats and .stat in core/lesson-parts.css
status: shared
best_example: safety-data-sheets, page "Solvents" (#solvents); human-factors, page "Attention" (#attention)
last_reviewed: 2026-10-01
---

# Stat Card

## Purpose

Set the one number a page turns on in big type, with its unit and one line of meaning: 28 V, 152.6 °F, 125 feet, 24 calendar months. Two or three cards side by side make a comparison the eye takes in at once. It is a graphical block, not an interaction, and it is the right tool when a page has no figure.

## The learner's action

Reads it. Nothing to select.

## When it teaches

- **Signaling.** A big number tells the student what to keep from the page (Schneider et al. 2018 signaling meta-analysis).
- **Comparison at a glance.** Two numbers side by side, "152.6 °F, parts washer solvent" against "Below 0 °F, acetone," show the difference without a sentence. Side by side beats one after the other (Alfieri, Nokes-Malach and Schunn 2013).
- **Coherence.** One number with one meaning line replaces a paragraph of numbers ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).

## When it does not

- The number is not the point of the page. A big number that does not teach is decoration (Rey 2012).
- The student needs to work with the number. Give them a [fill-the-table](fill-the-table.md) or a [live-model](live-model.md).
- More than one stat panel on a page. The brief's graphical text rule: one graphical-text block per page carries the key fact.
- A made-up statistic. Only real, sourced numbers.

## Anatomy

- **Number** (`.n`) at 36 to 56 px, the unit in a smaller weight beside it (`<small>`).
- **Label** (`.l`) in small mono capitals: what the number is.
- **Meaning line** (`.d`): one plain sentence of what it means on the job, with its source if it is not on the page.
- **Color by meaning**: `.stat.ok` green, `.stat.r` red, `.stat.i` current blue in the shared CSS; safety-data-sheets adds a lesson-local `.stat.bad`. Never color alone: the label says it too.
- Grids: `.stats` (three), `.stats.two`, and lesson-local `.stats.five` and `.stats.one`.

## Mobile and accessibility

- One column at 390 px. The number never wraps mid-value: keep the value and unit together (`white-space:nowrap` on the value).
- Big type still meets 4.5:1 contrast; body lines meet 7:1.
- Screen readers read the number and unit as text, so write "152.6 °F", not a picture of a number.

## Our implementation

Shared in `frontend/public/core/lesson-parts.css`:

```html
<div class="stats two">
  <div class="stat ok"><div class="n">152.6 &deg;F</div><div class="l">Parts washer solvent, flash point</div>
    <p class="d">Section 9 of its sheet: 67 &deg;C (152.6 &deg;F).</p></div>
  <div class="stat bad"><div class="n">Below 0 &deg;F</div><div class="l">Acetone, flash point</div>
    <p class="d">It is a Class I liquid. The handbook says not to use Class I liquids to clean aircraft.</p></div>
</div>
```

## Strong CAET example

- **safety-data-sheets, "Solvents" (`#solvents`)**: the two flash points side by side, each sourced, then the explanation of why one ignites at room temperature and the other does not. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.
- **human-factors, "Attention" (`#attention`)**: "About half" (the 1999 gorilla study) and "20 of 24" (radiologists, 2013), each with who found it and when.

## A CAET idea

**Databus Types** (not yet rebuilt): its Blueprint goal names the numbers a technician needs for ARINC 429: one talker and up to 20 listeners per pair, a differential signal of +10, 0 and -10 V, a 32-bit word. Set them as one three-card panel on the page that introduces the bus, each with its meaning line and its source, and let the rest of the lesson unpack them.

## Common mistakes

- A number with no unit or no meaning line.
- Rounding a sourced number into a different number.
- A stat panel on every page. It loses its weight.
- Thin display weights under 24 px on the dark background.

## Sources

- Shared part: `aero-caet-source/frontend/public/core/lesson-parts.css` (`.stats`, `.stat`)
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/pages-4.tpl`; `.../human-factors/pages-*.tpl`
- Graphical-text rules for this kit: `aero-caet-source/curriculum/revamp-kit/research/03-patterns-and-libraries.md`, section 3
- Schneider, S., Beege, M., Nebel, S., and Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. Educational Research Review, 23, 1-24. https://www.sciencedirect.com/science/article/abs/pii/S1747938X17300581
- Alfieri, L., Nokes-Malach, T. J., and Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. Educational Psychologist, 48(2), 87-113. https://doi.org/10.1080/00461520.2013.775712
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. Educational Research Review, 7(3), 216-237. https://doi.org/10.1016/j.edurev.2012.05.003
- WCAG 2.2, Contrast (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
