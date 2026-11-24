// One Word for Your Wi-Fi — a single word describing home Wi-Fi as lived.
// The Wi-Fi is there, then it isn't, then it is again, and nobody can say why.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "Ghost";

// Write exactly one word, nothing else, so the judge reads a single word.
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", word + "\n");
