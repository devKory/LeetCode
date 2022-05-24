/**
 * https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} nums
 * @return {number[]}
 */

const getConcatenation = (nums => nums.concat(nums));

console.log(getConcatenation([1,2,1]));