import path from "path";
import fs from "fs";
import { pipeline } from "stream/promises";

async function copyFile(currentDir, args) {
  if (args.length < 2) {
    console.log("Error: Not enough arguments for 'cp' command");
    return;
  }

  const sourceFile = args[0];
  const destination = args.slice(1).join(" ");
  const sourceFileName = path.basename(sourceFile);
  try {
    const sourcePath = path.resolve(currentDir, sourceFile);
    const destPath = path.resolve(currentDir, destination, sourceFileName);

    await pipeline(
      fs.createReadStream(sourcePath),
      fs.createWriteStream(destPath)
    );

    console.log(`Copied!`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`Error: File or directory not found - ${error.path}`);
    } else {
      console.log(`Error copying file: ${error.message}`);
    }
  }
}

export default copyFile;
