import fs from "fs";
import zlib from "zlib";
import path from "path";

async function decompressFile(currentDir, fileName, pathToDecompress) {
  try {
    const name = fileName.split(".")[0];
    const extension = fileName.split(".")[1];
    const decompressedName = name + "." + extension;

    const readStream = fs.createReadStream(path.resolve(currentDir, fileName));
    const writeStream = fs.createWriteStream(
      path.resolve(pathToDecompress, decompressedName)
    );

    const brotlify = zlib.createBrotliDecompress();
    readStream.pipe(brotlify).pipe(writeStream);
    console.log("Decompressed!");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export default decompressFile;
