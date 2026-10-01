---
pattern: interactive-video
family: explore
principles: [testing-effect, pretesting-effect, cognitive-load-theory]
our_component: shared lecture player (core/lecture-player.js, .lecture-block) with chapters, captions and speed; embedded questions are a GAP
status: partial
best_example: any rebuilt lesson's "Lecture" page (#video), for example safety-data-sheets
last_reviewed: 2026-10-01
---

# Interactive Video

## Purpose

A video the student controls and that asks questions along the way: chapters to jump to, captions, speed, and short pause points where the video stops for one question before it goes on. H5P Interactive Video, Evolve's Interactive Video component and Storyline video triggers all do this. Our lecture player does the control part; the questions are not built yet.

## The learner's action

Plays, pauses, scrubs, jumps to a chapter, changes speed, turns captions on. At a pause point (when built): answers one question, reads the feedback, continues.

## When it teaches

- **Learner pacing.** Control over pace and chapters is segmenting for video (Rey et al. 2019; [cognitive-load-theory](../../principles/01-learning-science/cognitive-load-theory.md)). Zhang and colleagues (2006) found that video with random access (jump to any part) produced better learning and satisfaction than linear video.
- **Questions between segments.** Short tests between lecture segments halved mind wandering, tripled note taking and improved final test scores (Szpunar, Khan and Schacter 2013, PNAS). This is retrieval practice placed where attention fades ([testing-effect](../../principles/01-learning-science/testing-effect.md)).
- **A question before a segment.** A prequestion before a video segment improves memory for the content it asks about (Carpenter and Toftness 2017; [pretesting-effect](../../principles/01-learning-science/pretesting-effect.md)). The lesson's Recall page already does this for the whole lecture.

## When it does not

- Questions that only check the student was watching ("What color was the meter?"). Ask about the concept the chapter taught.
- A pause every 30 seconds. One question per chapter, at the chapter's end.
- Forced viewing. Nick's lessons have no gates except the lecture's own Continue, and that page offers "Skip for now." Do not lock the scrub bar.
- Narration plus a wall of identical on-screen text (Mayer's redundancy principle). Captions are for access; the screen should show the graphic.

## Anatomy

- **Player** (built): scene, caption with the speaker's name, Play and Pause, seek bar with time, chapter list, speed 1x, 1.25x, 1.5x, captions on and off, full screen. Space or K to play and pause; arrows 5 s back and on.
- **Lecture page** (built): the player alone on its own page after the objectives, `data-lp-gate="lecture:ended" data-lp-skip="Skip for now"`. Continue appears when it ends.
- **Pause point** (gap): at a chapter end, the video pauses and an [ask-card](ask-card.md) overlays the scene: one question, three options, feedback over the question, Continue resumes. The student can dismiss it and keep watching.
- **Chapter marks** on the seek bar show where pause points sit.

## Mobile and accessibility

- Built: captions, keyboard control, full screen that works on a phone with no full screen API, play starts only from a tap (iOS), pause when the page is hidden or another sound starts, a visible error line with Try again when the audio cannot start.
- For pause points: the overlay is a focus-managed dialog (focus to the question, Escape closes and resumes), the player is paused while it shows, and the question is reachable at 390 px without covering the controls permanently.
- Every pause point question also appears in the lesson's own pages or check, so a student who skips the video does not miss it.

## Our implementation

Built: `frontend/public/core/lecture-player.js` and `lecture-player.css`. In a page:

```html
<section class="section pgr-page" data-beat="Lecture" data-lp-gate="lecture:ended" data-lp-skip="Skip for now" id="video">
  <div class="wrap"><div class="ph"><h2 tabindex="-1">Lecture Video</h2></div>
    <div class="lecture-block" data-lecture="safety-data-sheets"></div>
    <p class="plain vnote">Watch the lecture. Continue appears when it ends. ...</p></div></section>
```

The deck is `frontend/public/aero/hangar/lectures/<id>/lecture.json` with its sections (chapters), video scenes and narration. Lecture videos are not rebuilt in the revamp pass; mismatches go to `LECTURE-NOTES.md`.

GAP, pause points (gap 9 in [gaps.md](gaps.md)). Spec: an optional `checks` array in `lecture.json`, read by the player:

```json
"checks": [{"after": 2, "id": "lec-sds-q1", "q": "Which section of a safety data sheet gives first aid?",
            "opts": ["Section 4", "Section 8", "Section 13"], "ans": 0,
            "fb": ["Right. Section 4 is first-aid measures on every sheet.", "Not quite. Section 8 is protective equipment.", "Not quite. Section 13 is disposal."]}]
```

`after` is the chapter index. At the end of that chapter the player pauses, renders the shared `.ask` markup in an overlay, and resumes on Continue. Record with `AeroLesson.interaction`. Never block the seek bar.

## Strong CAET example

**safety-data-sheets, "Lecture" (`#video`)**: the real lecture deck in the shared player, on its own page, with Continue after it ends and Skip for now. Every rebuilt lesson with a deck uses the same page. Built lesson: `frontend/public/aero/courses/handling-safety/lessons/safety-data-sheets.html`.

## A CAET idea

**Comm Radios**: one pause point at the end of each chapter of the lecture: after the VHF band chapter, "What range of frequencies does aircraft VHF communication use?"; after the modulation chapter, a [picture-option-question](picture-option-question.md) with three small waveforms (an unmodulated carrier, an AM signal, an FM signal). The audio panel itself moved to CAET Advanced, so it stays out. Short, concept-level, and repeated in the lesson pages.

## Common mistakes

- Locking the seek bar until a question is answered.
- Questions about trivia in the picture.
- A question the lesson never revisits.
- Turning the video into a slide deck with Next buttons. Nick rejected slide stepping where motion was the point.

## Sources

- Player: `aero-caet-source/frontend/public/core/lecture-player.js` (header comment lists every feature); page rule in `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
- Szpunar, K. K., Khan, N. Y., and Schacter, D. L. (2013). Interpolated memory tests reduce mind wandering and improve learning of online lectures. PNAS, 110(16), 6313-6317. https://doi.org/10.1073/pnas.1221764110
- Zhang, D., Zhou, L., Briggs, R. O., and Nunamaker, J. F. (2006). Instructional video in e-learning: Assessing the impact of interactive video on learning effectiveness. Information and Management, 43(1), 15-27. https://doi.org/10.1016/j.im.2005.01.004
- Carpenter, S. K., and Toftness, A. R. (2017). The effect of prequestions on learning from video presentations. Journal of Applied Research in Memory and Cognition, 6(1), 104-109. https://doi.org/10.1016/j.jarmac.2016.07.014
- Rey, G. D., et al. (2019). A meta-analysis of the segmenting effect. Educational Psychology Review, 31, 389-419. https://link.springer.com/article/10.1007/s10648-018-9456-4
- H5P Interactive Video: https://h5p.org/interactive-video
- Evolve course components (Interactive Video): https://clients.intellum.com/student/path/853033-course-components
- Rise 360 Q4 2025 release (AI-generated captions in video): https://www.articulate.com/blog/articulate-360s-newest-feature-releases-q4-2025/
- WAI-ARIA APG, Dialog (modal) pattern: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
