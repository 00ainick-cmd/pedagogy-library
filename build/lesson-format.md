# The paged lesson format and how a lesson is assembled

Written 2026-10-01. For builders who will make a lesson in this format, and for designers who want to know what the
format does. Paths are in the CAET course repo (`aero-caet-source`, private) unless another repo is named. The shared
code lives in `frontend/public/core/`. How each interaction should look and teach is in
[Lesson Craft: interactions](../craft/interactions/README.md); this file is about the plumbing.

**In plain words:** a lesson is one HTML page. Each teaching page is a `<section>`. A shared script, the pager, shows
one section at a time with Continue and Back, a slim header and a side panel of page labels. Shared parts (the ask
card, the one-card sort, the lecture player) come from shared files. A lesson is never typed by hand: a small Python
script assembles it from the words in `content.py` and the layouts in templates, and lifts the working parts of the
old lesson out of git.

---

## 1. The page shape

```html
<link rel="stylesheet" href="/core/lesson-parts.css"/>   <!-- shared parts -->
<link rel="stylesheet" href="/core/lesson-pager.css"/>   <!-- one header, side panel, pages -->
<body data-pager data-course="Aircraft Maintenance Fundamentals" data-num="01" data-title="Safety Data Sheets">
  <section class="section pgr-page" data-beat="Problem" id="hook"> <div class="wrap"> ...page... </div> </section>
  <section class="section pgr-page" data-beat="Objectives" id="goals"> ... </section>
  ... one section per page ...
  <script src="../../../core/lesson-runtime.js"></script>          <!-- saves, completion, LMS bridge -->
  <script type="module" src="/core/lecture-player.js"></script>    <!-- the lecture video -->
  <script> ...the lesson's own script... </script>
  <script src="/core/lesson-parts.js"></script>                    <!-- ask card, one-card sort -->
  <script src="/core/lesson-pager.js"></script>                    <!-- last: it pages what is above -->
</body>
```

Rules:

- Every page is `section.section.pgr-page` with an `id` and a short `data-beat`. The `data-beat` is the side-panel
  label and the hangar's lesson-bar label, so keep it to a word or two ("Recall", "Risk diamond").
- `body[data-pager]` declares a hand-built paged lesson. The body also names the course, the lesson number and title,
  which the pager shows in its header.
- Lesson-only CSS and script live in the lesson's own blocks. Lesson images live in the course's `lessons/assets/`
  folder, in a subfolder named for the lesson.

---

## 2. The shared parts

| Part | Status | Where | What the student does |
|---|---|---|---|
| Pager | shared | `core/lesson-pager.js`, `.css` | Moves page to page with Continue, Back, arrow keys or the side panel |
| Page hero and graphical text | shared | `core/lesson-parts.css` | Reads the page's point set big; stat cards, term cards, rule boxes, step cards |
| Ask card | shared | `core/lesson-parts.js` | Answers one question; feedback pops up over it |
| One-card sort | shared | `core/lesson-parts.js` | Drags, keys or taps each card into one of two or three buckets |
| Flip card | local | each lesson's own markup and CSS | Answers the front in their head, turns the card to check |
| Hotspot figure | local | each lesson's own markup and CSS | Taps numbered markers on a real figure to read each part |
| Reader | local | each lesson (`.reader`, `.rr`) | Reads a real document, taps its lines, works guided lookups |
| Lecture player | shared | `core/lecture-player.js`, `.css` | Watches the classroom lecture with captions, chapters and speed |
| Knowledge check | lifted | the `#kc` markup and engine from the model lesson; the bank in `core/caet-lesson-checks.js` | Answers five questions, reads feedback over each, sees results |

"Shared" means use the shared file as it is. "Local" means each lesson carries its own copy, lifted from the best
example. "Lifted" means the assemble script copies it out of an approved lesson in git.

### Pager

- Builds the header (menu button, number and course, title, "Page 5 / 16"), the side panel (number, label, a green
  check when read), the stage, and Continue and Back at the end of every page. Arrow keys move pages. `#page-id` in the
  address opens that page, and the last page is remembered.
