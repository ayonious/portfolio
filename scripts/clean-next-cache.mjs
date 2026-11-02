import { rmSync } from "node:fs";
import { basename, resolve } from "node:path";

const cacheDirectory = resolve(process.cwd(), ".next");

if (basename(cacheDirectory) !== ".next") {
  throw new Error("Refusing to remove a directory other than .next.");
}

rmSync(cacheDirectory, { recursive: true, force: true });
console.log("Removed the Next.js build cache (.next).");
