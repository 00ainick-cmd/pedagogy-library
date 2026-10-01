# Item Writing: Auto-Graded Knowledge Checks

These rules apply to every auto-graded check in the AERO course player: the graded card
types (Sequence It, Predict-then-Reveal) and any `check` beat embedded in a lesson.
The standard is Patti Shank's item-writing methodology.

For the card types that carry checks, see [00-job-to-card-chooser.md](00-job-to-card-chooser.md).
Checks must clear the quality gate in [01-swap-protocol-checklist.md](01-swap-protocol-checklist.md).

---

## The rules

### 1. Every stem is a complete sentence

Never write a fragment and let the options finish it. A complete-sentence stem states the
situation fully. The learner should understand the question before reading the first option.

Bad (fragment): "When a DMM reads OL on the resistance function, this means..."
Good (complete): "A technician probes both terminals of a closed circuit breaker on the ohms
function, and the display reads OL. What does this reading indicate?"

### 2. Distractors are built on real misconceptions

Each wrong option must represent something a real avionics technician actually believes or
could plausibly confuse. If a distractor could only fool someone who is not paying attention,
it is a throwaway and wastes a slot.

Ask: "What would a technician think if they confused this concept with a related one, or
misread a procedure step, or applied a rule from a different context?"

### 3. Per-option feedback that teaches

Every option gets feedback text that runs when the learner picks it. Right-answer feedback
explains WHY it is right. Wrong-answer feedback explains the real misconception driving that
option and why it fails here.

Feedback is a teaching moment, not a verdict. "Incorrect, try again" is not feedback.

### 4. Test at application and judgment, not rote recall

If the learner can answer the item by reading the slide text back, it is a recall item.
Aim for application (apply a rule to a scenario) or judgment (decide which action is correct
given competing options). The stem should describe a situation; the options should require
the learner to decide.

### 5. Avoid test-wiseness flaws

These cues leak the answer before the learner thinks:

- Longest option is usually the key: make all options the same approximate length.
- "All of the above": avoid it; it is almost always keyed correct when present.
- Grammatical mismatches: if the stem ends with "a" and only one option starts with a vowel,
  the grammar gives it away. Write stems that are grammatically neutral across all options.
- Absolute words in distractors: "always," "never," "must" in a wrong option signal a trap.
  Use absolute words consistently or avoid them entirely.
- Three distractors and one obviously wrong throwaway: use four plausible options.

### 6. A cited source on every item

Every item carries a source in the answer-feedback block or in the item metadata. The source
is the real document the correct answer comes from: an FAA advisory circular, an AMT handbook
chapter, an aircraft maintenance manual section, a regulatory reference. No invented authorities.

---

## Worked example

**Topic:** Digital multimeter (DMM) in circuit-breaker inspection.
**Source:** FAA-H-8083-30B, Aviation Maintenance Technician Handbook: General, Chapter 11.
**Cognition level:** Application (apply a meter-reading rule to a scenario).

---

**Stem:**

A technician sets a digital multimeter to the ohms function and touches the probes to both
terminals of a circuit breaker that appears closed and reset. The display reads OL. What does
this reading indicate?

**Options:**

A. The circuit breaker is serviceable; its internal resistance is below the meter's minimum
   detectable range.

B. The circuit breaker contacts are open, and no complete current path exists between the probes.

C. The meter is set to an incorrect resistance range and must be switched to a higher setting
   before the reading is valid.

D. The circuit breaker has excessive resistance and must be replaced before the aircraft returns
   to service.

**Key:** B

---

**Per-option feedback:**

**A (wrong):** OL on the resistance function means the meter found NO path between the probes,
not that the path was too short to measure. A serviceable closed breaker reads near 0 ohms.
If the resistance were simply very low, the meter would display a small value, not OL.
(FAA-H-8083-30B, Ch. 11)

**B (correct):** OL (over-limit) on resistance means the meter cannot detect a conducting
path. A circuit breaker whose internal contacts are open presents infinite resistance between
its terminals. Even though the breaker appears reset externally, this reading confirms the
contacts are not making. Reset, re-inspect, and retest before returning to service.
(FAA-H-8083-30B, Ch. 11)

**C (wrong):** On an autoranging DMM, OL is not caused by an out-of-range signal. It means the
meter actively searched and found no path. Switching to a higher range will not produce a
reading because there is no resistance to measure. (FAA-H-8083-30B, Ch. 11)

**D (wrong):** OL is not a high-resistance number; it is a no-path indication. A component
with excessive but finite resistance would show a large numeric value in ohms. OL means the
circuit is open, not that the component is degraded in place.
(FAA-H-8083-30B, Ch. 11)
