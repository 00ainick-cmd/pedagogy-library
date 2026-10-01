---
id: scenario-based-learning
title: Scenario-Based and Case-Based Learning
category: 04-delivery-patterns
aliases: [case-based-learning, branching-scenarios, scenario-based-e-learning, decision-scenarios]
evidence_strength: moderate
effect_size: "Problem-based vs conventional instruction: skills ES = 0.460, knowledge effect significantly negative but non-robust (Dochy et al. 2003, 43 studies); virtual patient decision scenarios vs traditional education: skills SMD = 0.90, knowledge SMD = 0.11 (Kononowicz et al. 2019, 51 RCTs, low-quality evidence); guidance moderator: unassisted discovery d = -0.38 vs explicit instruction, enhanced discovery d = 0.30 (Alfieri et al. 2011, 164 studies); instructional support inside games d = 0.34, d = 0.62 on skills (Wouters & van Oostendorp 2013, k = 107)"
key_sources:
  - "Dochy, F., Segers, M., Van den Bossche, P., & Gijbels, D. (2003). Effects of problem-based learning: A meta-analysis. *Learning and Instruction*, 13(5), 533-568. doi:10.1016/S0959-4752(02)00025-7"
  - "Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work: An analysis of the failure of constructivist, discovery, problem-based, experiential, and inquiry-based teaching. *Educational Psychologist*, 41(2), 75-86. doi:10.1207/s15326985ep4102_1"
  - "Alfieri, L., Brooks, P. J., Aldrich, N. J., & Tenenbaum, H. R. (2011). Does discovery-based instruction enhance learning? *Journal of Educational Psychology*, 103(1), 1-18. doi:10.1037/a0021017"
  - "Kononowicz, A. A., Woodham, L. A., Edelbring, S., Stathakarou, N., Davies, D., Saxena, N., Tudor Car, L., Carlstedt-Duke, J., Car, J., & Zary, N. (2019). Virtual patient simulations in health professions education: Systematic review and meta-analysis by the Digital Health Education Collaboration. *Journal of Medical Internet Research*, 21(7), e14676. doi:10.2196/14676"
  - "Wouters, P., & van Oostendorp, H. (2013). A meta-analytic review of the role of instructional support in game-based learning. *Computers & Education*, 60(1), 412-425. doi:10.1016/j.compedu.2012.07.018"
  - "Adams, D. M., Mayer, R. E., MacNamara, A., Koenig, A., & Wainess, R. (2012). Narrative games for learning: Testing the discovery and narrative hypotheses. *Journal of Educational Psychology*, 104(1), 235-249. doi:10.1037/a0025595"
  - "Thistlethwaite, J. E., Davies, D., Ekeocha, S., Kidd, J. M., MacDougall, C., Matthews, P., Purkis, J., & Clay, D. (2012). The effectiveness of case-based learning in health professional education. A BEME systematic review: BEME Guide No. 23. *Medical Teacher*, 34(6), e421-e444. doi:10.3109/0142159X.2012.680939"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer]
contraindicated_when:
  - learner_state.first_exposure
  - learner_state.overwhelmed
  - material.high_element_interactivity_no_scaffolding
  - task_type.purely_verbal_definition_recall
  - task_type.motor_acquisition
  - task_type.fixed_procedure_no_judgment
runtime_triggers:
  - job_task_requires_judgment
  - worked_example_phase_completed
  - transfer_is_the_target_outcome
  - real_world_errors_costly_or_rare
  - recall_mastered_application_untested
related: [worked-example-effect, faded-worked-examples, cognitive-load-theory, productive-failure, 4c-id-model, merrills-first-principles, error-analysis-corrective-feedback, self-explanation-prompts, transfer-of-learning, cognitive-task-analysis, action-mapping-performance-analysis, troubleshooting-instruction, simulation-fidelity]
---

# Scenario-Based and Case-Based Learning

## One-line claim

Once the learner has the core concepts, anchor practice in a realistic work problem where the learner makes the job's real decisions, sees the consequence of each, and receives explanatory feedback and a reasoning debrief; build in worked support and fading guidance, because scenarios improve applied skill when guided and lose to direct instruction when left as unguided discovery.

## Evidence base

