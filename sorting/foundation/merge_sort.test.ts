describe('merge_sort', () => {
    test('sorts an empty array', () => {
      const arr: Array<number> = [];
      const sortedArr = merge_sort(arr);
      expect(sortedArr).toEqual([]);
    });
  
    test('sorts an array with one element', () => {
      const arr: Array<number> = [5];
      const sortedArr = merge_sort(arr);
      expect(sortedArr).toEqual([5]);
    });
  
    test('sorts an array with two elements', () => {
      const arr: Array<number> = [5, 3];
      const sortedArr = merge_sort(arr);
      expect(sortedArr).toEqual([3, 5]);
    });
  
    test('sorts an array with multiple elements', () => {
      const arr: Array<number> = [5, 1, 8, 3, 7, 2, 9, 4, 6];
      const sortedArr = merge_sort(arr);
      expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  
    test('sorts an array with duplicate elements', () => {
      const arr: Array<number> = [5, 1, 8, 3, 7, 2, 9, 4, 6, 5];
      const sortedArr = merge_sort(arr);
      expect(sortedArr).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]);
    });
  });
  