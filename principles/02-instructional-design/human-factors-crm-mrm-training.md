---
id: human-factors-crm-mrm-training
title: Human Factors and Resource Management Training (CRM and MRM)
category: 02-instructional-design
aliases: [crew-resource-management, maintenance-resource-management, non-technical-skills-training, team-resource-management, dirty-dozen]
evidence_strength: moderate
effect_size: "Healthcare team training, corrected d: reactions 0.53 (k = 5, tentative), learning 0.89, transfer 0.67, results 0.37 (Hughes et al. 2016 meta-analysis); aviation CRM: reactions about 4 of 5, large effects on attitudes and behavior, medium on knowledge (O'Connor et al. 2008 meta-analysis, 16 studies); acute-care CRM: knowledge d = 1.05, attitudes d = 0.22, behavior d = 1.25, clinical outcomes not supported (O'Dea, O'Connor, & Keogh 2014 meta-analysis)"
key_sources:
  - "Salas, E., Wilson, K. A., Burke, C. S., & Wightman, D. C. (2006). Does crew resource management training work? An update, an extension, and some critical needs. Human Factors, 48(2), 392-412. doi:10.1518/001872006777724444"
  - "O'Connor, P., Campbell, J., Newon, J., Melton, J., Salas, E., & Wilson, K. A. (2008). Crew resource management training effectiveness: A meta-analysis and some critical needs. The International Journal of Aviation Psychology, 18(4), 353-368. doi:10.1080/10508410802347044"
  - "Hughes, A. M., Gregory, M. E., Joseph, D. L., Sonesh, S. C., Marlow, S. L., Lacerenza, C. N., Benishek, L. E., King, H. B., & Salas, E. (2016). Saving lives: A meta-analysis of team training in healthcare. Journal of Applied Psychology, 101(9), 1266-1304. doi:10.1037/apl0000120"
  - "Taylor, P. J., Russ-Eft, D. F., & Chan, D. W. (2005). A meta-analytic review of behavior modeling training. Journal of Applied Psychology, 90(4), 692-709. doi:10.1037/0021-9010.90.4.692"
  - "Taylor, J. C., & Patankar, M. S. (2001). Four generations of maintenance resource management programs in the United States: An analysis of the past, present, and future. Journal of Air Transportation World Wide, 6(2), 3-32."
  - "Federal Aviation Administration. (2000). Maintenance resource management training (Advisory Circular 120-72). U.S. Department of Transportation. https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-72.pdf"
  - "Federal Aviation Administration. (2023). Aviation maintenance technician handbook: General (FAA-H-8083-30B), Chapter 14: Human factors. U.S. Department of Transportation. https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/amtg_handbook.pdf"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer, retention, measurement]
contraindicated_when:
  - learner_state.first_exposure
  - task_type.performance_gap_not_skill_based
  - material.unstable_target_specification
  - task_type.single_session_one_shot
  - learner_state.workplace_sanctions_target_behavior
runtime_triggers:
  - nontechnical_error_pattern_detected
  - team_handoff_task_introduced
  - human_factors_course_design_started
  - recurrent_training_window_open
  - posttraining_behavior_decay_detected
related: [scenario-based-learning, error-management-training, training-evaluation-kirkpatrick-ltem, cognitive-task-analysis, action-mapping-performance-analysis, simulation-fidelity, competency-based-training-assessment, transfer-of-learning]
---

# Human Factors and Resource Management Training (CRM and MRM)

## One-line claim

Train non-technical skills (communication, situation awareness, teamwork, assertiveness, error management, fatigue and stress management, resistance to unsafe norms) as observable behaviors that learners practice in realistic scenarios, are scored on with behavioral markers, repeat on a recurrent schedule, and carry into a workplace that supports them; awareness lectures reliably move reactions and attitudes but not durable on-the-job behavior.

## Evidence base

