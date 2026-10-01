---
pattern: find-the-fault
family: do
principles: [productive-failure, error-analysis-corrective-feedback, transfer-of-learning, 4c-id-model]
our_component: lesson-local troubleshooting labs (breaker panel isolation in electrical-troubleshooting, ammeter-per-branch on FAA figures in parallel-circuits, scope ripple lab in semiconductors) and the Avionics Circuit Lab Fault Hunt (iframe)
status: local
best_example: electrical-troubleshooting, page "Find branch" (#branch)
last_reviewed: 2026-10-01
---

# Find the Fault

## Purpose

Give the student a system with a hidden fault and the tools a technician has, and let them isolate it by method: measure, compare with what it should be, narrow the search, name the fault. Pull breakers one at a time until the parasitic draw drops. Put the ammeter in each branch until one reads zero. Turn the load on and watch the ripple grow on the scope. This is the troubleshooting skill CAET exists to build.

## The learner's action

Reads the symptom, picks a test (pull a breaker, move the meter, turn on the load), reads the result, decides the next test, and names the fault. Sees how many tests they used against a good method.

## When it teaches

- **Explicit method plus system knowledge.** Morris and Rouse's review of troubleshooting research found that instruction helps in proportion to how explicit it is about what to do, and suggested combining explicit procedures with prompts to use knowledge of the system. So teach the method on the page (step cards), then let the student run it on the fault.
- **Whole task, real tool.** Troubleshooting is the classic 4C/ID whole task: the student practices the real job with support, not a list of facts about it ([4c-id-model](../../principles/02-instructional-design/4c-id-model.md); [transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Errors are information.** A wrong first test, explained ("Pulling the avionics master first tells you nothing about the hot battery bus"), is the most memorable lesson on the page ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)). Finding errors in someone else's work also helps once the student has the basics (Große and Renkl 2007), which is why a fault in a finished harness or a wrong logbook entry is a good task.
- **Struggle that pays off.** A fault the student has to hunt for, after the method is taught, is productive struggle, not guessing ([productive-failure](../../principles/04-delivery-patterns/productive-failure.md)).

## When it does not

- Before the method is taught. Große and Renkl found error-finding helped mainly students who already had the basics; for a novice, it is noise.
- A fault that can only be found by luck. Every fault must leave a signature the lesson taught.
- A sim that cannot fail realistically (a meter that reads the same with the leads reversed).
- No debrief. The student must see the efficient path after finding the fault.

## Anatomy

- **Symptom**: the squawk as a pilot or a tech writes it, with the real numbers ("The battery is flat after three days parked; 0.25 A with everything off").
- **Method**: the steps as step cards above the lab (measure the draw in series, pull breakers one at a time, push each back before the next).
- **System**: a real drawing or panel, two or more variants if useful ("Choose an airplane").
- **Tests**: breakers, test points, a load switch; each test is a button.
- **Instrument**: a meter or scope readout in a live region.
- **Says line**: one sentence that interprets the result.
- **Name it**: when the student is ready, they select the fault; feedback names the evidence.
- **Debrief**: the efficient path, and how many tests it takes.

## Mobile and accessibility

- Every test point and breaker is a button with a label; no drag needed.
- The reading is text in a live region, with its unit.
- On a phone the panel and the meter stay in one view; the method cards collapse to a numbered list above.
- Practice only: Continue is never locked.

## Our implementation

Lesson-local. electrical-troubleshooting "Find branch" (shortened):

```html
<figure class="dia cbp" id="cbp">
  <p class="fig-hint">Choose an airplane. Select a breaker to pull it, and select it again to push it back in.</p>
  {{PLANE_BTNS}}
  <div class="cbp-grid">
    <div class="cbp-panel"><div class="cbp-bus"><h4>Main bus</h4><div class="cbp-row">{{CB_MAIN}}</div></div>
      <div class="cbp-bus hot"><h4>Hot battery bus</h4><div class="cbp-row">{{CB_HOT}}</div></div></div>
    <div class="cbp-meter" aria-live="polite"><span class="fx-ml">Meter in the battery ground lead</span>
      <span class="fx-lcd"><b id="cbpA">0.25</b><i>A</i></span><span class="fx-mn" id="cbpOut">No breaker pulled</span></div></div>
  <p class="fig-live" id="cbpSays" aria-live="polite">Pull one breaker and watch the meter.</p></figure>
```

Related: parallel-circuits "Troubleshoot" (`#findopen`) puts the ammeter in each branch on FAA Figures 12-183 to 12-185; semiconductors "Ripple fault" (`#ripple`) measures with no load, then turns the equipment on and reads the ripple on a scope; electrical-troubleshooting "Fault hunt" (`#hunt`) runs the Avionics Circuit Lab's Fault Hunt on an aircraft DC bus (`?preset=dc-bus`).

## Strong CAET example

**electrical-troubleshooting, "Find branch" (`#branch`)**: the meter is in series in the battery ground lead; pull the breakers one at a time, pushing each back in before the next, and the breaker that drops the reading names the branch. Two airplanes, a main bus and a hot battery bus, a prediction before the panel. Built lesson: `frontend/public/aero/courses/electrical-integration/lessons/electrical-troubleshooting.html`.

## A CAET idea

**Wiring Troubleshooting** (not yet rebuilt): its original meter page is listed as weak ("pin buttons and a readout, no harness drawing"). Rebuild it as a harness drawing with two connectors and a wire list; the student rings out pins with the meter and finds a hidden fault drawn from the six signatures the Blueprint lists (open, short, miswire, high-resistance joint, intermittent, reversed polarity). After naming the fault, the student writes the record entry ([build-the-record](build-the-record.md)).

## Common mistakes

- A fault with no signature the lesson taught.
- No method on the page, so the student hunts at random.
- Feedback only at the end. Each test's result should be interpreted.
- Replacing a strong working sim with a simpler new one.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/electrical-troubleshooting/pages-*.tpl`, `.../parallel-circuits/pages-*.tpl`, `.../semiconductors/pages-*.tpl`; weak original noted in `aero-caet-source/curriculum/revamp-kit/research/02-component-catalog.md`, section 3
- Morris, N. M., and Rouse, W. B. (1985). Review and evaluation of empirical research in troubleshooting. Human Factors, 27(5), 503-530. https://doi.org/10.1177/001872088502700502
- Große, C. S., and Renkl, A. (2007). Finding and fixing errors in worked examples: Can this foster learning outcomes? Learning and Instruction, 17(6), 612-634. https://doi.org/10.1016/j.learninstruc.2007.09.008
- van Merrienboer, J. J. G., and Kirschner, P. A. (2018). Ten Steps to Complex Learning (3rd ed.). Routledge. https://doi.org/10.4324/9781315113210
- Finkelstein, N. D., et al. (2005). When learning about the real world is better done virtually. Physical Review Special Topics, Physics Education Research, 1, 010103. https://doi.org/10.1103/PhysRevSTPER.1.010103
- FAA-H-8083-30B, Aviation Maintenance Technician Handbook, General, Chapter 12 (Figures 12-183 to 12-185), from the FAA handbook index: https://www.faa.gov/regulations_policies/handbooks_manuals/
- Blueprint goal for Wiring Troubleshooting: `aero-caet-source/curriculum/blueprint/plans/digital-databus-wiring.json`
