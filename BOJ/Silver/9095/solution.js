const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs
  .readFileSync(root, 'utf8')
  .toString()
  .trim().split('\n').map(v=>+v);
const T = input.shift();
const answer=[];
for (let i=0; i<=T; i++) {
    let arr=[1,2,4];    
    const N = input[i];
    for (let j=3;j<N;j++) {
        arr[j] = arr[j-3]+arr[j-2]+arr[j-1];
    }
    answer.push(arr[N-1]);
}

console.log(answer.join(' '));