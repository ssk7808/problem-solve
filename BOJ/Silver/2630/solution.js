const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');

let N = parseInt(input.shift());
let map = input.map((e) => e.split(' ').map((v) => +v));
const answer = [0, 0];

function square(width, i, j) {
  let first = map[i][j];
  if (width === 1) {
    first == 0 ? answer[0]++ : answer[1]++;
    return;
  }
  for (let k = i; k < i + width; k++) {
    for (let l = j; l < j + width; l++) {
      if (map[k][l] !== first) {
        const half = width / 2;
        square(half, i, j);
        square(half, i + half, j);
        square(half, i, j + half);
        square(half, i + half, j + half);
        return;
      }
    }
  }
  first === 0 ? answer[0]++ : answer[1]++;
  return;
}

square(N, 0, 0);
console.log(answer.join('\n'));
