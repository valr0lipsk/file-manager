import path from "path";
import fs from "fs/promises";
import exp from "constants";

async function renameFile(currentDir, oldName, newName) {
  try {
    await fs.rename(
      path.resolve(currentDir, oldName),
      path.resolve(currentDir, newName)
    );
    console.log(`File "${oldName}" renamed to "${newName}"\n`);
  } catch (_) {
    console.error(`File "${oldName}" does not exist\n`);
  }
}

export { renameFile };