Crew resource management (CRM) began as team training for flight crews and spread to aviation maintenance (as maintenance resource management, MRM), medicine, offshore oil, maritime, and nuclear operations. Salas, Wilson, Burke, and Wightman (2006) reviewed 28 published CRM evaluations across those domains against Kirkpatrick's four levels and found that trainees generally reacted positively, that learning and behavior results were mixed across and within domains, and that no study allowed a conclusion about safety; of 12 multilevel evaluations, only 4 were positive at every level measured. The two maintenance programs evaluated at all four levels showed fewer ground-damage incidents, yet attitudes declined when management did not support the training and behaviors regressed toward pretraining levels. Taylor and Patankar (2001) traced the same arc across four generations of US MRM programs: episodic teamwork courses, then focus-group programs, then individual awareness courses whose graduates reported passive coping intentions and, months later, frustration that managers and coworkers did not act on what the course promised; fourth-generation programs added skills modules and treated MRM as a long-term, behavior-based system. FAA Advisory Circular 120-72 (2000) codifies the design lesson: MRM courses should be highly interactive (group exercises, case studies, practice sessions), a shift-turnover module can pair a demonstration with role-play at a mock turnover meeting with facilitator feedback, and evaluation should cover reaction, learning, behavior, and organizational results, because most organizations stop at the first two.

O'Connor et al. (2008) meta-analyzed 16 aviation CRM evaluations: trainees rated CRM about 4 on a 5-point scale, effects on attitudes and behavior were large, the effect on knowledge was medium, and the authors called for more rigorous reporting. Hughes et al. (2016) meta-analyzed healthcare team training against Kirkpatrick's criteria and reported corrected effects of d = 0.53 for reactions (k = 5, tentative), 0.89 for learning, 0.67 for transfer, and 0.37 for results, with support for a sequential path in which learning drives transfer and transfer drives results. O'Dea, O'Connor, and Keogh (2014) found a similar pattern in acute-care CRM: knowledge d = 1.05, behavior d = 1.25, attitudes d = 0.22, and insufficient evidence for clinical outcomes. The method evidence comes from the wider training literature. Taylor, Russ-Eft, and Chan's (2005) meta-analysis of 117 behavior-modeling studies found effects largest for learning, smaller for job behavior, and smaller still for results; transfer was greatest when trainees saw both positive and negative models, practiced on scenarios they generated, set goals, had superiors who were also trained, and worked where rewards and sanctions backed the behavior. Hughes, Zajac, Woods, and Salas (2020) found that peer, supervisor, and organizational support each predicted transfer, with peer and supervisor support most strongly related to long-term sustainment.

Evidence strength is rated moderate. Most primary CRM studies are uncontrolled pre-post designs, behavior is often measured in a simulator soon after training, and organizational outcomes are rarely measured, so effect sizes shrink and uncertainty grows at each step from learning to job behavior to results. CRM-specific moderator tests do not settle method choices: Hughes et al. (2016) found no reliable advantage for multiple strategies over one strategy or for high over low physical fidelity, and programs coded as including feedback showed smaller overall effects, a result the authors call counterintuitive. The design moves below therefore rest on the behavior-modeling and transfer-climate meta-analyses plus FAA guidance, not on a controlled CRM trial of lecture versus practice. The maintenance "Dirty Dozen" (lack of communication, complacency, lack of knowledge, distraction, lack of teamwork, fatigue, lack of resources, pressure, lack of assertiveness, stress, lack of awareness, norms) is a teaching vocabulary that Transport Canada identified after the maintenance-related accidents of the late 1980s and early 1990s (FAA-H-8083-30B, ch. 14); AC 120-72 attributes the list to Dupont (1997). It names error-producing conditions, not the behaviors that counter them.

## When to apply

- **Error data point to non-technical causes:** incident, audit, or event reports attribute errors to
  communication, handover, assertiveness, fatigue, pressure, or norms, not to missing knowledge.
- **A task crosses people, shifts, or roles:** the curriculum reaches a task with a handoff (shift
  turnover, required inspection item, dual sign-off, pre-task briefing) where the failure mode is a
  dropped link between people, not a wrong value.
- **A human factors course or module is being designed:** initial CRM, MRM, or human factors
  training, or an employer-required module, before any content or slides are chosen.
- **The recurrent window opens:** AC 120-72 places follow-up evaluation 2-12 months after training;
  schedule recurrent practice and re-observation inside that window rather than repeating the lecture.
- **Observed behavior decays:** follow-up marker observations drift toward baseline while reaction and
  knowledge scores stay high, the pattern reported in maintenance programs (Salas et al., 2006).

## When NOT to apply

- **The learner has not yet learned the technical task the scenario depends on:** a handover drill
  about an unfinished static-system test is noise to someone who does not know what the test is.
  Teach the technical task first; layer the non-technical scenario on top of it.
