# Graphics standard: how a lesson figure must look

Written 2026-10-01 for every CAET lesson built from now on. When Nick's review says "fix the graphic", this page is the
fix. Start with the checklist near the end if you are repairing a figure that already exists.

**In plain words:** a figure shows one real thing, drawn or photographed so a first-week technician can read every
word on a phone without zooming. The words sit next to the part they name, in open space, with a thin line pointing
at the part. Real FAA figures and real documents beat anything we draw. Everything is credited.

---

## 1. Pick the source first (in this order)

| Order | Use | When | How |
|---|---|---|---|
| 1 | **The real FAA figure or real document** (handbook figure, AC 43.13-1B table, FAA form, a real SDS, a real maintenance entry) | The technician will meet this exact picture or page on the job, or the lesson rests on it | Render the figure from the PDF at 200 dpi with python `fitz` (`page.get_image_rects()`, then `page.get_pixmap(dpi=200, clip=rect)`), crop tight, LOOK at it. Put hotspots on top of it instead of redrawing it. Keep it on its own light "plate" (a framed card with its original paper color). Never invert, recolor or filter a real figure: its colors may carry meaning. |
| 2 | **A faithful redrawn SVG** | The real figure is blurry, light only, cluttered, has labels too small for a phone, or must animate, highlight or respond to taps | Same topology, same symbols, same values as the source. Redraw in the Electric Ink palette below. Credit it as "Redrawn from FAA-H-8083-30B, Figure 10-45." |
| 3 | **A real photo of the part** | Shape, color or texture of the real object teaches (a connector face, a crimp, a corroded terminal) | Your own photo, a US government photo, or a Wikimedia Commons file whose licence you have read. Crop tight or cut out the part; never drop a white-background photo raw onto the dark page. |
| 4 | **A 3D model** | The shape changes with viewing angle and that is the lesson | See `three-d.md`. Always ship a still image of it too. |

**Never:** AI-generated parts, schematics or "photos"; clip art; cartoon characters; stock banners; hand-drawn
"sketchy" styles (Rough.js is banned, see `sources.md`); a cartoon that replaces a working sim or a real schematic
(LESSON-BUILD-BRIEF, "Keep the original's working sims and real schematics").

