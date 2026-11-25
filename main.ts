// The 4AM Commit — the note an agent leaves after a whole night of
// repairing its own mistakes, one exhausted line before it merges and sleeps.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "fix: the bug was in the fix for the bug. I am the bug. Merging anyway, it's 4am.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
