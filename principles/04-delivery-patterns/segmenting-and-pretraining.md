---
id: segmenting-and-pretraining
title: Segmenting, Pre-Training, and Microlearning Chunk Size
category: 04-delivery-patterns
aliases: [segmenting-principle, pre-training-principle, isolated-interacting-elements, isolated-elements-effect, chunk-sizing, microlearning]
evidence_strength: moderate
effect_size: "Segmenting d = 0.32 retention (k = 67) and d = 0.36 transfer (k = 56); system-paced pauses d = 0.42 retention; learner-paced Continue control d = 0.45 transfer but d = 0.19 retention, not significant (Rey et al. 2019 meta-analysis, 56 investigations, N = 7,713). Lab medians d = 0.70 segmenting and d = 0.46 pre-training (Mayer 2017 review). No pooled effect size exists for microlearning as a label (De Gagne et al. 2019 scoping review)"
key_sources:
  - "Mayer, R. E., & Chandler, P. (2001). When learning is just a click away: Does simple user interaction foster deeper understanding of multimedia messages? Journal of Educational Psychology, 93(2), 390-397. doi:10.1037/0022-0663.93.2.390"
  - "Mayer, R. E., Mathias, A., & Wetzell, K. (2002). Fostering understanding of multimedia messages through pre-training: Evidence for a two-stage theory of mental model construction. Journal of Experimental Psychology: Applied, 8(3), 147-154. doi:10.1037/1076-898X.8.3.147"
  - "Pollock, E., Chandler, P., & Sweller, J. (2002). Assimilating complex information. Learning and Instruction, 12(1), 61-86. doi:10.1016/S0959-4752(01)00016-0"
  - "Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., Schmitt, T. H., & Schneider, S. (2019). A meta-analysis of the segmenting effect. Educational Psychology Review, 31(2), 389-419. doi:10.1007/s10648-018-9456-4"
  - "Mayer, R. E. (2017). Using multimedia for e-learning. Journal of Computer Assisted Learning, 33(5), 403-423. doi:10.1111/jcal.12197"
  - "Blayney, P., Kalyuga, S., & Sweller, J. (2010). Interactions between the isolated-interactive elements effect and levels of learner expertise: Experimental evidence from an accountancy class. Instructional Science, 38(3), 277-287. doi:10.1007/s11251-009-9105-x"
  - "De Gagne, J. C., Park, H. K., Hall, K., Woodward, A., Yamane, S., & Kim, S. S. (2019). Microlearning in health professions education: Scoping review. JMIR Medical Education, 5(2), e13997. doi:10.2196/13997"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer, sequencing]
contraindicated_when:
  - learner_state.high_prior_knowledge
  - material.low_element_interactivity
  - material.static_self_paced_text
  - task_type.whole_task_integration_practice
runtime_triggers:
  - narrated_media_about_to_be_built
  - unfamiliar_component_names_ahead
  - high_element_interactivity_content_ahead
  - learner_overload_signal
  - chunk_size_decision
related: [cognitive-load-theory, dual-coding, multimedia-design-principles, animation-video-immersive-media, expertise-reversal, testing-effect, spaced-retrieval, predict-before-reveal, 4c-id-model]
---

# Segmenting, Pre-Training, and Microlearning Chunk Size

## One-line claim

When an explanation is transient or dense with interacting parts, first teach the parts' names, locations, and behaviors, then deliver the integrated explanation in meaningful, learner-paced segments cut at event boundaries, and size each chunk by how many elements the learner must hold at once, never by a target minute count.

## Evidence base

