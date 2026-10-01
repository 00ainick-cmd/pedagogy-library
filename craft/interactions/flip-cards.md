---
pattern: flip-cards
family: explore
principles: [testing-effect, pretesting-effect, dual-coding, spaced-retrieval]
our_component: lesson-local (.flip button with .flip-front and .flip-back) in 20+ lessons; not in lesson-parts
status: local
best_example: safety-data-sheets, page "Materials" (#materials); voltage-lesson, page "Sources" (#types)
last_reviewed: 2026-10-01
---

# Flip Cards

## Purpose

A small set of cards, each with a cue on the front and the answer on the back: a glove material and how it holds up, a schematic symbol and a photo of the real part, a term and its meaning. Rise has Flashcard grid and Flashcard stack; H5P has Dialog Cards and Flashcards.

## The learner's action

Reads the front, says or thinks the answer, selects the card, checks the back, and turns it back if they want.

## When it teaches

- **Only when the front asks for recall.** A flip card is a retrieval prompt if the student tries to answer before turning it. Then it carries the testing effect ([testing-effect](../../principles/01-learning-science/testing-effect.md); Dunlosky et al. 2013 rate practice testing "high utility"). If the student just turns it to read, it is a click-to-reveal paragraph. Write a front that has an answer: a symbol to name, a material to judge, a number to recall.
- **Symbol to object.** A schematic symbol on the front and a credited photo of the real part on the back links the abstract mark to the thing in the technician's hand ([dual-coding](../../principles/01-learning-science/dual-coding.md)). This is the voltage-lesson "Sources" design, the Playbook's approved flip pattern in a lesson Nick approved.
- **As a guess before teaching.** A front that asks "Will latex hold up against jet fuel?" before the page explains glove materials is a small pretest ([pretesting-effect](../../principles/01-learning-science/pretesting-effect.md)).
- **Spacing.** A stack reviewed again on a later page, or in the field card, spaces the retrieval (Kornell 2009 found spaced flashcard study beat massed study for most learners; [spaced-retrieval](../../principles/01-learning-science/spaced-retrieval.md)).

## When it does not

- The back holds key content the student must read and the front is just a title. That hides content behind a click (Nick's rule against hiding key content). Show it as term cards instead.
- The cards must be compared. Four materials side by side in a table teach the differences faster than four cards turned one at a time (NN/g on tabs and switching; Alfieri et al. 2013 on comparison).
- One card. Use a [predict-then-reveal](predict-then-reveal.md) or an [ask-card](ask-card.md).
- More than about eight cards on one page.

## Anatomy

- **Grid**: four across on desktop, two on a tablet, one column on a phone. Same height for every card.
- **Front**: the cue, large, plus a short sub-line (the symbol's name class, "Man-made rubber"). No answer on the front.
- **Back**: one to two short labeled lines ("What it is", "How it holds up"). The card border changes color when turned.
- **Hint line** above the grid: "Select a card to turn it over."
- **Turn**: a quick fade or a 3D turn of 300 to 500 ms; a plain swap under reduced motion.
- **Rule box** after the grid with the one line the cards add up to: "The same glove can protect against one chemical and fail against another."

## Mobile and accessibility

- Each card is one `<button>` with `aria-pressed`. The hidden face carries `aria-hidden="true"`. The button's `aria-label` reads the visible face and says "Select to turn the card over" or "turn it back," as safety-data-sheets does.
- Under `prefers-reduced-motion: reduce`, swap faces with no rotation.
- At 390 px the cards are one column and the back text stays at 16 px or more. Size the card to its longer face so the layout does not jump.

## Our implementation

Lesson-local in about 20 lessons (`{{FLIPS}}` in the templates). safety-data-sheets builds them like this:

```html
<p class="flip-hint-line">Select a card to turn it over.</p>
<div class="flips">
  <button class="flip" type="button" data-name="Nitrile" aria-pressed="false"
          aria-label="Nitrile. Man-made (synthetic) rubber. Select to turn the card over.">
    <span class="flip-inner">
      <span class="flip-face flip-front"><span class="fn">Nitrile</span><span class="fs">Man-made (synthetic) rubber</span></span>
      <span class="flip-face flip-back" aria-hidden="true"><span class="fk">What it is</span><span class="ft">A man-made rubber ...</span>
        <span class="fk">How it holds up</span><span class="ft">It holds up to many oils and fuels. ...</span></span>
    </span></button> ...
</div>
```

Data: `FLIPS = [dict(name='Nitrile', sub='Man-made (synthetic) rubber', what='...', holds='...')]`. The script toggles `.is-flipped`, `aria-pressed` and the `aria-hidden` of each face. A shared flip card is gap 11 in [gaps.md](gaps.md).

## Strong CAET example

- **safety-data-sheets, "Materials" (`#materials`)**: four glove materials (latex, nitrile, neoprene, vinyl). The front names the material; the back says what it is and how it holds up against solvents and fuels. The rule box follows. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.
- **voltage-lesson, "Sources" (`#types`)**: schematic symbol on the front, credited photo of the real source on the back.

## A CAET idea

**Digital Signals** (not yet rebuilt; its Blueprint goal is to "count what a word of a given length can carry"): retrieval flips with a real answer on the back. Front: "4 bits." Back: "16 values, 0 to 15: 2 × 2 × 2 × 2." Front: "8 bits." Back: "256 values." The hint line says "Work it out, then turn the card." Every card is a small retrieval attempt, not a reveal.

## Common mistakes

- A front with nothing to answer ("Card 1", "Learn more").
- Key content only on the back.
- Cards of different heights that jump when turned.
- Flip cards on every page of a lesson. Nick: "not a template." See [mixing-guide.md](mixing-guide.md).

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/` (`content.py` FLIPS, `assemble.py` `flips()`, `script.tpl`, `sds.css`); component catalog F7: `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., and Willingham, D. T. (2013). Improving students' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4-58. https://doi.org/10.1177/1529100612453266
- Kornell, N. (2009). Optimising learning using flashcards: Spacing is more effective than cramming. Applied Cognitive Psychology, 23(9), 1297-1317. https://doi.org/10.1002/acp.1537
- Alfieri, L., Nokes-Malach, T. J., and Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. Educational Psychologist, 48(2), 87-113. https://doi.org/10.1080/00461520.2013.775712
- Rise 360, Flashcard blocks: https://www.articulatesupport.com/article/Rise-360-How-to-Use-Flashcard-Blocks
- H5P Dialog Cards: https://h5p.org/dialog-cards
- H5P accessibility ratings (Dialog Cards and Flashcards: usable with workarounds): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- NN/g, Tabs, used right (switching taxes memory): https://www.nngroup.com/articles/tabs-used-right/
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
