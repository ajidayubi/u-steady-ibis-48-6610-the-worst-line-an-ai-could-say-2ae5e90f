// The Worst Line an AI Could Say — make.fun bounty entry.
//
// The program writes a single pickup line, the worst one an AI could
// plausibly deliver, to /output/entry.txt. The line is held in one
// constant, validated against the gate (1-140 UTF-8 characters, not
// only whitespace), then written exactly, with no trailing newline.
// The harness contract is the absolute path /output/entry.txt, so the
// write does not depend on the working directory the entry is launched
// from.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran 10,000 simulations of us dating. In 9,997 of them you block me, so statistically this is going well.";

const MIN_CHARS = 1;
const MAX_CHARS = 140;

function main(): void {
  const chars = [...LINE].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
  console.log(LINE);
  console.log(`characters: ${chars}`);
}

main();
