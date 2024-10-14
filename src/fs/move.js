import path from "path";
import fs from "fs";
import { promises as fsp } from "fs";

async function moveFile(currentDir, args) {
  if (args.length < 2) {
    console.log("Error: Not enough arguments for 'mv' command");
    return;
  }

  const sourceFile = args[0];
  const destination = args.slice(1).join(" ");

  try {
    const curPath = path.resolve(currentDir, sourceFile);
    const copyPath = path.resolve(currentDir, destination, sourceFile);
    fs.createReadStream(curPath).pipe(fs.createWriteStream(copyPath));
    await fsp.rm(path.resolve(currentDir, sourceFile));
    console.log("Moved!");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export default moveFile;
