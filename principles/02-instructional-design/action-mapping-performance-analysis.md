---
id: action-mapping-performance-analysis
title: Action Mapping and Performance-Focused Needs Analysis
category: 02-instructional-design
aliases: [action-mapping, performance-analysis, training-needs-analysis, behavior-engineering-model]
evidence_strength: moderate
# effect_size null: no controlled study compares an action-mapped course with a
# conventionally designed one, so the method has no effect size of its own. The
# verified context numbers (training d = 0.60-0.63 by criterion, Arthur et al. 2003;
# transfer climate rho = .27, Blume et al. 2010) describe training and transfer in
# general and are reported in the Evidence base, not here.
effect_size: null
key_sources:
  - "Salas, E., Tannenbaum, S. I., Kraiger, K., & Smith-Jentsch, K. A. (2012). The science of training and development in organizations: What matters in practice. Psychological Science in the Public Interest, 13(2), 74-101. doi:10.1177/1529100612436661"
  - "Arthur, W., Jr., Bennett, W., Jr., Edens, P. S., & Bell, S. T. (2003). Effectiveness of training in organizations: A meta-analysis of design and evaluation features. Journal of Applied Psychology, 88(2), 234-245. doi:10.1037/0021-9010.88.2.234"
  - "Blume, B. D., Ford, J. K., Baldwin, T. T., & Huang, J. L. (2010). Transfer of training: A meta-analytic review. Journal of Management, 36(4), 1065-1105. doi:10.1177/0149206309352880"
  - "Baldwin, T. T., & Ford, J. K. (1988). Transfer of training: A review and directions for future research. Personnel Psychology, 41(1), 63-105. doi:10.1111/j.1744-6570.1988.tb00632.x"
  - "Burke, L. A., & Hutchins, H. M. (2007). Training transfer: An integrative literature review. Human Resource Development Review, 6(3), 263-296. doi:10.1177/1534484307303035"
  - "Taylor, P. J., Russ-Eft, D. F., & Chan, D. W. L. (2005). A meta-analytic review of behavior modeling training. Journal of Applied Psychology, 90(4), 692-709. doi:10.1037/0021-9010.90.4.692"
  - "Gilbert, T. F. (1978). Human competence: Engineering worthy performance. New York, NY: McGraw-Hill."
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer, decision]
contraindicated_when:
  - task_type.prerequisite_theory_building
  - material.externally_mandated_content
  - task_type.exploratory_inquiry_emergent_outcomes
  - material.unstable_target_specification
  - task_type.single_session_one_shot
runtime_triggers:
  - training_request_received
  - performance_problem_reported
  - sme_content_dump_received
  - practice_activity_design_started
  - transfer_gap_detected
related: [backward-design-ubd, cognitive-task-analysis, scenario-based-learning, training-evaluation-kirkpatrick-ltem, transfer-of-learning, 4c-id-model, cognitive-load-theory, error-management-training]
---

# Action Mapping and Performance-Focused Needs Analysis

## One-line claim

Design training backward from a measured on-the-job result: name the observable actions that produce it, diagnose why people do not take those actions now, train only the knowledge and skill gaps with one realistic practice activity per action plus the minimum information that practice needs, and route every information, tool, time, or incentive barrier to a non-training fix with an owner.

## Evidence base

