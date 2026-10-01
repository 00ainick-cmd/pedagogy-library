# Simulations in lessons: the PhET-grade recipe for CAET

Written 2026-10-01. Builds on the `simulation-builder` skill (`~/.claude/skills/simulation-builder/`), the Avionics
Circuit Lab, and the research of the PhET Interactive Simulations group at the University of Colorado.

**In plain words:** a good sim gives the student a job ("find why the taxi light is dim"), asks them to guess before they
touch anything, gives them only the controls they need, shows real readings the way a real meter shows them, hides a
fault they have to find by measuring, and tells them plainly when they are right. A weak sim is a picture with sliders:
nothing to find, nothing to predict, numbers that do not mean anything.

---

## 1. What the research says makes a sim teach

PhET has studied this for twenty years with think-aloud interviews (hundreds of students, 4 to 6 interviews per sim
version) and classroom trials. The findings that matter for us:

1. **Sims teach only when the student's own question drives the clicking.** Watching does not teach: in interviews,
   students who watched a running demonstration accepted what they saw without understanding it; learning began when
   they interacted ([Adams et al. 2008, Part I](https://phet.colorado.edu/publications/PhET_Interviews_I.pdf)). "Students are not able to make sense of the science in the simulation
   just from watching" ([Wieman, Adams and Perkins 2008, Science](https://phet.colorado.edu/publications/PhET_Simulations_That_Enhance_Learning.pdf)).
2. **Light guidance beats heavy guidance for concepts.** With open "driving questions", students explored and learned;
   with gently guided prompts they answered only what was asked and waited; with cookbook steps there was "no engaged
   exploration" ([Adams, Paulson and Wieman 2008](https://www.per-central.org/items/perc/701.pdf)). In a 210-student study, use of unprompted features was 85 percent
   with light guidance and 9 percent with heavy guidance ([Chamberlain et al. 2014](https://www.compadre.org/portal/items/detail.cfm?ID=16327)). **Minimal but not zero guidance.**
3. **Implicit scaffolding: guide without the student feeling guided.** The sim's layout, colors, limits and feedback do
   the guiding, not text ([Podolefsky, Moore and Perkins 2013](https://arxiv.org/abs/1306.6544);
   [Paul, Podolefsky and Perkins 2013](https://pubs.aip.org/aip/acp/article/1513/1/302/877085)):
   - **Affordances:** objects look like what they do; students grab what is in the play area first.
   - **Productive constraints:** slider ranges chosen so the extremes are illuminating; readouts that make simple ratios
     visible ("twice as much"); scene buttons that jump to an illuminating case; the first screen locked to the ideal case
     (Energy Skate Park Basics: friction locked at zero on screen 1, friction added on screen 2, free play on screen 3).
   - **Cueing:** the first action is cued by color and placement, "rarely" by text.
   - **Feedback:** every action changes something visible at once.
   - **Fading:** screens of rising complexity, so the scaffolding comes off as the student goes.
4. **Interface findings from the interviews** ([Adams et al. 2008, Part II](https://phet.colorado.edu/publications/archive/PhET%20interview%20Paper%20Part%20II.pdf)):
   - Start with very little or no animation; a busy opening overwhelmed students.
   - Direct manipulation: with the first Circuit Construction Kit, which used mode switches like a paint program, none
     of the four students tested could build a circuit unaided; click and drag from a toolbox fixed it.
   - Sliders for exploring; a typed number box when the task needs an exact value.
   - More than about three groups of three controls makes students hesitate; put the rest behind "More".
   - "Everything matters": novices read meaning into every visual difference, so one stray difference (uneven dot
     spacing in a circuit) builds a wrong model. Keep one color code for the whole course.
   - Students read 1 to 3 word labels on controls and skip loose text. Instructions placed in the play area made
     students follow one directive and stop exploring. Help only on request, short, next to the item.
   - Only 5 of about 80 students found play and pause buttons on their own. Do not hide important control in them.
   - Simplify and exaggerate what teaches (CCK enlarges its junctions). This is emphasis, not a cartoon look: our parts
     stay technical drawings (`graphics-standard.md`).
5. **Students trust a sim "disturbingly".** In one homework item, 91 percent predicted correctly before using a sim and
   17 percent answered correctly after it, because a default value was wrong ([Part I](https://phet.colorado.edu/publications/PhET_Interviews_I.pdf)). Test every default.
6. **A good sim can beat the bench for concepts, then prepares for the bench.** Students who did a DC circuits lab with
   the Circuit Construction Kit outscored real-equipment students on circuit exam questions and built and explained a
   real circuit faster ([Finkelstein et al. 2005](https://itransfer.org/downloads/labdiscussionitems/Whenrealworldlearningisbettervirtually.pdf)). Making invisible things visible (current) and removing distractions
   (a dim bulb that looks off) was the reason.
7. **Accessible sims** describe what changed ("current rises to 2 amps, bulb brighter") and work by keyboard
   ([PhET accessibility research](https://phet.colorado.edu/en/accessibility/research)).

From the explorable explanations tradition:
- **Put live numbers in the sentence** ([Bret Victor, Explorable Explanations](http://worrydream.com/ExplorableExplanations/)): "28 V across 4 Ohm gives 7 A", where the
  student drags 28 or 4.
- **Climb the ladder of abstraction** ([Victor, Up and Down the Ladder of Abstraction](http://worrydream.com/LadderOfAbstraction/)): control the system, then see a plot of every result across the
  parameter, then tap a point on the plot to return to that concrete case. "We must not be slaves to real time": a
  time slider beats playback.
- **Show the data, and show comparisons** ([Victor, Learnable Programming](http://worrydream.com/LearnableProgramming/)): a ghost of the previous reading, or a second
  case beside the first.
- **Place your bets** ([Nicky Case, 4 More Design Patterns](https://blog.ncase.me/explorable-explanations-4-more-design-patterns/)): give the answer only after the student has committed to a guess. **Start small,
  build big** ([Case, Explorable Explanations](https://blog.ncase.me/explorable-explanations/)): one mechanic at a time, then combine.
- **The page must read well with no interaction** ([Amit Patel](https://simblob.blogspot.com/2018/05/thoughts-on-explorable-explanations.html): most visitors want the explanation, not the toy).
- **One color per entity across every figure, one or two controls per figure, each figure adds one part** (observed
  in Bartosz Ciechanowski's [GPS](https://ciechanow.ski/gps/), [Airfoil](https://ciechanow.ski/airfoil/) and
  [Mechanical Watch](https://ciechanow.ski/mechanical-watch/) articles; his GPS article is a model for teaching DME and
  GPS ranging).

**Where guided steps are still right.** PhET's findings are about learning concepts. Learning a **procedure** (set up
the meter, take a reading, ring out a harness) is different: a technician follows a job card, and the Circuit Lab's
step-by-step labs are worked procedures. Use guided steps for procedures and one open driving question plus challenges
for concepts. Either way, the step text never gives away the result the student is about to measure.

---

## 2. The CAET sim recipe

Pick the tier first (from `simulation-builder`):
- **Tier 1, demonstration lab:** one focal model, one to three controls, live readouts, closed-form math. For a
  relationship: Ohm's law, a divider, a time constant, a turns ratio.
- **Tier 2, diagnostic sim:** a real solver, scenarios as data, modes (explore, guided, fault), hidden faults, a reading
  log, a score. For a procedure or a diagnosis: meter technique, finding an open or a high-resistance joint. The
  Avionics Circuit Lab is our tier 2 engine; embed a preset before building a new one.

Every CAET sim has these parts, in this order on the page:

1. **The job** (one line, a real shop task): "A 14 V taxi light on a 13.6 V bus burns dim. The lamp is new. Find the
   missing volts."
2. **The prediction** (one ask card, before the sim): "Where do you think the missing volts are?" with picture options
   (the lamp, the switch, a terminal, the wire). Answering is never required to continue (lessons have no gates), but the
   readout that would give the answer away shows "?" until the student predicts or taps "Just show me".
3. **The model**, drawn like real equipment: a schematic in IEEE 315 symbols (`graphics-standard.md`), a meter that looks
   and reads like a handheld DMM, a scope with a real graticule. Generic instruments, no look-alike brand faces (Circuit
   Lab systems lab contract, `dev/SYSLAB-CONTRACT.md`).
4. **The controls**, few at first: the one control the first discovery needs, the others unlocked by the discoveries.
   Direct manipulation where the real task has it (drag the probe to a test point, turn the dial); sliders with a label,
   a unit, a realistic aviation range (2 to 28 V for a 28 V system) and three ticks.
5. **The readouts**: every number from the live solve (law 2), with its unit and its quantity color, on the instrument
   where a technician would read it. An equation strip (V = I x R with live values) only on pages that teach the math.
6. **Discoveries**: three things to find, checked from the model's state, each with one plain sentence when found.
7. **The fault** (tier 2): hidden, renders as normal, found only by measuring (law 5). Unsafe actions have their real
   consequence (ohms on a live circuit reads nonsense; amps across the source blows the meter fuse) and it persists
   until the student fixes it.
8. **The check**: one synthesis question in a shop scenario, answered from the student's own readings, feedback that
   sends a wrong answer back to the sim with exact settings ("Set 28 V and 7 Ohm and read the current").
9. **`window.autoSolve()`** that drives the real controls to the finished state (law 4), so the lesson's browser test
   proves the sim works.

---

## 3. Productive constraints and implicit scaffolding, made concrete

| Principle | What it looks like in a CAET sim |
|---|---|
| Limit what can be done | The voltage slider stops at 28 V; only the parts this lesson has taught are in the palette; a part shown later in the course is hidden, not deleted (brief rule) |
| One control first | Discovery 1 needs only the switch; the voltage slider appears after it |
| Affordances that invite the right action | The probe tips look like probe tips and are the most visible things on the bench; the dial looks like it turns |
| Cueing without telling | The part under test glows faintly when the meter is across it; a reading that changed flashes once |
| Feedback that is the physics | The lamp's brightness follows its real power; the breaker trips at its real rating |
| Real-world connection | A Cessna-style taxi light circuit with a 13.6 V bus, not "R1 and a battery" |
| Admitted simplifications | "Training values. Use the aircraft manual for real limits." on the face of the sim |

---

## 4. The "make the sim better" upgrade checklist

Run it on any existing sim before Nick sees the lesson. Each line is pass or fix.

1. **Goal.** The student can say in one sentence what they are trying to find or show. If not, write the job line.
2. **Predict first.** An ask card before the sim asks what will happen; the giveaway readout waits for the prediction.
   Step text never announces the result before the student measures it ("The lamp is getting several volts less" is
   a giveaway; "Measure across the lamp and record it" is not).
3. **Few controls.** At most two live controls at the start; more unlock with the discoveries.
4. **Real ranges and values.** Aircraft values (14 V and 28 V buses, real breaker ratings, real wire gauges). No "R1 =
   100" without a reason.
5. **Every number from the model.** Search the code for numbers written to the screen that the solve did not produce.
6. **Units and colors.** Every reading carries its unit; voltage violet, current cyan, resistance amber everywhere.
7. **Reads like the real instrument.** Meter face, dial positions, scope graticule and probe hookup match the shop.
8. **A fault to find** (tier 2). Hidden, normal-looking, found only by measuring, with more than one plausible suspect.
9. **Real consequences.** The wrong meter function on a live circuit does what it does on the bench.
10. **Discoveries checked from state**, three of them, each confirmed in one sentence.
11. **A synthesis question** answered from the student's own readings, with feedback that routes back to the sim.
12. **Honest model.** Losses where they teach (wire and connector resistance, internal resistance); simplifications
    stated on screen.
13. **Fits a phone.** The model and its controls are on one 390 x 844 screen together; no hover-only hints; no
    mouse-wheel-only controls; touch targets 44 px; a vertical swipe still scrolls the page (`touch-action: pan-y`).
14. **Keyboard path.** Every control reachable and operable by keyboard; focus visible.
15. **Page life.** Starts on `lp:enter`, stops on `lp:leave` and in a hidden tab (`animation.md` section 2a). The
    `simulation-builder` rule "the loop never stops" does not apply inside the pager.
16. **Reduced motion.** Dots and sweeps stop; the readings and static arrows still tell the story.
17. **Reading log.** Each measurement the student takes is recorded with its setting, as the Circuit Lab log does.
18. **`autoSolve()` passes** by driving the real handlers, with zero console errors, on desktop and phone sizes.
19. **Looked at.** Screenshots of the start, mid-task, fault found and finished states, at 390 and 1280 wide.

---

## 5. Worked upgrades on real CAET labs

**The Dim Taxi Light** (Circuit Lab preset `caet-d11-resistance`, lesson `11-dim-taxi-light-lab.html`). Strong already:
real values (13.6 V bus, 14 V lamp), a high-resistance terminal, the ohmmeter-on-a-live-circuit trap, a reading log,
a `solve` path. Upgrade:
- Add the prediction: "The bus reads 13.6 V and the lamp is new. Where are the missing volts?" with four picture
  options before the bench.
- Rewrite steps 3 and 4 so they ask for the measurement and stop announcing the result.
- Make the terminal a hidden suspect: today it is tagged TERMINAL, so the answer is on the drawing. Show three
  connection points and let the meter find the bad one.
- Phone: the lab iframe uses a 600 px minimum height; open it in the full-screen dialog pattern (below).

**Where the Nine Volts Go** (`caet-d09-voltage`, `09-where-the-nine-volts-go-lab.html`). The page has no prediction
anywhere. Upgrade: before the bench, ask the student to drag the 9 V into the three drops they expect (a one-card sort),
then measure and compare their guess with the reading log.

**The Crimp lab** (`tools3d/labs/crimp.html`, `28-crimp-a-contact-lab.html`). Model example: hidden-fault wires (poor
strip, nicked strands, a broken strand), counted mistakes, `autoSolve()` through the real controls. Upgrade: honor
reduced motion in the 3D, replace "The bench could not load" with a still picture and the steps, and post messages to
the lesson's own origin instead of `'*'`.

**Digital Logic micro switch** (`digital-logic/sw3d.tpl`). Model example of a fault inside a 3D part: an out-of-rig
switch whose readout says "28 V, high" or "0 V, low". Upgrade: ask the student to predict the readout for gear up and
gear down before they move the lug.

**Transformers** (`transformers-aircraft-ac/scene3d.tpl`). A turns-ratio model with secondary voltage readouts.
Upgrade: a challenge set ("Make 26 V AC from 115 V AC") so the student solves for the ratio instead of only watching it.

**91.411 bench** (`CAET/.../91-411-bench.html`). A glass-panel C172 and test set with pressure physics, a hangar of
faulted airplanes, a graded entry, and `autoSolve`. The file is not tracked in git; put it under version control before
lessons depend on it.

---

## 6. Embedding the Avionics Circuit Lab on a phone

The Circuit Lab is the right engine for DC, AC and CNS labs: a modified nodal analysis solver with every displayed
number from the solve, 43 presets as data, 10 systems labs, Fault Hunt, a reading log, and `window.autoSolveLab`
driving the real handlers on simulated time. The lesson page embeds it with `?preset=<id>&lab=1` (or `?task=` for a
systems lab); the lab posts `{src:'acl', type:'step', ...}` with readings to the parent, and the lesson's
`window.autoSolve` posts `{src:'lesson', type:'acl-autosolve', preset}` to the frame.

Known weak points on a phone, and the rule for each:

| Weak point (audit 2026-10-01) | Rule |
|---|---|
| Iframes set to `calc(100vh - 150px)` with a 600 to 640 px minimum, taller than a phone, no auto-height message | Show a still preview card with "Open the bench"; open the lab in a full-viewport `<dialog>` at 100 by 100 dvh, as Harness Fabrication does |
| The host's Full screen button calls `requestFullscreen()` on a div; Safari on iOS supports the Fullscreen API only in part ([caniuse, Fullscreen API](https://caniuse.com/fullscreen)) and it is not dependable on an iPhone | Use the full-viewport dialog, not the Fullscreen API, as the phone path |
| Canvas `touch-action: none` swallows swipes; wheel-only zoom and potentiometers; hover-only hints | In lab mode on a phone, give buttons for zoom and for each potentiometer, and put hints in the step text |
| Small targets: 20 px jacks, 9.5 px meter text, a meter that shrinks to 0.3x | Set a phone floor: 44 px targets, 16 px text, meter never below 0.6x |
| Every lab loads all 17 CNS modules (about 790 KB) | Load only the module the preset needs |
| Messages to `'*'`, no origin check, and one host reaches into the frame's DOM | Post to the known origin, check `e.origin` and `e.source`, and drive the lab only by message |
| The `dc-bus` preset has no `solve` | Every preset used in a lesson has a `solve` path |

Do not use Falstad CircuitJS inside a lesson: it is GPL-2.0, its look does not match, and the Circuit Lab already does
more for teaching (see `sources.md`).
