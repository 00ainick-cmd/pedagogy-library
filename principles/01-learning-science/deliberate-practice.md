---
id: deliberate-practice
title: Deliberate Practice
category: 01-learning-science
aliases: [ericsson-deliberate-practice, designed-practice, coached-practice]
evidence_strength: moderate  # intervention evidence is mostly medical procedural skills; variance share disputed
effect_size: "Effect size correlation r = 0.71 (95% CI 0.65-0.76) for simulation-based medical education with deliberate practice versus traditional clinical education, 14 studies, 633 learners (McGaghie et al. 2011 meta-analysis). Share of performance variance explained by accumulated deliberate practice: 14% overall after the 2018 corrigendum (games 24%, music 23%, sports 20%, education 5%, professions 1%), first published as 12% (26%, 21%, 18%, 4%, under 1%) (Macnamara, Hambrick & Oswald 2014 meta-analysis); 29% (61% after attenuation correction) in the Ericsson & Harwell 2019 reanalysis."
key_sources:
  - "Ericsson, K. A., Krampe, R. T., & Tesch-Römer, C. (1993). The role of deliberate practice in the acquisition of expert performance. Psychological Review, 100(3), 363-406. doi:10.1037/0033-295X.100.3.363"
  - "Ericsson, K. A. (2008). Deliberate practice and acquisition of expert performance: A general overview. Academic Emergency Medicine, 15(11), 988-994. doi:10.1111/j.1553-2712.2008.00227.x"
  - "Macnamara, B. N., Hambrick, D. Z., & Oswald, F. L. (2014). Deliberate practice and performance in music, games, sports, education, and professions: A meta-analysis. Psychological Science, 25(8), 1608-1618. doi:10.1177/0956797614535810 (Corrigendum 2018, doi:10.1177/0956797618769891)"
  - "Macnamara, B. N., & Maitra, M. (2019). The role of deliberate practice in expert performance: Revisiting Ericsson, Krampe & Tesch-Römer (1993). Royal Society Open Science, 6(8), 190327. doi:10.1098/rsos.190327"
  - "Ericsson, K. A., & Harwell, K. W. (2019). Deliberate practice and proposed limits on the effects of practice on the acquisition of expert performance: Why the original definition matters and recommendations for future research. Frontiers in Psychology, 10, 2396. doi:10.3389/fpsyg.2019.02396"
  - "McGaghie, W. C., Issenberg, S. B., Cohen, E. R., Barsuk, J. H., & Wayne, D. B. (2011). Does simulation-based medical education with deliberate practice yield better results than traditional clinical education? A meta-analytic comparative review of the evidence. Academic Medicine, 86(6), 706-711. doi:10.1097/ACM.0b013e318217e119"
  - "Cook, D. A., Hamstra, S. J., Brydges, R., Zendejas, B., Szostek, J. H., Wang, A. T., Erwin, P. J., & Hatala, R. (2013). Comparative effectiveness of instructional design features in simulation-based education: Systematic review and meta-analysis. Medical Teacher, 35(1), e867-e898. doi:10.3109/0142159X.2012.714886"
last_reviewed: 2026-10-01
applies_to: [acquisition, retention]
contraindicated_when:
  - learner_state.first_exposure
  - learner_state.overwhelmed
  - learner_state.fatigued
  - material.unstable_target_specification
  - task_type.exploratory_inquiry_emergent_outcomes
  - task_type.single_session_one_shot
runtime_triggers:
  - practice_session_design
  - whole_task_performance_logged
  - subskill_error_cluster_detected
  - performance_plateau_detected
  - isolated_subskill_at_criterion
related: [desirable-difficulties, spaced-retrieval, error-analysis-corrective-feedback, mastery-learning, 4c-id-model, zpd-operationalization, cognitive-task-analysis, simulation-fidelity, worked-example-effect, cognitive-apprenticeship-mentor, interleaving]
---

# Deliberate Practice

## One-line claim

To improve a skill, have a teacher or a designed lesson isolate the learner's weakest sub-skill from performance data, set a task just beyond what the learner does reliably, give immediate informative feedback against an explicit standard on every attempt, repeat with refinement until the sub-skill meets criterion, then return it to the whole task; accumulated time or repetitions without this structure is experience, not deliberate practice.

## Evidence base

