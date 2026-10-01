---
pattern: fill-the-table
family: do
principles: [faded-worked-examples, worked-example-effect, testing-effect, error-analysis-corrective-feedback]
our_component: lesson-local typed answers (.numq in lighting-systems, .typed with .ty-in in transformers-aircraft-ac, about 8 lessons); a shared numeric entry and table part is a GAP
status: local
best_example: lighting-systems, pages "LED math" (#ledmath) and "Drop math" (#dropmath); transformers-aircraft-ac, page "Voltage math" (#voltmath)
last_reviewed: 2026-10-01
---

# Fill the Table

## Purpose

The student types the value: one number with its unit, or the empty cells of a table (each drop in a series string, the total, the power), or the blank in a formula or a record line. The page checks it with a sensible tolerance and answers the specific mistake. Rise has a Fill in the Blank knowledge check; H5P has Fill in the Blanks and Drag the Words; Storyline has Numeric and Text Entry questions.

## The learner's action

Reads the situation, works the number on paper or in their head, types it, selects Check, reads the feedback, corrects it if needed. In a table: fills each empty cell, checks the row or the whole table.

## When it teaches

- **Producing beats recognizing.** Typing 1,000 ohms is generation; picking 1,000 from three options is recognition, and multiple choice can be won by elimination. Generated answers are remembered better (the generation effect, Bertsch et al. 2007, d about 0.40; [testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **The middle step of fading.** After a fully worked example, a completion problem (some steps given, the rest left blank) is the bridge to solving alone. Paas (1992) found completion and worked-example practice beat conventional problem solving on transfer with less effort; Renkl and Atkinson's fading builds on it ([faded-worked-examples](../../principles/04-delivery-patterns/faded-worked-examples.md); [worked-example-effect](../../principles/01-learning-science/worked-example-effect.md)).
- **Feedback aimed at the real error.** The transformers check recognizes the most common wrong answer (the turns ratio flipped) and says so, instead of only "Not quite" ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).
- **Reading a real table.** A table with blanks the student fills from AC 43.13-1B or a meter reading is practice on the artifact itself.

## When it does not

- The student has not seen a worked example of this calculation. Show one first ([worked-example](worked-example.md)).
- The answer has many acceptable forms that the checker cannot parse (a sentence, a range written several ways). Use a choice instead.
- The math is not the point of the page. Do not add arithmetic to a concept page to make it look rigorous.
- On a phone, a table wider than 390 px with eight inputs. Cut it to the cells that teach.

## Anatomy

- **Situation** with real values and units.
- **Input row**: a label that names the quantity and the unit ("Resistance, in ohms"), a text input with `inputmode="decimal"`, a Check button. The unit sits outside the box so the student types a number only.
- **Tolerance**: rounding allowance stated by the author (for example within 0.5 V, or 1 percent), never zero for a computed value.
- **Feedback line** (live): right, with the worked line ("12 V ÷ 0.015 A = 800 ohms"); a known wrong answer, named ("That is the ratio flipped: 460 ÷ 100 × 115"); any other wrong value, a nudge back to the formula.
- **Table form**: a real `<table>` with given cells as text and blank cells as inputs; Check marks each cell; the totals row checks last.
- **Show the answer** after two tries, so nobody is stuck.

## Mobile and accessibility

- Text inputs with `inputmode="decimal"` bring up the number pad on phones and still accept a decimal point and a minus sign (a `type="number"` field fights the student over commas and rounding).
- Every input has a visible `<label for>`; table inputs are labeled by their row and column headers (`aria-labelledby`).
- Feedback in an `aria-live="polite"` line next to the input; right and wrong by word and symbol, not color alone.
- Accept "800", "800.0" and "800 ohms"; strip units and spaces before comparing.
- H5P's own accessibility review rates Fill in the Blanks among its most accessible types and Drag the Words "requires alternative activity": typed entry beats dragging words into gaps.

## Our implementation

Lesson-local. lighting-systems "LED math":

```html
<div class="numq" id="nqLed" data-k="led">
  <h3 class="lab-title">Your Turn: 14 V Bus</h3>
  <p class="nq-q">The same kind of LED, with a 2.0 V drop, must run at 0.015 A from a 14 V bus. What resistance does its series resistor need?</p>
  <div class="nq-row"><label for="nqLedIn">Resistance, in ohms</label>
    <input id="nqLedIn" type="text" inputmode="decimal" autocomplete="off" spellcheck="false"/>
    <button class="btn active nq-go" type="button">Check</button></div>
  ...</div>
```

transformers-aircraft-ac checks with a tolerance and a named misconception:

```js
if (Math.abs(v - T.ans) < 0.6) { out.textContent = T.right; }          // right, within rounding
else if (Math.abs(v - T.flip) < 3) { out.textContent = T.flipped; }    // the turns ratio used upside down
```

GAP (gap 4 in [gaps.md](gaps.md)): one shared `numq` part with data `{ans, tol, unit, right, misses:[{near, tol, say}], hint}` and a table mode with `rows:[{cells:[{given|ans,tol}]}]`.

## Strong CAET example

- **lighting-systems, "LED math" (`#ledmath`)**: the worked 28 V LED resistor, then "Your Turn: 14 V Bus", typed in ohms. "Drop math" (`#dropmath`) asks for a corroded terminal's resistance and the heat it makes, two typed values. Built lesson: `frontend/public/aero/courses/electrical-integration/lessons/lighting-systems.html`.
- **transformers-aircraft-ac, "Voltage math" (`#voltmath`)**: worked example with Next step and Show all, then "Your turn" typed in volts, with the flipped-ratio feedback.

## A CAET idea

**Digital Signals** (not yet rebuilt): a table with columns Bits and Values it can carry. Rows 1 and 2 are given (2 and 4); the student fills 4, 8 and the 19 data bits of an ARINC 429 word, then checks. The feedback for 19 bits shows the doubling, not just the number. It turns "count what a word of a given length can carry" into the student's own arithmetic.

## Common mistakes

- Zero tolerance, so 799.99 is marked wrong.
- Making the student type the unit, then marking "800ohms" wrong.
- Generic "Try again" when the wrong value is a known misconception.
- A blank the student cannot fill from what the page taught.
- Number inputs that reject a decimal point on some phones.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/lighting-systems/pages-4.tpl`, `.../transformers-aircraft-ac/` (`pages-3.tpl`, `script.tpl`)
- Bertsch, S., Pesta, B. J., Wiscott, R., and McDaniel, M. A. (2007). The generation effect: A meta-analytic review. Memory and Cognition, 35(2), 201-210. https://doi.org/10.3758/BF03193441
- Paas, F. G. W. C. (1992). Training strategies for attaining transfer of problem-solving skill in statistics: A cognitive-load approach. Journal of Educational Psychology, 84(4), 429-434. https://doi.org/10.1037/0022-0663.84.4.429
- Rise 360, Knowledge check blocks (Fill in the Blank): https://help.rise.com/en/articles/2447268-how-to-use-knowledge-check-blocks
- Storyline 360 form-based questions (Numeric, Fill-in-the-Blank): https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-add-form-based-questions
- H5P Drag the Words: https://h5p.org/drag-the-words
- H5P accessibility ratings (Fill in the Blanks: usable with best practices; Drag the Words: requires alternative activity): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- WCAG 2.2, Labels or Instructions: https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html
