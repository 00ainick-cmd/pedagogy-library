# Simulations: the Avionics Circuit Lab and the Harness Bench

Written 2026-10-01. For builders adding a hands-on lab to a lesson, and for designers who want to see how a real
simulator is wired into a paged lesson. The Circuit Lab lives in its own repo (`aero-circuit-lab`, private). Lesson
paths are in the CAET course repo (`aero-caet-source`, private). What makes a sim teach, the upgrade checklist and the
phone rules are in [Lesson Craft: simulations](../craft/media-motion/simulations.md); this file is how the
machinery works.

**In plain words:** the Avionics Circuit Lab is a circuit simulator and avionics bench in the browser. Every reading
on its meter comes from a real circuit solver, not from a script. A lab is one saved circuit (a preset) plus a list of
steps, each of which checks itself against the live circuit. A lesson page shows the lab in a frame, hears each step
as the student finishes it, and records the readings. A test can make the lab do its own steps, through the same
buttons a student uses, to prove the lab still works.

---

## 1. What is in it

| Area | What the student gets |
|---|---|
| Circuit sandbox | 26 parts (resistors, batteries, lamps, switches, relays, fuses, breakers, capacitors, inductors, transformers, diodes, transistors, meters) dragged onto a canvas and wired by hand |
| Live physics | Wire color shows voltage, moving dots show current, lamps glow by real power, fuses blow and breakers trip on overload, an LED burns out without its resistor |
| Instruments | A handheld multimeter (DC volts, true RMS AC volts, ohms with a "live circuit" warning, current through its own jack and fuse) and a four-channel oscilloscope |
| Presets | 43 saved circuits as data, in groups: basics, protection, aircraft (a DC bus with a battery contactor and breakers, a 400 Hz transformer), capacitors and inductors, AC, semiconductors, and 16 CAET lesson labs |
| Fault Hunt | Hides a fault (an open wire, a corroded high-resistance joint, a burnt-out lamp, a short) in the circuit on screen, turns off the color and dot hints, and scores the student's call |
| Avionics systems | Instruments as modules: comm and nav radio with its signal chain, transponder, VOR, ILS, ARINC 429, EFIS, pitot-static, antenna and coax, audio panel, and a wiring diagram |
| Harness Bench | A full-screen job: build and prove a real wiring harness (section 6) |

How it works underneath: `js/solver.js` is a modified nodal analysis solver (the standard method circuit simulators
use) with time-stepped models for capacitors, inductors, transformers and motors, and an iterative solve for diodes and
transistors. `js/presets.js` holds the circuits and lab steps as pure data. `js/cns/*.js` holds one file per avionics
instrument.

### Where it lives and how it reaches the course

The repo is the simulator's one home. At release, the course's release script copies it into the site at
`/simulators/circuit-lab/`. Nobody edits that bundled copy; a change goes into the Circuit Lab repo and arrives with the
next release.

---

## 2. Presets: a lab is data

A lab preset has an id, a title, the parts with their values and positions, the steps, a reading log, and a `solve`
list. Shortened from the real "Where the Nine Volts Go" lab:

```js
{id:'caet-d09-voltage', cat:'CAET Lessons', topic:'DC Electricity', title:'Where the Nine Volts Go',
 desc:'One 9 V source, three loads in series. Measure the pressure across each.',
 parts:[['battery',0,0,0,8,{v:9,tag:'BT1'},'BT1'], ['switch',4,0,8,0,{closed:false,tag:'S1'},'S1'],
        ['resistor',10,0,14,0,{r:20,tag:'R1'},'R1'], /* R2 15 ohms, R3 30 ohms, and the wires */],
 guide:{intro:'Voltage is the pressure of electrons, measured between two points. ...',
  steps:[
   {t:'Close S1.', ok:c=>on(c,'S1')},
   {t:'Turn the dial to V DC and put the probes across BT1. Record the source voltage.',
    ok:c=>c.meter.on && c.meter.mode==='VDC' && c.meter.across('BT1') && Math.abs(Math.abs(c.meter.val)-9)<0.15},
   {t:'Measure across R1 (20 ohms). The log records it.',
    ok:c=>c.meter.mode==='VDC' && on(c,'S1') && c.meter.across('R1') && Math.abs(c.meter.val)>2},
   /* R2, R3, the probes swapped on R3, then across the open switch */ ],
  log:[{step:1,label:'Across the source BT1',set:'V DC, S1 closed'}, /* one row per recorded reading */]},
 solve:[['close','S1'],['probe','BT1'],['probe','R1'],['probe','R2'],['probe','R3'],['rprobe','R3'],['open','S1'],['probe','S1']]}
```