- Page attributes:
  - `data-lp-next="Words"` changes Continue's label.
  - `data-lp-gate="event"` keeps Continue hidden until that event fires inside the page.
  - `data-lp-skip="Skip for now"` adds a skip link while gated.
- Script API: `AeroLessonPager.go(idOrIndex)`, `.next()`, `.prev()`, `.unlock(id)`, `.current()`, `.pages()`.
- Events: `lp:page` on the document; `lp:enter` and `lp:leave` on the page. Anything animated (a canvas, a 3D scene)
  starts on `lp:enter` and stops on `lp:leave`.
- The side panel is open on wide screens, a thin strip when narrow, and a closed drawer on phones. Inside the hangar or
  the course player, which list the pages themselves, the lesson shows no page list of its own.
- Older lessons that still scroll are paged automatically: `core/lesson-flow.js` loads `core/lesson-autopager.js`,
  which turns each `.section` into a page and hands them to the same pager. A hand-built lesson with
  `body[data-pager]` is left alone.

### Ask card

```html
<div class="ask" id="ask-recall" data-ans="1"
     data-fb='["Not quite. Smell does not identify a chemical.","Right. With no label you cannot find its sheet.","Not quite. Clear liquids look alike."]'>
  <div class="ask-k">Quick recall</div>
  <p class="ask-q">You find an unmarked squeeze bottle of clear liquid on a shelf. What do you do?</p>
  <div class="ask-opts">
    <button class="ask-opt" data-i="0" type="button"><span class="key">A</span><span>Smell it to find out what it is.</span></button>
    <button class="ask-opt" data-i="1" type="button"><span class="key">B</span><span>Treat it as unknown and ask your supervisor.</span></button>
    <button class="ask-opt" data-i="2" type="button"><span class="key">C</span><span>Use it if it looks like yesterday's cleaner.</span></button>
  </div>
</div>
```

The script adds a feedback panel over the card: "Correct" with Continue, or "Not quite" with Try again. It fires an
`ask:answer` event (`detail: {id, index, ok}`) so a page can react, for example by moving a bench sim to its next
state once the prediction is answered. Design guide: [ask-card](../craft/interactions/ask-card.md).

### One-card sort

```html
<div class="rsort" id="sort-key" data-no="Not quite. Think about when in the job you would open the sheet."
     data-done="Sections 7 and 8 are read before the job."
     data-cards='[{"t":"A coworker gets solvent in an eye.","b":"problem","why":"Right. Section 4 is first aid."}]'>
  <p class="rs-count" aria-live="polite"></p>
  <div class="rs-arena is-three">   <!-- is-three: the card on top, three buckets in a row under it -->
    <div class="rs-bucket b1" data-bin="before" role="button" tabindex="0"><h4>Before you start</h4><p>Storage and gear.</p><div class="got"></div></div>
    <div class="rs-well"><div class="rs-card" tabindex="0"></div><p class="rs-hint">Tap the bucket where the card belongs.</p></div>
    <div class="rs-bucket b2" data-bin="problem" role="button" tabindex="0"><h4>An exposure or a spill</h4><p>First aid and cleanup.</p><div class="got"></div></div>
    <div class="rs-bucket b3" data-bin="after" role="button" tabindex="0"><h4>After the job</h4><p>Leftovers and waste.</p><div class="got"></div></div>
  </div>
  <p class="dmsg" aria-live="polite">Which bucket does this card belong in?</p>
  <button class="btn rs-reset" type="button">Start over</button>
</div>
```

One card shows at a time. The student drags it to a bucket (hold and drop on a phone), presses 1 to 3 or the arrow
keys, or taps a bucket. A wrong drop shakes the bucket and springs the card back with the card's own `no` line. A
right drop shows its `why` line. Lay it out so the card and its buckets fit one phone screen. Design guide:
[one-card-sort](../craft/interactions/one-card-sort.md).

### Flip card (local)

