/**
 * @param {number[]} arr - An array of integers to be sorted.
 * @return {number[]} - The sorted array.
 */

// MIN HEAP SORT

/**
 * Performs min heapify on the given root index of the array.
 * @param {number[]} arr - The input array.
 * @param {number} rootIndex - The index of the root node of the subtree to be heapified.
 * @param {number} n - The size of the heap.
 */
const minHeapify = (arr, rootIndex, n) => {
    let currentRootIndex = rootIndex;
    
    while(1) {
        let i = currentRootIndex; 
        let leftChildIndex = 2*i + 1; 
        let rightChildIndex = leftChildIndex + 1; 
        
        if (leftChildIndex < n && arr[i] > arr[leftChildIndex]) {
            i = leftChildIndex; 
        }
        if (rightChildIndex < n && arr[i] > arr[rightChildIndex]) {
            i = rightChildIndex; 
        }
        
        if (i != currentRootIndex) {
            [arr[i], arr[currentRootIndex]] = [arr[currentRootIndex], arr[i]];
            currentRootIndex = i;
        } else {
            break; 
        }
    }
    
}

/**
 * Builds a min heap from the input array.
 * @param {number[]} arr - The input array to be heapified.
 * @return {number[]} - The heapified array.
 */
const buildHeap = (arr) => {
    let n = arr.length; 
    
    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
        minHeapify(arr, i, n);
    }
    
    return arr; 
}

/**
 * Sorts the input array in non-decreasing order using min heap sort.
 * @param {number[]} arr - The input array to be sorted.
 * @return {number[]} - The sorted array.
 */
function heap_sort(arr) {
    buildHeap(arr);
    
    let n = arr.length; 
    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        minHeapify(arr, 0, i);
    }

    arr.reverse();
    
    return arr;
}
