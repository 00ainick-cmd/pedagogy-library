# Glass cockpit landing page: notes

**Marketing pages only, never lessons.** This is the reference for a product landing page or a launch page. A lesson
uses the Electric Ink look (`../../electric-ink-look.md`): paged, one glow, Space Grotesk and IBM Plex. This page breaks
those lesson rules on purpose (scroll driven, a 3D background, its own fonts and palette), which is right for a page
that sells and wrong for a page that teaches.

File: `glass-cockpit-landing.html`, one self-contained page (it loads GSAP and ScrollTrigger from jsDelivr, Three.js as
a module from a CDN, and Saira, Saira Condensed and JetBrains Mono from Google Fonts). It was the ACE Avionics Training
landing page, "Cleared to Pass", kept as the craft reference for this kind of page.

## The idea

**Scrolling is climbing.** A fixed Three.js wireframe terrain sits behind everything and the camera climbs as the
reader scrolls. Each section is a flight phase (Preflight, Departure, Climb, Cruise, Final Approach, Checklist) with
an altitude that rises down the page, and a small altimeter in the corner reads scroll progress as altitude. The hero
says "Cleared to pass."; the call to action says "Scroll to climb."

## What to copy

- **One metaphor, carried through every detail.** The glass cockpit is the structure, not a skin: phase markers,
  altitude readouts, annunciator cards with amber FAULT chips, HUD status chips, a boot sequence ("PWR BUS A ... OK"),
  and the altimeter all belong to the same world.
- **A background that means something.** The terrain and the climb carry the metaphor. If WebGL or the CDN is missing,
  the page falls back silently to a CSS atmosphere (radial glows and scan lines); nothing depends on the 3D.
- **A pinned "how it works" sequence.** The Method section pins and steps through Drill, Diagnose and Adapt, swapping
  the title, the description and a mock panel together, with a progress indicator (GSAP ScrollTrigger pin). Phones
  get a plain stacked version instead (`.method-pin` and `.method-stack`).
- **A small token set, held to.** Near black ink with `--azure`, `--azure-lt`, `--green`, `--amber` and `--red`; three
  fonts (Saira Condensed for display, Saira for text, JetBrains Mono for the instrument labels); and one signature
  detail, a `--chamfer` clip path that cuts a corner off every button, card and panel.
- **Motion with a job:** a masked character reveal on the hero, scroll scrubbed reveals, a readiness gauge that fills
  and counts, mastery bars that fill when they come into view.
- **Progressive enhancement.** Everything reads with JavaScript off (`html.js` gating). The boot preloader has a clock
  timeout and skips itself when the tab is hidden, so animation never blocks the page.
- **Accessibility built in:** a skip link, visible focus rings, ARIA roles on the report table, `aria-expanded` on the
  accordion and the menu button, and a `prefers-reduced-motion` block that sets final states instead of animating.
- **Honest code comments** on the traps (why the second headline line cannot be split into characters: its
  `background-clip:text` breaks inside nested overflow hidden spans; why focus goes to the menu container and not the
  first link).

## Changes made on 2026-10-01

- Removed every em and en dash (49 and 2 in the page, 8 in these notes), rewording each sentence instead of swapping in
  a hyphen.
- Added a phone text floor: at 720 px wide and under, no text is smaller than 16 px, with letter spacing reduced so
  the wider labels still fit. Checked in a 390 px frame: no text under 16 px, no sideways scroll (the ticker strip
  scrolls inside its own clipped band by design).
- Marked the file "marketing pages only, never lessons" in its head.

## Still open

- **Desktop labels are still small.** Above 720 px the instrument labels keep their original 8 to 15 px sizes. Raise
  them to at least 16 px the next time the page is edited.
- **Content, not craft, is the open work.** The page mixes two audiences (CAET and A&P) and should be sharpened around
  one reader and one primary call to action.
- **The call to action links are placeholders** (`[data-cta]` scrolls to pricing). Wire them to the real sign up.
- **The prices on the page are placeholders.** Confirm them against the live product before reusing any of the copy.

## When to reach for it

- A landing page, launch page or product page.
- A "guided journey" page where one metaphor can carry the reader from top to bottom (a flight, a build, a mission).
- Never for reference content or teaching content.
