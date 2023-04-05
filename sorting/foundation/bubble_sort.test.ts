import bubble_sort from "./bubble_sort";

describe("bubble_sort", () => {
    test("should return an empty array if passed an empty array", () => {
      expect(bubble_sort([])).toEqual([]);
    });
  
    test("should return the same array if passed an array with only one element", () => {
      expect(bubble_sort([1])).toEqual([1]);
    });
  
    test("should sort an array of integers in ascending order", () => {
      expect(bubble_sort([3, 2, 1])).toEqual([1, 2, 3]);
      expect(bubble_sort([1, 5, 2, 7, 3])).toEqual([1, 2, 3, 5, 7]);
      expect(bubble_sort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  
    test("should handle large arrays", () => {
      const arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));
      const sortedArr = bubble_sort(arr);
      for (let i = 0; i < sortedArr.length - 1; i++) {
        expect(sortedArr[i]).toBeLessThanOrEqual(sortedArr[i + 1]);
      }
    });
  });
  