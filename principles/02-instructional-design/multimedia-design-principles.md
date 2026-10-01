---
id: multimedia-design-principles
title: Multimedia Design Principles (Mayer)
category: 02-instructional-design
aliases: [mayer-principles, cognitive-theory-of-multimedia-learning, e-learning-design-principles, coherence-principle, seductive-details-effect, signaling-principle, redundancy-principle, contiguity-principle, personalization-principle]
evidence_strength: strong
effect_size: "Lab medians d = 0.70 coherence, 0.46 signaling, 0.87 redundancy, 0.79 spatial and 1.30 temporal contiguity, 0.70 segmenting, 0.46 pre-training, 0.72 modality, 0.79 personalization, 0.74 voice, 0.36 embodiment (Mayer 2017 review); independent meta-analytic estimates are smaller, as pooled in the Noetel et al. 2022 meta-meta-analysis: removing seductive details g = 0.33 (Sundararajan & Adesope 2020, k = 68), signaling g = 0.43 (Schneider et al. 2018, k = 209), contiguity g = 0.74 (Ginns 2006, k = 46), all design principles g = 0.38 (k = 808); Mayer's own corpus g = 0.37 across 591 effects (Cromley & Chen 2025 meta-analysis)"
key_sources:
  - "Mayer, R. E. (2017). Using multimedia for e-learning. Journal of Computer Assisted Learning, 33(5), 403-423. doi:10.1111/jcal.12197"
  - "Noetel, M., Griffith, S., Delaney, O., Harris, N. R., Sanders, T., Parker, P., del Pozo Cruz, B., & Lonsdale, C. (2022). Multimedia design for learning: An overview of reviews with meta-meta-analysis. Review of Educational Research, 92(3), 413-454. doi:10.3102/00346543211052329"
  - "Cromley, J. G., & Chen, R. (2025). A meta-analysis of Richard Mayer's multimedia learning research: Searching for boundary conditions of design principles across multiple media types. Educational Research Review, 49, 100730. doi:10.1016/j.edurev.2025.100730"
  - "Sundararajan, N., & Adesope, O. (2020). Keep it coherent: A meta-analysis of the seductive details effect. Educational Psychology Review, 32(3), 707-734. doi:10.1007/s10648-020-09522-4"
  - "Schneider, S., Beege, M., Nebel, S., & Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. Educational Research Review, 23, 1-24. doi:10.1016/j.edurev.2017.11.001"
  - "Ginns, P. (2006). Integrating information: A meta-analysis of the spatial contiguity and temporal contiguity effects. Learning and Instruction, 16(6), 511-525. doi:10.1016/j.learninstruc.2006.10.001"
  - "Adesope, O. O., & Nesbit, J. C. (2012). Verbal redundancy in multimedia learning environments: A meta-analysis. Journal of Educational Psychology, 104(1), 250-263. doi:10.1037/a0026147"
last_reviewed: 2026-10-01
applies_to: [acquisition, retention, transfer]
contraindicated_when:
  - learner_state.high_prior_knowledge
  - learner_state.requires_text_alternative
  - material.low_element_interactivity
  - material.static_self_paced_text
  - task_type.whole_task_integration_practice
runtime_triggers:
  - narrated_media_about_to_be_built
  - media_asset_added
  - diagram_or_image_added
  - history_or_incident_page_drafted
  - lesson_pre_publish_review
  - learner_overload_signal
related: [dual-coding, cognitive-load-theory, segmenting-and-pretraining, accessible-design-wcag-udl, animation-video-immersive-media, expertise-reversal, plain-language-simplified-technical-english, voice-style-agency-preserving-language, 4c-id-model]
---

# Multimedia Design Principles (Mayer)

## One-line claim

Build every narrated or illustrated lesson page against one checklist: cut everything the objective does not need (including seductive details, decorative images, and background music), signal what matters, place words beside and in step with the graphics they describe, narrate a graphic instead of printing the narration under it, segment and pre-train complex content, and speak in a conversational human voice; then relax each rule only where its boundary condition applies.

## Evidence base

