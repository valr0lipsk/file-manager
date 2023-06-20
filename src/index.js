import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import os from "os";
import { getUpPath } from "./fs/up.js";

async function main() {
  const user = process.argv[3].split("=")[1];
  let currentDir = os.homedir();
  const rl = readline.createInterface({ input, output });

  console.log(`Welcome to the File Manager, ${user}!\n`);
  console.log(`You are currently in ${os.homedir()}\n`);

  const answer = await rl.question("Please enter a command\n");

  switch (answer) {
    case "up":
      currentDir = getUpPath(currentDir);
      console.log(`You are currently in ${currentDir}`);
      break;
    default:
      console.log("Invalid command");
  }

  process.on("exit", function () {
    console.log(`Thank you for using File Manager, ${user}, goodbye!\n`);
  });
}

await main();
