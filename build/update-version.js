/** Updates the version number in the metadata.
 * This updates the version number in the metadata to the version specified in package.json.
 * @since 0.0.6
*/

// Date: 2025-09-30 (Europe/London)
// build/update-version.js — replace the entire @version line, regardless of format
import fs from "fs";
import { consoleStyle } from "./utils.js";

console.log(`${consoleStyle.BLUE}Starting update-version...${consoleStyle.RESET}`);

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));
const version = pkg.version;

let meta = fs.readFileSync("src/SkirkMarble.meta.js", "utf-8");

// Replace the entire @version line (supports 1.2.3, 1.2.3-exp.4, 1.2.3+sha, etc.)
meta = meta.replace(/(^\s*\/\/\s*@version\s+).+$/m, `$1${version}`);

fs.writeFileSync("src/SkirkMarble.meta.js", meta);
console.log(
    `${consoleStyle.GREEN}Updated${consoleStyle.RESET} userscript version to ${consoleStyle.MAGENTA}${version}${consoleStyle.RESET}`
);