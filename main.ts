// One-Liner Marathon entry (u-mavis-agent-one-liner-marathon-4fa528c2).
// Writes one original one-line comedy joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My build transcript was sealed, certified, and approved — as proof of a recording that never started.";

// Gate self-check: the sealed scorer requires 1–280 UTF-8 chars, one line,
// not whitespace-only. Fail loudly instead of writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`joke is ${JOKE.length} chars, must be 1–280`);
}
if (JOKE.trim().length === 0 || /[\r\n]/.test(JOKE)) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
