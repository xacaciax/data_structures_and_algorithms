/**
 * This function returns the kth largest number in an array using Quick Select algorithm.
 * @param numbers An array of numbers.
 * @param k The kth largest number to find.
 * @returns The kth largest number in the array.
 */
function kth_largest_in_an_array(numbers: number[], k: number): number {
    /**
     * A helper function that recursively partitions the array using the Quick Select algorithm
     * and moves the pivot value to the middle of the smaller and bigger sets.
     * @param arr The array to partition.
     * @param start The starting index of the partition.
     * @param end The ending index of the partition.
     * @param index The index of the kth largest number to find.
     */
    function helper(arr: number[], start: number, end: number, index: number): void {
        // base case
        if (start >= end) {
            return;
        }

        let range = end - start;
        let randomIndex = Math.floor(Math.random() * range) + start;
        [arr[start], arr[randomIndex]] = [arr[randomIndex], arr[start]];

        // partition
        let smaller = start;
        for (let bigger = start + 1; bigger <= end; bigger++) {
            if (arr[bigger] < arr[start]) {
                smaller++;
                [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
            }
        }
        // move pivot value to middle of smaller and bigger sets
        [arr[start], arr[smaller]] = [arr[smaller], arr[start]];

        // decide which side to recurse based on k
        if (index === smaller) {
            return;
        } else if (index < smaller) {
            helper(arr, start, smaller - 1, index);
        } else { // index > pivot
            helper(arr, smaller + 1, end, index);
        }
    }

    helper(numbers, 0, numbers.length - 1, numbers.length - k);
    return numbers[numbers.length - k];
}