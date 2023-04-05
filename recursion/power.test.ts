import calculate_power from "./power";

describe('calculate_power', () => {
    test('calculates 2^3 correctly', () => {
        expect(calculate_power(2, 3)).toBe(8);
    });

    test('calculates 7^2 correctly', () => {
        expect(calculate_power(7, 2)).toBe(49);
    });

    test('calculates 123456^789012 correctly', () => {
        expect(calculate_power(123456, 789012)).toBe(447603089);
    });

    test('calculates 999999^1000000 correctly', () => {
        expect(calculate_power(999999, 1000000)).toBe(449377614);
    });

    test('calculates 123456789^987654321 correctly', () => {
        expect(calculate_power(123456789, 987654321)).toBe(652541198);
    });
});
