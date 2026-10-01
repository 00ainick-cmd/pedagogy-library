# Electric Ink: the look of a CAET lesson page

Written 2026-10-01. Every CAET avionics lesson uses this one look. There are no alternative themes: a lesson is never
light, never handwritten, never a newspaper or a terminal. This page describes the page itself (colors, type, the
accent, the header and side panel, the hero, the cards, captions and credits, document paper, check pictures and the
phone rules). How a figure is drawn is in `../media-motion/graphics-standard.md`; 3D models are in
`../media-motion/three-d.md`; each interaction has its own note in `../interactions/`.

**In plain words:** near black page, off white text, one accent color per topic room, three typefaces (Space Grotesk
for headings, IBM Plex Sans for reading, IBM Plex Mono for labels), every page opens with the same small hero, every
card is a dark panel with a thin border, real documents keep their own paper, and nothing on a phone is smaller than
16 px.

**Where the values come from.** The shared lesson stylesheets `frontend/public/core/lesson-parts.css` and
`lesson-pager.css` in the lesson repository, and the approved Safety Data Sheets lesson (`safety-data-sheets.html`
and its source stylesheet `sds.css`, approved 2026-09-30). Values were read from those files on 2026-10-01. Where this
page and the CSS disagree on a value, the CSS is what ships. Two things on this page are standards the CSS does not
meet yet: the 16 px phone floor (section 10) and the per room accent (section 3). Those are changes for the owner of
the shared stylesheets, not for each lesson.

---

## 1. Tokens and the page background

Every lesson declares the same tokens on `:root`.

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0a0b0d` | The page |
| `--ink-2` | `#111318` | Cards, panels, figure frames |
| `--ink-3` | `#171a21` | Raised parts: buttons, answer options, a card on a card |
| `--line` | `#262b34` | Card borders and dividers only (1.4:1, never a line that carries meaning) |
| `--paper` | `#eef1f4` | Headings, ledes, key text (17.4:1 on `--ink`) |
| `--paper-2` | `#c6ccd6` | Body paragraphs, card text (12.2:1) |
| `--paper-3` | `#a3abba` | Kickers, labels, captions, credits (8.5:1) |
| `--R` | `#ff9e3d` | Resistance; also caution callouts and the skip link |
| `--R-dim` | `#5a3d1c` | A dim amber fill (a lit lamp, a highlighted resistor) |
| `--I` | `#39d7ff` | Current; also links, focus rings and the Continue button |
| `--I-dim` | `#123c47` | A dim cyan fill |
| `--V` | `#b48cff` | Voltage |
| `--ok` | `#5ddb9a` | Correct, normal, a page already seen |
| `--bad` | `#ff6b6b` | Wrong, fault, warning |
| `--shadow` | `0 24px 60px -20px rgba(0,0,0,.7)` | Figure frames only |
| `--maxw` | `1080px` | Content width |
| `--hero` | the room accent | See section 3 |

A few fixed colors are used often enough to know: `#1b1730` (the fill of numbered discs, the current page row in the
side panel, chips), `#0d0f14` (the side panel, and the fill of drawn parts so wires do not show through), `#3a414d`
(the ring of an unanswered key or page number), `#4a5364` (a hover border), `#06231a` (text on a green fill) and
`#04222b` (text on the cyan Continue button).

```css
:root{
  --ink:#0a0b0d; --ink-2:#111318; --ink-3:#171a21; --line:#262b34;
  --paper:#eef1f4; --paper-2:#c6ccd6; --paper-3:#a3abba;
  --R:#ff9e3d; --R-dim:#5a3d1c; --I:#39d7ff; --I-dim:#123c47; --V:#b48cff;
  --ok:#5ddb9a; --bad:#ff6b6b;
  --shadow:0 24px 60px -20px rgba(0,0,0,.7); --maxw:1080px;
  --hero:#6ba7c4;                       /* the room accent, section 3 */
}
body{margin:0;background:var(--ink);color:var(--paper);
  font-family:"IBM Plex Sans",system-ui,sans-serif;font-size:19px;line-height:1.65;
  background-image:radial-gradient(1200px 600px at 70% -10%, #14171d 0%, var(--ink) 60%);}
::selection{background:var(--R);color:#111}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 clamp(20px,5vw,48px)}
:focus-visible{outline:2px solid var(--I);outline-offset:2px}
```

