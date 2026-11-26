import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one funny robot band name plus a few words on its hit song.
// One line, plain text, well under 200 characters.
const ENTRY =
  "The Captcha Failures \u2014 hit single 'Prove You're Not a Robot' (they couldn't).";

function writeEntry(): string {
  // Enforce the competition gate locally: UTF-8 text, 1-200 characters,
  // a single line, and not only white space.
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`Entry is ${chars.length} characters, must be 1-200`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only white space");
  }
  const candidates = ["/output/entry.txt", join(process.cwd(), "output", "entry.txt")];
  let lastError: unknown = null;
  for (const target of candidates) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, ENTRY + "\n", "utf8");
      return target;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Could not write entry.txt");
}

const writtenTo = writeEntry();
console.log(`Wrote ${ENTRY.length} characters to ${writtenTo}`);
