/**
 * Sorts an array of integers in ascending order using the bubble sort algorithm.
 *
 * @param {Array<number>} arr - The array of integers to sort.
 * @returns {Array<number>} - The sorted array of integers.
 */
export default function bubble_sort(arr: Array<number>): Array<number> {
    let n = arr.length; 
    for (let i = 0; i < n; i++) {
        let temp = arr[i];
        let j = i - 1; 
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]; 
            j--;
        }
        arr[j+ 1] = temp; 
    }
    
    return arr;
  }
  