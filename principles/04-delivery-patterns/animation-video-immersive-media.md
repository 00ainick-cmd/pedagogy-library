---
id: animation-video-immersive-media
title: Animation, Video, 3D, and Immersive VR
category: 04-delivery-patterns
aliases: [instructional-animation, dynamic-visualization, instructional-video, 3d-visualization, immersive-virtual-reality]
evidence_strength: moderate
effect_size: "Animation vs static pictures d = 0.37 overall, d = 0.40 representational, d = 1.06 procedural-motor (Hoffler & Leutner 2007, 76 comparisons); g = 0.226 overall (Berney & Betrancourt 2016, 140 comparisons); video added to teaching g = 0.80 vs replacing teaching g = 0.28 (Noetel et al. 2021, 105 trials); 3D anatomy models d = 0.50 spatial, d = 0.30 factual (Yammine & Violato 2015); head-mounted VR vs less immersive media ES = 0.24 (Wu, Yu & Gu 2020), but VR vs desktop lowered learning d = 0.80 (Makransky, Terkildsen & Mayer 2019)"
key_sources:
  - "Hoffler, T. N., & Leutner, D. (2007). Instructional animation versus static pictures: A meta-analysis. Learning and Instruction, 17(6), 722-738. doi:10.1016/j.learninstruc.2007.09.013"
  - "Berney, S., & Betrancourt, M. (2016). Does animation enhance learning? A meta-analysis. Computers & Education, 101, 150-167. doi:10.1016/j.compedu.2016.06.005"
  - "Noetel, M., Griffith, S., Delaney, O., Sanders, T., Parker, P., del Pozo Cruz, B., & Lonsdale, C. (2021). Video improves learning in higher education: A systematic review. Review of Educational Research, 91(2), 204-236. doi:10.3102/0034654321990713"
  - "Yammine, K., & Violato, C. (2015). A meta-analysis of the educational effectiveness of three-dimensional visualization technologies in teaching anatomy. Anatomical Sciences Education, 8(6), 525-538. doi:10.1002/ase.1510"
  - "Makransky, G., Terkildsen, T. S., & Mayer, R. E. (2019). Adding immersive virtual reality to a science lab simulation causes more presence but less learning. Learning and Instruction, 60, 225-236. doi:10.1016/j.learninstruc.2017.12.007"
  - "Parong, J., & Mayer, R. E. (2018). Learning science in immersive virtual reality. Journal of Educational Psychology, 110(6), 785-797. doi:10.1037/edu0000241"
  - "Wu, B., Yu, X.-X., & Gu, X.-Q. (2020). Effectiveness of immersive virtual reality using head-mounted displays on learning performance: A meta-analysis. British Journal of Educational Technology, 51(6), 1991-2005. doi:10.1111/bjet.13023"
last_reviewed: 2026-10-01
applies_to: [acquisition, transfer]
contraindicated_when:
  - material.no_change_over_time
  - material.decorative_unrelated_imagery
  - material.high_element_interactivity_no_scaffolding
  - learner_state.low_spatial_ability
  - learner_state.overwhelmed
  - task_type.passive_viewing_no_generative_activity
runtime_triggers:
  - media_format_decision_point
  - change_over_time_is_the_concept
  - procedural_motor_content_present
  - spatial_3d_structure_content_present
  - video_or_animation_about_to_play
  - immersive_vr_module_proposed
related: [dual-coding, multimedia-design-principles, cognitive-load-theory, segmenting-and-pretraining, simulation-fidelity, icap-engagement-framework, self-explanation-prompts, predict-before-reveal, expertise-reversal]
---

# Animation, Video, 3D, and Immersive VR

## One-line claim

Choose a dynamic, 3D, or immersive format only when motion, hands-on procedure, or spatial structure is itself the thing to be learned; then counter its costs (transience, spatial demand, immersive overload) with segment pauses, learner pacing, a few key views, and a generative task after every segment, and default to a static picture everywhere else.

## Evidence base

