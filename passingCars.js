// The problem statement is as follows: given an array A consisting of zeros and ones, 
// we have to count the number of passing cars.A pair of cars(P, Q) is said to be passing 
// if P is at a lower index than Q, and P is 0 while Q is 1.

// Here's the solution:

function solution(A) {
    var zeros = 0; // count of zeros
    var passing = 0; // count of passing cars
    var i, len = A.length;
    
    // count the number of zeros
    for (i = 0; i < len; i++) {
        if (A[i] === 0) {
            zeros++;
        }
    }
    
    // count the number of passing cars
    for (i = 0; i < len; i++) {
        if (A[i] === 0) {
            zeros--;
        } else {
            passing += zeros;
        }
        if (passing > 1000000000) {
            return -1;
        }
    }
    
    return passing;
}
