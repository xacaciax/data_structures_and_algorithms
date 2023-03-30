/**
 * Find the top k frequent elements in an array.
 *
 * @param {number[]} arr The input array of integers.
 * @param {number} k The number of frequent elements to return.
 * @returns {number[]} An array of the top k frequent elements.
 */
function find_top_k_frequent_elements(arr: number[], k: number): number[] {
    let frequency: Record<number, number> = {};
    let numbers: number[][] = [[]];
    let result: number[] = [];
  
    // Count the frequency of each element in the array.
    /**  
    arr = [0, 1, 2, 1, 2, 1, 0, 3, 4] => 
    frequency = { 
                     "0": 2, 
                     "1": 3,
                     "2": 2,
                     "3": 1,
                     "4": 1
                 }
    */
    for (let i = 0; i < arr.length; i++) {
      if (frequency[arr[i]]) {
        frequency[arr[i]]++;
      } else {
        frequency[arr[i]] = 1;
      }
    }
  
    // Store the elements in a nested array based on their frequency.
    /**
     numbers = [
                    0:  [ ],
                    1:  [3, 4],
                    2:  [0, 2],
                    3:  [1],
                ]
     *  */           
    for (let key in frequency) {
      let count = frequency[key];
      if (!numbers[count]) {
        numbers[count] = [Number(key)];
      } else {
        numbers[count].push(Number(key));
      }
    }
  
    // Extract the top k frequent elements from the nested array.
    for (let i = numbers.length - 1; i > 0; i--) {
      while (k > 0 && numbers[i].length > 0) {
        let current = numbers[i].pop();
        result.push(current);
        k--;
        if (k === 0) {
          break;
        }
      }
    }
  
    return result.length ? result : [1];
  }