import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question(
    'What do you think of Node.js? '
);

console.log(
    `Thank you for your valuable feedback: ${answer} \n`
);


process.on('exit', function (){
    console.log('Thank you for using File Manager, Username, goodbye!\n');
});

rl.close();
