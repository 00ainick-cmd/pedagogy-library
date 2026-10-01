---
pattern: 3d-object-explorer
family: explore
principles: [dual-coding, cognitive-load-theory, transfer-of-learning]
our_component: lesson-local three.js scenes (.m3d, .b3d, .g3d, .tt) in about 20 pages; three.js vendored at /aero/hangar/vendor/three/
status: local
best_example: shop-communication, page "Flight 2574" (#flight2574); gyroscopic-instruments, page "Precession" (#precession)
last_reviewed: 2026-10-01
---

# 3D Object Explorer

## Purpose

A 3D model of a real part the student can turn and tap: a gyroscope, a pitot tube and static port, a transformer core, a connector and its contacts, the T-tail of an Embraer 120. Labels sit in clear space with leader lines; selecting one opens what it is. Use it only when the shape of the object teaches. Storyline offers 360 degree images with markers for the same need.

## The learner's action

Drags to orbit, selects a camera view button ("From the hangar floor", "From the work platform"), selects a label to read it. In the gyroscope scenes, also works a control (spin the rotor, push on the gimbal) and watches the result.

## When it teaches

- **When the view is the lesson.** Keehner, Hegarty and colleagues (2008) found that what predicted success on a 3D reasoning task was seeing the informative views of the object, not having the controls. Interactivity helped only when it got the student to those views. So give the student the key views as buttons, and let free orbit be extra. The Flight 2574 model does this: from the hangar floor the missing screws on top of the stabilizer leading edge cannot be seen; from the work platform they can.
- **Shape and location of a real part.** A static port's position on the skin, the contacts inside a connector, the gimbals of a gyro. A picture of the 3D object, linked to its name, is dual coding of something a flat drawing hides ([dual-coding](../../principles/01-learning-science/dual-coding.md)).
- **Transfer to the aircraft.** Seeing a part from the angle a technician sees it on the airplane prepares for the real task ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).

## When it does not

- A 2D drawing shows it as well. A schematic is flat; a 3D model of a schematic is decoration (coherence; Rey 2012).
- The student must find a view by free orbit with no guidance. Low spatial ability students get lost (Keehner et al. 2008). Give view buttons.
- The phone cannot run it smoothly. A stuttering model costs attention ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)). Ship a still.
- The motion is the point and nothing needs to be turned. An animation is cheaper (see `../media-motion/`).

## Anatomy

- **Stage**: the canvas, with a loading line ("Loading the model.") and a still image fallback shown when WebGL is missing or the phone is weak.
- **View buttons**: two to four named camera views, `aria-pressed`, the most useful view first.
- **Labels**: HTML labels over the canvas with SVG leader lines to the part, placed in clear space, never on a line. Each label is a button.
- **Panel**: `aria-live` panel for the selected label. Starts with "Select a label on the model."
- **Hint**: "Drag to turn the model. Select a label to read it."
- **Credit**: what the model is drawn from ("modeled for this lesson from the NTSB report; proportions are approximate").
- **Controls** (simulation scenes only): one control first, its result in a readout.

## Mobile and accessibility

- The brief's rules: it must run on a phone, start only when its page is shown, stop and free memory when the page is hidden (`lp:enter`, `lp:leave`), and show a still image if WebGL is not available.
- Everything taught in the model is also reachable without dragging: view buttons and label buttons work by tap and keyboard (WCAG 2.2 2.5.7 Dragging Movements).
- The canvas has `role="img"` and an `aria-label` that states the teaching point ("The top row of screws on the left leading edge is missing and cannot be seen from the floor").
- Labels grow on phones (a class on small labels, enlarged in the phone media query).
- No auto-rotate, or stop it under `prefers-reduced-motion`.

## Our implementation

Lesson-local scenes in `scene3d.*`, `*3d.tpl` or `*3d.js` files in each example folder, using three.js from `/aero/hangar/vendor/three/` and, where they fit, the models in `frontend/public/aero/tools3d/assets/*.glb` (crimp tools, M22520 contacts, a Stripmaster, 22 AWG wire). shop-communication "Flight 2574":

```html
<figure class="tt" id="tt">
  <div class="tt-views" role="group" aria-label="Camera views">
    <button class="btn tt-view" data-view="floor" aria-pressed="false">From the hangar floor</button>
    <button class="btn tt-view" data-view="platform" aria-pressed="true">From the work platform</button></div>
  <div class="tt-stage"><div class="tt-canvas" role="img" aria-label="3D model of the T-tail. The top row of screws ..."></div>
    <img class="tt-still" src="assets/shop-communication/ttail-still.png" alt="..." hidden/>
    <svg class="tt-lines" aria-hidden="true"></svg><div class="tt-labels">{{TT_LABELS}}</div>
    <p class="tt-loading">Loading the model.</p></div>
  <p class="tt-hint">Drag to turn the model. Select a label to read it.</p>
  <article class="hs-panel tt-panel" aria-live="polite"><h4></h4><p>Select a label on the model.</p></article>
</figure>
```

Most 3D pages share the `.m3d` markup (`m3d-stage`, `m3d-still`, `m3d-marks`, `m3d-panel`, `m3d-btns`), copied from lesson to lesson. Motion and render craft belong to the sibling folder `../media-motion/`.

## Strong CAET example

- **shop-communication, "Flight 2574" (`#flight2574`)**: the Embraer 120 T-tail from the NTSB report, with two camera views that show why the missing screws were not seen from the floor. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/shop-communication.html`.
- **gyroscopic-instruments, "Precession" (`#precession`)**: a spinning rotor in its gimbals; push on it and see the reaction 90 degrees later in the direction of rotation.

## A CAET idea

**Coax and Databus Cable** (new in the Blueprint): a coax cable in cross section, one of the 3D builds the brief names. Views: "Cut away" (center conductor, dielectric, braid shield, jacket, each labeled), "Bent too tight" (the dielectric squeezed off center) and "Crushed by a clamp." The shape is the lesson: the signal depends on the geometry, which is why a continuity check passes a cable that no longer works.

## Common mistakes

- A 3D model where a drawing would do.
- Free orbit only, no view buttons.
- Labels floating on top of the part or on its edges.
- A scene that keeps rendering on a hidden page and drains the phone.
- No still image fallback.
- A toy-looking model. The brief: make it look like the real part.

## Sources

- Brief on 3D: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/shop-communication/` (`pages-*.tpl`, `ttail.js`), `.../gyroscopic-instruments/gyro3d.tpl`; model registry `aero-caet-source/frontend/public/aero/tools3d/registry.json`
- Keehner, M., Hegarty, M., Cohen, C., Khooshabeh, P., and Montello, D. R. (2008). Spatial reasoning with external visualizations: What matters is what you see, not whether you interact. Cognitive Science, 32(7), 1099-1132. https://doi.org/10.1080/03640210801898177
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. Educational Research Review, 7(3), 216-237. https://doi.org/10.1016/j.edurev.2012.05.003
- NTSB, Aircraft Accident Report NTSB/AAR-92/04, Continental Express Flight 2574: https://www.ntsb.gov/investigations/AccidentReports/Reports/AAR9204.pdf
- Storyline 360, Adding interactivity to 360 degree images: https://community.articulate.com/series/articulate-storyline-360/articles/storyline-360-adding-interactivity-to-360-degree-images
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