- **The gap is not a skill gap:** missing tooling, short staffing, an ambiguous procedure, or a
  schedule that makes compliance impossible. Training people to cope with a broken system repeats the
  third-generation MRM pattern (Taylor & Patankar, 2001); route the finding to the organization (see
  [action-mapping-performance-analysis](../02-instructional-design/action-mapping-performance-analysis.md)).
- **No observable standard exists:** the shop has no approved handover procedure or stop-work
  authority, or the expected behavior is still under negotiation. Write and approve the standard
  first; markers cannot score a behavior nobody has defined.
- **The format is one session with no follow-through:** maintenance behaviors regressed toward
  pretraining levels in the months after training (Salas et al., 2006). If one session is all there
  is, teach recognition and vocabulary and report it as such, not as behavior change.
- **The receiving workplace sanctions the target behavior:** transfer depends on trained superiors and
  on workplace rewards and sanctions (Taylor et al., 2005). Train supervisors on the same markers or
  secure that commitment before teaching learners to stop work or speak up.

## How to apply

- **Start from incident data and task analysis, not a topic list.** Pull error patterns from event
  reports, NTSB narratives, and audits, then name the critical behaviors with [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md).
  NOTSS was built this way, from critical-incident interviews with 27 surgeons (Yule et al., 2006).
- **Write each target as a behavioral marker with good and poor anchors.** "States which steps are
  complete, which are open, and which tests remain before release" can be scored; "communicates
  effectively" cannot. Airlines use marker systems to train and assess CRM skills, and rater
  reliability is their known weak point (Flin & Martin, 2001); pilot the sheet until two raters agree.
- **Use the Dirty Dozen to diagnose, then pair each item with a countermeasure behavior.** Lack of
  communication: structured handover. Lack of assertiveness: a scripted stop-and-ask call. Pressure:
  a stated stop criterion. Norms: check the habit against the approved procedure. Fatigue: self-check
  and hand off. Assess the behavior, not recall of the list.
- **Model, then practice under the conditions where the behavior fails.** Show a negative and a positive
  model of the same exchange, state the learning points as a short rule, run scenarios seeded with the
  real pressures (schedule, authority gradient, a convenient norm), and have learners write scenarios
  from their own shop experience (Taylor et al., 2005). Low physical fidelity is enough (Hughes et al., 2016; see [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md)).
- **Debrief against the markers and set one goal.** Show which markers were observed and missed, then
  set one behavioral goal for the next run (goal setting aided transfer in Taylor et al., 2005). Treat
  practice errors as material (see [error-management-training](../04-delivery-patterns/error-management-training.md)).
- **Evaluate at four levels from a baseline.** Record reactions and knowledge, but judge the program
  on observed behavior in a scenario and later on the job (AC 120-72; see
  [training-evaluation-kirkpatrick-ltem](../03-assessment-science/training-evaluation-kirkpatrick-ltem.md)).
- **Schedule recurrence and build support around the learner.** Run a second phase about two months
  after the first, as in the two-phase airline program Taylor and Patankar (2001) describe; re-observe
  at that point; train supervisors and peers on the same markers and call phrases (Hughes et al., 2020).

## Common misapplications

- **Dirty Dozen posters plus a lecture as the whole program.** This is third-generation awareness training:
  graduates report passive coping intentions, not changed interpersonal behavior (Taylor & Patankar, 2001).
- **Declaring success on reaction scores.** Positive reactions are the most consistent CRM outcome
  and the least informative; Salas et al. (2006) note that positive attitudes do not guarantee
  learning, and learning does not guarantee behavior change.
- **Training technicians while managers sit out.** MRM graduates who expected managers and coworkers
  to act on the course reported frustration and discouragement when they did not (Taylor & Patankar,
  2001). Train both ends of every exchange the course teaches.
- **Writing a Dirty Dozen label as the root cause.** "Complacency" in an incident finding stops the
  analysis. The label names a condition; the lesson must specify what the technician does about it,
  and latent failures (AC 120-72 separates them from active failures) often sit with the organization.
- **Spending on fidelity instead of behavior design.** High physical fidelity did not outperform low
  fidelity in healthcare team training (Hughes et al., 2016); a scripted role-play with markers beats
  an expensive simulator with no scoring sheet.

## Examples across domains

**Avionics (CAET lesson): The encoder swap that crossed a shift change.**

