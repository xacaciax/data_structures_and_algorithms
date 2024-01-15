function tribonacci(n: number): number {
    // 0 1 1 2 4 7 13 ... etc. 
    // 0 1 2 3 4 5 6 --> nth element in sequence
    // return the nth value in this sequence

    let i = 3;  // n = 10, i = 3
    let nums = [0, 1, 1];
    while (i <= n) {
        let cur = nums[i - 3] + nums[i - 2] + nums[i -1];
        nums.push(cur)
        i++;
    }
    return nums[n];
};