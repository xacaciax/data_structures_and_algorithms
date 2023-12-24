/**
 * Checks whether a given string is a palindrome or not.
 * @param {string} string - The string to check
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise
 */
function isPalindrome(string: string): boolean {
    let word = string.split(''), n = word.length, midpoint;
     
    let i = 0;
    while (i < n) {
        let left = word[i];
        let right = word[n - i - 1]
        if (left === right) {
           i++;
        } else {
            return false;
        }
    } 
    return true; 
 }

/**
 * Generates all possible palindromic decompositions of a given string.
 * @param {string} s - The string to decompose
 * @returns {string[]} - A list of all possible palindromic decompositions of the input string
 */
export default function generatePalindromicDecompostion(s: string): string[] {
     let result: string[] = [];
     
     function helper(chars: string, i: number, slate: string[], lastString: string): void {
         // BASE CASE: Leaf Node
         if (i === chars.length) {
            if(isPalindrome(lastString)) {
                result.push(slate.slice().join(''));
            }
             return; 
         }
         
         // RECURSIVE CASES: Internal Node
         
        // Concate
        slate.push(chars[i]);
        helper(chars, i + 1, slate, lastString + chars[i]);
        slate.pop();

         
         // Add partition
        if (!isPalindrome(lastString)) {
            return; 
        }
         
        slate.push('|');
        slate.push(chars[i]);
        let lastChar = s[i];
        helper(chars, i + 1, slate, lastChar);
        slate.pop();
        slate.pop();
   
     }
     helper(s, 1, [s[0]], s[0]);

     return result; 
 }
