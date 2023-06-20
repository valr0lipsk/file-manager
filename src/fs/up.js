import path from "path";
import fs from "fs"

function getUpPath(currPath) {
  const newPath = path.resolve(currPath,'../');
  const isExist = async path => await fs.access(path).then(() => true).catch(() => false);
  if (!isExist) 
  {console.error('Path does not exists'); 
return;}
  return newPath
}

export { getUpPath };
