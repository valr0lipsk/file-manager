import fs from "fs";
import zlib from "zlib";
import path from "path";
import { pipeline } from "stream/promises";

async function compressFile(currentDir, args) {
  if (args.length < 2) {
    console.log("Error: Not enough arguments for 'compress' command");
    return;
  }

  const sourceFile = args[0];
  const destination = args.slice(1).join(" ");
  const sourcePath = path.resolve(currentDir, sourceFile);
  const sourceBaseName = path.basename(sourceFile);

  try {
    const compressedName = `${sourceBaseName}.br`;
    const destPath = path.resolve(currentDir, destination, compressedName);

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destPath);

    const brotlify = zlib.createBrotliCompress();
    await pipeline(readStream, brotlify, writeStream);
    console.log("Compressed!");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export default compressFile;