Tversky, Morrison, and Betrancourt (2002) set the terms of the question in the *International Journal of Human-Computer Studies*: animation should suit content that changes over time (the congruence principle), yet many apparent wins for animation over static graphics dissolved under scrutiny because the animated version carried more information or more interactivity, and animations were often too complex or too fast to be perceived accurately (the apprehension principle). Their proposed remedy was judicious interactivity. Hoffler and Leutner's (2007) meta-analysis in *Learning and Instruction* (26 studies, 76 comparisons) then found a medium overall advantage of animation over static pictures (d = 0.37, 95% CI 0.25-0.49) that grew when the animation was representational rather than decorational (d = 0.40), highly realistic such as video (d = 0.76), or aimed at procedural-motor knowledge (d = 1.06, 95% CI 0.72-1.40). Berney and Betrancourt (2016) updated the picture in *Computers & Education* with 61 studies, 140 comparisons, and 7,036 participants: a smaller overall effect (g = 0.226, 95% CI 0.12-0.33), larger with spoken commentary (g = 0.336), with system-paced animation (g = 0.309, measured against static pictures rather than against learner-paced animation), and with no accompanying text (g = 0.883). Transience is the mechanism behind the apprehension problem, and pacing is the direct fix: Hasler, Kersten, and Sweller (2007) found learner-paced animation (discrete segments, or stop and play buttons) produced higher test scores with lower cognitive load than system-paced animation, on high element interactivity questions only, even though the buttons were rarely pressed; Schwan and Riempp (2004) found learners given stop, replay, reverse, and speed controls on knot-tying videos spent their time unevenly on the hard parts and acquired the knots in substantially less time than viewers of non-interactive video.

For video and 3D the best evidence is meta-analytic. Noetel et al. (2021) pooled 105 randomized trials with 7,776 college students in the *Review of Educational Research*: swapping video in for existing teaching produced a small gain (g = 0.28), while adding video to existing teaching produced a strong one (g = 0.80). Yammine and Violato (2015) pooled 36 anatomy studies (2,226 participants) and found three-dimensional visualization improved spatial knowledge (d = 0.50) more than factual knowledge (d = 0.30), with satisfaction gains (d = 0.28) that are not themselves learning. Spatial ability moderates both directions: Hoffler (2010), across 27 experiments, found high-spatial learners learned more from visualizations (r = 0.34) and that animations and 3D views can compensate for low spatial ability, whereas Huk (2006) found interactive 3D cell models helped only high-spatial students and overloaded low-spatial ones. In anatomy, high spatial ability and self-directed examination from several perspectives improved spatial learning (Garg, Norman, & Sperotable, 2001), and a follow-up reported only a minor role for multiple orientations (Garg et al., 2002), which supports a small set of learner-selected key views over free, unbounded rotation.

Immersive VR is the boundary case and the reason this chapter is rated moderate rather than strong. Wu, Yu, and Gu's (2020) meta-analysis of 35 studies found head-mounted displays beat less immersive approaches by a small margin (ES = 0.24), larger for K-12, science, and skill development. Controlled experiments qualify that average sharply. Makransky, Terkildsen, and Mayer (2019) gave 52 students the same science simulation on a desktop or a headset: VR raised presence (d = 1.30) but lowered learning (d = 0.80) and raised EEG-indexed cognitive load (d = 0.59). Parong and Mayer (2018) found a desktop slideshow beat a VR biology lesson on the posttest while VR won on interest; segmenting the VR lesson and requiring a written summary after each segment raised posttest scores with no loss of interest. Makransky, Andreasen, Baceviciute, and Mayer (2021) found VR no better than video across 296 students, but a post-lesson enactment task with real manipulatives improved procedural knowledge (partial eta squared = 0.144) and transfer (0.088) in the VR group only. Effects across all four media are heterogeneous, moderator-dependent, and drawn from media-comparison designs that Tversky et al. (2002) showed are easy to confound, so the rule is a selection rule with known conditions, not a blanket advantage.

## When to apply

- **Media format decision point** - A format is being chosen. Classify the content first: change
  over time, hands-on procedure, spatial structure, or none.
- **Change over time is the concept** - The target is a mechanism the learner cannot see directly
  (a capsule expanding, valves opening in phase). Use representational animation (Hoffler &
  Leutner, 2007: d = 0.40).
- **Procedural-motor content present** - The learner must perform a manual procedure with tools.
  Show the hands on realistic video or animation (Hoffler & Leutner, 2007: d = 1.06
  procedural-motor; d = 0.76 highly realistic).
- **Spatial 3D structure content present** - The target is how parts sit relative to each other
  and spatial items are on the test (Yammine & Violato, 2015: d = 0.50 spatial).
- **Video or animation about to play** - Before a dynamic segment ships, confirm it has pause
  points, replay, and a generative task after it; transience defeats unpaced media.
- **Immersive VR module proposed** - Run the VR rung of the selection ladder before building; if
  it passes, build the module segmented, with a generative task after each segment.

