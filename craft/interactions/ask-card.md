---
pattern: ask-card
family: check
principles: [testing-effect, error-analysis-corrective-feedback, item-writing-rules, distractor-analysis]
our_component: shared, .ask in core/lesson-parts.js and .css (AeroParts.ask)
status: shared
best_example: safety-data-sheets, page "Recall" (#recall) and "Format" (#format)
last_reviewed: 2026-10-01
---

# Ask Card

## Purpose

One question in the middle of a lesson, with three or four options, where the feedback pops up over the question and teaches. A right answer gives Continue; a wrong answer explains the mistake and gives Try again. It is the lesson's everyday retrieval moment: the Recall page, a check after a concept, a question under a figure. Rise calls it a Knowledge Check block; Storyline and H5P have Multiple Choice.

## The learner's action

Reads the stem, selects an option, reads the feedback that covers the card, then selects Continue (right) or Try again (wrong). After a right answer the card shows the key option marked.

## When it teaches

- **Retrieval practice.** Answering a question about what was just taught strengthens memory more than reading it again (Roediger and Karpicke 2006; [testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **Feedback that explains.** Feedback that says why an answer is wrong, about the task and the process, helps learning; bare "Correct" and "Incorrect" do little (Hattie and Timperley 2007; Shute 2008; [error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)). Every option carries its own one-sentence feedback.
- **Distractors that are real mistakes.** A wrong option a student actually believes turns a miss into a correction of that belief ([distractor-analysis](../../principles/03-assessment-science/distractor-analysis.md)). Patti Shank's rules are the house standard ([item-writing-rules](../../principles/03-assessment-science/item-writing-rules.md)).
- **Recall across lessons.** The Recall page asks about a prerequisite lesson. Spaced retrieval of earlier content is one of the strongest effects in the field ([spaced-retrieval](../../principles/01-learning-science/spaced-retrieval.md)).

## When it does not

- The student must predict something not yet taught. A "Not quite, try again" on a guess is the wrong tone. Use [predict-then-reveal](predict-then-reveal.md).
- The answer is a picture the student must recognize. Use [picture-option-question](picture-option-question.md) (the same card with pictures in the options).
- The same stem appears as a predict card and an ask card on one page. Keep one.
- Several ask cards stacked on a page. One per page, two at most, or it becomes a quiz page.
- A trivial recall ("What does SDS stand for?") right under the line that says it. Ask about use.

## Anatomy

- **Kicker** (`.ask-k`): "Check your understanding", "Quick recall". No lesson codes.
- **Stem** (`.ask-q`): a complete question with the real numbers and the real situation.
- **Options**: three or four of similar length, each a button with a letter key.
- **Feedback overlay** (`.ask-fb`): covers the card. Verdict "Correct" or "Not quite" in mono capitals; one sentence that teaches; Continue or Try again. Focus moves to that button.
- **Done state**: border turns green, options disabled, the right option marked `is-key`.
- **Event**: `ask:answer` bubbles with `{id, index, ok}`; `AeroLesson.interaction` records the answer.

## Mobile and accessibility

- Options are `<button>` elements at least 52 px tall, full width, with the letter key in a box.
- The overlay sits inside the card (`position:absolute; inset:0`), so the student never loses the question's place on a phone.
- Focus moves to Continue or Try again when the overlay opens, so keyboard and screen reader users hear the result. Consider adding `role="status"` or `aria-live` to the verdict line so it is announced even if focus handling changes.
- Verdict uses a word and a color, never color alone.

## Our implementation

Shared: `frontend/public/core/lesson-parts.js` (`window.AeroParts.ask(el)` for a card built late) and `lesson-parts.css`.

```html
<div class="ask" id="ask-recall" data-ans="1"
     data-fb='["Not quite. The gas an unknown liquid gives off, called vapor, can harm you ...","Right. With no label you cannot find its sheet, ...","Not quite. Clear liquids look alike, ..."]'>
  <div class="ask-k">Quick recall</div>
  <p class="ask-q">You find an unmarked squeeze bottle of clear liquid on a shelf. What do you do?</p>
  <div class="ask-opts">
    <button class="ask-opt" data-i="0" type="button"><span class="key">A</span><span>Smell it to find out what it is.</span></button>
    <button class="ask-opt" data-i="1" type="button"><span class="key">B</span><span>Treat it as an unknown chemical and ask your supervisor before anyone uses it.</span></button>
    <button class="ask-opt" data-i="2" type="button"><span class="key">C</span><span>Use it if it looks like the cleaner you used yesterday.</span></button>
  </div></div>
```

Authors write it as data in `content.py` and build it with a small `ask()` helper in `assemble.py`:

```python
ASK_CURRENT = dict(id='ask-current', kicker='Check your understanding', ans=0,
    q='A 28 V bus feeds a lamp through a circuit breaker, a switch and a wire. An ammeter between the circuit breaker and the switch reads 2.4 A. What does an ammeter in the return wire, after the lamp, read?',
    opts=['2.4 A', 'Less than 2.4 A, because the lamp uses some current.', '0 A, because the lamp uses all of the current.'],
    fb=['Right. A series circuit has one path, so the current is the same at every point, ...',
        'Not quite. The lamp uses energy, not current. ...', 'Not quite. If no current left the lamp, no current could enter it. ...'])
```

The end-of-lesson check is a separate engine (`#kc`, items in `core/caet-lesson-checks.js` from each lesson's `checks.json`). It shares the item shape (`stem`, `opts`, `ans`, `miss`) and the feedback-over-the-question rule.

## Strong CAET example

- **safety-data-sheets, "Recall" (`#recall`)**: the first-lesson recall, an unmarked bottle and what you would do, beside a drawing of the bottle. "Format" (`#format`) asks what is wrong with a sheet that moves first aid to Section 6, right after the directory. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.
- **series-circuits, "Current" (`#current`)**: the 2.4 A question whose wrong options are the two classic beliefs ("the lamp uses some current", "the lamp uses all of it").

## A CAET idea

**Databus Types** (not yet rebuilt), Recall page tied to Digital Signals: "An ARINC 429 word uses 8 bits for its label. How many different labels can 8 bits carry?" Options: 8, 256, 255. Feedback for 255 explains that 0 counts as a value. It retrieves the earlier lesson's counting and sets up the 32-bit word.

## Common mistakes

- Feedback that only says "Correct" or "Try again."
- One long right answer and two short wrong ones (the longest option is a giveaway).
- "All of the above" and "None of the above."
- A distractor nobody would choose.
- A stem that tests reading the sentence above it instead of applying it.

## Sources

- Shared part: `aero-caet-source/frontend/public/core/lesson-parts.js` and `.css`; check item shape: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md` ("The check")
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/content.py` (ASK_RECALL, ASK_FORMAT), `.../series-circuits/content.py` (ASK_CURRENT)
- Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Hattie, J., and Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81-112. https://doi.org/10.3102/003465430298487
- Shute, V. J. (2008). Focus on formative feedback. Review of Educational Research, 78(1), 153-189. https://doi.org/10.3102/0034654307313795
- Rise 360, Knowledge check blocks: https://help.rise.com/en/articles/2447268-how-to-use-knowledge-check-blocks
- Rise 360, AI Assistant can draft knowledge checks from lesson content (review every item against the rules above): https://community.articulate.com/kb/user-guides/rise-360-create-content-with-ai-assistant/1199630
- Storyline 360 form-based questions: https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-add-form-based-questions
- WCAG 2.2, Use of Color: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
