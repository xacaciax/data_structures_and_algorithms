/**
 * Calculates the maximum profit that can be obtained by buying and selling stocks.
 * @param prices - An array of stock prices.
 * @returns The maximum profit.
 */
function maxProfit(prices: number[]): number {
  let min = prices[0]; // first element
  let max = 0; // init result to least possible value, zero

  for (let i = 1; i < prices.length; i++) {
    // set min to the minimum between the least so far and the current value
    min = Math.min(min, prices[i]);

    // compare the current max with the difference between the current price and min
    max = Math.max(max, prices[i] - min);
  }

  return max;
}

export default maxProfit;