# Where the 3D models come from

Written 2026-10-01. A short guide to the model pipeline. When 3D earns a place in a lesson, the house three.js pattern
(start on page show, free memory on leave, labels with leader lines, the still picture, reduced motion) and the list of
models to build next are in [Lesson Craft: 3D in lessons](../craft/media-motion/three-d.md). Read that before
you build a scene.

**In plain words:** a 3D model in this course comes from one of four places. Real tools (crimp tools, contacts, wire)
are modeled in Blender and brought in as GLB files with a registry that lists each model's real size, its moving parts
and its known limits. Most lesson objects (a gyro, a pitot tube, a relay) are built in code, to real dimensions taken
from a manual or a handbook figure. The hangar's airplane and people are built by scripts from open sources. Outside
models are used only with a licence someone has read.

---

## The four sources

| Source | What it gives | How it gets into the course | Used for |
|---|---|---|---|
| **Blender tool models** (the `avionics-tools-3d` repo, private) | GLB files with named parts, docks and animation clips | `node tools/tools3d/sync.mjs --src ../avionics-tools-3d` copies them to `frontend/public/aero/tools3d/assets/` and writes `registry.json` | The crimp lab, hand tools, harness fabrication, the Harness Bench demonstration |
| **Procedural builds** in three.js | A model built from code, to real dimensions | Lives in the lesson's own example folder (`scene3d.tpl` or similar) | Most lesson scenes: 34 of 37 |
| **The hangar's own models** | The Cessna 172, the instructors and classmates | Build scripts in `tools/hangar/` | The 3D hangar, and lessons that place a part on an airplane |
| **Outside models** | Free models with a stated licence | Only after the licence is read; credited on the page | Rare |

### Blender tool models and the registry

Nine models today: the DMC AFM8 crimp tool, three positioners (K13-1, K41, K42), a GO/NO-GO gauge, an M39029 pin and
socket contact, 22 AWG wire with its failure states, and a wire stripper. About 6 MB in all.

```
avionics-tools-3d/output/<id>.glb  (made in Blender)
        |  node tools/tools3d/sync.mjs --src ../avionics-tools-3d
        v
frontend/public/aero/tools3d/assets/<id>.glb  +  registry.json
        |  js/toolkit.js   load, the hangar's lighting, a bench mat, an orbit camera, clip scrubbing
        |  js/<tool>.js    the rules of one tool (js/afm8.js)
        v
labs, lessons and the hangar's bench
```

Each registry entry records what a builder must know about the model:

```json
"afm8": {
  "title": "DMC AFM8 M22520/2-01",
  "file": "assets/afm8.glb",
  "bytes": 1899004,
  "sha256": "...",
  "knownMm": { "length": 171.5, "head_max": 19.05, "open_span_max": 114.3 },
  "limitations": [
    "Ratchet is illustrative rigid linkage; hidden mechanism not factory CAD.",
    "... these are visual training assets, not production CAD."
  ],
  "clips": { "afm8_dial_select_1": 1.333, "afm8_crimp_sel_1": 3.033 },
  "sim": { "docks": ["afm8_contact_dock", "afm8_positioner_dock"], "nodes": ["afm8_dial", "afm8_handle_upper"] }
}
```

- **`knownMm`** holds the published dimensions the model was built to.
- **`limitations`** says honestly what is estimated. A lab grades on rules (order, selector against wire size, GO or
  NO-GO), never on whether two meshes touch.
- **`clips`** are the moving parts. The student's hand drives them: the code sets a clip's time rather than playing it.
- **`sim`** names the parts and docks the app relies on. The sync refuses to write the registry if the sim file names
  a part or clip the GLB does not have, so a rename in Blender fails at sync, not in front of a student.

Do not edit the registry or the assets by hand; rerun the sync. Units are meters, Y up.

### Procedural builds

A procedural model is built from three.js shapes in the lesson's own code, to real dimensions from a manufacturer data
sheet, a maintenance manual figure or an FAA handbook figure. The file header states the units and the source, and the
page credits the source. The Battery Safety scene, for example, follows a Cessna 182 maintenance manual figure, in
inches. Make it look like the real part, not a toy: real proportions, real materials, molded markings where the real
part has them.

### The hangar's own models

- **The Cessna 172** is the airplane of the course's own browser flight simulator (MIT licence), which builds it in
  code. `tools/hangar/scripts/build-c172-model.mjs` bundles that code for the hangar, parks the airplane with its cowl
  off and panels open, and pre-paints its livery. Lessons that place antennas or lights on an airplane reuse it.
- **The people** (two instructors, classmates, staff) are built from the Microsoft Rocketbox avatar library (MIT) by
  scripts in `tools/hangar/tests/tools/`, packed with meshopt compression, and held to a byte budget (5,000,000 bytes
  for all of them) that a unit test checks.
- Both builds are reproducible: run on unchanged sources, they produce the same files.

### Outside models

Only with a licence you have read: NASA's 3D resources under its media guidelines, Smithsonian Open Access items marked
CC0, or a Sketchfab model whose own licence allows it. Manufacturer CAD usually forbids redistribution. Never an
AI-generated mesh of a real part.

---

## Shared pieces every scene uses

| Piece | Where | Why |
|---|---|---|
| three.js r186 | `/aero/hangar/vendor/three/`, minified by `tools/hangar/scripts/vendor-three.mjs` | One copy for the whole site, loaded only when a 3D page is entered |
| meshopt decoder | Vendored with three.js | Small decoder for compressed GLB files |
| A still picture of each scene | `make-still.mjs` in the lesson folder renders the default view in a headless browser | Shown when a phone has no WebGL; also the legend for the part list |
| Test hooks | `window.__<name>3d = { built, disposed, running, canvas, still }` | The lesson's browser test proves the scene builds, stops and frees itself |

---

## Checks

```
node --test tools/tools3d/tests/*.test.js                               # GLB files, hashes, sim names, tool rules
TOOLS3D_BASE=http://localhost:8776 node tools/tools3d/tests/crimp.browser.mjs   # the crimp lab in a real browser
```

Keep one page's 3D download under about 3 MB, and say in the hand-off note when the model folder grows.
