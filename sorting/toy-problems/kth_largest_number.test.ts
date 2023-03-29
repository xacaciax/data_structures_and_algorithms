describe("kth_largest_in_an_array", () => {
    test("should return the kth largest number in the array", () => {
        expect(kth_largest_in_an_array([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    });

    test("should return the largest number in the array when k = 1", () => {
        expect(kth_largest_in_an_array([3, 2, 1, 5, 6, 4], 1)).toBe(6);
    });

    test("should return the smallest number in the array when k = length of array", () => {
        expect(kth_largest_in_an_array([3, 2, 1, 5, 6, 4], 6)).toBe(1);
    });

    test("should return the same number when k = 0", () => {
        expect(kth_largest_in_an_array([3, 2, 1, 5, 6, 4], 0)).toBe(3);
    });

    test("should throw an error when k is greater than length of array", () => {
        expect(() => kth_largest_in_an_array([3, 2, 1, 5, 6, 4], 7)).toThrow();
    });
});
