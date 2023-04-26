/**
 * Finds all well-formed brackets of length n.
 * @param n The length of the well-formed brackets.
 * @returns An array containing all well-formed brackets of length n.
 */
function findAllWellFormedBrackets(n: number): string[] {
    let result: string[] = [];
  
    /**
     * Helper function to recursively generate well-formed brackets.
     * @param n The length of the well-formed brackets.
     * @param o The number of opening brackets seen so far.
     * @param c The number of closing brackets seen so far.
     * @param slate An array containing the current well-formed brackets being generated.
     */
    const helper = (n: number, o: number, c: number, slate: string[]) => {
      // back track
      if (c > o) {
        return;
      }
      if (o > n) {
        return;
      }
  
      // base
      if (o === n && c === n) {
        result.push(slate.join('').slice());
        return;
      }
  
      slate.push("(");
      helper(n, o + 1, c, slate);
      slate.pop();
  
      slate.push(")")
      helper(n, o, c + 1, slate);
      slate.pop();
    }
    helper(n, 0, 0, []);
  
    return result;
  }
  