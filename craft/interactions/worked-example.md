---
pattern: worked-example
family: do
principles: [worked-example-effect, faded-worked-examples, self-explanation-prompts, expertise-reversal]
our_component: lesson-local worked steps (.worked with .stepcards; .wex with Next step and Show all; .we) followed by a typed "Your turn"; static .stepcards is shared
status: local
best_example: transformers-aircraft-ac, page "Voltage math" (#voltmath); series-circuits, page "Totals" (#totals)
last_reviewed: 2026-10-01
---

# Worked Example

## Purpose

Solve one real problem on the page, step by step, each step with its reason, beside the figure it comes from. Then give the student the same kind of problem with different numbers to solve. This is the math page in every lesson that has math: "the math that reinforces it, as a worked example and then the student's turn" (the brief).

## The learner's action

Reads the problem, reveals the steps one at a time with Next step (or Show all), reads why each step is done, then solves the student's turn and checks it.

## When it teaches

- **Novices learn more from studying solved problems than from solving.** The worked-example effect is one of the most robust in instruction ([worked-example-effect](../../principles/01-learning-science/worked-example-effect.md); Sweller and Cooper 1985; Renkl 2014).
- **Fading.** Fully worked, then a problem with the last step blank, then the whole problem: the brief and the kit research set math pages in this order ([faded-worked-examples](../../principles/04-delivery-patterns/faded-worked-examples.md); Renkl and Atkinson 2003). The blank step is a [fill-the-table](fill-the-table.md).
- **One "why" per example.** Asking "why this step?" once turns reading into self-explanation, which carries the benefit ([self-explanation-prompts](../../principles/04-delivery-patterns/self-explanation-prompts.md)).
- **Step at a time.** Revealing one step per press keeps each step's reason in view while it is new (segmenting; [cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).

## When it does not

- The student can already do it. Worked examples help novices and can hurt experienced learners (expertise reversal, Kalyuga 2007; [expertise-reversal](../../principles/01-learning-science/expertise-reversal.md)). Offer "Show all" and let the student go straight to their turn.
- The example uses a concept not yet taught (Ohm's Law before the Ohm's Law lesson). The brief forbids it.
- Numbers that are not real. Use the handbook's own example or a real aircraft value, and do the arithmetic.
- Three examples in a row with no student turn.

## Anatomy

- **Problem**: one sentence with real values ("A transformer has 400 turns on the primary and 100 turns on the secondary, and its primary is fed from the 115 V AC bus").
- **Formula** in a rule box above (`Es = Ep × Ns ÷ Np`), each symbol named on first use.
- **Steps**: numbered, one operation each, each with its reason; the last step is a sense check ("65 ohms is larger than the largest resistor, as it must be in series").
- **Controls**: Next step, Show all.
- **Figure**: the circuit or the instrument the numbers come from, credited.
- **Your turn**: the same kind of problem with new numbers, typed answer with units and a tolerance, feedback that names the common mistake.
- **Link to more practice** (a lab) when one exists.

## Mobile and accessibility

- Steps are an ordered list; revealed steps are added to the list, and the newest step is announced (`aria-live="polite"` on the list container).
- Next step keeps focus so repeated presses work; Show all reveals the rest at once.
- Formulas are text (or KaTeX with text fallback), not pictures; units are always written.
- At 390 px the figure sits above the steps; long equations wrap at operators, never mid-number.

## Our implementation

Lesson-local, two shapes. transformers-aircraft-ac "Voltage math":

```html
<p class="rulebox">Es = Ep &times; Ns &divide; Np</p>
<div class="wex" id="vWex">
  <p class="wex-q">A transformer has 400 turns on the primary and 100 turns on the secondary, and its primary is fed from the 115 V AC bus. Find the secondary voltage.</p>
  <ol class="wex-steps">{{VSTEPS}}</ol>
  <div class="wex-acts"><button class="btn active" type="button" id="vNext">Next step</button><button class="btn" type="button" id="vAll">Show all</button></div></div>
...
<div class="typed" id="vTyped"><div class="ask-k">Your turn</div>
  <p class="ask-q">A transformer has 460 turns on the primary and 100 turns on the secondary, on the 115 V AC bus. What is the secondary voltage?</p>
  <div class="ty-row"><label class="ty-l" for="vIn">Secondary voltage</label><input id="vIn" class="ty-in" type="text" inputmode="decimal"/><span class="ty-u">V</span> ...</div>
  <p class="live-line" id="vOut" aria-live="polite"></p></div>
```

series-circuits uses static shared step cards beside the FAA figure (`.worked` with `.stepcards.one`). A shared worked-example part (problem, steps with reasons, Next and Show all, a typed turn) would join gap 4 in [gaps.md](gaps.md).

## Strong CAET example

- **transformers-aircraft-ac, "Voltage math" (`#voltmath`)**: the formula, a worked 400 to 100 turns example on the 115 V bus revealed step by step, the turns-ratio model for the 28 V case, then "Your turn" (460 to 100 turns) typed in volts with feedback for the flipped ratio, and a link to the Turns Ratio lab. Built lesson: `frontend/public/aero/courses/ac-fundamentals/lessons/transformers-aircraft-ac.html`.
- **series-circuits, "Totals" (`#totals`)**: 20, 15 and 30 ohms on 9 V, worked as step cards beside the circuit figure, with the sense check that the total must exceed the largest resistor.

## A CAET idea

**Wire Selection** (not yet rebuilt): a worked voltage-drop check from the real AC 43.13-1B Table 11-9: look up the resistance per 1,000 feet for the gauge, scale it to the round-trip length, multiply by the current, compare with the allowable drop from Table 11-6. Then the student's turn with a different gauge and run, typed in volts, with feedback for the most common error (using the one-way length).

## Common mistakes

- Steps with no reasons.
- A worked example and no student turn.
- Made-up numbers or arithmetic not checked.
- Forcing an experienced student through every step (no Show all).
- A concept used before it is taught.

## Sources

- Brief (math pages): `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`; kit research (three-pass math pages): `aero-caet-source/curriculum/revamp-kit/research/03-patterns-and-libraries.md`, section 2
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/transformers-aircraft-ac/pages-3.tpl`, `.../series-circuits/pages-3.tpl`
- Library chapters: [worked-example-effect](../../principles/01-learning-science/worked-example-effect.md), [faded-worked-examples](../../principles/04-delivery-patterns/faded-worked-examples.md) (Sweller and Cooper 1985; Renkl and Atkinson 2003; Renkl 2014)
- Kalyuga, S. (2007). Expertise reversal effect and its implications for learner-tailored instruction. Educational Psychology Review, 19(4), 509-539. https://doi.org/10.1007/s10648-007-9054-3
- Paas, F. G. W. C. (1992). Training strategies for attaining transfer of problem-solving skill in statistics: A cognitive-load approach. Journal of Educational Psychology, 84(4), 429-434. https://doi.org/10.1037/0022-0663.84.4.429
- KaTeX (formula rendering, kit recommendation): https://katex.org/
- WCAG 2.2, Status Messages: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html
