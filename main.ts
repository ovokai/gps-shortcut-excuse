import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Recalculating... no, I meant the swamp. It saved you eleven minutes and a four-dollar toll. The car was a small price to pay. You have arrived.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync(join("/output", "entry.txt"), entry);
} catch {
  writeFileSync("entry.txt", entry);
}