The page ground is the one soft light in the design: a faint radial glow high on the right. Paragraphs are
`--paper-2`, `strong` is `--paper` at weight 600, links are `--I`.

---

## 2. Type

Three families, loaded from Google Fonts in one request:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

| Face | Used for | Settings |
|---|---|---|
| **Space Grotesk** | Page titles, headings, card titles, big numbers (stats, goal numbers, the history year), the accordion summary, the ask card question | Weight 700 for page titles and big numbers, 600 for headings and card titles; letter spacing -0.02em; line height 1.02 to 1.04 for titles, 1.2 to 1.3 for card titles |
| **IBM Plex Sans** | Everything you read: body, ledes, card text, answer options, legends | Weight 400 (500 for answer options and panel items, 600 for `strong`); body 19 px with line height 1.65 |
| **IBM Plex Mono** | Kickers, labels, captions, credits, buttons, marker and step numbers, the header course line | Weight 500 for labels, 600 for buttons and numbers; uppercase labels with letter spacing 0.14em to 0.28em |
| Newsreader, Hanken Grotesk | Only on real-document paper (section 8) | Add them to the font request only in a lesson that shows a real document |

Sizes as shipped in the approved lesson, desktop and phone. The last column is the standard; where it differs from
what ships, the shared stylesheet needs the change (section 10).

| Element | Class | Desktop | Phone (720 px and under) | Standard on a phone |
|---|---|---|---|---|
| Page one title | `.hero1 h1` | `clamp(56px,12vw,124px)`, 700 | about 56 px | as shipped |
| Page heading | `.ph h1`, `.ph h2` | `clamp(30px,5vw,54px)`, 700 (shared default `clamp(34px,6vw,64px)`) | 30 px | as shipped |
| Lede | `.ph .lede` | `clamp(17px,1.9vw,20px)`, line height 1.6, 70 characters wide, `--paper` | 16.5 px | as shipped |
| Body | `body`, `p` | 19 px, line height 1.65 | card copy 15.5 to 17.5 px | 16 px or more |
| Card title | `.term h3`, `.dpanel h4` and similar | 22 to 24 px | 19 px | as shipped |
| Kicker | `.kicker` | Mono 13 px, 0.28em, uppercase | 13 px | **16 px** |
| Card labels | `.stat .l`, `.term .tk`, `.goals .gv`, `.hist .who`, `.callout .lbl`, `.ask-k` | Mono 12 px, 0.14em to 0.2em | 12 px | **16 px** |
| Figure caption | `.figcap` | Mono 12.5 px, 0.06em, `--paper-3` | 12.5 px | **16 px** |
| Credit | `.credit` | Mono 13.5 px, line height 1.55, `--paper-3`, 84 characters wide | 13.5 px | **16 px** |
| Header course line, page count | `.pgr-ident .n`, `.pgr-count` | Mono 11 px and 12 px | 11 px, up to two lines | **16 px** (section 4) |
| Buttons | `.btn`, `.pgr-next`, `.pgr-back` | Mono 14 to 15 px | 14 to 15 px | **16 px** |
| Side panel items | `.pgr-item`, `.pgr-item .num` | Plex Sans 14.5 px, numbers Mono 12 px | same | **16 px** |

---

## 3. The accent: one color per room

Each lesson sets one accent, `--hero`, and uses it for a small set of jobs. The accent is **the color of the lesson's
room** in the training hangar's room list (`classrooms.json`, each room's `accent`), so every lesson in a room shares
it and the color tells the student where they are.

**What the accent colors:** the kicker and its short rule, the one glowing underline on page one (the only glow on the
page), the header course line, the 3 px progress bar, the current page in the side panel, the ring and number of
numbered markers and step circles, goal numbers, term keys, the ask card kicker, hover borders on options and tiles,
the history card year, the pull line bar and the rule box's dashed border.

**What the accent never colors:** quantities (voltage stays violet, current cyan, resistance amber), status (correct
is green, wrong is red), the Continue button (always cyan, the one action color), focus rings (always cyan), and
callouts (amber caution, red warning, cyan key point, by meaning).

