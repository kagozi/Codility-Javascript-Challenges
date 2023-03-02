// The function first creates an empty object seen to keep track of
// which integers have been seen so far.It then iterates over the 
// elements of A, adding each positive integer to seen.

// Finally, the function loops over all positive integers from 1 to 1000000,
// checking if each integer is in seen.If it finds an integer that is not in seen,
// it returns that integer.If it reaches the end of the loop without finding a missing integer,
// it returns 1000001, since all integers in the range 1 to 1000000 must be present in the array.

function solution(A) {
    let seen = {};
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            seen[A[i]] = true;
        }
    }
    for (let i = 1; i <= 1000000; i++) {
        if (!seen[i]) {
            return i;
        }
    }
    return 1000001;
}


// function solution(A) {
//     let n = A.length;
//     let seen = {};
//     let max = 0;
//     for (let i = 0; i < n; i++) {
//         if (A[i] > 0) {
//             seen[A[i]] = true;
//             max = Math.max(max, A[i]);
//         }
//     }
//     for (let i = 1; i <= max+1; i++) {
//         if (!seen[i]) {
//             return i;
//         }
//     }
//     return 1;
// }
