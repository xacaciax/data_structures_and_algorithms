/**
 * Returns the number of unique Binary Search Trees that can be formed using n nodes.
 * @param n The number of nodes to form the BSTs.
 * @returns The number of unique Binary Search Trees that can be formed using n nodes.
 */
export default function howManyBSTs(n: number): bigint {
    if (n === 0 || n === 1) return 1n; 
    
    let count: bigint = 0n; 
    for (let i = 1; i <= n; i++) {
        count = count + howManyBSTs(i - 1) * howManyBSTs(n -i);
    }

    return count;
}
