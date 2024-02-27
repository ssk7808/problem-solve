const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Bronze/4153/input.txt',
  )
  .toString()
  .trim()
  .split('\n');

input.forEach((line) => {
  let [a, b, c] = line
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  if (a == 0 && b == 0 && c == 0) return;
  else {
    if (a * a + b * b == c * c) console.log('right');
    else console.log('wrong');
  }
});
