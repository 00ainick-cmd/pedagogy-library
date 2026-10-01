# Testing and publishing

Written 2026-10-01. Paths are in the CAET course repo (`aero-caet-source`, private) unless another repo is named. The
commands are written for a Unix-style shell; in PowerShell, set a variable first (`$env:PORT=8777`) and then run the
command.

**In plain words:** a lesson is not done when it builds. It is done when a script has walked every page on a desktop
and a phone, used every interaction the three ways a student can (drag, keyboard, tap), passed the check, and found no
errors, and when a person has looked at a picture of every page. Then the owner, and only the owner, publishes it to the
preview site. This library has its own, much simpler, publishing step at the end.

---

## The local test server

```
PORT=8777 node tools/hangar/tests/serve.mjs
```

It serves `frontend/public` as the web site, the way the hosted preview does: a path that is not a file gets the site's
home page with status 200, so tests meet the same trap students would. A few paths that exist only in a built release
are read from the preview build. Use your own port, run the server in its own terminal or in the background, and stop
it when you finish. Several builders often run at once, each on a different port.

## Unit tests

```
node --test tools/hangar/tests/unit/*.test.js
```

About 47 files: the hangar's logic (floor plan, walls, class order, progress, study clock, test engine), the room
list, the lecture data, the autopager, the generated course copies and more. Name the files as above; pointing
`node --test` at the folder fails on Windows.

