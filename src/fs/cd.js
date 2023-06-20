import path from "path";
import fs from "fs"
import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

function getNewCurrentDirectoryPath(currentDirectoryPath, newPath) {
  const nPath = path.resolve(currentDirectoryPath, newPath);
  const rl = readline.createInterface({ input, output });
  // const isExist = async p => await fs.access(p).then(() => true).catch(() => false);
  // console.log(nPath)
  // isExist(nPath)

  fs.access(nPath, fs.F_OK, async function(err) {
    if (!err) {
        return nPath
    } else {
       console.log(`Error: path ${nPath} do not exist\n`);
    return currentDirectoryPath;
    }
});
  // try {
  //   await fs.access(nPath);
  // } catch (err) {
  //   rl.write(`Error: path ${nPath} do not exist\n`);
  //   return currentDirectoryPath;
  // }

  return nPath;
  // const isPathExists = await isExist(nPath)
//   if (isPathExists) 
//   return nPath
//   else   {console.error('Path does not exists'); 
// return;}
}

export { getNewCurrentDirectoryPath };
