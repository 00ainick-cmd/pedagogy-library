# 3D in lessons: our three.js pattern, the models we own, and what to build next

Written 2026-10-01 from a read-only audit of every 3D scene in the CAET course repo (`aero-caet-source`), the tools3d registry and the
Avionics Circuit Lab harness bench. Line numbers below are as of that date.

**In plain words:** we use 3D when turning a real object in your hand teaches something a flat picture cannot: how a
gyro's rotor sits in its gimbals, where the drain hole is on a pitot tube, which way a connector's pins are numbered
when you flip it over. The student can turn it, zoom a little, and tap a part to see its name. It must work on a
phone, start only when its page is showing, let go of the phone's memory when the page is left, and show a still
picture if the phone cannot draw 3D.

---

## 1. When 3D earns its place

Use 3D when **the shape, the layout or the hidden inside of a real part is the lesson**, and the student would
otherwise need to hold the part:
- inside a closed part: pitot tube baffle and heater, relay armature and contacts, capacitor layers, transformer
  laminations;
- spatial layout: where the G1000 boxes sit in a Cessna 172, a static system behind the panel, light coverage sectors;
- motion in three axes: gyro rigidity and precession, a generator loop turning in a field;
- a part you must orient: connector pin faces, crimp tool positioner and selector.

Do not use 3D for a schematic, a flat panel, a waveform, a table or a process (use a figure, a stepped figure or a
sim). A 3D model that only spins is decoration (see `animation.md`, coherence).

---

## 2. Where models come from (in this order)

1. **Our tools3d GLB models** (`frontend/public/aero/tools3d/`, registry `registry.json`, source repo
   `00ainick-cmd/avionics-tools-3d`, synced 2026-09-28). Each entry lists its real dimensions in millimeters, its
   animation clips and its stated limits. Use them wherever the tool or contact is the subject.
2. **Procedural three.js models built to real dimensions** from a manufacturer data sheet, a maintenance manual figure
   or an FAA handbook figure, built to match the source "not copied from it" (the Battery Safety scene follows the
   Cessna 182 Maintenance Manual, 24-30-00, Figure 201, in inches). This is how 34 of the 37 lesson scenes are made.
   State the units in the file header and the source in the credit line.
3. **The hangar's C172** (`/aero/hangar/vendor/c172/`, MIT per the Antennas and Coax header) for anything placed on an
   airplane: antennas, lights, the EFIS layout.
