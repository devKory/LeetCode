/**
 * https://leetcode.com/problems/build-array-from-permutation/
 * @param {number[]} nums
 * @return {number[]}
 */

const buildArray = (arr => {
    const data = [];

    for (let i =0; i < arr.length; i += 1) {
        data.push(arr[arr[i]])
    }

    return data;
});

console.log(buildArray([0, 2, 1, 5, 3, 4]));