Each step's `ok` is a check against the live circuit state, so the step passes only when the student has really done
it: the meter in the right mode, across the right part, reading a value the solver produced. The student never types
an answer the lab cannot verify.

### Opening a preset

| Address | What opens |
|---|---|
| `index.html?preset=<id>` | A saved circuit in the sandbox |
| `index.html?preset=<id>&lab=1` | The same circuit in lab mode: steps and reading log beside it |
| `index.html?lab=1&task=<lab id>` | A systems lab on an avionics instrument |
| `index.html?system=<name>` | An avionics instrument (`radio`, `transponder`, `vor`, `ils`, `wiring`, `harness`, and others) |
| `harness/index.html?stage=ring&fault=<id>` | The Harness Bench at the ring-out, with a chosen fault for the fault hunt |

---

## 3. The lab page wrapper

A lesson-side lab is its own short page in the course repo:
`frontend/public/aero/courses/<course>/lessons/NN-<name>-lab.html`. It has four sections:

| Section | What is on it |
|---|---|
| Brief | The job in one line, what to measure, and the meter hookup in plain words |
| Bench | The Circuit Lab in a frame, a "steps done" count, the student's readings filled in as they are taken, Full screen and Open in a new tab |
| Check | Questions answered from the student's own readings |
| Field card | What the student can now do |

The page points the frame at the preset in lab mode:

```js
var PRESET = "caet-d09-voltage";
var base = new URLSearchParams(location.search).get("sim") || "/simulators/circuit-lab/index.html";
document.getElementById("sim").src = base + "?preset=" + PRESET + "&lab=1";
```

