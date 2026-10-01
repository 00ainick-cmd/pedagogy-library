---
id: cognitive-task-analysis
title: Job, Task, and Cognitive Task Analysis
category: 02-instructional-design
aliases: [cta, task-analysis, job-task-analysis, dacum, knowledge-elicitation]
evidence_strength: moderate  # small heterogeneous CTA evidence base; job analysis is standards-level
effect_size: "Hedges' g = 0.871 for CTA-based instruction vs. instruction built from other content-identification methods (Tofel-Grehl & Feldon 2013 meta-analysis; few studies, effects vary by CTA method and context); surgical trainees SMD 1.36 procedural knowledge and SMD 2.06 technical performance vs. conventional training (Edwards et al. 2021 meta-analysis of 12 studies)"
key_sources:
  - "Clark, R. E., Feldon, D. F., van Merriënboer, J. J. G., Yates, K. A., & Early, S. (2008). Cognitive task analysis. In J. M. Spector, M. D. Merrill, J. J. G. van Merriënboer, & M. P. Driscoll (Eds.), Handbook of research on educational communications and technology (3rd ed., pp. 577-593). New York: Lawrence Erlbaum Associates."
  - "Tofel-Grehl, C., & Feldon, D. F. (2013). Cognitive task analysis-based training: A meta-analysis of studies. Journal of Cognitive Engineering and Decision Making, 7(3), 293-304. doi:10.1177/1555343412474821"
  - "Edwards, T. C., Coombs, A. W., Szyszka, B., Logishetty, K., & Cobb, J. P. (2021). Cognitive task analysis-based training in surgery: A meta-analysis. BJS Open, 5(6), zrab122. doi:10.1093/bjsopen/zrab122"
  - "Sullivan, M. E., Yates, K. A., Inaba, K., Lam, L., & Clark, R. E. (2014). The use of cognitive task analysis to reveal the instructional limitations of experts in the teaching of procedural skills. Academic Medicine, 89(5), 811-816. doi:10.1097/ACM.0000000000000224"
  - "Schaafstal, A., Schraagen, J. M., & van Berlo, M. (2000). Cognitive task analysis and innovation of training: The case of structured troubleshooting. Human Factors, 42(1), 75-86. doi:10.1518/001872000779656570"
  - "Velmahos, G. C., Toutouzas, K. G., Sillin, L. F., Chan, L., Clark, R. E., Theodorou, D., & Maupin, F. (2004). Cognitive task analysis for teaching technical skills in an inanimate surgical skills laboratory. American Journal of Surgery, 187(1), 114-119. doi:10.1016/j.amjsurg.2002.12.005"
  - "U.S. Department of Defense. (2001). Department of Defense handbook: Instructional systems development/systems approach to training and education (Part 2 of 5 parts) (MIL-HDBK-29612-2A). https://everyspec.com/MIL-HDBK/MIL-HDBK-9000-and-Up/MIL-HDBK-29612_2A_24724/"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer, measurement]
contraindicated_when:
  - material.low_element_interactivity
  - material.unstable_target_specification
  - material.no_access_to_expert_performers
  - task_type.purely_verbal_definition_recall
  - task_type.motor_acquisition
runtime_triggers:
  - curriculum_design_started
  - decision_heavy_task_authoring
  - sme_content_draft_received
  - performance_assessment_gap_detected
  - expert_reasoning_opaque_to_learner
  - assessment_planning_started
related: [4c-id-model, action-mapping-performance-analysis, troubleshooting-instruction, competency-based-training-assessment, scenario-based-learning, worked-example-effect, expertise-reversal, cognitive-apprenticeship-mentor, backward-design-ubd]
---

# Job, Task, and Cognitive Task Analysis

## One-line claim

Derive what to teach and test from an analysis of the real job: have expert incumbents define the duties and tasks, specify each selected task's steps, cues, conditions, and standards, then run structured cognitive task analysis (CTA) with several experts to recover the decisions and cues they use but leave out when they explain, and build every lesson and assessment from that verified task and decision set rather than from a topic outline or one expert's unaided account.