Scenario-based and case-based learning place instruction inside an authentic problem: a trigger event, the case data a practitioner would actually see, a set of decisions, and consequences that follow from them. Merrill (2002) placed this at the head of his first principles of instruction: learning is promoted when learners are engaged in solving real-world problems. The largest quantitative base comes from the closely related problem-based learning (PBL) literature. Dochy, Segers, Van den Bossche, and Gijbels (2003) meta-analyzed 43 real-classroom studies in tertiary education and found a robust positive effect on skills (combined ES = 0.460, with no single study reporting a negative effect) but a combined effect on knowledge that was significantly negative, driven by two studies and judged non-robust; PBL students acquired slightly less knowledge but retained more of what they acquired. Gijbels, Dochy, Van den Bossche, and Segers (2005) reanalyzed the field by assessment level and found PBL effects largest when the test targeted understanding of the principles that link concepts. The operational reading: problem-anchored practice pays off on application and reasoning measures, not on recall of facts.

The closest evidence to digital branching scenarios is the virtual patient literature, in which the learner takes the practitioner's role and decides what information to gather, what the problem is, and what to do. Kononowicz et al. (2019) applied Cochrane methods to 51 randomized trials (4,696 participants): against traditional education, virtual patients improved skills (SMD = 0.90, 95% CI 0.49 to 1.32), mainly clinical reasoning and procedural skills, while knowledge was similar (SMD = 0.11, non-significant); the authors rated the evidence low quality with high heterogeneity, and the one trial comparing linear with branched designs found no knowledge difference. Thistlethwaite et al. (2012), reviewing 104 case-based learning papers in BEME Guide 23, found that learners enjoy cases and believe they learn from them, but the evidence on learning against alternative methods was inconclusive. The variable that consistently matters is guidance. Kirschner, Sweller, and Clark (2006) argued from cognitive architecture that minimally guided problem work fails for novices; Alfieri, Brooks, Aldrich, and Tenenbaum (2011) quantified it across 164 studies, with unassisted discovery losing to explicit instruction (d = -0.38) and discovery enhanced by feedback, worked examples, scaffolding, and elicited explanation beating other instruction (d = 0.30). Wouters and van Oostendorp (2013) found that instructional support inside game-based environments improved learning (d = 0.34; d = 0.62 for skills, k = 107). Hmelo-Silver, Duncan, and Chinn (2007) replied that effective PBL is itself heavily scaffolded, which is the design target here.

Two boundary conditions shape the pattern. First, the story is not the active ingredient: Adams, Mayer, MacNamara, Koenig, and Wainess (2012) found that college students learned less from narrative discovery games than from a matched slideshow, and removing the narrative theme did not significantly change posttest performance. Design effort belongs on decisions, consequences, and feedback, not on character art and plot. Second, the evidence is for a family of methods (PBL, cases, virtual patients, guided discovery), not for branching e-learning as a format, which is why this chapter rates the evidence moderate. Practitioner frameworks describe the build but are not evidence: Ruth Clark's *Scenario-Based e-Learning* (Pfeiffer, 2013) organizes design around a trigger event, case data, guidance that fades from high to low (training wheels, advisors, worksheets), instructional resources, intrinsic versus instructional feedback, and reflection; Michael Allen's CCAF model (Allen Interactions) requires every interaction to have Context, Challenge, Activity, and Feedback; Cathy Moore's scenario design work asks for realistic job decisions whose consequences are shown rather than told. This chapter covers the guided decision-practice unit. It differs from [productive-failure](../04-delivery-patterns/productive-failure.md), which deliberately places an unguided attempt before instruction, and from the [4c-id-model](../02-instructional-design/4c-id-model.md), which sequences whole tasks across a curriculum.

## When to apply

- **The job task requires judgment** - The performer must choose among actions under ambiguous cues
  (diagnose, advise, prioritize, decide whether to release) and a checklist alone cannot decide.
- **The worked-example phase is complete** - The learner has seen the reasoning modeled on at least
  one parallel case and clears the concept checks (an operational floor of about 70% correct).
  Scenarios are the practice step after modeling, consistent with Alfieri et al. (2011).
- **Transfer is the target outcome** - The criterion is applying knowledge to new cases, where
  problem-anchored methods show their advantage (Dochy et al., 2003; Kononowicz et al., 2019).
- **Real-world errors are costly or rare** - Job mistakes are unsafe, expensive, legally exposed, or
  too infrequent to practice live; the scenario lets the learner err and see the consequence free.
- **Recall is mastered but application is untested** - The learner passes recall items but has not
  used the knowledge on a case; the scenario turns the knowledge check into a performance check.

## When NOT to apply

