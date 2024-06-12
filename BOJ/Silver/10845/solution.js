const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Silver/10845/input.txt',
  )
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
let queue = [];
let answer = [];

const exec = {
  push: (num) => {
    queue.push(num);
  },
  pop: (isEmpty) => {
    const result = isEmpty ? -1 : queue.splice(0, 1)[0];
    answer.push(result);
  },
  size: (isEmpty) => {
    answer.push(queue.length);
  },
  empty: (isEmpty) => {
    isEmpty ? answer.push(1) : answer.push(0);
  },
  front: (isEmpty) => {
    isEmpty ? answer.push(-1) : answer.push(queue[0]);
  },
  back: (isEmpty) => {
    isEmpty ? answer.push(-1) : answer.push(queue[queue.length - 1]);
  },
};

for (let i = 0; i < N; i++) {
  const [oper, number] = input[i + 1].split(' ');
  const ql = queue.length;
  if (oper === 'push') exec[oper](Number(number));
  else {
    if (ql === 0) exec[oper](true);
    else exec[oper](false);
  }
}

console.log(answer.join('\n'));
