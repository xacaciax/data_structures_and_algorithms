export default function uniqueOccurrences(arr: number[]): boolean {
    let k = 1000; // shift all negative values to positive range so that we can use them as indices
    let freq = Array.from(Array(2000)).fill(0);

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i] + k; 
        if(num >= 0) {
            freq[num] = freq[num] + 1; 
        } 
    }
    freq.sort();
    let i = 0;
    while(i < freq.length) {
        if(freq[i] != 0 && freq[i] == freq[i + 1]) {
            return false; 
        }
        i++;
    }
    return true; 
};

// or use a hash set to store the frequencies and check if the set already contains the frequency
function uniqueOccurrences2(arr: number[]): boolean {
    let k = 1000; 
    let frequencyMap = new Map()
    arr.forEach((n)=>{
        let value = n + k; 
        if(frequencyMap[value]){
            frequencyMap[value] += 1; 
        } else {
            frequencyMap[value] = 1; 
        }
    });
    let frequencySet = new Set();
    let values = Object.values(frequencyMap); 
    values.forEach((val) => {
        frequencySet.add(val);
    });
    return frequencySet.size === values.length; 
};

