import generatePalindromicDecompostion from 'palindromic_decomposition';

describe('generatePalindromicDecompostion', () => {
    test('returns single letter decomposition when input string has length 1', () => {
      const result = generatePalindromicDecompostion('a');
      expect(result).toEqual(['a']);
    });
  
    test('returns all palindromic decompositions of a simple input string', () => {
      const result = generatePalindromicDecompostion('aab');
      expect(result).toEqual(['a|a|b', 'aa|b']);
    });
  
    test('returns all palindromic decompositions of a more complex input string', () => {
      const result = generatePalindromicDecompostion('racecar');
      expect(result).toEqual(['r|a|c|e|c|a|r', 'r|aceca|r', 'racecar']);
    });
  
    test('returns all palindromic decompositions of an input string with duplicate characters', () => {
      const result = generatePalindromicDecompostion('aaa');
      expect(result).toEqual(['a|a|a', 'aa|a', 'a|aa', 'aaa']);
    });
  });
  