# Pedagogy Library

How to build technical training that people remember and can use on the job: the learning science, the lesson craft,
the build method and tools, and live samples. Written by Nick Brown of the Aircraft Electronics Association (AEA) from
the work of building the CAET course, an online course for entry-level avionics technicians.

**Start with the showcase:** https://00ainick-cmd.github.io/pedagogy-library/ explains how the CAET course was built and
lets you try its lesson parts in a browser.

## What is in this library

| Section | What it holds | Start here |
|---|---|---|
| `principles/` | 66 chapters of evidence-based learning science, instructional design, assessment, delivery, motivation and adaptive tutoring. Each chapter has the evidence, the effect size where one exists, when to use it, when not to, and an avionics lesson example. An AI tutor runtime reads these chapters directly. | [principles/README.md](principles/README.md) |
| `craft/` | How a lesson page is made: 31 interaction patterns (the Rise-style blocks and more), media, motion, simulations and 3D, history and incident pages, and the visual design (the Electric Ink look). | [craft/README.md](craft/README.md) |
| `build/` | The method and tools behind the CAET course: plan, brief, page copy, build, checks, test, publish, review, lecture. Guides to the lesson format, the Circuit Lab simulations, CardCraft, HyperFrames video, Scrollcraft, 3D models and the training hangar. | [build/README.md](build/README.md) |
| `skills/` | Agent skills you can install in Claude Code: audit a lesson against gold cards, author a card, ingest your own writing voice. Gold cards, references and a lint tool come with them. | [skills/README.md](skills/README.md) |
| `showcase/` | The public showcase website: the method, the ten rules, live demos, and links into real lessons. | [showcase/README.md](showcase/README.md) |

## The ten rules in one place

1. Write like a Navy NEETS module: plain technical instruction, define every term the first time, no cute headings.
2. One idea per page. Pages move left to right; nothing to scroll past.
3. Every page teaches with an interaction or a graphic, chosen for the content, never two plain paragraphs in a row.
4. Teach from the real document: the regulation, the handbook figure, the manufacturer's data. Let the learner tap its parts.
5. Keep the real simulations and schematics. Never replace a working sim with a cartoon.
6. Ask with pictures where pictures teach: schematics, meter faces, real parts as answer options.
7. Tell history and real incidents from the official record, tied to what a technician would have caught.
8. Use 3D only where the shape of the object teaches, and make it run on a phone.
9. Build for the phone first: 16 px minimum text, 44 px touch targets, no sideways scroll.
10. The subject expert reviews every lesson, page by page, and signs off each fix.

## Install the skills

```bash
npx skills add 00ainick-cmd/pedagogy-library
```

Or, in Claude Code: `/plugin marketplace add 00ainick-cmd/pedagogy-library`, then install `pedagogy-library`.

## Check the library

```bash
python principles/_schema/validate.py principles
```

## Licence

Written content (the chapters, notes and guides) is licensed under Creative Commons Attribution 4.0 (CC BY 4.0): reuse
it with credit to Nick Brown, Aircraft Electronics Association. Code (scripts, the showcase site's code, the skills'
tools) is under the MIT licence in `LICENSE-CODE`. FAA handbook figures and the eCFR text are US government works in
the public domain. Other images are credited where they appear, with their own licences.

## History

This library began in April 2026 as the pedagogy reference for an AI tutor (the 50 original chapters) and grew in
October 2026 into the home of everything used to build the CAET course. It absorbed the public `html-training-craft`
repo (its skills, gold cards and references are in `skills/`) and the older AERO art library (its useful parts are in
`craft/visual-design/`).
