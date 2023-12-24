/**
 * Given three arrays of numbers, returns an array of their intersection or [-1] if not found.
 * @param arr1 The first array of numbers.
 * @param arr2 The second array of numbers.
 * @param arr3 The third array of numbers.
 * @returns An array of their intersection or [-1] if not found.
 */
export default function findIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
    let result: number[] = [];
  
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result.length ? result : [-1];
  }
  