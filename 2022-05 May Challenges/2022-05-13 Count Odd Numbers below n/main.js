/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

 */

function oddCount(n){
    // When counting, there is an odd number for every even number.
    // Because of this, we can divide by two to cut out all the evens,
    // and round down since we do not count the initial number.
    return Math.floor(n/2);
}