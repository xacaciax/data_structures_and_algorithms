export default function countBits(n: number): number[] {
    // without using Number.prototype.toString
    // find greatest base 2 number that fits into n 
    // 2^0, 2^1, 2^2, 2^4 --> 4 < 5 < 8
    // subtract 4, add 1 to onesCount
    // repeat with remainder 1 ... 

    //with using Number.prototype.toString  
    // convert number to binary string
    // count the 1s
    // set arr value to total
    let ans: number[] = []; 
    let i = 0; 
    while(i <= n) { // O(n) time
        let count: number = 0; 
        let binaryString = i.toString(2);
        let j = 0; 
        while(j < binaryString.length) { // O(K) time --> binaryString has max length of K
            if(binaryString[j] == '1') {
                count++; 
            }
            j++;
        }
        ans.push(count);
        i++;
    }
    return ans; // O(N * K) space, O(N) time
};

function countBits2(n: number): number[] {
    let res = Array.from(Array(n + 1)).fill(0);
    for (let i = 0; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1); 
    }
    return res; 
};

// For (i & 1) Bitwise AND operator with number 1 returns 1 if the number is odd and 0 of the number is even, 

// i.e. 5 & 1 is 0101 AND 0001, in the last place for both is a 1 so AND operator will return 1 (more precisely, 0001, the only place where both numbers had a value of 1) indicating that 5 is odd

// i.e. 4 & 2 is 0100 AND 0001, no places share the same value so the AND operatore will return 0 (in binary 0000) indicating that 4 is even

// For res[i >> 1] Bitwise right shift operator shifts all bits one to the right

// i.e. 5 >> 1 turns 0101 into 010
// i.e.  4 >> 1 turns 0100 into 010 