## When NOT to apply

- **The content does not change over time** - Labels, schematics, tables, wiring diagrams, and
  part identification are structure, not change. Animation has no congruence advantage here, and
  information-matched static graphics generally teach as well at lower cost (Tversky et al., 2002).
- **The motion is decorative** - Transitions, spinning logos, ambient motion, and fly-ins add no
  content and pull the eye. Only representational motion earns the effect (Hoffler & Leutner, 2007).
- **High element interactivity with no scaffolding** - A continuous, system-paced animation of many
  interacting parts with no segments or pauses overloads working memory (Hasler et al., 2007).
- **Low spatial ability learner facing an unconstrained 3D model** - Interactive 3D models helped
  only high-spatial learners and overloaded low-spatial ones (Huk, 2006). Use snap-to key views
  or a labeled static pair until spatial items are answered correctly.
- **Learner is overwhelmed or the medium adds load** - VR raised cognitive load and cut learning
  (Makransky et al., 2019). Add no VR or dense animation for a learner failing basics right now.
- **Passive viewing with no generative activity** - Video or VR as the whole lesson, with nothing
  to predict, explain, summarize, or enact. Video that replaces teaching earns g = 0.28 versus
  g = 0.80 when it supplements (Noetel et al., 2021).

## How to apply

- **Run the selection ladder in order** - Static diagram by default; animation if change over time
  is the concept; realistic video if a hands-on procedure is; rotatable 3D if spatial relations
  are tested; VR only if scale, viewpoint, or navigation is the objective, desktop 3D or video
  cannot deliver it, and the lesson can carry segmenting plus generative tasks.
- **Build the static version first as the parts map** - A labeled diagram that stays on screen
  names parts before motion ([segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md)).
- **Cut motion into cause-and-effect segments that pause themselves** - One step per segment,
  auto-pause at each boundary, a Next button, a visible trace of the prior state. Segments and
  stop-play buttons both beat continuous play though buttons were rarely used (Hasler et al., 2007).
- **Hand the learner the controls** - On procedural video give replay, step back, half speed, and
  scrub (Schwan & Riempp, 2004); on a mechanism, swap the play button for a slider on the input
  variable (Tversky et al., 2002). Narrate, per [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md).
- **Place video inside instruction, never instead of it** - Explain, play, then practice (Noetel et al., 2021).
- **Choose 2-4 key views for every 3D model** - Name each view, give snap-to-view buttons, limit
  rotation range, keep labels attached, and test on an orientation not shown.
- **In VR, segment and require a generative act after every segment** - A written summary (Parong &
  Mayer, 2018) or enactment with real parts (Makransky et al., 2021); pretrain the controls
  outside the headset; measure learning, never presence alone.
- **Follow every dynamic segment with a generative task** - Predict the next state, explain the
  cause, label a frame, or perform the step ([icap-engagement-framework](../01-learning-science/icap-engagement-framework.md),
  [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md)).

## Common misapplications

- **Animating because it looks modern** - Motion with no change-over-time content is decoration;
  the meta-analytic gains belong to representational animation.
- **Crediting the medium for extra content** - The animated version shows steps the static one
  omitted, then "wins". Match information before comparing (Tversky et al., 2002).
- **One long system-paced clip with a play button** - Minutes of continuous motion are transient
  by design; earlier states are gone before the learner can relate them.
- **An auto-spinning or free-orbit 3D model** - Spin is decoration; interactive 3D with no key
  views risks overloading low-spatial learners (Huk, 2006).
- **Treating presence or satisfaction as learning** - VR raised presence by d = 1.30 while lowering
  learning by d = 0.80 (Makransky et al., 2019); 3D satisfaction gains (d = 0.28) are not test gains.
- **A headset for force-and-feel motor skills** - Without haptics, VR cannot train seating force
  or tool feel; the bench still carries that practice.

## Examples across domains

**Avionics (CAET lesson): Choosing the medium for altimeter internals and connector pin work.**

*Setup.* A CAET lesson has two targets: (a) how a sensitive altimeter turns static pressure into a
pointer reading, ahead of the 14 CFR Part 43 Appendix E altimeter tests, and (b) inserting and
extracting rear-release crimp contacts in a MIL-spec circular connector with the specified
M81969-series tool, per AC 43.13-1B Chapter 11. For each, the designer can build a static exploded
diagram, a narrated motion-graphics animation, a rotatable 3D model, or VR.

