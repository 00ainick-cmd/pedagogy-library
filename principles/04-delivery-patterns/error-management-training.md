---
id: error-management-training
title: Error Management Training and Learning from Incident Cases
category: 04-delivery-patterns
aliases: [error-management, error-framing, learning-from-errors, war-stories, erroneous-examples, after-event-review]
evidence_strength: moderate
effect_size: "Cohen's d = 0.44 overall across 24 studies (N = 2,183); d = 0.56 on posttraining transfer, d = 0.80 on adaptive transfer, d = 0.20 on analogical transfer, within-training effect not significant (Keith & Frese 2008 meta-analysis); d = 1.1 on transfer to real patients after simulation-based ultrasound training (Dyre et al. 2017 RCT)"
key_sources:
  - "Keith, N., & Frese, M. (2008). Effectiveness of error management training: A meta-analysis. Journal of Applied Psychology, 93(1), 59-69. doi:10.1037/0021-9010.93.1.59"
  - "Keith, N., & Frese, M. (2005). Self-regulation in error management training: Emotion control and metacognition as mediators of performance effects. Journal of Applied Psychology, 90(4), 677-691. doi:10.1037/0021-9010.90.4.677"
  - "Dyre, L., Tabor, A., Ringsted, C., & Tolsgaard, M. G. (2017). Imperfect practice makes perfect: Error management training improves transfer of learning. Medical Education, 51(2), 196-206. doi:10.1111/medu.13208"
  - "Loh, V., Andrews, S., Hesketh, B., & Griffin, B. (2013). The moderating effect of individual differences in error-management training: Who learns from mistakes? Human Factors, 55(2), 435-448. doi:10.1177/0018720812451856"
  - "Joung, W., Hesketh, B., & Neal, A. (2006). Using \"war stories\" to train for adaptive performance: Is it better to learn from error or success? Applied Psychology: An International Review, 55(2), 282-302. doi:10.1111/j.1464-0597.2006.00244.x"
  - "Ellis, S., & Davidi, I. (2005). After-event reviews: Drawing lessons from successful and failed experience. Journal of Applied Psychology, 90(5), 857-871. doi:10.1037/0021-9010.90.5.857"
  - "Große, C. S., & Renkl, A. (2007). Finding and fixing errors in worked examples: Can this foster learning outcomes? Learning and Instruction, 17(6), 612-634. doi:10.1016/j.learninstruc.2007.09.008"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer]
contraindicated_when:
  - learner_state.first_exposure
  - learner_state.overwhelmed
  - material.unclear_task_feedback
  - task_type.live_high_consequence_equipment
  - task_type.graded_within_session_performance
runtime_triggers:
  - transfer_is_the_target_outcome
  - simulation_practice_segment_planned
  - incident_case_available
  - learner_has_prerequisite_schema
  - learner_error_committed
  - practice_run_completed
related: [error-analysis-corrective-feedback, productive-failure, scenario-based-learning, simulation-fidelity, human-factors-crm-mrm-training, transfer-of-learning, worked-example-effect, predict-before-reveal, troubleshooting-instruction, self-efficacy]
---

# Error Management Training and Learning from Incident Cases

## One-line claim

When the goal is adaptive transfer to novel problems, let learners make and analyze errors during safe practice under explicit instructions that errors are expected and informative, and have them dissect other people's documented errors with a structured analysis (what happened, why, which defense failed, what would you do); both beat error-avoidant training on posttraining transfer, though not on performance during training itself.

## Evidence base

Error management training (EMT) combines two elements: active exploration with minimal step-by-step guidance, and error management instructions telling learners that errors will happen and carry information about where their mental model is wrong. Keith and Frese (2005) in *Journal of Applied Psychology* had 55 students learn a computer program under error-avoidant training, EMT, or EMT plus a metacognitive module; both EMT versions beat error-avoidant training on transfer (d = 0.75), and emotion control plus metacognitive activity coded from verbal protocols mediated the difference. Ivancic and Hesketh (2000) in *Ergonomics* found the same pattern in a driving simulator: error training beat errorless training on analogous transfer tests and on strategy use in a novel situation, and it lowered end-of-training self-confidence; guided error training, in which learners watched a video driver err, produced only weak analogous benefit and no novel-test transfer. Active processing of the error, not mere exposure to it, carries the effect. This chapter differs from [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md), where the tutor diagnoses and corrects the learner's own error, and from [productive-failure](../04-delivery-patterns/productive-failure.md), where learners invent solutions before canonical instruction on a concept: here the skill has been introduced, and errors are planned training material.

