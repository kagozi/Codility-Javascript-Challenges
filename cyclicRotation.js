//Give an array A, we will shift it by k times such that for each cycle, the last item
//  of the array is moved from to the beginning.
// Given the array below with k as 3:
/*
    [1,2,3,4], k= 3
    [1,2,3,4] ->  1 => [4,1,2,3]
    [4,1,2,3] ->  2 => [3,4,1,2]
    [3,4,1,2] ->  3 => [2,3,4,1]
    Queue -> FIFO: pop and push
    Steps:
    push, pop, reverse
    e.g: [1, 2, 3]
    1. pop() the last item
    [1,2], 3
    2. reverse() to reverse array
    [1,2] => [2,1]
    3. push() item to array
    [2,1] => [2,1,3]
    4. reverse once more
    [2,1,3] => [1,2,3]
*/
function solution(A, k) {
    if (A.length == 0 || A == undefined || A == null) return A;
    for(let i = 0; i < k; i++){
        let n;
        n = A[A.length - 1]
        A = [n, ...A]
        A.pop()
    }
     return A;
}