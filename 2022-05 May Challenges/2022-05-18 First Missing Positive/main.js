/*
https://leetcode.com/problems/first-missing-positive/

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

Example 1:
    Input: nums = [1,2,0]
    Output: 3

Example 2:
    Input: nums = [3,4,-1,1]
    Output: 2

Example 3:
    Input: nums = [7,8,9,11,12]
    Output: 1

Constraints:
    1 <= nums.length <= 5 * 105
    -231 <= nums[i] <= 231 - 1
*/

var firstMissingPositive = function(nums) {
    // Cheaply sorts array from small-large and removes negatives and duplicates
    nums = Array.from(new Set(nums.filter((x) => x>0).sort((a,b) => a-b)));
    
    let highestNum = nums.length;
    
    for (let i=0; i<=highestNum; i++){
        if (nums[i] !== i+1){
            return i+1;
        }
    }

    // If the for-loop didn't catch a missing value between 1 - highestNum, 
    //  return next number in the sequence
    return highestNum+1;
};