---
pattern: build-the-record
family: do
principles: [faded-worked-examples, transfer-of-learning, error-analysis-corrective-feedback]
our_component: lesson-local entry builder (.picks with a building logbook strip, .rw) in maintenance-records; not in lesson-parts
status: local
best_example: maintenance-records, page "Rewrite" (#rewrite)
last_reviewed: 2026-10-01
---

# Build the Record

## Purpose

The student assembles a real maintenance record, part by part, from choices: the date, the description, the approval. Each right choice writes itself onto a logbook strip in handwriting style, so the student watches a correct 14 CFR 43.9 entry take shape. The same pattern fits Form 337 blocks, an 8130-3 remark, a squawk write-up or a shift turnover note. This is the paperwork side of the job, which a technician does on every task.

## The learner's action

Reads the job facts. For each part of the record, picks the best line from two or three. A wrong pick explains what it is missing. When every part is right, the finished entry stands on the strip with a closing note.

## When it teaches

- **A completion task.** The student fills the parts of a record whose structure is given. Completion tasks sit between studying a worked example and writing from nothing, and they beat jumping straight to unaided writing for novices (Paas 1992; [faded-worked-examples](../../principles/04-delivery-patterns/faded-worked-examples.md)). Later in the course the student writes the whole entry.
- **The real artifact.** A record entry that "holds up years later" is the Blueprint's goal for this lesson. Building one, with a real model, part number and manual section, is the job itself ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Near-miss options.** "R. Alvarez, A&P" without the certificate number is the mistake technicians make. Choosing against it, with the reason, corrects the habit ([error-analysis-corrective-feedback](../../principles/04-delivery-patterns/error-analysis-corrective-feedback.md)).
- **Fixing the hook's bad entry.** The lesson opens with a weak entry ("Installed radio, ops checks good") and the student rewrites it. Finding and fixing errors in an example helps once the student knows the rules (Große and Renkl 2007).

## When it does not

- Before the rule is taught. Teach 43.9's four items first (maintenance-records does it with a regulation reader).
- A free-text box the page cannot check. Use picks per part, or a model answer to compare against.
- Options where the right one is obviously longest. Make the near misses as complete-looking as the right line.

## Anatomy

- **Job facts**: a short definition list (aircraft, unit removed, unit installed, part number, serial numbers, data used, checks done, who did and approved it). A note says which names and numbers are examples and which are real.
- **Picks**: one group per part of the record (`Date`, `Description`, `Approval`), each with two or three options and a feedback line.
- **Strip**: a logbook strip with placeholder dots ("date", "description", "signature and certificate") that fill in handwriting style as parts are chosen. Live region.
- **Done note**: why the entry is complete ("Who did it is not a separate line, because R. Alvarez did the work and approved it").
- **Start over**.

## Mobile and accessibility

- Picks are buttons in labeled groups (`role="group"` with `aria-label`), one group per part.
- The strip is a live region so each new part is read out.
- At 390 px the picks come first and the strip follows; the strip stays readable (handwriting fonts at 18 px or more, with good contrast on the ruled paper).
- Long option lines wrap; never shrink them below 16 px.

## Our implementation

Lesson-local. maintenance-records "Rewrite":

```html
<article class="facts"><h3>Job Facts</h3><dl>{{FACTS}}</dl>
  <p class="small-note">The names and numbers here are examples. The model, the part number and the manual section are real. ...</p></article>
<div class="rw" id="rw">
  <div class="rw-l"><p class="dir-hint">Choose the best line for each part. The corrected entry builds on the logbook strip as you choose.</p>
    <div class="picks" id="picks">{{PICKS}}</div><button class="btn rs-reset" id="rwReset" type="button">Start over</button></div>
  <div class="rw-r rw-strip"><div class="docline buildline" id="rwStrip" aria-live="polite">
    <div class="dl-head">Airframe maintenance record, Cessna 172</div>
    <div class="dl-row"><span class="dl-date hand" data-k="date"><i class="ph-dot">date</i></span>
      <span class="dl-text hand" data-k="desc"><i class="ph-dot">description</i></span></div>
    <div class="dl-row"><span class="dl-date"></span><span class="dl-sig hand" data-k="sig"><i class="ph-dot">signature and certificate</i></span></div></div>
    <p class="rw-done" id="rwDone" hidden>{{REWRITE_DONE}}</p></div></div>
```

```python
PICKS = [dict(k='sig', lab='Approval', ans=2, opts=[
    ('R. Alvarez', 'Not quite. A name alone does not show the certificate the signer used.'),
    ('R. Alvarez, A&P', 'Not quite. The kind of certificate is there, but the certificate number is missing.'),
    ('R. Alvarez, A&P 4718203', 'Right. The line gives the signature, the kind of certificate and the certificate number.')]), ...]
```

A shared record builder is listed under "worth building later" in [gaps.md](gaps.md); it would take `facts`, `parts` (the PICKS shape) and a strip template.

## Strong CAET example

**maintenance-records, "Rewrite" (`#rewrite`)**: the hook's one-line entry for a nav/comm swap, rewritten part by part into an entry with the Bendix/King KX 155A model, part number, both serial numbers, the Cessna 172 maintenance manual section, the checks, the date of completion and a signature with the kind and number of certificate. Built lesson: `frontend/public/aero/courses/regulations/lessons/maintenance-records.html`.

## A CAET idea

**Wiring Troubleshooting** (not yet rebuilt): its Blueprint goal ends with "write the record." After the student finds the high-resistance joint on the harness ([find-the-fault](find-the-fault.md)), they build the entry: what was found (the connector and pin), what was done (contact replaced, crimped and pull tested per the manual), the check that proved it (pin-to-pin resistance within limits), the date and the approval. The near misses are the vague lines technicians write ("Repaired wiring, ops good").

## Common mistakes

- Making up a part number or a manual section. Use real ones, or say they are examples.
- The right option the only complete-looking one.
- Building the record with no rule taught first.
- A strip that looks like a form from no real aircraft.

## Sources

- Lesson source: `aero-caet-source/tools/curriculum/revamp/examples/maintenance-records/` (`pages-*.tpl`, `content.py` PICKS and REWRITE_DONE, `assemble.py` `picks()`)
- eCFR, 14 CFR 43.9 (content, form and disposition of maintenance records): https://www.ecfr.gov/current/title-14/section-43.9
- Paas, F. G. W. C. (1992). Training strategies for attaining transfer of problem-solving skill in statistics: A cognitive-load approach. Journal of Educational Psychology, 84(4), 429-434. https://doi.org/10.1037/0022-0663.84.4.429
- Große, C. S., and Renkl, A. (2007). Finding and fixing errors in worked examples: Can this foster learning outcomes? Learning and Instruction, 17(6), 612-634. https://doi.org/10.1016/j.learninstruc.2007.09.008
- Blueprint goals: `aero-caet-source/curriculum/blueprint/plans/safety-hf-regs.json` (maintenance-records), `.../digital-databus-wiring.json` (wiring-troubleshooting)
