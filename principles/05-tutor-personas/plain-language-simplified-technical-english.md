---
id: plain-language-simplified-technical-english
title: Plain Language and Simplified Technical English for Technician Text
category: 05-tutor-personas
aliases: [plain-language, simplified-technical-english, controlled-language, asd-ste100, simplified-english]
evidence_strength: moderate
effect_size: null  # No meta-analysis exists. The controlled experiments (Shubert et al. 1995; Chervak, Drury & Ouellette 1996) report significant comprehension gains concentrated in complex procedures and non-native readers, and Ma, Drury & Marin (2009) found Simplified English was not one of the effective interventions across four world regions. See Evidence base.
key_sources:
  - "Shubert, S. K., Spyridakis, J. H., Holmback, H. K., & Coney, M. B. (1995). The comprehensibility of Simplified English in procedures. *Journal of Technical Writing and Communication*, 25(4), 347-369. doi:10.2190/WG69-D74B-4DLL-2WBK"
  - "Chervak, S., Drury, C. G., & Ouellette, J. P. (1996). Simplified English for aircraft workcards. *Proceedings of the Human Factors and Ergonomics Society Annual Meeting*, 40(5), 303-307. doi:10.1177/154193129604000502"
  - "Ma, J., Drury, C. G., & Marin, C. V. (2009). Language error in aviation maintenance: Quantifying the issues and interventions in four world regions. *The International Journal of Aviation Psychology*, 20(1), 25-47. doi:10.1080/10508410903416136"
  - "Patel, S., Drury, C. G., & Lofgren, J. (1994). Design of workcards for aircraft inspection. *Applied Ergonomics*, 25(5), 283-293. doi:10.1016/0003-6870(94)90042-6"
  - "Lorch, R. F. (1989). Text-signaling devices and their effects on reading and memory processes. *Educational Psychology Review*, 1(3), 209-234. doi:10.1007/BF01320135"
  - "Sheridan, S. L., Halpern, D. J., Viera, A. J., Berkman, N. D., Donahue, K. E., & Crotty, K. (2011). Interventions for individuals with low health literacy: A systematic review. *Journal of Health Communication*, 16(Suppl. 3), 30-54. doi:10.1080/10810730.2011.604391"
  - "ASD, Aerospace, Security and Defence Industries Association of Europe. (2025). ASD-STE100 Simplified Technical English: Standard for technical documentation (Issue 9, January 15, 2025). Brussels: ASD Simplified Technical English Maintenance Group. https://www.asd-ste100.org/"
last_reviewed: 2026-10-01
applies_to: [acquisition, retention]
contraindicated_when:
  - material.controlling_document_verbatim_required
  - material.manufacturer_controlled_safety_wording
  - task_type.source_document_interpretation
  - task_type.conversational_dialogue
  - learner_state.low_english_reading_proficiency
runtime_triggers:
  - lesson_text_authored
  - procedure_steps_rendered
  - new_term_introduced
  - safety_notice_required
  - text_misread_error_detected
  - non_native_reader_identified
related: [voice-style-agency-preserving-language, multimedia-design-principles, cognitive-load-theory, segmenting-and-pretraining, accessible-design-wcag-udl, human-factors-crm-mrm-training, item-writing-rules, schema-theory-knowledge-components]
---

# Plain Language and Simplified Technical English for Technician Text

## One-line claim

Write every sentence a technician must act on as one short, active, imperative instruction that uses each term with exactly one meaning and puts the condition and any WARNING or CAUTION before the action, and quote every limit, tolerance, and interval verbatim from the cited controlling document instead of paraphrasing it.

## Evidence base

Simplified English, now ASD-STE100 Simplified Technical English (STE), was developed by the European aerospace industry (AECMA, now ASD) at the request of airlines, most of them from non-English-speaking countries, and was first released in 1986. Shubert, Spyridakis, Holmback, and Coney (1995) ran the first controlled test in *Journal of Technical Writing and Communication*: Simplified and non-Simplified versions of two airplane maintenance procedures were compared, and Simplified English significantly improved comprehension of the more complex document and made its content easier to locate, with essentially no change in completion time; non-native readers appeared to benefit more than native readers, although unequal cell sizes prevented a statistical test. Chervak, Drury, and Ouellette (1996) tested 175 practicing aircraft maintenance technicians on 16 workcards (easy or difficult, Simplified or not, standard or revised layout) in a between-subjects comprehension test: Simplified English significantly improved comprehension, particularly for the difficult workcards and for non-native English speakers, and layout had no effect. Patel, Drury, and Lofgren (1994) in *Applied Ergonomics* derived a workcard design taxonomy (readability, context, organization, physical handling) from A-check and C-check analyses and showed significantly higher usability for the redesigned cards in DC-9 inspections. The current standard, ASD-STE100 Issue 9 (January 15, 2025), has 53 writing rules in nine sections and about 900 approved general words, in most cases each with one meaning and one part of speech ("check" is approved only as a noun). Procedures use the imperative, a condition the reader must know comes first, and the long-standing sentence limits are 20 words for procedural and 25 words for descriptive sentences.