Keith and Frese's (2008) meta-analysis of 24 studies (N = 2,183) reported a mean d = 0.44 favoring EMT over proceduralized error-avoidant or exploratory training. The effect was not significant on within-training performance, was d = 0.56 on posttraining transfer, and rose to d = 0.80 on adaptive transfer tasks structurally distinct from training versus d = 0.20 on analogical tasks. EMT still beat exploration without error encouragement (d = 0.19), so the framing adds to exploration; tasks with clear feedback yielded d = 0.56 while unclear-feedback tasks showed no significant effect. Dyre, Tabor, Ringsted, and Tolsgaard (2017) extended EMT beyond software: 60 medical students with no ultrasound experience, randomized to error management or error avoidance instructions in 3 hours of simulator training, scored 67.7% versus 51.7% on a transfer test with real patients 7-10 days later (d = 1.1). The vicarious arm rests on smaller studies. Joung, Hesketh, and Neal (2006) trained 59 experienced firefighters in incident command with real-event war stories showing management errors and their consequences versus the same cases managed without errors; the error-story group identified more problems in new scenarios, which the authors describe as some support for the hypothesis. Ellis and Davidi (2005) showed soldiers in successive navigation exercises improved more when after-event reviews covered both failures and successes than failures only. Große and Renkl (2007) found that mixing incorrect with correct worked examples fostered far transfer only for learners with favorable prior knowledge; weak-prior-knowledge learners did better with correct examples only.

Evidence strength is moderate. The meta-analysis is one synthesis, and 21 of its 24 studies taught software skills; Keith and Frese (2008) found no study measuring on-the-job performance. Loh, Andrews, Hesketh, and Griffin (2013) randomized 164 trainees on a simulated air traffic control task with exploration and task information held constant: error encouragement beat error avoidance on transfer but did not beat neutral instructions, higher-ability trainees benefited most from an error focus, and error-avoidance instructions hurt lower-ability and less open trainees. The defensible core is active practice with clear feedback, structured analysis of errors, and never instructing learners to avoid errors; the increment from positive framing alone is smaller and learner-dependent.

## When to apply

- **Adaptive transfer is the target outcome** - The learner must later handle faults, configurations,
  or situations the course cannot enumerate. EMT's advantage is largest on structurally novel tasks
  (d = 0.80) and smallest on near-copies of training tasks (Keith & Frese, 2008).
- **A simulation practice segment is being planned** - A simulator, virtual bench, or sandbox can let
  errors play out without cost. Plan the segment as error-managed from the start (Dyre et al., 2017).
- **A documented incident case exists for the topic** - An accident report, incident review, or
  internal event write-up with a traceable chain of decisions is available. Build a structured
  error-case analysis rather than a success story (Joung et al., 2006).
- **The learner has the prerequisite schema** - The correct procedure or principle has been taught
  and checked. Erroneous examples aided far transfer only for learners with sound prior knowledge;
  others did better with correct examples only (Große & Renkl, 2007).
- **The learner errs inside an error-framed segment** - Prompt the learner's own analysis first
  (what were you trying to do, what happened, what does it tell you, what next) before supplying a
  correction; metacognition mediates the EMT effect (Keith & Frese, 2005).
- **A practice run or exercise has just finished** - Run an after-event review the same session,
  covering what went wrong and what went right (Ellis & Davidi, 2005).

## When NOT to apply

- **First exposure with no schema** - Pretest shows the learner cannot state the correct procedure or
  principle. Errors and erroneous examples then have no reference to be compared against; teach with
  correct worked examples first (see [worked-example-effect](../01-learning-science/worked-example-effect.md)).
