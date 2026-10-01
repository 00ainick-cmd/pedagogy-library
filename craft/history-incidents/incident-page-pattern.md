---
id: incident-page-pattern
title: Incident Page Pattern
section: 08-lesson-craft/history-incidents
applies_to: every CAET avionics lesson built to LESSON-BUILD-BRIEF.md
last_reviewed: 2026-10-01
status: draft for Nick's review
---

# Incident Page Pattern

How to tell a real accident or incident in a CAET lesson, from its official report, so that it teaches the lesson's
concept and shows what a technician would have caught. Nick asked for this on 2026-10-01 with three examples: the
Concorde crash and FOD, Aloha 243 and inspection, BA 5390 and wrong parts.

The pages already built that set the standard: the Concorde timeline in `fod-tool-control` (page 17), and the case files
for Aloha 243, Continental Express 2574, Boeing 737-400 G-OBMM and BA 5390 in `human-factors` (pages 2 and 3). Copy their
tone. Do not copy their page sequence.

## 1. When a lesson earns an incident page

An incident earns a page only when the official report's findings contain the lesson's concept or a task the student
will do. Sort every candidate into one of three kinds, and say which kind on the page copy file.

| Kind | What it means | Examples (see `lesson-map.md` for report numbers) |
|---|---|---|
| A. Maintenance link | A maintenance action, or a missed one, is in the report's findings or causes | BA 5390 (wrong bolts), Aloha 243 (inspection), Continental Express 2574 (turnover), Concorde (wear strip installed on another aircraft), XL Airways 888T (sensors rinsed without protection) |
| B. System link | The system the lesson teaches failed, misled the crew or was the ignition source, and the report explains how | AF447 (pitot probes iced), Qantas 72 (air data unit data spikes on the bus), Swissair 111 (arcing wiring), Turkish 1951 (radio altimeter fault) |
| C. Milestone | The event changed a rule or a system the student works on today | Cerritos 1986 (Mode C and TCAS), Korean Air Lines 007 (GPS for civil use), Pan Am 214 (lightning protection of fuel tanks) |

Kind A carries the strongest lesson for a technician and gets the "What a technician would have caught" box. Kind B
gets "What the report found about the system". Kind C is told like a history page (see `history-page-pattern.md`) with
the event as the problem.

Do not use an event when:
- the only link is a word in common ("a radio was on board");
- the report's cause is undetermined and the lesson would have to guess (say so if you mention it at all);
- the report is not published, or only press accounts exist;
- the event is very recent (final report under about two years old) and families or the investigation are still in
  the news, unless Nick decides otherwise.

## 2. Reading the report

Most final reports follow the format of ICAO Annex 13, so the same sections appear in an NTSB, AAIB, BEA, TSB, ATSB or
JTSB report: Synopsis; 1 Factual Information (1.6 Aircraft information, which holds the maintenance history; 1.16 Tests
and research; 1.17 Organizational and management information; 1.18 Additional information); 2 Analysis; 3 Conclusions
(findings, probable cause or causes and contributing factors); 4 Safety Recommendations. NTSB reports use the same
numbering. TSB Canada calls its conclusions "Findings as to causes and contributing factors".

Read in this order:
1. Synopsis and the probable cause (or causes). Write down the report's own words.
2. Findings. Mark every finding that names a task a technician does: an inspection, an installation, a part number, a
   record entry, a functional check, a cover or a cap.
3. The factual section for each marked finding (usually 1.6, 1.16, 1.17). Take the numbers from here: dimensions, part
   numbers, times, altitudes, counts.
4. The analysis section, for why the people involved acted as they did. Use it to explain, not to judge.
5. The safety recommendations, for what changed afterwards.

Then write the page from your notes, and cite the section or page for each fact.

