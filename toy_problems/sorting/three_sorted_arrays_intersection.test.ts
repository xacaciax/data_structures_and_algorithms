import findIntersection from "./three_sorted_arrays_intersection";

describe('findIntersection', () => {
    it('returns [-1] when no intersection is found', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      const arr3 = [7, 8, 9];
      expect(findIntersection(arr1, arr2, arr3)).toEqual([-1]);
    });
  
    it('returns the intersection when all arrays contain the same elements', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];
      const arr3 = [1, 2, 3];
      expect(findIntersection(arr1, arr2, arr3)).toEqual([1, 2, 3]);
    });
  
    it('returns the intersection when arrays contain some overlapping elements', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [2, 3, 4];
      const arr3 = [3, 4, 5];
      expect(findIntersection(arr1, arr2, arr3)).toEqual([3]);
    });
  
    it('handles duplicate elements correctly', () => {
      const arr1 = [1, 2, 2, 3];
      const arr2 = [2, 2, 3, 3];
      const arr3 = [2, 3, 3, 4];
      expect(findIntersection(arr1, arr2, arr3)).toEqual([2, 3]);
    });
  
    it('handles arrays of different lengths correctly', () => {
      const arr1 = [1, 2, 3, 4];
      const arr2 = [2, 3];
      const arr3 = [3, 4, 5, 6];
      expect(findIntersection(arr1, arr2, arr3)).toEqual([3]);
    });
  });
  