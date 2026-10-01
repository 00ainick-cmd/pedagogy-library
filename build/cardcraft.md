# CardCraft: single teaching cards

Written 2026-10-01.

**In plain words:** a CardCraft card is one self-contained HTML file that does one teaching job: open a module, define
a term, let the student drive a live instrument, check a skill. The CardCraft library holds every card built for the
course, filed by the job it does, with a browsable gallery (the Card Studio) so a builder finds and reuses a card
before making a new one. A public extract of the method, with gold example cards, a card catalog and agent skills, is
the `html-training-craft` repo, which is being folded into this library.

---

## What it is

| Part | What it holds |
|---|---|
| Cards | Single HTML files filed in six bins by job: openers, concept explainers, interactive labs, knowledge checks, scenarios and capstones, job aids. Each card keeps a `-notes.md` file beside it |
| Lessons | Ordered decks of cards for whole lessons (avionics wire, pitot-static, transponders, wire harness) and storyboards for planned ones |
| Card Studio | A gallery page that scans the card folders, classifies each card by type and look, makes a thumbnail, and builds one page to find, preview and pull a card. It opens by double-click, with no server |
| Skills | The `cardcraft` build skill and its contracts, plus an index of which skill builds which kind of card |
| References | Instructional design and art references, visual identities (color and type tokens), research |

About 80 cards are catalogued, across interactive labs, concept explainers, Human Factors (Dirty Dozen) cards, data
visualizations, openers, 3D models, diagrams, hotspots, spot-the-defect, timelines, stat cards, compare wipes and
branching scenarios.

## The method: type, recipe, build

The `cardcraft` skill builds one card in three layers, always in this order:

```
TYPE      the teaching job          chosen from the objective's verb
  |
RECIPE    the interaction           chosen from the subject
  |
BUILD     markup, figures, gate     chosen last
```

A card built from the interaction first usually satisfies its surface rules and misses its teaching purpose. The
steps:

1. **Name the type from the objective's verb.** A relationship to derive or a behavior to predict is a Simulation. A
   category to recognize is Practice. An ordered task is a Procedure. Explaining is Orientation, Case, Definition,
   Explanation, Demonstration or Consolidation. A card that cannot name its type is decoration.
2. **Open the type's contract and its gold card.** The contract lists the four criteria the card is scored on.
3. **Choose the recipe** from the canonical interactions. Do not invent one when one exists.
4. **Write the words first**, complete sentences at training-manual density, in the owner's voice.
5. **Build** one self-contained file, CSS and script inline, Google Fonts the only outside file.
6. **Score it** with the card gate script and fix every failure.
7. **Render and look at every state** at 1366 by 768 and on a narrow phone. Drive it the way a student would, including
   a wrong answer.
8. **Write the notes file**: the type, the objective, the recipe, what to copy and what to avoid.
9. **File it** in its bin and refresh the Studio.

House rules: no em or en dashes; an 18 px body and 16 px caption floor; 7:1 body contrast and 4.5:1 for headings;
reduced motion, visible focus and keyboard use from the first draft; no cartoon drawings of real people or scenes;
no invented specifications or readings; no live certification questions; no slogans.

## When to use it in training

| Use a card | Use something else |
|---|---|
| One high-value piece you will reuse in several places: a live instrument, a 3D part explorer, a spot-the-defect | A whole lesson: use the paged lesson format ([lesson-format.md](lesson-format.md)) |
| A prototype of an interaction before it becomes a shared lesson part | A one-off figure: a labeled drawing in the lesson |
| A module opener or a stand-alone job aid | A full circuit lab: embed a Circuit Lab preset ([sims-circuit-lab.md](sims-circuit-lab.md)) |

Two adjustments when a card moves into a paged CAET lesson:

- **Gates.** A CardCraft card gates Continue until the student performs its defining action. The paged lessons never
  gate Continue on an activity (only the lecture page waits). Remove the gate when you lift a card into a lesson.
- **Look.** Some cards use a light "paper" style. The lessons are dark. Restyle to the lesson's palette before use.

## How to start

**From the public extract** (anyone):

```
npx skills add 00ainick-cmd/html-training-craft      # installs the four agent skills
git clone https://github.com/00ainick-cmd/html-training-craft.git
cd html-training-craft
npm run check                                         # the lint: dashes, font floor, banned phrases, self-contained files
```

Open `gold/aero-slide-types-beyond-video.html` in a browser: it is the visual contract for five card types (Explorable
Schematic, Live Instrument, Sequence It, Compare Wipe, Predict then Reveal). `references/00-job-to-card-chooser.md`
maps a learning job to one of twelve cards, and `references/slide-types-catalog.md` describes each. Then, in your
agent: `/ingest-voice` to turn writing you own into a `voice.md`, `/author-card` for one new card, `/audit-lesson` to
audit an existing lesson file against the gold cards.

**From the private library** (the course team): open the Card Studio, search for the job, and pull the closest card.

## Where it lives

| Thing | Where |
|---|---|
| The full card library and the Card Studio | The CardCraft repo (`cardcraft`, private) |
| Gold cards, catalog, chooser, skills, lint | The `html-training-craft` repo (public, MIT), being folded into this library |
| The design guides for each interaction | [Lesson Craft: interactions](../craft/interactions/README.md) |

## One example: the VHF comm radio card

A card that shows how a pilot's voice becomes a transmitted radio signal and back. A comm radio control head (active
and standby frequencies, tuning, swap) frames a two-part walkthrough: press to talk walks the transmit path, release
walks the receive path. A full-width scope shows the signal at every stage, and optional synthesized audio lets the
student hear it.

How the method shaped it:

- **Type:** Simulation, to understand. The student should trace the signal path both ways and say what each stage does.
- **Source:** the FAA airframe handbook's communication and navigation chapter, with the receiver terms cross-checked
  against standard references.
- **Accuracy over neatness:** the transmit path is drawn as two paths that meet at the modulator (voice and carrier),
  because a straight chain is wrong.
- **Review shaped it:** a side-panel scope that vanished at narrow widths was replaced by a full-width strip; overlay
  panels were removed because nothing may cover the diagram; a built-in quiz was removed because it cluttered the
  screen, and its questions became the seed for a separate check card; every stage became tappable, with one
  "on the bench" line per stage (typical failures, what to measure).
- **Where it went:** a copy of the same simulator now runs as the signal-chain view inside the Avionics Circuit Lab's
  radio instrument, and as an embedded lab in the Comm Radios lesson. One good card, three homes.
