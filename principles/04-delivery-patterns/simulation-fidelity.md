---
id: simulation-fidelity
title: Simulation-Based Training and Fidelity
category: 04-delivery-patterns
aliases: [simulation-based-training, functional-fidelity, fidelity-selection]
evidence_strength: strong
effect_size: "Simulation vs no intervention: pooled ES 1.20 knowledge, 1.09 process skills, 0.50 patient outcomes (Cook et al. 2011, 609 studies); Hedges' g = 0.85 for simulation-based learning of complex skills (Chernikova et al. 2020, 145 studies); high vs low fidelity: average performance difference 1% to 2% (Norman, Dore & Grierson 2012, 24 studies); design features inside simulation, skills ES 0.68 range of difficulty, 0.65 interactivity, 0.44 feedback (Cook et al. 2013, 289 studies)"
key_sources:
  - "Cook, D. A., Hatala, R., Brydges, R., Zendejas, B., Szostek, J. H., Wang, A. T., Erwin, P. J., & Hamstra, S. J. (2011). Technology-enhanced simulation for health professions education: A systematic review and meta-analysis. JAMA, 306(9), 978-988. doi:10.1001/jama.2011.1234"
  - "Cook, D. A., Hamstra, S. J., Brydges, R., Zendejas, B., Szostek, J. H., Wang, A. T., Erwin, P. J., & Hatala, R. (2013). Comparative effectiveness of instructional design features in simulation-based education: Systematic review and meta-analysis. Medical Teacher, 35(1), e867-e898. doi:10.3109/0142159X.2012.714886"
  - "Hamstra, S. J., Brydges, R., Hatala, R., Zendejas, B., & Cook, D. A. (2014). Reconsidering fidelity in simulation-based training. Academic Medicine, 89(3), 387-392. doi:10.1097/ACM.0000000000000130"
  - "Norman, G., Dore, K., & Grierson, L. (2012). The minimal relationship between simulation fidelity and transfer of learning. Medical Education, 46(7), 636-647. doi:10.1111/j.1365-2923.2012.04243.x"
  - "Issenberg, S. B., McGaghie, W. C., Petrusa, E. R., Gordon, D. L., & Scalese, R. J. (2005). Features and uses of high-fidelity medical simulations that lead to effective learning: A BEME systematic review. Medical Teacher, 27(1), 10-28. doi:10.1080/01421590500046924"
  - "Chernikova, O., Heitzmann, N., Stadler, M., Holzberger, D., Seidel, T., & Fischer, F. (2020). Simulation-based learning in higher education: A meta-analysis. Review of Educational Research, 90(4), 499-541. doi:10.3102/0034654320933544"
  - "de Jong, T., & van Joolingen, W. R. (1998). Scientific discovery learning with computer simulations of conceptual domains. Review of Educational Research, 68(2), 179-201. doi:10.3102/00346543068002179"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer, sequencing]
contraindicated_when:
  - learner_state.first_exposure
  - learner_state.overwhelmed
  - learner_state.high_prior_knowledge
  - task_type.motor_acquisition
  - task_type.purely_verbal_definition_recall
  - material.unverified_simulation_model
runtime_triggers:
  - simulation_build_planned
  - fidelity_level_choice_due
  - real_equipment_practice_costly_or_unsafe
  - procedural_skill_lesson_planned
  - troubleshooting_task
  - conceptual_simulation_exploration_planned
  - simulation_criterion_reached
related: [cognitive-task-analysis, scenario-based-learning, troubleshooting-instruction, transfer-of-learning, cognitive-load-theory, expertise-reversal, error-analysis-corrective-feedback, 4c-id-model, deliberate-practice, animation-video-immersive-media]
---

# Simulation-Based Training and Fidelity

## One-line claim

A simulation teaches when its functional behavior matches the cues, decisions, and consequences of the real task and when it sits inside an instructional wrapper (graded cases, repetitive practice, feedback, debriefing, guidance); physical realism beyond what the task's decisions depend on adds cost, not learning, especially for novices.

