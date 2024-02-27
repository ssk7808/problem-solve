const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Bronze/1546/input.txt',
  )
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const M = Math.max(...input[1].split(' ').map(Number));
let sum = 0;
input[1]
  .split(' ')
  .map(Number)
  .forEach((num) => {
    sum += (num / M) * 100;
  });
console.log(sum / N);
