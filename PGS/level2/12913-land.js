function solution(land) {
    let N = land.length;
    let max = 0;
        
    for(let i=1;i<N;i++) { 
        for (let j=0;j<4;j++){
            let partMax=0;
            for (let k=0;k<4;k++){
                let sum=0;
                if (k!=j) {
                    sum += land[i-1][k];
                    sum += land[i][j];
                }
                if (partMax<sum) partMax=sum;
            }
            land[i][j] = partMax;  
        }
    }      
    return Math.max(...land[N-1]);
}