import fs from "fs";
import zlib from "zlib";
import path from "path";

async function compressFile(currentDir, fileName, pathToCompress) {
  try {
    const compressedName = `${fileName}.br`;
    const readStream = fs.createReadStream(path.resolve(currentDir, fileName));
    const writeStream = fs.createWriteStream(
      path.resolve(pathToCompress, compressedName)
    );

    const brotlify = zlib.createBrotliCompress();
    readStream.pipe(brotlify).pipe(writeStream);
    console.log("Compressed!");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export default compressFile;