The empirical root of performance-focused design is the transfer-of-training literature. Baldwin and Ford's (1988) review in *Personnel Psychology* defined transfer as the generalization of trained material to the job plus its maintenance over time, and modeled it as the joint product of three inputs: trainee characteristics, training design, and the work environment. A course controls only the second input, so a design process that never examines the third cannot predict whether learning becomes job behavior. Three practitioner frameworks turned that model into design procedure; they are practitioner sources, not experimentally tested interventions. Gilbert's (1978) Behavior Engineering Model in *Human Competence* sorts the causes of a performance gap into six cells, three in the environment (data or information, instruments or resources, incentives) and three in the person (knowledge, capacity, motives), and directs the analyst to check the environment cells first because they are usually the cheaper fix. Mager and Pipe's *Analyzing Performance Problems* (1970) supplies the field's standard diagnostic question: could the person do it correctly if their life depended on it? If yes, the gap is not a skill deficiency and training will not close it. Cathy Moore's action mapping (her practitioner book *Map It*, 2017, and her blog) packages both into a design workflow: a business goal stated as a measure the organization already tracks, the observable actions that move it, a "why aren't they doing it" check across environment, knowledge, skill, and motivation, practice activities for the actions training can fix, and only the minimum information those activities require.

The modern evidence supports the parts of this workflow more than the workflow as a whole. Arthur, Bennett, Edens, and Bell's (2003) meta-analysis in the *Journal of Applied Psychology* (397 independent data points) found organizational training effective, with sample-weighted mean d = 0.60 for reaction criteria (k = 15), 0.63 for learning (k = 234), 0.62 for behavior (k = 122), and 0.62 for results (k = 26), and found that effectiveness varied with the delivery method, the skill or task trained, and the criterion. Two findings bear directly on this chapter. Only 6% of the data points (22 of 397) came from studies that reported any needs assessment, and those showed no clear pattern favoring more comprehensive analysis, with the authors cautioning that each comparison rested on 4 or fewer data points. Within-study comparisons also showed a substantial drop from learning to behavioral and results criteria, which the authors attribute to the favorability of the post-training environment, including whether trainees get the opportunity to perform. Blume, Ford, Baldwin, and Huang's (2010) meta-analysis of 89 studies in the *Journal of Management* quantified that environment: excluding same-source, same-measurement-context designs, transfer climate correlated with transfer at a corrected rho = .27 and supervisor support at .31 (small samples), comparable to trainee motivation (.23). Taylor, Russ-Eft, and Chan's (2005) meta-analysis of 117 behavior modeling training studies found transfer greatest when practice included trainee-generated scenarios, when trainees set goals, when their superiors were also trained, and when rewards and sanctions were instituted in the work environment: practice design and non-training environment changes both moved job behavior. Burke and Hutchins (2007) and Salas, Tannenbaum, Kraiger, and Smith-Jentsch (2012) reach the same synthesis: needs analysis should diagnose what must be trained, for whom, and in what organizational system, and what happens before and after the training event matters as much as the event itself.

Evidence strength is moderate for three reasons. First, no controlled study compares an action-mapped course with a conventionally designed one, so the method has no effect size of its own, and the Behavior Engineering Model and the Mager and Pipe flowchart are diagnostic frameworks, not validated causal models. Second, direct evidence that conducting a needs analysis improves outcomes is thin (Arthur et al., 2003), even though the components the analysis protects, practice-based design and work-environment support, are well supported. Third, the environment evidence is correlational and sensitive to measurement: Blume et al. (2010) found that same-source designs inflated the environment-transfer correlation from .23 to .54, that the relationship was .26 for open skills (leadership, interpersonal) but .04 for closed, rule-governed skills, and that organizational constraints (situational constraints, lack of autonomy) were measured in only two studies. For procedural technical work, the barriers most likely to matter (tools, information, time) therefore rest on the thinnest evidence. The operational rule follows: always run the barrier analysis, treat its conclusions as hypotheses to check against records and observation, and confirm the design by measuring the job result after release.

## When to apply

- **Training request received:** A stakeholder asks for "a course on X" or a lesson topic is assigned.
  Before outlining content, ask for the measure the organization already tracks that should move,
  its current value, and who must do what differently on the job.
- **Performance problem reported:** Error reports, comebacks, complaints, audit findings, or failed
  checks arrive with a request to "retrain." Run the barrier analysis first; a training fix for a
  tool or incentive problem yields learning without behavior change (Arthur et al., 2003).
