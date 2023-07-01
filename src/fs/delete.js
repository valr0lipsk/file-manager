import fs from "fs/promises";
import path from "path";

async function deleteFile(currentDir, fileName) {
  try {
    await fs.rm(path.resolve(currentDir, fileName));
    console.log(`File "${fileName}" deleted\n`);
  } catch (err) {
    console.error(`File "${fileName}" does not exist\n`);
  }
}

export default deleteFile;
