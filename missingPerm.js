// An array consisting of N diff. integers in range [1..(N+)] given.
// Find the missing element.
/*
1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

function solution(A) {
    //Gauss equation
    let n = A.length;
    let sum = (n + 1) * (n + 2) / 2;
    let trueSum = 0;
    for (let i = 0; i < n; i++){
        trueSum += A[i];
    }
    return sum - trueSum;
}

/*
function solution(A) {
  let expectedSum = (A.length + 1) * (A.length + 2) / 2;
  let actualSum = A.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

*/