## Evidence base

Issenberg, McGaghie, Petrusa, Gordon, and Scalese's (2005) BEME systematic review in *Medical Teacher* synthesized 109 studies (1969-2003) for the features of high-fidelity medical simulation that lead to learning. The features reported most often were educational feedback (47% of studies), repetitive practice (39%), curriculum integration (25%), a range of task difficulty (14%), multiple learning strategies and capture of clinical variation (10% each), a controlled environment and individualized learning (9% each), and defined outcomes (6%); simulator validity, the realism feature, appeared in 3%. Cook et al.'s (2011) meta-analysis in *JAMA* pooled 609 studies enrolling 35,226 health professions trainees: against no intervention, technology-enhanced simulation produced pooled effect sizes of 1.20 for knowledge, 1.14 for time skills, 1.09 for process skills, 1.18 for product skills, 0.79 and 0.81 for behaviors, and 0.50 for direct patient effects, with large heterogeneity. Chernikova et al. (2020) in *Review of Educational Research* extended the result beyond medicine: across 145 studies of complex skills in medical education, teacher education, and management, simulation-based learning produced g = 0.85 (95% CI 0.69-1.02), scaffolding added benefit, learners with low prior knowledge gained most from examples, and learners with high prior knowledge gained most from reflection phases. In aviation, Hays, Jacobs, Prince, and Salas's (1992) meta-analysis of 26 experiments in *Military Psychology* found that simulator plus aircraft training consistently beat aircraft training alone for jet pilots, that motion cuing added little, and that performance-paced training outperformed lock-step training on average.

Fidelity is where designers overspend. Hamstra, Brydges, Hatala, Zendejas, and Cook (2014) in *Academic Medicine* argued that defining fidelity as how much a simulator looks, feels, and acts like the real thing privileges technology and physical resemblance over educational effectiveness, noted that empirical studies show the degree of fidelity appears independent of effectiveness, and recommended replacing the term with physical resemblance and functional task alignment, shifting emphasis to the functional side and to transfer, learner engagement, and suspension of disbelief. This chapter uses three working dimensions: physical (looks and feels like the equipment), functional (controls, values, rates, and cause and effect behave like the real system), and psychological or cognitive (the same cues, decisions, time pressure, and consequences). Norman, Dore, and Grierson (2012) in *Medical Education* reviewed 24 studies comparing high- with low-fidelity simulation on performance in auscultation, surgical technique, and complex management such as cardiac resuscitation: both beat no-intervention controls, nearly all showed no significant advantage for high fidelity, and average differences ran 1% to 2%. Cook et al.'s (2013) companion meta-analysis in *Medical Teacher* (289 studies comparing one simulation design with another, 18,971 trainees) located the effect in the wrapper: pooled skills effects were 0.68 for range of difficulty, 0.66 for distributed practice, 0.65 for interactivity, 0.62 for multiple learning strategies, 0.52 for individualized learning, 0.44 for feedback, and 0.34 for longer time, while repetitive practice (0.68, 7 studies, p = 0.06) and clinical variation (0.20) did not reach significance. Cheng et al. (2014) found simulation with debriefing favorable over no intervention on every outcome (ES 0.28-2.16) and negligible added benefit from video-assisted debriefing (ES 0.10).

