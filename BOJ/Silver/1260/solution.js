const fs = require('fs');
const root =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(root, 'utf8').toString().trim().split('\n');
const [N, M, V] = input
  .shift()
  .split(' ')
  .map((v) => +v);
const graph = Array(N + 1)
  .fill(null)
  .map(() => []);
const visited = new Array(N + 1).fill(0);
const dfsAnswer = [];
const bfsAnswer = [];

for (let i = 0; i < M; i++) {
  const [a, b] = input[i].split(' ').map((v) => +v);
  graph[a].push(b);
  graph[b].push(a);
}

graph.map((arr) => arr.sort((a, b) => a - b));

function dfs(v) {
  visited[v] = 1;
  dfsAnswer.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    if (visited[graph[v][i]] !== 1) {
      dfs(graph[v][i]);
    }
  }
}

dfs(V);

const queue = [V];
const bfsVisited = new Array(N + 1).fill(0);
while (queue.length > 0) {
  const v = queue.shift();
  if (bfsVisited[v]) continue;
  bfsAnswer.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    bfsVisited[v] = 1;
    queue.push(graph[v][i]);
  }
}

console.log(dfsAnswer.join(' '));
console.log(bfsAnswer.join(' '));
