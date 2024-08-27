const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Silver/18232/input.txt',
  )
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = Math.min(...input[1].split(' ').map(Number));
const E = Math.max(...input[1].split(' ').map(Number));
if (S == E) {
  console.log(1);
  return;
}
let min = E - S;

for (let i = 0; i < M; i++) {
  let tp1 = Math.min(...input[i + 2].split(' ').map(Number));
  let tp2 = Math.max(...input[i + 2].split(' ').map(Number));
  let d = Math.abs(tp1 - S) + Math.abs(tp2 - E);
  if (d < min) min = d;
}

console.log(min + 1);
