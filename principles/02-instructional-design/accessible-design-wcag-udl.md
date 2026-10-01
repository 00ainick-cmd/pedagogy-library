---
id: accessible-design-wcag-udl
title: "Accessible Design: WCAG 2.2 and Universal Design for Learning"
category: 02-instructional-design
aliases: [wcag-conformance, accessibility-floor, universal-design-for-learning, udl, inclusive-design]
evidence_strength: moderate
effect_size: "Captioned vs uncaptioned video for second-language learners: Hedges' g = 0.99 listening comprehension (15 studies) and g = 0.87 vocabulary (10 studies) (Montero Perez, Van Den Noortgate, & Desmet 2013 meta-analysis); UDL-designed instruction vs business as usual: g = 0.43 overall, g = 0.28 for adult learners (King-Sears et al. 2023 meta-analysis, 20 studies); WCAG conformance itself is a pass/fail standard with no learning effect size"
key_sources:
  - "World Wide Web Consortium. (2024). Web Content Accessibility Guidelines (WCAG) 2.2 (W3C Recommendation, first published 5 October 2023, updated 12 December 2024; approved as ISO/IEC 40500:2025). https://www.w3.org/TR/WCAG22/"
  - "Gernsbacher, M. A. (2015). Video captions benefit everyone. Policy Insights from the Behavioral and Brain Sciences, 2(1), 195-202. doi:10.1177/2372732215602130"
  - "Montero Perez, M., Van Den Noortgate, W., & Desmet, P. (2013). Captioned video for L2 listening and vocabulary learning: A meta-analysis. System, 41(3), 720-739. doi:10.1016/j.system.2013.07.013"
  - "King-Sears, M. E., Stefanidis, A., Evmenova, A. S., Rao, K., Mergen, R. L., Owen, L. S., & Strimel, M. M. (2023). Achievement of learners receiving UDL instruction: A meta-analysis. Teaching and Teacher Education, 122, 103956. doi:10.1016/j.tate.2022.103956"
  - "Capp, M. J. (2017). The effectiveness of universal design for learning: A meta-analysis of literature between 2013 and 2016. International Journal of Inclusive Education, 21(8), 791-807. doi:10.1080/13603116.2017.1325074"
  - "Karich, A. C., Burns, M. K., & Maki, K. E. (2014). Updated meta-analysis of learner control within educational technology. Review of Educational Research, 84(3), 392-410. doi:10.3102/0034654314526064"
  - "Birch, J. (2012). Worldwide prevalence of red-green color deficiency. Journal of the Optical Society of America A, 29(3), 313-320. doi:10.1364/JOSAA.29.000313"
last_reviewed: 2026-10-01
applies_to: [acquisition, retention, measurement]
contraindicated_when:
  - task_type.authentic_perceptual_cue_is_competency
  - task_type.time_limit_essential_to_construct
  - material.motion_essential_to_information
  - material.redundant_on_screen_text_with_narration
  - learner_state.first_exposure
runtime_triggers:
  - course_design_phase
  - media_asset_added
  - diagram_or_image_added
  - color_coded_information_presented
  - pointer_only_interaction_added
  - motion_or_time_limit_configured
  - lesson_pre_publish_review
  - learner_access_barrier_reported
related: [multimedia-design-principles, segmenting-and-pretraining, animation-video-immersive-media, cognitive-load-theory, dual-coding, plain-language-simplified-technical-english, validity-reliability, simulation-fidelity]
---

# Accessible Design: WCAG 2.2 and Universal Design for Learning

## One-line claim

Build every lesson to WCAG 2.2 Level AA as a non-negotiable floor, add the specific accessible features that carry their own learning evidence (captions, transcripts, clear structure, learner-controlled pacing, redundant coding for color), and use Universal Design for Learning only as a design-time heuristic for generating alternatives, because the framework as a whole has mixed outcome evidence.

## Evidence base

