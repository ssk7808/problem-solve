class minHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor((curIdx - 1) / 2);
    while (this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  getMin() {
    return this.heap[0] ? this.heap[0] : null;
  }

  popHeap() {
    const min = this.heap[0];

    if (this.heap.length < 2) this.heap = [];
    else this.heap[0] = this.heap.pop();

    let curIdx = 0;
    let leftIdx = 1,
      rightIdx = 2;
    while (
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[curIdx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[curIdx])
    ) {
      const smallerIdx =
        this.heap[rightIdx] < this.heap[leftIdx] ? rightIdx : leftIdx;
      this.swap(curIdx, smallerIdx);
      curIdx = smallerIdx;
      leftIdx = curIdx * 2 + 1;
      rightIdx = curIdx * 2 + 2;
    }
    return min;
  }
}

function solution(scoville, K) {
  let heap = new minHeap();
  let count = 0;

  for (const s of scoville) heap.push(s);

  while (heap.getMin() < K) {
    let min1, min2;
    if (heap.size() > 1) {
      min1 = heap.popHeap();
      min2 = heap.popHeap();
      heap.push(min1 + min2 * 2);
      count++;
    } else return -1;
  }
  return count;
}
