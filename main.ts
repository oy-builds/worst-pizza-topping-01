import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { line } from "./line.ts";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line);
