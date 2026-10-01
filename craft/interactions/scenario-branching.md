---
pattern: scenario-branching
family: do
principles: [transfer-of-learning, merrills-first-principles, error-analysis-corrective-feedback, self-explanation-elaborative-interrogation]
our_component: lesson-local one-decision scene (.scene with .choices) in 8 lessons; multi-step branching is a GAP
status: local
best_example: safety-data-sheets, page "Label scene" (#scene); maintenance-records, page "Signing" (#signing)
last_reviewed: 2026-10-01
---

# Scenario with Branches

## Purpose

Put the student in a real shop moment and make them decide: what goes on the squeeze bottle, whether to sign the entry, what to do with a card that was handled without a strap. Each choice leads to its consequence, told plainly. A wrong ending offers Try again; the right ending closes the scene. Rise has the Scenario block; H5P has Branching Scenario; Evolve has a Branching component.

## The learner's action

Reads the situation and the prompt, selects one of two or three choices (each a short label plus one line of what it means), reads the consequence, tries again if it was a wrong ending.

## When it teaches

- **Problem-centered practice.** Merrill's first principle: learning is promoted when learners work on real-world problems ([merrills-first-principles](../../principles/02-instructional-design/merrills-first-principles.md)). A decision on a real job, with the real product name, is that problem.
- **Transfer.** The closer the practice situation is to the job, the more transfers ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)). The FAA's Aviation Instructor's Handbook makes scenario-based training a core method for the same reason.
- **Consequence as feedback.** Seeing what each wrong choice leads to ("Someone who picks up the bottle cannot tell which sheet applies") is feedback on the reasoning, not just the answer ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).
- **Choices that are real temptations.** "Leave the tape, Solvent is close enough" is what a busy technician actually does. Facing it in a safe place, and seeing why it fails, is the point.

## When it does not

- There is only one sensible choice. Then it is a quiz in a costume.
- The rule has not been taught. A scenario applies a rule; it should not be the first place the student meets it.
- Cartoon characters, stock photos or narrator voice. Nick rejects all three. Use the real product, a real photo or a schematic, and plain sentences.
- A deep tree with ten endings for a first-week student. One or two decisions is plenty.

## Anatomy

- **Title**: a plain noun ("The Squeeze Bottle").
- **Situation**: two or three sentences with real names and real facts (the product, the shift, who will use it).
- **Prompt**: the decision as a question ("What goes on the bottle?").
- **Choices**: two or three buttons, each a short label ("Leave the tape") and one line ("Solvent is close enough").
- **Ending**: title, two to three sentences of consequence and reason; a bad ending is marked with a word and a color, and offers Try again; the good ending says "Correct" and why, and the scene is done.
- **Multi-step version** (gap): a second decision that depends on the first, and an ending that names the path taken.

## Mobile and accessibility

- Choices are buttons, full width on a phone, at least 48 px tall.
- When an ending replaces the scene, move focus to the ending title or keep it in a live region, so the result is announced. Scroll the scene into view (`scrollIntoView({block:'nearest'})`, smooth only without reduced motion).
- Try again returns focus to the first choice.
- Rise's own Scenario block is keyboard and screen reader accessible since November 2024 but still has mobile reflow issues; test ours at 390 px.

## Our implementation

Lesson-local in safety-data-sheets, maintenance-records, human-factors, electrostatic-discharge, power-distribution, repair-stations, shop-communication and shop-emergencies.

```html
<div class="scene" id="branchLab">
  <h4 id="brTitle"></h4><p id="brNarr"></p><p class="brprompt" id="brPrompt"></p>
  <div class="choices" id="brChoices"></div>
  <div id="brEnd" aria-live="polite"></div></div>
```

```python
SCENE = dict(title='The Squeeze Bottle',
    narr='You fill a squeeze bottle from the container of Safety-Kleen MIL-PD-680, TYPE II Solvent. Someone has already put a piece of tape on the bottle that says Solvent. The bottle will stay in the work area for the next shift.',
    prompt='What goes on the bottle?',
    choices=[dict(lab='Product name and hazard warnings', text='Write Safety-Kleen MIL-PD-680, TYPE II Solvent, ...', end='ok'),
             dict(lab='Leave the tape', text='Solvent is close enough.', end='tape'),
             dict(lab='Leave it unlabeled', text='It is only for this job.', end='blank')],
    ends=dict(tape=dict(bad=True, title='Not a product name', text='Solvent describes many different chemicals. ...'),
              blank=dict(bad=True, title='Unlabeled container', text='The bottle will stay in the work area for the next shift, ...'),
              ok=dict(bad=False, title='Correct', text='The squeeze bottle carries the product name and the warnings from the label: ...')))
```

GAP (gap 7 in [gaps.md](gaps.md)): one shared `scene` part whose data is a small graph, `nodes:{id:{title, narr, prompt, choices:[{lab, text, to}]}}` and `ends:{id:{bad, title, text}}`, with a path line at the end ("You chose: tape, then reused the bottle").

## Strong CAET example

- **safety-data-sheets, "Label scene" (`#scene`)**: the squeeze bottle with the word Solvent on tape, staying for the next shift. Three choices, two wrong endings that say exactly why, one right ending that quotes the real label warnings. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.
- **maintenance-records, "Signing" (`#signing`)**: "The Connector Job." A trainee replaced a corroded BNC connector while a certificated mechanic supervised. Who may sign: the trainee, the supervising mechanic, or a mechanic who is free now? The page then states the rule in capitals, the one safety-level rule allowed to be: NEVER SIGN AN ENTRY FOR WORK YOU DID NOT PERFORM, SUPERVISE OR INSPECT. A regulation reader on false records follows on the same page.

## A CAET idea

**Databus Troubleshooting** (new in the Blueprint), a two-step scene: "The co-pilot's PFD shows a red X on altitude. The pilot's side is normal." Step 1: start at the air data computer, swap displays, or open the bus wiring diagram and the system messages. Step 2 depends on step 1. The good path follows the order the lesson teaches (diagram and symptom pattern, then messages, then the physical layer); the bad path pulls a box that was never faulty.

## Common mistakes

- Cartoon characters or stock photos.
- One obviously right choice and two silly ones.
- Endings that say "Wrong!" without the consequence.
- A scenario that introduces a rule the lesson never taught.
- Hiding the scene's key rule only in the right ending; state it on the page too.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/` (`content.py` SCENE, `script.tpl` scene), `.../maintenance-records/pages-*.tpl`, `.../human-factors/pages-*.tpl`
- Merrill, M. D. (2002). First principles of instruction. Educational Technology Research and Development, 50(3), 43-59. https://doi.org/10.1007/BF02505024
- Federal Aviation Administration (2020). Aviation Instructor's Handbook, FAA-H-8083-9B (scenario-based training): https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook
- Clark, R. C., and Mayer, R. E. (2023). e-Learning and the Science of Instruction (5th ed.). Wiley. https://www.wiley.com/en-us/e+Learning+and+the+Science+of+Instruction:+Proven+Guidelines+for+Consumers+and+Designers+of+Multimedia+Learning,+5th+Edition-p-9781394177387
- Rise 360, Scenario blocks: https://www.articulatesupport.com/article/Rise-360-How-to-Use-Scenario-Blocks
- Rise 360 accessibility maturity plan (scenario accessible November 2024, mobile reflow open): https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- H5P Branching Scenario: https://h5p.org/branching-scenario
- Evolve Branching component: https://experience.intellum.com/student/page/972048-branching-component
- Blueprint goal for Databus Troubleshooting: `aero-caet-source/curriculum/blueprint/plans/digital-databus-wiring.json`
