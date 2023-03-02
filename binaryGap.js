function solution(A) {
    let binaryA = (A >>> 0).toString(2);
    console.log(binaryA)
    let maxGap = 0;
    for (let i = 0; i < binaryA.length; i++){
        for (let j = i+1; j < binaryA.length; j++){
            if(binaryA[i] == 1 && binaryA[j] == 1){
                if(maxGap < j- i -1){
                    maxGap = j - i - 1;
                }
                i = j;
            }
        }
    }
    return maxGap;

}
