const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(root, 'utf8')
  .toString()
  .trim()
  .split('\n');


const N = Number(input[0]);
const M = Number(input[2]);
const inNumbs= input[1].split(' ').map(Number);
const outNumbs = input[3].split(' ').map(Number);
let dict = {};
let answer=[];

for (let i=0; i<N; i++) {
    if (dict[inNumbs[i]]) dict[inNumbs[i]]++;
    else dict[inNumbs[i]] = 1;
}

for (let i=0; i<M; i++) {
    if (dict[outNumbs[i]]) answer.push(dict[outNumbs[i]]);
    else answer.push(0);
}

console.log(answer.join(' '));