- **First exposure to the domain** - With no schema, branching choices become guessing and the
  unassisted-discovery penalty applies (Alfieri et al., 2011). Teach and model first with
  [worked-example-effect](../01-learning-science/worked-example-effect.md).
- **Learner is overwhelmed** - Slow responses, random option selection, or repeated failure at the
  first node signal overload. Drop to a single-decision mini case or a worked example.
- **Dense new material with no scaffolding planned** - Case data, options, and consequences add
  element interactivity on top of the content. Pretrain the components first.
- **The goal is recall of definitions or facts** - Problem-anchored methods do not beat direct
  instruction on knowledge (Dochy et al., 2003; Kononowicz et al., 2019); use retrieval practice.
- **The skill is motor execution** - A screen decision does not train hand skill (crimping, safety
  wiring, soldering). Use the scenario for the decision about the motor task, not the motion.
- **The task is a fixed procedure with no judgment** - When every case follows the same steps,
  branches add authoring cost without adding decisions. Use a demonstration and guided practice.

## How to apply

- **Derive decisions from the job, not the content outline** - Interview performers or run a
  task analysis (see [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md)
  and [action-mapping-performance-analysis](../02-instructional-design/action-mapping-performance-analysis.md))
  to list the 3-5 decisions where novices go wrong. Each becomes a decision node.
- **Build every node as CCAF** - Context: the case data the real job presents (work order, document
  excerpt, customer statement). Challenge: the stake and the deliverable. Activity: a choice among
  3-4 plausible actions, each wrong one a mistake practitioners actually make (a shortcut, a parts
  swap, a premature promise). Feedback: the consequence, then the explanation.
- **Show the consequence, then explain it** - Intrinsic feedback (what happens in the world) comes
  first; instructional feedback (why, with the source excerpt that governs it) follows. Ground every
  consequence in a real document so feedback teaches the reference, not the designer's opinion. See
  [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md).
- **Front-load guidance and fade it** - Run a worked example of a parallel case, then the scenario
  with an on-demand advisor and hints, then an isomorphic scenario without them (see
  [faded-worked-examples](../04-delivery-patterns/faded-worked-examples.md)).
- **Let wrong branches rejoin** - After the consequence, return the learner to the decision with
  the new information. Spend the authoring budget on feedback and guidance, not branch count;
  branching alone has not beaten a linear case on knowledge (Kononowicz et al., 2019).
- **Close with a debrief that names the reasoning** - Show the learner's path beside the expert
  path, state the expert's rule, and have the learner write it in one sentence (see
  [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md)). Keep the story
  wrapper to a few lines of setup.

## Common misapplications

- **Discovery dressed as a scenario** - Novices are dropped into an open branching case with no
  model and no help. This is the unassisted-discovery condition that loses to explicit instruction
  (d = -0.38; Alfieri et al., 2011).
- **Story without decisions** - Long narrative, characters, and animation, then a quiz at the end.
  The narrative wrapper does not improve learning (Adams et al., 2012); only decisions count.
- **Fake choices** - One plausible option and two jokes. The learner practices spotting the
  designer's answer, not making the job's decision.
- **Bare verdicts or invented consequences** - "Incorrect, try again" teaches nothing, and a
  consequence that contradicts the governing document teaches the wrong rule.
- **Using scenarios to teach facts** - Scenarios are slow, and their payoff is skills (Dochy et al.,
  2003). Facts the decisions depend on go in pretraining and retrieval practice.
- **Branch explosion** - Dozens of deep branches that cannot be reviewed or maintained. Fewer nodes
  with strong feedback and a debrief outperform an untestable decision tree.

## Examples across domains

**Avionics (CAET lesson): intermittent ADS-B Out position fault before a trip.**

*Setup.* The lesson designer builds a three-node branching scenario in the CAET player for
entry-level technicians who have finished the ADS-B Out parameters lesson and one worked example (a
missing barometric altitude fault traced to an encoder wiring break). Trigger event: a customer's
1090ES installation, done under an STC, shows position failures (NACp and NIC) on part of last
week's flight in the FAA Public ADS-B Performance Report (PAPR), and the owner departs Friday. Case
data on screen: the work order, the PAPR excerpt, the STC equipment list and installation-manual
configuration page, the AFMS supplement's ADS-B failure annunciation text, and the pilot's squawk.

