function getElemetnsOnlyInFirstList(nums1: number[], nums2: number[]): number[] {
    const onlyInNums1 = new Set();
    const existsInNums2 = new Set(nums2); // O (m)

    nums1.forEach((num) => { // O(n)
        if(!existsInNums2.has(num)){
            onlyInNums1.add(num);
        }
    });
    return Array.from(onlyInNums1) as number[]; // O(n)
}

export default function findDifference(nums1: number[], nums2: number[]): number[][] {
   return [getElemetnsOnlyInFirstList(nums1, nums2), getElemetnsOnlyInFirstList(nums2, nums1)]; // O(n + m)
};