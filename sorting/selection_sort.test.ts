import selectionSort from "./selection_sort";

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