---
id: history-incidents-index
title: History and Incidents (Lesson Craft)
section: 08-lesson-craft/history-incidents
applies_to: every CAET avionics lesson built to LESSON-BUILD-BRIEF.md
last_reviewed: 2026-10-01
status: draft for Nick's review
---

# History and Incidents

Part of the Lesson Craft section of the pedagogy library. This folder tells a lesson builder how to put real history and
real accidents into a CAET avionics lesson so that they teach, and gives a ready map of candidates for every lesson.

Why it exists: on 2026-10-01 Nick asked for more historical content in the lessons and for real accidents and incidents
tied to the learning, each with a credited public-domain portrait or photo. His examples: the Concorde crash and FOD,
Aloha 243 and inspection, BA 5390 and wrong parts.

## Files

| File | What it is | Use it when |
|---|---|---|
| `history-page-pattern.md` | How to build one history page: the four beats (the person, the problem, what they found, why a technician still uses it), page anatomy, interactions, writing and accuracy rules, myths to keep out, and a filled example (Karl Ferdinand Braun for Oscilloscopes) | You are adding a person, a unit or a milestone to a lesson |
| `incident-page-pattern.md` | How to tell a real accident or incident from its official report: when an event earns a page, how to read the report, page anatomy, rules against sensationalism and blame, "what a technician would have caught", interactions, and a filled example (Aeroperú 603 for Blocked Ports) | You are adding an accident or incident to a lesson |
| `image-licensing.md` | The checklist that verifies a portrait or photo is public domain or freely licensed, the trusted sources and their terms, and the credit line format | Before you download or place any image |
| `lesson-map.md` | For all 51 lessons in the hangar rooms: history candidates and incident candidates, with report numbers, URLs, the technician lesson and image candidates with licences. Unverified items are marked | You start any lesson, to see what is already checked |

## The short version

1. A history page earns its place only when it carries the lesson's concept to the student's bench (a unit, an
   instrument, a rule). Otherwise leave it out.
2. Tell every accident from its official report. Use the report's numbers and words. State the human cost once.
3. No dramatic language, no blame beyond the report, roles not names. Explain why the action made sense at the time.
4. "What a technician would have caught" must match a finding or a recommendation in the report.
5. One interaction per page that runs the lesson's skill: a timeline, a replay of the experiment, a then-and-now compare,
   find the missed step, decision points, or read the instruments.
6. Every image: read the licence on its own file page; public domain for portraits; credit on the page.
7. Never ship an UNVERIFIED fact. Check it or cut it.

## Why history and incidents teach

The research behind this folder, in plain terms. Full citations are below.

- **People learn to solve problems from cases.** Case-based reasoning describes how people solve a new problem by
  recalling a similar case and adapting its solution (Kolodner, 1993). Jonassen and Hernandez-Serrano (2002) argue that
  instruction should give learners a library of real stories of how practitioners solved, or failed to solve, problems,
  because those stories are what experts reason from. Kolodner and colleagues (2003) built this into science classes
  (Learning by Design). For a technician, a real accident report is a case: a symptom, a system, a missed check, an
  outcome.
- **Stories are remembered.** Narrative is processed and remembered differently from lists of facts (Willingham, 2004,
  "the privileged status of story"; Dahlstrom, 2014, on narratives for nonexpert audiences). Schank (1990) built a
  theory of memory on stories. A history page uses this: the person, the problem and the discovery carry the concept.
- **Learning from errors works, when it is structured.** A meta-analysis of error management training found it improves
  transfer of skills to new tasks compared with error-avoidant training (Keith and Frese, 2008). Trainees who studied
  "war stories" of errors adapted better than those who studied stories of success (Joung, Hesketh and Neal, 2006).
  Incident pages are error stories, told with the check that catches the error.
- **Decoration hurts learning.** Interesting material that is not tied to the learning goal (seductive details) lowers
  learning (Harp and Mayer, 1998; Rey, 2012, meta-analysis). This is why both patterns require a tie to the lesson's
  concept or skill, and why a lesson with no good fit gets no history or incident page.
