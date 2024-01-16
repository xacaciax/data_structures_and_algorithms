import maxVowels from "./max_vowels";

describe('maxVowels', () => {
  it('should return the maximum number of vowels in a substring of length k', () => {
    expect(maxVowels("abciiidef", 3)).toBe(3);
  });
  it('should return the maximum number of vowels in a substring of length k', () => {
    expect(maxVowels("aeiou", 2)).toBe(2);
  });
  it('should return the maximum number of vowels in a substring of length k', () => {
    expect(maxVowels("leetcode", 3)).toBe(2);
  });
  it('should return the maximum number of vowels in a substring of length k', () => {
    expect(maxVowels("rhythms", 4)).toBe(0);
  });
  it('should return the maximum number of vowels in a substring of length k', () => {
    expect(maxVowels("tryhard", 4)).toBe(1);
  });
});