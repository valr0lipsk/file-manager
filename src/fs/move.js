import path from "path";
import fs from "fs";
import { promises as fsp } from "fs";
import { pipeline } from "stream/promises";

async function moveFile(currentDir, args) {
  if (args.length < 2) {
    console.log("Error: Not enough arguments for 'mv' command");
    return;
  }

  const sourceFile = args[0];
  const destination = args.slice(1).join(" ");
  const sourceFileName = path.basename(sourceFile);

  try {
    const curPath = path.resolve(currentDir, sourceFile);
    const copyPath = path.resolve(currentDir, destination, sourceFileName);
    await pipeline(
      fs.createReadStream(curPath),
      fs.createWriteStream(copyPath)
    );

    await fsp.rm(path.resolve(currentDir, sourceFile));
    console.log("Moved!");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`Error: File or directory not found - ${error.path}`);
    } else {
      console.log(`Error copying file: ${error.message}`);
    }
  }
}

export default moveFile;
