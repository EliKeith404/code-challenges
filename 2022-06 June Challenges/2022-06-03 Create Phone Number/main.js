/*
https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
    const format = '(xxx) xxx-xxxx';
    let result = '';
    let count = 0;
    
    for(let i=0; i<format.length; i++){
      if(format[i] === 'x'){
        result += numbers[count];
        count++;
      }
      else{
        result += format[i];
      }
    }
    
    return result;
}

// Alternatively

function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';

    for(let i=0; i<numbers.length; i++){
        format = format.replace('x', numbers[i]);
    }

    return format;
}

// OR

function createPhoneNumber(numbers){
    return numbers.reduce((acc, c) => acc.replace('x', c), '(xxx) xxx-xxxx');
}