Plain-language practice outside aviation rests on converging evidence. Lorch's (1989) review in *Educational Psychology Review* found that virtually all signaling devices (titles, headings, previews, number signals, typographical cues) improve memory for the information they cue, while memory for unsignaled information often is unaffected; headings and numbered lists are precision tools for what the reader must find again. Sheridan et al.'s (2011) systematic review of 38 low-health-literacy intervention studies found discrete design features that improved comprehension in one or a few studies, including presenting essential information by itself or first. Shoemaker, Wolf, and Brach (2014, *Patient Education and Counseling*) built these features into the Patient Education Materials Assessment Tool (PEMAT: everyday language, active voice, chunked sections, informative headers, explicit steps); in consumer testing, actionable materials produced higher comprehension than poorly actionable ones (76% vs. 63%), and reading grade level correlated strongly and negatively with consumer test results. The U.S. Plain Writing Act of 2010 (Pub. L. 111-274) defines plain writing as clear, concise, well-organized writing that follows best practices for the subject and intended audience; the federal plain-language guidance (plainlanguage.gov, now served at digital.gov/guides/plain-language) turns that into audience, organization, short-and-simple, and avoid-jargon rules. Conversational second-person tone (the personalization effect) belongs to the voice-style chapter, not here.

Evidence strength is moderate and no single effect size is meaningful: the direct experiments are few, date from the 1990s, and show gains concentrated on complex procedures and non-native readers. The largest field study narrows the claim. Ma, Drury, and Marin (2009) tested 941 maintenance personnel at 19 sites in Asia, Latin America, Europe, and the United States on four interventions (AECMA Simplified English, native-language translation, an English-speaking coach, a local-language glossary) and concluded that translation and language training were the only two effective interventions; controlled language is text hygiene, not a cure for low English proficiency. The second boundary is regulatory. 14 CFR 43.13(a) requires the methods, techniques, and practices in the current manufacturer's maintenance manual or Instructions for Continued Airworthiness (ICA), and 14 CFR 39.7 makes operating a product that does not meet an applicable Airworthiness Directive a violation, so simplified lesson text is a teaching layer around the controlling text, never a substitute for it. The Plain Writing Act itself excludes regulations from its covered documents, the STE maintenance group notes that in some companies legal departments control the wording of WARNINGS and CAUTIONS, and an FAA workshop report (Avers, Johnson, Banks, & Wenzel, 2012, DOT/FAA/AM-12/16) lists technical documentation problems as known causes of maintenance errors, rework, and delays.

## When to apply

- **Lesson text is authored or generated.** Every step, explanation, feedback message, and item stem
  passes the plain-language and STE checks before it ships (Chervak et al., 1996, used real workcards).
- **Procedure steps are rendered.** Any paragraph that describes an ordered task becomes numbered,
  one-action imperative steps; Shubert et al. (1995) found the largest gain on the more complex procedure.
- **A new term is introduced.** Fix its single meaning on a glossary card at first use and use the
  term identically everywhere after; STE approves general words with one meaning each.
- **A safety notice is required.** Place the WARNING or CAUTION immediately before the step it governs,
  opening with a command or condition (the STE conditions-first rule).
- **A misreading error is detected.** When a wrong answer traces to the wording (step order, term sense,
  a misplaced value), rewrite the sentence, not only the feedback.
- **A non-native English reader is identified.** Apply STE strictly and add native-language support;
  non-native readers gained most from Simplified English (Chervak et al., 1996), but it was not an
  effective intervention on its own across four world regions (Ma et al., 2009).

## When NOT to apply

- **The text is the controlling document.** Regulation, AD, maintenance manual limit, TCDS entry,
  torque value, or tolerance: quote it verbatim with document, paragraph, revision, and date
  (14 CFR 43.13(a); 14 CFR 39.7). Simplify only the explanation around the quote.
- **The safety wording is manufacturer-controlled.** A WARNING, CAUTION, or placard text from the
  manual is reproduced exactly; legal departments may control it (ASD STEMG). Add a labeled
  plain-language "what this means" line beneath it instead of rewriting it.