Where to find reports (base URLs, checked 2026-10-01; see `README.md` for the full list): NTSB reports and CAROL
(https://www.ntsb.gov and https://data.ntsb.gov/carol-main-public/basic-search), UK AAIB (https://www.gov.uk/aaib-reports),
France BEA (https://bea.aero), TSB Canada (https://www.tsb.gc.ca), Australia ATSB (https://www.atsb.gov.au), and the FAA
Lessons Learned library (https://www.faa.gov/lessons_learned), which retells major accidents by theme with the report
cited.

## 3. Page anatomy

1. **Hero.** Heading is the flight or the aircraft, as a plain noun: "Aloha Airlines Flight 243", "The Concorde Accident",
   "Boeing 737-400 G-OBMM". Never a teaser ("Eighteen Feet of Sky") and never a question.
2. **Lede.** One or two sentences: the date, the aircraft (with a one-sentence definition if the student will not know
   it), what happened, and the human cost stated once, plainly, with the report's numbers.
3. **Case file card** (`article.case-file`): header with "Accident report" or "Incident report" (the report's own
   classification), the date and the aircraft; then the figure and the short account.
4. **The figure.** A drawing made for the lesson from the report (labelled "Drawn from NTSB report AAR-89/03"), a
   figure from the report itself if its licence allows, or a credited public-domain photo of the aircraft or the part.
5. **The sequence.** The interaction (see section 5) carries the order of events.
6. **The link to the lesson.** One plain paragraph or a hotspot: which part of today's lesson explains what happened.
7. **"What a technician would have caught"** (kind A) or **"What the report found about the system"** (kind B): one or
   two sentences, traceable to a finding or recommendation (see section 4).
8. **Credit line**: agency, report number, and the sections used. Example: "Source: UK Air Accidents Investigation
   Branch (AAIB) report 1/92, sections 1.17.4 and 2.2.1."

Length: about 150 to 220 words of body text. A long case takes two pages: the account, then the interaction.

## 4. Writing rules for incidents

All the brief's writing rules apply (plain noun headings, define every term, spell out acronyms, no em or en dashes,
no cute lines). These are added for real events.

**Tell it from the report.**
- Every fact on the page comes from the report, or from a source that quotes the report (the FAA Lessons Learned page,
  the FAA handbook). If a fact is only in the press, leave it out.
- Use the report's numbers exactly, with the report's units, and convert in brackets if needed ("0.026 inch").
- Use the report's word for its conclusion: "probable cause" (NTSB), "causes" (AAIB), "findings as to causes and
  contributing factors" (TSB). Do not upgrade "most likely" to "was".
- When the report could not determine something, say so ("The report could not determine the ignition source with
  certainty; the most likely source was...").

**No sensationalism.**
- State the deaths and injuries once, in the lede, as numbers from the report. Do not repeat them for effect.
- No dramatic verbs or adjectives: not "plunged", "doomed", "horrifying", "fireball", "tragic", "miraculous". Write
  "struck the ground", "the fire spread", "everyone aboard survived".
- No cockpit voice recorder words from the last moments, no victims' stories, no photos of human remains or of
  wreckage that shows them. Prefer a drawing, the aircraft before the event, or the part.
- No countdowns, sound effects or red flashing in the interaction.

**No blame beyond the report.**
- Name roles, not people: "a shift maintenance manager", "the inspector", "the night shift". The reports usually do the
  same.
- Do not use "careless", "negligent", "should have known" or "failed to" unless the report uses that word for that
  person, and then quote it.
- Explain why the action made sense at the time, from the report's analysis (the BA 5390 manager judged that finding
  the bolt in the catalog would take too long). People in an event do not know how it ends. This is hindsight bias: once
  the outcome is known, the missed cue looks obvious when it was not (Fischhoff, 1975; Dekker, 2014). The student
  learns more from "this made sense, and here is the check that catches it" than from "this person was wrong".
- Systems as well as people: include the report's findings about procedures, lighting, staffing, paperwork and
  oversight, not only the last hands on the part.

**"What a technician would have caught" must be traceable.**
- It must match a finding, a recommendation, a required procedure the report says was not done, or a check the report
  says would have found the fault. Cite which.
- If the report does not support a catch, write "What the report found about the system" instead. Do not invent one.
- Write it as a check the student will do, in the student's words: "The part number from the illustrated parts catalog,
  checked against the drawer label."

## 5. Interactions for incident pages

Pick one per page. Mix them across lessons.

| Interaction | How it works | Use it when | Built or proposed example |
|---|---|---|---|
| Timeline | Steps with Next and Back; a drawing follows each step | The event is a chain over hours, days or weeks | Built: Concorde, five steps, the runway drawing moves with the step (`fod-tool-control` page 17) |
| Find the missed step | The real procedure as a numbered list or a work card; one step was not done or not done right. The student taps the step. Feedback names the step and cites the report section | The report names a skipped or incomplete step | Filled example below: Aeroperú 603 release chain. Proposed: Air Midwest 5481 rigging steps; the XL Airways 888T rinse |
| Decision points | Three or four moments from the report. At each, the student picks what they would do. Feedback shows what happened, why it made sense at the time, and the check that catches it. No score, no "you crashed" | The report describes choices made with the information at hand | Proposed: BA 5390 at the carousel, the storekeeper's comment, the sign-off |
| Read the instruments | The panel as the report says it read (frozen altimeter, rising airspeed). The student predicts the blockage, then sees the report's finding | A pitot-static or air data case | Proposed: Northwest 6231, Birgenair 301 |
| Spot the difference | Two parts, labels or drawings side by side; the student taps the difference | A wrong part or a wrong label | Built: BA 5390 bolts in `human-factors` |
| Hotspots on a report figure | A figure from the report (or drawn from it) with tappable parts | The location of the fault teaches | Proposed: Aloha 243 lap joint; Swissair 111 ceiling wiring area |

Rules for all of them: the interaction teaches the lesson's skill, not the drama; the student cannot "lose"; every
feedback line cites the report.

## 6. Quality check before hand-over

- [ ] The event passes the section 1 test, and its kind (A, B or C) is written in the page copy file.
- [ ] Every fact is from the report or a source quoting it, with the section or page in the page copy file.
- [ ] Deaths and injuries are stated once, in the lede, with the report's numbers.
- [ ] No dramatic language, no blame words beyond the report, roles not names.
- [ ] The catch box matches a finding or recommendation, cited.
- [ ] Photos are credited and licence-checked (`image-licensing.md`); no image shows victims.
- [ ] The heading is a plain noun; no em or en dashes; every term and acronym defined.
- [ ] The concept the report turns on has been taught earlier in the lesson.

---

## Filled example: Aeroperú Flight 603, for the Blocked Ports lesson

Lesson: `blocked-ports`, Blocked Ports and Altimeter Setting (Flight Instruments room, Blueprint status `rebuild`, CAET
4.2 and 4.3). Kind A: the report's probable principal cause is a maintenance omission. The Blueprint's hook for this
lesson is an airplane released after paint with its static ports still taped; this is the real event behind that hook.

Prerequisites check: Pitot-Static Systems taught the static port, the altimeter, the vertical speed indicator and the
airspeed indicator. Earlier pages of this lesson taught what each instrument does when the static port is blocked. The
page uses nothing newer.

Placement: two pages, after the page where the student predicts the indications for a blocked static port, and before
"Applying the procedure".

Report used (read 2026-10-01): Accident Investigation Board, Directorate General of Air Transport (DGTA), Peru,
"Accident of the Boeing 757-200 aircraft operated by Empresa de Transporte Aéreo del Perú S.A. Aeroperú", Lima, December
1996, English translation, https://www.skybrary.aero/bookshelf/books/1719.pdf . Page numbers below are PDF pages of that
translation. NTSB Safety Recommendation A-96-141, 15 November 1996,
https://www.ntsb.gov/safety/safety-recs/recletters/A96_141.pdf .

### Page 1: Aeroperú Flight 603

- **Side-panel label:** Aeroperú 603
- **Title:** Aeroperú Flight 603
- **Goal:** Show a real airplane released with its static ports covered, and the steps that passed it.

**On-screen text**

Lede: "On 2 October 1996, a Boeing 757 took off from Lima, Peru, at night with masking tape still over its static ports.
The tape had been put on to keep polish out of the ports. All 70 people aboard, 9 crew and 61 passengers, were killed
when the airplane struck the sea."

Case file card header: "Accident report" / "Aeroperú Flight 603, 2 October 1996" / "Boeing 757-200 N52AW, Lima, Peru."

Account: "Before the flight, the lower front of the fuselage was polished. The normal procedure was to cover the static
ports with adhesive tape so that polish and dirt could not get in. After the work, the airplane passed from maintenance
to the duty supervisor, to the line chief and to the crew, and the captain walked around it before the flight. The tape
was not found at any of those steps. A section of the left side of the fuselage was recovered from the sea. Masking
tape still covered all three of its static ports."

What the instruments showed: "At about 200 to 300 feet after takeoff, the pilots said the altimeters were stuck. Later
the copilot reported that his altimeters, airspeed indicators and vertical speed indicators were all wrong."

Link to the lesson (plain paragraph): "Every instrument on the static line was wrong: the altimeter, the vertical speed
indicator and the airspeed indicator. That is the pattern you learned to read on the last page. The pitot tubes were
clear; the static ports were not."

Figure: a drawing made for the lesson of the left forward fuselage of a 757 with the static port plate and three strips
of tape, labelled in clear space: "static ports", "masking tape". Caption: "FIG [n] The static ports as the report
describes them, covered with masking tape. Drawing made for this lesson from the report's description. Not to scale."

Credit line: "Source: Accident Investigation Board, Directorate General of Air Transport, Peru, final report on the
accident of 2 October 1996 (English translation), pages 42, 44 and 49."

### Page 2: The Release Checks

- **Side-panel label:** Release checks
- **Title:** The Release Checks
- **Goal:** Find the step that was missed and every later step that could have caught it.

**Interaction: find the missed step, then find the catches**

Builder: a vertical work card of eight steps, each a tappable row. Part 1 asks "Which step was not done?" Part 2 asks "Tap
every later step that had a chance to find the tape." Feedback appears over the card (ask card style). No score, no
timer, no failure state; a wrong tap gives the feedback and lets the student try again.

The steps, in order, each from the report:
1. "Cover the static ports with adhesive tape before polishing." (report p. 44)
2. "Polish the lower front fuselage." (p. 44)
3. "Remove the tape from the static ports." This is the missed step (probable principal cause, p. 49).
4. "Quality control check of the completed work." (p. 44)
5. "Hand the airplane to the duty supervisor." (p. 44)
6. "Duty supervisor hands it to the line chief." (p. 44)
7. "Line chief hands it to the crew." (p. 44)
8. "Captain's walk-around before the flight." (p. 49)

Part 1 feedback:
- Correct (step 3): "Right. The report found that the maintenance staff did not remove the protective tape from the
  static ports."
- Any other step: "Not quite. That step was done. Look for the one that undoes step 1."

Part 2 feedback (correct set: steps 4 to 8): "Right. The report found the tape was not detected during the airplane's
release to the line mechanic, its move to the passenger boarding apron, or the crew's walk-around. Each later step was a
chance to find it."

Rule box after Part 2: "Every cover, plug and piece of tape that goes on an airplane for a job is removed and accounted
for before release. Look at each static port and pitot opening yourself. Do not sign for a port you did not see."

What a technician would have caught (catch box): "A check, before release, that every cover and every strip of tape put
on for the polishing was off, with each static port looked at. After the accident the investigators recommended
eye-catching covers for static ports during maintenance and polishing, and strict use of the release paperwork; the US
National Transportation Safety Board issued an urgent recommendation for highly conspicuous static port covers with
warning flags."

Credit line: "Sources: Accident Investigation Board, Directorate General of Air Transport, Peru, final report (English
translation), pages 44, 49 and 51; NTSB Safety Recommendation A-96-141."

### How this example follows the rules

- Every fact is from the report or the NTSB letter, with pages in this file. The registration is N52AW (some secondary
  sources give OB-1052; the report and the NTSB letter do not).
- The human cost is stated once, in the lede, with the report's numbers.
- Roles, not names. The report names the crew and finds crew contributing causes (ground proximity warnings, radio
  altimeter). The page states only the maintenance chain; the page copy file notes that the report found crew factors,
  and the builder may add one plain line saying so.
- No dramatic language, no cockpit voice recorder words, no wreckage photo. A drawing shows the ports.
- The catch box comes from the report's recommendations (p. 51, items c and g) and the NTSB letter, not from hindsight.
- The interaction teaches the lesson's skill (a static port is part of the system you release) and cannot be "lost".

## Sources for this pattern

- LESSON-BUILD-BRIEF.md, `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`.
- Built incident pages studied: `tools/curriculum/revamp/examples/fod-tool-control/` (Concorde timeline, NTSB SA-054
  cases), `human-factors/` (case files for Aloha 243, Continental Express 2574, G-OBMM and BA 5390),
  `shop-communication/` (Continental Express 2574).
- FAA Lessons Learned from Civil Aviation Accidents, https://www.faa.gov/lessons_learned . Its transport airplane library
  groups accidents by five common themes: Flawed Assumptions, Human Error, Organizational Lapses, Pre-existing Failures
  and Unintended Effects (https://www.faa.gov/lessons_learned/transport_airplane/accidents/common_themes, read
  2026-10-01). Each accident page gives the history of flight, the report's findings and the rules that changed.
- Aeroperú 603 report and NTSB A-96-141 (URLs above).
- Research on hindsight bias and on learning from cases: see `README.md` in this folder, "Why history and incidents
  teach", for the full citations.