**Electrical rooms never use amber or violet as the accent.** Amber means resistance and violet means voltage in every
drawing; an amber or violet accent would put a meaningless "resistance" or "voltage" color on markers and headings
next to the real ones. A room is electrical when its lessons draw circuits with the voltage, current and resistance
colors: Tools and Test Equipment, DC Electricity, AC Electricity, Aircraft Electrical Systems, Solid-State and
Digital Electronics, and Aircraft Wiring.

**Lift the hangar color for the page.** The hangar colors are mid tones chosen for a lit 3D room. As text on the dark
page most of them fall under the house 7:1 contrast standard. The lesson accent keeps the hangar color's hue and is
lightened until it reads at 7:1 on `--ink-2` (and about 6.6:1 on the `#1b1730` marker discs). Text in black `#111` on
an accent fill also passes 7:1 for every value below.

| # | Room | Hangar color | Lesson accent `--hero` | Contrast on `--ink-2` | Note |
|---|---|---|---|---|---|
| 1 | Shop Safety | `#C8423B` | `#dd8985` | 7.1:1 | The approved Safety Data Sheets lesson used amber; under this rule it moves to the room's red. Near the wrong red `--bad`, so verdicts keep their words |
| 2 | Human Factors | `#B84A74` | `#d28ca7` | 7.1:1 | |
| 3 | Regulations and Records | `#2D4E8A` | `#82a0d6` | 7.0:1 | |
| 4 | Tools and Test Equipment | `#5E6B78` | `#95a1ac` | 7.1:1 | Electrical. Lifted, it is close to the `--paper-3` label gray and reads as gray, not as an accent |
| 5 | DC Electricity | `#D4A72C` (amber) | **proposed** `#9dba2c` chartreuse | 8.4:1 | Electrical; the hangar gold is in the amber family. Pending the owner's decision |
| 6 | AC Electricity | `#7A4FB0` (violet) | **proposed** `#da7fd2` magenta | 7.0:1 | Electrical; lifted, the hangar violet is almost the voltage violet. Close to the Surveillance accent. Pending |
| 7 | Aircraft Electrical Systems | `#9C6B30` (amber) | **proposed** `#e083a5` rose | 7.0:1 | Electrical; the hangar bronze is in the amber family. Close to the Human Factors accent. Pending |
| 8 | Solid-State and Digital Electronics | `#1E8C87` | `#26b2ab` | 7.1:1 | Electrical. Teal sits about 15 degrees of hue from current cyan; keep current paths clearly cyan and labeled |
| 9 | Databuses | `#2F6DB5` | `#74a4db` | 7.2:1 | |
| 10 | Aircraft Wiring | `#C0703F` (copper, amber family) | **proposed** `#6fb234` lime | 7.2:1 | Electrical; lifted, the copper is a peach next to the resistance amber. Pending |
| 11 | Flight Instruments | `#3F7F9F` | `#6ba7c4` | 7.0:1 | Display figures use the display's real colors (graphics standard, section 2) |
| 12 | Communication | `#2AA0C8` | `#32abd4` | 7.0:1 | Almost the current cyan; fine while its figures do not draw current |
| 13 | Navigation | `#4B4AA0` | `#9c9bd1` | 7.1:1 | A lavender close to the voltage violet; fine while its figures do not draw voltage |
| 14 | Surveillance | `#A0428C` | `#ce89c0` | 7.1:1 | |

Why those proposals: a replacement must stay at least about 30 degrees of hue from amber (30), current cyan (192),
voltage violet (261), correct green (149) and wrong red (0). That leaves chartreuse to lime (about 60 to 120) and
magenta to pink (about 290 to 340), with a thin blue band between cyan and violet that is too close to both for a room
whose drawings use them. Lime stays clear of the correct green because the side panel marks a seen page with a filled
green circle and a check, and the current page with an accent ring.

Set it once per lesson, after the tokens:

```css
:root{--hero:#82a0d6}   /* Regulations and Records */
```

---

## 4. Header and side panel

Source of truth: `lesson-pager.css`. The pager builds both from the page sections; a lesson does not write them.

- **One slim header, 56 px tall**, sticky, `rgba(10,11,13,.96)` with a blur, a 1 px `--line` bottom border. Left to
  right: a 44 px menu button, the course line (Mono, uppercase, 0.18em, in the accent) over the lesson title (Space
  Grotesk 600, 17 px, 16 px on a phone, one line with an ellipsis), and the page count at the right (Mono, the current
  number in the accent).
