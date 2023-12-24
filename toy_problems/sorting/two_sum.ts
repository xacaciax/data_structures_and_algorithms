/**
 * Given an array of numbers and a target sum, returns an array of two indices
 * that point to the two numbers whose sum equals the target, or [-1, -1] if not found.
 * @param numbers An array of numbers to search from.
 * @param target The target sum to find.
 * @returns An array of two indices or [-1, -1] if not found.
 */
export default function twoSum(numbers: number[], target: number): [number, number] {
    const hash: Record<number, number> = {};
    numbers.forEach((n, i) => {
      hash[n] = i;
    });
  
    for (let i = 0; i < numbers.length; i++) {
      const complement = target - numbers[i];
      if (hash[complement] !== undefined && hash[complement] !== i) {
        return [i, hash[complement]];
      }
    }
  
    return [-1, -1];
  }
