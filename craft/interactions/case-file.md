---
pattern: case-file
family: explore
principles: [transfer-of-learning, analogical-bridging, self-explanation-elaborative-interrogation, error-analysis-corrective-feedback]
our_component: lesson-local case file (.case-file with .cf-doc hotspots, .cf-factor, .cf-catch) on five human-factors pages; not in lesson-parts
status: local
best_example: human-factors, page "Attention" (#attention), the Airbus A320 case of 20 March 2001
last_reviewed: 2026-10-01
---

# Case File

## Purpose

A real incident, presented as a file a technician can work through: the official account (a handbook figure or the report's own words) with its key lines marked to tap, the human or technical factor named and defined, a photo or drawing, and a box that says "What would have caught it." Then the countermeasures as steps. The brief asks for exactly this: tie the lesson "to real accidents and incidents that it explains ... told from the official report, with what a technician would have caught." How to research and tell the story is in the sibling folder `../history-incidents/`; this file covers the interaction.

## The learner's action

Reads the header (aircraft, date, one line of what happened), taps the marked lines of the report to read what each means, reads the factor and the catch, then reads or works the countermeasures (often followed by a sort or an ask card).

## When it teaches

- **Cases carry rules into memory.** A rule attached to a real event is easier to recall and to apply than the rule alone; stories are "psychologically privileged" (Willingham 2004), and case-based reasoning research shows people solve new problems by recalling similar cases (Kolodner 1997; [analogical-bridging](../../principles/04-delivery-patterns/analogical-bridging.md)).
- **Transfer to the shop.** "What would have caught it" names a technician's action in a real setting, so the student leaves with a practice, not just a story ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Explaining the chain.** Tapping each report line and reading why it mattered asks the student to connect cause to effect ([self-explanation-elaborative-interrogation](../../principles/01-learning-science/self-explanation-elaborative-interrogation.md)).
- **Error analysis on someone else's error.** The case is a worked example of a failure, analyzed ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).

## When it does not

- The case has no maintenance lesson. Choose incidents a technician's action could have changed.
- Details not in the official report. Never invent a detail, a quote or a name.
- Drama. Tell it plainly, in past tense, from the report. Nick rejects narrator voice and slogans.
- Two case files on one page. One case, one factor, one catch.

## Anatomy

- **Header**: mono label "Incident report", heading with the aircraft and date ("Airbus A320, March 20, 2001"), one sub-line on where the account comes from.
- **Document**: the official account as an image or text, with three or so marked lines as buttons; a side panel explains the tapped line (`aria-live`).
- **Factor**: a photo or drawing, the factor's name (a Dirty Dozen factor in Human Factors), and its FAA definition in plain words.
- **Catch**: "What would have caught it" in one or two sentences.
- **Countermeasures**: step cards with sources.
- **Credit**: report number, agency, date; figure credits.

## Mobile and accessibility

- Report lines are buttons over the image with labels that quote the line; the image has full alt text summarizing the account.
- At 390 px the document, the panel, the factor and the catch stack in that order.
- No auto-advancing or animated drama.

## Our implementation

Lesson-local on five human-factors pages (`#attention`, `#complacency`, `#distraction`, `#handoffs`, `#pressure`), with drawings made from the reports in `cases.py`.

```html
<article class="case-file">
  <header class="cf-h"><span class="cf-k">Incident report</span><h3>Airbus A320, March 20, 2001</h3>
    <p class="cf-sub">The airplane from the first page of this lesson, as the FAA handbook describes it.</p></header>
  <div class="cf-grid">
    <figure class="cf-doc"><div class="doc-hot" id="a320Doc"><img src="assets/human-factors/fig14-32.png" alt="The FAA handbook's description of the 2001 A320 incident, ..."/>{{A320_SPOTS}}</div>
      <figcaption class="figcap"><b>FIG 3</b> Tap the marked lines of the report. Source: FAA-H-8083-30B, Figure 14-32.</figcaption></figure>
    <div class="cf-side"><div class="doc-say" id="a320Say" aria-live="polite"><p class="doc-pick">Tap one of the three marked lines in the report.</p></div></div></div>
  <div class="cf-factor"> ... <p class="cf-fk">Dirty Dozen factor</p><h4>Lack of Awareness</h4><p>...</p></div>
  <div class="cf-catch"><p class="cf-fk">What would have caught it</p><p>A check from the captain's sidestick, ...</p></div>
</article>
```

Close relatives: [timeline](timeline.md) (fod-tool-control "Concorde") and the 3D T-tail on shop-communication "Flight 2574" ([3d-object-explorer](3d-object-explorer.md)).

## Strong CAET example

**human-factors, "Attention" (`#attention`)**: the A320 that almost crashed after takeoff because of reversed sidestick wiring, from FAA-H-8083-30B Figure 14-32, with three tappable report lines, the factor (lack of awareness), the catch (a check from the side that was worked on, of the direction of movement) and three countermeasures. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/human-factors.html`.

## A CAET idea

**Bonding, Grounding and Shielding** (new in the Blueprint): a case file on TWA Flight 800 (Boeing 747, 17 July 1996) from NTSB report AAR-00/03: the report's finding that the most likely ignition source was a short circuit outside the center wing tank letting excess voltage into the tank through fuel quantity indication wiring. Mark the finding lines; the catch is what separation and shielding of low-energy wiring are for. Check every line against the report before it goes on a page.

## Common mistakes

- Paraphrasing the report into a dramatic story.
- A case with no catch, or a catch no technician controls.
- Unsourced details.
- A portrait or photo that is not public domain or not credited.

## Sources

- Brief on incidents: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/human-factors/` (`pages-*.tpl`, `cases.py`)
- Willingham, D. T. (2004). Ask the cognitive scientist: The privileged status of story. American Educator, Summer 2004. https://www.aft.org/periodical/american-educator/summer-2004/ask-cognitive-scientist
- Kolodner, J. L. (1997). Educational implications of analogy: A view from case-based reasoning. American Psychologist, 52(1), 57-66. https://doi.org/10.1037/0003-066X.52.1.57
- Große, C. S., and Renkl, A. (2007). Finding and fixing errors in worked examples. Learning and Instruction, 17(6), 612-634. https://doi.org/10.1016/j.learninstruc.2007.09.008
- NTSB, Aircraft Accident Report AAR-00/03 (TWA Flight 800), for the CAET idea: https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR0003.pdf
- NTSB, Aircraft Accident Report AAR-89/03 (Aloha Airlines Flight 243), one of the human-factors cases: https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8903.pdf
- FAA-H-8083-30B, Chapter 14, Human Factors (Figures 14-30 and 14-32), from the FAA handbook index: https://www.faa.gov/regulations_policies/handbooks_manuals/
