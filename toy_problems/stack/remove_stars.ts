export default function removeStars(s: string): string {
    if(s.length < 1) return '';
    let stack: string[] = [];
    for(let i = 0; i < s.length; i++) {
        let char =s[i];
        if(char == '*') { 
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};