# The CAET lesson method

Written 2026-10-01. This is the method every CAET lesson is built with, from plan to signed-off page. It comes from
the build standard in the CAET course repo (`curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`), the Lesson Revamp Playbook
(`curriculum/blueprint/Lesson-Revamp-Playbook.html`) and the `lesson-revamp` skill (`.claude/skills/lesson-revamp/`).
Those files were written from what the course owner approved and rejected in review. The approved model is the
rebuilt **Safety Data Sheets** lesson, signed off on 2026-09-30.

**In plain words:** plan the lesson before you build it, write every word before you code it, keep the working parts
of the old lesson, teach one idea per page in plain technical English, test it on a phone, and let the owner review
every page before it counts as done.

---

## The steps

### Step 1. Plan

Every lesson starts as an entry in the **Blueprint**, the course plan (`curriculum/blueprint/`). The Blueprint page
(`CAET-Lesson-Blueprint.html`) draws itself from data files:

| File | What it holds |
|---|---|
| `caet-objectives.json` | The 49 official CAET objectives, with codes, areas, priority and exam question counts |
| `inventory.json` | Every current lesson, its page path and its section list |
| `plans/<group>.json` | One plan per lesson, in five groups (safety and regulations, DC and tools, AC and solid state, digital and wiring, instruments and CNS) |
| `decisions.json` | The course-level decisions put to the owner, each with a recommendation |

Each lesson entry has: `id`, `status`, `title`, `one_line` (what the student can do after it), `caet` codes,
`prerequisites`, the current lesson's strengths and problems, and a `plan` with a hook, a why line, objectives (each
tied to CAET codes), a recall question, history, aircraft uses, math, the hands-on task, a page list, check ideas and a
field card.

The `status` tells the builder what kind of job it is:

| Status | Meaning |
|---|---|
| `rebuild` | Rebuild from the original lesson, keeping its working parts |
| `keep-light` | The original is strong. Keep most of it, fix the listed problems, bring it to the page format and writing standard |
| `split` | The original covers two lessons. This lesson keeps the original id and teaches only its own scope; the other part becomes its own entry |
| `new` | No original. Build from scratch |
| `merge` | Absorbed into another lesson |

The planner also has a **coverage duty**: every CAET objective must be taught by at least one lesson. A gap becomes a
new lesson, an overlap becomes a merge, and a lesson that crams two topics becomes a split.

Two cautions from experience. The plan's wording is not approved copy (several rejected headings came straight from
it), and early page plans put math before the aircraft pages and contained wrong numbers. Treat the plan as scope and
sequence, not as text.

### Step 2. Brief

The builder reads the one build standard, all of it, before writing a word. It holds the page order, the writing
rules, the look, the check rules, the file boundaries and the test list. The builder also opens the approved model
lesson and walks every page of it in a browser.

For a lesson that already exists, the rebuild then follows five steps, and nothing is built until step 4:

1. **Inventory.** A script lists every block of the old lesson in page order: text, figures, sims, videos, questions
   (`node tools/curriculum/inventory-lesson.mjs <lesson.html> --summary`). It changes nothing.
2. **Tag.** Every piece is tagged Keep, Polish, Replace or Cut, with one line of why. Flag anything used before it is
   taught, blank figures, objectives that promise what the lesson does not teach, and facts to verify.
3. **Storyboard.** One phone-width page with a card per planned page: what it says, which original pieces it holds,
   and a short list of decisions for the owner, each with a recommendation.
4. **Approval.** The owner answers the decisions. Silence or a partial answer is not approval.
5. **Rebuild**, then test, then hand over.

### Step 3. Page copy

Every word is written before anything is built, in `curriculum/revamp-kit/lessons/<NN>-<id>/page-copy.md`. Each page
has the same blocks in the same order:

