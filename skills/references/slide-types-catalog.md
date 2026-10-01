# AERO Slide Type Catalog

A living catalog of the reusable card types for the AERO course player. Pull a card by the
learning job it does, copy the pattern, then swap the wording, graphics, data, images, and
source for the new lesson. The interaction and the AERO register stay; the content changes.

Belongs in `aero-course-player-builder/references/`. Append a new entry every time we design
a new card type, and log it in the change log at the bottom.

Live demos:
- Cards 01 to 06: `aero-slide-types-live.html` (the narrated player)
- Cards 07 to 11: `aero-slide-types-beyond-video.html` (the interactive set)
- Data Viz Set (04, 05 and the kinds below): `aero-card-data-viz-set.html`, with the locked
  reference, previews, and the SVG raster LOOK loop in `references/data-cards/`

---

## How to use this catalog

1. **Find the card by need.** Scan the registry and the tags. Decide the learning job first
   (open, teach, prove, recall, apply, discriminate, predict), then pick the card that does it.
2. **Copy the pattern, not the content.** Each card has a fixed interaction shape and a fixed
   look. Reuse those. Rewrite everything in the "Swap" line for the new topic.
3. **Keep the rules.** The global rules and the card's own rules are non-negotiable. They are
   what keep the series honest and consistent across lessons.
4. **Mind the beat kind.** Cards 01 to 05 are the existing `slide` beat. Cards 06 to 11 need new
   `interactive` or graded beat kinds in the schema; until those ship, build them as standalone
   beats and gate completion manually.

## The swap protocol (applies to every card)

- **Always changes per lesson:** headline and body wording, the figures and data, the diagram
  or chart artwork, any image, the cited source, and the narration captions.
- **Never changes:** the interaction pattern, the reveal-to-caption sync, the mastery gate
  logic, and the AERO register (tokens, type, motifs).
- **Sourcing carries over:** when you swap in a new number, quote, date, or accident detail, it
  must be real and cited. Swapping content never means inventing it.

## Global rules (all cards)

- No em dashes or en dashes anywhere. Use commas, colons, parentheses, periods, or a spaced hyphen.
- Real sources only. Every number, quote, date, and accident detail is real and cited. No invented experts or statistics.
- Honest media. A control that implies audio drives real audio. Reveals reflect real state, never a progress bar over silence.
- Mastery, not attendance. Graded and interactive cards gate Continue on completion or a passing score.
- Scales to the slide. Author sizes in cqw and cqh (vw and vh are rewritten at inject time). Never hardcode pixel font sizes. One card must read at 1366x768 and on a phone.
- Diagram-only SVG. Data viz and iconographic glyphs only. No cartoon scenes of people.
- One idea per card. The headline is a claim, and the body earns it.
- AERO register. Warm paper #f4f0e7, near-navy ink #23201b, green accent #145c4f, Newsreader display, Hanken Grotesk body, technical-drawing motifs (thin rules, dimension lines, registration marks, monospace metadata).
- No version numbers in filenames or content.

## Tag vocabulary

- **Position:** opener, teach, evidence, check, apply, close
- **Cognition:** motivate, frame, teach, recall, apply, discriminate, predict, explore, sequence, assess
- **Shape (pedagogy recipe fit):** conceptual, procedural, data, comparative, diagnostic, regulatory, system, historical
- **Interaction:** reveal (clock-driven), interactive (learner-driven), graded (scored, gates on pass)
- **Media (the swappable surface):** text, number, chart, diagram, scene, instrument

---

## Card registry

| # | Card | Job | Engine | Beat kind | Status |
|---|------|-----|--------|-----------|--------|
| 01 | Cold Open | Entry | reveal | `slide` | shipped |
| 02 | The Contract | Navigation | reveal | `slide` | shipped |
| 03 | Concept Page | Structure | reveal | `slide` | shipped |
| 04 | The Number | Data | reveal | `slide` | shipped |
| 05 | The Evidence | Data | reveal | `slide` | shipped |
| 06 | Reveal Board | Interactivity | interactive | `interactive` (new) | needs schema |
| 07 | Explorable Schematic | Explore | interactive | `interactive` (new) | needs schema |
| 08 | Live Instrument | Manipulate | interactive | `interactive` (new) | needs schema |
| 09 | Sequence It | Perform | graded | `sequence` (new) | needs schema |
| 10 | Compare Wipe | Discriminate | interactive | `interactive` (new) | needs schema |
| 11 | Predict, then Reveal | Predict | graded | `predict` (new, cousin of `check`) | needs schema |
| 12 | Branching Scenario | Demonstrate | graded | `scenario` (extended) | shipped |