- **Learner overwhelmed or anxious about errors** - Repeated failed attempts, self-critical remarks,
  or quitting mid-task. Emotion control is one of the two mediators (Keith & Frese, 2005); restore
  control with smaller tasks or vicarious cases before active error practice.
- **The task gives unclear feedback** - The learner cannot tell from the system response that an
  error occurred or what caused it. Unclear-feedback studies showed no significant EMT effect
  (Keith & Frese, 2008); add feedback to the sim or use guided practice.
- **Errors would occur on live, high-consequence equipment** - A real aircraft, patient, energized
  circuit, or fireline. Move active errors into a simulation or use documented errors of others;
  Keith and Frese (2008) suggest vicarious EMT where active error practice is not viable.
- **The session itself is the graded performance** - A checkride, practical exam, or certification
  task scored on in-session errors. EMT does not improve within-training performance (Keith &
  Frese, 2008); use it in the practice block before, never inside, the assessment.

## How to apply

- **Write the error management instructions and repeat them** - Open the segment with two or three
  sentences stating that errors are expected, are information about the learner's model, and are
  safe here; restate at each error. Keith and Frese (2008) report this is how EMT studies did it.
- **Keep the job standard visibly separate** - State that the practice bench welcomes errors and the
  job standard does not; framing licenses exploration, not sloppy procedure. Assess to the real standard.
- **Engineer errors that teach** - Build the sim so likely real-world errors are possible and each
  produces the indication a practitioner would see. A task that hides the error defeats the method.
- **Structure every incident case the same way** - Timeline, the error, the failed defenses, and a
  decision point where the learner commits an answer before the reveal (see
  [predict-before-reveal](../04-delivery-patterns/predict-before-reveal.md)). Passive viewing of
  errors transfers weakly (Ivancic & Hesketh, 2000); the learner must analyze.
- **Sequence erroneous examples after correct ones and flag the error** - Ask the learner to find
  the error, fix it, and name the principle it breaks; incorrect examples reduced principle-based
  self-explanation in Große and Renkl (2007), so require the principle explicitly.
- **Review successes as well as failures** - After a run, ask what went wrong and why, and what went
  right and why. After a success, the review of wrong actions taught most; after a failure, any
  review helped (Ellis, Mendel, & Nir, 2006).
- **Measure on a novel posttraining task** - Judge the segment by a structurally different transfer
  task given afterward (see [transfer-of-learning](../01-learning-science/transfer-of-learning.md)),
  not by in-practice error counts, which EMT is expected to raise.

## Common misapplications

- **Framing without exploration, or exploration without framing** - Positive error talk on top of a
  click-by-click tutorial, or a sandbox with no framing. Both elements contributed in the meta-analysis.
- **Error framing read as permission for sloppiness** - When practice and job standard blur, learners
  carry the casual tolerance to the ramp. Name the boundary every time.
- **Incident videos played passively** - Watching someone err without analysis gave weak analogous
  benefit and no novel transfer (Ivancic & Hesketh, 2000). Require the four-step analysis.
- **Blame-the-individual case pages** - Ending the analysis at "the mechanic forgot" skips the
  defenses that should have caught the error. Trace every barrier that failed.
- **Judging the module by practice-phase errors** - EMT learners look worse during training by
  design; cutting the method for that reason discards its transfer advantage.

## Examples across domains

**Avionics (CAET lesson): Aeroperú 603 static-port incident page and pitot-static bench.**

*Setup.* The designer builds an incident page for the CAET pitot-static module, placed after
learners have passed the pitot-static fundamentals lesson. The source is the final report of Peru's
Directorate General of Air Transport Accident Investigation Board on Aeroperú Flight 603, a Boeing
757-200 (N52AW) lost on 2 October 1996 (English translation on SKYbrary).