The Web Content Accessibility Guidelines (WCAG) 2.2 are a W3C Recommendation first published 5 October 2023 and updated 12 December 2024, approved as the international standard ISO/IEC 40500:2025 in October 2025. They define testable success criteria at Levels A, AA, and AAA; Level AA conformance means every A and AA criterion passes (W3C, 2024). Two of the nine criteria new in 2.2, 2.5.7 Dragging Movements and 2.5.8 Target Size (Minimum), both AA, bear directly on drag-to-order activities and simulators. WCAG 3.0 is still a W3C Working Draft (10 September 2026) that the W3C states does not replace WCAG 2. Conformance is an engineering standard, not a learning intervention, so it carries no effect size. Its justification is simpler: an element a learner cannot perceive or operate teaches that learner nothing, and an assessment the learner cannot operate measures access, not competence. The affected group is larger than designers assume: Birch (2012) puts red-green color deficiency at about 8% of men and 0.4% of women of European descent (4-6.5% of Chinese and Japanese men), so a 25-person, mostly male technician cohort typically includes one or two learners for whom a red/green-only cue fails. Regulation is converging on the same floor. The U.S. Department of Justice's 2024 ADA Title II rule (89 FR 31320) adopts WCAG 2.1 Level AA for state and local government web content, including public colleges and universities, and an April 2026 interim final rule moved compliance to 26 April 2027 for entities serving 50,000 or more people and 26 April 2028 for smaller ones. That rule is context here, not a statement about any private training provider's legal duties.

Several accessible features help far more learners than the ones they were written for. Gernsbacher (2015) concluded from more than 100 empirical studies that same-language captions improve comprehension of, attention to, and memory for video across children, adolescents, college students, and adults, with the largest benefits for viewers working in a non-native language, learners still building reading skill, and viewers who are D/deaf or hard of hearing. Montero Perez, Van Den Noortgate, and Desmet's (2013) meta-analysis quantified the second-language case: captioned versus uncaptioned video produced Hedges' g = 0.99 on listening comprehension (15 studies) and g = 0.87 on vocabulary learning (10 studies). Two other WCAG requirements line up with multimedia principles that carry their own evidence: programmatic headings and labels (1.3.1, 2.4.6) are a form of signaling (see [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md)), and pause and adjustable-timing controls (2.2.1, 2.2.2) provide the learner-paced segmentation documented in [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md). The boundary: the caption meta-analysis concerns second-language learners, so for native speakers studying technical content the support is Gernsbacher's narrative review, not a dedicated meta-analysis.

Universal Design for Learning is a different kind of object. CAST's UDL Guidelines 3.0 (July 2024) organize design around multiple means of engagement, representation, and action and expression; they are a framework, not a testable standard, and the framework-level evidence is mixed. Capp's (2017) meta-analysis of 18 pre-post studies from 2013-2016 concluded that UDL improves the learning process but that its impact on educational outcomes had not been demonstrated. King-Sears et al. (2023), limited to 20 treatment-control studies (50 effects), found a moderate pooled achievement effect (g = 0.43), weaker for adults (g = 0.28) than for school-age learners (g = 0.48); because UDL treatments bundle many components, a pooled effect cannot say which component did the work. Almeqdad et al. (2023) reported a pooled effect of 3.56 from 13 mostly single-group studies with considerable heterogeneity, a magnitude that signals weak designs rather than a credible estimate. The "offer choices" reading of UDL has a direct test: Karich, Burns, and Maki's (2014) meta-analysis of learner control in educational technology (18 studies, 29 effects) found a near-zero achievement effect (g = 0.05). This is why the library README excludes UDL as a runtime principle. The operational stance: WCAG AA is the floor; UDL is a prompt for generating alternatives; each alternative survives only if WCAG requires it or a component with its own evidence supports it.

## When to apply

- **Course design phase** - Write WCAG 2.2 AA (all A and AA criteria) into the lesson spec as acceptance
  criteria before any asset exists, plus any stricter house rules.
- **Media asset added** - Narrated video, animation, or audio needs synchronized captions (1.2.2), a
  transcript, and audio description or a text alternative when visuals carry unspoken information (1.2.3, 1.2.5).
- **Diagram or image added** - Informative images need a text alternative serving the same purpose (1.1.1);
  complex diagrams also need a long description or table. Decorative images are marked decorative.
- **Color-coded information presented** - Wire colors, status lights, chart series, and right/wrong feedback
  must not rely on color alone (1.4.1); graphical objects need 3:1 contrast against neighbors (1.4.11).
- **Pointer-only interaction added** - Drag-to-order, hotspots, and sims must work from a keyboard (2.1.1),
  offer a non-drag single-pointer path (2.5.7), and use 24 by 24 CSS pixel targets (2.5.8) with visible focus (2.4.7).
- **Motion or time limit configured** - Auto-playing motion over five seconds needs pause, stop, or hide
  (2.2.2); nothing flashes more than three times per second (2.3.1); time limits are adjustable (2.2.1).
