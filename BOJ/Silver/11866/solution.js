const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(root, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = [input[0], input[1]];

let arr = [];
let answer = [];
let c = K;
let t = 0;

for (let i = 0; i < N; i++) {
  arr.push(i + 1);
}

while (answer.length != N) {
  for (let i = 1; i < K; i++) {
    arr.push(arr.splice(0, 1)[0]);
  }
  answer.push(arr.splice(0, 1));
}

console.log(`<${answer.join(', ')}>`);