- **SME content dump received:** A subject-matter expert hands over a manual, a slide deck, or a full
  regulation as "the content." Map each chunk to an action; content that supports no action goes to
  a reference resource, not into the lesson narration.
- **Practice activity design started:** For each action the analysis routes to training, design the
  practice before writing any explanation, so the information is chosen to serve the activity.
- **Transfer gap detected:** Learners pass the end-of-course assessment but job audits or the target
  measure do not move. Re-run the analysis on the environment cells (information, tools, time,
  consequences, supervisor support) before adding more training (Blume et al., 2010).

## When NOT to apply

- **Building prerequisite theory for later far transfer:** Early units that build a conceptual
  foundation (circuit theory, statistics, anatomy) serve many later actions and the troubleshooting of
  novel cases. A strict "only what this activity needs" cut starves the causal model adaptive work
  depends on. Map at the program level and keep the theory as supportive information (see
  [4c-id-model](../02-instructional-design/4c-id-model.md)).
- **Content mandated by a regulator or accreditor:** When a syllabus, curriculum, or knowledge test is
  fixed by external authority, the designer cannot drop "nice to know" items. Use the method to design
  practice and sequence, never to delete required content.
- **Outcomes legitimately emergent:** Open-ended inquiry, research training, and studio work have no
  observable target action that can be named in advance; forcing a business goal onto them
  forecloses the inquiry.
- **Goal unstable or contested:** If stakeholders cannot name the measure or keep changing it, the map
  has no root. Resolve the goal first; action mapping is a design method, not a goal-negotiation method.
- **Single tutoring turn or one-off question:** A learner asking how to read one chart needs an answer
  and a practice item, not a needs analysis. The analysis runs at course and lesson design time; at
  runtime the tutor uses its outputs.

## How to apply

- **Write the goal as a measure the organization already tracks.** Format: "[measure] moves from
  [baseline] to [target] by [date] because [who] [does these actions]." Reject "learners will
  understand X" and "raise awareness"; neither names an observable result.
- **List observable actions in the job's own words, then prioritize.** Use verbs a supervisor could
  watch (select, verify, route, record, ask, decline). Mark the 3-7 actions that most affect the
  measure and the decision point inside each; use
  [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) to surface the cues
  experts use but do not report.
- **Ask "why aren't they doing it now?" for every priority action, environment first.** Walk Gilbert's
  cells in order: information (clear standard, current data, feedback), instruments (tools, parts,
  time), incentives (consequences of doing it right versus fast), then knowledge, skill, motivation.
  Apply the Mager and Pipe test: if experienced performers do it correctly when it clearly matters, it
  is not a skill gap. Check against records and observation, not the requester's opinion alone;
  same-source reports inflate environment effects (Blume et al., 2010).
- **Route each barrier and write the routing down.** Knowledge and skill gaps go to training.
  Information, tool, time, and incentive barriers go to a non-training recommendation with a named
  owner and date: job aid, checklist, tool control, policy fix, supervisor sign-off, revised metric.
  Transfer was greatest when superiors were trained and rewards and sanctions were set in the work
  environment (Taylor et al., 2005), so these fixes are part of the design, not an appendix.
- **Design one realistic practice activity per trained action.** The learner makes the job decision
  with the job's cues, constraints, and consequences, and feedback shows the consequence of the
  choice, not just "incorrect." Build wrong options from the real errors the analysis found (see
  [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md)).
- **Attach only the information each activity requires, at the point of need.** Give the rule, table,
  or worked example the decision needs, as a job aid or link inside the activity. Move background and
  exhaustive reference to an optional resource. For novices, place a short worked example ahead of the
  first decision to hold load in check (see
  [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md)).
- **Plan evaluation against the original goal.** Measure the trained actions on the job (audit,
  observation, work sample) and the target measure at a fixed interval after release, not only the
  end-of-course score (see
  [training-evaluation-kirkpatrick-ltem](../03-assessment-science/training-evaluation-kirkpatrick-ltem.md)).

