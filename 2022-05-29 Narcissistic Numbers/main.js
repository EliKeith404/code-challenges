/*
A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

Ex: 153, where l = 3 ( the number of digits in 153 )
1^3 + 5^3 + 3^3 = 153

Write a function that, given n, returns whether or not n is a Narcissistic Number.
*/

function isNarcissistic(n) {
    let arr = n.toString().split('');
    let l = arr.length;
    return arr.reduce((acc, c) => acc + c**l, 0) == n ? true : false;
  }