**Licence checks before you use any image:**
- Works of the US federal government (FAA handbooks, ACs, forms, NTSB photos taken by staff) are not under copyright in
  the US ([17 U.S.C. 105](https://www.law.cornell.edu/uscode/text/17/105)). Still credit them; it is the house rule and
  it lets a reviewer find the source.
- A figure inside an FAA handbook that carries a company or person credit ("Courtesy of ...") may be someone else's
  copyright. Do not use it without that owner's permission; redraw the idea from scratch or find another source.
- Wikimedia Commons files each carry their own licence; read the file page and copy the exact credit it asks for
  ([Commons licensing](https://commons.wikimedia.org/wiki/Commons:Licensing)).

---

## 2. The Electric Ink palette for figures

These are the token values used by the approved Safety Data Sheets lesson (`safety-data-sheets.html` and
`tools/curriculum/revamp/examples/safety-data-sheets/figs.py`). Contrast ratios were computed with the WCAG formula
against the page background `#0a0b0d`.

| Token | Hex | Contrast on `#0a0b0d` | Use in a figure |
|---|---|---|---|
| `--ink` | `#0a0b0d` | page | Figure background (or transparent) |
| `--ink-2` | `#111318` | | Panels, part bodies |
| `--ink-3` | `#171a21` | | Raised parts, plates, shelves |
| `--line` | `#262b34` | 1.4:1 | Card borders and grid only. **Never** a line that carries meaning |
| stroke | `#8b95a7` | 6.5:1 | Leader lines, part outlines, wires that are not the subject |
| `--paper` | `#eef1f4` | 17.4:1 | Primary labels, the part the text is about |
| `--paper-2` | `#c6ccd6` | 12.2:1 | Secondary labels, outlines |
| `--paper-3` | `#a3abba` | 8.5:1 | Credits, dimension text, tertiary labels |
| `--V` voltage | `#b48cff` | 7.6:1 | Anything that is a voltage or a voltage source |
| `--I` current | `#39d7ff` | 11.6:1 | Current, current paths, flow dots, liquids |
| `--R` resistance | `#ff9e3d` | 9.6:1 | Resistance, loads, the marker dot on a callout, hazards |
| `--ok` | `#5ddb9a` | 11.3:1 | Normal, correct, good reading |
| `--bad` | `#ff6b6b` | 7.1:1 | Fault, wrong, open circuit, warning |

Rules:
1. **Color means a quantity or a status, never decoration.** Voltage is violet, current is cyan, resistance is amber, in
   every figure, every sim readout and every slider thumb. Keep that same color on the matching symbol in a formula.
   This is Mayer's signaling principle made consistent
   ([Mayer and Fiorella, coherence and signaling](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E)).
2. **Status colors agree with the flight deck**: red warning, amber caution, green normal, cyan and magenta for selected
   values ([FAA AC 25-11B](https://www.faa.gov/documentlibrary/media/advisory_circular/ac_25-11b.pdf)). On a display
   figure (PFD, EFIS, CDI) use the display's real colors, not the quantity colors.
3. **Never color alone.** A fault also gets a word, a shape or a symbol (an X on an open, "OPEN" beside it). Red and
   green color blindness is the most common kind and is far more common in men
   ([National Eye Institute](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness)).
4. **Contrast floors:** lines and shapes that carry meaning 3:1 against what is behind them
   ([WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)); figure text the same as body
   text, 7:1 house standard (the Inspector skill), never below 4.5:1
   ([WCAG 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)).
5. **One accent glow at most** (the hero underline). No neon halos, no gradients inside a schematic.
6. Schematic symbols follow the IEEE 315 style the FAA handbooks use
   ([overview of electronic symbols](https://en.wikipedia.org/wiki/Electronic_symbol)); start from the parts bin
   (`../visual-design/parts-bin/circuit/`), already drawn in the palette above at the Series Circuits lesson's sizes.

---

## 3. Labels and leader lines

The research behind this: words placed next to the part they describe beat words in a separate caption or legend
(spatial contiguity, one of Mayer's strongest effects, see
[Mayer's principles summary](https://www.devlinpeck.com/content/mayers-principles-of-multimedia-learning)).

1. **A label never sits on a line, a wire, a fill or another label.** It sits in clear space.
2. **Leader line anatomy:** a 3.5 unit dot ON the part (amber, `--R`), a straight 1.5 unit line in stroke gray, ending
   4 to 6 units BEFORE the first letter. One bend at most. Leaders never cross each other or cross a wire.
3. **Text is horizontal.** No rotated labels except an axis title.
4. **Real text, not pixels.** Labels are SVG `<text>` or HTML over the figure, never baked into a PNG, so they stay sharp,
   searchable and resizable. On a real FAA figure, add labels as an HTML or SVG layer on top.
5. **Over about six labels, or on a crowded phone figure, switch to numbered markers** (a circle with a number, in clear
   space above the part, with a leader down to a dot on the part) plus a legend list under the figure. The approved SDS
   station figure does this (`figs.py`, function `_mk`).
6. **Small drawing labels carry `class="lbl"`** (or `lbl2` for secondary) so the phone media query in
   `frontend/public/core/lesson-parts.css` can grow them. Big object text inside a drawing (EYEWASH on a sign) uses
   `class="obj"`.
7. Units always travel with numbers: "28 V", "3.6 A", "4.7 kOhm" written with the Ohm sign. Put a thin space or a normal
   space before the unit.

Correct and wrong, in SVG:

```svg
<!-- WRONG: the label sits on the wire it names -->
<line x1="40" y1="120" x2="300" y2="120" stroke="#39d7ff" stroke-width="3"/>
<text x="120" y="124" font-size="15">Bus feed</text>

<!-- RIGHT: dot on the wire, leader into clear space, gap before the text, class lbl -->
<line x1="40" y1="120" x2="300" y2="120" stroke="#39d7ff" stroke-width="3"/>
<circle cx="170" cy="120" r="3.5" fill="#ff9e3d"/>
<line x1="170" y1="116" x2="170" y2="78" stroke="#8b95a7" stroke-width="1.5"/>
<text x="170" y="68" class="lbl" font-size="22" fill="#eef1f4" text-anchor="middle">Bus feed</text>
```

---

## 4. Phone sizes (the rule most figures fail)

The phone test width is **390 x 844**. With the 16 px side gutters, a full-width figure is drawn about **358 px wide**.
An SVG scales its whole `viewBox` into that width, so a label set at "15" in a wide drawing becomes tiny.

**The formula:** smallest label size in SVG units = 16 x (viewBox width) / 358.

| viewBox width | Smallest readable label (16 px on the phone) | Smallest line that still reads (1.5 px) |
|---|---|---|
| 360 | 16 units | 1.5 units |
| 480 | 21.5 units | 2 units |
| 640 | 28.6 units | 2.7 units |
| 800 | 35.8 units | 3.4 units |
| 1200 | 53.6 units | 5 units |

Note: the existing phone rule in `lesson-parts.css` sets `.fig-svg .lbl` to 21 units, which reads at 16 px only in a
viewBox up to about 480 wide. For anything wider, do one of these:

1. **Twin drawings.** One wide drawing for desktop and one tall drawing for the phone, swapped by CSS. The approved SDS
   station figure does this (`.st-wide` and `.st-tall` in `sds.css`). Best for any figure wider than about 4:3.
2. **Numbered markers** instead of words in the drawing, with the words in an HTML legend underneath (the legend is
   body text, 18 px).
3. **Tap to enlarge** for full system schematics: open the figure in a full-screen view with pinch zoom
   (`@panzoom/panzoom`, see `sources.md`). The page never scrolls sideways at 390 px.

Other phone rules:
- Body text 18 px, captions, credits and figure labels 16 px as rendered (Inspector skill floor).
- Every tappable part of a figure has a hit area at least 44 by 44 px
  ([Apple Human Interface Guidelines, accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility));
  the WCAG floor is 24 by 24 px ([WCAG 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)).
  Draw an invisible larger circle behind a small marker to get the hit area.
- Raster images: export at 2x the shown width (about 720 px wide for a phone, 2000 px for a desktop hero) as WebP or
  JPEG, with `width`, `height` and `loading="lazy"` set so the page does not jump.

---

## 5. Credits

Every figure that is not wholly our own idea carries a credit line directly under it, in the `.credit` style
(IBM Plex Mono, `--paper-3`). Formats:

- `Source: FAA-H-8083-30B, Aviation Maintenance Technician Handbook, General, Figure 1-2.`
- `Redrawn from FAA-H-8083-31B, Figure 11-75.`
- `Source: AC 43.13-1B, Table 11-9.`
- `Photo: <author>, <licence>, via Wikimedia Commons.` (copy the exact attribution the file page asks for)
- 3D model: `Model: AEA, after the <maker> <part number> (dimensions from the manufacturer's data sheet).`
- A training model's values: say so on its face ("Training values. Use the aircraft manual for real limits.").

---

## 6. Accessibility

- A static SVG gets `role="img"` and an `aria-label` that states what the figure teaches ("Five items at an SDS
  station: binder, eyewash, emergency phone, computer, printed copy"), not "diagram". A complex figure also gets the
  same facts in the page text or a legend ([W3C complex images tutorial](https://www.w3.org/WAI/tutorials/images/complex/)).
- Hotspots are real `<button>` elements with names, reachable by Tab, and open on tap or Enter, never on hover only.
- Correct and wrong are never shown by color alone.

---

## 7. The "fix the graphic" checklist

Run every line on a phone screenshot (390 x 844) and a desktop screenshot (1280 x 800). LOOK at the images with the
Read tool; do not trust the code.

1. **It shows.** Not blank, not a broken image, not a placeholder. (The audit found blank Voltage "tickets".)
2. **One point.** You can say in one sentence what the figure teaches, and the page text says the same thing.
3. **Right source.** Real figure or real document where one exists; a faithful redraw otherwise. No cartoon, no AI art.
4. **Not doubled.** The same figure does not appear twice in the lesson (the audit found doubles in AC Principles and
   Capacitors and Inductors).
5. **Labels clear.** No label on a line, fill or other label; leaders end short of the text; nothing overlaps.
6. **Readable on the phone.** Every label at least 16 px as rendered (use the formula in section 4). If not: twin
   drawing, numbered markers, or tap to enlarge.
7. **Lines read.** Meaningful lines at least 1.5 px rendered and 3:1 contrast; `--line` gray used only for borders.
8. **Color has meaning.** Quantity and status colors follow the table; nothing is red or green only for decoration;
   color is never the only cue.
9. **Fits.** No horizontal scroll at 390 px; the figure is not cropped by the pager; its aspect ratio does not push
   Continue off the first screen without reason.
10. **Real text.** Labels are text, not pixels, and are spelled the way the lesson spells them.
11. **Credited.** A credit line in the house format, with a verified licence.
12. **Described.** `role="img"` and a teaching `aria-label`, or a text legend.
13. **Touchable.** Every hotspot or tappable part is 44 px or bigger and works by keyboard.
14. **Sharp.** No upscaled screenshot, no JPEG blur on line art (line art is SVG or PNG, never JPEG).
15. **Calm.** No glow, no gradient fill on schematic parts, no drop shadows (they vanish on dark anyway).
16. **No accidental differences.** A novice reads meaning into every visual difference: a wire drawn thicker, a
    resistor a slightly different color, uneven spacing between current dots. PhET found one stray asymmetry was
    enough to build a wrong idea ([Adams et al. 2008, Part II](https://phet.colorado.edu/publications/archive/PhET%20interview%20Paper%20Part%20II.pdf)).
    If two things look different, they must be different.

## 8. Before and after: the common failures

| What Nick sees (before) | Cause | The fix (after) |
|---|---|---|
| "I can't read it on my phone" | Wide viewBox, labels set at 12 to 15 units | Twin wide and tall drawings, or numbered markers with an HTML legend; labels to the formula size |
| Words sitting on the wires | Labels placed at the part's coordinates | Dot on the part, leader into clear space, label beyond it |
| A bright white box in the dark page | Raw handbook scan or white-background photo | Real figure on a framed light plate with a thin border and its credit; or crop and cut out the photo |
| A cartoon battery or smiling electron | Illustration style drifted toward "fun" | Redraw as a flat technical line drawing in the palette, or use the real figure |
| A legend you have to hunt in | Colors keyed in a box far from the parts | Labels beside the parts; legend only for numbered markers, directly under the figure |
| Blurry schematic | Screenshot upscaled, or JPEG line art | Re-render from the PDF at 200 dpi, or redraw as SVG |
| The same picture twice | Lifted from the original and redrawn too | Keep one: the real one, with hotspots |
| Random bright colors | Palette from another style | Quantity and status colors only |
| Figure far from the words about it | Figure at page top, text at the bottom | Hero with the figure beside its line of text; on a phone the figure sits directly under the text it explains |
| A still figure where the thing moves | Motion is the point (current, a sine wave, precession) | Make it a stepped or slider animation, see `animation.md` |

Related: `animation.md` (when the figure should move), `simulations.md` (when the student should drive it),
`three-d.md` (when the shape needs turning), `sources.md` (libraries such as panzoom).
