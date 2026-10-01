---
id: icap-engagement-framework
title: "ICAP Framework: Interactive, Constructive, Active, Passive Engagement"
category: 01-learning-science
aliases: [icap, icap-framework, active-constructive-interactive, cognitive-engagement-modes]
evidence_strength: moderate
effect_size: "Lab, random assignment, immediate posttest: Cohen's d = 0.65 active vs passive, 0.54 constructive vs active, 0.64 interactive vs constructive, 1.88 interactive vs passive on gain scores (Menekse et al. 2013, Study 2, n = 120); classroom: normalized gain 0.394 constructive vs 0.301 active, interactive 0.318 not different from active (Chi et al. 2018, 51 classes); active learning vs lecture in undergraduate STEM: +0.47 SD on exams and concept inventories, failure 1.5 times more likely under lecture (Freeman et al. 2014 meta-analysis, 225 studies)"
key_sources:
  - "Chi, M. T. H., & Wylie, R. (2014). The ICAP framework: Linking cognitive engagement to active learning outcomes. Educational Psychologist, 49(4), 219-243. doi:10.1080/00461520.2014.965823"
  - "Chi, M. T. H. (2009). Active-constructive-interactive: A conceptual framework for differentiating learning activities. Topics in Cognitive Science, 1(1), 73-105. doi:10.1111/j.1756-8765.2008.01005.x"
  - "Menekse, M., Stump, G. S., Krause, S., & Chi, M. T. H. (2013). Differentiated overt learning activities for effective instruction in engineering classrooms. Journal of Engineering Education, 102(3), 346-374. doi:10.1002/jee.20021"
  - "Chi, M. T. H., Adams, J., Bogusch, E. B., Bruchok, C., Kang, S., Lancaster, M., Levy, R., Li, N., McEldoon, K. L., Stump, G. S., Wylie, R., Xu, D., & Yaghmourian, D. L. (2018). Translating the ICAP theory of cognitive engagement into practice. Cognitive Science, 42(6), 1777-1832. doi:10.1111/cogs.12626"
  - "Freeman, S., Eddy, S. L., McDonough, M., Smith, M. K., Okoroafor, N., Jordt, H., & Wenderoth, M. P. (2014). Active learning increases student performance in science, engineering, and mathematics. Proceedings of the National Academy of Sciences, 111(23), 8410-8415. doi:10.1073/pnas.1319030111"
  - "Thurn, C. M., Edelsbrunner, P. A., Berkowitz, M., Deiglmayr, A., & Schalk, L. (2023). Questioning central assumptions of the ICAP framework. npj Science of Learning, 8, 49. doi:10.1038/s41539-023-00197-4"
  - "Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning: An RCT introducing a novel research-based design in an authentic educational setting. Scientific Reports, 15, 17458. doi:10.1038/s41598-025-97652-6"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer]
contraindicated_when:
  - material.high_element_interactivity_no_scaffolding
  - material.arbitrary_rules_no_rationale
  - task_type.purely_verbal_definition_recall
  - task_type.no_generative_partner_available
runtime_triggers:
  - interaction_type_being_selected
  - passive_screen_run_detected
  - lesson_interaction_audit
  - inference_or_transfer_criterion_present
  - tutor_explanation_about_to_start
  - learner_output_copies_source
related: [self-explanation-prompts, predict-before-reveal, socratic-interlocutor, socratic-questioning, concept-mapping, worked-example-effect, testing-effect, troubleshooting-instruction, multimedia-design-principles, mastery-threshold-transfer-test-design]
---

# ICAP Framework: Interactive, Constructive, Active, Passive Engagement

## One-line claim

