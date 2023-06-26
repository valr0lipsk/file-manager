import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import os from "os";
import { getUpPath } from "./fs/up.js";
import { getNewCurrentDirectoryPath } from "./fs/cd.js";
import { parseCommand } from "./parseCommand.js";
import { listFromDirectory } from "./fs/ls.js";
import { createFile } from "./fs/create.js";
import { deleteFile } from "./fs/delete.js";
import { renameFile } from "./fs/rename.js";
import { readFileContent } from "./fs/cat.js";

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
        currentDir = await getNewCurrentDirectoryPath(
          currentDir,
          answer.split(" ")[1]
        );
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
      default:
        console.log("Invalid command\n");
    }

    console.log(`You are currently in ${currentDir}\n`);
  }
}

await main();
