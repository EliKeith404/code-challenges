/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
  "Dermatoglyphics" --> true
  "aba" --> false
  "moOse" --> false (ignore letter case)
*/


function isIsogram(str){
  str = str.toLowerCase()
  for (let char of str) {
    if (str.includes(char)) {
      str = str.slice(1, str.length);
      if (str.includes(char)) {
        return false;
      }  
    }
  }
  
  return true;
}


// Alt way thaat makes more sense
function isIsogram(str){
  return (new Set(str.toLowerCase()).size === str.length);
}