Ericsson, Krampe, and Tesch-Römer (1993) defined deliberate practice in *Psychological Review* as activities specially designed to improve the current level of performance, set apart from work (public performance and paid service) and play (inherently enjoyable activity with no explicit goal) (p. 368). The definition rests on the laboratory conditions for efficient learning: a task designed around the learner's existing knowledge, immediate informative feedback and knowledge of results, and repeated performance of the same or similar tasks; without adequate feedback, "mere repetition" does not reliably improve accuracy (p. 367). They named three constraints every practice design must respect: practice needs teachers, materials, and time (resource constraint); it is not inherently motivating (motivational constraint); and it is effortful enough to be sustained only for a limited time each day (effort constraint) (pp. 368-369). In their studies of student violinists at a Berlin music academy, retrospective estimates of accumulated solitary practice tracked attained skill group. Ericsson (2008) carried the framework into medicine in *Academic Emergency Medicine*: length of experience and reputation relate only weakly to observed performance, while improvement traces to training, often designed by teachers and coaches, that targets particular tasks with immediate feedback, time for problem solving and evaluation, and repeated performance to refine behavior.

The strongest intervention evidence comes from simulation-based education. McGaghie, Issenberg, Cohen, Barsuk, and Wayne (2011) meta-analyzed 14 head-to-head studies (633 learners) in *Academic Medicine* and found simulation-based medical education with deliberate practice superior to traditional clinical education for specific skill acquisition goals (advanced cardiac life support, laparoscopic surgery, cardiac auscultation, central venous and hemodialysis catheter insertion, thoracentesis), with a pooled effect size correlation of r = 0.71 (95% CI 0.65-0.76). Cook et al. (2013) separated the design features in *Medical Teacher* by synthesizing 289 studies (18,971 trainees) that compared one simulation design with another; for skill outcomes, pooled effect sizes favored range of difficulty (0.68, 20 studies), distributed practice (0.66, 6 studies), individualized learning (0.52, 59 studies), and feedback (0.44, 80 studies), with repetitive practice at 0.68 (7 studies, p = 0.06) and heterogeneity usually large. Those features are the working parts of deliberate practice. At the scale of one session, Duke, Simmons, and Cash (2009) observed 17 piano majors practicing a difficult three-measure passage: practice time and number of trials did not predict next-day retention, while the share of complete trials played correctly did (r = -.71 with retention rank, rank 1 best).

The controversy concerns how much of the difference between people accumulated practice explains, not whether designed practice beats undesigned practice for a given learner. Macnamara, Hambrick, and Oswald (2014) meta-analyzed 88 studies (157 effect sizes, N = 11,135) in *Psychological Science* and reported deliberate practice explaining 26% of performance variance in games, 21% in music, 18% in sports, 4% in education, and under 1% in professions; their 2018 corrigendum revised these to 24%, 23%, 20%, 5%, and 1% (14% overall), with less variance explained in low-predictability tasks (6%; handling an aviation emergency was their example) than high-predictability ones (23%). Macnamara and Maitra's (2019) double-blind replication of the violin study in *Royal Society Open Science* found practice alone explained 26% of variance against the original 48%, and teacher-designed practice (23%) explained no more than solitary practice. Ericsson and Harwell (2019) replied in *Frontiers in Psychology* that the meta-analysis pooled a broader "structured practice," and that keeping only effects meeting the original criteria raised variance explained to 29% (61% after attenuation correction). Both sides measure practice mostly as accumulated duration, which Ericsson and Harwell (2019) recommend replacing with measures of practice quality, and neither calls practice unimportant: Macnamara et al. (2014) conclude it is important but less so than claimed. Evidence strength is rated moderate because the intervention studies cluster in medical procedural skills with small study counts and the construct's definition is still disputed. The library excludes the 10,000-hour rule; this chapter sets no hour targets. It is the practice-design rule for skills that combines the scheduling of spaced-retrieval, the difficulty logic of desirable-difficulties, the feedback content of error-analysis-corrective-feedback, and the advancement gate of mastery-learning.

## When to apply

- **Practice session is being designed.** Whenever a lesson, lab, or coaching session allots time to
  performing a skill, design that time as targeted drill, not open "practice time" or repeated whole runs.
- **A whole-task attempt has been logged.** A full attempt (exam-mode lab run, recorded run-through,
  scored scenario) yields error data by step; schedule the targeted drill directly after it.
- **Errors cluster on one sub-skill.** When two or more attempts fail on the same step or error
  class while the other steps are clean, extract that sub-skill for focused repetition.
- **Performance has plateaued.** When whole-task scores sit in the same band across three or more
  attempts despite more time, the learner is accumulating experience without improvement
  (Ericsson, 2008); switch to isolated, feedback-dense drill at the edge of ability.
- **The isolated sub-skill has reached criterion.** Reintegrate at once: run the whole task so the
  refined sub-skill is performed in context, then choose the next weakest sub-skill from the new data.

## When NOT to apply

