---
id: history-page-pattern
title: History Page Pattern
section: 08-lesson-craft/history-incidents
applies_to: every CAET avionics lesson built to LESSON-BUILD-BRIEF.md
last_reviewed: 2026-10-01
status: draft for Nick's review
---

# History Page Pattern

How to build one history page in a CAET lesson so that it teaches, not decorates. A history page tells the story of one
person, one unit or one milestone, and ends at the student's bench: the meter, the screen, the procedure or the unit name
the student uses this week.

This pattern sits inside the page order in `curriculum/revamp-kit/LESSON-BUILD-BRIEF.md` (page 6, "History only where a
person, unit or law earns it") and Nick's 2026-10-01 request for more history: "the person, the problem they faced, what
they found, why a technician still uses it", with a credited public-domain portrait or photo.

## 1. When a lesson earns a history page

Give a lesson a history page only when at least one of these is true. If none is true, leave the page out. Nick asked for
more history, not for history on every lesson.

| Test | Example that passes | Example that fails |
|---|---|---|
| A unit or a part on the student's bench carries the person's name | The volt (Volta), the ampere (Ampère), the henry (Joseph Henry), the pitot tube (Henri Pitot), the Kollsman window | A famous name with no tie to the lesson ("Edison" on a resistor color code page) |
| The person's experiment is the concept of the lesson, done for the first time | Faraday's coil and magnet (induction), Faraday's foil room (shielding bags), Foucault's gyroscope | A biography with no experiment in it |
| A milestone explains why the system is built the way it is today | MIL-STD-704 and the 400 Hz bus, the four-course radio range before VOR, ARINC 429 in 1977 | A date list with no "this is why" |
| The story corrects a mistake students make | Tesla and Westinghouse explain why voltage is stepped up (students think AC "travels farther") | A story that adds a new term the lesson never uses |

The research behind this test: interesting material that is not tied to the learning goal (a "seductive detail") lowers
learning (Harp and Mayer, 1998; Rey, 2012, meta-analysis). History earns its page only when it carries the concept.

## 2. The four beats

Every history page tells four things, in this order. Each beat is one to three plain sentences.

1. **The person.** Name, nationality, what they did for a living, life years ("1850 to 1918"). One true human detail
   if a source gives one (Faraday was a bookbinder's apprentice who read the books he bound). No adjectives such as
   "genius", "legendary" or "father of".
2. **The problem they faced.** What nobody could do or explain yet, in the student's terms. ("Nobody could see the shape
   of a voltage that reverses many times a second.")
3. **What they found.** The experiment or the invention, told as actions and results: what they built, what they did
   to it, what they saw. ("He moved a magnet in and out of a coil and measured a current in the coil.")
4. **Why a technician still uses it.** The line from their bench to the student's bench: the unit, the instrument,
   the part or the rule. This beat is the reason the page exists, and it gets its own sentence or its own card.

A page that cannot write beat 4 in one plain sentence is not a history page. Cut it or fold it into a one-line credit on
a concept page (the Blueprint does this for Kirchhoff on the Parallel Circuits page).

## 3. Page anatomy

The lesson pager gives each page one idea. A history page has these parts, top to bottom:

1. **Hero.** Heading is a plain noun: the person's name ("Karl Ferdinand Braun"), or the subject ("The Kollsman Window",
   "The War of the Currents"). The lede is one or two sentences that state the fact and the year.
2. **History card** (`article.hist` in the existing lessons): the portrait with its credit, the year, the "who" line
   (name, role, life years), and beats 1 to 3 in two short paragraphs.
3. **One interaction** (pick the one that teaches this story; see section 4).
4. **Beat 4** as a plain line or a rule box: why a technician still uses it.
5. **Optional ask card** that ties the story to an objective (predict, then feedback over the question).
6. **Credit and sources line**: the portrait credit (linked to its file page) and the sources for every fact on the page.

Length: about 120 to 180 words of body text, so the page fits one phone screen and a little more (390 by 844). If the
story needs more, make it two pages (the AC Principles lesson does this: Faraday early, Edison, Tesla and Westinghouse late).

Placement: the history page sits where its concept is taught, not at the end of the lesson. Faraday sits beside the
induction page; Kollsman sits beside the altimeter setting page. A story that explains the whole system (MIL-STD-704,
the four-course range) can open the aircraft pages.

## 4. Interactions that fit a history page

Use one. Do not repeat the same one in neighbouring lessons (Nick: "Keep every lesson fresh, not a template").

| Interaction | Use it when | Built example |
|---|---|---|
| Timeline (year buttons or Next and Back) | The story is a sequence of three to six dated events | AC Principles: 1882, 1888, 1893, 1896 |
| Replay of the experiment | The experiment is simple enough to run in an SVG or canvas sketch and shows the lesson's concept | Capacitors and Inductors: Joseph Henry's coil, close and break the switch, see the spark |
| Then and now compare | The old device and today's device do the same job in a different body | Braun's tube beside a digital scope (filled example below); the four-course range beside a VOR needle |
| Unit flip cards | Two or more units are named for people in the same lesson | Capacitors and Inductors: the farad and the henry |
| Drawing of the apparatus | The original apparatus explains the concept better than a portrait | Electrostatic Discharge: Faraday's foil room, drawn from his own account |
| Ask card | The story answers a "why" the student might ask | AC Principles: why Edison's DC could serve only the area around the station |

## 5. Writing rules

These are the brief's rules applied to history. Nick has rejected cute writing three times; these rules matter most.

- State the fact, then explain it. Complete sentences, present tense for what is true today, past tense for what happened.
- Headings are plain nouns. Never a slogan, a pun, a question or a dramatic fragment ("The Spark That Changed Everything"
  is rejected; "Joseph Henry" is right).
- Define every term the first time it appears, in one plain sentence. Spell out every acronym on first use.
- Do not use a concept before the lesson teaches it. Check the Blueprint prerequisites: no "induction" on a page that
  comes before induction is taught.
- No invented dialogue, no invented thoughts ("Faraday wondered..."), no "imagine", no scene setting that a source does
  not support. Quote a person only from a published source, and cite it.
- "First" only when a reliable source says first. Prefer "one of the first" or name the claim's source when sources differ.
- Dates in the form "24 September 1929". Life years as "1791 to 1867". No em dashes or en dashes anywhere.
- No chips or tags that are not lesson content ("history", "fun fact", "did you know").
- Keep the person human and accurate: no heroes and villains. The war of the currents is told as two systems and a
  physics reason, not as a feud.

### Myths to keep out

Check the story against these before you write it.

| Myth | What the sources support |
|---|---|
| Franklin's kite was struck by lightning | Franklin's published account says charge from the storm cloud electrified the wet kite string, and sparks streamed from a key on the string when a knuckle came near; it does not describe a strike ("The Kite Experiment", Pennsylvania Gazette, 19 October 1752; Founders Online, National Archives, https://founders.archives.gov/documents/Franklin/01-04-02-0135). Historians also note the account is in the third person and the exact date of the flight is unknown, so do not give one. |
| Tesla invented AC | AC with transformers was already lighting Main Street in Great Barrington, Massachusetts, on 20 March 1886, a system built by William Stanley for Westinghouse (IEEE Milestone, Alternating Current Electrification, 1886, https://ethw.org/Milestones:Alternating_Current_Electrification,_1886). Tesla's 1888 patents covered the polyphase AC induction motor and system, which Westinghouse licensed (U.S. Department of Energy, "The War of the Currents: AC vs. DC Power", https://www.energy.gov/articles/war-currents-ac-vs-dc-power). Say "Tesla designed AC motors and a complete AC power system", as the AC Principles lesson does. |
| Doolittle made the first instrument landing with an ILS | The 24 September 1929 flight used a radio range course shown on a vibrating-reed indicator, marker beacons, a Kollsman altimeter and a Sperry artificial horizon and directional gyro (IEEE Milestone, First Blind Takeoff, Flight and Landing, 1929, https://ethw.org/Milestones:First_Blind_Takeoff,_Flight_and_Landing,_1929). It had no glideslope, so call it the first blind takeoff, flight and landing, not an ILS approach. |
| Marconi alone invented radio | Marconi shared the 1909 Nobel Prize in Physics with Karl Ferdinand Braun "in recognition of their contributions to the development of wireless telegraphy". Say what each one did. |

## 6. Accuracy rules

- Check every date, number and claim against two sources, at least one of them institutional or primary (the person's
  own paper, a university, a national laboratory, the Smithsonian, IEEE ETHW, NASA, the FAA, a national archive or a
  major encyclopedia). Wikipedia is a place to find sources, not a source to cite.
- When sources disagree, use the wording both support ("in the early 1880s" if one says 1881 and one says 1882), or give
  the source of each.
- Never ship a [VERIFY] mark. Check it or cut it.
- Keep the source list in the lesson's page copy file, and put a short sources line on the page.

## 7. The portrait

- One portrait or period photograph per person, credited on the page, licence checked on the file page. Follow
  `image-licensing.md` in this folder.
- Alt text describes what is in the picture ("Black-and-white photograph of a man with a beard in a dark coat and a high
  collar"), not who the person is (the page already says that).
- No portrait exists, or none is free: draw the apparatus instead (Faraday's foil room) or use a period figure from a
  public-domain paper or a US government work. Never use a modern illustration of the person, an AI-generated likeness or
  a museum photo whose licence is unclear.
- Credit line format (the existing lessons use it):
  `Portrait: <a href="FILE PAGE URL">Name</a>, photograph by AUTHOR, DATE, SOURCE INSTITUTION. Public domain, via Wikimedia Commons.`

## 8. Quality check before hand-over

- [ ] The lesson passes one of the four tests in section 1.
- [ ] All four beats are present, and beat 4 is one plain sentence that names something on the student's bench.
- [ ] The heading is a plain noun. No em or en dashes. Every term and acronym defined.
- [ ] No concept used before it is taught.
- [ ] Every fact has a source on the page's sources line and in the page copy file.
- [ ] The portrait's licence was read on its file page, and the credit line links to that page.
- [ ] One interaction, different from the one in the neighbouring lessons.
- [ ] The page fits a phone screen and a little more.

---

## Filled example: Karl Ferdinand Braun, for the Oscilloscopes lesson

Lesson: `oscilloscopes` (Tools and Test Equipment room, Blueprint status `keep-light`, CAET 7.1 and 2.5). The Blueprint
lists no history for this lesson; this page is a proposal for Nick. It passes test 2 in section 1: Braun's tube is the
first oscilloscope display, and it draws a voltage the way the lesson teaches the student to read one.

Prerequisites check: the student has met electrons (Principles of Electricity), alternating current, frequency and peak
(AC Principles) before this lesson. The page uses nothing newer.

Placement: after the page that introduces the screen grid (volts up and down, time left to right), before the student
reads a waveform.

The block layout follows the page copy format in `curriculum/revamp-kit/lessons/01-safety-data-sheets/page-copy.md`.

### Page: Karl Ferdinand Braun

- **Side-panel label:** Braun
- **Title:** Karl Ferdinand Braun
- **Goal:** Show where the oscilloscope screen came from, and why it draws voltage against time.

**On-screen text**

Lede: "The German physicist Karl Ferdinand Braun built the first oscilloscope tube in 1897. A beam of electrons drew a
glowing trace on a screen, and the trace moved with the voltage he was studying."

History card:
- Year: "1897"
- Who: "Karl Ferdinand Braun, German physicist (1850 to 1918)"
- Paragraph 1: "Braun studied alternating current (AC), a current that reverses direction many times a second. A meter
  needle has weight, so it cannot swing back and forth that fast. A meter shows one number and hides the shape of the
  wave."
- Paragraph 2: "Braun sent a beam of electrons down a glass tube onto a screen coated to glow where the beam struck. The
  alternating voltage moved the beam, and the glowing trace showed the height and the frequency of the wave. The tube
  is still called a Braun tube in Germany. Its common name is the cathode-ray tube (CRT): cathode rays are beams of
  electrons."

Beat 4 (rule box): "Every oscilloscope still does what Braun's tube did: it draws voltage up and down against time from
left to right. A digital scope samples the voltage and draws it on a flat screen, and you read the same grid."

Ask card:
- Question: "A multimeter on AC volts reads a steady 28 V across a bus, but the display flickers. Why does a scope show
  you something the meter does not?"
- Options and feedback:
  1. "The scope draws the shape of the voltage over time, so ripple and spikes show on the trace." (correct) Feedback:
     "Right. The meter gives one number. The scope draws every change, the way Braun's tube did."
  2. "The scope measures a higher voltage than the meter." Feedback: "Not quite. Both measure the same voltage. The scope
     draws its shape over time, and the meter reduces it to one number."
  3. "The meter cannot measure AC." Feedback: "Not quite. The meter measures AC as one RMS number. It cannot show you the
     shape of the wave."

Credit and sources line: "Portrait: Ferdinand Braun, about 1910, George Grantham Bain Collection, Library of Congress.
Public domain, via Wikimedia Commons. Sources: Linda Hall Library, Scientist of the Day, Karl Ferdinand Braun;
Encyclopedia.com, Karl Ferdinand Braun; Nobel Prize in Physics 1909 citation."

**Interaction: then and now compare**

- Builder: two panels side by side on desktop, stacked on a phone, with one control between them: a slider for the
  frequency of the wave (1 to 5 cycles across the screen) and a toggle "Sweep on / Sweep off".
- Left panel: a line drawing of a Braun tube (glass bulb, the cathode at the narrow end, the beam, the round glowing
  screen). Drawing made for the lesson; label parts in clear space with leader lines: "cathode", "electron beam",
  "deflection coil", "glowing screen".
- Right panel: the lesson's own scope screen (lift the existing scope sim from the original lesson; do not redraw it).
- With "Sweep off", both screens show the spot moving straight up and down: a vertical line. With "Sweep on", the spot
  moves left to right at a steady rate while it moves up and down, and both screens draw the sine wave. Caption under
  the panels: "With no sweep, the spot only moves up and down. Spread it across the screen at a steady speed, and time
  becomes the left-to-right axis."
- Builder: SVG or canvas, smooth, respects `prefers-reduced-motion` (show the finished trace without the moving spot),
  pauses when the page is not showing.
- Accuracy note for the builder: the caption describes how every scope screen works. It does not claim to show the exact
  sweep method of Braun's 1897 tube, which the sources above do not describe. Do not add one without a source.

**Figure and image**

- Portrait candidate: Commons file page
  https://commons.wikimedia.org/wiki/File:Dr._Ferdinand_Braun,_head-and-shoulders_portrait,_facing_right_LCCN96509048.jpg
  The file page (read 2026-10-01) gives: George Grantham Bain Collection, 1910, Library of Congress Prints and Photographs
  (https://www.loc.gov/pictures/item/96509048/), "no known copyright restrictions", and public domain in the United
  States because published before 1 January 1931. Do not use `File:Ferdinand_Braun.jpg`: its source is a private website
  and its author is not given.
- Alt text: "Black-and-white head-and-shoulders photograph of Ferdinand Braun, a man with a full beard and a mustache, in
  a dark coat and a high white collar, facing right." Builder: confirm the description against the downloaded image.

**Sources checked for this page (2026-10-01)**

- Linda Hall Library, Scientist of the Day, Karl Ferdinand Braun:
  https://www.lindahall.org/about/news/scientist-of-the-day/karl-ferdinand-braun/ (the 1897 tube; "he could trace
  waveforms on the screen"; the 1909 Nobel Prize shared with Marconi).
- Encyclopedia.com, Karl Ferdinand Braun:
  https://www.encyclopedia.com/people/science-and-technology/physics-biographies/karl-ferdinand-braun (the alternating
  voltage moved the beam; the trace showed amplitude and frequency; the 1874 one-way conduction in metal sulfide crystals,
  which belongs on the Diodes and Rectification lesson, not here).
- University of Würzburg, Faculty of Physics, Karl Ferdinand Braun (1909):
  https://www.physik.uni-wuerzburg.de/en/about-us/history-of-the-faculty/nobel-prize-winners/karl-ferdinand-braun-1909/
  (the "Braun tube" name; his years at Würzburg).
- Life years 1850 to 1918: Linda Hall Library and Encyclopedia.com agree.

Why this page passes the quality check: one person, one finding, beat 4 names the scope on the student's bench, the
heading is his name, the interaction runs the idea of the lesson (a voltage drawn against time) instead of decorating it,
and the one claim the sources do not support (how his tube swept the trace) is kept off the page.

## Sources for this pattern

- LESSON-BUILD-BRIEF.md, `aero-caet-source/curriculum/revamp-kit/LESSON-BUILD-BRIEF.md`
  (page order, writing rules, Nick's 2026-10-01 request).
- Built history pages studied: `tools/curriculum/revamp/examples/ac-principles/` (Faraday; Edison, Tesla and
  Westinghouse with a timeline), `capacitors-inductors/` (Joseph Henry with a coil replay and unit flip cards),
  `electrostatic-discharge/` (Faraday's foil room drawing), `gyroscopic-instruments/` (Foucault and Doolittle),
  `blocked-ports/` (Kollsman), `principles/` (Coulomb), `voltage/` (Volta and Kirchhoff), `pitot-static/` (Henri Pitot).
- Research on relevance: see `README.md` in this folder, "Why history and incidents teach", for the full citations.
