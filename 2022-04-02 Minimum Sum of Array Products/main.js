/*
https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.

Example:
    minSum({5,4,2,3}) ==> return (22) 

Explanation:
    The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
*/

function minSum(arr) {
    let result = 0;
    arr = arr.sort((a,b) => a-b)

    for(let i=0; i<arr.length/2; i++){
        result += arr[i] * arr[arr.length-i-1];
    }
        
    return result;
}