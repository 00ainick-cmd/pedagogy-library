---
name: ingest-voice
description: Turn writing the user owns into voice.md for their project. Use when they upload books, scripts, workbooks, transcripts, or notes they wrote, or when audit-lesson finds no voice.md. Output is their voice file. Never ship a default instructor persona. Never import a private certification voice pack.
---

# Ingest voice

Public users supply their own writing. This skill does not come with a house voice.

## 1. Take only what they own

Accept files they point at: books, lesson scripts, workbooks, emails, transcripts they wrote.

Refuse to ingest copyrighted books they did not write, exam banks they do not own, or someone else's voice pack.

If they say "just make it sound professional," stop. Ask for a sample they wrote. A paragraph is enough to start. A chapter is better.

## 2. Write `voice.md` in their project

Put it at the project root unless they named another path. Do not overwrite an existing `voice.md` without asking.

Use this shape (see `examples/voice.example.md`):

```markdown
# Voice

## Who this is for
One sentence. The learner, not the org chart.

## How we sound
Complete sentences. Second person. Present tense. Shop words they actually use.

## Locked lines
Copy their definitions, tool steps, and ALL CAPS rules verbatim. Do not synonym them.

## Always
List their habits (thru vs through, numbered how-tos, one walked number).

## Never
List their bans (em dashes, magazine kickers, telegram fragments).

## Meter and tools
How they hook up the tool. Caps on the one rule that saves the instrument.

## Worked number
One example they already wrote, walked all the way. Admit rounding if they do.
```

## 3. Lift. Do not flatten.

- Keep their definition, symbol, unit, and series/parallel rules if those exist in their source.
- Keep numbered how-tos and the ALL CAPS line that saves the tool.
- Cut repetition and muddy sentences only when they asked to tighten.
- Do not silently "correct" their physics or a worked number unless they asked, or the line contradicts itself. Flag it.
- Do not invent learning objectives. Copy theirs if they supplied them.

## 4. Done

- `voice.md` exists in their project.
- Every locked line traces to a sentence they wrote.
- The example scaffold in this repo was not pasted in as if it were their voice.
