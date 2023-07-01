import path from "path";
import fs from "fs";

async function copyFile(currentDir, fileName, pathToCopy) {
  try {
    const curPath = path.resolve(currentDir, fileName);
    const copyPath = path.resolve(pathToCopy, fileName);
    fs.createReadStream(curPath).pipe(fs.createWriteStream(copyPath));
    console.log("Copied!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export default copyFile;
