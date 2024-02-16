const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Silver/11659/input.txt',
  )
  .toString()
  .trim()
  .split('\n');
const output = [];

let [N, M] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);
let sums = new Array(numbers.length + 1).fill(0);
numbers.forEach((v, i) => {
  sums[i + 1] = sums[i] + v;
});

for (let i = 0; i < M; i++) {
  let [s, e] = input[i + 2].split(' ').map(Number);
  output.push(sums[e] - sums[s - 1]);
}

console.log(output.join('\n'));
