/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function maxDepth(root: TreeNode | null): number {
//     if(root == null) return 0; 
//     // dfs, at each leaf update max depth if cur is more than prev
//     let max = 1; 
//     const dfs = (node: TreeNode, d: number) => {
//         if(node != null) {
//             if(node.left == null && node.right == null) {
//                 max = Math.max(max, d);
//             }
//             dfs(node.left, d + 1);
//             dfs(node.right, d + 1);
//         }
//     };
//     dfs(root, max);
//     return max; 
// };

//iterative approach / bfs
function maxDepth(root: TreeNode | null) {
    if(root == null) return 0;
    
    let q = [];
    q.push(root);
    let depth = 0;

    while(q.length) {
        let tmp = q.length; 
        depth++;
        while(tmp) {
            let cur = q.shift(); // get from front
            if(cur.left) q.push(cur.left);
            if(cur.right) q.push(cur.right);
            tmp--;
        }
    }

    return depth; 
}