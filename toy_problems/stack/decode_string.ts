function decodeString(s: string): string {
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