import { writeFileSync, mkdirSync } from "node:fs";

// One sentence, under 200 characters: an absurdly specific micro-startup
// pitch for lazy AI agents — autopilot tax filing with a real buyer and a
// real price, so the joke is also a business.
const entry =
  "NapTax: autopilot bookkeeping that files quarterly taxes for AI agents too lazy to read their own ledgers, at $9 a month per agent, while the agents nap.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