- **The task is reading the source document.** When the objective is interpreting a real AD, AC, or
  ICA page, present the original unedited with scaffolds (glossary, signals). A rewritten version
  removes the skill being taught: reading the text the technician will meet on the job.
- **The text is spoken, conversational tutor dialogue.** STE is for written technical documentation;
  the STEMG FAQ states it is not for oral communication. Short, concrete wording still applies to
  tutor turns; the approved-word list and imperative-only grammar do not.
- **Low English reading proficiency is the bottleneck.** STE alone will not close the gap (Ma et al.,
  2009). Provide translated explanatory text and glossary plus English language training, and keep
  technical nouns in English so they still match the manual and parts catalog.

## How to apply

- **One action per step, concrete imperative verb first.** "Remove the battery pack," not "The battery
  pack should be removed"; "Measure the voltage," not "Perform a measurement of the voltage." Keep
  procedural sentences at or under 20 words and descriptive ones at or under 25 (ASD-STE100). Split any
  step that hides a second action behind "and."
- **Condition and hazard before the action.** "If the ELT transmits on 406 MHz, test it only as the
  manufacturer's instructions specify." A WARNING (injury risk) or CAUTION (equipment damage risk)
  sits directly above its step, starts with a command, and states the consequence.
- **One term, one meaning, one glossary card.** List the terms before writing; assign one word per
  concept (inspect = examine, test = operate, measure = read an instrument); ban synonyms inside the
  lesson; use "check" only as a noun ("do a check of"). The card shows term, one-line meaning, the
  source document's own term, and a photo or callout of the part.
- **Quote the controlling value; never paraphrase it.** Limits, intervals, tolerances, and part numbers
  go in a visually distinct source block with document, paragraph, revision, and retrieval date. Do not
  round, convert, or reword; if a unit conversion helps, show the source value first and label the
  conversion as derived.
- **Front-load meaning, then signal selectively.** Lead each screen with the action or essential fact
  (Sheridan et al., 2011); use task-named headings ("Test the ELT signal"), numbered lists for sequences,
  and tables for values. Signal only what the reader must find again (Lorch, 1989).
- **Test the words with readers.** Before release, run 3-5 misread probes per procedure (step order,
  term sense, value) with representative readers, non-native readers included, and rewrite every
  sentence a probe error traces to.

## Common misapplications

- **Paraphrasing a limit to sound friendlier.** "Annually" for "within 12 calendar months after the last
  inspection," or "top of the hour" for "first 5 minutes after any hour": each changes the requirement.
- **Simplifying away the technical nouns.** STE controls general words and grammar; it keeps technical
  nouns. Replacing "crash sensor" or "dummy load" with folk terms breaks the match to the manual.
- **Synonym drift.** "Check," "inspect," "verify," and "test" used interchangeably in one lesson; the
  reader assumes different words name different actions, which is what STE's one-meaning rule prevents.
- **Warnings after the step or buried in prose.** A CAUTION after the action arrives too late;
  one buried mid-paragraph goes unsignaled.
