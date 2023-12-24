import findAllWellFormedBrackets from "./well_formed_brackets_round";

describe('findAllWellFormedBrackets', () => {
    it('returns an empty array for n = 0', () => {
      expect(findAllWellFormedBrackets(0)).toEqual([]);
    });
  
    it('returns an array with one element for n = 1', () => {
      expect(findAllWellFormedBrackets(1)).toEqual(["()"]);
    });
  
    it('returns an array with two elements for n = 2', () => {
      expect(findAllWellFormedBrackets(2)).toEqual(["(())", "()()"]);
    });
  
    it('returns an array with five elements for n = 3', () => {
      expect(findAllWellFormedBrackets(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
    });
  
    it('returns an array with 14 elements for n = 4', () => {
      expect(findAllWellFormedBrackets(4)).toEqual([
        "(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()",
      ]);
    });
  });
  