Mayer's cognitive theory of multimedia learning assumes separate verbal and pictorial channels, each of limited capacity, and treats learning as the learner selecting, organizing, and integrating words and pictures. Mayer (2017), reviewing his laboratory program in the *Journal of Computer Assisted Learning*, organized 12 principles by the processing they target and reported median effect sizes: the multimedia principle itself (d = 1.67, five comparisons); five principles that reduce extraneous processing, meaning processing unrelated to the instructional objective: coherence (d = 0.70), signaling (d = 0.46), redundancy (d = 0.87), spatial contiguity (d = 0.79), and temporal contiguity (d = 1.30); three that manage essential processing: segmenting (d = 0.70), pre-training (d = 0.46), and modality (d = 0.72); and three that foster generative processing: personalization (d = 0.79), voice (d = 0.74), and embodiment (d = 0.36). Mayer notes that some principles are stronger for low-knowledge than for high-knowledge learners. Coherence covers sound as well as words and pictures: Moreno and Mayer (2000) added background music, sound effects, or both to narrated animations of lightning and hydraulic brakes, and students who received music and sounds performed worse on retention and transfer than students who received neither. Rey (2012) pooled 39 experimental effects of seductive details (interesting but irrelevant text passages, illustrations, and other additions not needed for the objective) and found a significant seductive detail effect, small to medium on retention and medium on transfer.

Independent meta-analyses confirm the direction and shrink the size. Noetel et al. (2022) synthesized 29 systematic reviews (1,189 studies, 78,177 participants) in the *Review of Educational Research*: 11 design principles had significant positive meta-analytic effects on learning, the pooled average was g = 0.38 (k = 808), and the largest benefits came from captioning second-language video, contiguity, and signaling, with robust support also for modality, coherence, segmentation, personalization, and verbal redundancy. Within that overview, removing seductive details yielded g = 0.33 (Sundararajan & Adesope, 2020, k = 68), larger when the seductive detail stayed on screen (g = 0.43) than when it was transient (g = 0.12, not significant), and decorative animation showed no benefit (g = -0.05; Höffler & Leutner, 2007). Schneider et al. (2018) meta-analyzed 103 signaling studies; pooled across 209 retention and transfer measures, signaling improved learning (g = 0.43, as pooled by Noetel et al., 2022) and reduced cognitive load (g = 0.25). Ginns (2006) found spatial (d = 0.72) and temporal (d = 0.78) contiguity effects, much larger for high-element-interactivity material (d = 0.78) than for simple material (d = 0.28). Conversational style produced g = 0.33 (Ginns, Martin, & Marsh, 2013). Cromley and Chen (2025) meta-analyzed Mayer's own corpus (181 studies, 591 effects): overall g = 0.37 with a small decline per publication year, largest effects for removing seductive detail, modality, personalization, the multimedia principle, and sentence-level coherence, and medium effects for cueing and embodiment. Evidence strength is rated strong because the direction replicates across independent meta-analyses; plan for gains near g = 0.3-0.5, not the lab medians above 1.0.

Design quality matters more for complex material (g = 0.70) than for simple material (g = 0.20), and more for system-paced media (g = 0.41) than for learner-paced media (g = 0.27) (Noetel et al., 2022). Prior knowledge did not moderate the pooled effects in that overview, but a direct meta-analysis of the expertise reversal effect found that high-assistance instruction helps low-prior-knowledge learners (d = 0.505) and hurts high-prior-knowledge learners (d = -0.428) (Tetzlaff, Simonsmeier, Peters, & Brod, 2025). Redundancy is the most conditional rule. Adesope and Nesbit (2012) found across 57 studies that adding written text to speech helped only low-prior-knowledge learners, system-paced materials, and picture-free materials, and that on-screen key terms extracted from the narration beat verbatim text. The rule is therefore narrow: do not print the narration's full text beside a narrated graphic. Captions are an accessibility requirement (WCAG 2.2 success criterion 1.2.2, Level A) and help second-language learners (g = 0.99 for comprehension of captioned video; Montero Perez et al., 2013, in Noetel et al., 2022), so a toggleable caption track is not a redundancy violation. The image principle is not supported for deep learning: a visible instructor in video produced a small retention gain, no transfer gain, and less looking at the relevant visuals (Beege, Schroeder, Heidig, Rey, & Schneider, 2023). The voice principle now rules out robotic speech, not synthetic speech as such: learning from a modern text-to-speech engine did not differ from learning from a recorded human voice in most respects (Craig & Schroeder, 2019).

