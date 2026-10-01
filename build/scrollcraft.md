# Scrollcraft: scroll-driven pages

Written 2026-10-01. Which Scrollcraft techniques survive inside a paged, phone-first lesson, with code, is in
[Lesson Craft: scroll techniques in lessons](../craft/media-motion/scroll-techniques-in-lessons.md). This
file is about the tool: what it is, when it fits training, and how to start.

**In plain words:** Scrollcraft is an agent skill that builds a web page where scrolling is the timeline. As you
scroll, a video scrubs frame by frame, sections pin and advance, headlines assemble line by line and the background
shifts. It interviews you first, then designs a page that does not look like a template, then checks its own work by
screenshotting every scroll position. It was made for landing pages. A lesson page cannot hand its scroll to an
animation, so in lessons we keep its one best idea and give it to a slider or step buttons instead.

---

## What it is

- **Scrollcraft** is a Claude Code skill by Nate Herk, MIT licence, in the `nateherk-design` plugin
  ([github.com/nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft)).
- It ships a small engine (`scrollcraft.js` and `scrollcraft.css`), reference guides (devices, feel, taste, uniqueness,
  verify, worlds), and scripts for serving, screenshotting and checking a build.
- **The interview.** Eight questions before any build: the feel in three to five words, the journey section by section,
  the energy curve, how someone should feel at each stage and the one moment they will remember, the one thing no other
  site does, how dense, one unbroken world or distinct scenes, and what assets you already own. The answers go in a
  `BRIEF.md`.
- **Variety by rule.** A page uses at least four kinds of scroll device and never the same one twice in a row. A
  `FINGERPRINTS.md` registry records each finished build (its page grammar, navigation, hero, act shape, close and
  signature move), and a new build must differ from every earlier one on at least four of six of those, so you never
  re-skin your last page.
- **It verifies itself.** A script screenshots the page at many scroll positions and checks contrast, motion and
  "dead scroll" (scrolling that moves nothing).
- Generated photo assets go through a paid image service and are optional. A build from your own footage, photos or
  code-drawn figures costs nothing.

## When to use it in training

| Fits | Does not fit |
|---|---|
| A course or module front page: what the module covers, told as a short scroll journey | Inside a paged lesson: the pager owns movement between pages, and a lesson figure must not fight the student's reading scroll |
| A stand-alone explainer outside the pager, where scrolling through a system is the point | Anything the check depends on: a scroll position has no single state to test |
| A benchmark: building the same subject a second way to raise the bar for the lesson version | A phone-first page that needs Continue in a fixed place |

**The idea to take into lessons:** one progress number from 0 to 1 drives everything in the figure. Scrollcraft
drives it with scroll. In a lesson, drive it with a slider, step buttons or a drag on the figure, so the student owns
the pace and every state can be named and tested. That is a scrubbed explainer, and it answers the review note "make
it more interactive". See [scroll techniques in lessons](../craft/media-motion/scroll-techniques-in-lessons.md).

## How to start

1. In Claude Code, add the marketplace and install the plugin:

   ```
   /plugin marketplace add nateherkai/scroll-craft
   /plugin install nateherk-design@nateherk
   ```

2. Make a working folder for your builds and keep its own `FINGERPRINTS.md` (the skill provides a blank one).
3. Ask for the page in plain words ("a scroll page that walks a technician through an ARINC 429 word"). Answer the
   interview honestly. Mark any answer you guessed, so it can be asked again if the build feels wrong.
4. Let it build, then read its screenshot strip before you read its code. Fix contrast and dead scroll first.
5. After shipping, add the build's row to `FINGERPRINTS.md`.

## Where it lives

| Thing | Where |
|---|---|
| The skill, engine and references | The `scroll-craft` repo (public, MIT), installed as a Claude Code plugin |
| The course team's builds and fingerprint registry | A `scrollcraft` folder in the course team's e-learning workspace (not public) |
| How its techniques translate to a lesson | [Lesson Craft: scroll techniques](../craft/media-motion/scroll-techniques-in-lessons.md) |

## One example: the databus bit clock

The first build, in August 2026, was a trial: rebuild a "Digital Databus Foundations" explainer that the course owner
had judged weak, and see whether it could beat it. Packaging, translation and mastery gating were out of scope.

- **The journey:** the aircraft is already talking to itself; the wiring problem (six systems, thirteen dedicated
  links); the reframe (the job is organizing a conversation, not moving electricity); one need, three databuses (ARINC
  429, CAN, MIL-STD-1553); then one value seen four ways. The original ended on a summary paragraph. The trial ends on
  a fault the learner investigates with the same inspector used all page.
- **The signature move:** the scroll wheel is the bus's bit clock. Hold still on one bit and read all four layers at
  that instant. Scroll backward and the bus runs backward; reverse over the parity bit and watch it recompute. Scroll
  speed is the time dilation, shown as a live readout.
- **Reuse, not rebuild:** the original's working ARINC 429 word encoder (label, data, sign and status, parity) was
  ported, not rewritten.
- **Authored silence:** two quiet spans were kept on purpose. The quiet before the peak, and the real 4 to 12
  microsecond gap in a MIL-STD-1553 exchange while the addressed terminal prepares its answer, labeled on screen as a
  property of the protocol.
- **Cost:** nothing; no generated images.

For a paged lesson, the same bit clock becomes a step control: the student steps the clock forward and back one bit at
a time, and the four layers move together.