*Setup.* The lesson opens on an incident page built from NTSB/AAR-92/04: on September 11, 1991,
Continental Express Flight 2574, an Embraer 120, broke up in flight near Eagle Lake, Texas, and all
14 aboard were killed. The night before, a second-shift crew had begun replacing the horizontal
stabilizer deice boots and removed the upper leading-edge screws. Required verbal turnovers were not
given, the work cards were not filled out, and the airplane flew with the left leading edge partially
secured. The NTSB found the manual's turnover instructions adequate but not followed. The page tags
lack of communication as the condition in play; the scenario adds pressure and norms.

*Practice.* The scenario moves the same pattern into avionics. On an IFR twin, a second-shift
technician (the learner) replaces the altitude encoder, reconnects the static line at the encoder, and
runs out of shift before the static-system test (14 CFR 91.411(a)(2), Part 43 Appendix E(a)) and the
encoder-to-transponder data correspondence test (91.411(a)(3), Appendix E(c)). The aircraft is booked
for 0600, the work card reads only "encoder replaced," and the lead says night shift always closes
these out. The learner watches a negative model (a hallway "it just needs paperwork" handoff), then a
positive model, then records a face-to-face handover: task and aircraft, what was disturbed, what is
complete and signed, what remains in order, paperwork status, and a readback from the receiver. Roles
then switch: as the oncoming technician told to "just sign it," the learner makes a stop-and-ask call
naming the open static line, the two required tests, and the action needed before any signature.

*Measurement and follow-up.* An instructor or trained peer scores the recorded handover on a
six-marker rubric (readback and remaining tests are critical markers); the stop-and-ask branch is
logged as observed behavior. No satisfaction survey stands in for the outcome. At about two months,
the hands-on lab re-runs the rubric on a real task that spans two lab sessions, scored by a lab
instructor trained on the same markers.

**Operating-room team training: briefings and debriefings that stay in use.**

*Setup.* A surgical department's teamwork training was a one-hour communication lecture that scored
well on course evaluations. Observed pre-incision briefings stayed inconsistent, and circulating
nurses rarely raised concerns to the attending surgeon. The department redesigns the program around
behaviors instead of topics.

*Practice.* The redesign follows the structure of the Veterans Health Administration Medical Team
Training program (Neily et al., 2010): two months of preparation, a one-day learning session,
checklist-guided briefings and debriefings built into the case workflow, and quarterly coaching for a
year. In the session, teams see a negative and a positive model briefing, then run low-fidelity
in-situ scenarios seeded with a discrepancy (the consent side differs from the schedule; prophylactic
antibiotic not yet given) where the nurse must speak up and the surgeon must acknowledge and resolve
it. Observers score with NOTSS-style markers for situation awareness, decision making, task
management, communication and teamwork, and leadership (Yule et al., 2006).

*Measurement and follow-up.* Trained observers score a fixed sample of real cases each month, and
marker rates are fed back at each quarterly coaching call; surgeons and nurse managers are trained as
raters so supervisors model the behavior. In the VA program, the 74 trained facilities saw an 18%
drop in annual surgical mortality against 7% in 34 facilities not yet trained, with 0.5 fewer deaths
per 1000 procedures for each added quarter of the program (Neily et al., 2010); the design was
retrospective, so the department treats this as an association to track, not a guarantee.

## Quality signal

The program is changing behavior when at least 90% of learners show every critical marker in an observed end-of-training scenario (against a pretraining baseline), two raters agree on at least 80% of marker scores, and observed marker rates at the 2-12 month follow-up stay within 10 percentage points of the end-of-training rate. High reaction scores with flat or decaying marker rates mean the program is functioning as awareness training; add practice, recurrence, or supervisor support before adding content.

## Cross-references

- See [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md) for building the seeded-pressure scenarios that host the practice.
- See [error-management-training](../04-delivery-patterns/error-management-training.md) for treating errors made in practice as learning material.
- See [training-evaluation-kirkpatrick-ltem](../03-assessment-science/training-evaluation-kirkpatrick-ltem.md) for designing the four-level evaluation and avoiding reaction-only success claims.
- See [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) for deriving the critical behaviors and marker anchors from expert incident interviews.
- See [action-mapping-performance-analysis](../02-instructional-design/action-mapping-performance-analysis.md) for separating skill gaps from organizational causes before training is chosen.
- See [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for matching fidelity to the behavior being practiced.
- See [competency-based-training-assessment](../03-assessment-science/competency-based-training-assessment.md) for observed, criterion-referenced assessment of the marker behaviors.
- See [transfer-of-learning](../01-learning-science/transfer-of-learning.md) for why practice conditions must resemble the job conditions where the behavior fails.
