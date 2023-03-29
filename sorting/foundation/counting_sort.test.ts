describe('counting_sort', () => {
    it('sorts an unsorted array of positive integers', () => {
        const unsorted = [4, 3, 7, 1, 9, 5, 8, 2, 6];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(counting_sort(unsorted)).toEqual(expected);
    });
    
    it('sorts an unsorted array of negative integers', () => {
        const unsorted = [-4, -3, -7, -1, -9, -5, -8, -2, -6];
        const expected = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
        expect(counting_sort(unsorted)).toEqual(expected);
    });
    
    it('sorts an unsorted array of mixed positive and negative integers', () => {
        const unsorted = [4, -3, 7, -1, 9, -5, 8, -2, 6];
        const expected = [-5, -3, -2, -1, 4, 6, 7, 8, 9];
        expect(counting_sort(unsorted)).toEqual(expected);
    });
    
    it('sorts a large array of random integers', () => {
        const unsorted = [];
        const expected = [];
        for (let i = 0; i < 10000; i++) {
            const randInt = Math.floor(Math.random() * 201) - 100; // random integer between -100 and 100 (inclusive)
            unsorted.push(randInt);
            expected.push(randInt);
        }
        expected.sort((a, b) => a - b); // sort the expected array in ascending order
        expect(counting_sort(unsorted)).toEqual(expected);
    });
});
