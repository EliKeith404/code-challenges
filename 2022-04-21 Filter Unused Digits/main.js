/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.
*/


function unusedDigits(...args) {
    // Initialize number list
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Format arguments to correct type to match 'numbers'
    args = args.join('').split('').map(x => x*1);
  
    // If a digit exists in 'args', remove it from the 'numbers' array and return result
    return numbers.filter(a => !args.includes(a)).join('');
  }