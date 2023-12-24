import maxProfit from "./find_max_diff";

describe('maxProfit', () => {
    it('returns 0 when prices array is empty', () => {
      const prices: number[] = [];
      const result = maxProfit(prices);
      expect(result).toBe(0);
    });
  
    it('returns 0 when prices array contains only one element', () => {
      const prices: number[] = [7];
      const result = maxProfit(prices);
      expect(result).toBe(0);
    });
  
    it('returns the maximum profit for a given prices array', () => {
      const prices: number[] = [7, 1, 5, 3, 6, 4];
      const result = maxProfit(prices);
      expect(result).toBe(5);
    });
  });
  