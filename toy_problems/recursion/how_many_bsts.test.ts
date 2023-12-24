import howManyBSTs from "./how_many_bsts";

describe("howManyBSTs", () => {
    test("returns 1 for n = 0", () => {
        expect(howManyBSTs(0)).toBe(1n);
    });
    
    test("returns 1 for n = 1", () => {
        expect(howManyBSTs(1)).toBe(1n);
    });
    
    test("returns 2 for n = 2", () => {
        expect(howManyBSTs(2)).toBe(2n);
    });
    
    test("returns 5 for n = 3", () => {
        expect(howManyBSTs(3)).toBe(5n);
    });
    
    test("returns 16796 for n = 10", () => {
        expect(howManyBSTs(10)).toBe(16796n);
    });
});
