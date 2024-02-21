function solution(cacheSize, cities) {
    let cache = new Array(cacheSize);
    let exeTime = 0;
    if (cacheSize==0) return 5*cities.length;
    for (let i=0; i<cities.length; i++) {
        for (let j=0; j<cacheSize; j++) {
            if (cities[i].toLowerCase() == cache[j]){
                exeTime += 1;
                cache.splice(j,1);
                cache.unshift(cities[i].toLowerCase());
                if (i==cities.length-1) return exeTime;
                break;           
            }
            if (j==cacheSize-1) {
                exeTime += 5;
                cache.pop();
                cache.unshift(cities[i].toLowerCase());
            }
        }
    }
    return exeTime;
}