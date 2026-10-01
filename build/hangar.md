# Two front doors: the Training Hangar and the course library

Written 2026-10-01. Paths are in the CAET course repo (`aero-caet-source`, private).

**In plain words:** students reach the same CAET lessons two ways. The **AERO Training Hangar** is a 3D building they
walk through in the browser: a lobby, upstairs classrooms where two instructors lecture on a whiteboard, desks that
open the lessons, lab benches, a library, a testing center, shops and an arcade. The **course library** is a plain web
page of topic courses, one per classroom, for students who would rather click down a list. Both are built from one
room list, open the same lesson pages, and save to the same learning record, so progress made through one door shows
in the other.

---

## The one list: `classrooms.json`

`frontend/public/aero/hangar/classrooms.json` lists the upstairs classrooms in hallway order. Everything upstairs is
built from it: the floor layout, the doors and their lamps, the directory, the class order, the labs and the room
checks. The course library is generated from it too. Adding a room is one entry.

```json
{
  "id": "shop-safety", "number": 1, "title": "Shop Safety", "accent": "#C8423B",
  "objectives": ["CAET-8.1", "CAET-8.2", "CAET-8.3", "CAET-8.4", "CAET-8.5"],
  "signature": { "id": "safety-station", "text": "Emergency station, safety data sheet rack and an ESD bench" },
  "lessons": [
    { "id": "safety-data-sheets", "title": "Safety Data Sheets",
      "page": "/aero/courses/handling-safety/lessons/safety-data-sheets.html",
      "classAudio": true, "labs": [] }
  ]
}
```

The file also sets the instructors (two voices, each with a name and a spot at the board) and the room check rule:
two questions per room objective, at least 6 and at most 16, pass at 80 percent. Room check questions come from the
practice question bank, one CAET objective code per item, so a new question tagged with a room's objective appears in
that room's check with no other change.

### The 14 rooms

| # | Room | Lessons | Labs |
|---|---|---|---|
| 1 | Shop Safety | 6 | 0 |
| 2 | Human Factors | 2 | 0 |
| 3 | Regulations and Records | 3 | 0 |
| 4 | Tools and Test Equipment | 3 | 2 |
| 5 | DC Electricity | 8 | 7 |
| 6 | AC Electricity | 3 | 3 |
| 7 | Aircraft Electrical Systems | 4 | 2 |
| 8 | Solid-State and Digital Electronics | 4 | 2 |
| 9 | Databuses | 3 | 1 |
| 10 | Aircraft Wiring | 5 | 1 |
| 11 | Flight Instruments | 4 | 3 |
| 12 | Communication | 1 | 2 |
| 13 | Navigation | 3 | 1 |
| 14 | Surveillance | 2 | 1 |

Counts as of 2026-10-01. Rebuilt and new lessons are added to the list as each group is merged.

---

## Front door 1: the AERO Training Hangar

Plain web files: three.js modules with no build step, at `frontend/public/aero/hangar/`. It runs on a phone.

| Place | What the student does there |
|---|---|
| Lobby | Checks in at the front desk and gets the class schedule: the 14 rooms in order, each open, locked, in progress or mastered. A note in the corner always names the next class, with Walk there |
| Classrooms (upstairs) | Walking in starts the class: the room's next lesson plays as a lecture on the whiteboard, with a slim caption line naming the speaker. Nothing takes over the screen; the student can walk on, or tap Watch to see the board full size. The place in the lecture is saved |
| The desk | Sitting down opens the room's lessons with their progress, its labs, and the room check. A lesson opens full screen exactly as its author built it and records its own completion |
| Lab bench | The room's sim labs |
| Library | Handbooks on shelves, a reader with highlights, notes and bookmarks, carrels with a focus timer, and study conversations to listen to |
| Testing center | A proctored room with stations: a full practice exam (100 questions, 90 minutes, the domains in proportion), quick practice, practice by domain, and a placement check |
| Shop office | Work orders: take a job, go to its station, write the logbook entry, pass the inspector's three questions |
| Wiring shop and avionics bench | Stations that open real tools, such as the Harness Bench ([sims-circuit-lab.md](sims-circuit-lab.md)) |
| Arcade | Review games, one per cabinet |
| Profile | The student's progress: rooms with their lamps, the eight CAET domains, the three weakest objectives with the room that teaches each, time studied, practice scores |

**One sound at a time.** Every sound source (a lecture, a lesson's narration, a study conversation, a game) goes
through one sound manager. Whatever starts pauses everything else, and nothing resumes on its own.

**The class lectures** are the classroom decks ([hyperframes.md](hyperframes.md#use-2-classroom-lecture-decks)), read
from `frontend/public/aero/hangar/lectures/<lesson-id>/lecture.json`. The same file plays as page 3 of the lesson. A
lesson with no lecture yet shows its title and "Study this lesson at your desk".

**The models:** the Cessna 172 on the hangar floor and the people are built by scripts
([models-and-3d-pipeline.md](models-and-3d-pipeline.md)).

---

## Front door 2: the course library (topic courses)

The course library page (`/aero/topics.html`) lists one course per classroom: "Every CAET lesson, organized by topic."
A student opens a topic and works through its lessons and labs in order in the AERO course player. A link at the top
opens the Training Hangar.

The topic courses are generated, not written:

```
node tools/curriculum/make-topic-courses.mjs
```

It reads `classrooms.json` and writes, for each room, `frontend/public/aero/courses/topic-<room-id>/course.json` (the
room's lessons, each followed by its labs, mastery at 80 percent) and the library list `frontend/public/aero/topics.js`.
Run it whenever the room list changes. The topic course version is fixed and never changes, because a version change
would restart every student's saved progress.

A nine-week calendar of the same lessons existed before the rebuild. It is parked, not deleted, and will be rebuilt
from the topic lists once the lessons are done.

---

## Why both doors stay in step

- **One list.** The hangar's rooms and the library's topics come from the same `classrooms.json`, so both teach the
  same lessons in the same order.
- **One lesson page.** Both open the same file in `frontend/public/aero/courses/<course>/lessons/`. The lesson knows when
  it is inside a host (the hangar or the course player) and hides its own page list, because the host already lists the
  pages. The hangar's lesson bar reads each page's `data-beat` label.
- **One record.** Lessons record their own completion (every page read and the check passed). The hangar adds its own
  course for lab marks and room checks, and keeps lecture places, focus sessions, practice tests and each CAET
  objective's last ten answers. The profile draws all of it.

---

## Adding content that shows up in both

A lesson builder never edits the hangar or the room list. Instead:

1. Put the work where it belongs: a lesson at `frontend/public/aero/courses/<topic>/lessons/<lesson>.html`; a sim lab
   beside the lessons as `NN-<name>-lab.html`; practice questions in the practice bank with one objective code each.
2. For a new lesson, describe its place in `route.json` in the example folder ([lesson-format.md](lesson-format.md)).
3. Leave a short hand-off note in `docs/hangar/inbox/<date>-<short-name>.md`: what was built and where, its CAET codes,
   and anything the hangar should know (a video to show, a figure that should not go on the board).
4. The owner's session wires it in: the room list entry, then `make-topic-courses.mjs` for the library and
   `make-hangar-course.mjs` for the hangar's own course record (a unit test fails until that copy matches the room
   list).

Do not make narration for a lesson; the lecture is built separately. Keep images and video small, prefer SVG or
code-drawn figures, and say in the note if anything is over 1 MB.
