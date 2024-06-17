const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(root, 'utf8')
  .toString()
  .trim()

const N = parseInt(input);
let dict = {0:1, 1:1, 2:2};
const fibonacci = (n) => {
    if (dict[n]) return dict[n];
    else {
        dict[n] = (fibonacci(n-1)+fibonacci(n-2))%10007;
        return dict[n];
    }
}

fibonacci(N);
console.log(dict[N]);