---
pattern: labeled-graphic
family: explore
principles: [dual-coding, cognitive-load-theory, schema-theory-knowledge-components]
our_component: lesson-local hotspot figures (.hs, .hot, .hsfig, .dir grid) in about 20 lessons; not yet in lesson-parts
status: local
best_example: safety-data-sheets, page "Risk diamond" (#diamond); electrostatic-discharge, page "Station" (#station)
last_reviewed: 2026-10-01
---

# Labeled Graphic

## Purpose

Show one real figure, photo or drawing with numbered markers on its parts. The student selects a marker and reads what that part is and what it does, beside the figure. It names the parts of a thing before the lesson explains how the thing works. Rise calls it the Labeled Graphic block, Evolve calls it Hot Graphic, H5P calls it Image Hotspots.

## The learner's action

Selects numbered markers in any order. Each selection highlights that part on the figure and fills a panel with a title and one to three sentences. Nothing is graded.

## When it teaches

- **Pretraining.** Learning the names and roles of the parts first makes the later explanation of the whole system easier to follow (Mayer, Mathias and Wetzell 2002; median d about 0.46 in Mayer's reviews). A labeled graphic of a protected workstation before a page on how charge drains is exactly this ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).
- **Dual coding and spatial contiguity.** The word sits next to the picture of the part, at the moment the student is looking at it ([dual-coding](../../principles/01-learning-science/dual-coding.md); Ginns 2006).
- **Load control.** One part at a time keeps a busy figure from flooding working memory ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)).
- **Signaling.** Highlighting the selected part tells the eye where to look (Schneider et al. 2018 signaling meta-analysis).

## When it does not

- Every label matters at once and the figure is small. Draw a labeled figure with leader lines instead, with all labels visible. A static labeled figure is not worse than a clickable one when there is nothing to choose.
- The student must be able to find the part without help. That is a different pattern: [find-the-hotspot](find-the-hotspot.md).
- The figure is decoration. A stock photo with markers is a click-to-reveal list with a picture behind it (coherence principle; Rey 2012 on seductive details).
- More than about eight markers. Split into two figures or two pages.
- The key fact of the page would be hidden behind a marker. Nick's rule: key content is never hidden. Put the key fact in the hero or a rule box, and use markers for the parts.

## Anatomy

- **Figure**: a real FAA handbook figure, a real photo, or a drawing of the real part. Credit line under it.
- **Markers**: numbered circles, at least 32 px on a phone, placed in clear space beside the part with a short leader, never on top of a line or a label. Numbers follow a sensible reading order.
- **Highlight**: the selected part outlines or brightens (an SVG overlay polygon over the image works well, as on the SDS diamond).
- **Panel**: beside the figure on desktop, under it on a phone, `aria-live="polite"`. Opens with "Select a number on the drawing." Title, then one to three plain sentences.
- **States**: unvisited marker, selected marker (`aria-pressed="true"`), visited marker (a quiet tick or filled ring).
- **Optional legend**: a numbered list under the figure for the student who prefers to read top to bottom.

Variant, the **section directory**: when the "graphic" is a set of named sections (the 16 sections of a Safety Data Sheet), lay the sections out as a grid of tiles with one panel. The tiles used most on the job carry an amber edge. See safety-data-sheets "Format" (`#format`).

## Mobile and accessibility

- Every marker is a `<button>` with an `aria-label` that names the part ("1. Flammability, the red square"). Tab reaches every marker; Enter selects.
- The figure itself has alt text describing the whole image.
- Markers sit in percent positions over the image so they track the image as it scales. Check at 390 px that no two markers overlap and none sits under a thumb-sized neighbour.
- Do not pulse the markers forever. If you pulse them, stop under `prefers-reduced-motion: reduce`. Rise's own labeled graphic still cannot turn its pulse off, which its accessibility plan lists as an open gap.
- Panel text 16 px or more, 7:1 contrast on the dark surface.

## Our implementation

Lesson-local today, under several class names: `.hs` with `.hs-panel` (digital-logic, ohms-law-lesson, principles, blocked-ports), `.hot` with `.hot-img` and `.hot-panel` (electrostatic-discharge, hangar-fod-tool-control, oscilloscopes), the SDS diamond, and the `.dir` grid. Promoting one shared part is gap 6 in [gaps.md](gaps.md).

