/**
 Quick sort is a sorting algorithm that works by selecting a "pivot" element from a list of items, and 
 partitioning the other items into two sub-lists, according to whether they are less than or greater 
 than the pivot. The algorithm then recursively sorts the sub-lists until the entire list is sorted.

 The quick sort algorithm was developed by Tony Hoare in 1959 while he was working on the Atlas computer 
 at the University of London. The algorithm was initially called "partition-exchange sort" and was 
 later renamed to "quick sort". Hoare originally developed the algorithm to sort items in random
  access memory, which was a new technology at the time.

 The quick sort algorithm is known for its efficiency and is often used for sorting large lists of 
 items. Its average-case time complexity is O(n log n), which means that it can handle large lists of 
 items much more quickly than algorithms with higher time complexities. However, its worst-case time 
 complexity is O(n^2), which can occur when the pivot is chosen poorly.

 The basic idea behind quick sort is to partition the list of items around a chosen pivot element, so 
 that all items less than the pivot are on one side of the pivot, and all items greater than the pivot are on the other side. The pivot is then placed in its final position, and the algorithm recursively sorts the sub-lists on either side of the pivot until the entire list is sorted.

 The quick sort algorithm has several variations, including randomized quick sort, which randomly chooses 
 the pivot element to reduce the likelihood of worst-case scenarios, and three-way quick sort, which 
 handles lists with duplicate elements more efficiently.
 */

/**
 * Sorts an array of numbers using the quicksort algorithm.
 * 
 * @param arr The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 */
export default function quickSort(arr: Array<number>): Array<number> {
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
