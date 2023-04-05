/**
 * Sorts an array of numbers in ascending order using the selection sort algorithm.
 *
 * @param {Array<number>} arr - The array of numbers to be sorted.
 * @returns {Array<number>} The sorted array of numbers.
 */
export default function selectionSort(arr: Array<number>): Array<number> {
  let n = arr.length;

  // Loop through each element in the array
  for (let i = 0; i < n; i++) {
    let min = i;

    // Find the minimum element in the remaining unsorted array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap the current element with the minimum element if they're not already in order
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  // Return the sorted array
  return arr;
}