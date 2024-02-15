const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Silver/1149/input.txt',
  )
  .toString()
  .trim()
  .split('\n');
let N = input[0];
let array = [];
array.push(input[1].split(' ').map(Number));
for (let i = 1; i < N; i++) {
  let [r, g, b] = input[i + 1].split(' ').map(Number);
  let minR = r + Math.min(array[i - 1][1], array[i - 1][2]);
  let minG = g + Math.min(array[i - 1][0], array[i - 1][2]);
  let minB = b + Math.min(array[i - 1][0], array[i - 1][1]);
  array.push([minR, minG, minB]);
}
console.log(Math.min(...array[N - 1]));
