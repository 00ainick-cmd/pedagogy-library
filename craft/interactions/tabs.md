---
pattern: tabs
family: explore
principles: [cognitive-load-theory, schema-theory-knowledge-components]
our_component: lesson-local (.tabs role=tablist / .tablist) in 12 pages; not in lesson-parts
status: local
best_example: maintenance-records, page "Form 337" (#form337); ohms-law-lesson, page "Examples" (#examples)
last_reviewed: 2026-10-01
---

# Tabs

## Purpose

Show two to five parallel views of one thing in the same space: the front and back of FAA Form 337, two worked examples of the same law, the three ways a transformer is used. Only one view shows at a time.

## The learner's action

Selects a tab label. The panel under it changes. Nothing is graded.

## When it teaches

- **Chunking parallel content.** When the views are true siblings (same kind of thing, same depth), tabs let the student take one at a time without a long scroll ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md); segmenting, Rey et al. 2019).
- **A frame for a schema.** Tab labels name the categories ("Front", "Back"; "Deice boot", "Taxi light"). Seeing the categories before the details helps the student file what follows ([schema-theory-knowledge-components](../../principles/01-learning-science/schema-theory-knowledge-components.md)).

## When it does not

- The student needs to compare across tabs. NN/g: repeated switching "taxes short-term memory." Put the two things side by side in a comparison table or a [state-toggle-figure](state-toggle-figure.md) instead (Alfieri et al. 2013 found comparison works best when the cases are seen together).
- The views are steps in order. Use a [process-stepper](process-stepper.md).
- One tab holds key content and the others are filler. NN/g notes the default tab gets most attention; anything in a later tab may be missed. Nick's rule: key content is never hidden.
- More than five tabs or labels longer than two words. NN/g: long labels signal tabs are the wrong control, and wrapped rows destroy the student's sense of where they are.

## Anatomy

- **Tab list** directly above the panel, one row, labels of one or two words, the selected tab marked by more than color (an underline bar plus bolder text).
- **Panels** of similar height so the page does not jump when switching.
- **Default tab** is the one most students need first.
- **Optional hint line** above ("Select a numbered block on the form ...") when the panel itself is interactive.

## Mobile and accessibility

- Follow the WAI-ARIA tabs pattern: `role="tablist"`, each tab `role="tab"` with `aria-selected` and `aria-controls`, each panel `role="tabpanel"` with `aria-labelledby`. Only the selected tab is in the tab order (`tabindex="-1"` on the others); Left and Right arrows move between tabs.
- The lesson pager uses Left and Right arrows for pages. It leaves an arrow key alone when the widget has already called `preventDefault()` on it, so the tab script must do that for the arrows it handles. Lessons opted in with `html[data-lesson-mode="paged"]` also skip any `[role="tab"]`; lessons on `body[data-pager]` (the Safety Data Sheets model) do not, so the `preventDefault()` is what protects them (see `lesson-pager.js`).
- At 390 px two to three short labels fit on one row. If they do not, the labels are too long or there are too many tabs.
- Tap targets at least 44 px tall.

## Our implementation

Lesson-local. maintenance-records "Form 337":

```html
<div class="tabs" role="tablist" aria-label="Sides of the form">
  <button class="tabbtn" role="tab" type="button" id="f337tab-front" aria-controls="f337pane-front" aria-selected="true">Front</button>
  <button class="tabbtn" role="tab" type="button" id="f337tab-back" aria-controls="f337pane-back" aria-selected="false" tabindex="-1">Back</button>
</div>
<div class="tabpane" role="tabpanel" id="f337pane-front" aria-labelledby="f337tab-front"> ... </div>
<div class="tabpane" role="tabpanel" id="f337pane-back" aria-labelledby="f337tab-back" hidden> ... </div>
```

Tabs are low on the gaps list because they are small to build per lesson. A shared version would take this markup and a few lines of script for arrow keys.

## Strong CAET example

- **maintenance-records, "Form 337" (`#form337`)**: tabs for the front and back of the real FAA Form 337, each side with numbered hotspots on its blocks. The tabs match the physical form: a technician turns it over. Built lesson: `frontend/public/aero/courses/regulations/lessons/maintenance-records.html`.
- **ohms-law-lesson, "Examples" (`#examples`)**: two worked examples from FAA-H-8083-31B, a deice boot and a taxi light, one per tab.

## A CAET idea

**MIL-STD-1553** (not yet rebuilt): tabs for the three roles on the bus, Bus controller, Remote terminal and Bus monitor, each panel showing the same bus drawing with that box highlighted and its job in two sentences. The roles are siblings the student does not need to compare cell by cell, which is when tabs fit. Do not use tabs to tell RS-232, RS-422 and RS-485 apart: that objective is a comparison, so it needs a side-by-side table.

## Common mistakes

- Tabs used as a way to fit more text on a page. Split the page instead.
- A comparison hidden across tabs. Put it side by side.
- Labels that do not predict their panel ("More", "Details").
- Missing roles, or arrow keys handled without `preventDefault()`, so the pager turns the page instead of the tab.

## Sources

- Lesson sources: `aero-caet-source/tools/curriculum/revamp/examples/maintenance-records/pages-3.tpl`, `.../ohms-law-lesson/pages-2.tpl`; pager arrow-key rule in `aero-caet-source/frontend/public/core/lesson-pager.js`
- NN/g, Tabs, used right: https://www.nngroup.com/articles/tabs-used-right/
- WAI-ARIA APG, Tabs pattern: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- Rey, G. D., et al. (2019). A meta-analysis of the segmenting effect. Educational Psychology Review, 31, 389-419. https://link.springer.com/article/10.1007/s10648-018-9456-4
- Alfieri, L., Nokes-Malach, T. J., and Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. Educational Psychologist, 48(2), 87-113. https://doi.org/10.1080/00461520.2013.775712
- Rise 360 block types (Tabs): https://www.articulatesupport.com/article/Rise-Lesson-and-Block-Types
