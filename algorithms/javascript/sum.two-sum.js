/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = ((arr, target) => {
    let hashMap = {};

    for (let i = 0; i < arr.length; i += 1) {
        let diff = target - arr[i];

        if (hashMap[diff] !== undefined) {
            return [i, hashMap[diff]];
        } else {
            hashMap[arr[i]] = i;
        }
    }
});

console.log(twoSum([2, 7, 11, 15], 26));