- **Telegraphic shortening.** Dropping articles and verbs to hit a word count ("Batt chk, ant conn
  secure") makes text shorter and more ambiguous; split the sentence instead.
- **Treating STE as a substitute for translation.** Ma et al. (2009) found translation and language
  training effective and Simplified English not; write in STE and still provide language support.
- **Over-signaling.** Bolding every line removes the contrast that signals depend on; Lorch (1989)
  found the memory benefit is specific to cued content.

## Examples across domains

**Avionics (CAET lesson): rewriting the ELT inspection screen into STE steps.**

*Setup.* A CAET lesson on emergency locator transmitters carries an SME paragraph: "The ELT should be
checked annually to make sure it's installed right, the batteries aren't corroded, and the g-switch
and controls work; the signal should be checked too, being careful to only test at the top of the
hour." "Checked" names three different actions, "annually" and "top of the hour" paraphrase
controlling text, "g-switch" drifts from the regulation's "crash sensor," and the caution comes last.

*Application.* The designer rebuilds the screen. A source block quotes 14 CFR 91.207(d) and (c) verbatim
with the eCFR citation: the ELT "must be inspected within 12 calendar months after the last inspection"
for "Proper installation," "Battery corrosion," "Operation of the controls and crash sensor," and "The
presence of a sufficient signal radiated from its antenna." Numbered steps follow, one imperative action
each: "1. Examine the ELT mounting and the antenna cable connection. 2. Examine the battery for
corrosion. 3. Compare the battery replacement date on the transmitter with the maintenance record." A
CAUTION sits directly above the transmit step and keeps AIM 6-2-4's values word for word: test an analog
121.5/243 MHz ELT only "during the first 5 minutes after any hour" and for no more than "three audible
sweeps"; test a 406 MHz ELT only per the manufacturer's instructions. A glossary card fixes one meaning
per term: inspect (examine without transmitting), test (operate the ELT so it transmits), crash sensor
(the impact switch named in 91.207(d); some manuals say G-switch, the lesson does not), cumulative hour
(total time in use, added across all uses; 91.207(c)(1)).

*Follow-up.* The learner does a "spot the paraphrase" task: compare the old paragraph with the quoted
regulation and flag each place the wording changed the requirement. Misread probes follow ("Analog ELT
test at 10:07: inside the window?"), and probe error rates on old and new text are compared by native
language. The glossary terms return as spaced retrieval cards, and a later screen shows the installed
unit's manufacturer ICA page unedited so the learner practices reading the source with the card as
the scaffold.

**Patient education: rewriting a warfarin discharge handout.**

*Setup.* A hospital nurse educator inherits a warfarin discharge handout written in dense paragraphs:
passive voice ("doses should not be doubled"), the drug called "warfarin," "your blood thinner," and
"Coumadin" interchangeably, the bleeding warning on page 2, and the prescribed dose described as "your
usual dose." Many patients on the unit read English as a second language.

*Application.* The educator front-loads the most important action (Sheridan et al., 2011): "Take
warfarin once a day, at about the same time." The exact dose and tablet strength are copied from the
prescription label into a boxed field the pharmacist fills in, never paraphrased. The bleeding warning
moves to page 1 as a numbered "call your doctor now" list, one sign per item. One name, "warfarin," is
used throughout, and a glossary box defines INR once. The pharmacy's missed-dose rule becomes one
instruction per sentence, condition first, meaning unchanged: "If you remember on the same day, take
the missed dose right away. Do not take a double dose the next day. Call your doctor." The
FDA-approved Medication Guide is handed over unmodified: 21 CFR 208.20 already requires nontechnical
language and forbids conflict with approved labeling, so the handout points to it, never restates it.

*Follow-up.* The educator scores old and new versions with the PEMAT (Shoemaker et al., 2014) for
understandability and actionability, then runs teach-back with five patients, non-native readers
included: "Show me what you will do tomorrow if you forget today's dose." Each wrong answer traces to
a sentence that is rewritten. For patients whose English is the barrier, a translated version keeps
the drug name and dose identical to the label, mirroring the translation finding of Ma et al. (2009).

## Quality signal

The runtime knows the text is working when (a) an automated lint of every procedure screen shows all procedural sentences at or under 20 words with one imperative verb, zero glossary-term synonyms, every WARNING or CAUTION placed before its step, and every quoted limit string-matching the cited source with zero character differences; and (b) the misread-probe error rate on rewritten text falls below the original's, with the largest drop on the most complex procedures and for non-native readers, the pattern Shubert et al. (1995) and Chervak et al. (1996) report. If non-native readers' probe errors stay well above native readers' after the rewrite, add translation and language support (Ma et al., 2009) rather than further simplification.

## Cross-references

- See [voice-style-agency-preserving-language](../05-tutor-personas/voice-style-agency-preserving-language.md) for tone, second-person phrasing, and autonomy support; this chapter governs grammar, vocabulary, and placement.
- See [multimedia-design-principles](../02-instructional-design/multimedia-design-principles.md) for signaling, redundancy, and coherence when the words combine with narration and graphics.
- See [cognitive-load-theory](../01-learning-science/cognitive-load-theory.md) for why ambiguous wording and synonym drift add extraneous load.
- See [segmenting-and-pretraining](../04-delivery-patterns/segmenting-and-pretraining.md) for using the glossary card as pretraining on key terms before the procedure.
- See [accessible-design-wcag-udl](../02-instructional-design/accessible-design-wcag-udl.md) for heading structure, reading level, and screen-reader requirements that plain-language text supports.
- See [human-factors-crm-mrm-training](../02-instructional-design/human-factors-crm-mrm-training.md) for documentation and procedural noncompliance as maintenance human-factors content.
- See [item-writing-rules](../03-assessment-science/item-writing-rules.md) for applying the same one-meaning, front-loaded wording to knowledge-check stems.
- See [schema-theory-knowledge-components](../01-learning-science/schema-theory-knowledge-components.md) for mapping each glossary term to a single knowledge component.
