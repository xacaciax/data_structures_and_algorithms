import moveZeroes from "./move_zeros";

describe('moveZeroes', () => {
    test('moves all zeroes to the end of the array', () => {
        let nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('handles an array with no zeroes', () => {
        let nums = [1, 2, 3, 4, 5];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles an array with all zeroes', () => {
        let nums = [0, 0, 0, 0, 0];
        moveZeroes(nums);
        expect(nums).toEqual([0, 0, 0, 0, 0]);
    });

    test('handles an array with one element', () => {
        let nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test('maintains the order of non-zero elements', () => {
        let nums = [4, 0, 2, 0, 1];
        moveZeroes(nums);
        expect(nums).toEqual([4, 2, 1, 0, 0]);
    });
});
