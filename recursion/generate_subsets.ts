<<<<<<< HEAD
/**
 * Generates all possible subsets of the input string.
 * @param {string} s - The input string.
 * @returns {string[]} - An array of all the subsets.
 */
export default function generateAllSubsets(s: string): string[] {
    let result: string[] = [];
    let subset: string[] = s.split("");
  
    /**
     * Recursive helper function to generate all subsets.
     * @param {string[]} s - The input string as an array of characters.
     * @param {number} i - The current index.
     * @param {string[]} slate - The current subset.
     */
    function helper(s: string[], i: number, slate: string[]): void {
      if (i === s.length) {
        result.push(slate.slice().join(""));
        return;
      }
  
      // exclude
      helper(s, i + 1, slate);
  
      // include
      slate.push(s[i]);
      helper(s, i + 1, slate);
      slate.pop();
    }
  
    helper(subset, 0, []);
  
    return result;
  }
=======
>>>>>>> parent of e6d3921 (add generate_subsets)