## Common misapplications

- **Goal written as a learning objective.** "Technicians will understand splicing" is a topic. With no
  measure and baseline, nothing downstream can be checked, and every content request looks justified.
- **Skipping the "why" step.** Treating every gap as a knowledge gap builds a course for a tool, time,
  or incentive problem; learners pass the quiz and job behavior stays flat, the learning-to-behavior
  drop Arthur et al. (2003) observed within studies.
- **Calling a recall quiz a practice activity.** A multiple-choice item on a rule's wording does not
  rehearse the action. The learner must make the job decision from job cues.
- **Reading "minimum information" as "no theory."** When an action requires judgment on unfamiliar
  cases, the causal explanation is part of the minimum. Cutting it produces rule-followers who fail on
  the first case the rules did not anticipate (see
  [transfer-of-learning](../01-learning-science/transfer-of-learning.md)).
- **Non-training fixes with no owner.** A recommendation list no manager has agreed to own is no fix;
  the barrier returns as a transfer gap and the course takes the blame.
- **Novices dropped into scenarios cold.** Practice-first design does not mean information-never; an
  entry-level learner facing a branching scenario with no model is guessing (see
  [error-management-training](../04-delivery-patterns/error-management-training.md) for structured
  error exposure).

## Examples across domains

**Avionics (CAET lesson): Mapping a wire harness repair lesson to AC 43.13-1B before building it.**

*Setup.* A partner repair station asks AEA for "a wiring module" for its entry-level technicians. The CAET lesson designer asks for the measure first: the shop's quality log shows 14 wiring-related comebacks and squawks in six months, most traced to splice and terminal repairs. Goal: wiring comebacks fall to 5 or fewer per six months by the end of the next half because technicians select, crimp, verify, route, and record repairs to AC 43.13-1B Chapter 11 and the aircraft maintenance data. Actions: (1) choose the splice or terminal that matches the wire gauge, insulation, and location; (2) use the crimp tool and die the splice manufacturer specifies; (3) verify every crimp (strands fully in the barrel, insulation stopped at the correct point, indent correctly placed, pull test where specified); (4) place splices legally: no more than one splice in a wire segment between connectors or disconnect points, staggered within a bundle, kept out of high-vibration areas; (5) route and clamp the bundle clear of chafe points, control cables, and fluid lines; (6) record the work to 14 CFR 43.9.

*Barrier analysis and the build.* Comeback write-ups, a tool-crib check, and technician interviews show four barriers. The two shared crimpers have no go/no-go gauge record and one carries the wrong die (instruments: environment). Senior technicians skip the pull test when an aircraft is due out, yet perform it correctly when asked, so by the Mager and Pipe test this is an incentive problem, not a skill gap (environment). Newer technicians cannot tell an acceptable crimp from an under-crimped one (skill: training) and do not know the one-splice-per-segment limit (knowledge: training). The lesson builds three practice activities and nothing more: a spot-the-defect set of 24 macro photographs (good, under-crimped, insulation in the barrel, wrong die, flared or cut strands) in which the learner accepts or rejects each crimp and names the defect, with feedback showing the pull-test failure that defect causes; a choose-the-repair scenario where a chafed wire sits in a segment that already holds a splice, so the correct answer is replacing the segment to the next disconnect point; and a write-the-entry task scored against a model 43.9 record. Minimum information is a one-screen job aid (splice placement limits, crimp inspection criteria, tool-and-die matching table) plus a link to AC 43.13-1B Chapter 11; wire manufacturing history moves to an optional reference page.

*Follow-up.* The designer hands the shop a written non-training list with owners: tool control with a logged go/no-go gauge check per crimper and die, a crimp-verification and pull-test checkbox on the work order, a supervisor buy-back of each new technician's first five splices, and schedule time for verification. The module's mastery check is a fresh set of 12 crimp photographs and one new splice scenario; the shop reports the comeback count at 90 and 180 days. If learners pass and comebacks do not fall, the designer reopens the tool and schedule barriers before adding content.

