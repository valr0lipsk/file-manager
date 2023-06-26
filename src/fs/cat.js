import path from "path";
import fs from "fs";

async function readFileContent(currentDir, fileName) {
  try {
    const pathToFile = path.resolve(currentDir, fileName);
    const stream = fs.createReadStream(pathToFile);
    await new Promise((resolve, reject) => {
      stream.on("data", function (obj) {
        process.stdout.write(`File content: ${obj}\n`);
      });
      stream.on("end", resolve);
      stream.on("error", reject);
    });
  } catch (err) {
    console.error(`File "${fileName}" does not exist\n`);
  }
}

export default readFileContent;
