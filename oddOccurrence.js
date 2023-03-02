// Solution one:
function solution(A) {
  for (let i = 0; i < A.length; i++) {
    let counter = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return A[i];
    }
  }
}
/*
Solution 2:
function solution(A) {
  for (let i = 0; i < A.length; i++) {
    let counter = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        counter++;
      }
    }
    if (counter % 2 !== 0) {
      return A[i];
    }
  }
}

*/
/* 
Solution 3:
Using a hash table:
function solution(A){
    let hash = {};
    //isolate unique hashes
    
    for(let i = 0; i < A.length; i++){
        if(!hash.hasOwnProperty([A[i]])|| hash[A[i]] == 0) hash[A[i]] = 1;
        else hash[A[i]] = 0;
    }
    //identify unique hashes
    for(var key in hash){
        if(hash.hasOwnProperty(parseInt(key))){
            if(hash[parseInt(key)] == 1){
                return parseInt(key);
            }
        }
    }
}
*/