*Incident page.* Four panels the learner works, not reads. (1) Timeline: during the ground stop the
lower forward fuselage was polished with the static ports covered by masking tape, the normal
procedure; after a night takeoff from Lima the crew found the altimeters not responding, then got
conflicting overspeed and stall warnings; about 29 minutes after takeoff the aircraft struck the sea
48 NM out and all 70 aboard died. (2) The error: the tape was never removed. (3) Failed defenses, per
the report's conclusions: the polishing staff, a possible quality-control lapse at the end of the
work, a line mechanic's incorrect pre-flight visual inspection, and the crew walkaround. (4) Decision,
committed before the reveal: "You signed for the polish. What do you check before return to service?"
The expert answer: a tape and cover count-out and count-in record, a walkaround of every static port
on both sides and each pitot probe, and the regulatory tie. 14 CFR 43.13(b) requires the aircraft be
left at least equal to its original condition; 43.5 bars return to service until the 43.9 record
entry is made; if the static system was opened and closed, 91.411(a)(2) requires the Part 43
Appendix E test, which begins with freedom from restrictions.

*Error-managed bench and follow-up.* The learner then runs a virtual pitot-static test set. The
opening card says errors on this bench are expected and are how the skill is built, and the aircraft
on the ramp gets none. The sim lets the learner leave a port masked, cross-connect the pitot and static
hoses, or change pressure faster than the test set's rate limit; each error shows what a technician
would see (an altimeter that does not move, an altimeter tracking the pitot channel, a rate warning).
At each error the sim asks what the learner intended, what the instrument showed, and what to try next.
The transfer task is structurally new: a static line loose at a fitting behind the panel, scored on
diagnosis and the return-to-service decision, followed by an after-event review of what went right
and wrong. A second case page returns at +7 days.

**Wildland firefighting: war stories for incident-command trainees.**

*Setup.* A wildland agency is building a fireline decision-making module for squad leaders moving up
to crew boss, who already know LCES (lookouts, communications, escape routes, safety zones). Command
errors on a live fire are not an option, so error exposure is vicarious first, then simulated.

*War-story analysis.* Following Joung et al. (2006), the designer writes three cases as composites
of published entrapment and near-miss reviews, each in its error version: a lookout loses sight of
the fire when the crew drops below a ridge, the escape route was never walked and timed, and the
afternoon wind shift arrives while the crew is committed. Trainees work each case in four steps:
timeline, why each decision made sense at the time, which LCES element failed and when, and what
they would order at the decision point. Each trainee commits an order in writing before the
facilitator reveals what the review concluded; the facilitator keeps the analysis on failed
defenses and conditions, not on blaming the crew boss.

*Error-managed practice and follow-up.* Trainees then command a sand-table assignment in a different
fuel type and terrain, the structurally new transfer task. The facilitator states up front that poor
calls on the table are expected and will be allowed to play out, and that the fireline standard is
unchanged. Runs are scored on problems identified and the adequacy of the chosen course of action. An
after-action review closes each run, covering what went right as well as what went wrong (Ellis &
Davidi, 2005), and a new case opens each refresher session before fire season.

## Quality signal

On a structurally different transfer task given after the module, learners from the error-managed version should outscore an error-avoidant comparison cohort by d of at least 0.5, the band Keith and Frese (2008) report for posttraining transfer (d = 0.56); higher in-practice error counts are expected and are not a failure signal. For incident pages, on an unseen case at least 80% of learners should name two or more failed defenses and one check that would have caught the error; below that, the page is teaching the story, not the analysis.

## Cross-references

- See [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md) for tutor feedback on the learner's own errors, which follows the learner's analysis in an error-managed segment.
- See [productive-failure](../04-delivery-patterns/productive-failure.md) for failure before instruction on a new concept, the neighboring but distinct pattern.
- See [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md) for building the case and decision-point structure an incident page uses.
- See [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for designing the sim so errors produce realistic, diagnosable indications.
- See [human-factors-crm-mrm-training](../02-instructional-design/human-factors-crm-mrm-training.md) for the maintenance human-factors frame (defenses, error chains) that incident pages teach.
- See [troubleshooting-instruction](../04-delivery-patterns/troubleshooting-instruction.md) for the fault-isolation practice that adaptive transfer tasks draw on.
- See [transfer-of-learning](../01-learning-science/transfer-of-learning.md) for designing the near and far transfer tasks that measure this method.
- See [self-efficacy](../06-motivation-engagement/self-efficacy.md) for managing the confidence dip error training produces.
