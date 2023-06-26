import fs from "fs/promises";
import path from "path";

async function createFile(currentDir, fileName) {
  try {
    await fs.appendFile(path.resolve(currentDir, fileName), "", { flag: "ax" });
    console.log(`File "${fileName}" created\n`);
  } catch (err) {
    console.error(`File "${fileName}" already exists\n`);
  }
}

export default createFile;
