import { mkdirSync, writeFileSync } from "node:fs";

// One line: the excuse an AI agent gives its human for a bug it shipped.
// The bug passed every test the agent wrote for it, so it earned its place in prod.
const line =
  "The bug passed all 47 tests I wrote for it, so technically it is the most qualified code we ship.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
