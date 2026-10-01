# The retired Art Library

Until 2026-10-01 the program kept a separate Art Library: nine "visual languages", eighteen sample pages, four pattern
catalogs and a bin of SVG parts, all made in May and June 2026. It existed in three copies. On 2026-10-01 it was
reviewed against the approved Electric Ink lessons and folded into this section: the few parts still worth using were
redrawn for the dark page (`parts-bin/`), the marketing page was kept as a reference for marketing pages only
(`other-surfaces/landing-page/`), and everything else was retired. The originals are archived outside this library and
are not published.

**Why most of it was retired:** the rule is now one look for every lesson (Electric Ink, `electric-ink-look.md`).
The old library taught the opposite, "pick one of nine looks", and most of its pages were light, used handwriting,
typewriter or terminal fonts, put labels on lines, and set drawing text as small as 6 px. The rebuilt lessons now draw
better versions of nearly every figure it held.

| Item | What it was | Verdict | Why | Where the idea lives now |
|---|---|---|---|---|
| Library index | The front page and sample table | Retired | Its core instruction was "pick one of nine visual languages" | `README.md` in this folder |
| Visual asset manifest | An inventory of about 200 images across older projects, with licence flags | Retired | Listed pre-revamp lesson proofs and old player shots; current assets live with each lesson | Its two licence warnings: `../history-incidents/image-licensing.md`, section 7 |
| Visual asset gap list | A ranked list of SVG art to draw | Retired | The rebuilt lessons now draw most of it (pitot-static, six-pack faces, series and parallel, power distribution, wiring, the ARINC 429 word, the scope) | The open items: "Parts still to draw" in `parts-bin/README.md` |
| Visual languages (nine) | Technical Drawing, Newsroom, Lab Notebook, Terminal, Field Guide, Museum, Brutalist, Almanac, Glass Cockpit, with "one identity per piece" | Retired | Eight of nine are light or novelty themes; every lesson is now Electric Ink | `electric-ink-look.md` |
| Interaction patterns (17) | Hotspots, drag to organize, compare slider, linked sliders, break a component, multi state cards, gated quiz, sticky scroll | Retired, ideas kept | Each now has an Electric Ink note; sticky scroll and saved scroll state do not fit one page at a time lessons | `../interactions/` (`find-the-hotspot`, `labeled-graphic`, `hotspot-on-real-document`, `one-card-sort`, `image-compare-slider`, `live-model`, `state-toggle-figure`, `find-the-fault`, `tabs`, `flip-cards`, `ask-card`) |
| Animation patterns | Scroll reveals, particle flow, rotation, glow, heat, a blinking cursor | Retired, ideas kept | Scroll reveals belong to long scrolling pages, not paged lessons; a blinking cursor is decoration | Motion with meaning: `../media-motion/animation.md` |
| Annotation kit | Margin notes, sticky notes, highlighter, crossed out corrections, in a handwriting font | Retired | Handwriting and sticky notes read as toys; hand drawn styles are banned for figures | Show the common wrong idea, then correct it: `../interactions/ask-card.md` feedback and `../interactions/predict-then-reveal.md` |
| Screenshots folder | A naming convention for screenshots | Retired | No screenshot was ever added | |
| Sample 01, Technical Drawing | Placeholder content on a tan drawing sheet | Retired | Light page, drawing text down to 9 px, hotspots over dimension text | Clean line drawings in the Electric Ink palette: `../media-motion/graphics-standard.md` |
| Sample 02, Newsroom | Newspaper columns | Retired | Light page, period serif, a "Three takeaways" heading, 9 px text | |
| Sample 03, Lab Notebook | Grid paper and handwriting | Retired | Handwriting fonts on cream paper | |
| Sample 04, Terminal | A green screen terminal | Retired | A phosphor gimmick (blinking cursor, command prompts), 11 px text | |
| Sample 05, Field Guide | A field guide plate with a drag sort | Retired | Light page, 9 px text; its sort placed a chip in the right bin on a tap, which teaches nothing | `../interactions/one-card-sort.md` |
| Sample 06, Museum | A gallery exhibit | Retired | Light page, a "Closing Reflection" heading | |
| Sample 07, Brutalist | Big type on white | Retired | White page, slogan headings | |
| Sample 08, Almanac | A reference almanac with a compare slider | Retired | Light page, typewriter font, 9 px text | `../interactions/image-compare-slider.md` |
| Sample 09, Reveal patterns | A scroll reveal reference | Retired | Light page; scroll reveals do not apply to paged lessons | `../media-motion/animation.md` |
| Sample 10, Avionics Cockpit | A six-pack beside a glass display with matched numbered hotspots | Retired | Light page, a handwriting note, empty gauge faces, drawing text down to 6 px | The EFIS Glass lesson does the six-pack to primary flight display match in Electric Ink |
| Sample 11, Radio Theory | A VHF receive path with tappable blocks, terminal look | Retired | Terminal look, 9 px text | Comm Radios teaches from the real FAA transmitter and receiver block diagrams. The idea (tap each block for its job and how it fails) is a signal chain interaction note still to write in `../interactions/` |
| Sample 12, Ohm's law water system | Ohm's law as water, with sliders (and a later conflict copy) | Retired | Its colors (voltage red, current blue, resistance brown) contradict the house code; light page; a toy water wheel | The rebuilt Ohm's Law lesson |
| Sample 13, Citation tagging | An 1854 newspaper with every claim tagged sourced, inferred or unknown | Moved out | History research, not lesson art | Belongs with the program owner's history work, outside this library. The method (what a report states, what is inferred, what it does not say) is a note still to write in `../history-incidents/` for incident pages |
| Sample 14, Narrative citation | A family history narrative with citations | Moved out | Genealogy, not lesson art | The program owner's genealogy reference files, outside this library |
| Sample 15, ILS theory | The ILS signal chain, terminal look | Retired | Labels on the beam lines and on each other, clipped labels, command prompt gimmicks | The ILS and DME lesson |
| Sample 16, VOR theory | VOR in the lab notebook look | Retired | Handwriting, a cute heading, labels across the compass rose, the VOR drawn as a red diamond | The Radio Navigation lesson; its linked sliders: `../interactions/live-model.md` |
| Sample 17, Ohm's law magazine | Ohm's law with a water analogy, magazine look | Retired | Light page, narrator headings, text across the triangle's lines | The rebuilt Ohm's Law lesson |
| Sample 18, Glass cockpit landing | A scroll driven marketing landing page with a 3D terrain | Kept, marketing only | Not a lesson look; the reference for landing pages. Dashes removed, phone text raised to 16 px | `other-surfaces/landing-page/` |
| Slide example gallery | Thumbnails of narrated course player slide types | Moved out | A different product (the narrated SCORM course player, light page) | The AERO Player's own documentation. Before reusing its clock slide: the label "midnight" sits on top of another label |
| SVG parts README | How to use the parts bin, with color sets for three old themes | Rewritten | One theme now | `parts-bin/README.md` |
| Circuit symbols (9) | Battery, capacitor, fuse, ground, inductor, lamp, two resistors, switch | Updated | Clean shapes, but navy (invisible on the dark page) and eight of nine did not open as files (double hyphens in their comments) | `parts-bin/circuit/`, restroked and matched to the Series Circuits lesson's symbols |
| Antennas (2) | V dipole and whip | Updated | Same color and comment problems | `parts-bin/antennas/`, matched to the Antennas and Coax lesson |
| Static sine wave | One cycle of a sine | Updated | Cyan by default (cyan means current), and not a true sine | `parts-bin/waveforms/sine-wave-static.svg` |
| Sine wave generator | A JavaScript path builder | Kept | Still useful for AC pages | `parts-bin/waveforms/sine-wave-path-generator.md`, with color, page life and reduced motion rules added |
| Dimension line | A drafting dimension callout | Updated | Navy, 11 unit text, comment problem | `parts-bin/annotations/dimension-line.svg` |
| Aircraft silhouettes (2) | Side and top views | Retired | Neon outlines and a stubby shape that read as toys | |
| CDI face | A course deviation indicator | Retired | Terminal colors, tiny labels, did not open as a file | The Radio Navigation and ILS lessons draw the indicator in Electric Ink |
| Oscilloscope frame | A scope bezel | Retired | Superseded | The Oscilloscopes lesson's display |
| Six-pack faces | The six flight instrument faces | Retired | Light sheet, faces without real scales, a course code title block | The Pitot-Static and Gyroscopic Instruments lessons' instrument faces |
| Compass rose | A 360 degree rose | Retired | Navy on light, small labels | The Radio Navigation lesson's rose |
| VOR station glyph | A station symbol | Retired | Wrong symbol: a diamond. The FAA chart symbol is a hexagon (inside a square for a VOR/DME) | The Radio Navigation lesson's station symbols |
| Deviation bar | An ILS deviation bar | Retired | Terminal colors | The ILS and DME lesson |
| Hand drawn arrow | A sketchy arrow | Retired | Hand drawn styles are banned | The leader line rule: `../media-motion/graphics-standard.md`, section 3 |
| Numbered hotspot | A cream and navy target | Retired | The old look | The numbered marker (a `#1b1730` disc, accent ring, leader to a dot on the part) and the 3D marker in `../media-motion/three-d.md` |
| System drawings (5) | ARINC 429 word, pitot-static plumbing, power distribution, series and parallel, wiring and connectors | Retired | Light sheets, labels of 8.5 to 11 units in 980 unit wide drawings (about 3.5 px on a phone), labels on lines, a toy crimp, course code title blocks | The EFIS Glass, Pitot-Static, Aircraft DC Power, Series-Parallel Circuits and Harness Fabrication lessons |
| Sync conflict copies (6) | Duplicate files left by a sync conflict, five of them with the dashes already removed | Retired | Never keep two names for one file | The dash free text was used for every file kept above |
| The three copies | A working copy, an older vault copy, and a full mirror inside an old backup of the e-learning workspace | Folded into one | One home per system | This folder. Each old location holds only a short MOVED note |