Mayer and Chandler (2001) built the segmenting finding on a narrated animation of how lightning forms. In the *Journal of Educational Psychology*, a learner-paced viewing before a continuous one beat the reverse order on problem-solving transfer (Experiment 1), and learner-paced segments on both viewings beat two continuous viewings on transfer (Experiment 2); neither experiment improved retention. In Experiment 2 each of 16 segments held one or two sentences of narration and about 8-10 seconds of animation, advanced by a CONTINUE button; Mayer and Moreno (2003) report the transfer effect as d = 1.36. Mayer, Mathias, and Wetzell (2002) supplied the companion move in the *Journal of Experimental Psychology: Applied*: across three experiments on car brakes and tire pumps, a short pre-training on the names and behaviors of the components before the narrated animation raised transfer, with a median d = 1.00 (Mayer & Moreno, 2003). Their two-stage account holds that learners first build a component model of each part and then a causal model of how a change in one part changes the next; doing both at once overloads working memory. Pollock, Chandler, and Sweller (2002) extended the sequencing to material that is hard because of element interactivity. Across four experiments in *Learning and Instruction* with Australian vocational trainees and apprentices learning electrical appliance safety tests (insulation resistance, earth continuity) and a complex electrical circuit (materials and the novice-versus-experienced split are detailed in Pollock's 2000 UNSW doctoral thesis), a first phase that presented isolated elements serially, followed by the full interacting explanation, beat two passes of the full explanation for novices, while learners who already held relevant schemas showed no difference. This chapter covers these sequencing and pacing moves; [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) supplies the theory of why they work and [dual-coding](../01-learning-science/dual-coding.md) covers pairing words with pictures.

Rey, Beege, Nebel, Wirzberger, Schmitt, and Schneider's (2019) meta-analysis in *Educational Psychology Review* pooled 56 investigations and 88 pairwise comparisons (N = 7,713). Segmenting improved retention (d = 0.32, k = 67) and transfer (d = 0.36, k = 56), lowered self-rated cognitive load (d = 0.23), and lengthened learning time (d = 0.92 toward more time), with significant heterogeneity on every outcome. Pacing type matters: system-paced segmentation, where the program inserts pauses, produced retention d = 0.42 and transfer d = 0.35, while learner-paced segmentation, where the learner clicks to continue, produced transfer d = 0.45 but a nonsignificant retention d = 0.19. Moderator tests could not separate the three candidate explanations (designer chunking, extra processing time, learner pacing), so none can be ruled out. Spanjers, van Gog, and van Merriënboer (2010) give the mechanism for dynamic media in the same journal: pauses relieve the extraneous load that transient information imposes, and segment boundaries cue the event structure of the process. Mayer's (2017) review in the *Journal of Computer Assisted Learning* lists median effects of d = 0.70 for segmenting and d = 0.46 for pre-training and notes that some principles weaken for high-knowledge learners. Those lab medians run above the meta-analytic estimate, so plan on d = 0.3-0.4. No dedicated meta-analysis of pre-training was located for this chapter; it rests on a smaller set of experiments.

Expertise reverses the isolated-elements advantage. Blayney, Kalyuga, and Sweller (2010) found first-year accounting students with lower expertise learned more from isolated elements, while students with more expertise learned more from the fully interacting format. Segment pauses behave differently: Rey et al. (2019) found larger retention gains for high prior knowledge learners (d = 0.73) than for learners with none (d = 0.29), from a small high-knowledge pool, so the expertise caution applies to pre-training and isolated passes more than to pause points. Rey et al. also assumed every included study cut at meaningful boundaries and did not test meaningful against arbitrary cuts. "Microlearning" is a label, not a tested mechanism, and its evidence is weak. De Gagne et al.'s (2019) scoping review in *JMIR Medical Education* found 17 studies (one randomized trial, six quasi-experimental); 94% measured learner reactions, 82% knowledge or skill, 29% behavior, and none reached patient or organizational results; every unit ran under 15 minutes. Monib, Qazi, and Apong (2025) in *Heliyon* synthesized 40 studies narratively, with no pooled effect, and found no agreed length (units from 1-3 to 10-15 minutes). Leong, Sung, Au, and Blanchard (2021) in the *Journal of Work-Applied Management* is a bibliometric trend analysis (476 publications, 2006-2019, plus search-trend data) and does not test effectiveness. No review isolates unit length as a cause; the ingredients with experimental support are segmenting, pre-training, spacing, and retrieval. The rating is moderate because the segmenting effect is small to medium and heterogeneous, pre-training rests on few studies, and the microlearning literature is low in rigor.

## When to apply

- **Narrated media about to be built** - A narrated animation, screencast, or video will explain a
  process at a fixed rate. Plan segment boundaries and pause controls before recording; transient
  media is where the segmenting evidence lives (Rey et al., 2019; Spanjers et al., 2010).
- **Unfamiliar component names ahead** - The upcoming explanation refers to parts, screens, or
  terms the learner cannot yet name, locate, or describe. Run a pre-training pass first (Mayer,
  Mathias, & Wetzell, 2002).
- **High element interactivity content ahead** - The next step requires holding many interacting
  elements at once (a signal chain, a fault tree, a multi-condition rule). Present the elements in
  isolation first, then the interacting whole (Pollock et al., 2002).
- **Learner overload signal** - Replays of one stretch, mid-presentation drop-off, a mental effort
  rating of 7 or more on the 1-9 scale, or component-name errors during the integrated explanation.
  Insert a segment break or return to pre-training; do not re-explain at the same density.
- **Chunk size decision** - Someone must set lesson or video length, or asks for "microlearning."
  Size chunks by element interactivity and attach spacing and retrieval, not a fixed minute count.

## When NOT to apply

- **Learner already holds the component schemas** - A pre-check shows 90% or better on naming and
  locating the parts. Skip pre-training and the isolated pass, which reverse for more expert
  learners (Blayney et al., 2010). Segment pauses can stay (Rey et al., 2019).
- **Low element interactivity material** - Independent facts that each make sense alone (placard
  abbreviations, a part-number lookup) have no interacting elements to isolate; the extra passes
  add time with nothing to relieve.
- **Static, self-paced text** - A reading or reference page is already learner-paced and not
  transient (Spanjers et al., 2010), so Continue gates add clicks, not processing time. Supply the
  structure cue with headings and signaling instead.
- **Whole-task integration practice** - The components are learned and the goal is integrated
  performance (a full troubleshoot, an end-to-end deploy). Keep the task whole; fragmenting it
  withholds the interacting phase (Pollock et al., 2002; see
  [4c-id-model](../02-instructional-design/4c-id-model.md)).

## How to apply

- **Build pre-training from names, locations, and behaviors only** - One labeled graphic, hotspot
  set, or 3D model; each part gets its name, where it sits, and one state it can take (moves or
  holds, open or closed), then a tap-the-part check. No causal chain yet (Mayer et al., 2002).
- **Run isolated elements, then the interacting whole, always both** - Phase 1 presents each
  element serially; phase 2 the full explanation with every interaction (Pollock et al., 2002).
- **Cut at event boundaries, one causal step per segment** - End each segment where one state
  change completes. Mayer and Chandler's (2001) segments held one or two narration sentences and
  about 8-10 seconds of animation; boundaries double as structure cues (Spanjers et al., 2010).
- **Auto-pause at each boundary and wait for Continue** - Learner pacing carried the transfer gain
  (d = 0.45) and designer pauses the retention gain (d = 0.42 against 0.19; Rey et al., 2019). An
  auto-pause that waits for a click gets both. Add replay per segment.
- **Size chunks by element count, not minutes** - Count the elements the learner must hold at once.
  High-count steps get their own segment and an isolated pass; low-count runs can be longer, so
  durations within one lesson vary.
- **Use selected boundaries for one retrieval or prediction prompt** - On the step just shown or
  the next one, never more ([testing-effect](../01-learning-science/testing-effect.md),
  [predict-before-reveal](../04-delivery-patterns/predict-before-reveal.md)).
- **Translate "microlearning" requests into mechanisms** - Short units are fine for reference or
  refresh if they carry event-boundary cuts, scheduled revisits
  ([spaced-retrieval](../01-learning-science/spaced-retrieval.md)), and retrieval at each revisit.
  Say plainly that evidence for length alone is weak (De Gagne et al., 2019).
- **Fade the front end as expertise grows** - A pre-check routes learners who know the parts
  straight to the segments ([expertise-reversal](../01-learning-science/expertise-reversal.md)).

## Common misapplications

- **Cutting on the clock** - A break every three minutes splits causal steps and leaves dense steps
  undivided. Cut at events and let durations vary.
- **Pre-training that teaches the whole lesson** - A pass that narrates how the parts interact is
  the integrated explanation delivered early, with all of its load.
- **Stopping at isolated elements** - Teaching each part without assembling the system yields
  fragment recall, not understanding (Pollock et al., 2002).
- **Assuming learner control secures retention** - Learner-paced segmentation did not significantly
  improve retention (Rey et al., 2019), and Continue clicks measure navigation, not processing.
  Exact values and limits need designer pauses and retrieval practice.
- **Selling unit length as the evidence** - Microlearning reviews show weak designs, mostly
  reaction-level outcomes (De Gagne et al., 2019), and no agreed length (Monib et al., 2025).
- **Forcing novice scaffolds on experienced learners** - Mandatory pre-training for someone who
  already knows the system costs time and can reduce learning (Blayney et al., 2010).

## Examples across domains

**Avionics (CAET lesson): Mode C altitude reporting from static port to ATC.**

*Setup.* A CAET lesson must explain how pressure altitude reaches the controller's display and end
at the 14 CFR Part 43 Appendix E correspondence check (reported altitude within 125 feet of the
altimeter) required by 14 CFR 91.411. The first draft was one continuous 9-minute narrated
animation covering static port, encoder, Gillham code, transponder, 1030/1090 MHz interrogation and
reply, and ATC readout. Tryout learners replayed the encoder stretch and missed transfer items on
why Mode C differs from a locally set altimeter.

*Pre-training and isolated elements.* Before any causal narration, the learner taps six hotspots on
a labeled 3D model of the panel and avionics bay: static port, static line tee, blind encoder,
transponder, control head, and belly L-band blade antenna. Each gives a name, a location, and one
behavior: the encoder converts static pressure to pressure altitude referenced to 29.92 inHg in
100-foot steps; the transponder replies on 1090 MHz when interrogated on 1030 MHz; the control head
sets the four-digit code and mode. A tap-the-part check with a 90% gate closes the pass. The
Gillham code gets its own isolated element: a table of the parallel A, B, C, and D data lines
showing that one open line makes reported altitude jump at certain altitudes rather than drift.

*Segmented narration and follow-up.* The animation is cut at event boundaries into six auto-pausing
segments with Continue and replay: pressure reaches the encoder; the encoder outputs the code; an
interrogation arrives; the reply carries the code; ATC equipment applies the local altimeter
setting; the Kollsman knob moves the needle but not the encoded value. Element count sets lengths
of 20 to 70 seconds. The Kollsman segment holds barometric setting, pressure altitude, and
indicated altitude at once, so it runs longest and ends in a prediction ("Set to 30.42, the
altimeter reads field elevation, 1,000 feet: what does Mode C report?"; answer: 500 feet). The
interacting phase is an unsegmented whole-task fault (ATC reports Mode C 300 feet off indicated
altitude in cruise). Retrieval returns at +2 days and before the bench lab where learners run the
Appendix E check.

**Software engineering onboarding: the team's deployment pipeline.**

*Setup.* New backend engineers must ship and roll back a change within their first two weeks. The
existing asset is a 25-minute recording of a senior engineer's deploy: pull request, CI build,
image push, Helm release to staging, canary rollout with automated analysis, feature-flag ramp, and
rollback. A platform lead wants it "turned into microlearning" as five equal 5-minute clips. The
last cohort could replay the video but froze when a real canary halted.

*Pre-training and isolated elements.* Before any clip plays, the new hire works through a labeled
architecture diagram with hotspots for the CI runner, image registry, Helm chart directory, staging
and production clusters, canary analysis service, flag console, and dashboards. Each gives the
name, where it lives (repo path or console URL), and one behavior: canary analysis compares new
pods' error rate and latency against baseline and halts the rollout on a breach; a flag turns a
code path off without a redeploy. A find-the-component check gates entry. Rollback versus flag-off
gets its own isolated pass because it means holding deploy state, flag state, and traffic split.

*Segmented narration and follow-up.* The recording is re-cut at events into eight segments: merge;
build and test; image published; staging deploy; canary start; analysis verdict; flag ramp;
rollback. Lengths run from 40 seconds (image published) to four minutes (analysis verdict), each
auto-pausing for Continue, with a prediction at the two decision points ("Canary error rate is
twice baseline at 10% traffic: what happens next, and what do you do?"). The interacting phase is
an unsegmented sandbox drill: trip the canary, then choose rollback or flag-off. Retrieval returns
at day 3 and day 10, a real deploy is shadowed in week two, and the reply to the platform lead
names event cuts, spacing, and retrieval, not clip length, as the mechanism.

## Quality signal

The runtime knows segmenting and pre-training are working when transfer items on the integrated system (faults or cases not shown in the lesson) beat the prior unsegmented version by d of 0.3 or more, the band Rey et al. (2019) report for transfer. In session, the pre-training check should reach 90% component naming before the integrated explanation opens, and per-segment data should locate bad cuts: a segment whose replay rate runs well above its neighbors, or whose effort rating reaches 7 or more, holds too many interacting elements and needs a split or an isolated pass.

## Cross-references

- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for the intrinsic and extraneous load theory that explains why pre-training and segmenting help.
- See [dual-coding](../01-learning-science/dual-coding.md) for pairing narration with pictures, which this chapter assumes and does not repeat.
- See [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md) for the full set of multimedia principles that segmenting and pre-training sit among.
- See [animation-video-immersive-media](../04-delivery-patterns/animation-video-immersive-media.md) for when a dynamic or 3D format is worth building at all.
- See [expertise-reversal](../01-learning-science/expertise-reversal.md) for why pre-training and isolated passes must fade as learners gain schemas.
- See [testing-effect](../01-learning-science/testing-effect.md) and [spaced-retrieval](../01-learning-science/spaced-retrieval.md) for the retrieval and spacing that make short units durable.
- See [predict-before-reveal](../04-delivery-patterns/predict-before-reveal.md) for the prompt to place at decision-point segment boundaries.
- See [4c-id-model](../02-instructional-design/4c-id-model.md) for whole-task practice after component learning.
