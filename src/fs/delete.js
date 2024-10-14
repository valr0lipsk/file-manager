import fs from "fs/promises";
import path from "path";

async function deleteFile(currentDir, fileName) {
  if (!fileName) {
    console.log("Error: Not enough arguments for 'create' command");
    return;
  }

  try {
    await fs.rm(path.resolve(currentDir, fileName));
    console.log(`File "${fileName}" deleted\n`);
  } catch (err) {
    console.error(`File "${fileName}" does not exist\n`);
  }
}

export default deleteFile;
