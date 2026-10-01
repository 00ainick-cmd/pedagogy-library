# How the CAET course was built: the showcase site

A small public website that explains to instructional designers how Nick Brown's CAET avionics technician course was
made, with live samples of its lesson parts they can try in a browser. It is plain HTML, CSS and JavaScript: no build
step, no server, no framework. GitHub Pages serves this folder as it is.

## What is here

| Path | What it is |
|---|---|
| `index.html` | The front page: the course in numbers, the nine-step method, the ten rules, the demo gallery, links into the real lessons, links into the library, credits and licence |
| `demos/one-card-sort.html` | The one-card sort from Safety Data Sheets: drag, tap or press 1 to 3 to sort five shop moments |
| `demos/picture-options.html` | The picture-option question from Series Circuits: three small schematics as the answers |
| `demos/flip-cards.html` | Flip cards from Pitot-Static Systems: a problem on the front, the protection on the back |
| `demos/real-document.html` | A lookup desk on the eCFR text of 14 CFR 91.411, from The Certification Checks |
| `demos/process-stepper.html` | The antenna installation stepper from Antennas and Coax, with FAA figures and AC 43.13-2B quotes |
| `demos/predict-reveal.html` | Predict, then reveal from Blocked Ports: the airspeed with the static line blocked, computed live |
| `demos/paged-lesson.html` | A six-page sample lesson on the course's pager, with a note on each page about its place in the page order |
| `demos/index.html` | Sends a visitor to the demo gallery on the front page |
| `assets/core/` | A dated snapshot (1 October 2026) of the course's shared lesson parts, copied unchanged. Its own README says where the originals live |
| `assets/site.css` | The Electric Ink tokens and the site's own layout, plus a 16 px text floor on phones |
| `assets/demo.css`, `assets/demo.js` | The parts each course lesson carries locally (flip cards, the document reader, the stepper, predict then reveal, the traced figure), rebuilt once for the demos |
| `assets/img/` | Four public domain FAA figures used by the demos, each credited where it appears |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are, without Jekyll |

Every link inside this folder is relative, so the folder works wherever it sits. Links to the library itself point at
`https://github.com/00ainick-cmd/pedagogy-library`, and links to the real lessons point at the course's public
preview.

## How to run it locally

Either:

- Open `index.html` in a browser, straight from the folder. The fonts load from Google Fonts when you are online;
  offline, the pages fall back to system fonts.
- Or serve the folder and open the address it prints:

  ```
  cd showcase
  python -m http.server 8000
  ```

  Then open `http://localhost:8000/`.

## How it is published

The workflow `.github/workflows/pages.yml` at the root of the repository uploads this folder, and only this folder,
to GitHub Pages on every push to `main` that changes it. In the repository on GitHub, set **Settings, Pages, Build and
deployment, Source** to **GitHub Actions** once. The site then appears at
`https://00ainick-cmd.github.io/pedagogy-library/`.

## The look

The site uses Electric Ink, the dark look every CAET lesson uses (`craft/visual-design/electric-ink-look.md`). It is
dark on purpose: the course has no light theme, and the demos show the lessons as students see them. The only light
surfaces are real documents and FAA figures, which keep their own paper. Pages are checked at 1440 and 390 pixels
wide: no sideways scroll, text at least 16 px on a phone, tap targets at least 44 px, and no motion that is not
needed when the visitor asks for reduced motion.

## Writing rules

The same as the course: plain NEETS-style sentences, plain noun headings, no em or en dashes in our own writing.
Quoted regulation text keeps its own punctuation, and its dashes are written as HTML entities so the library's
pre-push dash check stays clean.

## Changing it

- Edit the HTML files directly. There is no generator to rerun.
- To refresh the shared parts, copy the four files from the course repository into `assets/core/` and update the date
  and checksums in `assets/core/README.md`. Do not edit those files in place.
- Keep every path relative, keep absolute paths from any personal machine out of the site, and look at every page at
  390 pixels wide before pushing.

## Licence

Text CC BY 4.0. Code MIT. FAA figures, FAA handbook text and the eCFR text are US government works in the public
domain. Other images are credited where they appear.
