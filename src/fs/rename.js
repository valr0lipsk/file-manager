import path from "path";
import fs from "fs/promises";

async function renameFile(currentDir, oldName, newName) {
  if (!oldName || !newName) {
    console.log("Error: Not enough arguments for 'rename' command");
    return;
  }

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

export default renameFile;