## When to apply

- **Narrated media is about to be built.** Before scripting any narrated slide, animation, or video,
  decide what the narration says, what the graphic shows, and which short labels appear on screen.
  Narration carries the explanation; the screen carries the graphic and its labels (Mayer, 2017).
- **A media asset is added.** Every photo, icon, animation, sound effect, or music bed passes the
  coherence test before it ships: name the objective it serves. Decorative assets fail
  (Moreno & Mayer, 2000; Sundararajan & Adesope, 2020).
- **A diagram or image is added.** Place each label on the figure next to its part, and plan the
  highlight, arrow, or color cue that fires as the narration names each part (Ginns, 2006;
  Schneider et al., 2018).
- **A history or incident page is drafted.** Audit every fact against the lesson objectives. A fact
  that no objective or assessment item uses is a seductive detail, however interesting (Rey, 2012).
- **Lesson pre-publish review.** Run the How to apply checklist page by page. Complex, system-paced
  pages get the strictest pass, because design quality matters most there (Noetel et al., 2022).
- **A learner overload signal appears.** Repeated replays of one page, long dwell time followed by a
  low first-attempt score, or a help request on a dense page: remove extraneous material first,
  then segment or pre-train (see [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md)).

## When NOT to apply

- **The learner already holds the schema.** A pretest at or above the mastery threshold, or a
  certificated technician in recurrent training: drop pre-training, heavy signaling, and
  step-by-step narration, and offer a compressed, learner-paced version. Supports that help novices
  cost experts (Tetzlaff et al., 2025; see [expertise-reversal](../01-learning-science/expertise-reversal.md)).
- **The learner requires a text alternative.** Deaf and hard-of-hearing learners, second-language
  learners, and anyone working in a noisy hangar or without audio need captions and a transcript.
  The redundancy rule never removes them (WCAG 2.2 SC 1.2.2; see
  [accessible-design-wcag-udl](../02-instructional-design/accessible-design-wcag-udl.md)).
- **The material has low element interactivity.** One part number, one definition, or one isolated
  fact gains little from narration, animation, or signaling (g = 0.20 for simple material; Noetel
  et al., 2022). A plain labeled picture or one sentence is enough; spend build time on complex pages.
- **The material is static, self-paced text.** A reference page read at the learner's own pace has
  no narration to duplicate, so printed text is the right verbal channel. Modality and redundancy
  effects weaken or vanish when the learner controls the pace (Adesope & Nesbit, 2012; Noetel et
  al., 2022).
- **The task is whole-task practice on the authentic artifact.** When the learner works from the
  real maintenance manual page, logbook entry, or cluttered instrument panel, do not strip the
  clutter; reading past it is the skill. Apply coherence to the instruction around the artifact and
  fade signals across exposures (see [4c-id-model](../02-instructional-design/4c-id-model.md)).

## How to apply

Reduce extraneous processing first:

- **Cut (coherence).** Delete decorative stock photos, background music, sound effects, and facts
  no objective uses, and tighten narration to the sentences the objective needs. If a stakeholder
  insists on an extra, move it behind an optional link after the knowledge check; extras that stay
  on screen cost more than transient ones (Sundararajan & Adesope, 2020).
- **Signal.** Name the step in the heading, highlight the part at the moment the narration names it,
  and use verbal signposts ("first," "the reading that matters is"). Keep one color per meaning
  across the lesson and signal only what the objective needs; a page where everything is
  highlighted signals nothing (Schneider et al., 2018).
- **Integrate labels (spatial contiguity).** Put each label on the graphic with a leader line, put
  feedback beside the answer it explains, and never split a figure from its key or explanation
  across screens or scroll positions (Ginns, 2006).
- **Synchronize (temporal contiguity).** Reveal or highlight each element as the narration describes
  it, never before or after the sentence that explains it (Ginns, 2006).