```html
<button class="flip" type="button" aria-pressed="false" aria-label="Nitrile. Select to turn the card over.">
  <span class="flip-inner">
    <span class="flip-face flip-front"><span class="fn">Nitrile</span><span class="fs">A synthetic rubber</span></span>
    <span class="flip-face flip-back" aria-hidden="true">
      <span class="fk">What it is</span><span class="ft">One plain sentence.</span>
      <span class="fk">How it holds up</span><span class="ft">One plain sentence.</span>
    </span>
  </span>
</button>
```

A real button, so it works by keyboard; `aria-pressed` and `aria-hidden` swap when it turns. The front should ask
something the student can answer before turning it. Design guide: [flip-cards](../craft/interactions/flip-cards.md).

### Hotspot figure (local)

The approved model puts numbered buttons over a real FAA figure. Each button's place is written in the image's own
pixels and turned into a percentage, so it stays on its part at any screen width.

```html
<div class="dmd-img">
  <img src="assets/<lesson-id>/<the-faa-figure>.png" alt="The risk diamond: four colored squares with hazard numbers."/>
  <button class="hs" type="button" data-k="red" aria-pressed="false"
          aria-label="1. Flammability, the red square, top" style="left:49.9%;top:9.9%"><span>1</span></button>
  <!-- one button per part; tapping one fills the panel beside the figure with its name and one plain sentence -->
</div>
```

Design guides: [labeled-graphic](../craft/interactions/labeled-graphic.md) and
[hotspot-on-real-document](../craft/interactions/hotspot-on-real-document.md).

### Reader (local)

The reader shows a real document, a data sheet or a regulation, typed as printed. Each line is a button that explains
its part in plain words. A row of numbered buttons jumps to each section. Lookup tasks ("find the first aid") ask the
student to predict the section before they look. A button under each section opens a picture of that page of the real
printed document in a dialog with Larger, Close and "Open the full sheet". The regulation lessons use a sibling reader,
`.rr`, built the same way.

### Lecture player

```html
<section class="section pgr-page" data-beat="Lecture" data-lp-gate="lecture:ended" data-lp-skip="Skip for now" id="video">
  <div class="wrap">
    <div class="ph"><h2 tabindex="-1">Lecture Video</h2></div>
    <div class="lecture-block" data-lecture="safety-data-sheets"></div>
    <p class="plain">Watch the lecture. Continue appears when it ends. You can skip it for now.</p>
  </div>
</section>
```

The player reads the lesson's classroom deck (`/aero/hangar/lectures/<id>/lecture.json`): one video clip per section,
kept in step with one narration file, captions with the speaker's name, chapters, speed (1x, 1.25x, 1.5x) and full
screen. It fires `lecture:ended`, which opens Continue. It pauses when its page is left or the tab is hidden. A lesson
with no deck shows nothing, so the lecture page is left out. Design guide:
[interactive-video](../craft/interactions/interactive-video.md).

### Knowledge check

The check's markup (`#kc`) and its engine are lifted from the model lesson by the assemble script, never retyped. The
questions come from the shared bank `core/caet-lesson-checks.js` (`window.ACE_LESSON_CHECKS[<lesson-id>]`).
`core/lesson-flow.js` puts each answer's feedback in a panel over the question with Continue, and marks the lesson
complete when every page has been read to its end and the check is passed (4 of 5 in the model). The field card's
Finish lesson button then records completion.

Nobody edits the bank by hand. Each lesson keeps its five questions in its own `checks.json`, and one script writes
them all in:

```
python3 tools/curriculum/revamp/apply-checks.py                 # every lesson that has a checks.json
python3 tools/curriculum/revamp/apply-checks.py series-circuits # only this one
```