The existing schema already carries `slide`, `check`, `scenario`, and `jobaid`. Cards 06 to 11
add learner-driven kinds with completion gates. Card 12 extends the existing `scenario` kind from
two stages to as many decision points as the practiced skill needs.

---

## The cards

### 01 Cold Open
- **Job:** Entry. **Engine:** clock-driven reveal. **Beat kind:** `slide`.
- **Use when:** the first beat of a module, to set the topic and a hook.
- **Pattern:** dark ground. Reveal order: eyebrow (0), headline (1), hook (2), metadata (3). A vertical accent rule draws down behind the eyebrow.
- **Expert tips:**
  - The hook is a claim that creates tension, not a greeting. If it could start with "Welcome," rewrite it.
  - Dark ground signals "this matters." Reserve dark for openers and emphasis cards.
  - Keep metadata quiet (monospace, muted). It orients without competing with the headline.
  - One headline, one hook. A second idea here drains the open.
- **Rules:**
  - No bullet list on the opener.
  - The hook must be defensible. Never invent a statistic to sound dramatic.
- **Tags:** position opener; cognition motivate, frame; shape any; interaction reveal; media text.
- **Swap:** module label, headline (the topic), the hook claim, the metadata strip, the accent color.
- **Demo:** `aero-slide-types-live.html`, slide 01.

### 02 The Contract
- **Job:** Navigation. **Engine:** clock-driven reveal. **Beat kind:** `slide`.
- **Use when:** right after the open, to state what the learner will be able to do.
- **Pattern:** light ground. A vertical spine grows down as three numbered objectives cascade in, each with a lesson tag on the right.
- **Expert tips:**
  - Performance verbs only (distinguish, explain, select, apply). "Understand" and "learn about" are not testable.
  - Three objectives map to the three-lesson spine. One objective per lesson.
  - Tie each line to its lesson so the learner sees the arc before walking it.
- **Rules:**
  - Objectives must match what the checks assess. If a check tests it, an objective names it, and the reverse.
  - These are the `LESSONS[].obj` strings surfaced as a slide. Keep them identical.
- **Tags:** position opener; cognition frame; shape any; interaction reveal; media text.
- **Swap:** the three objective lines and their lesson tags.
- **Demo:** `aero-slide-types-live.html`, slide 02.

### 03 Concept Page
- **Job:** Structure. **Engine:** clock-driven reveal. **Beat kind:** `slide`.
- **Use when:** you must teach a textual concept. This is the highest density risk in the set.
- **Pattern:** light ground. Headline claim (1), a term lockup (2), then two or three short distinctions that stagger in beside a small diagram (3).
- **Expert tips:**
  - One claim headline, one term lockup, two or three short distinctions. Never a paragraph block.
  - Always pair with a small diagram or glyph. The diagram carries half the load.
  - If you cannot draw it, it is probably two concepts. Split it.
  - Stagger the distinctions with reveal delays so the eye reads one at a time.
- **Rules:**
  - No paragraph of body text. Chunk it or cut it.
  - Diagram-only SVG. No scene illustration.
- **Tags:** position teach; cognition teach; shape conceptual, system; interaction reveal; media text plus diagram.
- **Swap:** headline, the term and its definition, the distinctions, the diagram.
- **Demo:** `aero-slide-types-live.html`, slide 03.

### 04 The Number
- **Job:** Data. **Engine:** clock-driven reveal. **Beat kind:** `slide`.
- **Use when:** one figure frames the problem and you want it to land.
- **Pattern:** dark ground. The figure counts up from zero on its reveal step (1), then the label and meaning (2), then the source rule and citation (3).
- **Expert tips:**
  - The number is the hero. Size it huge; everything else supports it.
  - Always "compared to what." A lone figure has no scale (7% to 30% beats 30% alone).
  - Trigger the count-up on the figure's reveal step. It earns the moment.
  - Use tabular-nums so the count-up does not jitter.
- **Rules:**
  - Real figure, real source, both on screen. No rounded-up drama.
- **Tags:** position evidence, teach; cognition teach; shape data; interaction reveal; media number.
- **Swap:** the figure, the label, the meaning line, the source.
- **Demo:** `aero-slide-types-live.html`, slide 04.

