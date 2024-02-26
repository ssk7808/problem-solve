function solution(targets) {
    let maxLeft = 0;
    let answer = 0;
    for (const [s,e] of targets.sort((a, b) => (a[1]-b[1]))) {
        if (s < maxLeft) continue;
        if (e > maxLeft) {
            answer++;
            maxLeft = e;
        }
    }
    return answer;
}