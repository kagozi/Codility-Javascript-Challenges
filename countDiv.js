// The CountDiv problem asks us to find the number of integers in the range [A, B] 
// that are divisible by a given integer K.

// The solution works by first calculating the number of integers in the range[1, B] 
// that are divisible by K using Math.floor(B / K).
//  We then subtract from this the number of integers in the range[1, A - 1]
//  that are divisible by K using Math.floor((A - 1) / K).
//  The resulting value gives us the number of integers in the range[A, B] that are divisible by K.

// The time complexity of this solution is O(1), which means that it runs in constant time 
// regardless of the size of the input.This makes it a very efficient solution.

function solution(A, B, K) {
    var divisors = Math.floor(B/K) - Math.floor((A-1)/K);
    return divisors;
}
