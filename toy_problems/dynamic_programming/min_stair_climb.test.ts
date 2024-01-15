import  minCostClimbingStairs  from './min_stair_climb.ts';

describe('minCostClimbingStairs', () => {
    it('should return the minimum cost to climb the stairs', () => {
        expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6);
    });
    it('should return the minimum cost to climb the stairs', () => {
        expect(minCostClimbingStairs([0, 0, 0, 0])).toEqual(0);
    } );
    it('should return the minimum cost to climb the stairs', () => {
        expect(minCostClimbingStairs([1, 1, 1, 1])).toEqual(2);
    });
});