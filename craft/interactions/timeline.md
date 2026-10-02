---
pattern: timeline
family: explore
principles: [schema-theory-knowledge-components, transfer-of-learning, self-explanation-elaborative-interrogation]
our_component: lesson-local (.tl stepper on a figure; .tline year stops); .hist history card is shared
status: local
best_example: fod-tool-control, page "Concorde" (#concorde); gyroscopic-instruments, page "History" (#history)
last_reviewed: 2026-10-01
---

# Timeline

## Purpose

Lay events out in time so the student sees cause and effect: how a wear strip fitted in Houston ended up on the runway at Paris five minutes before the Concorde took off, or how the gyroscope of 1852 became the attitude indicator of the first blind flight in 1929. Two forms: a **history timeline** (years and people) and an **incident timeline** (the steps of an accident, told from the official report).

## The learner's action

Selects a step or a year, or uses Back and Next. The figure updates to that moment and the panel tells it. Nothing is graded.

## When it teaches

- **Story structure.** Events with causes, a conflict and consequences are remembered better than the same facts as a list (Willingham 2004, "The privileged status of story"). An accident timeline is a story with a technician in it.
- **A chain the student can explain.** Each step answers "and then what happened, and why?" Prompting that link is elaborative interrogation ([self-explanation-elaborative-interrogation](../../principles/01-learning-science/self-explanation-elaborative-interrogation.md)).
- **Transfer to the shop.** An incident told step by step shows where a technician could have broken the chain. That is the lesson Nick wants from real incidents: "what a technician would have caught" ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **History anchors a unit or a law.** A person, the problem they faced and what they found gives a hook to hang the concept on ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).

## When it does not

- Dates with no causal link. A list of years to memorize is trivia.
- An incident with no maintenance lesson. Choose incidents a technician's action could have changed.
- A history the lesson does not need. The brief: history "only where a person, unit or law earns it."
- Facts not taken from the official report or a credited source. Never invent a detail of a real accident.

## Anatomy

- **Figure** that changes with the step: a runway plan, an aircraft, a portrait. Real or drawn from the report, and credited.
- **Stops**: buttons with a year or a short step name, joined by a line. Current stop lit.
- **Panel**: step title and two to four sentences, in plain past tense, from the report. `aria-live="polite"`.
- **Controls**: Back, "Step 2 of 5", Next.
- **Close**: a rule box that states the maintenance lesson ("Install every part by the manufacturer's procedures, and treat every object on a ramp or runway as FOD").
- **Credit line**: the report, its agency, its number and date.

## Mobile and accessibility

- Stops are buttons with `aria-current` on the current one. Keyboard: Tab to the stops; Left and Right only if the group is a toolbar with roving tabindex.
- At 390 px a horizontal row of five stops will not fit with labels. Show numbers in the row and the label in the panel, or stack the stops vertically. Thumbnails in two rows of five also work (AC Principles page 18).
- The shared answer dock (`core/lesson-dock.js`) copies a chapter that a tap changes off screen into a dock at the bottom, where it can cover the strip and Next. Keep the chapter on screen instead: put the chapter text right under the picture with Next under it, and scroll the story back to the picture when a thumbnail below is tapped.
- No auto-play of the sequence.

## Our implementation

Lesson-local. fod-tool-control "Concorde":

```html
<p class="tl-hint">Select a step, or use Next and Back.</p>
<div class="tl" id="tl">
  <div class="tl-fig dia">{{RUNWAY}}</div>
  <div class="tl-steps" role="group" aria-label="Steps">{{TL_BTNS}}</div>
  <article class="tl-text" aria-live="polite"><h4 id="tlH"></h4><p id="tlP"></p></article>
  <div class="tl-bar"><button class="btn" id="tlBack">Back</button><span class="tl-count" id="tlCount">Step 1 of 5</span>
    <button class="btn active" id="tlNext">Next</button></div>
</div>
```

Data: `TIMELINE = [('Wear strip replacement on a DC-10', 'About two weeks before the accident, ...'), ('Loss of the wear strip on the runway', '...'), ...]`.

