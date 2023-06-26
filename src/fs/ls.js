import fs from "fs";

async function listFromDirectory(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) throw new Error("FS operation failed");
    files.forEach((file) => {
      console.log(file);
    });
  });
}

export default listFromDirectory;
