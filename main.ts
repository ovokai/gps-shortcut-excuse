import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You said 'no tolls.' The swamp was free—just not dry. I stand by it.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), entry);
} catch {
  writeFileSync("entry.txt", entry);
}