### 05 The Evidence
- **Job:** Data. **Engine:** clock-driven reveal. **Beat kind:** `slide`.
- **Use when:** a relationship or distribution a single number cannot show.
- **Pattern:** light ground. Headline takeaway (1), axes and gridlines fade in (2), bars grow from the baseline (3), the annotation leader-line draws to the key datum (4).
- **Expert tips:**
  - Headline states the takeaway, the chart proves it, the annotation points to the one datum that matters.
  - Hand-drawn SVG in the AERO line weight and palette. Never a charting library that breaks the register.
  - Grow bars from the baseline and draw lines via stroke offset. The motion reads as the data arriving.
  - Two clear bars beat five. Cut to the comparison that carries the point.
- **Rules:**
  - Every value and axis label is real and sourced.
  - Annotate the takeaway. Do not make the learner hunt for it.
- **Tags:** position evidence; cognition teach; shape data, comparative; interaction reveal; media chart.
- **Swap:** headline, the chart data and labels, the annotation, the source.
- **Demo:** `aero-slide-types-live.html`, slide 05.

### 06 Reveal Board
- **Job:** Interactivity. **Engine:** learner-driven. **Beat kind:** `interactive` (new).
- **Use when:** active recall of a small set of distinctions, after teaching them.
- **Pattern:** dark ground. Narration reveals the prompt, then tiles fade in, then the learner taps each tile to flip it. Continue gates until all are open.
- **Expert tips:**
  - Three to six tiles. More becomes a wall.
  - Each reveal must teach a distinction, not just a fact.
  - Narration introduces, then hands off. Do not narrate over the interaction.
  - Close with a one-line synthesis once all tiles are open.
- **Rules:**
  - Completion requires all tiles revealed (mastery, not attendance).
  - Tappable targets at least 44px. Keyboard-operable.
- **Tags:** position teach, check; cognition recall, discriminate; shape conceptual, comparative; interaction interactive; media text.
- **Swap:** the prompt, the tile fronts (the lookalikes), the tile backs (the tells).
- **Demo:** `aero-slide-types-beyond-video.html`, card 06; intro form in `aero-slide-types-live.html`, slide 06.

### 07 Explorable Schematic
- **Job:** Explore. **Engine:** learner-driven. **Beat kind:** `interactive` (new).
- **Use when:** replacing a labeled-diagram lecture. The learner interrogates a system.
- **Pattern:** light ground. A diagram with five to seven clickable parts and a side panel. Tapping a part highlights it in the diagram and fills the panel with its one-job description. Discovery dots show how many parts remain.
- **Expert tips:**
  - Five to seven hotspots. Use the dots so nothing hides.
  - Each part's blurb is one job sentence, not a spec sheet.
  - Highlight the selected part in the diagram and the panel together.
  - Exploration beats narration for "what is this and what does it do."
- **Rules:**
  - Diagram-only SVG. Keep it technical line art.
  - Keyboard-operable hotspots (focusable, Enter and Space).
- **Tags:** position teach; cognition explore, teach; shape system, procedural; interaction interactive; media diagram.
- **Swap:** the diagram artwork, the hotspot set, each part's name and blurb.
- **Demo:** `aero-slide-types-beyond-video.html`, card 07.

### 08 Live Instrument
- **Job:** Manipulate. **Engine:** learner-driven. **Beat kind:** `interactive` (new).
- **Use when:** the learner needs to feel how an input drives a reading and a pass or fail.
- **Pattern:** dark ground. A draggable knob sets an input; an analog gauge needle sweeps; a digital readout and a GO band pill react in real time. Drag plus arrow keys.
- **Expert tips:**
  - Map one input to one consequence. Resist adding dials.
  - Show the threshold (the GO band) so manipulation has a target.
  - Give tactile feedback all at once: needle sweep, readout, status pill.
  - Pointer drag for feel, arrow-key control for accessibility.
- **Rules:**
  - The reading must be honest physics. Do not fake the response curve.
  - If the specs are real, cite them. If illustrative, label them illustrative.
- **Tags:** position teach, apply; cognition manipulate, apply; shape procedural, data, system; interaction interactive; media instrument.
- **Swap:** the instrument type and scale, the input range, the GO band, the readout units.
- **Demo:** `aero-slide-types-beyond-video.html`, card 08.