Two boundary conditions shape the runtime rule. First, fidelity matters more as competence and task integration grow: Brydges, Carnahan, Rose, Rose, and Dubrowski (2010) randomized 45 medical students practicing IV catheterization to high, low, or progressive (low to mid to high) fidelity; on a standardized-patient transfer test, high beat low on most measures, and the progressive group scored highest on global clinical performance and documentation while spending little time on the expensive simulator. Fidelity should rise with competence, not start at maximum. Second, conceptual simulations used for discovery fail without guidance: de Jong and van Joolingen (1998) documented learner difficulty generating hypotheses, designing experiments, interpreting data, and regulating their own learning, and argued for combining simulations with instructional support; Alfieri, Brooks, Aldrich, and Tenenbaum's (2011) meta-analysis found unassisted discovery worse than explicit instruction (d = -0.38) and enhanced discovery with feedback, worked examples, scaffolding, or elicited explanations better than other instruction (d = 0.30). Evidence strength is rated strong because the core claims rest on several large meta-analyses. Two caveats: the fidelity comparison rests on a systematic review rather than a pooled estimate, and Cook et al. (2011) found no consistent design-feature interactions in cross-study subgroups, so the wrapper claim leans on the head-to-head comparisons in Cook et al. (2013).

## When to apply

- **Simulation build planned.** Before scoping any sim, virtual lab, or test-set trainer, run the fidelity rule
  below; the budget goes to the functional model and the case set before any visual realism.
- **Fidelity level choice due.** When choosing among a schematic, a 2D functional sim, a 3D model, a physical
  part-task trainer, or real equipment, pick the cheapest option that keeps functional task alignment for the
  current objective (Hamstra et al., 2014; Norman et al., 2012).
- **Real-equipment practice is costly, unsafe, or rare.** When errors on the real system damage equipment or
  harm people, or the event is too rare to practice on demand (failures, emergencies), simulation supplies the
  repetitive, varied practice the real setting cannot (Issenberg et al., 2005).
- **Procedural skill lesson planned.** For test, inspection, and setup procedures, a sim with correct controls,
  rates, and readouts lets the learner rehearse with feedback before touching equipment.
- **Troubleshooting task.** Diagnosis needs many cases with hidden faults that look normal until measured; a sim
  supplies a graded fault library no shop can stage (see
  [troubleshooting-instruction](../04-delivery-patterns/troubleshooting-instruction.md)).
- **Conceptual simulation exploration planned.** When a sim lets learners discover a relationship (pressure and
  altitude, voltage and current), attach a driving question, hypothesis prompts, and an assignment first.
- **Simulation criterion reached.** When a learner meets the in-sim criterion on the graded cases, raise fidelity
  one step (time pressure, an integrated whole task, or real equipment) instead of repeating the level.

## When NOT to apply

- **Learner at first exposure facing an open sandbox or a full-stress scenario.** Do not open with unguided
  exploration or a high-pressure case; give a worked demonstration or explanation first. Unassisted discovery
  underperforms explicit instruction (Alfieri et al., 2011).
- **Learner overwhelmed.** If the learner skips basic steps, misreads instruments, or stalls, remove
  psychological fidelity (timers, alarms, interruptions) and return to a guided case; pressure on a saturated
  learner adds load, not learning (see [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md)).
- **Learner already proficient.** The schematic and step prompts become redundant. Move to integrated,
  higher-fidelity cases and replace examples with reflection (Chernikova et al., 2020; see
  [expertise-reversal](../01-learning-science/expertise-reversal.md)).
- **Objective is a motor or haptic skill.** A screen sim cannot train torque feel, seating a test adapter,
  crimping, or intubation. Use a physical part-task trainer or real equipment for that element.
- **Objective is verbal recall.** For a definition, regulation number, or tolerance, use retrieval practice; a sim adds only cost.
- **Simulation model unverified.** If values, rates, and fault behaviors have not been checked against the
  maintenance manual, the governing standard, or a real system, do not ship the sim. A model with wrong
  functional behavior trains wrong cues however real it looks.

## How to apply

- **Inventory the task before choosing fidelity.** From a task analysis (see
  [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md)), list the cues the expert
  reads, the decisions, the actions, and the consequence of each error. That list is the build specification.
