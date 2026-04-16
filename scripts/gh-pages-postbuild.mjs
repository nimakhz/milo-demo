import { copyFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const buildDir = path.resolve("build");
const fallback = path.join(buildDir, "404.html");
const index = path.join(buildDir, "index.html");

if (!existsSync(fallback)) {
    console.warn("[postbuild] build/404.html not found; skipping GitHub Pages index.html fix.");
    process.exit(0);
}

await mkdir(buildDir, { recursive: true });
await copyFile(fallback, index);
console.log("[postbuild] Copied build/404.html -> build/index.html for GitHub Pages.");

