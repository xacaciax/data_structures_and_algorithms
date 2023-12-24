
/**

Given a string s that consists of digits ("0".."9") and target, a non-negative integer,
find all expressions that can be built from string s that evaluate to the target.

When building expressions, you have to insert one of the following operators between each pair of consecutive characters
in s: join or * or +. For example, by inserting different operators between the two characters of
string "12" we can get either 12 (1 joined with 2 or "12") or 2 ("1*2") or 3 ("1+2").

Other operators such as - or ÷ are NOT supported.

Expressions that evaluate to the target but only utilize a part of s do not count: entire s has to be consumed.
Precedence of the operators is conventional: join has the highest precedence, * – medium
and + has the lowest precedence. For example, 1 + 2 * 34 = (1 + (2 * (34))) = 1 + 68 = 69.

You have to return ALL expressions that can be built from string s and evaluate to the target. 
 
 */

const evaluate = (str: string): number => {
    // separate multiplication expresssions from numbers to be added
    str = str.split("+");
  
    // find expressions with * and evaluate
    let products = str.map((expression) => {
      if (expression.includes("*")) {
        return expression.split("*").reduce((a, c) => a * parseInt(c), 1);
      }
      return parseInt(expression);
    });
  
    // add remaining ints in array
    return products.reduce((a, c) => a + c, 0);
  };
  
  export default function generateAllExpressions(
    s: string,
    target: number
  ): string[] {
    let result: string[] = [];
  
    function helper(s: string, i: number, slate: string[]) {
      if (i === s.length) {
        slate = slate.join("");
  
        let total = evaluate(slate);
        if (total === target) {
          result.push(slate);
        }
        return;
      }
  
      // join
      slate.push(s[i]);
      helper(s, i + 1, slate);
      slate.pop();
  
      // multiply
      slate.push("*");
      slate.push(s[i]);
      helper(s, i + 1, slate);
      slate.pop();
      slate.pop();
  
      // add
      slate.push("+");
      slate.push(s[i]);
      helper(s, i + 1, slate);
      slate.pop();
      slate.pop();
    }
    helper(s, 1, [s[0]]);
  
    return result;
  }
  