- **Hindsight distorts.** Once people know the outcome, they judge it as more predictable than it was (Fischhoff, 1975).
  Safety science warns against blaming the last person to touch the work and asks why their actions made sense at the
  time (Dekker, 2014). Accident investigation itself is not about blame. Reports made under ICAO Annex 13 say so in
  their foreword; the BEA Concorde report, for example: its conclusions "are intended neither to apportion blame, nor to
  assess individual or collective responsibility. The sole objective is to draw lessons from this occurrence which may
  help to prevent future accidents or incidents." The incident pattern follows that.
- **The aviation safety community already teaches this way.** The FAA's Lessons Learned from Civil Aviation Accidents
  library (https://www.faa.gov/lessons_learned) retells major accidents with their findings and the rules that followed,
  and groups them by common themes (Flawed Assumptions, Human Error, Organizational Lapses, Pre-existing Failures,
  Unintended Effects). The FAA handbook teaches the Dirty Dozen through real cases (FAA-H-8083-30B, Chapter 14), and the
  built Human Factors lesson does the same. The NTSB's Most Wanted List ran from 1990 to 2023; its page now says it "has
  been retired" and points to NTSB Safety Issues (https://www.ntsb.gov/Advocacy/SafetyIssues/Pages/default.aspx, read
  2026-10-01). Use the Safety Issues pages, not the old list, when a lesson needs the NTSB's current priorities.

## Where official reports live

Base addresses (checked 2026-10-01; some sites block automated tools but open in a browser):
- NTSB (United States): reports https://www.ntsb.gov/investigations/AccidentReports/ ; CAROL search
  https://data.ntsb.gov/carol-main-public/basic-search ; report PDFs follow the pattern
  `https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR8903.pdf` (AAR-89/03).
- FAA Lessons Learned: https://www.faa.gov/lessons_learned ; accident pages by registration, for example
  https://www.faa.gov/lessons_learned/transport_airplane/accidents/N73711 ; many pages link a copy of the full report.
- UK AAIB: https://www.gov.uk/aaib-reports
- France BEA: https://bea.aero (report PDFs under `bea.aero/fileadmin/documents/docspa/` or
  `bea.aero/uploads/tx_elydbrapports/`; the old `bea.aero/docspa/` links are dead).
- TSB Canada: https://www.tsb.gc.ca
- ATSB Australia: https://www.atsb.gov.au (did not respond on 2026-10-01).
- Japan Transport Safety Board: https://jtsb.mlit.go.jp
- German BFU: https://www.bfu-web.de
- NASA Lessons Learned: https://llis.nasa.gov

## How this fits the lesson build

The page order in `LESSON-BUILD-BRIEF.md` puts history "only where a person, unit or law earns it" (page 6) and asks for
real accidents "told from the official report, with what a technician would have caught". In practice:
- History pages sit beside the concept they carry (Faraday beside induction), or open the aircraft pages when they
  explain a whole system (MIL-STD-704, the four-course range).
- Incident pages sit after the concept and before "Applying the procedure", so the student meets the real event with the
  knowledge to read it.
- Each lesson's page copy file records the sources for every history and incident fact, and the kind of incident (A, B
  or C, see `incident-page-pattern.md`).

## Open items and decisions for Nick

- **Recommend:** use the ten strongest matches in `lesson-map.md` Part 1 first. All ten have their official reports read.
- **Recommend:** let lessons with no good fit have no history or incident page (for example Series Circuits). The
  research on seductive details supports leaving them out.
- **Decide:** whether to use CC BY-SA aircraft photos when no public-domain photo exists, or always draw. The patterns
  allow CC BY-SA for aircraft and part photos with full credit, and require public domain for portraits.
