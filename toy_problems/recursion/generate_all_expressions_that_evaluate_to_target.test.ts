

import generateAllExpressions from "./generate_all_expressions_that_evaluate_to_target";

describe('generateAllExpressions', () => {
    it('returns an empty array for an empty string input', () => {
      expect(generateAllExpressions('', 5)).toEqual([]);
    });
  
    it('returns an empty array when no expression evaluates to target', () => {
      expect(generateAllExpressions('12345', 1000)).toEqual([]);
    });
  
    it('returns all expressions that evaluate to target', () => {
      expect(generateAllExpressions('123', 6)).toEqual(['1+2+3', '1*2*3']);
    });
  
    it('handles input with duplicate digits', () => {
      expect(generateAllExpressions('112', 3)).toEqual(['1+1+2', '1*1*2', '1*1+2', '1+1*2']);
    });
  
    it('handles input with multiple possible expressions', () => {
      expect(generateAllExpressions('23', 7)).toEqual(['2*3+1', '2+3*1', '2+3+2']);
    });
  });
  