# Visual design

Part of the Lesson Craft section, the house standard every CAET avionics lesson is built to. This folder is the
look: what a lesson page looks like, the SVG parts its figures start from, and the one non-lesson surface we keep a
reference for. Written 2026-10-01, when the old Art Library was folded in here (see `retired-art-library.md`).

## The look in two minutes

- **One look for every lesson: Electric Ink.** A near black page (`#0a0b0d`) with a faint glow high on the right,
  off white text, and dark cards with thin borders. No light themes, no novelty fonts, no second style.
- **Three typefaces.** Space Grotesk for headings and big numbers, IBM Plex Sans for reading (19 px), IBM Plex Mono
  for labels, captions, credits and buttons.
- **Color means something.** Voltage is violet, current is cyan, resistance is amber, correct is green, wrong is red,
  in every figure and every readout. Nothing is colored for decoration.
- **One accent per room.** Each lesson takes its accent from its topic room (kicker, markers, progress bar, the one
  glowing underline). Electrical rooms never use amber or violet as the accent, because those colors already mean
  resistance and voltage.
- **Every page opens the same way:** a small hero with a kicker, a plain noun heading and a one or two sentence lede,
  with the page's figure beside it on a desktop and under it on a phone.
- **Figures are real or faithfully redrawn**, labeled beside the parts, captioned "FIG n" with one sentence, and
  credited directly underneath.
- **Real documents keep their own paper** (an SDS, a label, a form), the only light surface in a lesson.
- **Phone first.** Nothing on a phone is smaller than 16 px, captions, credits and labels included; tap targets are
  44 px or more; nothing scrolls sideways at 390 px.

## The files

| File | What it covers |
|---|---|
| `electric-ink-look.md` | The page itself, with exact values: tokens and background, type faces and sizes, the per room accent rule and table, header and side panel, the hero on every page, the card set, FIG n captions and credits, real-document paper, picture options in checks, phone rules, common mistakes |
| `parts-bin/` | SVG parts for figures in the Electric Ink colors: nine circuit symbols, two antennas, a sine wave and its JavaScript generator, a dimension line. Start with `parts-bin/README.md` |
| `other-surfaces/landing-page/` | A scroll driven marketing landing page, kept as the reference for **marketing pages only, never lessons**, with its notes |
| `retired-art-library.md` | What the old Art Library held, what was retired and why, and where each surviving idea lives now |

## Read with these (not copied here)

| Need | Note |
|---|---|
| How a figure must look: source order, palette with contrast, labels and leader lines, the phone label formula, credits, the "fix the graphic" checklist | `../media-motion/graphics-standard.md` |
| 3D models: when to use one, the house three.js pattern, labels with leader lines and tappable parts | `../media-motion/three-d.md` (labels in section 4d) |
| Motion: when it teaches, and the recipes | `../media-motion/animation.md` |
| Pictures as answer options in a check | `../interactions/picture-option-question.md` |
| Every interaction pattern (ask card, one card sort, hotspots, tabs, flip cards, live model and more) | `../interactions/README.md` |
| Portraits and photos: licence checks and credit lines | `../history-incidents/image-licensing.md` |

## Source of truth

The values in `electric-ink-look.md` were read from the shared lesson stylesheets (`lesson-parts.css` and
`lesson-pager.css`) and the approved Safety Data Sheets lesson (approved 2026-09-30) in the lesson repository. The CSS
is what ships. Two standards on that page are ahead of the CSS and need a change in the shared stylesheets: the 16 px
phone floor for captions, credits and labels (they ship at 11 to 13.5 px today), and the per room accent (lessons
still pick their own today, and the accents for four electrical rooms are proposals waiting for a decision).

## Still to do

- **Parts still to draw:** clamp meter, megohmmeter and milliohm meter faces; a small icon set; Human Factors
  diagrams (the Swiss cheese model, the Dirty Dozen) in Electric Ink. More in `parts-bin/README.md`.
- **Two interaction ideas from the old library not yet written up:** a signal chain block diagram where the student
  taps each block for its job and how it fails (for `../interactions/`), and report statement tags for incident pages,
  marking what the official report states, what is inferred and what it does not say (for `../history-incidents/`).
- **The shared stylesheet changes** named under "Source of truth".