## Evidence base

Job and task analysis is the analysis phase of the Instructional Systems Development/Systems Approach to Training (ISD/SAT) model. MIL-HDBK-29612-2A (U.S. Department of Defense, 2001, sec. 6.6-6.8) defines job analysis as identifying the duties and tasks that make up a job, defines task analysis as detailing each task's steps, sequence, conditions, cues, and performance standards, and selects tasks for training on criteria including criticality, frequency, difficulty, and percent of incumbents performing. DACUM (Developing A Curriculum) is the common civilian method for the duty and task list: a trained facilitator leads a committee of 5-12 expert workers through a two-day workshop that produces a chart of duties and tasks plus general knowledge and skills, worker behaviors, tools, and future trends, on the premise that expert workers describe their job more accurately than anyone else, supervisors included (Norton, 1997, *DACUM Handbook*, 2nd ed., Center on Education and Training for Employment, Ohio State University; a practitioner source). The Navy Electricity and Electronics Training Series (NEETS) shows the downstream product: 24 self-study modules (NAVEDTRA 14173 through 14196) whose subject matter reflects the day-to-day requirements of the electrical and electronic ratings and the occupational standards in NAVPERS 18068, written with the advice of senior technicians and delivered in small segments with learning objectives and embedded questions. Behavioral analysis of this kind captures what experts do; it misses much of what they decide. Feldon (2007) explains why: expert procedures become automated, so experts' self-reports of their own problem solving are reliably incomplete. Chao and Salvendy (1994), as summarized by Clark et al. (2008), found that no single expert programmer reported more than 41% of diagnostic actions, 53% of debugging actions, or 29% of interpretations, and that pooling six experts raised coverage to 87%, 88%, and 62%. Sullivan et al. (2014) found that surgeons teaching cricothyrotomy omitted on average 71% of clinical knowledge steps, 51% of action steps, and 73% of decision steps, and that CTA probing raised the share of steps described from 44% to 66%. The widely quoted claim that experts are unaware of about 70% of their decisions is Clark et al.'s (2008) summary statement, which cites two book chapters rather than one study; it is not a measured constant, and omission rates vary by step type, task, and expert.

CTA is a family of observation and interview methods that elicit the knowledge, cues, decision points, and strategies behind expert performance. Clark et al. (2008) describe a common five-stage sequence: collect preliminary knowledge (documents, observation, unstructured interviews), identify the knowledge representations needed, apply focused elicitation (for example the concepts, processes, and principles method or the critical decision method), analyze and verify the data, and format the results for instruction. Instruction built this way outperforms conventionally derived instruction in controlled comparisons. Schaafstal, Schraagen, and van Berlo (2000) used CTA of naturalistic troubleshooting to build "structured troubleshooting," a domain-independent strategy combined with a multi-level functional decomposition of the system; technicians trained this way solved twice as many malfunctions in less time, and the course itself took less time to teach. Velmahos et al. (2004) randomized 26 new surgical interns: a 3-hour CTA-based skills-lab course on central venous catheterization produced higher repeat-test knowledge scores (11 vs. 8.64 of 15), higher checklist scores while placing catheters in real patients (12.6 vs. 7.5 of 14), and fewer attempts to find the vein (3.3 vs. 6.4). Tofel-Grehl and Feldon's (2013) meta-analysis reported a large overall effect for CTA-based instruction relative to other means of identifying instructional content (Hedges' g = 0.871), and Edwards et al. (2021) pooled 12 surgical studies, finding SMD 1.36 for procedural knowledge and SMD 2.06 for technical performance among surgical trainees compared with conventional training.

