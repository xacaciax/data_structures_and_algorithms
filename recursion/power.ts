/**
 * Calculates the result of a to the power of b, modulo 10^9 + 7.
 * @param a - The base number, as an integer.
 * @param b - The exponent, as an integer.
 * @returns The result of a to the power of b, modulo 10^9 + 7.
 */
function calculate_power(a: number, b: number): number {
    const mod = BigInt(1e9 + 7);

    /**
     * A recursive helper function that calculates a to the power of b, modulo mod.
     * @param a - The base number, as a BigInt.
     * @param b - The exponent, as an integer.
     * @returns The result of a to the power of b, modulo mod.
     */
    function helper(a: bigint, b: number): bigint {
        // Base Cases
        if (b === 0) {
            return BigInt(1);
        }
        if (b === 1) {
            return a % mod;
        }

        // Calculate base times half of the exponent
        const temp = helper(a, Math.floor(b / 2));

        // If exponent is an even number
        if (b % 2 === 0) {
            return (temp * temp) % mod;
        }

        // If exponent is an odd number
        return (((temp * temp) % mod) * BigInt(a)) % mod;
    }

    // Convert the result from BigInt to a regular number
    return Number(helper(BigInt(a), b));
}
