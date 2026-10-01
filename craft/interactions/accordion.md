---
pattern: accordion
family: explore
principles: [expertise-reversal, cognitive-load-theory]
our_component: shared, details.acc in core/lesson-parts.css
status: shared
best_example: certification-checks, page "Re-tests" (#retest)
last_reviewed: 2026-10-01
---

# Accordion

## Purpose

Hold optional extra detail out of the way until a student asks for it: an exception to a rule, a deeper reason, a source reference. Nothing a student needs to pass the lesson lives in an accordion.

## Nick's rule

"Key content is never hidden in a drop-down. Accordions only for optional extra detail." Nick rejected the SDS risk diamond as a drop-down: "the diamond shouldn't be a drop down and show up normally" (LESSON-BUILD-BRIEF.md). If the check asks about it, it is not optional.

## The learner's action

Selects a heading. The panel opens under it. Selects again to close.

## When it teaches

- **Expertise reversal.** Detail that helps one student is noise to another. Putting the extra layer behind a heading lets the advanced student take it and the new student skip it ([expertise-reversal](../../principles/01-learning-science/expertise-reversal.md); Kalyuga 2007).
- **Coherence.** Taking a true side note out of the main flow keeps the page to its one idea ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md); Mayer's coherence principle).

## When it does not

- Anything the check tests, anything on the field card, any safety rule. Show it.
- A list of steps. Use [process-stepper](process-stepper.md) or step cards.
- Content most students need. NN/g: "It is easier to scroll down the page than to decide which heading to click on," and hidden content lowers awareness of it.
- Several accordions in a row. That is a page of hidden text. Split the page.

## Anatomy

- **Heading**: a plain noun that names what is inside ("New instruments"), the same rule as every heading Nick approves. Not a teaser and not a rhetorical question.
- **Indicator**: plus and minus sign at the right edge.
- **Panel**: 40 to 120 words, plain, may hold a small figure or an ask card.
- One accordion per page is the norm; two at most.

## Mobile and accessibility

- Native `<details>` and `<summary>` give keyboard and screen reader support for free: the summary is focusable, Enter and Space toggle it, and the open state is announced.
- Summary at least 48 px tall (the shared style sets `min-height:48px`).
- No animation is needed; if one is added, honor `prefers-reduced-motion`.

## Our implementation

Shared in `frontend/public/core/lesson-parts.css`:

```html
<details class="acc">
  <summary>New instruments</summary>
  <div class="acc-body"><p>An altimeter or encoder approved under a Technical Standard Order (TSO), the FAA's minimum
  performance standard for a part, counts as tested and inspected on the date it was made. ...</p></div>
</details>
```

safety-data-sheets also has a lesson-local step accordion (`.stepacc`) on "Gloves" (`#gloves`), where each of the five glove steps opens to its detail while the step titles stay visible.

## Strong CAET example

**certification-checks, "Re-tests" (`#retest`)**: the main rule (static test after opening, correspondence test after encoder work) is shown on the page and sorted; the TSO exception sits in one accordion with an ask card inside it, for the student who wants the edge case. Built lesson: `frontend/public/aero/courses/regulations/lessons/certification-checks.html`.

## A CAET idea

**Wire Selection** (not yet rebuilt): teach the basic chart read on the page, and put the bundle derating and altitude derating curves (AC 43.13-1B Figures 11-5 and 11-6) in one accordion titled "Derating for bundles and altitude" for the student who wants the next layer. If the check asks about derating, it comes out of the accordion and onto the page.

## Common mistakes

- Hiding the main content to make a page look short.
- Headings like "More info" that do not say what is inside.
- Nesting accordions.
- Putting an accordion's content in the check.

## Sources

- Nick's rule: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Shared part: `aero-caet-source/frontend/public/core/lesson-parts.css` (`details.acc`)
- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/certification-checks/pages-3.tpl`
- NN/g, Accordions are not always the answer for complex content on desktops: https://www.nngroup.com/articles/accordions-complex-content/
- Kalyuga, S. (2007). Expertise reversal effect and its implications for learner-tailored instruction. Educational Psychology Review, 19(4), 509-539. https://doi.org/10.1007/s10648-007-9054-3
- WAI-ARIA APG, Accordion pattern: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
- Rise 360 block types (Accordion): https://www.articulatesupport.com/article/Rise-Lesson-and-Block-Types
- Mayer, R. E., and Fiorella, L. Principles for reducing extraneous processing in multimedia learning (coherence). Cambridge Handbook of Multimedia Learning: https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E