A rebuilt lesson can also embed a preset directly on its hands-on page (the Electrical Troubleshooting lesson embeds
the aircraft DC bus preset and starts the lab's own Fault Hunt from a button). On a phone, open the lab in a
full-screen dialog rather than squeezing the frame; see
[simulations, section 6](../craft/media-motion/simulations.md).

---

## 4. Completion messages

The lab and the page talk by `postMessage`, the browser's way for a page and a frame inside it to send each other
small messages.

**From the lab to the page, each time a step passes:**

```js
{ src: 'acl', type: 'step', preset: 'caet-d09-voltage',
  step: 3, total: 7, done: 4,
  meter: { on: true, mode: 'VDC', txt: '3.00', unit: 'V', val: 3.0 } }
```

**On the page, the listener:**

```js
window.addEventListener("message", function (e) {
  var d = e.data; if (!d || d.src !== "acl" || d.type !== "step" || d.preset !== PRESET) return;
  stepCount.textContent = String(d.done);
  if (!readings[d.step]) readings[d.step] = d.meter;          // fill the reading summary
  if (window.AeroLesson) AeroLesson.interaction({ id: "step-" + d.step, kind: "measure", correct: true });
  if (d.done >= d.total) { /* show the bench feedback, save the readings, mark the bench done */ }
});
```

Inside the lab, the student also sees "Step complete" after each step and "Lesson complete" with the lab's title after
the last one. Check `e.origin` and `e.source` in a new page, and post to the known origin rather than to any origin;
some older pages do not yet.

---

## 5. autoSolve: the lab proves itself

Every lab used in a lesson has a `solve` list. The lab exposes `window.autoSolveLab()`, and a lesson page can ask for
it by message:

```js
frame.contentWindow.postMessage({ src: 'lesson', type: 'acl-autosolve', preset: PRESET }, '*');
```

`autoSolveLab()` works through the `solve` list using the same handlers a student's clicks use: turn the dial, move the
red lead to a jack, open or close a switch, drop the probes across a part (`probe`, or `rprobe` for the leads swapped),
set a part value, draw a wire, wait in simulated seconds. Then it checks that every step passed. A systems lab solves
through its instrument's own `act(name, ...args)`, the same calls its buttons make. The VOR ramp check
starts `['act','rf',true], ['act','ident',true], ['act','bearing',0], ['act','obs',0], ...`, and a row like
`['wait', 2]` waits two seconds.

Why it matters: a verification path that bypasses the real controls proves nothing. Because `autoSolve` drives the same
handlers, a lesson's browser test can call it and know the lab, its steps and its messages to the page all still work
after any change. This is the "self check calls the same handlers" law of the `simulation-builder` skill
([skills.md](skills.md)).

The waits run on the simulator's own clock, not on animation frames, so a lab in a hidden frame or a slow test machine
reaches the same readings.

---

## 6. The Harness Bench (real tooling data)

The Harness Bench (`harness/` in the Circuit Lab repo) is a full-screen job: build the AEA CAET 1 training harness
from its drawing, and prove it.

**Six stages, in shop order, none locked:**

1. The work order and the drawing (zoom, tap any cable).
2. A narrated 3D demonstration of one conductor done right, built from the course's tool models.
3. The guided build of all 12 run ends: cut, shield preparation to the drawing's dimensions, strip, splices and
   jumpers, drains to the shield ground, then the contact. The student names the contact by reading its three color
   bands, sets up the crimp tool from its full kit of six positioners by finding the contact on a real data plate,
   pull-tests a sample, crimps, inspects, inserts and tugs.
4. The ring-out with the meter against a 90-row test plan (continuity, shields, conductor to shield, neighboring pins),
   plus a fault hunt: a miswire, an open, two kinds of short, a drain that grounds nothing.
5. Sign-off: build sheet, ring-out record, record entry.
6. Results, from the work log only.

**Real data.** `harness/js/model.js` is pure data and rules, with no screen code. It holds the harness drawing (runs,
pins, colors, splices, shield grounds, preparation dimensions in inches with tolerances), the DMC AFM8 crimp tool and
its positioners (K1S, K41, K40, K13-1, K42, K43) with each data plate as the maker's envelope drawings show it, and the
M39029 contacts with their color-band codes. Every number was checked against its source: the tool maker's tool
search, a connector maker's contact guide, the military connector specification's contact table, and the military color
code standard for the bands. The model says the physical tool's own data plate always governs. The same model drives
the bench app, two course labs, and a headless test that builds a whole harness the student's way and finds and
repairs every planted fault.

Deep links: `?stage=ring&fault=<id>` opens the ring-out with a chosen fault; `?reset=1` clears the student's saved job
on that device; `?nowebgl=1` shows the 3D demonstration as still pictures.

---

## 7. How to add a lab

### A circuit lab

1. **In the Circuit Lab repo,** add a preset to `js/presets.js`: id, title, the parts, the intro, the steps with their
   `ok` checks, the log rows, and the `solve` list. Use real aircraft values (a 13.6 V or 28 V bus, real breaker
   ratings) and plain step text that asks for the measurement without announcing the result.
2. **Run the tests:** `node dev/test-presets.js` (every preset runs clean) and `node dev/test-solver.js` (hand
   calculations). Open `dev/test-autosolve.html` and check the new lab solves itself.
3. **Write the lab page** in the course repo: copy the closest `NN-<name>-lab.html`, set `PRESET`, the title, the
   brief, the reading summary and the check. Or embed the preset on a lesson's hands-on page.
4. **Hand it over.** Leave a short note in the course repo's `docs/hangar/inbox/` (what it is, its path, its CAET codes)
   so the owner's session adds it to its room's lab bench and the course library ([hangar.md](hangar.md)).
5. **Regenerate the lab catalog** (`labs.html`) if the lab belongs to the nine-week program.

### A systems lab (on an avionics instrument)

Follow the systems lab contract in the Circuit Lab repo (`dev/SYSLAB-CONTRACT.md`); the reference is the VOR ramp check
(`js/cns/vorcheck.js`). One plain script per instrument with:

1. A pure model: `init(scenario)`, `act(state, name, ...args)` and `state()`, with no screen code. Every number it
   uses (a limit, a tolerance) is shown as coming from a procedure card or the unit's maintenance data, never as a
   universal rule.
2. `ACL.cns.register({ id, sim, title, mount(host, opts) })`, where every control calls `act`, so a student and
   `autoSolve` take the same path.
3. The lab itself pushed to `ACL.cns.labs`: its steps (checked against `state()`), its log and its `solve` rows.

### Rules that hold for every lab

From the `simulation-builder` skill, learned on this simulator:

1. Scenarios are data. A new lab is a data change, not a rebuild.
2. Every displayed value comes from the live solve.
3. Every student action is logged with the resulting state.
4. The self-check calls the same handlers the screen calls.
5. Faults are hidden flags. A faulted part looks normal; the student finds it by measuring.
6. Ship numbers: solved values against a hand calculation within a stated tolerance.

---

## 8. Tests in the Circuit Lab repo

| Command | What it proves |
|---|---|
| `node dev/test-solver.js` | The solver against hand calculations |
| `node dev/test-presets.js` | Every preset runs clean, with behavior checks |
| `node dev/test-accuracy.js` | Bench truths: both probe polarities, airframe ground, the diode test |
| `node dev/test-harness.js` | The harness model: a whole harness built and every planted fault found and repaired |
| `node dev/test-harness-bench.mjs` | The Harness Bench app in a real browser, desktop and phone |

Do not use an outside GPL simulator inside a lesson; the licence and the look do not fit, and this lab already does
more for teaching ([sources](../craft/media-motion/sources.md)).