*Scenario.* Node 1 (Challenge: find the cause before Friday) offers four actions: replace the
transponder, run an IFR-6000 ramp test, check the GPS position source, or confirm the configuration
and GPS pairing against the STC. Replacing the transponder shows a parts invoice and the same
failure on the next PAPR. The ramp test (1090 ADS-B option, antenna coupler and shielding per SAFO
17002) reads valid NACp and NIC on the ground; the feedback explains that a ground test can pass
while a marginal antenna connection or antenna shadowing fails in flight. Checking the position
source shows satellite signal levels dropping as the antenna coax is flexed; an advisor button
offers a hint first. Node 2 asks how to repair: an antenna from the STC equipment list, or whatever
the shop stocks (consequence: an unapproved alteration). Node 3 asks for the return-to-service
sequence: repair, full ramp test per the installation manual, then a PAPR after at least 30 minutes
of flight in ADS-B airspace, which verifies but never replaces the ramp test.

*Debrief and follow-up.* The debrief shows the learner's path beside the expert path and names
the reasoning: read the evidence already in hand (the PAPR says what failed and when), confirm the
installation matches its approval (STC, pairing, AFMS), and test the most probable failure point
before replacing a unit. The learner types the rule in one sentence. A week later an isomorphic
scenario presents a different PAPR fault (Flight ID wrong on every flight, a configuration entry
error) with the advisor removed, so the reasoning transfers rather than the answer.

**Mortgage sales: presenting an adjustable-rate option to a self-employed borrower.**

*Setup.* A lender's onboarding program for new loan officers builds a three-node branching
scenario after a worked example in which a senior loan officer models a full needs call with a
salaried borrower, annotated at each decision. Trigger event: a borrower two years into running
their own business calls wanting "the lowest possible payment" and has heard that a 5/1 ARM starts
lower. Case data on screen: the call notes, a rate sheet with three products, the borrower's stated
income, and excerpts from Regulation Z.

*Scenario.* Node 1 asks what to establish first: quote the ARM start payment now, or gather
income documentation and the borrower's plans for the home. Quoting first branches to a
consequence: the borrower anchors on the start payment, underwriting qualifies the loan at a higher
payment because the ability-to-repay rule (12 CFR 1026.43) uses the greater of the fully indexed or
introductory rate, the approved amount shrinks, and the borrower feels misled. Node 2 asks how to
present options. Leading with the product that pays the officer the most brings a compliance
reviewer's flag citing the anti-steering rule (12 CFR 1026.36(e)); presenting the lowest-rate loan,
the lowest-rate loan without risky features, and the lowest points-and-fees loan shows the borrower
comparing them and choosing with understanding. A senior-officer advisor is available on demand.
Node 3 handles the borrower's question about the payment at the first adjustment cap.

*Debrief and follow-up.* The debrief places the learner's path beside the expert path and names
the reasoning: qualify on the payment the regulation requires, present the safe-harbor option set,
and let the borrower choose. The learner writes how they will open the next such call. Two weeks
later an isomorphic scenario (a salaried buyer asking for an interest-only loan) runs without the
advisor, and managers score the officer's next live calls against the same decision rubric.

## Quality signal

The runtime knows the scenario is producing learning when, on an isomorphic scenario with new surface features and no advisor, the learner's first-choice rate for the expert action at each node rises at least 20 percentage points over the first run, and the written debrief rule names the governing evidence or document (rubric-scored). Guard signal: matched recall items on the same content must not fall below the linear-version baseline; a drop reproduces the Dochy et al. (2003) knowledge decrement and calls for added retrieval practice, not more branches.

## Cross-references

- See [worked-example-effect](../01-learning-science/worked-example-effect.md) for the modeling step that must precede scenario practice for novices.
- See [faded-worked-examples](../04-delivery-patterns/faded-worked-examples.md) for fading the advisor and hints across successive scenarios.
- See [productive-failure](../04-delivery-patterns/productive-failure.md) for the contrasting design that places an unguided attempt before instruction.
- See [4c-id-model](../02-instructional-design/4c-id-model.md) for sequencing whole-task scenarios into task classes across a course.
- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for why case data and branching add load that guidance must offset.
- See [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md) for writing the explanation that follows each consequence.
- See [troubleshooting-instruction](../04-delivery-patterns/troubleshooting-instruction.md) and [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for diagnostic scenarios and how realistic the case must look.
- See [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) and [action-mapping-performance-analysis](../02-instructional-design/action-mapping-performance-analysis.md) for finding the decisions worth a scenario.
- See [transfer-of-learning](../01-learning-science/transfer-of-learning.md) for designing the isomorphic follow-up scenario.