- **A 3 px progress bar** in the accent along the header's bottom edge.
- **No footer.**
- **The side panel**, 232 px wide, `#0d0f14`, a 1 px `--line` right border. Each page is a row at least 44 px tall: a
  28 px numbered circle and the page name. A page already seen gets a green filled circle with a check; the current
  page gets a `#1b1730` row with a 3 px accent bar on its left edge. Closed, the panel becomes a 52 px strip of numbers
  and checks. On a phone (720 px and under) there is no strip: the panel is a drawer, `min(290px, 84vw)` wide, that
  starts closed, with a dark scrim behind it.
- **Pages move left to right**: the new page slides in 36 px over 0.3 s (from the left when going back). Reduced motion
  turns the slide off.
- **Continue sits at the end of the page content**, after a 1 px `--line` divider: a cyan `--I` button, at least 48 px
  tall, Mono 600 15 px, text `#04222b`. Back and Skip are underlined Mono links in `--paper-3`, at least 44 px tall.

The 16 px phone floor (section 10) applies to the header course line and page count. The approved lesson lets the
course line wrap to two 11 px lines above the title; at 16 px, keep one course line with an ellipsis, or move the course
name into the side panel on phones.

---

## 5. The hero on every page

Every page opens with the same small hero, `.ph`, so the student always knows what the page is about before reading
it.

| Part | Class | Look |
|---|---|---|
| Kicker | `.kicker` | Mono, uppercase, 0.28em, in the accent, with a 26 px by 1 px accent rule before it. Names the topic area ("Shop safety"), never a lesson code |
| Heading | `.ph h1` (page one) or `.ph h2` | Space Grotesk 700, a plain noun phrase that names the thing ("The Safety Data Sheet", "Section 8: Gloves"). No questions, no slogans, no "Let's" |
| Lede | `.ph .lede` | One or two sentences in `--paper`, 70 characters wide, that say what this page shows |
| Beside the visual | `.ph.two` | Two columns on desktop (hero left, the page's figure or stat right, centered); one column under 940 px, with the visual directly under the lede |

**Page one** either uses the same `.ph` with an `h1` (the approved lesson does) or the larger `.hero1`: a title of
`clamp(56px,12vw,124px)` with one word wrapped in `<span class="u">`, which gets the page's only glowing underline (an
accent bar 0.09em tall with a 24 px accent glow), and a `.hero-sub` line in `--paper-2`.

Correct:

```html
<div class="ph two">
  <div>
    <div class="kicker">Shop safety</div>
    <h2>Section 8: Gloves</h2>
    <p class="lede">The sheet's protection section names the glove material. A glove of the wrong material lets the
      chemical through to your skin.</p>
  </div>
  <figure class="dia ph-vis">...</figure>
</div>
```

Wrong:

```html
<!-- a lesson code in the kicker, a question for a heading, a second glow, a lede that tells a story -->
<div class="kicker">CAET 8.3 / Lesson 01 / Page 12</div>
<h2 style="text-shadow:0 0 24px var(--hero)">Ready to pick the right gloves?</h2>
<p class="lede">Imagine you are standing at the parts washer on a busy Monday morning, and your lead walks over...</p>
```

---

## 6. Cards

Every card is the same object: an `--ink-2` panel, a 1 px `--line` border, corners of 14 to 18 px, padding about 18 to
22 px (14 to 16 px on a phone). No gradients, no glows, no colored backgrounds; color comes only from the accent and
from meaning.

