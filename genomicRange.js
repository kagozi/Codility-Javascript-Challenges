// Task description
// A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

// The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 less than or eq K less than or eq M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

// For example, consider string S = CAGCCTA and arrays P, Q such that:

//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// The answers to these M = 3 queries are as follows:

// The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
// The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
// The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
// Write a function:

// function solution(S, P, Q);

// that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

// Result array should be returned as an array of integers.

// For example, given the string S = CAGCCTA and arrays P, Q such that:

//     P[0] = 2    Q[0] = 4
//     P[1] = 5    Q[1] = 5
//     P[2] = 0    Q[2] = 6
// the function should return the values [2, 4, 1], as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// M is an integer within the range [1..50,000];
// each element of arrays P and Q is an integer within the range [0..N - 1];
// P[K] less than or eq Q[K], where 0 less than or eq K less than  M;
// string S consists only of upper-case English letters A, C, G, T.

// The GenomicRangeQuery problem asks us to find the minimal nucleotide from a range of DNA sequence elements.

// The solution works by first calculating prefix sums for each nucleotide in the DNA sequence.We use four arrays(A, C, G, T) 
// to store the prefix sums for each nucleotide in the sequence.We then iterate over the query ranges(P, Q) 
// and calculate the minimal nucleotide in each range using the prefix sums.If the difference in
// prefix sums between the end and start of a range for a particular nucleotide is greater than 0,
// we know that the range contains that nucleotide, so we set the corresponding value in the result array 
// to the nucleotide value(1 for A, 2 for C, 3 for G, 4 for T).

// The time complexity of this solution is O(N + M), where N is the length of the DNA sequence and M 
// is the number of query ranges.This makes it an efficient solution that can handle large input sizes.

function solution(S, P, Q) {
    var N = S.length;
    var A = new Array(N+1).fill(0);
    var C = new Array(N+1).fill(0);
    var G = new Array(N+1).fill(0);
    var T = new Array(N+1).fill(0);
    
    // calculate prefix sums for each nucleotide
    for (var i = 0; i < N; i++) {
        switch (S[i]) {
            case 'A':
                A[i+1] = A[i] + 1;
                C[i+1] = C[i];
                G[i+1] = G[i];
                T[i+1] = T[i];
                break;
            case 'C':
                A[i+1] = A[i];
                C[i+1] = C[i] + 1;
                G[i+1] = G[i];
                T[i+1] = T[i];
                break;
            case 'G':
                A[i+1] = A[i];
                C[i+1] = C[i];
                G[i+1] = G[i] + 1;
                T[i+1] = T[i];
                break;
            case 'T':
                A[i+1] = A[i];
                C[i+1] = C[i];
                G[i+1] = G[i];
                T[i+1] = T[i] + 1;
                break;
        }
    }
    
    var M = P.length;
    var result = new Array(M).fill(0);
    
    // calculate the minimal nucleotide in each query range
    for (var i = 0; i < M; i++) {
        var start = P[i];
        var end = Q[i]+1;
        if (A[end]-A[start] > 0) {
            result[i] = 1;
        } else if (C[end]-C[start] > 0) {
            result[i] = 2;
        } else if (G[end]-G[start] > 0) {
            result[i] = 3;
        } else if (T[end]-T[start] > 0) {
            result[i] = 4;
        }
    }
    
    return result;
}

function test() {
    var S = "CAGCCTA";
    var P = [2, 5, 0];
    var Q = [4, 5, 6];
    var expected = [2, 4, 1];
    
    var result = solution(S, P, Q);
    
    if (JSON.stringify(result) === JSON.stringify(expected)) {
        console.log("Test passed.");
    } else {
        console.log("Test failed. Expected " + expected + " but got " + result + ".");
    }
}
