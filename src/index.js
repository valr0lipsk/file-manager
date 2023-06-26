import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import os from "os";
import { getUpPath, getNewPath } from "./navigation/index.js";
import {
  listFromDirectory,
  createFile,
  deleteFile,
  renameFile,
  readFileContent,
  copyFile,
  moveFile,
} from "./fs/index.js";
import getOSInfo from "./os/index.js";
import { parseCommand } from "./parseCommand.js";
import getHash from "./hash/index.js";
import { compressFile, decompressFile } from "./zip/index.js";

async function main() {
  const user = process.argv[3].split("=")[1];
  let currentDir = os.homedir();
  const rl = readline.createInterface({ input, output });
  let hasNextCommand = true;

  console.log(`Welcome to the File Manager, ${user}!\n`);
  console.log(`You are currently in ${os.homedir()}\n`);

  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${user}, goodbye!\n`);
  });

  while (hasNextCommand) {
    const answer = await rl.question("Please enter a command\n");

    switch (parseCommand(answer)) {
      case "up":
        currentDir = getUpPath(currentDir);
        break;
      case "cd":
        currentDir = await getNewPath(currentDir, answer.split(" ")[1]);
        break;
      case "ls":
        await listFromDirectory(currentDir);
        break;
      case "add":
        await createFile(currentDir, answer.split(" ")[1]);
        break;
      case "rm":
        await deleteFile(currentDir, answer.split(" ")[1]);
        break;
      case "rn":
        await renameFile(
          currentDir,
          answer.split(" ")[1],
          answer.split(" ")[2]
        );
        break;
      case "cat":
        await readFileContent(currentDir, answer.split(" ")[1]);
        break;
      case "cp":
        await copyFile(currentDir, answer.split(" ")[1], answer.split(" ")[2]);
        break;
      case "mv":
        await moveFile(currentDir, answer.split(" ")[1], answer.split(" ")[2]);
        break;
      case "os":
        await getOSInfo(answer.split(" ")[1]);
        break;
      case "hash":
        await getHash(currentDir, answer.split(" ")[1]);
        break;
      case "compress":
        await compressFile(
          currentDir,
          answer.split(" ")[1],
          answer.split(" ")[2]
        );
        break;
      case "decompress":
        await decompressFile(
          currentDir,
          answer.split(" ")[1],
          answer.split(" ")[2]
        );
        break;
      default:
        console.log("Invalid command\n");
    }

    console.log(`You are currently in ${currentDir}\n`);
  }
}

await main();