The grade is moderate, not strong. Tofel-Grehl and Feldon (2013) note a relatively small number of studies and effects that vary substantially by CTA method and training context; Edwards et al. (2021) rated average study quality moderate and found I² = 87% heterogeneity on technical performance. The meta-analytic comparison is instruction whose content was identified by other means, so the effect measures better content, not a new delivery technique; in some trials the control group received no course at all (Velmahos et al., 2004), which widens the contrast. Job analysis and DACUM rest on standards and practice, not controlled trials. CTA also costs front-end time: in a field comparison summarized by Clark et al. (2008), a CTA-based course redesign took about 85% more design and instructor-preparation time but cut a two-day course to one day with equal or better posttest scores. Two operational limits follow from the omission data: one expert is never enough (Chao and Salvendy pooled six; the surgical studies built gold-standard lists from two or three experts), and CTA captures cognition, not the hand feel of a motor skill.

## When to apply

- **Curriculum design starts for a defined job role.** Run job analysis before writing any objective; the verified
  duty and task chart is the content inventory, and anything not traceable to a task or enabler is a cut candidate.
- **A decision-heavy task is being authored.** Troubleshooting, diagnosis, judgment under uncertainty, tasks where
  incumbents differ, and tasks with costly errors get CTA (Schaafstal et al., 2000; Velmahos et al., 2004).
- **An SME content draft arrives.** Treat an expert's procedure write-up, slide deck, or narrated demo as free
  recall with expected gaps (51-73% omission by step type; Sullivan et al., 2014) and probe it before building on it.
- **Learners pass tests but fail on the job.** Supervisor reports, practical-exam failures, or field errors after
  passing knowledge tests point to tasks or decisions the analysis missed; re-analyze those tasks' decision points.
- **Expert reasoning is opaque to the learner.** When learners ask "how did you know to check that first?" and the
  lesson has no answer, the decision was never elicited; run CTA on that step.
- **Assessment planning starts.** Build the blueprint from task conditions and standards plus the recovered
  decisions, so the test samples the job, not the textbook.

## When NOT to apply

- **The task is simple, observable, and low in decisions.** A fixed procedure with visible steps (a torque sequence
  printed in the manual) is captured by behavioral task analysis and the document; CTA interviews add cost, not content.
- **The target job is undefined or changing faster than the analysis.** Emerging roles have no experienced
  incumbents to elicit. Set provisional targets with
  [backward-design-ubd](../02-instructional-design/backward-design-ubd.md) and schedule re-analysis.
- **No access to expert performers.** If only managers, instructors, or documents are available, label the output a
  document-based task list, not job analysis or CTA; supervisors usually lack the expertise (Norton, 1997).
- **The content is pure verbal recall.** Definitions, part names, and regulation numbers hold no decisions to
  elicit; use retrieval practice ([testing-effect](../01-learning-science/testing-effect.md)).
- **The performance gap is motor feel.** CTA elicits cues and decisions, not force, tactile feedback, or hand-eye
  coordination. Elicit the cognitive steps, then build the motor component through practice with feedback.

## How to apply

- **Run the job analysis with incumbents.** Convene 5-12 current top performers (not their managers) with a
  facilitator. Write tasks as observable units of work with a clear start and end ("Perform transponder tests," not
  "Understand transponders"); list knowledge, skills, tools, and worker behaviors as separate enablers (Norton,
  1997; MIL-HDBK-29612-2A, sec. 6.6-6.7).
- **Verify and select tasks.** Survey a wider incumbent sample on criticality, frequency, difficulty, and percent
  performing; train high-criticality or high-difficulty tasks formally and leave the rest to job aids or on-the-job
  training (MIL-HDBK-29612-2A, sec. 6.8).
- **Analyze each selected task behaviorally.** Record steps, sequence, conditions (tools, references, supervision,
  environment), the cue that starts each step, the standard, and the governing document for every step.
- **Flag decision points for CTA.** Mark each step where incumbents said "it depends," where novices err, or where
  the manual says "troubleshoot" or "as required." Spend CTA effort there, not everywhere.
