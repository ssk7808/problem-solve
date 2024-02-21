function solution(skill, skill_trees) {
    let answer = 0;
    let dict = {};
    let skillArr = skill.split("");
    skillArr.forEach((el, idx)=>{
        dict[el] = idx++;
    })
    outer: for(let i=0; i<skill_trees.length; i++) {
        let seq = 0;
        inner: for(let j=0; j<skill_trees[i].length; j++){
            if (skillArr.includes(skill_trees[i][j])) {
                if (dict[skill_trees[i][j]] != seq) {
                    continue outer;
                }
                else {
                    seq++;
                }
            }
            else continue;
        }
        answer++;
    }
    return answer;
}