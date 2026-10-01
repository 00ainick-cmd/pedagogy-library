---
id: troubleshooting-instruction
title: Teaching Troubleshooting and Fault Isolation
category: 04-delivery-patterns
aliases: [structured-troubleshooting, fault-isolation-training, diagnostic-strategy-instruction]
evidence_strength: moderate
effect_size: "No pooled meta-analytic effect size exists; technicians trained in structured troubleshooting solved twice as many malfunctions, in less time, than traditionally trained technicians (Schaafstal, Schraagen, & van Berlo 2000)"
key_sources:
  - "Schaafstal, A., Schraagen, J. M., & van Berlo, M. (2000). Cognitive task analysis and innovation of training: The case of structured troubleshooting. Human Factors, 42(1), 75-86. doi:10.1518/001872000779656570"
  - "Morris, N. M., & Rouse, W. B. (1985). Review and evaluation of empirical research in troubleshooting. Human Factors, 27(5), 503-530. doi:10.1177/001872088502700502"
  - "Kieras, D. E., & Bovair, S. (1984). The role of a mental model in learning to operate a device. Cognitive Science, 8(3), 255-273. doi:10.1207/s15516709cog0803_3"
  - "van Gog, T., Paas, F., & van Merriënboer, J. J. G. (2006). Effects of process-oriented worked examples on troubleshooting transfer performance. Learning and Instruction, 16(2), 154-164. doi:10.1016/j.learninstruc.2006.02.003"
  - "van Gog, T., Paas, F., & van Merriënboer, J. J. G. (2008). Effects of studying sequences of process-oriented and product-oriented worked examples on troubleshooting transfer efficiency. Learning and Instruction, 18(3), 211-222. doi:10.1016/j.learninstruc.2007.03.003"
  - "Jonassen, D. H., & Hung, W. (2006). Learning to troubleshoot: A new theory-based design architecture. Educational Psychology Review, 18(1), 77-114. doi:10.1007/s10648-006-9001-8"
  - "Johnson, W. B., & Rouse, W. B. (1982). Training maintenance technicians for troubleshooting: Two experiments with computer simulations. Human Factors, 24(3), 271-276. doi:10.1177/001872088202400302"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer]
contraindicated_when:
  - learner_state.first_exposure
  - learner_state.overwhelmed
  - learner_state.high_prior_knowledge
  - task_type.motor_acquisition
  - task_type.fixed_procedure_no_judgment
runtime_triggers:
  - system_model_lesson_completed
  - troubleshooting_task
  - unstructured_trial_and_error_detected
  - fault_isolation_attempt_failed
  - simulated_fault_debrief_due
  - new_system_or_fault_class_introduced
related: [worked-example-effect, faded-worked-examples, expertise-reversal, self-explanation-prompts, cognitive-apprenticeship-mentor, cognitive-task-analysis, simulation-fidelity, scenario-based-learning, transfer-of-learning, 4c-id-model]
---

# Teaching Troubleshooting and Fault Isolation

## One-line claim

Teach troubleshooting as an explicit, named strategy run on top of a specific functional model of the system (define the symptom, decompose and half-split, rank hypotheses by likelihood and test cost, test, verify the fix, document), modeled first in worked examples and then practiced on varied simulated faults with feedback and stated reasoning; system theory alone and unstructured trial and error both fail to produce transferable skill.

## Evidence base

The foundational review is Morris and Rouse (1985) in *Human Factors*: across the training studies then available, the extent to which instruction changed troubleshooting performance was "highly related to the level of explicitness of action-related information provided." Approaches that force learners to use their system knowledge explicitly looked promising but lacked transfer data, and the authors proposed combining the two: explicit strategy plus deliberate use of system knowledge. Two earlier findings explain why each half is needed. Rasmussen and Jensen's (1974) verbal-protocol study in *Ergonomics* found that skilled electronics repairmen searched the system as a hierarchy of subunits using rapid streams of simple good or bad judgments, and that when those general routines failed, the men fixated and repeated checks rather than reasoning from how the specific system works. Kieras and Bovair (1984) in *Cognitive Science* showed, for learning to operate a control-panel device, that learners given a device model before procedure training learned faster, retained more accurately, executed faster, and simplified inefficient procedures more often than a rote group; the benefit came from the specific configuration of components and controls, not from general principles, because only that content lets the learner infer what to do.

