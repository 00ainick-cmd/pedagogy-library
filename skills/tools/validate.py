#!/usr/bin/env python3
"""Craft lint for HTML training files. Fail the contract. Do not warn-and-ship."""
from __future__ import annotations

import argparse
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_DIRS = [
    os.path.join(ROOT, "gold"),
    os.path.join(ROOT, "examples"),
]

EMDASH = chr(0x2014)
ENDASH = chr(0x2013)
EMDASH_ENTITY = "&mdash;"
ENDASH_ENTITY = "&ndash;"
ALLOWED_HOSTS = ("fonts.googleapis.com", "fonts.gstatic.com")
DOC_EXCLUDE = {".git", "node_modules"}
CAPTION_FLOOR_PX = 16.0
BANNED_PHRASES = [
    "i sat down with",
    "delve",
    "tapestry",
    "in today's fast-paced world",
    "navigate the complexities",
    "it's important to note",
    "testament to",
    "in the realm of",
]


def notes_path_for(html_path: str) -> list[str]:
    d = os.path.dirname(html_path)
    base = os.path.splitext(os.path.basename(html_path))[0]
    return [
        os.path.join(d, base + "-notes.md"),
        os.path.join(d, base + "-review.md"),
    ]


def check_file(path: str):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    name = os.path.basename(path)
    fails, warns, infos = [], [], []

    em = text.count(EMDASH)
    if em:
        fails.append("em-dashes x%d (rule 1)" % em)
    em_entity = text.count(EMDASH_ENTITY)
    if em_entity:
        fails.append("&mdash; HTML entities x%d (rule 1)" % em_entity)
    en_entity = text.count(ENDASH_ENTITY)
    if en_entity:
        fails.append("&ndash; HTML entities x%d (rule 1)" % en_entity)

    if re.search(r"-v\d+\b", name, re.I):
        fails.append("version number in filename")

    bad_vh = re.findall(r"(?<!min-)height\s*:\s*100vh", text, re.I)
    if bad_vh:
        fails.append("height:100vh x%d (use min-height)" % len(bad_vh))

    scripts = re.findall(r'<script[^>]+src\s*=\s*["\']https?://([^/"\']+)', text, re.I)
    sheets = re.findall(r'<link[^>]+href\s*=\s*["\']https?://([^/"\']+)', text, re.I)
    for host in set(scripts) | set(sheets):
        if not any(host.endswith(a) for a in ALLOWED_HOSTS):
            fails.append("external dependency: %s (only Google Fonts allowed)" % host)

    low = text.lower()
    for phrase in BANNED_PHRASES:
        n = low.count(phrase)
        if n:
            fails.append('banned phrase "%s" x%d' % (phrase, n))

    if "@keyframes" in text and "prefers-reduced-motion" not in text:
        warns.append("@keyframes present but no prefers-reduced-motion block")

    interactive = ("<button" in low) or ("tabindex" in low) or ("onclick" in low)
    if interactive and "focus-visible" not in low and ":focus" not in low:
        warns.append("interactive but no :focus / :focus-visible styles")

    if not any(os.path.exists(c) for c in notes_path_for(path)):
        warns.append("no companion notes file")

    en = text.count(ENDASH)
    if en:
        infos.append("en-dashes x%d (ok if ranges)" % en)

    small = []
    for x in re.findall(r"font-size\s*:\s*([0-9]+(?:\.[0-9]+)?)px", text, re.I):
        try:
            v = float(x)
            if v < CAPTION_FLOOR_PX:
                small.append(v)
        except ValueError:
            pass
    if small:
        warns.append(
            "static: %d font-size px declaration(s) below %gpx (smallest %gpx)"
            % (len(small), CAPTION_FLOOR_PX, min(small))
        )

    return fails, warns, infos


SELF_PATH = os.path.abspath(__file__)


def scan_docs_emdash():
    fails = 0
    hits = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in DOC_EXCLUDE]
        for n in sorted(filenames):
            if n.lower().endswith((".md", ".py")):
                p = os.path.join(dirpath, n)
                if os.path.abspath(p) == SELF_PATH:
                    continue
                try:
                    text = open(p, encoding="utf-8").read()
                except OSError:
                    continue
                c = text.count(EMDASH) + text.count(EMDASH_ENTITY) + text.count(ENDASH_ENTITY)
                if c:
                    fails += c
                    hits.append((os.path.relpath(p, ROOT), c))
    return fails, hits


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", action="append", help="folder(s) to scan")
    ap.add_argument("--fail-only", action="store_true")
    args = ap.parse_args()

    dirs = [os.path.join(ROOT, d) if not os.path.isabs(d) else d for d in args.dir] if args.dir else DEFAULT_DIRS
    files = []
    for d in dirs:
        if os.path.isdir(d):
            for n in sorted(os.listdir(d)):
                if n.lower().endswith(".html"):
                    files.append(os.path.join(d, n))

    total_fail = 0
    fail_files = 0
    for path in files:
        fails, warns, infos = check_file(path)
        if fails:
            fail_files += 1
            total_fail += len(fails)
        if args.fail_only and not fails:
            continue
        rel = os.path.relpath(path, ROOT)
        status = "FAIL" if fails else ("WARN" if warns else "PASS")
        print("[%s] %s" % (status, rel))
        for x in fails:
            print("       FAIL  " + x)
        for x in warns:
            print("       warn  " + x)
        if not args.fail_only:
            for x in infos:
                print("       info  " + x)

    doc_fail = 0
    if not args.dir:
        doc_fail, doc_hits = scan_docs_emdash()
        if doc_hits:
            print("\n--- doc em-dash check (.md, .py across the bundle) ---")
            for rel, c in doc_hits:
                print("[FAIL] %s" % rel)
                print("       FAIL  em-dashes x%d (rule 1)" % c)

    print(
        "\n%d HTML files scanned | %d with FAILs | %d HTML FAILs | %d doc em-dash FAILs"
        % (len(files), fail_files, total_fail, doc_fail)
    )
    return 1 if (total_fail or doc_fail) else 0


if __name__ == "__main__":
    sys.exit(main())
