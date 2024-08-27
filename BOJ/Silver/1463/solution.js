const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim();

const N = parseInt(input);
let x = 1;
let count = 0;

function foo(n) {
  while (3 * x < n) {
    x *= 3;
    count++;
  }
  if (x == n) return;

  while (2 * x < n) {
    x *= 2;
    count++;
  }
  if (x == n) return;

  while (x != n) {
    x += 1;
    count++;
  }
  return;
}
foo(N);
console.log(count);