- **Apply the fidelity rule one dimension at a time.** Functional: mandatory for every listed cue and action
  (real values with units, real rates and limits, correct cause and effect, correct failure behavior).
  Physical: only where transfer depends on a perceptual-motor or spatial cue; otherwise schematic.
  Psychological: low for novices, raised at criterion. Build the cheapest medium that satisfies all three.
- **Progress fidelity with competence.** Schematic, then functional sim, then integrated or physical trainer,
  then real equipment; advance on a performance criterion, not elapsed time (Brydges et al., 2010).
- **Build a graded case set, not one scenario.** Write 4-8 cases across a range of difficulty (a normal case,
  an obvious fault, a subtle fault near a tolerance, a fault that mimics another) and let the learner repeat
  until criterion (Cook et al., 2013; Issenberg et al., 2005).
- **Pre-brief every session.** State the job, the objective, the sim's rules, and what it simplifies, on screen.
- **Shift feedback from immediate to debrief as competence grows.** Give immediate in-sim feedback on
  procedural errors in guided cases; hold later feedback for a structured debrief: what happened (timeline from
  the sim log), why (compare with the expert path), and what to do next time (Cheng et al., 2014; see
  [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md)).
- **Scaffold every discovery sim to the learner's prior knowledge.** Provide a driving question, a hypothesis
  frame ("If I change X, Y will ... because ..."), a change-one-variable prompt, a run log, and an assignment
  answered from the learner's own data (de Jong & van Joolingen, 1998). Use worked examples for low prior
  knowledge and reflection prompts for high prior knowledge (Chernikova et al., 2020).
- **Close with a transfer check.** End on real equipment or a transfer task scored on the criteria the sim
  used (see [transfer-of-learning](../01-learning-science/transfer-of-learning.md)).

## Common misapplications

- **Buying realism first.** Funding photoreal 3D, motion, or a high-end manikin before the functional model
  and cases exist; average gains of 1% to 2% (Norman et al., 2012) rarely repay it.
- **Realistic look, wrong behavior.** Photoreal instruments driven by canned animation or rounded numbers teach wrong cues.
- **The sim as a stand-alone toy.** No objective, cases, feedback, or debrief; simulation earns its effect
  through the wrapper features (Cook et al., 2013), not the model alone.
- **Open sandbox for novices.** A conceptual sim with no question or scaffold produces aimless clicking.
- **One case, played once.** Without difficulty range and repetition, the learner memorizes the scenario, not the pattern.
- **Maximum stress from minute one.** Alarms and time limits before the basic sequence is mastered;
  psychological fidelity belongs late in the progression. Grading only inside the sim is the same error at
  the other end: in-sim success is not transfer.

## Examples across domains

**Avionics (CAET lesson): Static system leak check, functional sim versus photoreal cockpit.**

*Setup.* A CAET lesson teaches the static pressure system proof test behind 14 CFR 91.411 and Part 43
Appendix E, using the acceptable method in AC 43-6D Appendix E: on an unpressurized aircraft, evacuate the
static system to 1,000 feet above aircraft elevation, stop pumping, and allow no more than 100 feet of
indicated altitude loss in 1 minute. The designer can fund one build: a photoreal 3D cockpit, or a 2D
functional simulation of the plumbing (static ports, lines, tees, drains, altimeter, VSI, airspeed
indicator) connected to an air data test set with altitude, rate, and hold controls.

*Fidelity choice and wrapper.* The task inventory shows every decision rides on functional cues: test-set
targets and rates, the altimeter reading, a 1-minute timer, and where a leak or blockage can sit. No decision
depends on panel texture, so the designer builds the 2D sim, drives every readout from a pressure model, and
models leaks as flow rates. Climbing faster than the VSI's limit pegs the VSI and logs instrument damage, the
risk AC 43-6D notes. A pre-brief states the job (an IFR aircraft due its 24-calendar-month check) and the
simplifications. Case 1 is guided and passes with a 20-foot loss; case 2 is a cracked flare sleeve at the
altimeter that drops 400 feet; case 3 is a 120-foot slow leak the learner misses by stopping the timer at 30
seconds; case 4 is water at a low point that freezes the VSI while the altimeter tracks. Feedback is
immediate on case 1 and held for a debrief that replays the learner's test-set log against the expert path.

