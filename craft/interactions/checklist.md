---
pattern: checklist
family: carry
principles: [transfer-of-learning, goal-setting-theory, cognitive-load-theory]
our_component: lesson-local printable walk checklist (.walk with checkbox list and Print) in shop-emergencies; field card (.fsum) in every lesson; a shared checklist with saved ticks is a GAP
status: local
best_example: shop-emergencies, page "Labels" (#labels), the Shop Walk Checklist
last_reviewed: 2026-10-01
---

# Checklist

## Purpose

A short list of real items the student ticks as they do them, on screen or printed for the shop floor: find the nearest extinguisher and read its classes, find the bench disconnect, the eyewash, the exit routes. It is a job aid that leaves the lesson and goes to work. Rise has a checkbox list block and Evolve a Checklist component; neither saves the ticks in Rise.

## The learner's action

Reads each item, does it (in the shop, or on a drawing of one), ticks it. Prints the list for the real walk.

## When it teaches

- **Aviation runs on checklists.** A checklist is how the industry makes sure no step is skipped under pressure (Degani and Wiener 1993). The FAA handbook says it plainly for inspections: "Always use a checklist when performing an inspection" (FAA-H-8083-30B), and 14 CFR 43.15 requires one for annual and 100-hour inspections. Building the habit in training is part of the content.
- **Transfer by design.** A walk checklist the student does in their own shop is practice in the real place ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)). Writing "where I think it is" before walking is a small prediction that the walk then corrects.
- **Offloading memory.** A checklist holds the steps so working memory can hold the task ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).
- **A visible, finite goal.** A list of ten items with ticks gives a clear, near goal ([goal-setting-theory](../../principles/06-motivation-engagement/goal-setting-theory.md)).

## When it does not

- As a way to show content. A checklist of facts to read ("I understand that Section 8 covers gloves") asks for a tick, not a thought; it is behavior without learning (Mayer 2004).
- Steps that must be done in order and checked for order. Teach the order with a [process-stepper](process-stepper.md) and test it with [drag-to-order](drag-to-order.md); the checklist is the job aid after.
- Long lists. Degani and Wiener discuss the cost of checklist length; keep ours short and split a long one by phase.

## Anatomy

- **Title**: a plain noun ("Shop Walk Checklist").
- **Instruction**: one or two sentences on where and how to use it.
- **Items**: real actions, each a checkbox and a sentence. Optional printed fields under each item ("Where I think it is: ____", "Found and clear: yes or no"), shown only on paper.
- **Print**: a button that prints a clean light version with the fields.
- **Note** on how the item is checked in class or online.
- **Saved ticks** (gap): ticks survive a reload, through the lesson runtime's saved state.

## Mobile and accessibility

- Native `<input type="checkbox">` inside a `<label>` that holds the whole item text: the whole row is the tap target and screen readers announce the state.
- Print stylesheet: light background, black text, the write-in lines visible, the lesson chrome hidden.
- Ticks never gate Continue.

## Our implementation

Lesson-local in shop-emergencies:

```html
<div class="walk" id="walk">
  <h3 class="sort-h">Shop Walk Checklist</h3>
  <p class="plain">Do this in the shop where you work or train. Write where you think each item is, then walk, find it, ...</p>
  <ol class="walk-list" id="walkList">
    <li><label class="w-chk"><input type="checkbox" data-k="f0"/><span>Nearest extinguisher, and the classes on its label.</span></label>
      <span class="w-print">Where I think it is: ______________________</span>
      <span class="w-print">Classes on the label: ______________________</span>
      <span class="w-print">Found and clear: yes or no</span></li> ...</ol>
  <div class="walk-acts"><button class="btn active" id="walkPrint" type="button">Print the checklist</button></div></div>
```

Every lesson also ends with a **field card** (`.fsum`): "You can now ..." one line per objective, plates and one rule. It is the lesson's take-away, not a tick list.

GAP (gap 12 in [gaps.md](gaps.md)): a shared `checklist` part with items as data, print styles, and ticks saved through `AeroLesson` state so they survive a reload.

## Strong CAET example

**shop-emergencies, "Labels" (`#labels`)**: after the extinguisher markings figure from the FAA handbook, the Shop Walk Checklist: two extinguishers and their classes, the bench and shop master disconnects, the eyewash and shower, the first aid kit, the emergency phone and number, the fire alarm and two exit routes, with a Print button for the real walk. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/shop-emergencies.html`.

## A CAET idea

**Routing Coax and Databus** (not yet rebuilt): a printable bundle inspection checklist drawn from the routing rules the Blueprint lists (clear of fluids, heat and controls; clamped at 24 inches or less; bend radius; slack; drip loops; service loops; chafe protection). The student uses it on the 3D or photo walkaround in the lesson, then prints it for the hangar.

## Common mistakes

- Ticks as fake engagement ("I have read this page").
- A list too long to use on the floor.
- No print version for a job aid.
- Ticking that locks the lesson.

## Sources

- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/shop-emergencies/` (`pages-4.tpl`, `content.py` WALK, `assemble.py`)
- Degani, A., and Wiener, E. L. (1993). Cockpit checklists: Concepts, design, and use. Human Factors, 35(2), 345-359. https://doi.org/10.1177/001872089303500209
- FAA-H-8083-30B, Aviation Maintenance Technician Handbook, General (inspection checklists), from the FAA handbook index: https://www.faa.gov/regulations_policies/handbooks_manuals/ (searchable text in `AviationLibrary/_extracted/8083-30B General 2023.md`)
- eCFR, 14 CFR 43.15 (additional performance rules for inspections): https://www.ecfr.gov/current/title-14/section-43.15
- Mayer, R. E. (2004). Should there be a three-strikes rule against pure discovery learning? American Psychologist, 59(1), 14-19. https://doi.org/10.1037/0003-066X.59.1.14
- Rise 360 checkbox lists (community): https://community.articulate.com/blog/articles/6-rise-360-blocks-to-use-instead-of-bullet-points/1150758
- Rise 360 checklist ticks not saved between sessions (community): https://community.articulate.com/discussions/rise-360/saving-progress-for-rise-checklist-block
- Evolve course components (Checklist): https://clients.intellum.com/student/path/853033-course-components
- Blueprint goal for Routing Coax and Databus: `aero-caet-source/curriculum/blueprint/plans/digital-databus-wiring.json`