- **First exposure, no picture of the goal.** Drill presupposes the learner understands the task and
  can see what correct looks like (Ericsson et al., 1993, p. 367). Demonstrate and use worked examples
  first ([worked-example-effect](../01-learning-science/worked-example-effect.md)).
- **Learner is overwhelmed.** When errors spread across most steps instead of clustering, there is
  no single weak sub-skill to isolate. Return to guided instruction and reduce load first.
- **Learner is fatigued or past the effort window.** Deliberate practice can be sustained only for a
  limited time (effort constraint; Ericsson et al., 1993, p. 369). When accuracy falls on items the
  learner was getting right earlier in the block, end the block.
- **No explicit standard exists.** Without a criterion (a tolerance, an inspection standard, a rubric,
  a model performance), feedback cannot be informative. Write the standard first or use another method.
- **The task is open-ended inquiry.** With no single correct performance, the compare-to-standard
  loop has nothing to compare against; use [productive-failure](../04-delivery-patterns/productive-failure.md).
- **One-shot exposure with no repeat sessions.** A one-time awareness briefing, or a task the learner
  will never perform, does not repay the design cost of the loop.

## How to apply

- **Diagnose from performance data, not hours or self-report.** Log each whole-task attempt by step and
  error class; target the sub-skill behind the most errors or the most consequential ones. Track the
  percentage of clean trials, not minutes (Duke et al., 2009; Ericsson & Harwell, 2019, on quality).
- **Show the goal and the standard before the first repetition.** Put the criterion on screen (the
  reference limit, the model performance, accept and reject photos) with the one target for this block.
- **Set the task at the edge of current ability.** Slow the tempo, remove a cue, shorten a time limit,
  or tighten the tolerance until errors appear but do not dominate; step difficulty up after a run of
  clean trials and down after consecutive errors (see
  [zpd-operationalization](../07-runtime-decisions/zpd-operationalization.md)).
- **Give immediate, informative feedback on every attempt.** Pass or fail against the standard, plus
  what was wrong and how to correct it, before the next attempt (Ericsson, 2008; content rules in
  [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md)).
- **Stop at an error, fix it, then repeat it correctly.** Correct the error at a slower or simpler
  setting and require consecutive clean repetitions, so correct trials dominate the block.
- **Keep blocks short and spread them out.** One sub-skill per block, ended when accuracy slips;
  revisit across days, then mix with other items once it holds (see
  [spaced-retrieval](../01-learning-science/spaced-retrieval.md), [interleaving](../01-learning-science/interleaving.md)).
- **Reintegrate into the whole task.** After criterion on the part, perform the whole task in the same
  session (see [4c-id-model](../02-instructional-design/4c-id-model.md)).
- **Let the teacher or the lesson logic choose the next drill.** The designer or tutor picks the next
  sub-skill and difficulty from the data; in e-learning the lesson's branching plays the coach. Gate
  advancement on criterion, not time ([mastery-learning](../02-instructional-design/mastery-learning.md)).

## Common misapplications

- **Counting hours or repetitions.** Minutes logged and round-number hour targets measure exposure, not
  improvement; practice time did not predict retention in Duke et al. (2009). The 10,000-hour rule is
  excluded from this library.
- **Repeating the whole task top to bottom.** Full runs again and again spend most repetitions on parts
  already performed well and few on the weak sub-skill; a drill passed every time sits below the edge.
- **Drilling without feedback.** Repetition without knowledge of results does not reliably improve
  accuracy (Ericsson et al., 1993, p. 367) and lets the learner rehearse the error.
- **Never reintegrating.** A sub-skill drilled only in isolation is never practiced where it must be
  used; end every drill block with a whole-task attempt.
- **Overclaiming the research.** Telling learners that practice alone sets their ceiling, or that
  talent is irrelevant, misstates a disputed literature (Macnamara et al., 2014; Ericsson & Harwell,
  2019). Claim what the intervention evidence supports: designed practice with feedback improves
  this learner's performance more than undesigned practice.
- **Buying fidelity instead of designing the loop.** A more lifelike simulator without isolation,
  graded difficulty, and feedback is still undesigned practice; in Cook et al. (2013) the design
  features themselves carried the effects.

## Examples across domains

**Avionics (CAET lesson): a crimp-a-contact practice loop.**

*Setup.* In Week 6, after Terminations, Bonding, and Grounding, the lesson frames the 3D crimp lab:
a DMC AFM8 crimp tool (M22520/2-01), its G125 GO/NO-GO gauge, three positioners (K13-1, K42,
K41), and 22 AWG M22759/16 wire going into an M39029/63-368 socket. In exam mode the lab lets
every choice through, judges the finished crimp the way an inspector would, and logs each finding
by step (tool check, positioner, selector, wire, crimp, inspect). After two exam runs, one
learner's log shows clean tool checks and crimp strokes, two selector findings (a setting that
does not match the positioner data plate), and one accepted wire with three nicked strands.

