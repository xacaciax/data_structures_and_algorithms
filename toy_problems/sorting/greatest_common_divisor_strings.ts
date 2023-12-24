function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1) return '';
    let max = Math.max(str1.length, str2.length);
    while (max > 0) {
        if(str1.length % max === 0 && str2.length % max === 0) {
            return (str1.substring(0, max))
        }
        max -= 1; 
    }
};