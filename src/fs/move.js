import path from "path";
import fs from "fs";
import { promises as fsp } from "fs";

async function moveFile(currentDir, fileName, pathToCopy) {
  try {
    const curPath = path.resolve(currentDir, fileName);
    const copyPath = path.resolve(pathToCopy, fileName);
    fs.createReadStream(curPath).pipe(fs.createWriteStream(copyPath));
    await fsp.rm(path.resolve(currentDir, fileName));
    console.log("Moved!");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export default moveFile;