- **Elicit with probes, not a request to write it down.** Interview each expert separately: free recall first, then
  probe each step ("What do you look at first? What tells you it is this and not that? What makes you stop? What do
  new people get wrong?"). For judgment tasks, walk a real past incident with the critical decision method.
- **Pool and verify.** Use two or three experts per task at minimum, merge accounts into a gold-standard list of
  actions, decisions, cues, and standards, and have a non-contributing expert walk it on a real task (Chao &
  Salvendy, 1994; Sullivan et al., 2014).
- **Write each decision as cue, decision, action, standard.** "If reply rate drops when the coax is flexed, suspect
  that connector; repair and retest to the Appendix F limits" is teachable and testable; "use judgment" is not.
- **Map tasks and decisions to lessons and assessments.** Each task becomes an objective with conditions, standard,
  and a performance assessment; each recovered decision becomes a scenario, sim branch, or worked example where the
  cue appears and the learner must decide. Build small modules with objectives and embedded questions (the NEETS
  pattern), keep a trace table from task ID to lesson element to item to source document, and route decisions
  into supportive or procedural information with [4c-id-model](../02-instructional-design/4c-id-model.md).

## Common misapplications

- **Treating an SME's write-up as the analysis.** An expert's procedure written from memory is the free-recall
  baseline, which omitted most decision steps in Sullivan et al. (2014).
- **Single-expert CTA.** Experts automate different subgoals; coverage rises only when accounts are pooled (Chao &
  Salvendy, 1994, as summarized by Clark et al., 2008).
- **Topic lists dressed as task lists.** "Understand Ohm's law" is an enabler, not a task. A task has an observable
  output and a standard; a chart of topics yields a textbook, not training.
- **Stopping at observable steps.** Behavioral analysis alone on troubleshooting tasks yields procedures that work
  until something goes wrong; traditionally trained technicians solved half as many faults (Schaafstal et al., 2000).
- **Dumping the expert decision set on novices.** Recovered rules are content, not a delivery plan; sequence them
  with [worked-example-effect](../01-learning-science/worked-example-effect.md) and
  [expertise-reversal](../01-learning-science/expertise-reversal.md).
- **Quoting "experts omit 70%" as a constant.** It is a rounded summary; measure your own omission rate by comparing
  each expert's free recall with the pooled list.
- **Analysis without traceability or upkeep.** A chart never mapped to lessons, or never re-verified after
  equipment or regulation changes, drifts from the job.

## Examples across domains

**Avionics (CAET lesson): from duty chart to an intermittent-transponder lesson.**

*Setup.* The CAET designer builds the task list for an entry-level avionics technician. A DACUM-style panel of
eight working technicians from Part 145 repair stations spends two days with a facilitator; one duty is "C.
Install and test communication and surveillance systems," with tasks including C-1 "Install VHF comm antenna and
coaxial cable," C-4 "Perform transponder and altitude encoder tests," and C-5 "Verify ADS-B Out performance."
The incumbent survey rates C-4 high on criticality and frequency: 14 CFR 91.413 requires Part 43 Appendix F
tests every 24 calendar months and an Appendix E paragraph (c) check after maintenance that could introduce data
correspondence error. Behavioral analysis lists the Appendix F checks (reply frequency, suppression, receiver
sensitivity, RF peak output power) and the 125-foot limit in 14 CFR 91.217 between reported altitude and the
altimeter.

*CTA on the troubleshooting task.* The designer interviews three senior technicians separately on the squawk
"ATC reports intermittent transponder replies." Free recall is one line: check the antenna and coax, then bench
the unit. Probing recovers the hidden decisions: first ask whether ATC lost the whole target or only the
altitude (altitude-only points to the encoder or air data path; whole-target loss points to the RF path); ask
whether dropouts track turns or a recent install near the antenna; on the ramp test set, watch reply percentage
while flexing the coax at each connector; then check the antenna's bond to the skin and the suppression line
shared with the DME. A fourth technician who did not contribute walks the merged list on a shop aircraft and
adds one cue.

*Mapping and follow-up.* Task C-4 becomes a narrated procedure lesson with an Appendix F job aid and a
ramp-test-set simulation. Each recovered decision becomes a branch in a troubleshooting sim: the learner reads
the squawk, picks a first check, and sees the consequence. Every item carries the task ID, condition, standard,
and source document (14 CFR 91.413 and 91.217, Part 43 Appendices E and F, AC 43.13-1B coax, connector, and
bonding practices, the transponder installation manual). Supervisor reports on graduates at 90 days feed the
next re-analysis of duty C.

**Surgical skills training: central venous catheter placement for new interns.**

*Setup.* A residency program teaches central venous catheterization by "see one, do one, teach one": an
attending explains the procedure from memory and demonstrates, and interns learn on patients. The program's
inventory of procedures interns must perform independently is rated by attendings on criticality and frequency;
central line placement ranks high on both, so it is selected for a formal skills-lab course on the design
Velmahos et al. (2004) tested, replacing "see one, do one" on patients as the first exposure.

*CTA on the procedure.* Two or three attending surgeons are interviewed separately, free recall first, then
probed step by step; the analyst merges their accounts into a gold-standard list of clinical knowledge, action,
and decision steps, the method Sullivan et al. (2014) used. Probing recovers decisions attendings skip in a
routine demonstration: choosing the site from patient factors, how many unsuccessful needle passes to allow
before redirecting or changing sites, confirming venous rather than arterial access before dilating, never
releasing the guidewire, and ordering a chest radiograph after an internal jugular or subclavian line to confirm
tip position and exclude pneumothorax.

*Mapping and follow-up.* The list becomes a 3-hour inanimate-model course: each action step is demonstrated and
practiced, each decision becomes a scripted scenario on the model ("no flash after the second pass: what now?"),
and the same list generates the observation checklist later used on patients. Velmahos et al. (2004) reported
12.6 vs. 7.5 of 14 checklist items and 3.3 vs. 6.4 attempts to find the vein for this design. The program tracks
the same checklist and attempt counts on each intern's first supervised placements and re-runs the CTA when
ultrasound guidance or a new kit changes the steps.

## Quality signal

The runtime knows the analysis is working when (a) every lesson element and assessment item traces to a task ID on a verified chart and every high-criticality task has a performance assessment; (b) a non-contributing expert walking the pooled list adds fewer than 10% new decision steps, and the pooled list holds more decision steps than any single expert's free recall; and (c) learners on the CTA-based version beat the prior version on a held-out performance task by Hedges' g of at least 0.5, below the 0.871 mean Tofel-Grehl and Feldon (2013) report, with supervisor ratings at 90 days as the transfer check.

## Cross-references

- See [4c-id-model](../02-instructional-design/4c-id-model.md) for routing recovered knowledge into supportive information, procedural information, and task classes.
- See [action-mapping-performance-analysis](../02-instructional-design/action-mapping-performance-analysis.md) for deciding whether a performance gap is a training problem before analyzing tasks.
- See [troubleshooting-instruction](../04-delivery-patterns/troubleshooting-instruction.md) for teaching the structured troubleshooting strategy that CTA of fault-finding experts recovers.
- See [competency-based-training-assessment](../03-assessment-science/competency-based-training-assessment.md) for turning task conditions and standards into competency assessments.
- See [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md) for delivering recovered decisions as cue-rich scenarios and branches.
- See [worked-example-effect](../01-learning-science/worked-example-effect.md) and [expertise-reversal](../01-learning-science/expertise-reversal.md) for sequencing the expert decision set for novices.
- See [cognitive-apprenticeship-mentor](../05-tutor-personas/cognitive-apprenticeship-mentor.md) for making elicited expert thinking visible during delivery.
- See [backward-design-ubd](../02-instructional-design/backward-design-ubd.md) for aligning the task list with the assessment evidence that proves performance.
