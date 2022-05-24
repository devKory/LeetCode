/**
 * https://leetcode.com/problems/root-equals-sum-of-children/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const root = {
    val: 10,
    left: {
        val: 4
    },
    right: {
        val: 6
    }
};

const checkTree = root => root.left.val + root.right.val === root.val;

console.log(checkTree(root));