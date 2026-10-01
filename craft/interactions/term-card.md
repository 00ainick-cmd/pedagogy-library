---
pattern: term-card
family: carry
principles: [schema-theory-knowledge-components, cognitive-load-theory, dual-coding]
our_component: shared, .terms and .term in core/lesson-parts.css
status: shared
best_example: safety-data-sheets, page "Problem" (#hook) and "Permeation" (#permeation)
last_reviewed: 2026-10-01
---

# Term Card

## Purpose

Define each new term in one plain sentence, on the page where it first appears, in a card the eye can find again. It is not an interaction; it is the graphical block that carries a definition so a paragraph does not have to. The brief requires it: "Define every term in one plain sentence the first time it appears."

## The learner's action

Reads it. Nothing to select.

## When it teaches

- **Pretraining.** Knowing the names before the explanation lowers the load of the explanation (Mayer, Mathias and Wetzell 2002). Two term cards ("Permeation", "Breakthrough time") before the glove scenario on the SDS lesson do this ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).
- **Load control.** A term defined in a card is not buried mid-sentence, where the student must hold the sentence and the definition at once ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).
- **Signaling.** A consistent card style tells the student "this is a word to keep" (Schneider et al. 2018).

## When it does not

- More than about four new terms on one page. That is a glossary, and a sign the page holds two ideas. Split it.
- A term the student already knows from an earlier lesson. Recall it with an [ask-card](ask-card.md) instead.
- A term that needs a picture to be understood (a crimp barrel, a static port). Use a [labeled-graphic](labeled-graphic.md) or put a small figure in the card.

## Anatomy

- Optional mono eyebrow (`.tk`) for a symbol and unit ("V, volt").
- Term as the card heading, in the plain form the lesson uses. Spell out an acronym: "Safety data sheet (SDS)."
- One plain sentence of definition, sometimes two. The second sentence may say where the technician meets it.
- Grid of two (or three with `.terms.three`), one column on a phone.
- Variants in the shared CSS: `.term.is-src` and `.term.is-drop` color the top edge by quantity (voltage source, voltage drop).

## Mobile and accessibility

- Text 16.5 px, 7:1 contrast. The card heading is a real `<h3>` so screen reader users can jump between terms.
- No hover and no hidden state.

## Our implementation

Shared in `frontend/public/core/lesson-parts.css`:

```html
<div class="terms">
  <div class="term"><h3>Permeation</h3><p>The passage of a chemical through a glove material, even when the glove has no hole or tear.</p></div>
  <div class="term"><h3>Breakthrough time</h3><p>The time a chemical takes to pass through the glove material and reach the inside. ...</p></div>
</div>
```

## Strong CAET example

**safety-data-sheets, "Problem" (`#hook`)**: the hook defines "Safety data sheet (SDS)" and "Solvent" in two term cards right under the story, so a first-week student has both words before page 2. "Permeation" (`#permeation`) defines two terms before the prediction that uses them. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.

## A CAET idea

**RS Serial Interfaces** (not yet rebuilt): term cards for "single-ended signal", "differential signal", "baud rate" and "multidrop", each on the page where it first appears, each with a one-line "where you meet it" (the pin list in the installation manual, the configuration screen), instead of a glossary page at the start.

## Common mistakes

- A glossary page of fifteen terms at the start of a lesson.
- Definitions that use another undefined word ("butyl", in Nick's example).
- Cute card headings. The heading is the term.
- Term cards on every page as filler. If nothing new is named, the page does not need one.

## Sources

- Brief: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Shared part: `aero-caet-source/frontend/public/core/lesson-parts.css` (`.terms`, `.term`)
- Mayer, R. E., Mathias, A., and Wetzell, K. (2002). Fostering understanding of multimedia messages through pre-training. Journal of Experimental Psychology: Applied, 8(3), 147-154. https://doi.org/10.1037/1076-898X.8.3.147
- Schneider, S., Beege, M., Nebel, S., and Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. Educational Research Review, 23, 1-24. https://www.sciencedirect.com/science/article/abs/pii/S1747938X17300581
- Graphical-text research for this kit: `aero-caet-source/curriculum/revamp-kit/research/03-patterns-and-libraries.md`, section 3