- Items marked UNVERIFIED in `lesson-map.md` include: Qantas 72 and Malaysia 124 report text (ATSB site down), the
  Cerritos rule history, the Adam Air defect count, the Dirty Dozen originator's name and year (the FAA handbook gives
  only "Transport Canada" and the late 1980s and early 1990s), Volta's built-lesson portrait source,
  and several image provenances. Each says what to check.
- Corrections found for built lessons: AC Principles says Westinghouse "buys the rights" to Tesla's patents (ETHW and
  the Department of Energy say "licensed"); FOD and Tool Control credits the Concorde facts to the Flight Safety
  Foundation instead of the BEA report; Voltage uses a weakly sourced Volta portrait. See `lesson-map.md`.

## Sources

Research:
- Dahlstrom, M. F. (2014). Using narratives and storytelling to communicate science with nonexpert audiences.
  *Proceedings of the National Academy of Sciences*, 111(Suppl. 4), 13614-13620. https://doi.org/10.1073/pnas.1320645111
- Dekker, S. (2014). *The field guide to understanding 'human error'* (3rd ed.). Ashgate.
- Fischhoff, B. (1975). Hindsight is not equal to foresight: The effect of outcome knowledge on judgment under
  uncertainty. *Journal of Experimental Psychology: Human Perception and Performance*, 1(3), 288-299.
  https://doi.org/10.1037/0096-1523.1.3.288
- Harp, S. F., & Mayer, R. E. (1998). How seductive details do their damage: A theory of cognitive interest in science
  learning. *Journal of Educational Psychology*, 90(3), 414-434. https://doi.org/10.1037/0022-0663.90.3.414
- Jonassen, D. H., & Hernandez-Serrano, J. (2002). Case-based reasoning and instructional design: Using stories to
  support problem solving. *Educational Technology Research and Development*, 50(2), 65-77.
  https://doi.org/10.1007/BF02504994
- Joung, W., Hesketh, B., & Neal, A. (2006). Using "war stories" to train for adaptive performance: Is it better to
  learn from error or success? *Applied Psychology*, 55(2), 282-302. https://doi.org/10.1111/j.1464-0597.2006.00244.x
- Keith, N., & Frese, M. (2008). Effectiveness of error management training: A meta-analysis. *Journal of Applied
  Psychology*, 93(1), 59-69. https://doi.org/10.1037/0021-9010.93.1.59
- Kolodner, J. L. (1993). *Case-based reasoning*. Morgan Kaufmann.
- Kolodner, J. L., Camp, P. J., Crismond, D., Fasse, B., Gray, J., Holbrook, J., Puntambekar, S., & Ryan, M. (2003).
  Problem-based learning meets case-based reasoning in the middle-school science classroom: Putting Learning by Design
  into practice. *Journal of the Learning Sciences*, 12(4), 495-547. https://doi.org/10.1207/S15327809JLS1204_2
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. *Educational Research
  Review*, 7(3), 216-237. https://doi.org/10.1016/j.edurev.2012.05.003
- Schank, R. C. (1990). *Tell me a story: A new look at real and artificial memory*. Scribner.
- Willingham, D. T. (2004, Summer). Ask the cognitive scientist: The privileged status of story. *American Educator*.
  https://www.aft.org/ae/summer2004/willingham

Aviation:
- International Civil Aviation Organization. Annex 13 to the Convention on International Civil Aviation, Aircraft
  Accident and Incident Investigation (objective of the investigation, Chapter 3).
