/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    // Take 'numbers' array, square every number using .map(),
    // then reduce() it down by adding all values together. 
    return numbers.map(a=>a**2).reduce((sum, a) => sum + a, 0);
  }