1. Page number
2. Side-panel label, 12 characters or fewer (this becomes the page's `data-beat`)
3. Plain title
4. One-line goal
5. On-screen text, exactly as it will appear
6. The interaction spec
7. Sources
8. What it lifts from the original lesson
9. The figure

Lines that begin with "Builder:" are instructions and never appear on screen. A fact that is not yet confirmed is
marked `[VERIFY]` with the reason, and all of them are listed at the end; none may ship. The file also carries a
table of every term and the page where it is first defined.

### Step 4. Build

The page copy becomes a lesson page through three kinds of file: the words (`content.py`), the page layouts
(`pages-*.tpl`) and one script that assembles them (`assemble.py`). See [lesson-format.md](lesson-format.md).

### Step 5. Checks

The five check questions live in the lesson's `checks.json` and are written into the shared question bank by a
script. The rules are in [The check](#the-check) below.

### Step 6. Test

Drive it, do not assume. A browser test walks every page on a desktop and a phone, drives every interaction three
ways (drag, keys, tap), passes the check, and looks for console errors, sideways scrolling and missing images. Then a
person looks at a phone screenshot of every page. See [tooling-and-publishing.md](tooling-and-publishing.md).

The builder then hands over a **review packet** in the page copy folder: a phone screenshot of every page and a
`REVIEW.md` a non-technical owner can read in two minutes. It says what the lesson teaches now, what was kept from the
original, what is new (interactions, 3D, animations, real documents), what could not be done, and at most three
decisions for the owner, each with a recommendation.

### Step 7. Publish

Only the course owner publishes. The builder commits to a working branch. Getting the lesson onto the preview site is
the owner's step (see [tooling-and-publishing.md](tooling-and-publishing.md#publishing-the-preview)). A private
preview link can be made for a phone review before that.

### Step 8. Review on the Squawk Board

A squawk, on an aircraft, is a defect written up for a mechanic to fix. The Squawk Board applies the same discipline
to a lesson:

1. The owner opens the lesson on a phone and reads it page by page.
2. Any page that needs work gets a squawk: one note, tied to that page, in the owner's own words (for example, that
   the risk diamond should show on the page, not in a drop-down).
3. The builder fixes each squawk, reruns the tests, and marks it fixed with a new screenshot of that page.
4. The owner looks at the fix and signs the squawk off, or writes it up again.
5. The lesson is done when every page is signed off and no squawk is open.

The fix goes back into the page copy and the build files, never into the built HTML by hand, so the next assemble
keeps it. A squawk that changes the rule for every lesson (for example, use a real data sheet, not an invented one) also goes
into the build standard.

### Step 9. Lecture video

Each lesson has a classroom lecture: two narrated instructors and animated whiteboard scenes. It plays in the hangar
classroom and as page 3 of the lesson. Lecture videos are not rebuilt during a lesson rebuild. Instead the builder
writes `LECTURE-NOTES.md`, listing every lecture line or scene that now disagrees with the lesson, so the deck can be
re-cut once the lesson is signed off. See [hyperframes.md](hyperframes.md#use-2-classroom-lecture-decks).

---

## The page order

Every lesson follows this order. About 15 to 21 pages.

| # | Page | What is on it |
|---|---|---|
| 1 | The problem | The lesson title, then a short real hook in two to four plain sentences (a technician, a task, what goes wrong) and one sentence on why it matters. Do not overplay it |
| 2 | Learning Objectives | Four objectives, specific and testable, plain verbs, each tied to a CAET objective code |
| 3 | Lecture Video | The real lecture player alone. Continue appears when the video ends, with a "Skip for now" link. Left out if the lesson has no lecture yet |
| 4 | Recall | One ask card that ties back to a prerequisite lesson. The first lesson in a room asks about prior experience instead |
| 5 | Concept pages | One idea each, simple to complex |
| 6 | Aircraft pages | Where the technician meets the concept on a real aircraft |
| 7 | Math pages | Only if the topic has math: a worked example, then the student's turn |
| 8 | History | Only where a person, unit or law earns it. A credited, public-domain portrait or photo |
| 9 | Hands-on | Predict, then check, on a sim, a real document, a meter or a 3D object |
| 10 | Applying the procedure | The hook's problem solved as plain numbered steps |
| 11 | Check | Five questions |
| 12 | Field Card | "You can now..." with one line per objective, and the sources |

Teaching order is always **concept, then aircraft, then math**. Never use a concept before it is taught, in this
lesson or any earlier one: no Ohm's Law before the Ohm's Law lesson. A sim that shows something taught later keeps
working with that part hidden, not deleted.

### The approved model, page by page

The Safety Data Sheets lesson has 23 pages. Its headings show the writing standard as well as the order.

| # | Side panel | Heading | Main parts |
|---|---|---|---|
| 1 | Problem | The Safety Data Sheet | Hook about a parts washer, two stat cards, two term cards |
| 2 | Objectives | Learning Objectives | Four objective cards, four key fact cards |
| 3 | Lecture | Lecture Video | The lecture player alone |
| 4 | Recall | Unmarked Container | A drawing and an ask card |
| 5 | Format | Standard Format of the Safety Data Sheet | A tap-to-open directory of the 16 sections, an ask card |
| 6 | Key sections | Sections Used Most Often | Term cards and stat cards |
| 7 | Section sort | When Each Section Is Used | One-card sort, three buckets |
| 8 | Sheet terms | Terms on the Sheet | Every hard word on the real sheet, defined, by section |
| 9 | Reading | Reading the Sheet | The real sheet as a reader, lookup tasks with a predict step, the printed page on demand |
| 10 | Labels | Container Labels | The real label elements from Section 2 |
| 11 | Risk diamond | The Risk Diamond | Hotspots on the FAA figure, with the sheet's own numbers |
| 12 | Containers | Secondary Containers | Rule box, term cards |
| 13 | Label scene | Labeling a Container | A scenario with choices |
| 14 | Access | Access to the Sheet | A labeled drawing of the shop station |
| 15 | Access sort | Access Arrangements | One-card sort, step cards |
| 16 | Materials | Glove Materials | Flip cards |
| 17 | Gloves | Selecting Gloves | A drawing, a rule box, step cards |
| 18 | Permeation | Permeation | Predict, then reveal, with a three-step figure |
| 19 | Solvents | Solvents on Aircraft | Term cards, stat cards, the sheet quoted |
| 20 | Class I | Class I Liquids | A comparison, a rule box |
| 21 | Apply | Applying the Procedure | The real Section 8 image and numbered steps |
| 22 | Check | Check | Objective list and the five-question check |
| 23 | Field card | Field Card | One plate per objective, the one rule, the sources, Finish lesson |

---

## One idea per page

"One idea per page" means:

- **The heading names one subject**, and the page teaches only that subject. "Secondary Containers" is one idea.
  "Containers, labels and access" is three.
- **The page opens with a hero**: the page's point set big, with its visual. The student knows what the page is about
  before reading a paragraph.
- **One screen, or a little more.** If a page is taller than about one and a half phone screens (390 by 844 pixels),
  split it. The hero and the first interaction should show on a phone without scrolling.
- **At least one interaction or graphical element**, and never two plain paragraph blocks in a row. With no figure or
  sim, use graphical text: a big-number stat card, a term card, a rule box, step cards.
- **Key content is never hidden** in a drop-down. Accordions hold optional extra detail only.
- **Continue is never locked** by an activity. Only the lecture page waits for its video, and it offers "Skip for
  now".
- **Fresh, not a template.** Each lesson picks the interactions that fit its topic. Do not copy another lesson's page
  sequence or reuse the same set of interactions every time. See
  [the mixing guide](../craft/interactions/mixing-guide.md).

---

## The writing rules

The owner cares about this rule more than any other. Cute writing was rejected three times.

1. **Write like a Navy NEETS module.** NEETS is the Navy Electricity and Electronics Training Series, the plain,
   step-by-step technical manuals the US Navy used to train electronics technicians. State the fact, define the term,
   then show how it is applied. Complete sentences, second person, present tense, shop words, short paragraphs.
2. **Write for the first week.** The student is an entry-level avionics technician in the first weeks of training.
   Define every term in one plain sentence the first time it appears. Spell out every acronym on first use. Never use a
   material, chemical, part or standard name a first-week student would not know without defining it.
3. **Use the owner's locked definitions** where they exist (for example, voltage is the pressure of electrons). They
   come from the owner's own certification book and style guide, through the voice skill (see [skills.md](skills.md)).
4. **Headings are plain nouns** that name the subject: "Secondary Containers", "Series Circuits", "The Pitot-Static
   System". Never a slogan, joke, metaphor, rhetorical question or dramatic fragment.
5. **No cute lines.** If a line sounds like a video narrator, rewrite it as the plain statement.
6. **No chips or tags** that are not lesson content: no "bench", "training scene only", "course example",
   "centerpiece", no lesson or objective codes, no chapter or question references on the page.
7. **ALL CAPS only for the one safety rule** that must not be missed (NEVER measure resistance on a powered circuit).
8. **No em dashes or en dashes anywhere.** Use a period, a comma, a colon or "to". No "Key takeaways" heading.
9. **Units on every number**, and every number checked against a source, with the arithmetic done.

### Rejected headings, and the plain version

These headings were written for real lessons and rejected in review.

| Rejected | Why it fails | Plain heading |
|---|---|---|
| The pour needs a name | A riddle; the subject is not named | Secondary Containers |
| Every employee, every shift, no barrier | A slogan | Access to the Sheet |
| Back to the cart | A callback flourish | Applying the Procedure |
| Nobody read it | Dramatic fragment | Reading the Sheet |
| Learn these cold | Coaching chatter | Sections Used Most Often |
| The strap is a resistor now | Clever, not clear | Wrist Strap Resistance |
| Prove it | Narrator voice | Checking the Reading |
| Two rules save the meter | Slogan | Meter Safety Rules |

The plain headings in the first five rows are real headings from the approved lesson; the first two replaced the
rejected ones directly. The last three rows show the same fix applied.

### The same fix in body text

| Narrator voice (rejected) | Plain statement (example rewrite) |
|---|---|
| "Instinct is the second casualty." | "Under stress, technicians skip steps they know. Follow the checklist." |
| "Blocked equipment is missing equipment." | "Keep the extinguisher and the eyewash station clear. Equipment you cannot reach in seconds does not help." |
| "Hold onto this." | (cut; the next sentence states the fact) |

---

## The check

1. **Five questions**, one per objective focus. The first four objectives each get at least one.
2. **Item rules** (Patti Shank's item-writing rules; see
   [item-writing-rules](../principles/03-assessment-science/item-writing-rules.md)): the stem is a complete sentence or question;
   three or four options of similar length; every wrong option is a real mistake a student makes; every option has
   one sentence of feedback that teaches, right or wrong.
3. **Picture options** wherever a picture teaches: three small schematics, meter faces, photos, a regulation excerpt
   or a part, each beside a one-line description. A picture stem works too. The owner singled out a Series Circuits
   question with three small schematics as options because pictures freshen a check that would otherwise be all text.
   See [picture-option-question](../craft/interactions/picture-option-question.md).
4. **Feedback pops up over the question**, with Continue when right and Try again when wrong.
5. **Pass mark** in the model lesson: 4 of 5. The lesson is complete when every page has been read to its end and the
   check is passed.
6. **No live certification questions** in a lesson, ever.

The question shape (one item from a real `checks.json`):

```json
{
  "id": "P-2.4-11",
  "stem": "A 10 ohm resistor and a 20 ohm resistor are wired in series across a 24 V source. What current flows?",
  "note": "",
  "ans": 2,
  "opts": ["2.4 A", "1.25 A", "0.8 A"],
  "miss": ["Not quite. 2.4 A uses only the 10 ohm resistor, so add both resistances first (30 ohms) and divide 24 V by 30 ohms.",
           "Not quite. 1.25 comes from 30 divided by 24, but current is the voltage divided by the resistance: 24 V / 30 ohms = 0.8 A.",
           "Right. Rt = 10 + 20 = 30 ohms, and It = 24 V / 30 ohms = 0.8 A."]
}
```

Each wrong option names a real mistake (using one resistor, dividing the wrong way round), and its feedback walks the
student to the right method. Keep an item's id when the question is kept or improved, so saved answers still match.

---

## What the owner approved and rejected

Paraphrased from review notes, 2026-09-28 to 2026-10-01.

### Approved

| What | What the owner said, in short |
|---|---|
| The rebuilt Safety Data Sheets lesson | Very good; this format is the one to use |
| The first 19 rebuilt lessons | The best training he had seen; keep that standard and keep each lesson fresh |
| Real documents | He liked reading the real references and tapping the parts of a regulation |
| A real data sheet | He asked for a real safety data sheet in place of an invented one, and the lesson was rebuilt on a real product's sheet |
| Picture options in checks | Images freshen a check that is otherwise constant text |
| History and real incidents | Important to the learning: tell the person's story well, and tie the lesson to real accidents told from the official report |
| The one-card drag sort | Kept from the first rejected proof and made the standard sort |
| History cards with real portraits | Only where a person earns one |
| Feedback over the question | Answer, read why, press Continue |
| Lecture after the objectives | The video comes on page 3, not page 1 |

### Rejected

| What | What the owner said, in short | The rule it became |
|---|---|---|
| Slogan and riddle headings | The language was lame; keep it instructional | Plain noun headings, no narrator lines |
| An unfamiliar material name | He did not know what the material was, so a student would not | Define every term, or do not use it |
| Tags such as "bench" and "training scene only" | Clutter that is not lesson content | No chips or labels on the page |
| A key figure inside a drop-down | It should show on the page | Key content is never hidden |
| A proof that lost the original sims | The working sims were the best part | Lift sims and real schematics; never redraw them |
| A cartoonish, light-themed proof | Childish art, wrong look | Real drawings and photos; dark theme |
| The old tap-then-bucket sort | Clumsy | One card at a time, drag, keys or tap |
| A slide-style page where motion was the point | It did not work there | Make it a short animated video |
| An invented safety data sheet | Use a real one | Real, credited documents beat invented ones |

---

## Sources and accuracy

- Concepts and figures come from the FAA handbooks (FAA-H-8083-30B General, 8083-31B Airframe, 8083-32B Powerplant,
  FAA-H-8083-6 Advanced Avionics) and AC 43.13-1B. These are US government works; credit each figure, for example
  "Source: FAA-H-8083-30B, Figure 1-2."
- Every number, date, rating and rule is checked against a source, and the arithmetic is done. A wrong worked number
  in an early page plan was caught only because the builder computed it.
- Each lesson stands on its own. It does not have to match the course textbook.
- Regulations, ACs, TSOs, manuals and forms are shown as the real text, with the parts the student taps explained one
  by one. See [hotspot on a real document](../craft/interactions/hotspot-on-real-document.md).
- History and incident pages follow [the history and incident patterns](../craft/history-incidents/README.md),
  including image licensing.

## Related principles in this library

- Backward design and objectives first: [backward-design-ubd](../principles/02-instructional-design/backward-design-ubd.md)
- A real problem first: [merrills-first-principles](../principles/02-instructional-design/merrills-first-principles.md)
- One idea per page: [cognitive-load-theory](../principles/01-learning-science/cognitive-load-theory.md),
  [segmenting-and-pretraining](../principles/04-delivery-patterns/segmenting-and-pretraining.md)
- Plain technical English: [plain-language-simplified-technical-english](../principles/05-tutor-personas/plain-language-simplified-technical-english.md)
- Worked example, then the student's turn: [worked-example-effect](../principles/01-learning-science/worked-example-effect.md)
- Predict, then check: [predict-before-reveal](../principles/04-delivery-patterns/predict-before-reveal.md)
- Wrong options that are real mistakes: [distractor-analysis](../principles/03-assessment-science/distractor-analysis.md)