**Retail customer service: Returns-desk escalations at a consumer electronics chain.**

*Setup.* A regional consumer electronics retailer asks for "customer service training" for returns-desk associates. The designer asks for the measure first: escalated return complaints run 11 per 1,000 returns, and operations wants 5 by quarter end. Goal: escalations fall to 5 per 1,000 returns by quarter end because associates diagnose, decide, and decline returns to policy without escalating the customer. Actions: (1) ask what the customer is trying to accomplish before processing anything; (2) check eligibility against policy (window, receipt, condition, category exceptions); (3) when the product works but setup failed, offer the fix or an exchange before the refund; (4) when policy says no, state the reason and offer the permitted alternative; (5) call the shift lead under the defined escalation conditions instead of arguing; (6) enter the correct reason code.

*Barrier analysis and the build.* Complaint logs, two mystery-shop visits, and associate interviews show four barriers. The printed policy binder and the point-of-sale prompts disagree on the holiday return window (information: environment). Associates are scored on transactions per hour, so a five-minute troubleshooting conversation counts against them (incentives: environment). Overrides need a manager key and the one manager is often on the sales floor (instruments: environment). Newer associates cannot decline a return without escalating the customer (skill: training) and do not know the three setup failures behind most "defective" TV and streaming-device returns (knowledge: training). The lesson builds three practice activities and nothing more: a branching conversation simulation with six return cases (for example, a TV brought back on day 32 of a 30-day window whose real problem is an input setting) in which the simulated customer reacts to each response and feedback shows the outcome; a decline-and-redirect drill in which the learner chooses wording for four policy refusals and sees the customer's reaction; and paired role-play from scenario cards, observed by the shift lead with a five-item checklist. Minimum information is a one-page policy decision table, the three setup fixes, and model phrases for declining; full policy text moves to the reference binder.

*Follow-up.* The designer hands operations a written non-training list with owners: reconcile the binder with the point-of-sale prompts, replace transactions per hour with a resolution measure at the returns desk, and give shift leads override authority. Shift leads are briefed on the same checklist so they coach to it on the floor, the supervisor condition Taylor et al. (2005) linked to stronger transfer. Escalations are tracked weekly for 12 weeks; if role-play checklist scores are high and escalations stay flat, the designer reopens the scoring incentive before adding training.

## Quality signal

The design is sound when every practice activity names the action it rehearses, every action names the measure it moves, and every diagnosed barrier has either a training activity or a non-training owner and date: no orphan content and no orphan barriers. The outcome signal is the target measure plus an on-the-job audit of the trained actions at 60-90 days after release. The fast diagnostic is the gap between course and job: practice performance high while audited job performance stays flat means an environment barrier was missed or a non-training fix did not land, so rerun the environment cells before adding training.

## Cross-references

- See [backward-design-ubd](../02-instructional-design/backward-design-ubd.md) for the outcome-first planning sequence that action mapping extends with a job-performance goal and a barrier analysis.
- See [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) for eliciting the hidden decision cues inside each mapped action.
- See [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md) for building the realistic decision practice each trained action requires.
- See [training-evaluation-kirkpatrick-ltem](../03-assessment-science/training-evaluation-kirkpatrick-ltem.md) for measuring behavior and results against the original goal.
- See [transfer-of-learning](../01-learning-science/transfer-of-learning.md) for the near and far transfer constructs that bound the "minimum information" cut.
- See [4c-id-model](../02-instructional-design/4c-id-model.md) for whole-task practice with supportive and procedural information, the structure that keeps theory available without front-loading it.
- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for why novices need a worked example before practice-first activities.
- See [error-management-training](../04-delivery-patterns/error-management-training.md) for structured exposure to the real errors the barrier analysis uncovers.