*Medium choice and build.* For (a), change is the concept: a static exploded diagram first serves
as the parts map (case, static fitting, aneroid capsule stack, rocking shaft, sector and pinion,
pointers, barometric knob and scale), then a narrated schematic animation runs in three
auto-pausing segments: case pressure falls, the capsules expand, the linkage turns the pointer. A
pressure-altitude slider replaces the play button and a ghost pointer marks the prior reading. A
3D case model gets two key views only (rear static fitting, side cutaway); VR is rejected, since
no navigation or scale goal exists. For (b), the content is procedural-motor, so the core medium
is close-up first-person video in four auto-pausing steps (select tool, seat the contact until the
retention tines lock behind its shoulder, pull test, extract) with replay, frame step, and half
speed. A 3D insert model offers two snap views, mating face and rear grommet face, to show the
mirrored cavity layout. VR is rejected: no haptics for seating force.

*Generative task and follow-up.* After (a), the learner answers: "The static port ices over during
descent. What does the altimeter show, and which part of the chain stops moving?" (frozen at the
blockage altitude; the capsules stop changing), then matches capsule lag to the hysteresis and
after-effect tests and linkage drag to the friction test. After (b), the learner places three
wires by cavity letter on the rear-face view and says why the pull test follows insertion. The
video supplements the bench rather than replacing it: replays should cluster on seating and
extraction, and a first-attempt bench check of correct cavity and pull-test pass confirms the fit.

**Anatomy education: the cardiac cycle and the spatial layout of the heart.**

*Setup.* A first-year anatomy course for health-professions students must teach (a) which valves
are open in each phase of the cardiac cycle and (b) how the four chambers sit in the chest, which
students must later recognize on oblique images. The faculty can build textbook-style static
diagrams, a narrated animation, a rotatable 3D heart, or a headset "walk-through" of the heart.

*Medium choice and build.* For (a), timing is the concept: a static labeled heart names the
chambers and valves first, then a narrated animation runs in four auto-pausing segments
(isovolumetric contraction with all valves closed, ejection with the semilunar valves open,
isovolumetric relaxation with all valves closed, filling with the atrioventricular valves open),
driven by a phase slider tied to a pressure trace. For (b), spatial relations are tested, so a 3D
heart opens on three snap-to key views: anterior (the right ventricle forms most of the front),
posterior (the left atrium forms most of the base), and superior with the atria removed (the
valve plane), with rotation limited between them. Students who score low on a short
mental-rotation screen get labeled view pairs before any free rotation (Huk, 2006). The headset
tour is approved only as two short segments, each ending outside the headset with a written
summary, the condition that raised VR posttest scores (Parong & Mayer, 2018).

*Generative task and follow-up.* After each animation segment, students predict which valves open
next and why (the pressure gradient), then mark the phase on a blank trace. After the 3D module,
they name chambers on an oblique view they have not seen. A delayed quiz one week later scores
spatial and factual items separately, since Yammine and Violato (2015) found larger 3D effects on
spatial items, and the course keeps the headset only if spatial scores rise, not if satisfaction alone does.

## Quality signal

The chosen medium earns its place when learners using it beat a content-matched static version on the targeted outcome (procedure performance, mechanism transfer item, or unseen-orientation spatial item) by d > 0.3 on a delayed test; presence or satisfaction gains never substitute for that check. In-session signals: generative-task accuracy of at least 70% after each segment, replay use concentrated on the hardest segments, and a gap of no more than 15 percentage points between low- and high-spatial-ability learners on 3D items.

## Cross-references

- See [dual-coding](../01-learning-science/dual-coding.md) for why pairing narration with a visual helps, which this chapter assumes rather than repeats.
- See [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md) for narration, signaling, coherence, and contiguity rules inside any animation or video.
- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for the transient-information and overload mechanisms behind the pacing and VR cautions.
- See [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md) for how to cut animations into learner-paced pieces and name parts first.
- See [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for choosing physical, functional, and psychological fidelity when the medium becomes a simulation.
- See [icap-engagement-framework](../01-learning-science/icap-engagement-framework.md) for ranking the generative tasks that follow each segment.
- See [self-explanation-prompts](../04-delivery-patterns/self-explanation-prompts.md) for the explain-the-cause prompts used after mechanism animations.
- See [predict-before-reveal](../04-delivery-patterns/predict-before-reveal.md) for placing a prediction before each animation segment plays.
- See [expertise-reversal](../01-learning-science/expertise-reversal.md) for why advanced learners may need fewer cues, views, and pauses than novices.
