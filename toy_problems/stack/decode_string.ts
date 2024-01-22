// Single Stack Solution
export default function decodeString(s: string): string {
    let chars = s.split('');
    let stack: string[] = [];
    for (let i = 0; i < chars.length; i++) {
        // push chars onto stack
        let char = s[i];
        if (char != ']') {
            stack.push(char);
        } else if (char == ']') {
            // build decoded string
            let decodedString = '';
            let lastIn = stack.pop();
            while(lastIn != '[') {
                decodedString += lastIn; 
                lastIn = stack.pop();
            }
            // build k decoded strs
            if (lastIn == '[') {
                let allNums = '';
                while(parseInt(stack[stack.length -1]) >= 0) {
                    let num = stack.pop();
                    allNums = num + allNums;
                }
                let k = parseInt(allNums);
                let kDecodedStr = '';
                while(k--) {
                    kDecodedStr += decodedString; 
                }
                // put back in stack in reverse order
                for(let l = kDecodedStr.length -1; l >=0; l--) {
                    stack.push(kDecodedStr[l]);
                }
            }
        }
    }
    return stack.join('');
};

// Two Stack Solution
function decodeString2(s: string): string {
    let nums = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let chars = s.split('');
    let currentString = '';
    let k = 0;
    let kStack = []; 
    let strStack = [];
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (char == ']') {
            let curK = kStack.pop(); 
            let decodedString = strStack.pop();          
            while(curK > 0) {
                decodedString += currentString; 
                curK--; 
            }
            currentString = decodedString;
        } else if (char == '[') {
            kStack.push(k);
            strStack.push(currentString)
            // reset globals after saving to stack
            currentString = '';
            k = 0; 
        } else {
            if(nums.includes(char)) {
                k = (k * 10) + parseInt(char);
            } else if(letters.includes(char)) {
                currentString += char;
            }
        }
    }
    return currentString;
};