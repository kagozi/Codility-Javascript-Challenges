/* 
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 is less than P and P is less than N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:
[3,1,2,4,3]
P = 1, difference = |3 − 10| = 7 => [3] : [1,2,4,3]
P = 2, difference = |4 − 9| = 5  => [3,1] : [2,4,3]
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

*/

// function solution(A, P) {
//     let p1 = A.slice(0,P);
//     let p2 = A.slice(P);
//     let sumWithInitial = (array1) => array1.reduce(
//         (accumulator, currentValue) => accumulator + currentValue, 0
// );
//     solution = Math.abs(sumWithInitial(p1) - sumWithInitial(p2));
//     return solution;
// }

// console.log(solution([3,1,2,4,3], 2));


function tapeEquilibrium(A) {
  let minDiff = Infinity;
  let sumLeft = 0;
  let sumRight = A.reduce((a, b) => a + b, 0);

  for (let i = 0; i < A.length - 1; i++) {
    sumLeft += A[i];
    sumRight -= A[i];
    let diff = Math.abs(sumLeft - sumRight);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}
