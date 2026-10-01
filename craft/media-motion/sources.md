# Sources: vetted libraries and research

Written 2026-10-01. Versions, licences and sizes were checked that day from npm (`registry.npmjs.org`), jsDelivr and
each project's own site; "gz" is the gzipped size of the file named, measured by downloading it. This extends the
2026-09-29 library survey in the repo (`curriculum/revamp-kit/research/03-patterns-and-libraries.md`), which still
holds for drag and drop, dialogs and dark UI.

**Loading rule for every library:** lessons are plain HTML served from our static site with no build step. Pin an
exact version, copy the file into the site (vendor it) and load it from there, so lessons work offline and inside a
SCORM package. A CDN URL is the source of record, not the runtime. Load a library only on the page that uses it.

**Verdicts:** **House** = already in our stack, use it. **Use** = approved for lessons. **Allowed** = only for the case
named. **Avoid** = do not use in lessons. **Banned** = never.

---

## 1. Library table

### 3D, animation and motion

| Library | URL | Licence | Version and size | How to load (no build) | Best avionics use | Caution | Verdict |
|---|---|---|---|---|---|---|---|
| three.js | [threejs.org](https://threejs.org), [releases](https://github.com/mrdoob/three.js/releases/tag/r186) | MIT | r186 (0.186.1, 2026-09-24). Our vendored, per-file minified copy is about 762 KB raw | Import map to `/aero/hangar/vendor/three/three.module.js` and `three/addons/`, dynamic `import()` on `lp:enter` | Real parts you turn and take apart: gyro, relay, pitot tube, connector, transformer | r186 dropped official minified builds (official pair about 417 KB gz); never add another copy (the site already has r128 and r160 copies) | **House** |
| Google model-viewer | [modelviewer.dev](https://modelviewer.dev) | Apache-2.0 | 4.3.1; `model-viewer.min.js` 289 KB gz with its own three.js | Script tag from Google's CDN or vendored | A quick tap-to-identify GLB viewer with hotspot slots | Second three.js on our pages; Draco and KTX2 decoders from a Google CDN unless set; context-loss recovery left to you | **Avoid** (our pattern covers it) |
| GSAP | [gsap.com](https://gsap.com), [licence](https://gsap.com/standard-license) | "Standard No Charge" licence (free commercial use, not open source) | 3.15.0 (2026-04-13). Core 28.3 KB gz, ScrollTrigger 18.0, DrawSVG 2.2, MorphSVG 9.5, MotionPath 9.7, Draggable 13.5, SplitText 3.6 | `dist/*.min.js` UMD with global `gsap`; the package root files are ES modules for an import map | Multi-step timelines: DrawSVG tracing a wiring run, MotionPath dots on a wire, Draggable knobs and probes | The site's vendored copy is 3.12.5, from before the plugins became free; vendor 3.15.0 to use MorphSVG, DrawSVG or SplitText. Use `gsap.matchMedia()` for reduced motion. Never build a no-code animation tool on it | **Use** (when CSS and a small frame loop are not enough) |
| Motion | [motion.dev](https://motion.dev) | MIT (Motion+ is paid) | 13.5.0 (2026-10-01). UMD 47.8 KB gz | `dist/motion.js` (global `Motion`) or `+esm` | `inView` reveals, number tweens | The advertised 2.3 KB needs a bundler; a no-build page pays about 48 KB gz. Fast-moving versions, pin exactly | **Allowed** (MIT fallback to GSAP) |
| lottie-web | [github.com/airbnb/lottie-web](https://github.com/airbnb/lottie-web) | MIT | 5.13.0; full 76 KB gz, light 46.4 KB gz | `lottie_light.min.js` script tag | A tiny designed UI loop | Designer-made After Effects art drifts to the illustrated look; the full build uses `eval`; no reduced-motion handling built in ([issue 1986](https://github.com/airbnb/lottie-web/issues/1986)) | **Avoid** for teaching |
| dotLottie web | [github.com/LottieFiles/dotlottie-web](https://github.com/LottieFiles/dotlottie-web) | MIT | 0.80.0; JS 32.8 KB gz plus a 496 KB gz WASM | ES module plus `setWasmUrl()` to a vendored WASM | Same as Lottie | Half a megabyte of WASM on first load; fetches WASM from a CDN unless told; reduced motion is your job | **Avoid** |
| Rive runtime | [rive.app](https://rive.app), [runtime](https://github.com/rive-app/rive-wasm), [pricing](https://rive.app/pricing) | Runtime MIT; editor is paid | 2.44.0; JS 114 KB gz plus WASM 368 to 926 KB gz | UMD `rive.js` plus vendored WASM (`RuntimeLoader.setWasmUrl`) | An interactive control head with states (autopilot mode select) | About 0.9 MB gz on first load; free editor exports carry a splash screen; fonts from Rive's CDN by default; no automatic reduced motion ([Rive reduced motion](https://rive.app/docs/editor/accessibility/reduced-motion)); the canvas can block page scroll | **Avoid** for now |
| Theatre.js | [theatrejs.com](https://www.theatrejs.com) | Core Apache-2.0, studio AGPL-3.0 | 0.7.2 (2024) | Needs an ESM bundle | None | Quiet since 2024; never ship the AGPL studio | **Avoid** |
| CSS scroll-driven animations | [MDN animation-timeline](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) | Web standard | Native | `animation-timeline: scroll()` or `view()` | Small enhancements only | Not Baseline yet; wrap in `@supports`; never the only way a figure works (see `scroll-techniques-in-lessons.md`) | **Allowed** as enhancement |
| Native SVG, CSS transitions, `requestAnimationFrame`, `IntersectionObserver` | [MDN requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) | Web standard | 0 KB | Inline | Current dots, sine wave, step figures, flips, highlights | Stop loops on `lp:leave`; drive by timestamp | **House** (use first) |

### Video

| Library | URL | Licence | Version and size | How to load | Best avionics use | Caution | Verdict |
|---|---|---|---|---|---|---|---|
| HyperFrames (renderer and CLI) | [github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 | CLI 0.8.78 (studio scripts pinned at 0.7.5) | Build time only: `Render-CaetVideo.ps1` in `aero-video-studio` | Teaching clips (databus conversations, probe polarity, ILS) | Needs local Chrome and FFmpeg; deterministic motion only; see `hyperframes-in-lessons.md` | **House** |
| `@hyperframes/player` | `aero-video-studio/tools/hyperframes/packages/player/README.md` | Apache-2.0 | 0.8.78; size not measured | Web component, vendored ESM or `dist/hyperframes-player.global.js` | Stepped clips: buttons or a slider call `seek()` | Same-origin sandbox can reach the page (trusted content only); vendor it, do not load from a CDN | **Use** for stepped clips |
| Native `<video>` with WebVTT captions | [MDN track](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track) | Web standard | MP4 1 to 6 MB per clip | `<video controls playsinline preload="metadata" poster>` | Every rendered clip | No autoplay loop for teaching clips | **House** |

### Plots, math, timing diagrams and schematics

| Library | URL | Licence | Version and size | How to load | Best avionics use | Caution | Verdict |
|---|---|---|---|---|---|---|---|
| uPlot | [github.com/leeoniya/uPlot](https://github.com/leeoniya/uPlot) | MIT | 1.6.32; 22.0 KB gz | `uPlot.iife.min.js` plus 1.9 KB CSS | Live traces: a strip chart, a scope-like trace, a charge curve | No animation and no built-in drag pan; style the dark theme yourself | **Use** |
| Chart.js | [chartjs.org](https://www.chartjs.org) | MIT | 4.5.1; 70.4 KB gz | `chart.umd.min.js` | A static labeled chart | Heavy for one chart; a hand SVG is often enough | **Allowed** |
| d3 | [d3js.org](https://d3js.org) | ISC | 7.9.0; full 92.4 KB gz; `d3-scale` and `d3-shape` load separately via `+esm` | `+esm` per module or UMD | Custom gauges, transfer curves, the "ladder of abstraction" plot beside a scrubbed figure | Pin exact versions in `+esm` URLs; overkill for one line | **Allowed** |
| JSXGraph | [jsxgraph.org](https://jsxgraph.org) | MIT or LGPL-3.0 | 1.13.3; 251 KB gz | Script tag plus CSS; ships a dark theme | Draggable phasor and vector geometry | Heavy; a hand SVG phasor (see `animation.md` recipe 2) is usually enough | **Allowed** for geometry-heavy pages |
| Mafs | [mafs.dev](https://mafs.dev) | MIT | 0.21.0; 94.9 KB gz plus React | Needs React from an ESM CDN | None | Brings React into a no-build page | **Avoid** |
| KaTeX | [katex.org](https://katex.org) | MIT | 0.18.10; JS 76 KB gz, CSS 3.5 KB gz, 20 woff2 fonts 260 KB | Vendor `dist/` with `dist/fonts/`; `contrib/auto-render.min.js` | Formulas: Ohm's law, X_L = 2 pi f L, turns ratio | Use `katex-swap.min.css` so text shows while fonts load; color each symbol in its quantity color | **Use** on math pages |
| WaveDrom | [wavedrom.com](https://wavedrom.com), [tutorial](https://wavedrom.com/tutorial.html) | MIT | 3.7.0; 19.6 KB gz plus dark skin 2.9 KB gz | Script tag, `WaveDrom.ProcessAll()`, JSON in `<script type="WaveDrom">` | Static timing diagrams: RS-232 framing, an ARINC 429 word, a reduced-motion version of a bus animation | Draws diagrams, not live scopes; ARINC 429's three levels (HI, NULL, LO) need the piecewise analog lanes ([WaveJSON](https://github.com/wavedrom/wavedrom/wiki/WaveJSON)) | **Use** |
| Schemdraw (Python) | [schemdraw.readthedocs.io](https://schemdraw.readthedocs.io/en/latest/usage/start.html) | MIT | Build time | Generates SVG, then hand-tune ids and labels | Drafting standard schematics | Nothing runs in the lesson | **Allowed** (drafting) |
| Rough.js | [roughjs.com](https://roughjs.com) | MIT | 4.6.6; 8.9 KB gz | ES module | None | Hand-drawn cartoon look | **Banned** |

### Circuit simulation and scopes

| Library | URL | Licence | Version and size | How to load | Best avionics use | Caution | Verdict |
|---|---|---|---|---|---|---|---|
| Avionics Circuit Lab (ours) | `OneDrive/CAET/.../Avionics Circuit Lab - work/` (repo `00ainick-cmd/aero-circuit-lab`) | Ours | Bundled to `/simulators/circuit-lab/` at release | Iframe `?preset=<id>&lab=1`, messages `acl-autosolve` and `step` | Every DC, AC and CNS lab, Fault Hunt, the harness bench | Phone embedding rules in `simulations.md` section 6 | **House** |
| Falstad CircuitJS | [github.com/pfalstad/circuitjs1](https://github.com/pfalstad/circuitjs1), [JS interface](https://www.falstad.com/circuit/doc/js-interface.html) | GPL-2.0 or later | Not on npm; self-host the compiled `war/` folder | Iframe; the JS API works only from the same origin | A sandbox link for curious students | Same-origin API means self-hosting, and serving it is distributing GPL code (licence text and source required, [GPL FAQ](https://www.gnu.org/licenses/gpl-faq.html#UnreleasedMods)); dated look | **Avoid** in lessons; link out only |
| EEcircuit engine (ngspice in WASM) | [github.com/eelab-dev/EEcircuit](https://github.com/eelab-dev/EEcircuit) | MIT (ngspice mostly BSD-3-Clause) | 1.8.0; about 5.7 MB gz | ES module | A real SPICE run for an advanced lab | Far too heavy for a phone lesson | **Avoid** |
| CircuitVerse | [github.com/CircuitVerse/CircuitVerse](https://github.com/CircuitVerse/CircuitVerse) | MIT | Hosted | View-only iframe embed from circuitverse.org | Digital logic gates | External host, its own look | **Avoid** for now |
| Web audio scopes (woscope, audio-oscilloscope, webaudio-oscilloscope) | [woscope](https://github.com/m1el/woscope), [audio-oscilloscope](https://github.com/mathiasvr/audio-oscilloscope) | MIT | Small, mostly unmaintained | Canvas | None | Built for microphone or audio input, not a computed, triggered trace with volts per division | **Avoid**; use the Oscilloscopes lesson's own scope renderer (`examples/oscilloscopes/script.tpl`, a 10 by 8 division graticule) or uPlot |

### Figures and hotspots

| Library | URL | Licence | Version and size | How to load | Best use | Caution | Verdict |
|---|---|---|---|---|---|---|---|
| @panzoom/panzoom | [github.com/timmywil/panzoom](https://github.com/timmywil/panzoom) | MIT | 4.6.2; 3.9 KB gz | `panzoom.min.js` or `dist/panzoom.es.js` | Tap to enlarge a full system schematic or a real FAA figure on a phone | Only inside a full-screen view; the page itself never pans sideways | **Use** |
| Floating UI | [floating-ui.com](https://floating-ui.com) | MIT | @floating-ui/dom 1.8.0; about 10 KB gz with core and utils | Three UMD files or an import map | Keep a hotspot popover beside its marker on a phone | The browser `.mjs` imports a bare `@floating-ui/core`; map it | **Use** |
| SortableJS | [github.com/sortablejs/Sortable](https://github.com/sortablejs/Sortable) | MIT | 1.15.7; 15.0 KB gz | `Sortable.min.js` | Drag sorts (see the interactions folder; `lesson-parts.js` `.rsort` is the house sort) | No keyboard mode of its own | **Allowed** |

---

## 2. Phone performance facts for WebGL (sources)

- Do not pass the raw device pixel ratio; cap it ([three.js manual, responsive](https://github.com/mrdoob/three.js/blob/dev/manual/pages/responsive.html)).
- WebKit allows 16 live WebGL contexts on the main thread and drops the oldest
  ([WebKit source](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/html/canvas/WebGLRenderingContextBase.cpp)).
- Dispose geometries, materials, textures and render targets yourself
  ([three.js manual, how to dispose of objects](https://threejs.org/manual/#en/how-to-dispose-of-objects)); render on
  demand ([three.js manual, rendering on demand](https://threejs.org/manual/#en/rendering-on-demand)).
- `forceContextLoss()` uses `WEBGL_lose_context` ([MDN WEBGL_lose_context](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_lose_context)).
- Handle `webglcontextlost` with `preventDefault()` so a restore can follow
  ([MDN webglcontextlost](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event);
  [Khronos WebGL spec](https://registry.khronos.org/webgl/specs/latest/1.0/)).
- Safari on iOS supports the Fullscreen API only in part ([caniuse](https://caniuse.com/fullscreen)); use a
  full-viewport `<dialog>` for a phone "full screen" view.

---

## 3. Research sources

### Simulations (PhET and related)
- Adams, Reid, LeMaster, McKagan, Perkins, Dubson and Wieman (2008). A study of educational simulations Part I:
  Engagement and learning. *Journal of Interactive Learning Research* 19(3), 397 to 419.
  [Preprint PDF](https://phet.colorado.edu/publications/PhET_Interviews_I.pdf), [record](https://www.learntechlib.org/primary/p/24230/).
- Adams et al. (2008). A study of educational simulations Part II: Interface design. *JILR* 19(4), 551 to 577.
  [Preprint PDF](https://phet.colorado.edu/publications/archive/PhET%20interview%20Paper%20Part%20II.pdf), [ERIC](https://eric.ed.gov/?id=EJ810084).
- Wieman, Adams and Perkins (2008). PhET: Simulations that enhance learning. *Science* 322, 682 to 683.
  [PDF](https://phet.colorado.edu/publications/PhET_Simulations_That_Enhance_Learning.pdf), [DOI](https://www.science.org/doi/10.1126/science.1161948).
- Podolefsky, Moore and Perkins (2013). Implicit scaffolding in interactive simulations. [arXiv 1306.6544](https://arxiv.org/abs/1306.6544).
- Paul, Podolefsky and Perkins (2013). Guiding without feeling guided. *AIP Conference Proceedings* 1513, 302 to 305.
  [Record](https://pubs.aip.org/aip/acp/article/1513/1/302/877085).
- Adams, Paulson and Wieman (2008). What levels of guidance promote engaged exploration with interactive simulations?
  *PERC 2008*. [PDF](https://www.per-central.org/items/perc/701.pdf).
- Chamberlain, Lancaster, Parson and Perkins (2014). How guidance affects student engagement with an interactive
  simulation. *Chemistry Education Research and Practice* 15(4). [Abstract](https://www.compadre.org/portal/items/detail.cfm?ID=16327).
- Moore, Herzog and Perkins (2013). Interactive simulations as implicit support for guided-inquiry. *CERP* 14(3);
  PhysPort guidance built on it: [PhysPort](https://www.physport.org/recommendations/Entry.cfm?ID=93339).
- Moore, Chamberlain, Parson and Perkins (2014). PhET interactive simulations: Transformative tools for teaching
  chemistry. *J. Chem. Ed.* 91(8). [Abstract](https://www.compadre.org/precollege/items/detail.cfm?ID=16321).
- Adams (2009). PhET Simulation Design Process. [PDF](https://phet.colorado.edu/publications/phet_design_process.pdf).
- Adams, Perkins and Wieman (2006). PhET Look and Feel. [PDF](https://phet.colorado.edu/publications/PhET%20Look%20and%20Feel.pdf).
- Finkelstein et al. (2005). When learning about the real world is better done virtually. *Phys. Rev. ST PER* 1, 010103.
  [PDF](https://itransfer.org/downloads/labdiscussionitems/Whenrealworldlearningisbettervirtually.pdf), [record](https://www.per-central.org/items/detail.cfm?ID=4205).
- PhET accessibility research. [phet.colorado.edu/en/accessibility/research](https://phet.colorado.edu/en/accessibility/research).

### Explorable explanations
- Bret Victor (2011). [Explorable Explanations](http://worrydream.com/ExplorableExplanations/);
  [Up and Down the Ladder of Abstraction](http://worrydream.com/LadderOfAbstraction/);
  [Kill Math](http://worrydream.com/KillMath/); (2012) [Learnable Programming](http://worrydream.com/LearnableProgramming/).
- Nicky Case. [Explorable Explanations (2014)](https://blog.ncase.me/explorable-explanations/);
  [How I Make Explorable Explanations (2017)](https://blog.ncase.me/how-i-make-an-explorable-explanation/);
  [4 More Design Patterns (2018)](https://blog.ncase.me/explorable-explanations-4-more-design-patterns/);
  [explorabl.es](https://explorabl.es/).
- Bartosz Ciechanowski. [GPS](https://ciechanow.ski/gps/), [Airfoil](https://ciechanow.ski/airfoil/),
  [Mechanical Watch](https://ciechanow.ski/mechanical-watch/).
- Amit Patel. [Making of: Line drawing](https://www.redblobgames.com/making-of/line-drawing/);
  [How I implement my interactive diagrams](https://simblob.blogspot.com/2018/02/how-i-implement-my-interactive-diagrams.html);
  [Thoughts on explorable explanations](https://simblob.blogspot.com/2018/05/thoughts-on-explorable-explanations.html).

### Animation and motion design
- Tversky, Morrison and Betrancourt (2002). Animation: can it facilitate? *IJHCS* 57(4), 247 to 262.
  [Preprint PDF](http://serc.carleton.edu/files/NAGTWorkshops/visualize04/Tversky_2002.pdf), [DOI](https://doi.org/10.1006/ijhc.2002.1017).
- Hoffler and Leutner (2007). Instructional animation versus static pictures: A meta-analysis. *Learning and
  Instruction* 17(6). [Abstract](https://www.leibniz-ipn.de/en/research/publications/instructional-animation-versus-static-pictures-a-meta-analysis).
- Berney and Betrancourt (2016). Does animation enhance learning? A meta-analysis. *Computers and Education* 101.
  [Record](https://archive-ouverte.unige.ch/unige:92234).
- Mayer and Chandler (2001). When learning is just a click away. *Journal of Educational Psychology* 93(2).
  [ERIC](https://eric.ed.gov/?id=EJ638751).
- Mayer and Moreno (2003). Nine ways to reduce cognitive load in multimedia learning. *Educational Psychologist* 38(1).
  [PDF](https://files.software-carpentry.org/training-course/2012/08/mayer-reduce-cognitive-load.pdf).
- Rey et al. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review* 31(2).
  [PDF](https://maria-wirzberger.de/wp-content/uploads/2019/01/Rey2019_Article_AMeta-analysisOfTheSegmentingE.pdf).
- de Koning, Tabbers, Rikers and Paas (2009). Towards a framework for attention cueing in instructional animations.
  *Educational Psychology Review* 21(2). [Open access](https://repub.eur.nl/pub/16961/).
- Lowe (2004). Animation and learning: Value for money? *ASCILITE*. [Paper](https://www.ascilite.org/conferences/perth04/procs/lowe-r.html).
- Lowe and Boucheix (2008). Learning from animated diagrams: How are mental models built? *Diagrams 2008*.
  [Chapter](https://link.springer.com/chapter/10.1007/978-3-540-87730-1_25).
- Lowe and Boucheix (2016). Principled animation design improves comprehension of complex dynamics. *Learning and
  Instruction* 45. [PDF](https://lead.ube.fr/wp-content/uploads/2023/09/001168-principled-animation-design-improves-comprehension-of-complex-dynamics.pdf).
- Castro-Alonso, Ayres and Paas (2014). Learning from observing hands in static and animated versions of
  non-manipulative tasks. *Learning and Instruction* 34. [Abstract](https://repub.eur.nl/pub/67433).
- Hasler, Kersten and Sweller (2007). Learner control, cognitive load and instructional animation. *Applied Cognitive
  Psychology* 21. [PDF](https://www.runi.ac.il/media/j2jbwbjw/learnercontrolcognitiveloadandinstructional.pdf).
- Schwan and Riempp (2004). The cognitive benefits of interactive videos: learning to tie nautical knots. *Learning and
  Instruction* 14(3). [DOI](https://doi.org/10.1016/j.learninstruc.2004.06.005).
- Betrancourt (2005). The animation and interactivity principles in multimedia learning.
  [Preprint](https://tecfa.unige.ch/perso/mireille/papers/Betrancourt05.pdf).
- Mayer's principles, plain summary: [Devlin Peck](https://www.devlinpeck.com/content/mayers-principles-of-multimedia-learning);
  coherence and signaling chapter: [Cambridge](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E).

### Accessibility
- [WCAG 2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html);
  [WCAG 2.3.3 Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html);
  [WCAG 2.3.1 Three Flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html);
  [Technique C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39);
  [MDN prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion).
- [WCAG 1.4.3 Contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html);
  [WCAG 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html);
  [WCAG 2.5.8 Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html);
  [Apple HIG, accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility);
  [W3C complex images](https://www.w3.org/WAI/tutorials/images/complex/);
  [National Eye Institute, color blindness](https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness).

### Graphics, licensing and avionics references
- [17 U.S.C. 105](https://www.law.cornell.edu/uscode/text/17/105) (US government works);
  [Wikimedia Commons licensing](https://commons.wikimedia.org/wiki/Commons:Licensing);
  [NASA 3D Resources](https://science.nasa.gov/3d-resources/); [Smithsonian Open Access](https://www.si.edu/openaccess);
  [Sketchfab licences](https://sketchfab.com/licenses).
- [FAA AC 25-11B, Electronic Flight Displays](https://www.faa.gov/documentlibrary/media/advisory_circular/ac_25-11b.pdf)
  (display color meanings); [Electronic symbols overview](https://en.wikipedia.org/wiki/Electronic_symbol).
- [AIM ARINC 429 tutorial](https://www.aim-online.com/wp-content/uploads/2019/07/aim-tutorial-oview429-190712-u.pdf);
  [ARINC 429 overview](https://en.wikipedia.org/wiki/ARINC_429); [MIL-STD-1553 overview](https://en.wikipedia.org/wiki/MIL-STD-1553).
  Use these to check a figure, then cite the FAA or manufacturer source the lesson itself rests on.

### Our own toolkits (local paths, read 2026-10-01)
- `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`; `research/01-owned-tools.md`; `research/03-patterns-and-libraries.md`.
- `~/.claude/skills/hyperframes/SKILL.md`; `aero-video-studio/HYPERFRAMES-START-HERE.md`, `_builder-kit.md`, `AGENTS.md`,
  `player-integration/video-beat.html`, `tools/hyperframes/packages/player/README.md`.
- Scrollcraft skill `SKILL.md`, `references/devices.md`, `references/feel.md`; trial build
  `E-Learning Development/scrollcraft/builds/digital-databus/` (`BRIEF.md`, `src/arinc429.js`).
- `~/.claude/skills/simulation-builder/` (`SKILL.md`, `references/scaffolding.md`, `animation-engine.md`,
  `lesson-recipes.md`, `embed-layout.md`).
- `../visual-design/` (`electric-ink-look.md`, `parts-bin/`); the retired Art Library's patterns, parts and samples
  are summarized in `../visual-design/retired-art-library.md`.
- `aero-caet-source/frontend/public/aero/tools3d/registry.json`, `js/toolkit.js`, `labs/crimp.js`; the 37 scene sources in
  `tools/curriculum/revamp/examples/*/`; `frontend/public/core/lesson-pager.js`, `lesson-parts.css`,
  `concept-animation-host.js`, `concept-animation-frame.js`.
- Avionics Circuit Lab `README.md`, `dev/SYSLAB-CONTRACT.md`, `js/presets.js`, `js/app.js`.
