import path from "path";
import fs from "fs/promises";

async function getNewCurrentDirectoryPath(currentDirectoryPath, newPath) {
  console.log(newPath);
  if (!newPath) {
    return path.resolve(currentDirectoryPath, "..");
  }

  if (newPath) {
    const nPath = path.resolve(currentDirectoryPath, newPath);

    try {
      await fs.access(nPath, fs.constants.F_OK);
    } catch (_) {
      console.log(`Error: path ${nPath} do not exist\n`);
      return currentDirectoryPath;
    }

    return nPath;
  }
}

export default getNewCurrentDirectoryPath;
