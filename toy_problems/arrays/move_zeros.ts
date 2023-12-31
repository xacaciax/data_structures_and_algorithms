/**
 Do not return anything, modify nums in-place instead.
 */

// function moveZeroes(nums: number[]): void {
//    let lastNonZeroFoundAt = 0; 

//     // if current element is not 0, append in front of last non-zero element 
//     for (let i = 0; i < nums.length; i ++) {
//         if (nums[i] != 0) {
//            nums[lastNonZeroFoundAt++] = nums[i];
//         }
//     }

//     for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
//         nums[i] = 0;
//     }
// };

export default function moveZeroes(nums: number[]): void {
    for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
        if(nums[cur] != 0) {
            // swap
            let temp = nums[cur];
            nums[cur] = nums[lastNonZeroFoundAt];
            nums[lastNonZeroFoundAt] = temp; 

            lastNonZeroFoundAt++;
        }
        // [0,1,0,3,12] 0 1
        // 1 0 0 3 12  1 2->3
        // 1 3 0 0 12  2 3->4
        // 1 3 12 0 0  3 4
    }
    
};