- **Narrate with short on-screen labels (redundancy).** On a narrated graphic the screen shows the
  graphic plus labels and key terms taken from the script, not the script. The full words go in a
  toggleable caption track and a transcript (Adesope & Nesbit, 2012; Mayer, 2017).

Manage essential processing:

- **Segment, pre-train, and narrate complex visuals.** Break system-paced explanations into
  learner-paced segments, teach component names and locations before the system explanation, and
  narrate rather than print when the graphic is complex and the pace is fixed. The full rules live
  in [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md) and
  [dual-coding](../01-learning-science/dual-coding.md).

Foster generative processing:

- **Personalize.** Address the learner as "you" in polite, conversational sentences that still follow
  [plain-language-simplified-technical-english](../05-tutor-personas/plain-language-simplified-technical-english.md);
  conversational style gave g = 0.33 across 55 effects (Ginns et al., 2013).
- **Use a human-sounding voice.** Use a recorded human voice or a modern neural text-to-speech voice,
  and audition every technical term for pronunciation before publishing (Craig & Schroeder, 2019).
- **Embody only to point.** If an on-screen agent or presenter appears, have it gesture at the
  referent so it works as a signal; do not add a talking-head box by default (Beege et al., 2023).

## Common misapplications

- **Promising lab-sized gains.** Medians above d = 1.0 come from short laboratory lessons; independent
  meta-analyses put typical gains near g = 0.3-0.4 (Noetel et al., 2022; Cromley & Chen, 2025).
- **Decoration sold as engagement.** Hero photos, mood images, a music bed, or a chime on correct
  answers cost attention and buy no learning; color or character treatments help only when they
  make the content itself clearer (Noetel et al., 2022).
- **"Fun fact" and "Did you know?" boxes.** Trivia on history and incident pages is the classic
  seductive detail. A history fact earns its place only if it explains something the learner must
  know or do.
- **Stripping captions in the name of redundancy.** Removing captions breaks WCAG and fails the
  learners who need them. The real redundancy violation is the opposite: the full narration pasted
  as paragraphs under the narrated graphic.
- **Applying modality and redundancy rules to reading pages.** Forcing narration onto self-paced
  reference text adds production cost and takes pace control away without a learning benefit.
- **A talking head in the corner of every slide.** A visible instructor pulls looks away from the
  relevant visuals (Beege et al., 2023). Show the instructor for a demonstration, not as a frame.
- **Over-signaling.** Three highlight colors, flashing arrows, and bold on every sentence erase the
  contrast that makes a signal work. Signal the few elements the objective names.

## Examples across domains

**Avionics (CAET lesson): redesigning a static system leak check page and a Henri Pitot history page.**

*Setup.* A Rise-style CAET lesson on pitot-static systems has two draft pages. The leak check page opens with a stock photo of a smiling technician, plays a music bed under the narration, prints the narration's four paragraphs verbatim under a test set diagram, and lists the parts as a numbered legend below the diagram, a scroll away from the drawing. The history page on Henri Pitot pairs his 1732 river Seine experiment with a "Did you know?" box of biographical anecdotes and a second portrait that no objective uses.

*Redesign, move by move.* (1) Cut: the stock photo, the music bed, the anecdote box, and the second portrait go (Moreno & Mayer, 2000; Rey, 2012). (2) Integrate labels: the legend moves onto the drawing, with leader lines to the static port adapter, the test set, the altimeter, the vertical speed indicator, the airspeed indicator, and the hose that ties the pitot and static systems together, the precaution AC 43-6D (paragraph 13.2) gives to protect instruments that read both pressures. (3) Signal and synchronize: as the narrator explains that the test set lowers static pressure until the altimeter reads 1,000 feet above field elevation, holds for 1 minute with no further pumping, and passes if the altimeter loses no more than 100 feet (AC 43-6D, Appendix E.1), each part lights in cyan, the lesson's static-pressure color, at the moment it is named. (4) Narrate with short labels: the screen shows only "1,000 ft above field," "hold 1 min, no pumping," and "loss: 100 ft max"; the full script moves to the caption track and the transcript. (5) Tie every history fact to an objective: the history page keeps one finding, that doubling the current's speed raised the water in Pitot's bent tube four times as high, and the narration links it to the objective "explain why the airspeed indicator reads the difference between pitot and static pressure, a difference that grows with the square of airspeed."

