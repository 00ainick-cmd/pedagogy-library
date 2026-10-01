# Swap Protocol Checklist

When you build a card for a new lesson, you copy the card's interaction pattern and AERO
register, then swap only the content. This checklist tells you exactly what to change,
what to leave alone, and what to verify before shipping.

Pick the card first. See [00-job-to-card-chooser.md](00-job-to-card-chooser.md).
For the right sequence of cards in a lesson, see [03-pedagogy-recipes.md](03-pedagogy-recipes.md).

---

## ALWAYS changes per lesson

These items are card-neutral. Every new lesson gets new versions of all of them.

- [ ] Headline and body wording rewritten for the new topic
- [ ] All figures and data replaced with real values from the new source
- [ ] All diagram or chart artwork redrawn or re-labeled for the new content
- [ ] Any photograph or scene image replaced with one appropriate to the new lesson
- [ ] The cited source updated to the source for the new content
- [ ] Narration captions rewritten to match the new audio script
- [ ] Module label / eyebrow updated to the correct lesson identifier
- [ ] Hotspot blurbs, tile fronts/backs, step chips, or option text replaced for the new topic

---

## NEVER changes

These items are the card's identity. Do not touch them when swapping content.

- [ ] Interaction pattern (reveal order, tap-to-flip, drag-to-wipe, etc.) is unchanged
- [ ] Reveal-to-caption sync logic is unchanged (caption `at` times are re-timed to new audio,
  but the sync mechanism itself stays)
- [ ] Mastery gate logic is unchanged (all tiles open, correct sequence, answer submitted)
- [ ] AERO visual register is intact: warm paper `#f4f0e7`, near-navy ink `#23201b`,
  green accent `#145c4f`, Newsreader display, Hanken Grotesk body, technical-drawing motifs

---

## SOURCING carries over

Swapping content is not license to invent content.

- [ ] Every number swapped in is real and cited on screen
- [ ] Every quote swapped in is verbatim and attributed to the real source
- [ ] Every date, accident detail, or regulatory citation is verified before it goes in
- [ ] If the new content is illustrative (not a measured value), it is labeled as such on screen
- [ ] No rounded-up figures, invented statistics, or composite experts

---

## Before you call it done

Run this gate on every card before it ships. Fix every failure; never ship around one.

- [ ] Zero em dashes (--) and zero en dashes by code point (run a search, do not rely on eye)
- [ ] Body text is at least 18px; caption text is at least 16px
- [ ] Body text contrast is at least 7:1; heading contrast is at least 4.5:1, including citation lines
- [ ] Single self-contained file: CSS and JS inline; only Google Fonts and licensed photos external
- [ ] Rendered and looked at: headless screenshot at every reveal step, answered and unanswered,
  desktop and phone; a human or agent has looked at the render, not just the code
- [ ] Keyboard operable: all interactive targets reachable and triggerable without a pointer
- [ ] Focus-visible on all interactive elements
- [ ] ARIA labels on all informative SVG; alt text on all informative images
- [ ] `prefers-reduced-motion` honored (no autoplay animation without a pause option)
- [ ] No fixed viewport heights on content containers (use `min-height`, not `100vh`)
- [ ] Item-writing rules met for any graded check in the card (see [02-item-writing.md](02-item-writing.md))
