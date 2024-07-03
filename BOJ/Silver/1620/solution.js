
const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n').map(v=>v.trim());

const [N,M] = input.shift().split(' ').map(v=>+v);
let dict={};
let arr=input.slice(0, N);
let answer=[];
for (let i=0; i<N; i++) {
    dict[input[i]] = i+1;
}
for (let i=N; i<N+M; i++) {
    if (isNaN(Number(input[i]))) {
        answer.push(dict[input[i]]);
    }
    else {
        answer.push(arr[Number(input[i])-1]);
    }
}

console.log(answer.join('\n'))