The strongest applied evaluation is Schaafstal, Schraagen, and van Berlo (2000), also in *Human Factors*. A cognitive task analysis of technicians troubleshooting a radar system and a general purpose computer system led to "structured troubleshooting," which combines a domain-independent troubleshooting strategy with a context-dependent, multiple-level functional decomposition of the system. Technicians trained this way solved twice as many malfunctions, in less time, than traditionally trained technicians; the course took less time to teach and produced explicit, uniform troubleshooting. On how to model the strategy, van Gog, Paas, and van Merriënboer (2006) ran a full factorial experiment on electrical-circuit troubleshooting: the prediction that studying worked examples yields better transfer than solving conventional problems, with less time and effort, was largely confirmed, but adding process information (why each step was chosen) to worked examples raised training effort without raising transfer. Their follow-up (van Gog et al., 2008) confirmed an expertise-reversal pattern: process information improves transfer efficiency early and becomes redundant load as training progresses, so the explanation should be faded rather than kept. Jonassen and Hung (2006) in *Educational Psychology Review* synthesized this literature into a design architecture with three parts: a multi-layered conceptual model (topographic, functional, strategic, procedural), a simulator that requires learners to generate and test hypotheses for every action, and a case library of experienced troubleshooters' stories. For simulators, Johnson and Rouse (1982) found with aviation maintenance trainees on aircraft power-plant troubleshooting that a mix of low- and moderate-fidelity computer simulations was competitive with traditional lecture and demonstration.

Evidence strength is rated moderate. No meta-analysis of troubleshooting instruction exists; the largest gain comes from one program evaluation reported as a ratio, not a standardized effect size; the worked-example studies used students on circuits; Jonassen and Hung (2006) is a theory-based architecture, not an outcome trial; and the simulator evidence shows parity with classroom instruction, not superiority. The conclusion still converges across these studies from 1974 to 2008: a functional model alone does not teach troubleshooting, procedures alone do not transfer, and the combination of an explicit strategy with a system-specific functional model does.

## When to apply

- **System model lesson completed** - The learner can draw the block diagram, name each block's
  inputs and outputs, and state normal values at the main test points. Fault practice starts here.
- **Troubleshooting task** - Any objective whose performance is "find and correct the fault" in a
  system, patient, process, or program. Use this pattern instead of procedure-only instruction.
- **Unstructured trial and error detected** - In a sim, the learner swaps parts or takes readings
  with no stated hypothesis, or repeats a check already made. Stop and reintroduce the card.
- **Fault isolation attempt failed** - The fault was missed, or found with far more tests or
  access cost than the expert path. Debrief the trace before the next case.
- **Simulated fault debrief due** - Every case ends with learner trace vs. expert trace vs. fault tree.
- **New system or fault class introduced** - Reuse the same card so the general parts become visible.

## When NOT to apply

- **Learner is at first exposure to the system** - Fault cases before a functional model exists
  turn into guessing and part-swapping. Teach the model first (Jonassen & Hung, 2006).
- **Learner is overwhelmed** - Two consecutive failed single-fault cases, or tests chosen at
  random, mean the case is too complex. Drop to a single fault in fewer blocks with the process
  narration restored before adding multi-fault or intermittent cases.
- **Learner has high prior troubleshooting knowledge** - Process explanations become redundant
  load as expertise grows (van Gog et al., 2008). Skip narrated examples; give unsupported cases.
- **The target is the motor skill** - Probe technique, safe meter handling, crimping, or clinical
  palpation need demonstration and physical practice; this pattern trains the decisions only.
- **The task is a fixed procedure with no diagnosis** - An operational check or inspection with a
  pass or fail outcome and no isolation decision needs procedural training instead.

