/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// 932ms
function findShort(s){
    const arr = s.split(' ');
    let smallest = arr[0].length;
    
    for (let word of arr){
      if (word.length < smallest){
        smallest = word.length;
      }
    }
    
    return smallest;
}

// Alternatively

// 837ms
function findShort(s){
    return Math.min(...s.split(' ').map(word => word.length));
}

// OR

// 978ms
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length).shift().length;
  }