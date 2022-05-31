/* 
https://leetcode.com/problems/fizz-buzz/

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

var fizzBuzz = function(n) {
    let result = [];
    
    for (let i=0; i<n; i++){
        result[i] = '';
        let num = i+1;
        
        const divisibleBy3 = (num%3 === 0);
        const divisibleBy5 = (num%5 === 0);
        
        if(divisibleBy3)
            result[i] += 'Fizz';
        
        if(divisibleBy5)
            result[i] += 'Buzz';
        
        if(!result[i])
            result[i] = num.toString();
    }
    
    return result;
};