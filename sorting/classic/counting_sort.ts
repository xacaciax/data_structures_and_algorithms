/**
 Counting sort is a non-comparison sorting algorithm that was first introduced by Harold H. Seward in 1954. 
 The algorithm works by counting the occurrences of each element in the input array and then using this 
 information to determine the position of each element in the output array.

 Counting sort is particularly well-suited for sorting arrays with a small range of values, such as integers 
 or characters. It has a time complexity of O(n+k), where n is the number of elements in the input array and 
 k is the range of possible values.

 Despite its efficiency, counting sort has some limitations. One is that it requires a significant amount of 
 memory to store the counts array, which can be impractical for large ranges of values. Additionally, counting
 sort is not a stable sort, meaning that it does not preserve the relative order of equal elements in the 
 input array.

 Counting sort has inspired several other sorting algorithms, including bucket sort and radix sort, which are 
 more efficient and overcome some of the limitations of counting sort. However, counting sort remains an
 important algorithm in its own right and is frequently used in various applications, such as data 
 compression and image processing.
 */

 /**
 * Sorts an array of integers using the counting sort algorithm.
 * @param {Array<number>} arr - The array of integers to be sorted.
 * @return {Array<number>} The sorted array of integers.
 */
 function counting_sort(arr: Array<number>): Array<number> {
    const positiveCount: Array<number> = [];
    const negativeCount: Array<number> = [];
    const result: Array<number> = [];
    
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        
        if(current >= 0) {
             if (!positiveCount[current]) {
                positiveCount[current] = 1; 
            } else {
                positiveCount[current]++;
            }          
        } else {
            current = Math.abs(current);
            if (!negativeCount[current]) {
                negativeCount[current] = 1; 
            } else {
                negativeCount[current]++;
            }   
        }

    }
    
    for (let i = negativeCount.length - 1; i >= 0; i--) {
        let count = negativeCount[i];
        while (count && count > 0) {
                result.push(i * -1);
                count--;                
            if (count === 0) {
                break;
            }
        }
        
    }
    
    for (let i = 0; i < positiveCount.length; i++) {
        let count = positiveCount[i];
        while (count && count > 0) {
            result.push(i);
            count--;
            if (count === 0) {
              break;  
            }
        }
    }
    
    return result;
}