---
pattern: picture-option-question
family: check
principles: [dual-coding, transfer-of-learning, testing-effect, item-writing-rules]
our_component: in-lesson: shared .ask with an SVG or image inside each option (lesson CSS sets the layout); final check: per-lesson patch (kcFig, kcPics) into the check engine; shared support is a GAP
status: partial
best_example: series-circuits, page "One path" (#onepath)
last_reviewed: 2026-10-01
---

# Picture Option Question

## Purpose

A question whose options are small pictures, each with a one-line description: three schematics, three meter faces, three crimp photos, three unit faces. Or a question whose stem is a picture: a logbook entry, a regulation excerpt, a part. Nick praised the Series Circuits question whose three options were small schematics: "I like images bc it freshens it up instead of constant text." The brief now asks for picture options or a picture stem wherever it teaches, in the in-lesson questions and in the final check. Rise and Storyline can put images in options; H5P has Multimedia Choice and Image Choice.

## The learner's action

Looks at the pictures, selects one, reads the feedback over the question.

## When it teaches

- **Recognition of the real thing.** On the job the technician sees the schematic, the meter face or the part, not a sentence describing it. Asking the question on the picture practices the task itself ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Dual coding.** Picture plus a one-line description gives two routes to the answer and builds the link between the symbol and the idea ([dual-coding](../../principles/01-learning-science/dual-coding.md); Mayer's multimedia principle).
- **Retrieval with a harder, truer cue.** Telling a series loop from a parallel branch in a drawing is the skill; reading "one loop, no branch" in text gives part of it away ([testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **Variety without a gimmick.** A picture question looks and feels different from the text question before it, which keeps attention, and it still tests the objective.

## When it does not

- The picture adds nothing the words do not ("Which of these is a safety data sheet?" with three photos of paper).
- The pictures differ in a detail too small to see at 390 px. Crop, enlarge or simplify the drawing (the series-circuits picks are drawn at 124 by 80 with thick lines for this reason).
- The description line gives the answer away. The picture should carry the decision; the line names what is drawn, not whether it is right.
- A picture of a part a first-week student has not been shown yet.

## Anatomy

- **Stem**: a complete question. "Which drawing shows a series circuit?"
- **Options**: each button holds the letter key, the picture (inline SVG or `<img>`) and a one-line description. On desktop: key, picture, text in a row. On a phone: the picture shrinks (118 px to 96 px wide) and the row stays.
- **Picture stem variant**: a figure above the stem (a logbook strip, a regulation excerpt, a unit face) with its alt text, and plain text options.
- **Feedback**: the same feedback over the question as every ask card; each option's feedback names what is in its picture ("Each lamp sits on its own path between the same two wires, so the current has two paths").

## Mobile and accessibility

- Each picture has an accessible name: `role="img"` and `aria-label` on an SVG, or `alt` on an image. The description line is also read, so keep the label and the line consistent but not identical word for word.
- The whole option is the button, so the tap target is the full row (at least 88 px tall with a picture).
- Drawings follow the lesson's quantity colors and keep 3:1 contrast for lines against the card (WCAG 1.4.11).

## Our implementation

**In the lesson**: the shared `.ask` card takes any HTML in an option, so a picture option is markup plus a few lines of lesson CSS. series-circuits builds it like this:

```python
pick_opts = ['%s<span>%s</span>' % (figs.pick('abc'[i]), esc(t)) for i, t in enumerate(C.ASK_PICK['opts'])]
'ASK_PICK': ask(C.ASK_PICK, pick_opts)
```

```html
<button class="ask-opt" data-i="0" type="button"><span class="key">A</span>
  <svg class="pick-fig" viewBox="0 0 124 80" role="img" aria-label="A battery and two lamps connected end to end in one loop.">...</svg>
  <span>A battery and two lamps connected end to end in one loop.</span></button>
```

```css
#ask-pick .ask-opt{grid-template-columns:auto 118px 1fr;min-height:88px}
.pick-fig{display:block;width:118px;height:76px;background:#0d0f14;border:1px solid var(--line);border-radius:10px}
@media(max-width:520px){#ask-pick .ask-opt{grid-template-columns:auto 96px 1fr;gap:10px;padding:10px 12px}.pick-fig{width:96px;height:62px}}
```

**In the final check**: the check engine has no picture support of its own. maintenance-records patches it in its `assemble.py`: a `kcFig` map (item id to a picture stem) and a `kcPics` map (item id to one picture per option), inserted into the engine's render function. Other lessons copy the patch. Making pictures a field of the check item (`"fig"` and `"pics"` in `checks.json`) is gap 2 in [gaps.md](gaps.md).

## Strong CAET example

**series-circuits, "One path" (`#onepath`)**: "Which drawing shows a series circuit?" Three small schematics: two lamps end to end in one loop; two lamps each across the same two wires; one lamp in the main wire then two in parallel. Each wrong answer's feedback names the branch in its drawing. Built lesson: `frontend/public/aero/courses/dc-fundamentals/lessons/series-circuits.html`.

Also: **maintenance-records** final check item P-1.1-13 shows three unit faces (comm, nav, transponder) as picture options, and two items carry a picture stem.

## A CAET idea

**MIL-STD-1553** (not yet rebuilt): "Which drawing shows a dual-redundant 1553 bus?" Three small drawings: one bus with stubs to each terminal; two buses, A and B, each with a stub to every terminal; a point-to-point pair from one box to another. The description lines name what is drawn; the picture carries the decision.

## Common mistakes

- Pictures so small they cannot be read on a phone.
- The description line answers the question.
- A picture stem with no alt text.
- Only the right picture is a real drawing and the others are sketches. All options get the same care.
- Putting a picture in every question. Use it where the picture is the skill.

## Sources

- Nick's praise and the brief: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md` ("Picture answers in the checks")
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/series-circuits/` (`content.py` ASK_PICK, `figs.py` `pick()`, `assemble.py` `ask()`, `sc.css`); `.../maintenance-records/assemble.py` (kcFig, kcPics patch)
- Mayer, R. E. (2017). Using multimedia for e-learning. Journal of Computer Assisted Learning, 33(5), 403-423. https://onlinelibrary.wiley.com/doi/abs/10.1111/jcal.12197
- Clark, R. C., and Mayer, R. E. (2023). e-Learning and the Science of Instruction (5th ed.). Wiley. https://www.wiley.com/en-us/e+Learning+and+the+Science+of+Instruction:+Proven+Guidelines+for+Consumers+and+Designers+of+Multimedia+Learning,+5th+Edition-p-9781394177387
- H5P content types (Multimedia Choice, Image Choice): https://h5p.org/content-types-and-applications
- Storyline 360 freeform questions (Pick One on images): https://community.articulate.com/series/articulate-storyline-360/articles/articulate-storyline-360-user-guide-how-to-add-freeform-questions
- WCAG 2.2, Non-text Contrast: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- WCAG 2.2, Non-text Content (alt text): https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html