4. **Outside models only with a licence you have read.** NASA publishes free 3D models under its media usage
   guidelines ([NASA 3D Resources](https://science.nasa.gov/3d-resources/)); the Smithsonian marks some items CC0
   ([Smithsonian Open Access](https://www.si.edu/openaccess), use CC0 items only); Sketchfab models carry per-model
   licences ([Sketchfab licences](https://sketchfab.com/licenses)).
   Manufacturer CAD files usually forbid redistribution. Never an AI-generated mesh of a real part.

Make it look like the real part, not a toy: real proportions, real materials (brushed aluminum, black anodize, enamel
copper, phenolic), molded markings where the real part has them, no cartoon colors. Electric Ink quantity colors are
for highlights only (the selected part glows faintly in the house accent).

---

## 3. The models we own

### tools3d GLBs (9 files, 6.4 MB total, none compressed)

| id | Part | Size | Clips | Stated limits |
|---|---|---|---|---|
| afm8 | DMC AFM8 crimp tool M22520/2-01 | 1.9 MB | 18 (dial select 1 to 8, clip swings, crimp at each selector) plus a `sim` block | Ratchet linkage illustrative; plates are photo estimates; "visual training assets, not production CAD" |
| k13_1, k41, k42 | Positioners | 0.44 to 0.49 MB each | install | Locator, bayonet, engraving are photo estimates |
| g125 | GO/NO-GO gauge M22520/3-1 | 0.24 MB | go pass, no-go stop | All but pin diameters are low-confidence estimates |
| socket_63_368 | M39029/63-368 socket contact | 0.41 MB | crimp, plus a morph | Indents estimated |
| pin_64_369 | M39029/64-369 pin contact | 0.38 MB | crimp, plus a morph | Illustrative crimp state |
| wire_22awg | 22 AWG M22759/16, 19 strands, 3 colors | 0.78 MB | seat, crimp, insulated, poor strip, broken strand, nicked strands | Idealized strand packing |
| stripmaster | IDEAL Stripmaster | 1.3 MB | strip cycle | **No limits stated** (fix the registry) |

Used in: Crimp a Contact lab, Hand Tools and Measuring, Harness Fabrication, FOD and Tool Control (which loads 3.2 MB
for one drawer scene).

### Procedural lesson scenes (37 sources in `tools/curriculum/revamp/examples/*/`)

| Course | Lesson: object |
|---|---|
| Shop and safety | Shop Emergencies: portable extinguisher, dry chemical and CO2. Hangar FOD: tripod jack. ESD: wrist strap and cord, circuit card. FOD and Tool Control: shadowed tool drawer. Battery Safety: Cessna 182 battery installation |
| Records and regulations | Maintenance Records: nav/comm in its tray over a transponder. Repair Stations: nav/comm radio. Certification Checks: static system and transponder installation behind the panel. Shop Communication: Embraer 120 T-tail (from the NTSB report) |
| Tools and meters | Multimeter: handheld DMM with holster, dial and leads. Oscilloscopes: scope, probe and power cord. Hand Tools and Measuring: six scenes with the tools3d models |
| DC | Current: push-pull circuit breaker. Resistance: electron lattice (an older r128 scene). Ohm's Law: three 100 Ohm resistors (1/4 W, 1 W, 10 W) to scale. Series Circuits: landing light circuit with current dots. Parallel and Series-Parallel: the back of a breaker panel and bus. Power Distribution: battery contactor. Electrical Troubleshooting: battery draw test hookup |
| AC | AC Principles: generator after FAA Figure 12-108 with a center-zero meter. Capacitors and Inductors: cutaway electrolytic and an open relay. Transformers: laminated core and windings. AC in the Aircraft: an opened power supply |
| Electronics | Semiconductors: axial diode and stud rectifier. Transistors: TO-92, TO-220 on a heat sink, TO-3. Digital Logic: micro switch on a gear lug with an out-of-rig fault. Lighting: position light sectors on a low-wing airplane |
| Instruments | Pitot-Static: twin nose with pitot and static lines. Blocked Ports: see-through pitot tube with baffle, drain and heater. Gyroscopic Instruments: rigidity and precession. EFIS: G1000 boxes in a C172 |
| CNS | Comm Radios: quarter-wave whip on skin with BNC and coax. Antennas and Coax: the C172 with its antennas. Radio Navigation: VOR flying. ILS and DME: the Orlando Executive Runway 7 approach. GPS: the constellation, six planes at 55 degrees |
| Wiring | Harness Fabrication: M39029 socket and the Circuit Lab bench's narrated demonstration |

---

## 4. The house pattern (copy it exactly)

**Library:** three.js r186 from `/aero/hangar/vendor/three/` through an import map, loaded with a dynamic `import()`
only when the page is entered. Never load another copy (the site still carries an r128 and an r160 copy and a CDN load
of r160; do not add to them). OrbitControls and CSS2DRenderer are not vendored; the house orbit and HTML labels below
replace them.

Why vendored and not a CDN: three.js r186 (npm 0.186.1, September 2026) removed its minified builds
([r186 release notes](https://github.com/mrdoob/three.js/releases/tag/r186)); the official unminified pair is about
417 KB gzipped, and a CDN "min" URL for r186 still pulls the unminified core. Our copy is minified per file by
`tools/hangar/scripts/vendor-three.mjs` (about 762 KB raw). WebGLRenderer remains the recommended renderer for WebGL 2;
WebGPURenderer is still described as experimental in the manual
([three.js WebGPURenderer manual page](https://github.com/mrdoob/three.js/blob/dev/manual/pages/webgpurenderer.html)).

Why not Google's `<model-viewer>` (Apache-2.0, 4.3.1): it is a good drop-in viewer with hotspot slots and one shared
WebGL context, but it costs about 289 KB gzipped with its own bundled three.js before any model loads, it would be a
second three.js on our pages, it loads its Draco and KTX2 decoders from a Google CDN unless told otherwise, and it
leaves context-loss recovery to the page ([model-viewer docs](https://modelviewer.dev)). Our house pattern already
does what it does.

```html
<script type="importmap">{"imports":{"three":"/aero/hangar/vendor/three/three.module.js",
  "three/addons/":"/aero/hangar/vendor/three/addons/"}}</script>
```

### 4a. Page life: start on show, free everything on leave

The pager fires `lp:enter` and `lp:leave` on the page section (bubbling) and pauses only `video` and `audio` itself
(`lesson-pager.js`, `go()` and `pauseIn`). Every 3D scene stops and frees itself. The best example is
`digital-logic/sw3d.tpl` lines 218 to 251:

```js
async function enter() {
  if (S || building || failed) return;
  if (!webgl()) { still(); return; }                 // no WebGL: show the still picture
  building = true; const ok = await libs(); building = false;
  if (!ok) { still(); return; }
  if (!page.classList.contains('is-current')) return; // the student moved on during the await
  try { S = build(); } catch (e) { still(); }
}
function leave() { if (S) { S.dispose(); S = null; } }
document.addEventListener('lp:enter', e => { if (e.target.id === PAGE_ID) enter(); });
document.addEventListener('lp:leave', e => { if (e.target.id === PAGE_ID) leave(); });
if (page.classList.contains('is-current')) enter();   // the first page is shown before scripts finish
```

`dispose()` must: cancel the frame loop, remove every listener and the ResizeObserver, traverse the scene and dispose
every geometry, material and every texture slot on each material (`hand-tools-measuring/scenes3d.mjs` line 186 does
all slots), dispose the PMREM environment, call `renderer.dispose()` and `renderer.forceContextLoss()`, and remove the
canvas. See the three.js manual, [How to dispose of objects](https://threejs.org/manual/#en/how-to-dispose-of-objects).

Also pause when the tab is hidden (`capacitors-inductors/scene3d.tpl` lines 188 to 190):

```js
function vis(){ if(document.hidden){ cancelAnimationFrame(raf); raf=0; }
  else if(!raf){ dirty=true; last=performance.now(); raf=requestAnimationFrame(frame); } }
document.addEventListener('visibilitychange', vis);
```

### 4b. Draw only when something changed

Set `dirty = true` on a drag, a zoom, a selection or a running animation, and skip the draw otherwise. 23 scenes do
this; about 12 still redraw every frame (EFIS, ESD, ILS, Multimeter, Oscilloscopes, Parallel, Radio Navigation, Series,
Series-Parallel, Shop Emergencies, and the two toolkit lessons). A still scene costs nothing when nobody touches it.

### 4c. Orbit

Use the house orbit (from `tools3d/js/toolkit.js` lines 135 to 213; it is copied into many lessons). Clamp it:
tilt never under the floor (`phi` about 0.08 to PI/2), a minimum and maximum zoom, and a **Reset view** button. Add
two or three **view buttons** (Front, Side, Inside, or "From the hangar floor" and "From the work platform") so every
student reaches the views that teach. Seeing the informative views matters more than having free orbit, and students
with weaker spatial skills get lost without them (see `../interactions/3d-object-explorer.md`, which cites Keehner and
colleagues 2008).

**Touch:** put `touch-action: pan-y` on the canvas so a vertical swipe still scrolls the page and a sideways drag
turns the model; tilt then comes from two fingers or the view buttons. A canvas with `touch-action: none` traps the
student's thumb on a phone (the m3d family, gyro, GPS, pitot, EFIS and Multimeter scenes do this today). Inside a full
screen view, `none` is fine.

Arrow keys page the lesson. A focused 3D view that uses arrows calls `preventDefault()` and `stopPropagation()`
(`sw3d.tpl` lines 199 to 201).

### 4d. Labels with leader lines, and tapping parts

Two proven methods; both are HTML buttons over the canvas, at least 44 px, with SVG leader lines that stop short of
the text. No label ever sits on the model.

- **Fixed slots** (`digital-logic/sw3d.tpl`, `ac-principles/gen3d.tpl`): numbered buttons sit in clear space around
  the stage; a leader runs from each to the part's projected point. Never overlaps on a phone. Best for 3 to 6 parts.
- **Riding markers plus one name tag** (`capacitors-inductors/scene3d.tpl` lines 54 to 68, 130 to 162): a small
  numbered marker rides each part; a marker hides when its part faces away (lines 154 to 158); tapping a part (raycast,
  ignoring drags over 6 px) highlights it and puts its name and one plain sentence in a clear band above the model with
  a leader to the part. Best for tap-to-learn on many parts.

Always also give a **list of part buttons** under the stage: it is the keyboard and screen reader path, and it is the
legend on the still picture. Molded markings (C, NC, NO on a switch) may be painted on the model as textures.

### 4e. Phone memory and speed

- `renderer.setPixelRatio(Math.min(devicePixelRatio, 2))` (all scenes do this). The three.js manual warns against
  passing the raw device pixel ratio ([three.js responsive manual](https://github.com/mrdoob/three.js/blob/dev/manual/pages/responsive.html));
  on a weak phone drop to 1.5.
- One renderer per page, created on enter, destroyed on leave. Safari (WebKit) allows 16 live WebGL contexts and
  drops the oldest when a 17th is made, with only a console warning
  ([WebKit source](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/html/canvas/WebGLRenderingContextBase.cpp));
  a lesson that forgets to free its contexts will lose a scene a few pages later.
- `preserveDrawingBuffer: false` (18 scenes set it true; it costs memory and speed on phones; only a screenshot tool
  needs it).
- No real-time shadows unless the shadow teaches; use a soft contact shadow under the part instead.
- Textures at 1024 px or less unless a marking must be read; GLBs compressed with meshopt (the decoder is already
  vendored at `addons/libs/meshopt_decoder` and unused by tools3d). Keep one page's 3D download under about 3 MB.
- Listen for `webglcontextlost` on the canvas, call `e.preventDefault()`, and swap to the still picture; rebuild on
  `webglcontextrestored` if the page is still showing (no scene does this yet; phones drop contexts under memory
  pressure) ([MDN webglcontextlost](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)).
- Render on demand rather than every frame ([three.js manual, rendering on demand](https://threejs.org/manual/#en/rendering-on-demand)).
- Draco or KTX2 compression only pays when the model savings exceed the decoder (about 75 KB and 260 KB gzipped);
  meshopt's decoder is small and already vendored.
- The stage fits the phone with its controls: `height: min(96vw, 420px)` works (the m3d family).

### 4f. When WebGL is missing or fails

Every scene shows a **still image of its default view with the same tappable markers**. About 20 lessons already
generate it with `make-still.mjs` (renders the default view in a headless browser and writes `still-markers.json`).
Keep a `?nogl=1` switch so the test can force the still. The crimp lab's text-only "The bench could not load" is the
pattern not to copy.

### 4g. Reduced motion

No auto-rotate, no idle spin. A turning part steps instead of spinning: the AC generator turns a quarter turn per
press under reduced motion (`ac-principles/gen3d.tpl` lines 281 to 285). The student can still drag. A scene must
never sit frozen and blank under reduced motion (Capacitors and Inductors' `pageLoop` does not start and draws no
static frame; fix that).

### 4h. Test hooks

Expose `window.__<name>3d = { built, disposed, running, canvas, still }` (25 scenes do) so the lesson's browser test
proves the scene builds on enter, stops on leave, frees on leave, and shows the still under `?nogl=1`. Run browser tests
with `HANGAR_GPU=1`.

---

## 5. Fixes worth making once, for every lesson (owner's session, not a lesson builder)

1. One shared runtime as a new file `frontend/public/core/parts/stage3d.js` (the brief allows new files there):
   `onPage`, orbit with view buttons, `dispose` that frees everything, WebGL probe, still fallback, context-lost
   handler, label layer. Today the orbit is copied into 8 or more lessons and `onPage` into 33.
2. Fix `tools3d/js/toolkit.js` `createStage().dispose()`: it leaves the ResizeObserver, orbit listeners, geometry,
   textures and the WebGL context behind, and it redraws every frame.
3. Compress the 9 GLBs with meshopt; the Circuit Lab harness ships byte-identical copies of five of them.
4. Retire the r128 and r160 three.js copies once the Resistance electron lattice and the landing pages move to r186.
5. Add stated limits for the Stripmaster.

---

## 6. 3D models to make next

Lessons not yet rebuilt, and gaps in rebuilt ones, where the shape of a real object teaches:

| Lesson | Model | What turning it teaches | Source to build from |
|---|---|---|---|
| Routing Coax and Databus | **Coax and shielded twisted pair in cross section** (center conductor, dielectric, braid, jacket; twisted pair with foil and drain) | Why the shield and the dielectric must not be crushed, what the minimum bend radius protects | AC 43.13-1B Chapter 11; the cable maker's data sheet |
| Wire Selection | **A wire bundle in a cushion clamp**, plus the 22 AWG GLB in cross section | Why bundles derate current (heat in the middle), clamp fit | AC 43.13-1B, paragraphs 11-66 to 11-69 and Figure 11-5, Bundle Derating Curves |
| Terminations and Bonding | **Ring terminal stack on a stud** (terminal, washers, nut in the right order) and **a bonding jumper across a shock mount** | Stack order, contact surface, why paint is removed | AC 43.13-1B Chapter 11, terminal and bonding sections |
| Wiring Troubleshooting | **A circular connector (MIL-DTL-38999 style) with its insert arrangement** shown from the pin face and the wire side | Pin letters read mirrored from the back; where to back-probe | The connector maker's insert arrangement drawing |
| RS Serial Interfaces | **DB-9 plug and socket** with numbered pins | The pin numbers mirror between the male and female faces | EIA/TIA-574 pinout as published by a connector maker |
| MIL-STD-1553 | **Bus with a transformer-coupled stub and terminators** | Stub, coupler, terminator positions on a real bus | MIL-STD-1553B handbook figures (public) |
| Transponders and ADS-B | **Antenna radiation pattern** around the C172 (doughnut from a bottom blade antenna) | Why antenna placement and shading matter | The C172 model plus a dipole pattern |
| Cockpit Instruments | **Airspeed indicator and altimeter cutaways** (diaphragm, aneroid wafers, linkage, Kollsman window) | What the pitot and static pressures physically move | FAA-H-8083-25 (Pilot's Handbook), Chapter 8 figures |
| Voltage | **A lead-acid cell cutaway** (plates, separators, electrolyte) | Where the voltage of one cell comes from; cells in series | FAA-H-8083-30B, Chapter 10 battery figures |

Brief items already built and worth reusing: gyroscope, transformer core, relay, circuit breaker, pitot tube and
static port, crimp tool, antenna (comm whip). Before building any model, check this table and the scene list in
section 3 so no lesson rebuilds a part another lesson already has.

---

## 7. 3D checklist (run it on a phone screenshot and the browser test)

1. The shape teaches something a flat figure cannot. One sentence says what.
2. Looks like the real part, with its real proportions and a credited source.
3. Starts on `lp:enter`, re-checks `is-current` after loading, stops and frees everything on `lp:leave`.
4. Pauses when the tab is hidden. Draws only when something changed.
5. Labels are HTML buttons of 44 px or more in clear space, leaders stop short, nothing on the model; a part list
   under the stage.
6. Orbit is clamped, has Reset and view buttons, and a vertical swipe still scrolls the page.
7. Still picture with the same markers when WebGL is missing, fails, or the context is lost; `?nogl=1` proves it.
8. Reduced motion: no auto-spin, stepping instead of continuous motion, never a blank frozen stage.
9. Under about 3 MB to download; DPR capped at 2; no `preserveDrawingBuffer`; no shadows unless they teach.
10. Test hooks prove build, stop, dispose and still.