## How to apply

- **Build the functional model as the system's specific configuration** - Block diagram with
  signal and power flow, each block's inputs and outputs, expected values at each test point.
  General principles alone do not support inference; specific configuration does (Kieras &
  Bovair, 1984).
- **Teach one named, domain-independent strategy on a card** - (1) Define the symptom and confirm
  it against normal; (2) decompose functionally and list every block that could cause it; (3) rank
  hypotheses by likelihood and test cost; (4) half-split, choosing the test that divides the
  remaining suspects most evenly at acceptable cost; (5) test, stating the expected result first;
  (6) repair and verify by re-running the original symptom check; (7) document. The step list is
  this chapter's synthesis; one strategy reused on every system, paired with a system-specific
  decomposition, is the Schaafstal et al. (2000) design. The half-split has been studied
  experimentally since Goldbeck, Bernstein, Hillix, and Marx (1957).
- **Model with process-oriented worked examples, then fade the process** - The first one or two
  examples show the expert's reasoning at each step ("why this test; what each reading rules
  out"); then collapse the narration to steps and readings; then give cases with no example (van
  Gog et al., 2006, 2008; [faded-worked-examples](../04-delivery-patterns/faded-worked-examples.md)).
- **Practice on a varied case library in a fault simulator** - Require a stated hypothesis before
  each test and an interpretation after it (Jonassen & Hung, 2006). Vary the faulty block for the
  same symptom and the symptom for the same block. A mix of low- and moderate-fidelity sims can
  match lecture and demonstration (Johnson & Rouse, 1982;
  [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md)).
- **Require spoken or typed reasoning at each decision** - "Which suspects does this reading
  eliminate if it is normal? If it is abnormal?" Score the prediction against the result. See
  [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md).
- **Debrief and score the process, not only the outcome** - Show tests used, redundant tests,
  access cost, and parts replaced without evidence next to the expert path and the published
  fault-isolation tree. The tree governs the real job; the strategy explains its order. A
  correct answer reached by swapping parts is a failed case.

## Common misapplications

- **Teaching system theory and expecting troubleshooting to follow** - Theory-only and
  procedure-only instruction failed to produce transferable skill (Jonassen & Hung, 2006;
  Morris & Rouse, 1985). Theory is a prerequisite; a generic flowchart with no block diagram
  is the opposite error, leaving nothing to decompose.
- **Unstructured trial-and-error practice** - "Find the fault" sims with unlimited free swaps
  reward the repetition without reasoning that Rasmussen and Jensen (1974) saw when skilled
  repairmen's general routines failed. Charge a time or cost for each test and each swap.
- **One fault, one memorized procedure** - A drilled fix breaks on the next symptom. Vary the
  faults and keep the strategy constant.
- **Keeping the expert narration on forever** - Process explanations that help early become
  redundant load later (van Gog et al., 2008). Fade them on a schedule tied to accuracy.
- **Stopping at "fault found"** - The learner practices quitting before the system is proven restored.

## Examples across domains

**Avionics (CAET lesson): Autopilot pitch servo will not engage.**

*Setup.* Entry-level learners in a CAET autopilot module have finished the system model lesson
for a two-axis general aviation autopilot: breaker and disconnect switch, autopilot computer, and
roll and pitch servos, each a motor driving a capstan through an engage clutch, with a bridle
cable clamped to the control cable. The designer builds the sim from the type's maintenance
manual (block diagram, test points with normal values) and holds back the manual's
fault-isolation tree for this symptom until the debrief.

*Strategy in the sim.* Squawk: autopilot engages, holds heading, will not hold altitude. The
learner confirms it with the autopilot preflight test; roll engaging clears the breaker,
disconnect circuit, and common engage logic at no cost. Remaining suspects (computer pitch clutch
output, harness and connectors, pitch servo clutch) are ranked: recent tailcone work in the log
raises the servo-end connector, but reaching it means removing an access panel, so the learner
takes the cheaper split first, engage voltage at the computer's pitch clutch output at the test
point the manual specifies. Before each simulated meter reading the learner types the expected
value and what each outcome eliminates. Voltage present at the computer; absent at the servo
connector; a power-off continuity check finds the clutch wire open at a backed-out pin.

