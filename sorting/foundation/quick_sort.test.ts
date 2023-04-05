import quickSort from "./quick_sort";

describe('quickSort', () => {
    test('sorts an array of numbers in ascending order', () => {
      const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
      const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
      expect(quickSort(arr)).toEqual(expected);
    });
  
    test('sorts an array with negative numbers in ascending order', () => {
      const arr = [6, -3, 0, -8, 5, -1, -9, 4, 8, 2, 7];
      const expected = [-9, -8, -3, -1, 0, 2, 4, 5, 6, 7, 8];
      expect(quickSort(arr)).toEqual(expected);
    });
  
    test('sorts an array of strings in ascending order', () => {
      const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
      const expected = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
      expect(quickSort(arr)).toEqual(expected);
    });
  
    test('returns an empty array when given an empty array', () => {
      const arr = [];
      const expected = [];
      expect(quickSort(arr)).toEqual(expected);
    });
  
    test('returns a single-item array when given a single-item array', () => {
      const arr = [42];
      const expected = [42];
      expect(quickSort(arr)).toEqual(expected);
    });
  });
  