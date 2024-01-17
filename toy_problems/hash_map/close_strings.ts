function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) return false; 

    // Store char counts in map with char as key and count in string as value
    let wordMap1 = {};
    for(let i = 0; i < word1.length; i++) {
        let char = word1[i];
        wordMap1[char] = wordMap1[char] ? wordMap1[char] + 1 : 1;
    }
    
    let wordMap2 = {};
    for(let i = 0; i < word2.length; i++) {
        let char = word2[i];
        wordMap2[char] = wordMap2[char] ? wordMap2[char] + 1 : 1;
    }

    // Condition 1 -- Both strings must contain the same characters
    let charSet1 = new Set(Object.keys(wordMap1));
    let charSet2 = new Set(Object.keys(wordMap2));
    let sameChars = (char) => charSet2.has(char);
    if(!(charSet1.size == charSet2.size && Array.from(charSet1).every(sameChars))) return false; 

    // Condition 2 -- Characters must have the same frequencies? 
    let freq1 = Object.values(wordMap1);
    let freq2 = Object.values(wordMap2);
    freq1.sort();
    freq2.sort();

    return freq1.join('') == freq2.join('');
};