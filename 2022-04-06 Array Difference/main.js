
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/


function arrayDiff(a, b) {
    // Every element in 'a' runs through a filter. 
    // If the element is not an index of 'b', add it to the array.

    return (a.filter(x => b.indexOf(x) === -1));

    // Alternate solution: If the element in 'a' is not included in 'b', add it to the array.
    // return (a.filter( x => !b.includes(x)));
  }