*Debrief and follow-up.* The debrief places the learner's trace beside the expert trace and the
manual's tree, with test count and access minutes, and flags any redundant reading (checking the
breaker after roll already engaged). It closes with the repair per the manual and AC 43.13-1B,
verification by re-running the preflight test and pitch engagement check, and a draft record
entry with the content 14 CFR 43.9 requires; 14 CFR 43.13(a) explains why the manufacturer's
manual methods are the default on the real aircraft. The next case keeps narration collapsed, the
third has none, and a transfer case (airspeed disagreement between the primary display and the
standby indicator, isolated with a pitot-static test set) uses the same strategy card.

**Veterinary clinical diagnosis: Polyuria and polydipsia in a middle-aged dog.**

*Setup.* Final-year veterinary students on a small-animal medicine rotation have studied water
balance (antidiuretic hormone release, collecting-duct response, the medullary concentration
gradient, osmotic diuresis); that model is the block diagram. The case is a nine-year-old intact
female dog with three weeks of increased drinking. The attending's trace is held back.

*Strategy in the case.* Students define the symptom: the owner measures 24-hour water intake,
compared with the canine polydipsia threshold of more than 90-100 mL/kg/day (Pavlovsky, 2026).
They decompose into primary polyuria (osmotic diuresis, lost renal concentrating ability,
deficient or blocked hormone action) versus primary polydipsia, then rank: chronic kidney
disease, diabetes mellitus, and hypercortisolism are the most common causes (Pavlovsky, 2026),
and pyometra rises on signalment and urgency. A fasting chemistry panel, complete blood count,
and complete urinalysis are the cheap first split, each result removing several branches. Before
ordering any test, students state what each result would rule out. The water deprivation test
sits last: reserved for hyposthenuric dogs once common causes are excluded, and contraindicated
in azotaemic dogs (Pavlovsky, 2026).

*Debrief and follow-up.* The debrief compares test order, cost, and time to diagnosis with the
attending's trace and marks any test ordered without a stated hypothesis. Verification is the
recheck after treatment; documentation is the problem-oriented medical record entry. The case
library then repeats the complaint with different causes (hypercortisolism, chronic kidney
disease, psychogenic polydipsia), the attending's reasoning shown first and then faded.

## Quality signal

The runtime knows troubleshooting instruction is working when learners isolate unseen simulated faults (not in the practice library) at a higher rate and in fewer tests than a baseline cohort trained without the explicit strategy, the comparison Schaafstal et al. (2000) used. A faster in-session signal: across successive cases, the share of tests with a stated hypothesis rises toward 100%, and redundant tests plus unjustified replacements fall toward zero; if they do not fall by the third case, restore the process narration and simplify the fault.

## Cross-references

- See [worked-example-effect](../01-learning-science/worked-example-effect.md) for why studied examples beat early unsupported problem solving.
- See [faded-worked-examples](../04-delivery-patterns/faded-worked-examples.md) for the schedule that removes process narration as accuracy rises.
- See [expertise-reversal](../01-learning-science/expertise-reversal.md) for why the same narration harms experienced troubleshooters.
- See [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md) for the prompts that make learners state what each test rules out.
- See [cognitive-apprenticeship-mentor](../05-tutor-personas/cognitive-apprenticeship-mentor.md) for the model, coach, and fade persona that delivers expert troubleshooting traces.
- See [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) for how to extract the expert strategy and functional decomposition before building the lesson.
- See [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for choosing how realistic the fault simulator must be.
- See [scenario-based-learning](../04-delivery-patterns/scenario-based-learning.md) for building the case library around authentic squawks and presenting complaints.
- See [transfer-of-learning](../01-learning-science/transfer-of-learning.md) for designing the near and far transfer cases that test the strategy on new systems.