The script checks every item (an answer index inside the options, one feedback line per option, no em or en dash),
takes a lock file so two builders cannot write at once, and leaves other lessons untouched. The question rules are in
[method.md](method.md#the-check).

### Graphical text and figures (`core/lesson-parts.css`)

| Class | Use |
|---|---|
| `.ph` with `.kicker`, `h2`, `.lede` | The page hero: the point of the page, set big. `.ph.two` puts a visual (`.ph-vis`) beside it |
| `.stats` / `.stat` (`.n` number, `.l` label, `.d` line) | Big-number stat cards |
| `.terms` / `.term` | Term cards: a term and its one-sentence definition |
| `.rulebox` | A rule or formula, set apart |
| `.stepcards` | Numbered step cards |
| `details.acc` | An accordion, for optional detail only |
| `.goals` | The objectives, as cards |
| `.hist` | A history card with a credited portrait |
| `.dia` with `.fig-svg`, `.figcap` | A drawing in a card, with a "FIG n" caption. Small SVG labels get class `lbl` and grow on phones |
| `.plain` | A plain sentence that must not look like a caption |

---

## 3. How a lesson is assembled

Each lesson has its own folder: `tools/curriculum/revamp/examples/<lesson-id>/`.

| File | What it holds |
|---|---|
| `content.py` | Every word a script or a part builder reads: ask cards, sorts, flip cards, hotspot text, lookup tasks |
| `pages-1.tpl` to `pages-N.tpl` | The page sections in order, with their static text, and named gaps where built parts go |
| `script.tpl` | The lesson's own page script, with gaps for its data and the lifted check engine |
| `<lesson>.css` | The lesson's own styles |
| `figs.py` | Drawings written as SVG from code (standard symbols, labels in clear space) |
| `assemble.py` | Reads all of the above plus the original lesson from git, and writes the finished lesson page |
| `checks.json` | The five check questions |
| `route.json` | For a new lesson only: where it belongs in the course |
| Others as needed | `scene3d.tpl` (a 3D scene), `make-still.mjs` (its still picture), a lesson test helper |

### The words: `content.py`

```python
ASK_RECALL = dict(
    id='ask-recall', kicker='Quick recall',
    q='You find an unmarked squeeze bottle of clear liquid on a shelf. What do you do?',
    opts=['Smell it to find out what it is.',
          'Treat it as an unknown chemical and ask your supervisor before anyone uses it.',
          'Use it if it looks like the cleaner you used yesterday.'],
    ans=1,
    fb=['Not quite. ...', 'Right. ...', 'Not quite. ...'])
```

Keeping the words in Python data means apostrophes, quotation marks and JSON inside HTML attributes are escaped once,
by code, and never by hand.

### The layouts: templates

A template is plain page HTML. Where a built part goes, it has a gap: a capital name inside double curly braces, such
as &#123;&#123;ASK_RECALL&#125;&#125;. In the excerpt below the gaps are shown as `[gap: NAME]`.

```html
<!-- 4. RECALL -->
<section class="section pgr-page" data-beat="Recall" id="recall">
<div class="wrap">
<div class="ph two">
  <div><h2>Unmarked Container</h2><p class="lede">You may have seen an unmarked bottle in a garage or a shop.</p></div>
  <div class="ph-vis"><figure class="dia">[gap: BOTTLE]<figcaption class="figcap"><b>FIG 1</b> A squeeze bottle with no label.</figcaption></figure></div>
</div>
[gap: ASK_RECALL]
</div>
</section>
```

### The script: `assemble.py`

What it does, in order:

1. **Reads the original lesson from git** at a fixed commit (`ORIG_REF`), never from the working copy, so a rerun
   always reproduces the same file. A `new` lesson has no original, so it reads the approved model lesson instead and
   lifts the shared pieces (its stylesheet, the check markup and engine, the Finish lesson wiring) from that.
2. **Lifts working blocks by exact markers.** A helper takes the text between a known start and end string, and every
   lift is followed by an `assert`. If the original changed, the build stops instead of quietly dropping a sim.
3. **Edits what it lifted, one exact change at a time.** A helper replaces exactly one occurrence and asserts it was
   found: hide a readout that is not yet taught, swap in the new question list, remove an old gate.
4. **Builds each part from the data.** Small functions turn each `content.py` entry into markup, escaping every string:

   ```python
   def ask(d):
       opts = ''.join('<button class="ask-opt" data-i="%d" type="button"><span class="key">%s</span><span>%s</span></button>\n'
                      % (i, 'ABC'[i], esc(t)) for i, t in enumerate(d['opts']))
       return ('<div class="ask" id="%s" data-ans="%d" data-fb="%s">\n<div class="ask-k">%s</div>\n<p class="ask-q">%s</p>\n'
               '<div class="ask-opts">\n%s</div>\n</div>'
               % (d['id'], d['ans'], esc(json.dumps(d['fb'], ensure_ascii=False)), esc(d['kicker']), esc(d['q']), opts))
   ```

5. **Fills every gap** in the templates and asserts that no gap is left.
6. **Checks its own promises**, for example that the real document's credit line appears on every page that shows it.
7. **Writes the lesson** at its path in `frontend/public/aero/courses/<course>/lessons/`. `OUT=<path>` writes it
   somewhere else for a trial.

```
python3 tools/curriculum/revamp/examples/safety-data-sheets/assemble.py
OUT=/tmp/sds-trial.html python3 tools/curriculum/revamp/examples/safety-data-sheets/assemble.py
```

Rerun it after every change. Never edit the built HTML by hand: the next assemble would undo it.

Two traps already paid for: Python's `re.sub` reads `\1` and `\u` in a replacement string as escapes (pass a
function instead), and an end marker that is too short can match inside nested code (use a longer, unique one).

