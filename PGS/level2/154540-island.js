function solution(maps) {
  let answer = [];
  let visited = [];
  let arr = maps.map((m) => m.split(''));
  const lenX = arr[0].length;
  const lenY = arr.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < lenY; i++) {
    for (let j = 0; j < lenX; j++) {
      if (arr[i][j] !== 'X') {
        answer.push(DFS(j, i, arr[i][j]));
      }
    }
  }
  function DFS(x, y, num) {
    num = Number(arr[y][x]);
    arr[y][x] = 'X';
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < lenX && ny < lenY) {
        if (arr[ny][nx] !== 'X') {
          num += DFS(nx, ny, num);
        }
      }
    }
    return num;
  }
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