*Follow-up.* The knowledge check that follows asks the learner to predict which instruments a static leak affects and to judge a result (the altimeter lost 140 feet in 1 minute: pass or fail?), with feedback placed beside each option. The designer runs the same audit on the lesson's incident page, keeping only the facts that trace the failure path from a blocked or leaking static system to each instrument's wrong reading, then compares first-attempt scores and dwell time per page against the previous version.

**Nursing education (pre-simulation e-learning): redesigning a 12-lead ECG electrode placement page and an Einthoven history page.**

*Setup.* A pre-simulation module for nursing students teaches 12-lead ECG electrode placement. The draft page opens with a stock photo of a nurse at a bedside monitor, plays background music, prints the narrated placement instructions as paragraphs under a chest outline, and lists V1 to V6 in a table below the drawing. A history page on Willem Einthoven surrounds his limb-lead triangle with anecdotes about his early string galvanometer and his Nobel Prize.

*Redesign, move by move.* (1) Cut: the photo, the music, and the apparatus and prize anecdotes go. (2) Integrate labels: each electrode label sits on the chest drawing at its landmark: V1 at the fourth intercostal space, right sternal border; V2 at the fourth intercostal space, left sternal border; V4 at the fifth intercostal space, midclavicular line; V3 midway between V2 and V4; V5 at the anterior axillary line and V6 at the midaxillary line, both level with V4. (3) Signal and synchronize: as the narrator says "find the sternal angle, move to the second rib, and count down to the fourth intercostal space," a highlight walks the same path on the drawing. (4) Narrate with short labels: the screen shows "V1: 4th ICS, right sternal border" and its siblings; the full script moves to the caption track and the transcript. (5) Tie every history fact to an objective: the history page keeps Einthoven's triangle because it shows how leads I, II, and III each compare two of the right arm, left arm, and left leg electrodes, which supports the objective "place the limb electrodes and recognize a limb lead reversal on the tracing."

*Follow-up.* The knowledge check asks the student to drag V1 to V6 onto an unlabeled chest image, with feedback placed beside each misplaced electrode (V1 and V2 placed too high is the common error to target). In the simulation lab, faculty score placement accuracy on a manikin and compare it with the cohort that used the original page.

## Quality signal

The designer knows the checklist is working when a pre-publish audit maps every image, sound, animation, and history or incident fact to a named objective or assessment item, no narrated graphic carries its narration as printed paragraphs, and every label sits on its figure. The learning signal: on a delayed transfer item, the redesigned version beats the previous version by at least g = 0.3, the low end of the meta-analytic range (Noetel et al., 2022), with equal or shorter time per page; a smaller gain on complex, system-paced pages means an extraneous element survived the audit or the signals are not firing at the moment of narration.

## Cross-references

- See [dual-coding](../01-learning-science/dual-coding.md) for the multimedia, modality, and contiguity effects in depth; this chapter is the full checklist and its boundary conditions.
- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for the extraneous, intrinsic, and germane load framework the three processing goals rest on.
- See [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md) for chunk sizing, Continue controls, and pre-training of component names.
- See [accessible-design-wcag-udl](../02-instructional-design/accessible-design-wcag-udl.md) for captions, transcripts, and why an accessibility track is not a redundancy violation.
- See [animation-video-immersive-media](../04-delivery-patterns/animation-video-immersive-media.md) for when motion, video, 3D, or VR earns its place before these rules shape it.
- See [expertise-reversal](../01-learning-science/expertise-reversal.md) for fading these supports as the learner's schema grows.
- See [plain-language-simplified-technical-english](../05-tutor-personas/plain-language-simplified-technical-english.md) and [voice-style-agency-preserving-language](../05-tutor-personas/voice-style-agency-preserving-language.md) for the wording rules behind personalization.
- See [4c-id-model](../02-instructional-design/4c-id-model.md) for whole-task practice on authentic artifacts, where coherence applies to the support, not the task.
