---
pattern: hotspot-on-real-document
family: explore
principles: [transfer-of-learning, testing-effect, dual-coding, cognitive-load-theory]
our_component: lesson-local regulation reader (.rr) and sheet reader (.reader); not yet in lesson-parts
status: local
best_example: certification-checks, page "91.411 test" (#test411); safety-data-sheets, page "Reading" (#reader)
last_reviewed: 2026-10-01
---

# Hotspot on a Real Document

## Purpose

Put the real regulation, form, data sheet, table or logbook page on screen, word for word, and let the student tap each part to read what it means. The student learns to read the document a technician actually uses, not a summary of it. Nick asked for this by name: "He liked reading the real references and clicking on parts of the regulations" (LESSON-BUILD-BRIEF.md).

## The learner's action

1. Reads the real text: a paragraph of 14 CFR, a block on FAA Form 337, a section of a Safety Data Sheet, a row of an AC 43.13-1B table.
2. Taps a paragraph, block or row. A plain explanation opens directly under it.
3. Works a short desk of guided lookups: "Select the paragraph that decides whether a VFR-only airplane needs the 91.411 test." A wrong pick gets a hint. A right pick explains why.
4. Optionally searches the text for a word or a number, or opens the full page of the real document.

## When it teaches

- **Transfer.** The closer practice is to the real task, the more of it carries to the job. Reading the real 91.411 is the job. A paraphrase is not ([transfer-of-learning](../../principles/01-learning-science/transfer-of-learning.md)).
- **Retrieval, not rereading.** The lookup desk asks the student to find the answer in the text before it is explained. That is a retrieval attempt with feedback, which beats rereading ([testing-effect](../../principles/01-learning-science/testing-effect.md); Roediger and Karpicke 2006).
- **Spatial contiguity.** The plain explanation opens under the exact paragraph it explains, so the student never holds the rule in memory while hunting for its meaning. Words placed beside the part they describe beat words placed apart (Ginns 2006 meta-analysis; Mayer, spatial contiguity).
- **Load control.** Long regulations overwhelm a first-week student. Tapping one paragraph at a time is learner-paced segmenting of a text that cannot be shortened, because it is the law ([cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md); Rey et al. 2019).
- **Searching is a real interaction type.** Moreno and Mayer (2007) list searching among the forms of interactivity that can prompt real cognitive work, when the search has a goal. The lookup desk gives it one.

## When it does not

- The document is not one the student will use. A regulation the technician never opens is trivia. Teach the rule plainly and cite it.
- The text is long and has no lookups. Tapping thirty paragraphs with no task is reading with extra clicks. Give two to five lookups with a job behind each.
- The concept is not taught yet. A student who does not know what a static system is cannot use 91.411(a)(2). Teach the concept page first, then the reader (pretraining, Mayer, Mathias and Wetzell 2002).
- The real page is a scanned image with text too small to read on a phone. Use the extracted text in the reader and offer the image as "open the real page."

## Anatomy

- **Desk** (left on desktop, top on phone): status ("Lookup 2 of 4"), the task, a live line for hints and verdicts, a Next lookup button, dots for progress.
- **Sheet**: the document's own title block and citation, tabs if more than one document (91.413 and Appendix F), a search box with Next match and a match count, then every paragraph as a button.
- **Paragraph button states**: closed, open (explanation showing), target found (green edge with the reason), wrong pick (brief amber edge with a hint, then it closes).
- **Explanation**: one to three plain sentences in the lesson's voice under the quoted text. The rule is the quote; the explanation never restates it as a new rule.
- **Real page link**: a small thumbnail button ("Section 2 on the real sheet, page 1 of 7") that opens the page image in a dialog at the right height, with a zoom toggle.
- **Credit line** under the reader: source, edition or "up to date as of" date, and a link to the official page.

## Mobile and accessibility

- Every paragraph is a real `<button>` with `aria-expanded` and `aria-controls` pointing at its explanation. Enter and Space open it.
- The desk's live line is `aria-live="polite"`, so hints and verdicts are read out.
- At 390 px the desk sits above the sheet and stays short. The sheet scrolls with the page, not inside a small box.
- Tables (Appendix E Table I) sit in their own horizontal scroll wrapper (`.rr-tscroll`), with each row's first cell as a row header button, so the page itself never scrolls sideways.
- Tap targets are whole paragraphs, far larger than the 24 px WCAG 2.2 minimum.
- The real page dialog is a native `<dialog>` opened with `showModal()`. Escape closes it and focus returns to the button that opened it.
- No hover-only content. Hover does not exist on a phone (NN/g tooltip guidelines).

## Our implementation

Lesson-local today, built three times: the regulation reader in certification-checks, maintenance-records and repair-stations, and the sheet reader in safety-data-sheets. Not in `frontend/public/core/lesson-parts.*`. Promoting it to a shared part is gap 1 in [gaps.md](gaps.md).

How the regulation reader is built (certification-checks):

- `fetch-ecfr.py` pulls the current text from the eCFR API (`https://www.ecfr.gov/api/versioner/v1`) and writes `ecfr.json`, paragraph by paragraph, word for word, with the eCFR date. Nothing is retyped.
- `regs.py` holds `GLOSS` (a plain explanation for every paragraph id) and `READERS` (which documents each reader shows and its lookups). `assemble.py` refuses to build if any paragraph has no explanation.
- The regulation keeps its own punctuation, including its dashes. `assemble.py` records every quoted string so the lesson's no-dash check skips it.

Data shape:

```json
{"docs": {"91.411": {"cite": "14 CFR 91.411", "head": "91.411 Altimeter system ...",
   "items": [{"kind": "p", "id": "a1", "label": "(1)", "lvl": 2, "html": "(1) Within the preceding 24 calendar months, ..."}]}},
 "gloss": {"91.411": {"a1": "This is the 24-month test. ..."}},
 "lookups": [{"doc": "91.411", "ans": "a", "task": "An airplane is flown only under VFR. Select the paragraph that decides whether it needs the 91.411 test.",
              "hint": "Look for the paragraph that says when the rule applies.", "why": "Paragraph (a) applies the rule only under IFR in controlled airspace."}]}
```

Markup it produces (shortened):

```html
<div class="rr" id="rr411">
  <aside class="rr-desk"><div class="rr-status">Lookup 1 of 2</div><p class="rr-task" tabindex="-1"></p>
    <p class="rr-live" aria-live="polite"></p><button class="btn active rr-next" hidden>Next lookup</button></aside>
  <div class="rr-sheet">
    <div class="rr-find" role="search"><input class="rr-q" type="search" placeholder="A word or a number"/>...</div>
    <article class="rr-doc" data-doc="91.411">
      <div class="rr-item lvl2"><button class="rr-p" data-p="a1" aria-expanded="false" aria-controls="rr411-91411-a1">
        <span class="rr-lab">(1)</span><span class="rr-t">Within the preceding 24 calendar months, ...</span></button>
        <div class="rr-gloss" id="rr411-91411-a1" hidden><p>This is the 24-month test. ...</p></div></div>
    </article></div></div>
```

Close relatives in the same family:

- **Form with numbered blocks**: maintenance-records "Form 337" (`#form337`): front and back tabs, numbered hotspots on the real form image, a panel that explains each block.
- **Annotated record entry**: certification-checks "Records" (`#records`): a sample logbook entry with numbered buttons (`.lb-entry .em`) inside the text; each opens what that part of the entry does under 14 CFR 43.9.
- **Real page viewer**: safety-data-sheets `button.realpg[data-sdsv][data-y]` opens the real PDF page image in a `<dialog>` scrolled to the section, with zoom.

## Strong CAET example

- **certification-checks, "91.411 test" (`#test411`)**: the current eCFR text of 14 CFR 91.411, every paragraph tappable, two lookups, search, and a link to ecfr.gov. Built lesson: `frontend/public/aero/courses/regulations/lessons/certification-checks.html`.
- **safety-data-sheets, "Reading" (`#reader`)**: five job lookups ("Which section tells you what gloves to wear?") answered on the real Safety-Kleen PD-680 Type II sheet, with each section's own words and a link to its real page. This is Nick's model lesson.

## A CAET idea

**Wire Selection** on the real AC 43.13-1B wire tables. Put Table 11-6 (Tabulation Chart, Allowable Voltage Drop), Table 11-9 (Current Carrying Capacity and Resistance of Copper Wire) and Figure 11-2 (Conductor Chart, Continuous Flow) on screen as the real figures. Each column header, axis and curve is a hotspot. Lookups: "A 28 V circuit, 20 A continuous, 18 feet of run in free air. Select the column you read first." Nick asked for exactly this: "They need to use the wire chart" (LESSON-BUILD-BRIEF.md).

## Common mistakes

- Retyping the regulation. A typo in a rule is a wrong rule. Fetch it and store the date.
- Explanations that restate the paragraph in harder words. Say what it means on the job, in one to three sentences.
- A reader with no task. Always give lookups with a reason the technician would need that paragraph.
- Hiding the explanation in a hover tooltip or a far-away panel. Open it under the paragraph.
- Removing the regulation's own dashes or reformatting its numbering. The quote stays exact; only our writing follows the house rules.
- Forgetting the credit line and the "up to date as of" date.

## Sources

- Nick's direction: `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Reader build: `aero-caet-source/tools/curriculum/revamp/examples/certification-checks/` (`fetch-ecfr.py`, `regs.py`, `assemble.py` function `reader()`); `.../examples/safety-data-sheets/` (`content.py` LOOKUPS, `script.tpl` reader and viewer)
- eCFR, 14 CFR 91.411: https://www.ecfr.gov/current/title-14/section-91.411
- Roediger, H. L., and Karpicke, J. D. (2006). Test-enhanced learning. Psychological Science, 17(3), 249-255. https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Ginns, P. (2006). Integrating information: A meta-analysis of the spatial contiguity and temporal contiguity effects. Learning and Instruction, 16(6), 511-525. https://doi.org/10.1016/j.learninstruc.2006.10.001
- Rey, G. D., et al. (2019). A meta-analysis of the segmenting effect. Educational Psychology Review, 31, 389-419. https://link.springer.com/article/10.1007/s10648-018-9456-4
- Mayer, R. E., Mathias, A., and Wetzell, K. (2002). Fostering understanding of multimedia messages through pre-training. Journal of Experimental Psychology: Applied, 8(3), 147-154. https://doi.org/10.1037/1076-898X.8.3.147
- Moreno, R., and Mayer, R. (2007). Interactive multimodal learning environments. Educational Psychology Review, 19(3), 309-326. https://doi.org/10.1007/s10648-007-9047-2
- Rise 360 Labeled Graphic block: https://www.articulatesupport.com/article/Rise-How-to-Use-Labeled-Graphic-Blocks
- H5P Image Hotspots: https://h5p.org/image-hotspots
- NN/g, Tooltip guidelines: https://www.nngroup.com/articles/tooltip-guidelines/
- WCAG 2.2, Target Size (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- WAI-ARIA APG, Disclosure pattern: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
