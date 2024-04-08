class Heap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMax() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const max = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return max;
    }
    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      const maxIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(maxIdx, curIdx);
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return max;
  }
}

function solution(n, k, enemy) {
  const len = enemy.length;
  let count = 0;
  let heap = new Heap();

  for (let i = 0; i < len; i++) {
    heap.push(enemy[i]);
    n -= enemy[i];
    if (n < 0) {
      if (k == 0 || n + heap.getMax() < 0) return count;
      n += heap.pop();
      k--;
    }
    count++;
  }
  return count;
}
