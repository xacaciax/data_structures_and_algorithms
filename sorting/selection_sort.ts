/**
 * Sorts an array of numbers in ascending order using the selection sort algorithm.
 *
 * @param {Array<number>} arr - The array of numbers to be sorted.
 * @returns {Array<number>} The sorted array of numbers.
 */
function selectionSort(arr: Array<number>): Array<number> {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

// // Test with an empty array
// const test1 = selectionSort([]);
// console.log(test1); // []

// // Test with an array of one element
// const test2 = selectionSort([1]);
// console.log(test2); // [1]

// // Test with an array of multiple elements, in descending order
// const test3 = selectionSort([5, 4, 3, 2, 1]);
// console.log(test3); // [1, 2, 3, 4, 5]

// // Test with an array of multiple elements, in random order
// const test4 = selectionSort([2, 5, 1, 3, 4]);
// console.log(test4); // [1, 2, 3, 4, 5]

// // Test with an array of multiple elements, with duplicates
// const test5 = selectionSort([2, 5, 1, 3, 4, 2]);
// console.log(test5); // [1, 2, 2, 3, 4, 5]

describe("selectionSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    expect(selectionSort([4, 3, 1, 5, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array when given an empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });

  it("should handle an array with one element", () => {
    expect(selectionSort([1])).toEqual([1]);
  });

  it("should handle an array with duplicate elements", () => {
    expect(selectionSort([5, 3, 2, 4, 3])).toEqual([2, 3, 3, 4, 5]);
  });
});