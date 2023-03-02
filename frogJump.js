//Minimum number of times a frog must jump to reach target:
// The frog at point X, wants to reach a point greater or equal to Y
// It jumps at fixed distance d
// We want to count the number of times it must jump to get to a point greater than or equal to Y
/*
Example: 
X = 10
Y = 85
D = 30

To get to Y:
1st Jump: 10 + 30 = 40
2nd Jump: 10 + 30 + 30 = 70
3rd Jump: 10 + 30 + 30 + 30 = 100
It takes 3 jumps
*/

function solution(X, Y, d) {
    let jumps = Math.ceil((Y - X) / d)
    return jumps;
}