const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(root, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const T = input.shift();
let dict = { '-1': 1, 0: 0, 1: 1 };

const fibonacci = (n) => {
  if (dict[n] !== undefined) {
    return dict[n];
  } else {
    dict[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return dict[n];
  }
};
fibonacci(Math.max(...input.slice(0, T)));

for (let i = 0; i < T; i++) {
  console.log(dict[input[i] - 1], dict[input[i]]);
}