*Deliberate practice.* The lesson does not send the learner back through the whole lab. It opens
two short drills built from the log. Drill 1 shows a positioner data plate, a contact part number,
and a wire size; the learner sets the selector and gets pass or fail at once, with the
consequence: too loose leaves shallow indents and the conductor can pull out, too tight cuts
strands and can crack the barrel. Items climb from the single-list K13-1 plate to the K42 and K41
grid plates. Drill 2 shows macro photos of stripped 19-strand 22 AWG wire to accept or reject
against AC 43.13-1B Table 11-13 (copper, 24 to 14 AWG: two nicked strands allowed, none broken);
the feedback circles each nick and counts it. Each drill ends at a criterion (for example eight
consecutive correct, with every plate represented in Drill 1), not after a set time.

*Reintegration and follow-up.* The learner reruns the full lab in exam mode the same session;
the lesson compares the new findings with the baseline log and picks the next weak sub-skill, if
any (often inspection: conductor visible in the inspection hole, no strands outside the barrel).
The selector drill returns as a three-item warm-up two days later, and the hands-on bench with a
real AFM8 and the instructor's sign-off opens only after a clean exam-mode run.

**Music performance (piano): a passage that breaks at tempo.**

*Setup.* A conservatory piano student is four weeks from a jury with the first movement of a
Classical-era sonata. The teacher records a full run-through and marks every slip: the movement is
clean except a four-bar passage where a right-hand scale run passes the thumb under at speed over
a left-hand Alberti bass. At the target tempo she smears or misses the crossing in three of four
run-throughs. Her own plan was to play the movement top to bottom twice a day.

*Deliberate practice.* The teacher replaces the run-throughs with a designed drill. The two beats
around the thumb crossing are isolated, right hand alone, with the metronome set where she plays
them correctly only with effort (for example 30 beats per minute under the target). Every trial
gets immediate feedback, the teacher's call and then a phone recording played back at once,
against a stated standard: even sixteenths, no accent on the thumb. On any error she stops, names
the exact note, plays it slowly, and resumes. The tempo rises a few beats per minute only after
three consecutive clean trials and drops back after two misses in a row; hands together and then
the full four bars follow the same rule. Her log records the share of clean trials per block, not
minutes (Duke et al., 2009).

*Reintegration and follow-up.* Each session ends with the passage played inside its phrase and
then within a full run-through at performance tempo. The next day opens with one cold, recorded
attempt at the passage at target tempo as the retention check. If it holds, the teacher picks the
next weakest spot from a new recording; if it fails, the drill restarts a few clicks below the
tempo of the last clean block.

## Quality signal

The runtime knows deliberate practice is working when the targeted error class drops on the next whole-task attempt at +24 hours (a fresh exam-mode run or recorded run-through) relative to the baseline attempt while untargeted steps hold steady, and when the clean-trial percentage within drill blocks rises across blocks independent of time on task (Duke et al., 2009). If drill accuracy is near 100% from the first block, the task sits below the edge; if it stays low across two blocks with no rise, the step is too large or the feedback is not informative, and the drill needs redesign.

## Cross-references

- See [desirable-difficulties](../01-learning-science/desirable-difficulties.md) for why effortful practice that depresses in-session performance builds durable skill.
- See [spaced-retrieval](../01-learning-science/spaced-retrieval.md) for scheduling drill blocks and warm-ups across days.
- See [error-analysis-corrective-feedback](../04-delivery-patterns/error-analysis-corrective-feedback.md) for what the feedback after each attempt should say.
- See [mastery-learning](../02-instructional-design/mastery-learning.md) for gating advancement on criterion instead of elapsed time.
- See [4c-id-model](../02-instructional-design/4c-id-model.md) for how part-task practice fits inside whole-task learning.
- See [zpd-operationalization](../07-runtime-decisions/zpd-operationalization.md) for runtime rules that keep difficulty at the edge of ability.
- See [cognitive-task-analysis](../02-instructional-design/cognitive-task-analysis.md) for decomposing a skill into the sub-skills a drill can isolate.
- See [simulation-fidelity](../04-delivery-patterns/simulation-fidelity.md) for choosing how lifelike the practice environment needs to be.
- See [cognitive-apprenticeship-mentor](../05-tutor-personas/cognitive-apprenticeship-mentor.md) for the coaching role that designs the next drill.