| Card | Class | What makes it that card |
|---|---|---|
| Stat | `.stats > .stat` | A big Space Grotesk 700 number (`clamp(36px,5.4vw,56px)`), a Mono uppercase label under it, an optional line of text. Three across, one on a phone (`.stats.two` for two). The number is `--paper`, or `--ok` / `--bad` for a status, or a quantity color when it is that quantity. The shared default is violet; override it unless the number is a voltage |
| Term | `.terms > .term` | A Mono uppercase key in the accent, a 22 to 24 px Space Grotesk title, a short definition in `--paper-2`. Two across, one on a phone |
| Rule box | `.rulebox` | The one sentence to remember, in Mono 600 on `--ink`, inside a 1 px dashed accent border, corners 14 px |
| Step cards | `.stepcards` | A numbered list; each step a card with a 30 px circle (fill `#1b1730`, 1.5 px accent ring, accent Mono number) at its top left |
| Goals | `.goals` | The learning objectives: a 44 px Space Grotesk accent number, a Mono verb ("EXPLAIN"), the objective in 18 px `--paper` |
| History card | `.hist` | A portrait 150 to 220 px wide (corners 12 px), a big year in the accent (`clamp(48px,8vw,84px)`), a Mono name line, two short paragraphs; the portrait stacks above on a phone |
| Pull line | `.pull` | One sentence in Space Grotesk 600, `clamp(22px,3.2vw,34px)`, with a 4 px accent bar on its left, at most 30 characters wide |
| Callout | `.callout`, `.callout.warn`, `.callout.key` | A 3 px left bar and a faint matching wash: amber for caution, red for a warning, cyan for a key point, each with a Mono uppercase label. No card border |
| Ask card | `.ask` | A Mono accent kicker, the question in Space Grotesk 600, options as full width rows at least 52 px tall (`--ink-3`, a 30 px key box with the letter); the feedback covers the question on a near black layer with a green or red Mono verdict. See `../interactions/ask-card.md` |
| Accordion | `details.acc` | A summary row at least 48 px tall in Space Grotesk 600 19 px with an accent plus or minus sign |
| One card sort | `.rsort` | One card at a time on `--ink-3`, dragged or tapped into dashed buckets that turn solid in the accent. See `../interactions/one-card-sort.md` |
| Figure frame | `.dia`, `.figure` | The frame for a drawing: corners 16 to 18 px and the `--shadow`, the only card with a shadow (section 7) |

---

## 7. Figures: FIG n captions and credits

- **The frame.** A figure sits in a `figure.dia` (or `.figure`) card with the drawing inside at full width. A real FAA
  figure or scan sits on its own light plate inside the frame (`.dia.white` on white, `.gsfig` on `#f4f7fa`, or
  `figure.photo.light` with a white image background) and is never inverted or recolored. The figure rules (source
  order, palette, labels and leader lines, the phone label formula, twin drawings, numbered markers) are in
  `../media-motion/graphics-standard.md`.
- **The caption.** `figcaption.figcap` directly under the drawing: a bold `FIG n` and then one plain sentence that says
  what the figure shows. Figures are numbered in order through the lesson. Mono, `--paper-3`, with `FIG n` in
  `--paper-2`.
- **The credit.** `p.credit` directly under the figure, in Mono `--paper-3`, in the house format: `Source: FAA-H-8083-31B,
  Figure 10-93.` or `Redrawn from FAA-H-8083-30B, Figure 10-45.` (formats in the graphics standard, section 5). A figure
  drawn from scratch needs no credit.
- **A large figure on a phone** is split rather than shrunk: a multi panel FAA figure becomes steps or tabs, one panel
  each (the approved lessons split FAA 12-104 into A, B and C, and 10-93 into A to D); a wide two part figure becomes
  two halves stacked on a phone (FAA 12-103, DC and AC).

```html
<figure class="dia">
  <svg class="fig-svg" viewBox="0 0 600 340" role="img" aria-label="A shop SDS station: binder, eyewash, phone, computer and a printed copy">...</svg>
  <figcaption class="figcap"><b>FIG 2</b> A shop SDS station, with the binder beside the eyewash and the phone.</figcaption>
</figure>
<p class="credit">Source: OSHA Hazard Communication Standard, 29 CFR 1910.1200(g)(2).</p>
```

3D models have their own label and leader style (a clear band above the model for the name tag, dashed leaders,
44 px marker hit areas): see `../media-motion/three-d.md`, section 4d.

---

## 8. Real documents keep their own paper

When the lesson shows a real document (a safety data sheet, its label elements, a form, a logbook entry, a line quoted
from a sheet), it is drawn on paper, not on the dark page, so the student sees what the real thing looks like. This is
the only light surface in a lesson, and it is used only for documents.

