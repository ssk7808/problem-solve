const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Bronze/1259/input.txt',
  )
  .toString()
  .trim()
  .split('\n');

input.forEach((number) => {
  if (number == 0) return;
  if (number.length == 1) {
    console.log('yes');
    return;
  }
  const half = Math.floor(number.length / 2);
  for (let i = 0; i < half; i++) {
    if (number[i] == number[number.length - 1 - i]) {
      if (i == half - 1) {
        console.log('yes');
        break;
      }
    } else {
      console.log('no');
      break;
    }
  }
});