Other repos and tools have their own: the Circuit Lab (`node dev/test-solver.js`, `test-presets.js`,
`test-harness.js`; see [sims-circuit-lab.md](sims-circuit-lab.md#8-tests-in-the-circuit-lab-repo)), the tool models
(`node --test tools/tools3d/tests/*.test.js`), and the lecture builder (`python -m unittest` in its folder).

## Browser tests

The browser tests drive the installed Chrome with Playwright (`playwright-core`, installed once with `npm ci` in
`tools/hangar/`). By default they use a software renderer, so they run on any machine; `HANGAR_GPU=1` uses the graphics
card, for true-look screenshots, 3D scenes and frame rates.

```
HANGAR_BASE=http://127.0.0.1:8777 HANGAR_GPU=1 node tools/hangar/tests/browser/lesson-<id>.mjs
HANGAR_BASE=http://127.0.0.1:8777 HANGAR_GPU=1 node tools/hangar/tests/browser/checkflow.mjs
HANGAR_BASE=http://127.0.0.1:8777 HANGAR_GPU=1 node tools/hangar/tests/browser/lessondone.mjs
HANGAR_BASE=http://127.0.0.1:8777 HANGAR_GPU=1 node tools/hangar/tests/browser/autopager.mjs
```

Each prints PASS or FAIL with the reasons.

### The lesson's own test

Every rebuilt lesson has a test, `tools/hangar/tests/browser/lesson-<id>.mjs`, written on the model of the approved
lesson's test (`sds-lesson.mjs`). About 42 lessons have one. It runs at desktop size (1280 by 800) and phone size (390
by 844, touch) and checks:

| Area | What the test proves |
|---|---|
| Order | The page list and its order: the problem, the objectives, the lecture as page 3, recall, the teaching pages, the check, the field card |
| Paging | Continue on every page; on the lecture page, only after the lecture ends or "Skip for now"; no other page reachable by scrolling |
| Interactions | Every sort placed by drag, by keyboard and by tap; every hotspot, flip card, reader, scenario and accordion by click and by keyboard; every 3D scene builds on entry, stops on leaving, and shows its still picture without WebGL |
| The check | Completes with the right answers; a wrong answer shows feedback over the question; the lesson can be marked complete |
| The page | No console errors, no sideways scrolling at 390 pixels, no tap target under 44 pixels, every image loads, no gap under Continue |
| The words | No em or en dash, none of the rejected phrases, no lesson codes, no `[VERIFY]` mark, plain noun headings |
| The lesson's own promises | For example, that the real document is credited on every page that shows it |

The shared tests catch problems across lessons: `checkflow.mjs` (the check's flow), `lessondone.mjs` (completion), and
`autopager.mjs` (every lesson and lab in the room list is paged once, never twice).

### The revamp tools

```
node tools/curriculum/revamp/shoot-pages.mjs <lesson.html> <outDir> both          # one picture per page, desktop and phone
node tools/curriculum/revamp/test-walk.mjs <lesson.html> <answers csv> phone       # a student's read-through
```

`test-walk.mjs` must report the lesson complete with a green check on every page.

## Looking at every page

Take a phone screenshot of every page and look at each one. Fix clipped text, labels that overlap or sit on lines,
small tap targets, blank figures and empty gaps. Then do the same at desktop size. A passing test does not see a bad
layout; only looking does. The phone screenshots go into the review packet for the owner
([method.md](method.md#step-6-test)).

## Text checks

Search the built lesson before handing it over:

```
rg -n '\x{2013}|\x{2014}|&[mn]dash;' <lesson.html>            # en and em dashes, as characters or entities
rg -n '\[VERIFY\]' <lesson.html>                              # unconfirmed facts
rg -n -i 'key takeaways|training scene only' <lesson.html>    # rejected phrases (extend the list)
```

The check bank script (`apply-checks.py`) refuses any question with an em or en dash.

---

## Publishing the preview

Publishing is the course owner's step. Builders commit to their own branch and hand over; merging into the preview
branch needs the owner's yes each time.

The preview is built from **committed** files only, into a separate deploy repo that a static host serves.

```
node tools/hangar/publish-preview.mjs --dry-run   # show what would change; writes nothing
node tools/hangar/publish-preview.mjs --push      # build, commit and push; the host redeploys a few minutes later
```

What the script does:

1. Copies the hangar into the preview build. A file deleted from the source is deleted there too.
2. Refreshes the curriculum through the course's release script: the lessons and sim labs, the shared lesson scripts,
   and the Avionics Circuit Lab, rebuilt from its own repo. If that repo is missing, it stops before changing anything.
3. Adds the hangar's own course and the topic courses to the preview's course catalog, so the learning record saves
   progress in them.
4. Checks the site fits the host's limits: under 256 MiB in all and no file over 25 MiB. If not, nothing is committed.
5. Commits on the preview branch, naming the source commit. With `--push` it first checks that nobody else has pushed.

**The same step from GitHub.** A workflow in the course repo can run the same script on a GitHub server whenever work
lands on the preview branch. It is safe by default: every run is a dry run until the owner turns publishing on with a
repository variable, and it needs a fine-grained access token stored as a repository secret, with write access to the
deploy repo and the Circuit Lab repo only.

**A private preview first.** For a phone review before publishing, `tools/curriculum/revamp/bundle-preview.py` bundles a
rebuilt lesson, its lecture and its assets with relative paths into a private hosted page the owner opens on a phone.

---

## Publishing this library

This library is a public GitHub repo of Markdown files.

### Browsing on GitHub

GitHub shows every `.md` file as a formatted page, follows the relative links between them, and draws Mermaid
diagrams (like the one in [README.md](README.md)). For many readers, the repo itself is the site; nothing more is
needed.

### A GitHub Pages site

To give the library its own web address:

1. In the repo on GitHub: **Settings, Pages, Build and deployment, Source: Deploy from a branch**, then choose `main` and
   the root folder, and save.
2. GitHub builds the site with Jekyll a minute or two after each push. Links between `.md` files are converted to the
   built pages automatically, and a folder's `README.md` becomes its index page.

Four things to know before turning it on:

| Gotcha | What happens | What to do |
|---|---|---|
| Folders whose names start with an underscore | Jekyll skips them, so `_schema/` and `_plan/` would not be published | List them under `include:` in a `_config.yml` at the root, or leave them unpublished on purpose |
| Double curly braces, or a curly brace followed by a percent sign | Jekyll reads them as template code and blanks or breaks the text, even inside code blocks | Keep them out of notes (this section is written without them), or write the braces as HTML entities in prose |
| Mermaid diagrams | Drawn on github.com, but shown as plain code on a Jekyll site | Add the Mermaid script to the site layout, or keep a plain list beside each diagram (the build README does) |
| Build clutter | Test caches and compiled Python files would be published | Add `.pytest_cache/` and `__pycache__/` to `.gitignore` |

A minimal `_config.yml`:

```yaml
title: Pedagogy Library
description: Learning science, lesson craft and the build method behind the CAET avionics course.
include:
  - _schema
exclude:
  - "**/.pytest_cache"
  - "**/__pycache__"
```

### Before every push

This library is public. Before each push, check that nothing private went in:

```
rg -n -i 'c:[\\/]users|onedrive - [a-z]' . # absolute paths on a personal machine
rg -n '\x{2013}|\x{2014}' .                    # en and em dashes
```

Also read new files for student data, passwords or tokens, email addresses, and personal notes. Notes describe the
method; they do not carry anyone's private records.

The library's chapter validator (`_schema/validate.py`) checks every Markdown file against the principle chapter
schema. Practice guides such as this `build/` folder are not chapters, so the validator needs `build` in its list of
excluded folders, as it already has for `08-lesson-craft`.
