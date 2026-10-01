---
pattern: image-compare-slider
family: explore
principles: [cognitive-load-theory, dual-coding]
our_component: GAP (nearest today: the state-toggle figure, .seg buttons)
status: gap
best_example: none built; nearest is efis-glass, page "Red X" (#redx), a two-state toggle between two FAA figures
last_reviewed: 2026-10-01
---

# Image Compare Slider

## Purpose

Lay two images of the same thing over each other, aligned, with a handle the student drags to wipe from one to the other: a good crimp and a bad crimp, a clean static port and a blocked one, a PFD with normal data and the same PFD with red Xs, a connector before and after corrosion. H5P calls it Image Juxtaposition; Rise has no built-in block for it.

## Nick's decision

Nick rejected an "interactive comparison wipe / slider" on the Current lesson (2026-09-29) where it compared conventional current and electron flow: "I don't like the slide feature, it doesn't work here. this should be an animated short video." The difference there was motion, and motion needs animation. Use this pattern only for a still difference, and test it on him before using it widely.

## The learner's action

Drags the handle (or presses arrow keys on it) to reveal more of one image or the other. Or selects "Before" and "After" buttons. Nothing is graded.

## When it teaches

- **Contrasting cases.** Comparing two cases side by side, at the same time, helps students see the feature that matters (Alfieri, Nokes-Malach and Schunn 2013 meta-analysis, d = 0.50 for simultaneous comparison; Schwartz and Bransford 1998). When the two images are aligned pixel for pixel, the only thing that changes under the handle is the difference.
- **Spatial difference in a real image.** A nick in a conductor, a crack at a terminal, a red X over a tape. The eye finds it faster when the rest of the image holds still ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).

## When it does not

- The difference is motion or a process. Use an animation or a short video (Höffler and Leutner 2007: animation beats static pictures most for procedural-motor content, d = 1.06). This is the case Nick rejected.
- The two images are not aligned. A wipe between two different photos is just a confusing collage. Use two images side by side.
- The difference is a number or a word. Use a [stat-card](stat-card.md) pair or a comparison table.
- The student needs to describe the difference. Make it a [find-the-hotspot](find-the-hotspot.md) ("Select what changed") or the shelf comparison test in [experience-demo](experience-demo.md).
- Screen reader users get nothing from a wipe. The LibreTexts H5P review rates Image Juxtaposition "requires alternative activity": it has no way to describe the change. Always pair it with a written difference.

## Anatomy

- Two images of identical size and framing, each with alt text.
- A vertical handle line with a grip, starting at the middle.
- Labels at each top corner ("Before", "After"; "Good crimp", "Overcrimped").
- Two buttons under the figure, "Show before" and "Show after", that move the handle to each end.
- A caption that states the difference in words. This is required, not optional.
- Credit line for both images.

## Mobile and accessibility

- Build the handle as a native `<input type="range" min="0" max="100">` laid over the figure. That gives keyboard (arrow keys, Home, End) and screen reader support with no custom code, matching the WAI-ARIA slider pattern.
- WCAG 2.2 2.5.7 Dragging Movements: dragging must not be the only way. The two buttons are the single-pointer alternative.
- The handle grip is at least 44 px tall and wide. Dragging on a phone must not also scroll the page: set `touch-action: pan-y` on the figure so vertical scroll still works and horizontal drag moves the handle.
- No auto-sweep animation on load. If one is added, skip it under `prefers-reduced-motion`.
- The pager uses Left and Right arrows for pages; it ignores them when focus is on `[role="slider"]` or an `input`, so the native range input is safe.

## Our implementation

GAP. Nearest today is the [state-toggle-figure](state-toggle-figure.md): efis-glass "Red X" switches between FAA-H-8083-6 Figure 2-7 (air data computer failed) and the AHRS-failed figure with two buttons. Build spec, small enough for one builder, as `frontend/public/core/parts/compare-slider.js` and `.css` (new files only):

```html
<figure class="cmpsl" data-start="50">
  <div class="cmpsl-stage">
    <img class="cmpsl-a" src="assets/.../crimp-good.png" alt="A crimped contact with the barrel closed evenly ..."/>
    <img class="cmpsl-b" src="assets/.../crimp-over.png" alt="The same contact overcrimped, the barrel cracked ..."/>
    <span class="cmpsl-lab a">Good crimp</span><span class="cmpsl-lab b">Overcrimped</span>
    <input class="cmpsl-range" type="range" min="0" max="100" value="50" aria-label="Compare the good crimp and the overcrimped contact"/>
  </div>
  <div class="cmpsl-acts"><button class="btn" data-to="0">Show good crimp</button><button class="btn" data-to="100">Show overcrimped</button></div>
  <figcaption class="figcap">The overcrimped barrel is cracked at the seam. Source: ...</figcaption>
</figure>
```

Script: on `input`, set `clip-path: inset(0 0 0 <value>%)` on the second image and move the handle line. Buttons set the value. Record `AeroLesson.interaction({id, kind:'compare'})` once. No other state.

## Strong CAET example

None built. The closest is **efis-glass, "Red X" (`#redx`)**: two FAA figures, one with the air data computer failed and one with the AHRS failed, switched by two buttons. Built lesson: `frontend/public/aero/courses/flight-instruments/lessons/efis-glass.html`.

## A CAET idea

**Terminations** (not yet rebuilt; its Blueprint goal is to "accept or reject the result by inspection, not by the beep"), crimp inspection: one aligned macro photo pair per defect (good, undercrimped, overcrimped, insulation in the barrel) with the difference written under each. Follow it with a [one-card-sort](one-card-sort.md) of new crimp photos into Accept and Reject, so the student applies what the wipe showed.

## Common mistakes

- Using it for motion. Nick said no.
- Unaligned images.
- No written difference, so screen reader users and a quick reader both miss the point.
- A custom drag handle with no keyboard or button alternative.

## Sources

- Nick's decision: `aero-caet-source/curriculum/revamp-kit/lessons/15-current-lesson/storyboard/approval.json`
- Lesson source for the nearest pattern: `aero-caet-source/tools/curriculum/revamp/examples/efis-glass/pages-*.tpl`
- Alfieri, L., Nokes-Malach, T. J., and Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. Educational Psychologist, 48(2), 87-113. https://doi.org/10.1080/00461520.2013.775712
- Schwartz, D. L., and Bransford, J. D. (1998). A time for telling. Cognition and Instruction, 16(4), 475-522. https://doi.org/10.1207/s1532690xci1604_4
- Höffler, T. N., and Leutner, D. (2007). Instructional animation versus static pictures: A meta-analysis. Learning and Instruction, 17(6), 722-738. https://doi.org/10.1016/j.learninstruc.2007.09.013
- H5P Image Juxtaposition: https://h5p.org/image-juxtaposition
- LibreTexts accessibility guide, Image Juxtaposition (requires alternative activity): https://studio.libretexts.org/help/h5p-accessibility/image-juxtaposition
- WCAG 2.2, Dragging Movements: https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html
- WAI-ARIA APG, Slider pattern: https://www.w3.org/WAI/ARIA/apg/patterns/slider/
- NN/g, Slider design: https://www.nngroup.com/articles/gui-slider-controls/