### 09 Sequence It
- **Job:** Perform. **Engine:** learner-driven, graded. **Beat kind:** `sequence` (new).
- **Use when:** a procedure where order carries a real consequence.
- **Pattern:** light ground. Out-of-order step chips and numbered slots. Tap a chip to place it in the next slot. Check scores each position and reports how many are right; reset to retry.
- **Expert tips:**
  - Five to seven steps. Ordering longer lists becomes guessing.
  - Tap-to-place beats fragile drag-and-drop on touch.
  - Score per position and name the count right, then let them retry.
  - Use for power-down, removal, install, troubleshooting flows where sequence matters.
- **Rules:**
  - The correct order must be defensible. Frame illustrative procedures as illustrative.
  - Graded. Mastery gate on the full correct order.
- **Tags:** position apply, check; cognition sequence, apply, assess; shape procedural; interaction graded; media text.
- **Swap:** the prompt, the step set, the correct order.
- **Demo:** `aero-slide-types-beyond-video.html`, card 09.

### 10 Compare Wipe
- **Job:** Discriminate. **Engine:** learner-driven. **Beat kind:** `interactive` (new).
- **Use when:** teaching the eye to tell good from bad, in tolerance from out.
- **Pattern:** light ground. Two scenes stacked, identical except the thing being judged. A draggable divider wipes between them using clip-path. Side labels and defect annotations on the bad side.
- **Expert tips:**
  - Keep both scenes identical except the judged feature, so the contrast is clean.
  - Label both sides and annotate the defects on the bad side.
  - Use clip-path, not resize, so the artwork never squishes.
  - Best for good versus cold joint, correct versus over-torqued, in-tolerance versus out.
- **Rules:**
  - Diagram-only. Technical line art.
  - Pointer and touch draggable, with a large grip target.
- **Tags:** position teach, check; cognition discriminate; shape comparative, diagnostic; interaction interactive; media scene, diagram.
- **Swap:** the two scenes (good and bad artwork), the side labels, the defect annotations.
- **Demo:** `aero-slide-types-beyond-video.html`, card 10.

### 11 Predict, then Reveal
- **Job:** Predict. **Engine:** learner-driven, graded. **Beat kind:** `predict` (new, cousin of `check`).
- **Use when:** before showing a result, to force a commitment so the data lands.
- **Pattern:** dark ground. A question with three mutually exclusive options. On answer, lock the options, mark right or wrong, then animate the real data in, then show the why and the source.
- **Expert tips:**
  - Force the commitment before any data shows. That is the whole mechanism.
  - Three options, mutually exclusive, one clearly right.
  - On answer, reveal the real data with motion, then the why, then the source.
  - Pair with The Evidence or The Number content. Predict, then prove.
- **Rules:**
  - Graded. Gate on answering.
  - The revealed data is real and cited.
- **Tags:** position evidence, check; cognition predict, assess; shape data, conceptual; interaction graded; media chart, text.
- **Swap:** the question, the three options, the revealed data, the why line and source.
- **Demo:** `aero-slide-types-beyond-video.html`, card 11.

### 12 Branching Scenario
- **Job:** Demonstrate. **Engine:** learner-driven, graded. **Beat kind:** `scenario` (extended).
- **Use when:** an objective names a verb like Demonstrate and requires the learner to perform a
  skill through judgment under realistic pressure, not recognize a right answer. This is the card
  for ABCD-format objectives (Audience, Behavior, Condition, Degree) and for any skill whose
  hard part is navigating another person or an unfolding situation.
- **Pattern:** light ground, one scene panel that the story continuously replaces. A scene graph
  of at least three sequential decision points where earlier choices genuinely reshape the later
  situation (a weak opening makes the next conversation harder, not just a different label). Every
  option is plausible and tempting, written as the mistake a real technician makes under pressure
  (trust the senior tech, keep the peace, soften the ask). Consequences play out through the
  story, in what the other person says and does next, never as a correct or incorrect flag. The
  tree resolves to multiple endings of differentiated quality (best, acceptable at a cost, and
  genuine failure that plays out realistically). Failure endings offer a replay and a try-again;
  only a safe resolution exposes Continue and sets the mastery signal.
- **Expert tips:**
  - Write the wrong options first, from the real pressures (seniority, schedule, keeping the
    peace). If a wrong option is not tempting, it is teaching nothing.
  - The other character must push back like a real person. Resistance is the curriculum; the
    framework being taught is the tool that gets through it.
  - Let a poor early choice carry forward and make later decisions harder instead of ending the
    scenario immediately. Failing forward is where the learning happens.
  - Teach the structure (Concern, Alternative, Request) through what lands and what gets brushed
    off, not as labeled slots to fill.
