export default function reverseWords(s: string): string {

    // Brute Force
    // the sky is blue
    //     ^    ^
    // blue is sky the
    // split on space, swap from outer to inner words
    // as you go, check for empty string and if it's empty, remove it
    let words = s.split(' ') // O(n)


    // remove spaces 
    let l = words.length;
    for (let i = l; i >= 0; i --) {
        if (words[i] == '') {
            words.splice(i, 1);
        }
        if (words[i] == ' ') {
           words.splice(i, 0);
        }
    }

    // swap from outer edges to middle
    let i = 0;
    let j = words.length - 1; 
    while (i < j) {
        let tmp = words[j];
        words[j] = words[i];
        words[i] = tmp;
        i++;
        j--;
    }
    
    // concat with space
    return words.join(' ')
};

// Reverse each word then reverse the entire string
function reverseWord2(s: string): string {
    let words = s.split(' ');
    let noSpaces: string[] = [];

    for (let i = 0; i < words.length; i++) {
        let word: string = words[i];
            if(word != '') {
                noSpaces.push(word.split('').reverse().join(''))
            }
        ;
    }

    let chars = noSpaces.join(' ');
    let result = '';
    for(let i = chars.length - 1; i >=0 ; i--) {
        result += chars[i]
    }

    return result;
};