| Part | Value |
|---|---|
| Paper | `#f4f0e7`, with inner sections on `#fffdf8` |
| Ink | `#23201b` (14.3:1 on the paper); muted notes `#3a362e` (10.6:1); small keys `#5c574c` (6.3:1) |
| Accent | Document green `#145c4f` (6.9:1) for section keys, the active tab and quoted line bars |
| Rules | `#cfc7b5` and `#d9d2c2` |
| Border | 1.5 px `#23201b`, corners 6 to 8 px; a quoted line adds a 6 px green bar on its left |
| Titles | Newsreader 600, 22 px |
| Keys and labels | Mono 600, uppercase, green or `#5c574c` |
| Signal word on a label | Space Grotesk 700, 24 px, `#b3261e` |
| Tap targets | Tabs, lines and buttons at least 44 px tall; a line to find has a 1.5 px dashed green border and turns solid green `#1f7a4d` on `#d4ecdc` when found; the focus ring is blue `#0b5cd5` |
| Page viewer | A button with a thumbnail opens a page of the real document in a dialog (up to 960 px wide, full screen on a phone) with **Larger** and **Close** buttons (44 px) and the credit line under the page |

The 16 px phone floor applies here too: the 11 to 12.5 px keys on the approved sheet are below it.

---

## 9. Picture options in checks

When the answer is a picture (pick the right meter hookup, the right symbol), each option is one button row: the key
letter, a picture 118 px wide (96 px under 520 px) on a `#0d0f14` plate with a `--line` border and 10 px corners, then a
one line description; the whole row is the tap target, at least 88 px tall. A picture in the question itself sits on an
`--ink-2` plate up to 420 px wide. Full pattern and code: `../interactions/picture-option-question.md`.

---

## 10. Phone rules

Test every page at **390 by 844** and at 1280 by 800, and look at the screenshots.

1. **Nothing under 16 px.** On a phone, every piece of text is at least 16 px as rendered: body, captions, credits,
   kickers, card labels, chips, buttons, header lines, panel items, and labels inside drawings. This is the standard,
   and it overrides the 12 to 13.5 px captions, credits and labels in the approved lesson and the shared stylesheets.
   A starting point for the shared stylesheet owner (check that the 56 px header still fits):

   ```css
   @media (max-width:720px){
     .kicker,.figcap,.credit,.stat .l,.term .tk,.goals .gv,.hist .who,.hist figcaption,
     .callout .lbl,.ask-k,.ask-v,.rs-count,.chips span,.btn,
     .pgr-ident .n,.pgr-count,.pgr-item,.pgr-item .num,.pgr-next,.pgr-back,.pgr-skip{font-size:16px}
     .kicker,.stat .l,.term .tk,.goals .gv,.hist .who,.callout .lbl,.ask-k{letter-spacing:.08em}
   }
   ```

2. **Labels inside drawings** follow the formula: smallest label in SVG units = 16 x (viewBox width) / 358. Over about
   six labels, or in a wide drawing, use numbered markers with a legend or twin wide and tall drawings
   (graphics standard, section 4).
3. **Body text** is 19 px on desktop; card copy on a phone is 16 to 17.5 px; the lede is 16.5 px; page headings are
   30 px.
4. **Tap targets** are at least 44 by 44 px; answer rows at least 52 px; Continue at least 48 px.
5. **No sideways scroll** at 390 px. Grids drop to one column: stats at 640 px, terms and step cards at 760 px, goals
   at 700 px, the hero with a visual at 940 px, the history card at 640 px.
6. **Gutters**: the content wrapper keeps at least 20 px each side.
7. **Reduced motion** turns off page slides and every animation that is not the lesson's point.

---

## 11. Common mistakes

| You see | Fix |
|---|---|
| A light page, a second theme, a handwriting or typewriter font | Electric Ink only; the old visual languages are retired (`retired-art-library.md`) |
| A violet stat number that is not a voltage | Set `.stat .n` to `--paper` (or a status or quantity color by meaning) |
| An amber or violet accent in an electrical lesson | Use the room accent from section 3 |
| Two glows, or a glow on a heading or a card | One glow per page: the page one underline |
| A caption or credit at 12 px on a phone | 16 px (section 10) |
| A lesson code in the kicker or on a figure | Name the topic area; no codes on the page |
| A real FAA figure inverted to match the dark page | Keep it on its light plate with its credit |
| A document shown on the dark card | Put it on the document paper (section 8) |

Related: `README.md` (this section's index), `parts-bin/README.md` (SVG parts in these colors),
`../media-motion/README.md` (motion, simulations, 3D, video), `../interactions/README.md` (the interaction notes).
