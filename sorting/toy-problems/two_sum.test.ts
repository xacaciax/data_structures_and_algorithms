describe('twoSum', () => {
    it('returns [-1, -1] when no two numbers add up to target', () => {
      const numbers = [1, 2, 3, 4, 5];
      const target = 10;
      expect(twoSum(numbers, target)).toEqual([-1, -1]);
    });
  
    it('returns [0, 1] when the first two numbers add up to target', () => {
      const numbers = [1, 2, 3, 4, 5];
      const target = 3;
      expect(twoSum(numbers, target)).toEqual([0, 1]);
    });
  
    it('returns [2, 4] when the last two numbers add up to target', () => {
      const numbers = [1, 2, 3, 4, 5];
      const target = 9;
      expect(twoSum(numbers, target)).toEqual([2, 4]);
    });
  
    it('returns [1, 3] when the middle two numbers add up to target', () => {
      const numbers = [1, 2, 3, 4, 5];
      const target = 6;
      expect(twoSum(numbers, target)).toEqual([1, 3]);
    });
  
    it('handles duplicate numbers correctly', () => {
      const numbers = [1, 2, 2, 3, 4, 5];
      const target = 4;
      expect(twoSum(numbers, target)).toEqual([1, 2]);
    });
  });
  