---

## 4. How a new lesson starts

1. **Read the plan and the standard.** The lesson's Blueprint entry and the build standard ([method.md](method.md)).
2. **Write the page copy** and, for a rebuild, get the storyboard approved.
3. **Copy the closest example folder** to `tools/curriculum/revamp/examples/<new-id>/`. Pick the example closest in
   kind (a document-reading lesson, a circuit lesson, a 3D-heavy lesson), not in topic. Do not copy another lesson's
   page sequence or its set of interactions.
4. **Keep the helpers** in `assemble.py` (lift, exact replace, escape, the check lift). Change the lesson path and the
   source of the original: the lesson's own original for a rebuild, the model lesson for a new one.
5. **Replace the words and layouts.** Write `content.py` and the `pages-*.tpl` files from the page copy.
6. **Assemble, look, fix, repeat.**
7. **Write `checks.json`** and run `apply-checks.py` for testing.
8. **For a new lesson, write `route.json`**, which says where it belongs:

   ```json
   {
     "id": "electrical-troubleshooting",
     "title": "Electrical Troubleshooting",
     "course": "electrical-integration",
     "page": "/aero/courses/electrical-integration/lessons/electrical-troubleshooting.html",
     "room": "electrical-systems",
     "after": "lighting-systems",
     "caet": ["CAET-2.7", "CAET-2.6"],
     "note": "Why it goes here, what it takes from other lessons, what is not done yet."
   }
   ```

   The owner's session wires it into the room list and the course library when the work is merged
   ([hangar.md](hangar.md)).

9. **Write the lesson's browser test** on the model of the approved lesson's test ([tooling-and-publishing.md](tooling-and-publishing.md)).

### File boundaries

Several builders work at once, often several AI agents in parallel, one lesson each. These boundaries keep them from
colliding.

| A lesson builder may change | A lesson builder must not change |
|---|---|
| Its own example folder | Existing files in `frontend/public/core/` |
| Its own lesson HTML | The hangar (`frontend/public/aero/hangar/`), including the room list and the lectures |
| Its own assets subfolder | Any `course.json` |
| Its own page copy folder | The shared question bank (`caet-lesson-checks.js`): use `apply-checks.py`, and do not commit the result |
| Its own browser test, `tools/hangar/tests/browser/lesson-<id>.mjs` | Other lessons, the Blueprint, the lecture decks |
| A new, uniquely named file in `frontend/public/core/parts/` if a part truly needs to be shared | |

Each builder commits only its own paths on its own branch. The owner's session merges, applies every lesson's checks,
and wires routes, rooms and topic courses.
