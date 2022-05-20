/* 
https://leetcode.com/problems/summary-ranges/

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Example 1:
  Input: nums = [0,1,2,4,5,7]
  Output: ["0->2","4->5","7"]
  Explanation: The ranges are:
  [0,2] --> "0->2"
  [4,5] --> "4->5"
  [7,7] --> "7"

Example 2:
  Input: nums = [0,2,3,4,6,8,9]
  Output: ["0","2->4","6","8->9"]
  Explanation: The ranges are:
  [0,0] --> "0"
  [2,4] --> "2->4"
  [6,6] --> "6"
  [8,9] --> "8->9"
*/

var summaryRanges = function(nums) {
    let ranges = [];
    let initial = nums[0];
    let current = nums[0];
    let end = 0;
    
    for (let i=1; i<nums.length+1; i++){        
        if(current+1 === nums[i]){
            current = nums[i];
            
        }else{
            end = current;
            
            if(initial === end){
                ranges.push(`${initial}`);
            }
            else{
                ranges.push(`${initial}->${end}`);
            }
            
            current = initial = nums[i];
        }
    }

    return ranges;
};