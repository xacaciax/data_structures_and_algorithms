export default function maxVowels(s: string, k: number): number {
    let vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
    let count = 0;

   // build initial window
    for(let j = 0; j < k; j++) {
        if(vowels[s[j]]) count++;
    }

   let result = count;
   // slide window to right and keep count and result as max count
    for (let i = k; i < s.length; i++) {
       if(vowels[s[i]]) count += 1; 
       if(vowels[s[i -k]]) count -= 1; 
       result = Math.max(count, result);
    }

   return result; 
};