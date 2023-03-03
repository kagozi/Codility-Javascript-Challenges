// The MinAvgTwoSlice problem asks us to find the starting position of a slice in an array A 
// that has the minimal average value.The slice can have length 2 or 3.

// The solution works by iterating over the array A and checking the average of 
// the next 2 and 3 elements.We keep track of the minimum average seen so far 
// and the index of the slice with that minimum average.We also need to check the average 
// of the last two elements since it may be smaller than the averages of slices of length 3.

// The time complexity of this solution is O(N), where N is the length of the array A. 
// This makes it an efficient solution that can handle large input sizes.

// Note: This solution returns the starting position of the slice with the minimum average. 
// If you need to return the minimum average itself, you can modify the function to 
// return the minAvg variable instead of the minIndex variable.
// A non - empty array A consisting of N integers is given.A pair of integers(P, Q), such that
// 0 less than or eqto P  less than Q  less than N, is called a slice of array A(notice 
// that the slice contains at least two elements).The average of a slice(P, Q) 
// is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice.
// To be precise, the average equals(A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

// For example, array A such that:

//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// contains the following example slices:

// slice (1, 2), whose average is (2 + 2) / 2 = 2;
// slice (3, 4), whose average is (5 + 1) / 2 = 3;
// slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
// The goal is to find the starting position of a slice whose average is minimal.
function solution(A) {
    var N = A.length;
    var minAvg = (A[0] + A[1]) / 2;
    var minIndex = 0;
    
    for (var i = 2; i < N; i++) {
        var avg2 = (A[i-1] + A[i]) / 2;
        var avg3 = (A[i-2] + A[i-1] + A[i]) / 3;
        var currentMinAvg = Math.min(avg2, avg3);
        
        if (currentMinAvg < minAvg) {
            minAvg = currentMinAvg;
            minIndex = i-2;
        }
    }
    
    // check the last two elements
    var lastAvg = (A[N-2] + A[N-1]) / 2;
    if (lastAvg < minAvg) {
        minAvg = lastAvg;
        minIndex = N-2;
    }
    
    return minIndex;
}