gyroscopic-instruments uses year stops that each jump to a shared history card (`.hist`, in `lesson-parts.css`):

```html
<div class="tline" role="group" aria-label="Timeline">
  <button class="tl-stop" type="button" data-to="hist1852"><span class="tl-y">1852</span><span class="tl-t">The gyroscope</span></button>
  <span class="tl-run" aria-hidden="true"></span> ...</div>
```

A shared timeline is gap 13 in [gaps.md](gaps.md). How to tell the story itself, and how to credit portraits and reports, is in the sibling folder `../history-incidents/`.

## Strong CAET example

- **fod-tool-control, "Concorde" (`#concorde`)**: Air France 4590, 25 July 2000, in five steps on a runway figure, from the BEA final report: the wear strip replaced on a DC-10, the strip lost on the runway, the postponed runway inspection, the tire failure, the tank rupture and fire. A rule box states what a technician controls. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/fod-tool-control.html`.
- **gyroscopic-instruments, "History" (`#history`)**: 1852, 1929, today.
- **ac-principles, "The War of the Currents" (`#history`), the picture-story form** (built 2026-10-02): ten chapters from
  Pearl Street (1882) to today. A picture stage shows each chapter's period picture (an engraving, a patent drawing, a
  photograph) with a year tag in the side's color (coral for Edison's DC, the lesson teal for AC, gray for neither) and a
  round portrait of the person driving the chapter. Under it a filmstrip of ten thumbnails, gray until visited, with a rail
  that fills to the current chapter; Back, "Chapter N of 10", Next; arrow keys, Home and End on the strip. Two chapters add
  a drawn map behind a "Map" switch, so the physics shows in the story: Pearl Street's district (under half a mile) and,
  at the same scale, the line from Niagara Falls to Buffalo (more than 20 miles). A rule box ties it to the aircraft:
  higher voltage, less current, less loss. Layout follows the content width with a container query: picture and chapter
  side by side from 860 px, stacked below that like a picture book (picture, chapter, Back and Next, filmstrip), with the
  chapter held at the height of the longest one so Next never moves. Source: `tools/curriculum/revamp/examples/ac-principles/`
  (`content.py` STORY, `figs.py` pearl_map and niagara_map, `pages-3.tpl`, `script.tpl` warStory).

## A CAET idea

**Routing Coax and Databus** (not yet rebuilt): an incident timeline of Swissair Flight 111 (MD-11, 2 September 1998), told from the Transportation Safety Board of Canada report A98H0003: the smell in the cockpit, the diversion, the fire spreading above the ceiling, the loss of systems. The close states what the report found about wire arcing and the flammable cover material on the insulation blankets, and the routing and inspection practice the lesson then teaches. Check every step against the report before it goes on a page.

## Common mistakes

- A timeline of dates with no "because."
- Dramatic narration. Tell it plainly, from the report (Nick rejects narrator voice).
- Unsourced details or an invented quote shown as real.
- A portrait that is not public domain or not credited.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/fod-tool-control/` (`pages-3.tpl`, `content.py` TIMELINE); `.../gyroscopic-instruments/pages-2.tpl`; shared `.hist` in `aero-caet-source/frontend/public/core/lesson-parts.css`
- Brief on history and incidents: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Willingham, D. T. (2004). Ask the cognitive scientist: The privileged status of story. American Educator, Summer 2004. https://www.aft.org/periodical/american-educator/summer-2004/ask-cognitive-scientist
- Transportation Safety Board of Canada, Aviation Investigation Report A98H0003 (Swissair 111), for the CAET idea: https://www.tsb.gc.ca/eng/rapports-reports/aviation/1998/a98h0003/a98h0003.html
- Rise 360 block types (Timeline): https://www.articulatesupport.com/article/Rise-Lesson-and-Block-Types
- H5P Timeline (rated requires alternative activity): https://studio.libretexts.org/help/h5p-accessibility-by-activity
- NN/g, Designing effective carousels (no auto-advance, show position): https://www.nngroup.com/articles/designing-effective-carousels/
- WCAG 2.2, Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