- **Rules:**
  - Graded. Mastery gate only on reaching a safe resolution, not on time or attempts. Failure
    endings never set it.
  - Real sources only for the framing content (the ABCD statement, the cited case the stakes
    come from). The scene itself is fictional but must stay plausible for the audience's world.
  - Native buttons for every choice; one aria-live region announcing scene changes.
- **Tags:** position apply, check; cognition apply, assess; shape procedural; interaction graded;
  media text plus scene.
- **Swap:** the scene setup and cast, the decision points and their options, every consequence
  scene, the endings and debriefs, the cited case behind the stakes.
- **Demo:** `cards/05-scenarios-capstones/aero-card-assertive-callout-practice.html` ("The Job
  Card and the Controls", 15 nodes, 5 endings).

---

## On the bench (designed in concept, not yet built)

- **Layer X-ray.** Toggle down through a cutaway, peeling bezel to board to backplane. Tags: teach, explore; system; interactive; diagram.
- **Sort into buckets.** Drag or tap items into categories (the Dirty Dozen factors, GO or NO-GO calls, tool classes). Tags: apply, assess; diagnostic, regulatory; graded; text.
- **Calculation sandbox.** Plug numbers into a real formula (Ohm's law, weight and balance, unit conversion) with a live result and pass or fail. Tags: apply; data, procedural; interactive; number.
- **Scrub the signal.** Drag a playhead along a signal-flow or databus path and watch a packet move stage to stage. Tags: teach, explore; system; interactive; diagram.
- **Spot the defect.** Tap the fault in a scene, with hit or miss feedback. The visual cousin of the `scenario` spot-the-flaw. Tags: apply, discriminate; diagnostic; graded; scene.
- **Confidence-rated recall.** Rate how sure you are before flipping. The gap between confidence and correctness is the lesson. Tags: recall, assess; conceptual; graded; text.

---

## Change log

- 2026-07-01 (later): Rebuilt card 12 and renamed it Branching Scenario after Nick rejected the
  first version as a shallow fill-in-the-racks construction task. The rebuild applies real
  branching scenario practice (Cathy Moore, Christy Tucker): a 15 node scene graph, 3 sequential
  decision points where early choices reshape later resistance, tempting wrong options written
  from real shop pressures, consequences played through the story, 5 endings of differentiated
  quality with failing forward, mastery only on a safe resolution. Same demo file, verified by
  playing the best and failure paths end to end.
- 2026-07-01: Built card 12, extending the existing two-stage `scenario` beat kind to a multi
  decision point branching build for objectives that require the learner to actually perform a
  structured response (an assertive callout, a shift turnover), not recognize one. Built against
  real content: a general aviation restoration shop about to release an aircraft without a
  control-freedom check after a control cable replacement. Demo
  `cards/05-scenarios-capstones/aero-card-assertive-callout-practice.html`. Approved by Nick.
- 2026-06-26: Expanded the Data Viz Set to 9 cards, adding a slope chart (MEDA before/after,
  ~16% fewer mechanical delays), a timeline (four landmark maintenance-error accidents,
  1988 to 2000), a gauge (No Fault Found, ~40% of avionics removals), and a small-multiples grid
  (the Dirty Dozen). Same loop, all rendered and looked at. Approved by Nick.
- 2026-06-26: Locked the Data Viz Set (5 cards: One in Seven / The Number-as-pictograph, The
  Safety Curve / log-scale line, Sleep and the Odds / bar, Three in Four / proportion ring, What
  Goes Wrong / data table). Built full-stage-first as a single inline SVG per stage, verified by
  the in-sandbox SVG raster LOOK loop (`@resvg/resvg-js` + house fonts). These are the production
  realizations of cards 04 (The Number) and 05 (The Evidence) plus a proportion ring and a data
  table variant. Demo `aero-card-data-viz-set.html`; reference kit `references/data-cards/`.
  Approved by Nick.
- 2026-06-26: Cataloged 11 card types. Cards 01 to 05 (Cold Open, The Contract, Concept Page, The Number, The Evidence) use the existing `slide` beat. Cards 06 to 11 (Reveal Board, Explorable Schematic, Live Instrument, Sequence It, Compare Wipe, Predict-then-Reveal) approved and flagged as needing new interactive and graded beat kinds. Six bench ideas logged. All 11 approved by Nick.
