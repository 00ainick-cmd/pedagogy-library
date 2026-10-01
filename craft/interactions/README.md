---
title: Interaction pattern catalog
section: 08-lesson-craft / interactions
last_reviewed: 2026-10-01
owner: Nick Brown, CAET program, AEA
---

# Interaction Pattern Catalog

## What this is

The interactions a CAET avionics lesson may use, each in its own file: what the student does, when it teaches and why (with the evidence), when it does not, its parts and states, the mobile and accessibility rules, how our lessons build it today (or a build spec where we have none), the best real example in a built lesson, an idea for a lesson not yet rebuilt, and the common mistakes. Every file ends with its sources.

It sits beside two sibling folders in Lesson Craft: `../media-motion/` (animation, video, 3D craft) and `../history-incidents/` (history pages and real incidents). The learning science behind each pattern is in Library A, one level up; principle slugs below link to those chapters.

The standard for every pattern is the lesson Nick approved as the model on 2026-09-30, Safety Data Sheets ("this is very good. I like this format"), and the build brief that came out of it: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`.

## How to use it

1. Plan the lesson's pages from the Blueprint.
2. For each page, pick the interaction from the content type table in [mixing-guide.md](mixing-guide.md).
3. Open the pattern file. Copy the markup and data shape from "Our implementation", follow the anatomy and the mobile rules, and avoid the common mistakes.
4. Check the lesson against the variety rules in [mixing-guide.md](mixing-guide.md) before showing Nick.
5. If the pattern is a GAP, see [gaps.md](gaps.md) for the build spec.

## Status legend

- **shared**: in `frontend/public/core/lesson-parts.*` (or another shared core file); use it as is.
- **local**: built well in one or more lessons, but each lesson carries its own copy; lift from the best example.
- **partial**: part of it exists; the rest is a gap.
- **GAP**: not built in any lesson yet.

## The index

| Pattern | What the learner does | When it teaches (principle) | When NOT to use | Our component today | Best example (lesson, page) |
|---|---|---|---|---|---|
| [Hotspot on a real document](hotspot-on-real-document.md) | Taps paragraphs, blocks or rows of the real regulation, form or data sheet; works guided lookups | transfer-of-learning, testing-effect, dual-coding | The student will never use the document; no lookups; concept not yet taught | local: `.rr` reader (certification-checks, maintenance-records, repair-stations), `.reader` (safety-data-sheets) | certification-checks, "91.411 test" `#test411`; safety-data-sheets, "Reading" `#reader` |
| [Labeled graphic](labeled-graphic.md) | Selects numbered markers on a real figure; reads each part | dual-coding, schema-theory-knowledge-components, cognitive-load-theory | All labels matter at once; more than 8 markers; key fact hidden behind a marker | local: `.hs`, `.hot`, `.hsfig`, `.dir` grid (about 20 lessons) | safety-data-sheets, "Risk diamond" `#diamond` |
| [Find the hotspot](find-the-hotspot.md) | Finds the asked-for part among marked candidates; graded | testing-effect, transfer-of-learning | Parts not yet taught; free-click areas with no candidates | local: `.fq` (transistors-inverters), `.rr` lookup desk | transistors-inverters, "Find Q" `#findq` |
| [Tabs](tabs.md) | Switches between two to five parallel views | cognitive-load-theory, schema-theory-knowledge-components | Student must compare across tabs; steps in order; key content in a later tab | local: `.tabs` with `role="tablist"` | maintenance-records, "Form 337" `#form337` |
| [Accordion](accordion.md) | Opens optional extra detail | expertise-reversal, cognitive-load-theory | Anything the check tests, any key content (Nick's rule) | shared: `details.acc` | certification-checks, "Re-tests" `#retest` |
| [Flip cards](flip-cards.md) | Answers the front, turns the card to check | testing-effect, dual-coding, spaced-retrieval | The front asks nothing; cards must be compared | local: `.flip` (20+ lessons) | safety-data-sheets, "Materials" `#materials` |
| [Term card](term-card.md) | Reads a one-sentence definition where the term first appears | schema-theory-knowledge-components (pretraining) | More than 4 new terms on a page; a glossary page | shared: `.terms`, `.term` | safety-data-sheets, "Problem" `#hook` |
| [Stat card](stat-card.md) | Reads the one number the page turns on | cognitive-load-theory (signaling, coherence) | The number is not the point; invented numbers | shared: `.stats`, `.stat` | safety-data-sheets, "Solvents" `#solvents` |
| [Process stepper](process-stepper.md) | Steps through a procedure with Next and Back | worked-example-effect, 4c-id-model, cognitive-load-theory | Student should produce the order; motion; 3 short steps | local: `.stepper`, `.stepr`, `.stepstrip` | antennas-coax, "Install" `#install` |
| [Timeline](timeline.md) | Steps through dated events or an accident | schema-theory-knowledge-components, transfer-of-learning | Dates with no causes; details not in the report | local: `.tl`, `.tline`; shared `.hist` card | fod-tool-control, "Concorde" `#concorde` |
| [Image compare slider](image-compare-slider.md) | Wipes between two aligned images | cognitive-load-theory (contrasting cases) | The difference is motion (Nick rejected this); unaligned images | GAP (nearest: state toggle) | none; nearest efis-glass, "Red X" `#redx` |
| [State toggle figure](state-toggle-figure.md) | Switches a figure between named states | self-explanation-elaborative-interrogation, cognitive-load-theory | Continuous values; prediction should come first | local: `.seg`, `.tg` (about 80 pages) | digital-logic, "AND" `#and` |
| [Live model](live-model.md) | Moves a control, reads live values, to a task | predict-before-reveal, productive-failure, transfer-of-learning | No task; exact values on a slider; values not yet taught | local: `.fig-live`, Electric Ink benches, canvas labs | voltage-lesson, "Divider" `#bench`; antennas-coax, "VSWR" `#vswr` |
| [3D object explorer](3d-object-explorer.md) | Turns a real part, picks key views, taps labels | dual-coding, transfer-of-learning | A 2D drawing shows it; no view buttons; weak phones | local: `.m3d`, `.tt`, three.js | shop-communication, "Flight 2574" `#flight2574` |
| [Interactive video](interactive-video.md) | Plays the lecture with chapters, speed, captions; answers pause questions | testing-effect, pretesting-effect | Watch-checking trivia; locked seek bar | partial: shared lecture player; pause questions GAP | safety-data-sheets, "Lecture" `#video` |
| [Predict, then reveal](predict-then-reveal.md) | Commits to a prediction, then sees what happens and why | predict-before-reveal, pretesting-effect | No basis for a guess; reveal not on the same page | local: `.predict`, `.pred` | safety-data-sheets, "Permeation" `#permeation`; blocked-ports, "Airspeed" `#airspeed` |
| [Ask card](ask-card.md) | Answers one question; feedback pops over it | testing-effect, error-analysis-corrective-feedback, item-writing-rules | A prediction; trivia; stacked cards | shared: `.ask` | safety-data-sheets, "Recall" `#recall` |
| [Picture option question](picture-option-question.md) | Picks among small schematics, faces or photos | dual-coding, transfer-of-learning | Picture adds nothing; too small at 390 px | partial: `.ask` with pictures (lesson CSS); check needs a per-lesson patch | series-circuits, "One path" `#onepath` |
| [One-card sort](one-card-sort.md) | Drags, keys or taps each card into one of 2 or 3 buckets | interleaving, testing-effect, schema-theory-knowledge-components | Categories not taught; 4+ buckets; order matters | shared: `.rsort` | safety-data-sheets, "Section sort" `#keysort` |
| [Drag to order](drag-to-order.md) | Puts the steps of a procedure in order | testing-effect, 4c-id-model | Several orders are right; procedure never shown | local: tap-in-order `.seqbox`, `.order`; drag GAP | shop-emergencies, "Contact" `#contact` |
| [Matching](matching.md) | Pairs fault with signature, pin with signal | testing-effect, item-writing-rules | Mixed kinds of items; 2 or 3 pairs; more than 6 | GAP | none |
| [Fill the table](fill-the-table.md) | Types a value or fills table cells; checked with tolerance | faded-worked-examples, testing-effect | No worked example first; answers the checker cannot parse | local: `.numq`, `.typed` (about 8 lessons) | lighting-systems, "LED math" `#ledmath` |
| [Scenario with branches](scenario-branching.md) | Makes a shop decision; reads the consequence | merrills-first-principles, transfer-of-learning | One sensible choice; cartoon characters; rule not yet taught | local: `.scene` (8 lessons), one decision; multi-step GAP | safety-data-sheets, "Label scene" `#scene` |
| [Guided procedure](guided-procedure.md) | Does a real procedure on an instrument sim, step by step | 4c-id-model, cognitive-apprenticeship-mentor | Procedure never shown; free play; fake steps | local: Fluke trainer `.fluke-lab`, Circuit Lab, Harness Bench, 3D crimp lab | multimeter, "Meter lab" `#measure` |
| [Find the fault](find-the-fault.md) | Isolates a hidden fault by method with real tests | productive-failure, error-analysis-corrective-feedback, 4c-id-model | Method not taught; fault with no signature | local: breaker panel `.cbp`, FAA-figure ammeter, scope lab, Circuit Lab Fault Hunt | electrical-troubleshooting, "Find branch" `#branch` |
| [Build the circuit](build-the-circuit.md) | Adds, removes or places parts and sees the totals | transfer-of-learning, schema-theory-knowledge-components | Free wiring with no goal; values not yet taught | partial: series and parallel builder, add-a-branch; slot builder GAP | parallel-circuits, "Current law" `#kcl`; voltage-lesson, "Battery hookup" `#network` |
| [Build the record](build-the-record.md) | Assembles a logbook entry part by part | faded-worked-examples, transfer-of-learning | Rule not taught; right option the only complete one | local: `.picks` with a logbook strip | maintenance-records, "Rewrite" `#rewrite` |
| [Worked example](worked-example.md) | Reveals solved steps with reasons, then does "your turn" | worked-example-effect, faded-worked-examples, self-explanation-prompts | Student already can; concept not yet taught | local: `.wex`, `.worked`; shared `.stepcards` | transformers-aircraft-ac, "Voltage math" `#voltmath` |
| [Checklist](checklist.md) | Ticks real items; prints the job aid | transfer-of-learning, goal-setting-theory | Ticks as fake engagement; order must be tested | local: `.walk` printable list; saved ticks GAP | shop-emergencies, "Labels" `#labels` |
| [Case file](case-file.md) | Works a real incident: report lines, factor, the catch | transfer-of-learning, analogical-bridging | No maintenance lesson; details not in the report | local: `.case-file` (5 pages) | human-factors, "Attention" `#attention` |
| [Experience demo](experience-demo.md) | Does a short timed task, then learns what it measured | predict-before-reveal, productive-failure | No explanation follows; flashing; no way out | local: canvas tests in human-factors | human-factors, "Count test" `#count` |

Built lesson files are at `aero-caet-source/frontend/public/aero/courses/<course>/lessons/<lesson>.html`; their sources are in `aero-caet-source/tools/curriculum/revamp/examples/<lesson>/`.

## When an interaction teaches, and when it is decoration

The evidence the whole catalog rests on, in five lines:

1. **Behavior is not learning.** Clicking, dragging and flipping only help when they make the student select, organize and connect the content (Mayer 2004; Clark and Mayer 2023). Ask of every interaction: what does this make the student think about?
2. **Constructing beats manipulating beats watching.** ICAP ranks interactive, constructive, active and passive engagement in that order (Chi and Wylie 2014). Prefer patterns where the student produces something: a prediction, an order, an entry, a diagnosis.
3. **What the student sees matters more than the control.** Interactivity helped only when it got people to the informative view (Keehner et al. 2008). Give view buttons and tasks, not just freedom.
4. **Interesting extras hurt.** Seductive details lower learning (Rey 2012); Mayer's coherence principle is one of the strongest in the field. No decorative interactions.
5. **Retrieval with feedback, at the moment of need.** The check family works because of the testing effect and good feedback (Roediger and Karpicke 2006; Hattie and Timperley 2007). Every check gets one teaching sentence per option.

Research on interactivity itself agrees with care: an operable model beat a passive one for problem solving (Evans and Gibbons 2007), and Moreno and Mayer (2007) list the kinds that can help (dialoguing, controlling, manipulating, searching, navigating) when the activity prompts the right processing.

## Rules every pattern follows

- **Phone first.** Nick reviews on his phone. Everything works at 390 px with no horizontal scroll; tap targets at least 44 px (WCAG 2.2 minimum 24 px; NN/g recommends about 1 cm).
- **No drag required.** Every drag has a tap and a keyboard path (WCAG 2.2 2.5.7).
- **Keyboard.** Every control is a real button, input or `details`; focus is visible; arrow keys inside a widget must not turn the page. The pager (`lesson-pager.js`) skips any arrow key a widget has already handled with `preventDefault()`, and always skips inputs, `[role="slider"]`, dialogs and the lecture player; lessons opted in with `html[data-lesson-mode="paged"]` also skip buttons, links and `[role="tab"]`. Lessons built on `body[data-pager]` (the Safety Data Sheets model) do not get that last group, so a widget that uses arrow keys calls `preventDefault()` on them, as the one-card sort does.
- **Screen readers.** Results in `aria-live="polite"`; states in `aria-pressed`, `aria-expanded`, `aria-selected`, `aria-current`; pictures named.
- **Reduced motion.** Honor `prefers-reduced-motion`; pause anything animated when its page is hidden (`lp:leave`).
- **Never color alone** for right and wrong (WCAG 1.4.1); body text 7:1, headings 4.5:1 on the dark theme.
- **Never gate Continue** on an activity; only the lecture page waits for its end, with Skip for now.
- **Nick's writing rules** apply inside every interaction: plain nouns for headings, no slogans, no chips or lesson codes, no em or en dashes, terms defined on first use, real sources credited.

## The outside catalogs, mapped

What the major tools offer, and where it lives here.

| Tool and block | Our pattern |
|---|---|
| Rise 360 Labeled Graphic; Evolve Hot Graphic; H5P Image Hotspots; Storyline markers | [labeled-graphic](labeled-graphic.md), [hotspot-on-real-document](hotspot-on-real-document.md) |
| Rise Process; Evolve Narrative | [process-stepper](process-stepper.md) |
| Rise Scenario; H5P Branching Scenario; Evolve Branching | [scenario-branching](scenario-branching.md) |
| Rise Sorting Activity; Evolve Sorting | [one-card-sort](one-card-sort.md), [drag-to-order](drag-to-order.md) |
| Rise Timeline; H5P Timeline | [timeline](timeline.md) |
| Rise Flashcard grid and stack; H5P Dialog Cards and Flashcards; Evolve Flip Card | [flip-cards](flip-cards.md) |
| Rise Accordion and Tabs; Evolve Accordion and Tabs | [accordion](accordion.md), [tabs](tabs.md) |
| Rise Checkbox list; Evolve Checklist | [checklist](checklist.md) |
| Rise Button and Button stack | used sparingly as links ("Open the full sheet", "Open in a new tab"); not a teaching pattern |
| Rise Storyline block and Code block; Storyline sliders and dials | [live-model](live-model.md), [guided-procedure](guided-procedure.md), [build-the-circuit](build-the-circuit.md) |
| Rise knowledge checks (multiple choice, multiple response, fill in the blank, matching); Storyline form-based and freeform questions | [ask-card](ask-card.md), [picture-option-question](picture-option-question.md), [fill-the-table](fill-the-table.md), [matching](matching.md), [find-the-hotspot](find-the-hotspot.md) |
| H5P Find the Hotspot and Find Multiple Hotspots; Storyline Hotspot question | [find-the-hotspot](find-the-hotspot.md) |
| H5P Image Juxtaposition | [image-compare-slider](image-compare-slider.md) |
| H5P Image Sequencing, Sort the Paragraphs; Storyline Sequence | [drag-to-order](drag-to-order.md) |
| H5P Drag the Words, Fill in the Blanks; Storyline Numeric | [fill-the-table](fill-the-table.md) |
| H5P Interactive Video; Evolve Interactive Video | [interactive-video](interactive-video.md) |
| Storyline 360 degree images; three.js scenes | [3d-object-explorer](3d-object-explorer.md) |
| Rise statement, quote, list and chart blocks | the shared rule box, pull quote, step cards and [stat-card](stat-card.md) |
| Rise AI Assistant (drafts blocks and knowledge checks from source documents); Magic Import | no pattern; any drafted item must still pass the item-writing rules and Nick's writing rules |

H5P's own accessibility review (LibreTexts) rates many of its types "requires alternative activity" (Find the Hotspot, Image Juxtaposition, Drag the Words, Timeline). Our versions are designed around those failures: marked candidates instead of free clicks, typed blanks instead of dragged words, buttons beside every drag.

## Files

31 pattern files (the index above), plus:

- [gaps.md](gaps.md): what Rise, Storyline, Evolve and H5P have that our shared parts lack, ranked by teaching value for avionics, each with a build spec for one builder.
- [mixing-guide.md](mixing-guide.md): which interactions fit which content, the variety rules, the approved model page by page, two sample plans.

## Sources

- The standard: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`; kit research `.../research/02-component-catalog.md` and `.../research/03-patterns-and-libraries.md`; shared parts `aero-caet-source/frontend/public/core/lesson-parts.js`, `lesson-parts.css`, `lesson-pager.js`, `lecture-player.js`
- Library A: `../../README.md` (principle slugs)
- Rise 360 lesson and block types: https://www.articulatesupport.com/article/Rise-Lesson-and-Block-Types
- Rise 360 release notes: https://help.rise.com/en/articles/3508729-rise-release-notes
- Rise 360 accessibility maturity plan: https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- Rise 360 AI Assistant: https://community.articulate.com/kb/user-guides/rise-360-create-content-with-ai-assistant/1199630
- Articulate Q4 2025 and Q1 2026 releases: https://www.articulate.com/blog/articulate-360s-newest-feature-releases-q4-2025/ ; https://www.articulate.com/blog/articulate-feature-release-whats-new-in-q1-2026/
- Storyline 360 user guide: https://community.articulate.com/kb/user-guide-series/storyline-360-user-guide/1193854 ; freeform questions: https://community.articulate.com/series/articulate-storyline-360/articles/articulate-storyline-360-user-guide-how-to-add-freeform-questions ; form-based questions: https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-add-form-based-questions
- Evolve content authoring: https://www.intellum.com/products/evolve-content-authoring ; course components: https://clients.intellum.com/student/path/853033-course-components
- H5P content types: https://h5p.org/content-types-and-applications
- H5P accessibility ratings by activity (LibreTexts): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- NN/g: microinteractions https://www.nngroup.com/articles/microinteractions/ ; drag and drop https://www.nngroup.com/articles/drag-drop/ ; accordions https://www.nngroup.com/articles/accordions-complex-content/ ; tabs https://www.nngroup.com/articles/tabs-used-right/ ; carousels https://www.nngroup.com/articles/designing-effective-carousels/ ; animation https://www.nngroup.com/articles/animation-purpose-ux/ ; wizards https://www.nngroup.com/articles/wizards/ ; touch targets https://www.nngroup.com/articles/touch-target-size/ ; sliders https://www.nngroup.com/articles/gui-slider-controls/ ; tooltips https://www.nngroup.com/articles/tooltip-guidelines/
- Mayer, R. E. (2004). Should there be a three-strikes rule against pure discovery learning? American Psychologist, 59(1), 14-19. https://doi.org/10.1037/0003-066X.59.1.14
- Clark, R. C., and Mayer, R. E. (2023). e-Learning and the Science of Instruction (5th ed.). Wiley. https://www.wiley.com/en-us/e+Learning+and+the+Science+of+Instruction:+Proven+Guidelines+for+Consumers+and+Designers+of+Multimedia+Learning,+5th+Edition-p-9781394177387
- Chi, M. T. H., and Wylie, R. (2014). The ICAP framework. Educational Psychologist, 49(4), 219-243. https://doi.org/10.1080/00461520.2014.965823
- Keehner, M., et al. (2008). Spatial reasoning with external visualizations: What matters is what you see, not whether you interact. Cognitive Science, 32(7), 1099-1132. https://doi.org/10.1080/03640210801898177
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. Educational Research Review, 7(3), 216-237. https://doi.org/10.1016/j.edurev.2012.05.003
- Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Hattie, J., and Timperley, H. (2007). The power of feedback. Review of Educational Research, 77(1), 81-112. https://doi.org/10.3102/003465430298487
- Evans, C., and Gibbons, N. J. (2007). The interactivity effect in multimedia learning. Computers and Education, 49(4), 1147-1160. https://doi.org/10.1016/j.compedu.2006.01.008
- Moreno, R., and Mayer, R. (2007). Interactive multimodal learning environments. Educational Psychology Review, 19(3), 309-326. https://doi.org/10.1007/s10648-007-9047-2
- Mayer and Fiorella, Principles for reducing extraneous processing (coherence, signaling, spatial contiguity): https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E
- WCAG 2.2: dragging movements https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html ; target size https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html ; animation from interactions https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html ; use of color https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/patterns/
