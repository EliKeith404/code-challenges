/* 
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    let newStr = '';
    
    for(let i=0; i<n; i++){
      newStr += s;
    }
    
    return newStr;
}

// Alternate Solution
function repeatStr(n,s){
  return s.repeat(n);
}