*Follow-up.* The debrief closes on scope: an airframe-rated mechanic may perform the static system test,
while altimeter and encoder tests need the manufacturer or an appropriately rated repair station (91.411(b)).
In the shop, the learner runs the leak check on a real aircraft with a real test set, sealing the port
adapter by hand (the physical element the sim skipped); the instructor records first-attempt pass and
interventions. A 3D view is added later only if transfer shows the learner cannot locate parts on the airframe.

**Emergency medicine: Anaphylaxis management for first-year residents.**

*Setup.* An emergency medicine residency builds a simulation block on anaphylaxis for interns. The options
are a high-end manikin suite with programmable airway swelling and lifelike sounds, or a basic manikin with a
screen-based monitor whose vital signs respond to treatment, run by a nurse confederate. The decisions that
matter: recognizing anaphylaxis from the pattern after an exposure, giving intramuscular epinephrine (0.01
mg/kg of 1 mg/mL, up to 0.5 mg in an adult) into the anterolateral thigh, repeating it at 5-15 minutes if
needed, giving fluids for hypotension, and escalating when the response is blunted.

*Fidelity choice and wrapper.* Norman et al. (2012) found no meaningful high-fidelity advantage for
resuscitation-type management, so the block funds the functional monitor model and the cases instead of the
high-end manikin. Vitals respond to drug, dose, route, and timing; an undiluted IV push of 1 mg/mL
epinephrine produces severe hypertension and a tachyarrhythmia, as the real error does. A pre-brief sets the
rules (injections are mimed) and psychological safety. Case 1 is classic food anaphylaxis that resolves
after one dose, with the attending prompting; case 2 needs a second dose and fluids; case 3 is a patient on a
beta-blocker with a blunted response who needs escalation and glucagon; case 4 presents with hypotension
after a known allergen and no skin signs. The nurse confederate adds time pressure from case 2 on.

*Follow-up.* Each case ends in a structured debrief built on the monitor log and centered on time to first
epinephrine; video replay is skipped because Cheng et al. (2014) found it added negligible benefit. Three
months later the intern manages a new presentation as an in-situ simulation in the real resuscitation bay,
the step up in environmental and psychological fidelity, scored on the same time and dosing criteria.

## Quality signal

The runtime knows the simulation and its wrapper are working when learners trained on it pass the real-equipment or transfer task on first attempt at a markedly higher rate than learners without it (a large effect, near the skills ES of about 1.1 that Cook et al. 2011 report), and when in-sim error rates fall across the graded case set while case difficulty rises. Fidelity check: if a higher-fidelity version shows no transfer gain over the functional version on the same criterion (the 1% to 2% band Norman et al. 2012 found), keep the cheaper version and spend the budget on cases and debriefing.

## Cross-references

- See [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) for extracting the cues, decisions, and errors that set the functional fidelity specification.
- See [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md) for the case-writing pattern that turns a simulation into graded, consequential decisions.
- See [troubleshooting-instruction](../04-delivery-patterns/troubleshooting-instruction.md) for building fault libraries and diagnostic strategy instruction around a simulated system.
- See [4c-id-model](../02-instructional-design/4c-id-model.md) for sequencing simulated task classes from simple to complex with fading support.
- See [expertise-reversal](../01-learning-science/expertise-reversal.md) for why scaffolds that help novices hinder proficient learners.
- See [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md) for structuring in-sim feedback and the debrief.
- See [transfer-of-learning](../01-learning-science/transfer-of-learning.md) for designing the real-task check that closes every simulation sequence.
- See [animation-video-immersive-media](../04-delivery-patterns/animation-video-immersive-media.md) for when 3D, video, and immersive media earn their cost.
