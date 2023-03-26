/**
 * Sorts an array of integers using the merge sort algorithm.
 * @param {Array<number>} arr - The input array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
function merge_sort(arr: Array<number>): Array<number> {
    /**
     * Recursively splits the array into smaller subarrays and merges them together in sorted order.
     * @param {Array<number>} arr - The input array to be sorted.
     * @param {number} start - The start index of the current subarray.
     * @param {number} end - The end index of the current subarray.
     * @returns {void}
     */
    function helper(arr: Array<number>, start: number, end: number): void {
        if (start === end) {
            return; 
        }

        /**
        @mid finds the midpoint of an array using a safe expression to avoid integer overflow.
        
        In most cases, finding the midpoint of an array involves taking the average of the 
        start and end indices, i.e., (start + end) / 2. However, this can lead to an integer 
        overflow when start + end exceeds the maximum safe integer that can be represented in 
        JavaScript. To avoid this problem, it's recommended to use the expression 
        start + (end - start) / 2 instead. This expression ensures that the subtraction end - start 
        is performed before the division, which reduces the likelihood of an integer overflow occurring.
        */
        let mid = Math.floor(start + (end - start)/2);

        helper(arr, start, mid);
        helper(arr, mid + 1, end);

        let i = start; 
        let j = mid + 1; 
        const auxArr: Array<number> = [];

        while (i <= mid && j <= end) {
            if (arr[i] <= arr[j]) {
                auxArr.push(arr[i]);
                i++;
            } else {
                auxArr.push(arr[j]);
                j++;
            }
        }

        while (i <= mid) {
            auxArr.push(arr[i]);
            i++;
        }
        while (j <= end) {
            auxArr.push(arr[j]);
            j++;
        }

        arr.splice(start, auxArr.length, ...auxArr);
    }

    helper(arr, 0, arr.length - 1);
    return arr; 
}