Classify every learning activity by what the learner overtly produces (Passive: receives; Active: manipulates or selects what is given; Constructive: generates ideas beyond what is given; Interactive: co-generates in a dialogue where each party builds on the other's turn), then build at the highest mode the content, the learner's schema, and the time budget support, because learning on inference-level measures rises in the order P < A < C < I.

## Evidence base

Chi (2009) in *Topics in Cognitive Science* proposed separating "active learning" into observable overt activities and derived a testable ordering: interactive beats constructive, which beats active, which beats passive. Chi and Wylie (2014) in *Educational Psychologist* formalized the ICAP framework. Passive is receiving without doing anything else (reading, watching, listening). Active is manipulating the given material with focused attention (highlighting, pausing and rewinding a video, copying a solution step, choosing from a menu). Constructive is producing an output with ideas beyond the materials (self-explaining, drawing a diagram the source did not supply, comparing cases, generating predictions, posing questions, concept mapping). Interactive is dialogue meeting two criteria: both partners' turns are primarily constructive, and turns alternate frequently; the partner may be a peer, an instructor, or a computer agent that responds in a content-relevant way. Two points drive e-learning design. Chi and Wylie classify selecting an answer from a menu in a computer-based system as active, so an authoring tool's "interactive" label says nothing about ICAP mode. And the intended mode can be enacted lower, as when a learner "summarizes" by deleting and copying sentences. The authors tie each mode to hypothesized knowledge-change processes (storing, integrating, inferring, co-inferring) and state that those processes have not been directly verified.

The cleanest four-mode test is Menekse, Stump, Krause, and Chi (2013, Study 2) in the *Journal of Engineering Education*: 120 engineering undergraduates were randomly assigned to read a materials-science text aloud (passive), highlight it (active), answer generative questions about graphs and figures (constructive), or answer the same questions in pairs to consensus (interactive). Posttest scores rose from 55% to 62% to 73% to 82%; every pairwise difference was significant, with Cohen's d of 0.65 (A vs P), 0.54 (C vs A), 0.64 (I vs C), and 1.88 (I vs P). In their classroom Study 1, interactive and constructive activities both beat active ones on postclass quizzes, but interactive beat constructive only on the harder inference questions. At course scale, Freeman et al. (2014) in *PNAS* meta-analyzed 225 undergraduate STEM studies: active learning raised exam and concept-inventory performance by 0.47 SD, and failure rates were 21.8% with active learning versus 33.8% with traditional lecture (risk ratio 1.5). Freeman's "active learning" pools ICAP's active, constructive, and interactive activities, so it prices lecture-only teaching rather than ranking the modes. For AI-tutor dialogue, Kestin et al. (2025) in *Scientific Reports* ran a crossover RCT (n = 194) in Harvard introductory physics: a research-based AI tutor produced median learning gains more than double those of an in-class active-learning session (0.73-1.3 SD by quantile regression, 0.63 by linear regression) in a median 49 minutes, on immediate posttests over two topics, without coding whether student turns were generative.

The boundary conditions are substantial, which is why evidence strength is moderate. Chi et al. (2018) in *Cognitive Science* report a 5-year K-12 translation project: teachers' written directives for intended constructive classes used generative verbs only 53% of the time, directives for intended interactive classes were collaborative only 7% of the time, and students responded manipulatively 82-98% of the time in every mode; explicitly generative questions drew generative answers 42% of the time versus 5% for active questions. Pooled over 51 classes, constructive classes outgained active ones (normalized gain 0.394 vs 0.301), but interactive classes (0.318) did not differ from active, which the authors attribute to students not co-generating; a multilevel model found no overall mode effect, with only the constructive vs active contrast significant. Chi and Wylie (2014) list their own override conditions: shallow recall items do not separate the modes (easy multiple-choice items were flat across conditions in Menekse et al.); explaining adds nothing where rules are arbitrary (selecting an English article plus its rule taught no more than selecting the article); learners without a relevant schema cannot bootstrap through constructive prompts (emergent processes); and two tasks in the same mode can differ widely (inventing a rule beat comparing cases, both interactive). Thurn, Edelsbrunner, Berkowitz, Deiglmayr, and Schalk (2023) in *npj Science of Learning* argue that overt behavior is ambiguous about covert processing and that no single order of modes fits every context, and they recommend formative assessment of what learners actually understand. Menekse et al. measured immediate gains only, and their passive and active groups read a text while the constructive and interactive groups worked from graphs with question prompts. Use ICAP as a design rule and coding tool checked against learner output, not as a guaranteed effect size.

## When to apply

- **Interaction type being selected** - A block is being chosen for a screen (tabs, flip card,
  hotspot, drag-and-drop, multiple choice, video, tutor turn): classify it by learner output first.
- **Passive screen run detected** - Three or more screens of reading, watching, or clicking Next or
  reveal: the e-learning analog of lecture-only teaching (Freeman et al., 2014). Insert a prompt.
- **Lesson interaction audit** - Before release or revision, tally interactions by intended and
  enacted mode; designers misjudge their own designs (Chi et al., 2018).
- **Inference or transfer criterion present** - The test includes inference, troubleshooting, or
  transfer items, where mode differences appear (Menekse et al., 2013; Chi & Wylie, 2014).
- **Tutor explanation about to start** - Convert the explanation into an elicitation the tutor then
  builds on (see [socratic-interlocutor](../05-tutor-personas/socratic-interlocutor.md)).
- **Learner output copies source** - A constructive prompt answered with restated screen text or an
  unexplained pick was enacted as active; reprompt for a generated idea.

## When NOT to apply

- **New, high-element-interactivity content with no schema and no scaffold** - Learners without a
  relevant schema cannot bootstrap through constructive prompts; prompts on emergent processes
  yielded only surface detail (Chi & Wylie, 2014). Teach with a worked example first, then upgrade
  (see [worked-example-effect](../01-learning-science/worked-example-effect.md)).
- **Arbitrary rules with no rationale** - Frequency pairing tables, part-number schemes, color codes,
  vocabulary. Explaining an English article choice taught no more than selecting it (Chi & Wylie,
  2014); Chi et al. (2018) excluded foreign-language classes on this ground. Use
  [testing-effect](../01-learning-science/testing-effect.md) retrieval instead.
- **The criterion is verbatim definition recall** - The modes do not separate on recall-level
  measures (Chi & Wylie, 2014), so constructive time buys nothing measurable; retrieve with feedback.
- **No generative partner is available** - A dominant peer leaves the listener active, intended
  interactive classes whose directives rarely set a dialogue pattern learned no more than active ones
  (Chi et al., 2018), and a tutor not grounded in lesson content fails the content-relevant
  criterion. Run an individual constructive task instead.

## How to apply

- **Code by the learner's output, not the widget** - Did the learner produce an idea not on the
  screen? If no: did they act on a specific part (select, highlight, drag, flip, pause, copy)? Yes is
  Active, no is Passive. If yes: did a partner's next turn use that idea and require another, and
  again? Yes is Interactive, no is Constructive.
- **Upgrade click-to-reveal blocks** - Tabs, accordions, label-only hotspots, and Next buttons are
  passive content behind an active click. Require a committed prediction or a "which panel explains
  this symptom, and why" answer before the reveal (see [predict-before-reveal](../04-delivery-patterns/predict-before-reveal.md)).
- **Upgrade flip cards, labeled graphics, and multiple choice** - Require a typed answer before a
  flip, or turn the set into a sort with a one-sentence justification per placement. Turn a labeled
  diagram into a predict-the-fault hotspot (click where you would check first, type why). Add a typed
  justification to multiple choice (see [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md)).
- **Write generative verbs into every directive** - Explain why, predict, compare, justify, draw,
  diagnose, "what changes if"; not select, identify, highlight, or match (Chi et al., 2018).
- **Read the enacted output** - Sample responses at each constructive point; a restatement of source
  text is active, so follow it with a narrower generative ask.
- **Make interactive turns co-generative** - An AI tutor turn uses the learner's last idea, adds one
  element (a counter-case, a constraint, a measurement), stays at 2-3 sentences, and ends by
  requiring a new generated turn; alternating mini-lectures are not interactive (Chi & Wylie, 2014).
  Peers must each state a reason and answer the other's before reaching consensus.
- **Test at the inference level and budget the mix** - Include inference items (see
  [mastery-threshold-transfer-test-design](../03-assessment-science/mastery-threshold-transfer-test-design.md)).
  Constructive work costs time and free-text scoring: keep passive screens for orientation, close
  each segment with a constructive task, and reserve interactive exchanges for 1-2 key concepts.

## Common misapplications

- **Counting clicks as engagement** - Authoring tools call tabs, flip cards, and menu choices
  interactive; ICAP classifies menu selection as active (Chi & Wylie, 2014). Forty clicks and no
  generated ideas make a passive and active lesson.
- **Constructive in name, active in fact** - A reflection box that accepts anything and is read by no
  one. Explicit generative questions drew generative answers only 42% of the time (Chi et al., 2018).
- **Group work labeled interactive** - Pairing learners with no rule that each builds on the other's
  reasoning; such classes learned no more than active ones (Chi et al., 2018).
- **The mini-lecture tutor** - An AI tutor that answers in paragraphs while the learner types "ok"
  puts the learner in passive mode, whatever the chat interface suggests.
- **Treating the ladder as absolute** - Forcing constructive work on arbitrary conventions or
  schema-free content, or assuming tasks in one mode are equal; ICAP is a coarse first cut on overt
  behavior (Chi & Wylie, 2014; Thurn et al., 2023).
- **Judging the upgrade with a recall quiz** - Easy items were flat across all four modes in
  Menekse et al. (2013); a recall-only check reports "no difference" for a real gain.

## Examples across domains

**Avionics (CAET lesson): Auditing a VOR and ILS receiver lesson by ICAP mode.**

*Setup.* A Rise-style CAET lesson on VHF navigation receivers has 14 interactions: a narrated intro
and four Next-button text screens; a tab block (VOR 108.00-117.95 MHz, localizer on odd tenths
108.10-111.95 MHz, paired glideslope 329.15-335.00 MHz); an accordion on 90 Hz and 150 Hz
modulation; an accordion on the 14 CFR 91.171 VOR check (VOT and ground checkpoint ±4 degrees,
airborne checkpoint ±6 degrees, dual receivers within 4 degrees of each other); an eight-card flip
set of squawks and causes; a labeled graphic of the installation (nav antenna, coax, diplexer, NAV
receiver, glideslope receiver, CDI); and four recall multiple-choice items. The audit tally is 6
passive, 8 active, 0 constructive, 0 interactive.

*ICAP application.* The flip set becomes a sort-and-justify: learners drag each squawk into
"shared front end," "NAV branch," "glideslope branch," or "indicator" and type one sentence of
reasoning before feedback ("Localizer centers normally, glideslope flag on every ILS" belongs in the
glideslope branch because a working localizer proves the antenna and coax up to the diplexer). The
labeled graphic becomes a predict-the-fault hotspot on the same squawk: click the first point to
check and type why. One multiple-choice item gains a typed justification. The tab block's bands and
localizer-glideslope pairings stay recall content, since they cannot be reasoned out. One interactive
exchange follows the hotspot. Tutor: "You cleared the antenna because the localizer works. The
diplexer also feeds the localizer. Which part of it does the working localizer not prove?" Learner:
"The glideslope output." Tutor: "With a ramp test set that can inject a glideslope signal, where
do you inject first to split the coax from the receiver?" Each turn uses the other's last idea.

*Follow-up.* The revised tally is 5 passive, 6 active, 3 constructive, 1 interactive, with
constructive or interactive work closing each segment. Two remaining recall items become inference
items on squawks not taught in the lesson. The designer reads 20 justifications from the first
cohort and codes each as generated or copied; if fewer than half are generated, the prompt is
narrowed and the hotspot feedback is rewritten.

**Undergraduate STEM (physics lecture): Converting a collision segment in introductory mechanics.**

*Setup.* A 180-seat introductory mechanics lecture spends 15 minutes on Newton's third law: slides
derive the forces in a collision between a loaded truck and a compact car while students copy the
slides (active) or watch (passive). The matching midterm item is recall: "State Newton's third law."
Lecture-only STEM sections fail 33.8% of students versus 21.8% with active learning (Freeman et al., 2014).

*ICAP application.* Before any slide, students commit on a clicker to which vehicle exerts the
larger force during impact (active) and write one sentence why (constructive). Each student then
draws free-body diagrams for both vehicles during contact; drawing a diagram the source does not
supply is constructive, while copying a shown one is active (Chi & Wylie, 2014). Pairs compare
diagrams under a rule: each partner states one reason and must answer the other's reason before
they revote (interactive), mirroring the consensus pairs in Menekse et al. (2013). The instructor
then shows the equal and opposite forces and asks pairs why the car's occupants still undergo the
larger acceleration (a = F/m).

*Follow-up.* The recall midterm item is replaced by an inference item on a new case: a student
pushes a stalled car that does not move; compare the two forces in the third-law pair and explain
why the car does not accelerate. The instructor samples 20 written justifications; answers that
only restate "equal and opposite" without mass or net force are coded active and get a targeted
prompt next lecture. Homework adds an AI tutor told to ask for each step and build on the student's
last answer; Kestin et al. (2025) report large immediate gains for a research-based physics AI tutor.

## Quality signal

The runtime knows ICAP is applied when every lesson segment contains at least one constructive or interactive interaction in the manifest, and coded learner outputs at intended constructive points contain a content-relevant idea not on the screen at least 50% of the time (classroom baseline 42%, Chi et al., 2018). The learning signal belongs on inference and transfer items: the upgraded lesson should beat its prior version on matched cohorts, by less than the lab's adjacent-mode d of 0.54-0.65 (Menekse et al., 2013), with no expected difference on recall items.

## Cross-references

- See [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md) for the workhorse constructive move and its prompt formats.
- See [predict-before-reveal](../04-delivery-patterns/predict-before-reveal.md) for upgrading click-to-reveal tabs, accordions, and video into committed prediction.
- See [socratic-interlocutor](../05-tutor-personas/socratic-interlocutor.md) and [socratic-questioning](../04-delivery-patterns/socratic-questioning.md) for sustaining the interactive mode in tutor dialogue.
- See [concept-mapping](../04-delivery-patterns/concept-mapping.md) for a constructive task whose output can be coded for generated versus copied nodes.
- See [worked-example-effect](../01-learning-science/worked-example-effect.md) for the move before constructive prompts when the learner has no schema, and [testing-effect](../01-learning-science/testing-effect.md) for arbitrary conventions and recall criteria where ICAP upgrades do not pay.
- See [troubleshooting-instruction](../04-delivery-patterns/troubleshooting-instruction.md) for predict-the-fault interactions in technical domains.
- See [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md) for screen-level design that keeps generative prompts from adding extraneous load.
- See [mastery-threshold-transfer-test-design](../03-assessment-science/mastery-threshold-transfer-test-design.md) for writing the inference items that detect mode differences.
