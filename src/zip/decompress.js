import fs from "fs";
import zlib from "zlib";
import path from "path";
import { pipeline } from "stream/promises";

async function decompressFile(currentDir, args) {
  if (args.length < 2) {
    console.log("Error: Not enough arguments for 'decompress' command");
    return;
  }

  const sourceFile = args[0];
  const destination = args.slice(1).join(" ");
  const sourcePath = path.resolve(currentDir, sourceFile);
  const sourceBaseName = path.basename(sourceFile);

  try {
    const name = sourceBaseName.split(".")[0];
    const extension = sourceBaseName.split(".")[1];
    const decompressedName = name + "." + extension;

    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(
      path.resolve(currentDir, destination, decompressedName)
    );
    const brotlify = zlib.createBrotliDecompress();

    await pipeline(readStream, brotlify, writeStream);

    console.log("Decompressed!");
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

export default decompressFile;
