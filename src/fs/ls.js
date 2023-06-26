import fs from "fs";
import { promises as fsp } from "fs";
import path from "path";

async function listFromDirectory(dirPath) {
  const dir = await fsp.readdir(dirPath);
  const objs = dir.map((e) => {
    const pathToFile = path.resolve(dirPath, e);
    try {
      const stat = fs.lstatSync(pathToFile);
      if (stat.isFile()) {
        return { name: e, type: "file" };
      } else return { name: e, type: "directory" };
    } catch {
      return;
    }
  });
  objs.sort((a, b) => {
    if (a.type === "directory") return -1;
    if (b.type === "directory") return 1;
    return 0;
  });
  console.table(objs);
}

export default listFromDirectory;
