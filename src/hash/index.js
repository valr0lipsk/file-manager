import fs from "fs/promises";
import path from "path";
import { createHash } from "crypto";

async function getHash(currentDir, fileName) {
  try {
    const file = await fs.readFile(path.resolve(currentDir, fileName));
    const hash = createHash("sha256").update(file).digest("hex");
    console.log(hash);
  } catch (_) {
    console.error(`File "${fileName}" does not exist`);
  }
}

export default getHash;
