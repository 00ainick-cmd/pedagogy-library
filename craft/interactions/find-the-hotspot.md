---
pattern: find-the-hotspot
family: check
principles: [testing-effect, transfer-of-learning, error-analysis-corrective-feedback]
our_component: lesson-local find-the-part tasks (.fq in transistors-inverters) and reader lookups (.rr desk); not in lesson-parts
status: local
best_example: transistors-inverters, page "Find Q" (#findq)
last_reviewed: 2026-10-01
---

# Find the Hotspot

## Purpose

Ask the student to find something on a real figure, photo or document: "Select every transistor," "Select the relay contacts," "Select the paragraph that sets the 125-foot limit." It is the labeled graphic turned around. The labeled graphic tells; this one asks. H5P calls it Find the Hotspot and Find Multiple Hotspots; Storyline has a Hotspot question.

## The learner's action

Reads a task, selects one or more marked parts, and gets feedback on each pick. A wrong pick says what that part actually is. The task ends when every required part is found, then the next task appears.

## When it teaches

- **Retrieval with the real artifact.** Finding Q3 on FAA Figure 12-342 is a retrieval attempt on the very drawing the student will meet. Retrieval with feedback beats study ([testing-effect](../../principles/01-learning-science/testing-effect.md); Roediger and Karpicke 2006), and practice on the real form transfers ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Feedback on the wrong pick teaches a second fact.** "R11. A resistor, marked R." turns a miss into a lesson on reference designators ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md); Shute 2008).
- **Locating is a real shop skill.** Finding a test point on a schematic, a pin on a connector face, a static port on a fuselage photo, a block on Form 337.

## When it does not

- The parts have not been taught. Searching a figure for a part you cannot recognise is guessing. Run a [labeled-graphic](labeled-graphic.md) or a term card first.
- The target is a pixel area with no visible candidates. Free clicking anywhere on an image fails on phones and for keyboard and screen reader users. The LibreTexts H5P review rates Find the Hotspot and Find Multiple Hotspots "requires alternative activity" for this reason.
- The figure is too dense to read at 390 px. Crop to the region that matters (transistors-inverters crops Figure 12-342 to the transistor section).

## Anatomy

- **Task line**: "Task 1 of 3" and one task sentence. Focus moves to it when a new task starts.
- **Figure**: real, credited, cropped to what the tasks need.
- **Candidates**: a ring or marker on every plausible part, right and wrong alike. The student chooses among marked candidates instead of clicking pixels. This keeps it keyboard and screen reader usable.
- **Feedback panel**: for a right pick, the part name and why it fits; for a wrong pick, what the part is and a nudge. Live region.
- **Progress**: found parts stay marked (green ring plus a tick, never color alone).
- **Close**: a "Task done" line with the summary fact, then a Next task button.
- **Text variant**: the regulation reader lookup desk is the same pattern on text. See [hotspot-on-real-document](hotspot-on-real-document.md).

## Mobile and accessibility

- Every candidate is a `<button>` with an `aria-label` that names it ("Q3"). Do not give away the answer in the label for a task like "Select the output transistor"; name the designator, not its role.
- Rings at least 32 px, no overlap at 390 px. If the figure must stay wide, wrap it in a horizontal scroller (`.hscroll`) with a "Swipe the figure sideways" hint shown only on phones, as transistors-inverters does.
- Right and wrong are shown with a symbol and words, not color alone (WCAG 1.4.1).
- Feedback is in a polite live region. Focus does not jump on every pick, only on a new task.

## Our implementation

Lesson-local in transistors-inverters (`#findq`). Promoting a shared `find` part is gap 3 in [gaps.md](gaps.md).

Data shape (content.py):

```python
FINDQ = [('Q3', 'Q3', 'q3', 'The output transistor. The handbook says the control field of the exciter generator is in its collector circuit.', (1056, 822)),
         ('R11', 'R11', 'r', 'A resistor, marked R.', (736, 985)), ...]          # key, label, kind, what it is, x/y on the image
FINDQ_TASKS = [dict(k='q', t='Select every transistor.', need=['Q1', 'Q4', 'Q2', 'Q3'],
                    done='All four transistors found: Q1, Q4, Q2 and Q3. Each has three leads, and the emitter carries the arrow.')]
```

Markup:

```html
<div class="fq-task" aria-live="polite"><span class="fq-n" id="fqN">Task 1 of 3</span><p id="fqT"></p></div>
<div class="hscroll"><div class="fq-img">
  <img src="assets/transistors-inverters/faa-12-342-q.png" alt="The transistor section of FAA Figure 12-342 ..."/>
  <button class="ring" type="button" data-p="Q3" aria-label="Q3" style="left:50.7%;top:58.2%"></button> ...</div></div>
<div class="hs-panel" id="fqPanel" aria-live="polite"><h4>Select a part</h4><p>Each ring marks one part. ...</p></div>
```

## Strong CAET example

**transistors-inverters, "Find Q" (`#findq`)**: three tasks on FAA-H-8083-30B Figure 12-342, a transistorized voltage regulator. Find every transistor, find the output transistor, find the relay contacts. A wrong part says what it is. A quote from the handbook follows. Built lesson: `frontend/public/aero/courses/electrical-integration/lessons/transistors-inverters.html`.

## A CAET idea

**Terminations** (not yet rebuilt; its Blueprint goal includes "pin a connector"): show the real face of an MS connector insert with every cavity ringed. Tasks: "Select cavity A," "Select the cavity the wire list gives for the shield drain," "Select the cavity next to A that a misread drawing would send you to." Every wrong cavity names itself. The same skill carries straight into the ring-out in Wiring Troubleshooting.

## Common mistakes

- Free-click areas with no visible candidates. Mark every candidate.
- Only the right parts marked. Then the rings give the answer away. Mark distractors too.
- Aria labels that name the role ("the output transistor") and so answer the question for a screen reader user.
- No explanation on a wrong pick. "Try again" alone wastes the miss.
- Tasks that test reading the label instead of knowing the part. Ask for the role the part plays.

## Sources

- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/transistors-inverters/` (`content.py` FINDQ and FINDQ_TASKS, `assemble.py` `fq_marks()`, `script-2.tpl` page 17)
- Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Shute, V. J. (2008). Focus on formative feedback. Review of Educational Research, 78(1), 153-189. https://doi.org/10.3102/0034654307313795
- H5P Find the Hotspot: https://h5p.org/image-hotspot-question
- H5P accessibility ratings (Find the Hotspot and Find Multiple Hotspots: requires alternative activity): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- LibreTexts guide, Find Multiple Hotspots: https://studio.libretexts.org/help/h5p-accessibility/find-multiple-hotspots
- Storyline 360 freeform questions (Hotspot): https://community.articulate.com/series/articulate-storyline-360/articles/articulate-storyline-360-user-guide-how-to-add-freeform-questions
- WCAG 2.2, Use of Color: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- NN/g, Touch target size: https://www.nngroup.com/articles/touch-target-size/
