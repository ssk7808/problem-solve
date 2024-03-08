const fs = require('fs');
const input = fs
  .readFileSync(
    '/Users/sanggyo/Desktop/problem-solve/BOJ/Silver/14501/input.txt',
  )
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
let dailyMax = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const [startDay, reward] = input[i + 1].split(' ').map(Number);
  const endDay = startDay + i;
  if (endDay > N) continue;
  dailyMax[i] = dailyMax[i] + reward;
  for (let j = endDay; j < N; j++) {
    dailyMax[j] = Math.max(dailyMax[i], dailyMax[j]);
  }
}

console.log(Math.max(...dailyMax));
