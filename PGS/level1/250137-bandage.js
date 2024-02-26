function solution(bandage, health, attacks) {
    const lastAttackTime = attacks[attacks.length-1][0];
    const maxHealth = health;
    let streak = -1;
    let attackCount = 0;
    for (let time=0; time<=lastAttackTime; time++) {
        if (attacks[attackCount][0] == time) {
            health-=attacks[attackCount][1];
            if (health<=0) return -1;
            attackCount++;
            streak = 0;
        }
        else {
            health += bandage[1];
            streak ++;
            if (streak == bandage[0]) {
                health+=bandage[2];
                streak = 0;
            }
            if (health > maxHealth) health=maxHealth;
        }
    }
    
    return health;
}