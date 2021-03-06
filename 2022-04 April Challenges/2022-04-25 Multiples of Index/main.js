/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
*/

/*  Old Solution
function multiplesOfIndex(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%i === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
*/

function multiplesOfIndex(arr){
    return arr.filter((num, i) => num % i === 0);
}