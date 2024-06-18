const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

const [N, I] = input
  .shift()
  .split(' ')
  .map((v) => +v);

console.log(input.sort()[I - 1]);