- **Lesson pre-publish review** - Run the full audit (automated checker plus manual keyboard, screen reader,
  zoom, and contrast passes) before the lesson reaches any learner.
- **Learner access barrier reported** - Treat the report as a lesson defect, fix it for everyone, and
  re-audit that interaction type across the course.

## When NOT to apply

The AA floor has no contraindication; these cases change the shape of a specific move, mirroring WCAG's "essential" exceptions.

- **Perceiving the authentic cue is the competency** - When the job requires reading the real cue (wire
  insulation colors, printed wire identification, annunciator colors, a waveform's shape), do not replace it
  with the accessible substitute. Add the redundant cue and keep a segment that trains the authentic one.
- **The time limit is the construct** - WCAG 2.2.1 exempts a limit that is essential, where extending it
  would invalidate the activity (a fluency drill, a timed emergency-procedure check). Keep it, disclose it
  before the start, offer an untimed practice mode, and route individual accommodations through program policy.
- **Motion carries the information** - A reduced-motion variant must not delete an animation whose motion
  is the content (bit timing on a bus, a needle sweep). Replace continuous motion with user-stepped frames
  that carry the same information; 2.3.3 itself exempts essential motion.
- **Narration text already on screen** - Do not meet "multiple means of representation" by printing the
  narration as paragraphs under every slide (the redundancy problem in multimedia-design-principles).
  Captions belong in a user-toggleable track; the transcript is a separate artifact.
- **Novice at first exposure facing a choice menu** - Do not swap a designed sequence for a menu of paths or
  formats; learner control showed a near-zero achievement effect (g = 0.05; Karich et al., 2014). Keep one
  designer-sequenced default path with the alternatives reachable from it.

## How to apply

- **Make the floor a publish gate** - List the AA criteria per interaction type, name any house rule that
  exceeds AA (for example 7:1 body text, which is AAA 1.4.6), and block publish on any failure.
- **Captions and transcripts checked by a person** - Correct automatic captions against the audio, above
  all technical terms, part numbers, and acronyms. Keep captions toggleable; place the transcript beside the
  player and include descriptions of what the visuals show.
- **Text alternatives that carry the instructional point** - Write alt text for what the learner needs
  ("shield grounded at the connector end only"), not appearance ("diagram of a cable"). Give complex
  diagrams a long description or a connection table a screen reader can step through.
- **Redundant coding for every color distinction** - Pair each color with a text label, line pattern,
  shape, or position. Check the screen in grayscale and a deuteranopia simulation; a distinction that
  disappears was color-only.
- **A keyboard and single-pointer path for every interaction** - Give drag-to-order "move up/move down"
  buttons or select-then-place; make hotspots focusable buttons in logical order; build sim controls from
  native buttons and sliders; announce result changes through a live region.
- **Learner control of motion and time** - Put pause, replay, and step controls on every animation; honor
  the reduced-motion system setting with a stepped-frame variant; never auto-advance on a timer.
- **Structure and contrast measured as painted** - Use one H1, nested headings that name the topic, and real
  lists and table headers. Compute contrast from the composited foreground over the real background, not the
  design token: 4.5:1 normal text, 3:1 large text and graphics, 200% resize (1.4.4), reflow at 320 CSS px (1.4.10).
- **UDL as generator, evidence as filter** - Brainstorm alternatives with the three UDL principles, then
  keep only those WCAG requires or a component chapter supports (captions, signaling, segmenting,
  [dual-coding](../01-learning-science/dual-coding.md)). Hold the outcome and rubric constant across modes.

## Common misapplications

- **Accessibility as a final audit** - A drag-only activity or a color-only diagram is a design decision,
  not a defect a checker can patch; retrofitting means rebuilding the interaction.
- **Trusting the automated checker alone** - Checkers cannot judge alt text quality, caption accuracy, focus
  order logic, or whether color is the only cue. A manual keyboard and screen reader pass is required.
- **Recoloring instead of recoding** - Swapping red/green for blue/orange still conveys meaning by color
  alone and still fails 1.4.1. Add a non-color cue.
- **UDL read as learning styles** - "Visual," "auditory," and "hands-on" versions matched to a claimed style
  reintroduce a disconfirmed idea (README, "Deliberately excluded"). Alternatives remove barriers; they do
  not match preferences, and parallel versions of everything drift out of sync.

## Examples across domains

**Avionics (CAET lesson): Pre-publish audit of an ARINC 429 wiring lesson.**

*Setup.* A CAET lesson covers an ARINC 429 run from an air data computer to a transponder: a two-wire
differential bus in twisted shielded cable, A and B conductors identified on the interconnect drawing by
insulation color, wire marking per AC 43.13-1B, Chapter 11. It has a wiring-diagram hotspot with colored
traces (right picks flash green, wrong picks red), a narrated animation of a label 203 (pressure altitude)
word moving down the bus, a drag-to-order activity for shield termination and contact insertion, and a
breakout-box continuity sim. The audit finds color-only identification and feedback (1.4.1), no captions
(1.2.2), drag-only ordering (2.1.1, 2.5.7), an auto-advancing animation with a blinking bit stream (2.2.2,
2.3.1), and faded citation lines that fall below 4.5:1 once 50% opacity is composited over the panel.

*Application.* Each trace carries its conductor color name and wire identification as text plus a dash
pattern; feedback reads "Correct: B conductor" with an icon. The aircraft carries printed markings and
insulation colors, not the lesson's labels, so the lesson teaches both: a photo segment has the learner
read the marking and insulation color on a real cable, and the sim confirms each conductor by continuity,
not color. A person checks captions for "ARINC 429," "label 203," and "bipolar return-to-zero"; the
transcript describes the A and B lines swinging to opposite polarity for each bit. Drag gains "move up/move
down" buttons with identical scoring; breakout-box pins become focusable buttons. The animation gets pause
and step controls, the blink drops below three flashes per second, and a reduced-motion variant steps
through four frames under the same narration, because the timing is the content. Citation text is raised
past the CAET house contrast rule, measured on the painted panel.

*Follow-up.* A second audit runs keyboard-only through all four parts, captures grayscale and deuteranopia
screenshots, and spot-checks the hotspot with a screen reader; results go in the lesson's QA record. After
release the course logs caption toggles, transcript opens, and keyboard-path completions, and compares
scores on alternative paths against the default path; a gap triggers a review.

**Higher education (online course design): Rebuilding an introductory statistics course at a public university.**

*Setup.* A public university's online introductory statistics course must meet WCAG 2.1 AA by its Title II
compliance date; the team targets WCAG 2.2 AA instead. The audit finds lecture videos with unreviewed
automatic captions, slides exported as images of text, scatterplots separating groups by red and green
dots only, LMS pages styled with bold text instead of headings, a drag-and-drop matching activity, and
20-minute timed quizzes on concepts where speed is not the outcome.

*Application.* Captions are corrected for terms like "heteroscedasticity," and each transcript describes
what the instructor draws. Slides become real text; each chart gets alt text stating its takeaway plus a
data table, and groups are separated by marker shape and direct labels as well as color. Pages get nested
headings; the matching activity becomes dropdown menus with identical scoring. Speed is not the construct,
so time limits are removed and randomized question pools become the integrity control. UDL works as a
prompt, not a mandate: the final analysis may be a written report or a narrated deck, scored on one rubric,
but the team does not build parallel "visual" and "auditory" lectures.

*Follow-up.* Each term the course reruns the LMS checker and a manual keyboard pass, publishes a conformance
report, tracks caption and transcript use, and reviews accommodation requests for barriers the redesign missed.

## Quality signal

The lesson passes when the pre-publish audit records zero open A or AA failures across automated, keyboard,
screen reader, composited-contrast, and 200% zoom checks. In use, learners on an alternative path
(transcript, keyboard path, stepped frames) should score within 10 percentage points of learners on the
default path on the same items; a larger gap flags an alternative that is not equivalent.

## Cross-references

- See [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md) for the redundancy and signaling rules that govern captions, on-screen text, and headings.
- See [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md) for the evidence behind learner-paced segments, which WCAG's pause and timing criteria make available to everyone.
- See [animation-video-immersive-media](../04-delivery-patterns/animation-video-immersive-media.md) for when motion carries information and how to build stepped alternatives.
- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for the load constraints that apply when alternatives or choices are added for novices.
- See [dual-coding](../01-learning-science/dual-coding.md) for why text alternatives and diagrams work together rather than as substitutes.
- See [plain-language-simplified-technical-english](../05-tutor-personas/plain-language-simplified-technical-english.md) for writing transcripts, alt text, and labels in plain language.
- See [validity-reliability](../03-assessment-science/validity-reliability.md) for why an assessment the learner cannot operate measures access rather than competence.
- See [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for keeping the authentic cue in a sim while adding the accessible path.