- BEA (2002). Accident on 25 July 2000 at La Patte d'Oie in Gonesse to the Concorde registered F-BTSC operated by Air
  France, f-sc000725a, Foreword (on blame, and on copyright: "Copying, distribution or the use of this document for
  commercial purposes is forbidden"). https://www.faa.gov/sites/faa.gov/files/2022-11/Concorde_Accident_Report.pdf
- Federal Aviation Administration. Lessons Learned from Civil Aviation Accidents. https://www.faa.gov/lessons_learned ;
  common themes page https://www.faa.gov/lessons_learned/transport_airplane/accidents/common_themes (read 2026-10-01).
- Federal Aviation Administration (2023). *Aviation Maintenance Technician Handbook, General* (FAA-H-8083-30B),
  Chapter 14, Human Factors.
- Report-by-report sources are in `lesson-map.md`.

Project:
- `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- `aero-caet-source/frontend/public/aero/hangar/classrooms.json`
- `aero-caet-source/curriculum/blueprint/plans/*.json`
- Built examples in `aero-caet-source/tools/curriculum/revamp/examples/`

## Addendum: more verified research (2026-10-01)

- **Failure cases beat success cases.** Tawfik and Jonassen (2013), ETR&D 61(3), 385-406, https://doi.org/10.1007/s11423-013-9294-5: learners given a library of failure cases argued better (more counterarguments, better overall argument) than those given success cases, on the trained problem and on a new one a week later. Design rationale for failure-based lessons: Tawfik, Rong and Choi (2015), ETR&D 63(6), 975-994, https://doi.org/10.1007/s11423-015-9399-0.
- **War stories with errors train adaptive performance.** Joung, Hesketh and Neal (2006), Applied Psychology 55(2), 282-302, https://doi.org/10.1111/j.1464-0597.2006.00244.x: 59 experienced firefighters did better on an adaptive post-test after cases with management errors and serious consequences than after the same cases handled correctly. The closest analogue to technician training: use real error cases, then test on a new situation.
- **Stories are understood and recalled better than exposition.** Mar, Li, Nguyen and Ta (2021), Psychonomic Bulletin and Review 28(3), 732-749, https://doi.org/10.3758/s13423-020-01853-1 (over 75 samples, over 33,000 participants). Cite this rather than the popular "twice as fast, twice as well" figure (Dahlstrom 2014 PNAS, from Graesser, Olde and Klettke 2002), and do not say "twice" unless quoting.
- **History of science helps understanding more than interest.** Teixeira, Greca and Freire (2012), Science and Education 21(6), 771-796, https://doi.org/10.1007/s11191-009-9217-3: a research synthesis with consistent gains in understanding the nature of science, mixed results on attitudes. No verified meta-analysis shows history raises interest on its own.
- **How an ICAO Annex 13 final report is laid out** (13th ed., 2024; Appendix 1): Synopsis; 1 Factual information (1.6 Aircraft information item (a) holds airworthiness and maintenance: records, deferred defects, modifications and STCs; 1.16 Tests and research holds teardowns, wire arcing and lab work; 1.17 holds the operator, the maintenance organization and oversight); 2 Analysis; 3 Conclusions (findings, causes and contributing factors); 4 Safety recommendations. Para 3.1: "The sole objective of the investigation of an accident or incident shall be the prevention of accidents and incidents. It is not the purpose of this activity to apportion blame or liability." Reading order for a lesson: Synopsis, Conclusions (find the maintenance or avionics finding), back to 1.6, 1.16 or 1.17 for the facts, then Section 4 and any resulting ADs.
- **FAA Lessons Learned page skeleton** (now titled "Lessons Learned from Civil Aviation Accidents"; Small Airplane, Transport Airplane and Rotorcraft libraries): Overview, Board Findings, Recommendations, Safety Assumptions, Precursors, Resulting Safety Initiatives, ADs, Lessons Learned (technical and common theme). Its five common themes: Flawed Assumptions, Human Error, Organizational Lapses, Pre-existing Failures, Unintended Effects. A good skeleton for incident pages.
- **NTSB search:** carol.ntsb.gov now redirects to https://my.ntsb.gov/ (aviation search at https://my.ntsb.gov/aviation); dockets at https://data.ntsb.gov/Docket/forms/searchdocket. The Most Wanted List ended after 2023 (press release https://www.ntsb.gov/news/press-releases/Pages/NR20231214.aspx); its page points to NTSB Safety Issues.
- **Dirty Dozen origin:** write "developed by Transport Canada" (FAA-H-8083-30B, Chapter 14). The Gordon Dupont 1993 attribution is UNVERIFIED.
