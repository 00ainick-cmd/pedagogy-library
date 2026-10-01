# Parts bin: SVG symbols for Electric Ink figures

Small, clean SVG parts to start a lesson figure from: circuit symbols, two antennas, a sine wave and a dimension
line. All of them are drawn for the dark Electric Ink page, in the house colors, at the same size and stroke as the
figures in the approved lessons, so a figure built from them matches the rest of the course.

Rewritten 2026-10-01 from the old Art Library's `svg-templates` folder. The old parts were navy on a light page and
most of them did not open as files; see `../retired-art-library.md`.

## Folder map

```
parts-bin/
  README.md                         this page
  circuit/                          battery-cell, capacitor, fuse, ground, inductor, lamp,
                                    resistor-rectangle, resistor-zigzag, switch-spst
  antennas/                         v-dipole, whip-monopole
  waveforms/                        sine-wave-static.svg, sine-wave-path-generator.md (JavaScript)
  annotations/                      dimension-line
```

## How to use a part

1. **Open the file and copy the shapes** (everything inside the `<svg>` element) into your figure's SVG.
2. **Wrap them in a group and place it:** `<g transform="translate(300 120)">...</g>`. Every part is centered on its
   own origin (the header comment says where), so the translate puts the part where you want it.
3. **Scale for your drawing.** The circuit parts and the dimension line are drawn for a figure about 600 units wide;
   the antennas for a figure about 900 units wide. In another size, add a scale:
   `translate(300 120) scale(0.8)` for a 480 unit wide figure.
4. **Recolor only by meaning.** Each part carries class names (`pb-body`, `pb-lead` and so on) so the lesson's CSS can
   restyle it; a class rule beats the colors written on the shapes.

Inline paste is the method that works everywhere: the shapes then inherit the lesson's fonts and its phone rules.
Every file also opens on its own in a browser (each one parses as XML), which makes it easy to look before you copy.
An `<img>` or `<object>` reference works too, but then the lesson's CSS cannot reach the parts.

## The conventions every part follows

| Thing | Value | Why |
|---|---|---|
| Default line color | `#c6ccd6` (the `--paper-2` token) | Reads on the dark page (12:1); the old navy `#1a3346` disappeared |
| Quantity colors | battery plates voltage violet `#b48cff`; resistor and lamp resistance amber `#ff9e3d`; a wire you are teaching as the current path in current cyan `#39d7ff` | The house code: violet is voltage, cyan is current, amber is resistance, in every figure |
| Leader and dimension lines | `#8b95a7`, 1.5 units | The leader gray from the graphics standard |
| Stroke | 3 units in a 600 unit wide drawing (about 1.8 px on a phone); antenna elements 8 units in a 900 unit wide drawing | Matches the Series Circuits and Antennas and Coax figures, so there is one symbol set, not two |
| Part fill | `#0d0f14` for closed bodies (lamp, fuse, switch terminals) | Hides any wire drawn behind the part |
| Text inside a part | IBM Plex Sans or Mono, `class="lbl"`, 27 units in a 600 unit wide drawing | 16 px on a phone (see below) |
| Glow, gradient, drop shadow | none | One glow per page (the hero underline), none inside a schematic |
| State | always a word as well as a shape or color (OPEN, ON, CLOSED) | Color is never the only cue |

**Text size on a phone.** The smallest label in a figure, in SVG units, is 16 x (viewBox width) / 358. That gives
27 units in a 600 unit wide drawing and 21.5 units in a 480 unit wide one. The shared lesson stylesheet grows
`.fig-svg .lbl` to 21 units on phones, which is enough only up to about 470 units wide; in a wider figure, add a phone
rule for that figure (for example `#ohmFig .lbl{font-size:27px}`), use twin wide and tall drawings, or use numbered
markers with a legend. The full rule is in `../../media-motion/graphics-standard.md`, section 4.

**Credits.** A part drawn from scratch needs no credit. A figure you redraw from a source does, directly under the
figure: `Redrawn from FAA-H-8083-30B, Figure 10-45.` (graphics standard, section 5).

## The header comment in each file

Every part opens with a comment that says what it is, its scale, its origin, its colors and its class names. Two rules
for anyone adding a part:

- **No double hyphen inside an XML comment.** XML forbids it, and a comment that contains one (for example a CSS
  variable name) makes the whole file fail to open. Twenty one of the twenty two old parts failed for this reason.
  Write custom property names without their leading hyphens in comments, or leave them out.
- **No em or en dashes**, here or anywhere in the library. Use a comma, a colon or "to".

## Adding a part

1. Draw it in the Electric Ink palette at the scale above, centered on its origin, with real `<text>` for any label.
2. Give the shapes class names that start with `pb-`, and colors written as attributes (so the file looks right on
   its own and the lesson's CSS can still restyle it).
3. Add a `role="img"` and an `aria-label` that says what the part is.
4. Write the header comment (what, scale, origin, colors, classes, any state it can show).
5. Check that it opens: `python -c "import xml.dom.minidom,sys; xml.dom.minidom.parse(sys.argv[1])" part.svg`
   must print nothing.
6. If an approved lesson already draws the same part, match its geometry, or change both.

## Parts still to draw

- Meter faces: clamp meter, megohmmeter (insulation tester) and milliohm meter.
- A small icon set for page furniture (warning, note, tool, time).
- Human Factors diagrams in Electric Ink: the Swiss cheese model and the Dirty Dozen set.
- More symbols as lessons need them: diode, transistor, logic gates, relay, circuit breaker, transformer, and block
  diagram parts (mixer, amplifier, filter).

The approved lessons already draw many of these in their own figure scripts (instrument faces in Pitot-Static and
Gyroscopic Instruments, the compass rose and station symbols in Radio Navigation, the numbered marker and flow chart
nodes in Safety Data Sheets). Lift a part from there before drawing a new one, and add it here when it is reused.