The SDS diamond pattern (shortened):

```html
<div class="dmd-img" id="dmdImg">
  <img src="assets/figs/faa-risk-diamond.png" alt="A risk diamond from the FAA handbook: ..."/>
  <svg class="dmd-ov" viewBox="0 0 697 707" preserveAspectRatio="none" aria-hidden="true">
    <polygon class="hq" data-k="red" points="..."/> ...</svg>
  <button class="hs" type="button" data-k="red" aria-pressed="false" aria-label="1. Flammability, the red square" style="left:50%;top:22%"><span>1</span></button>
</div>
<article class="dmd-panel" aria-live="polite"><h4></h4><p>Select a color on the diamond.</p></article>
```

Data: `HOTSPOTS = [dict(n=1, key='red', h='Flammability', t='Flammability is how easily the material burns. ...')]` in `content.py`, marker positions measured on the image in `assemble.py`.

## Strong CAET example

- **safety-data-sheets, "Risk diamond" (`#diamond`)**: four numbered hotspots on FAA-H-8083-30B Figure 1-2, the selected square lights on the figure, the panel explains it, the 0 to 4 scale sits beside it, and the next block shows the solvent's own diamond from Section 16 of the real sheet. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.
- **electrostatic-discharge, "Station" (`#station`)**: a protected workstation drawing with numbered parts, each explained, all leading to one common ground.
- **safety-data-sheets, "Format" (`#format`)**: the section directory variant.

## A CAET idea

**Routing Coax and Databus** (not yet rebuilt): its original "Four places. One is legal." figure is listed as broken (labels overlap the cable and the hydraulic line). Replace it with a labeled graphic on the real AC 43.13-1B Figure 11-10, Separation of Wires From Plumbing Lines: markers on the bundle, the fluid line, the clamp and the separation, each explained, with the credit line. Then a [one-card-sort](one-card-sort.md) of new routings into Acceptable and Not acceptable.

## Common mistakes

- Labels sitting on lines or on top of the part they name. Put them in clear space with a leader.
- Hover-only labels. They do not exist on a phone.
- Markers so close that a finger hits two. Spread them or split the figure.
- A marker for a part the page never mentions again. Every marker earns its place.
- Using a cartoon in place of the real figure. Nick wants the real FAA figure or a real photo, credited.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/safety-data-sheets/` (`pages-3.tpl`, `assemble.py` `hotspots()`, `script.tpl` `diamond()`), `.../electrostatic-discharge/pages-*.tpl`
- Mayer, R. E., Mathias, A., and Wetzell, K. (2002). Fostering understanding of multimedia messages through pre-training. Journal of Experimental Psychology: Applied, 8(3), 147-154. https://doi.org/10.1037/1076-898X.8.3.147
- Ginns, P. (2006). Integrating information: A meta-analysis of the spatial contiguity and temporal contiguity effects. Learning and Instruction, 16(6), 511-525. https://doi.org/10.1016/j.learninstruc.2006.10.001
- Schneider, S., Beege, M., Nebel, S., and Rey, G. D. (2018). A meta-analysis of how signaling affects learning with media. Educational Research Review, 23, 1-24. https://www.sciencedirect.com/science/article/abs/pii/S1747938X17300581
- Rey, G. D. (2012). A review of research and a meta-analysis of the seductive detail effect. Educational Research Review, 7(3), 216-237. https://doi.org/10.1016/j.edurev.2012.05.003
- Rise 360, Labeled Graphic block: https://www.articulatesupport.com/article/Rise-How-to-Use-Labeled-Graphic-Blocks
- Rise 360 accessibility maturity plan (labeled graphic pulse gap): https://www.articulate.com/about/accessibility/rise-360-accessibility-maturity-plan/
- Evolve Hot Graphic component: https://employees.intellum.com/student/page/957915-hot-graphic-component
- H5P Image Hotspots: https://h5p.org/image-hotspots
- H5P accessibility ratings (Image Hotspots: usable with workarounds): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- NN/g, Tooltip guidelines: https://www.nngroup.com/articles/tooltip-guidelines/
- NN/g, Touch target size: https://www.nngroup.com/articles/touch-target-size/
- WCAG 2.2, Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
