/**
 * Sorts an array of numbers using the quicksort algorithm.
 * 
 * @param arr The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 */
function quickSort(arr: Array<number>): Array<number> {
    /**
     * Recursively sorts a subarray of an array using the quicksort algorithm.
     * 
     * @param arr The array of numbers to be sorted.
     * @param start The starting index of the subarray to be sorted.
     * @param end The ending index of the subarray to be sorted.
     */
    function helper(arr: Array<number>, start: number, end: number): void {
        // BASE CASE: If the current subarray is empty or has just one element, return
        if (start >= end) {
            return;
        }

        // GET RANDOM INDEX: Get a random number within the range of the current subarray, then
        // add start to ensure the pivot is saved in position within the current subbarray
        let range = end - start;
        let randomIndex = Math.floor(Math.random() * range) + start;
        [arr[start], arr[randomIndex]] = [arr[randomIndex], arr[start]];

        // PARTITION: For each element in the current array, compare the current element to the pivot
        // If the current element is less than the pivot, increment the smaller pointer and swap the
        // current with the arr[smaller];
        let smaller = start;
        let pivot = arr[start];
        for (let bigger = start + 1; bigger <= end; bigger++) {
            if (arr[bigger] < pivot) {
                smaller++;
                [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
            }
        }

        // MOVE PIVOT to the middle of the smaller and bigger sections
        [arr[start], arr[smaller]] = [arr[smaller], arr[start]];

        // CONTINUE on subsequent subarrays
        helper(arr, start, smaller);
        helper(arr, smaller + 1, end);
    }

    helper(arr, 0, arr.length - 1);
    return arr;
}
