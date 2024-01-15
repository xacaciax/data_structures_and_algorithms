export default function minCostClimbingStairs(cost: number[]): number {
    let minCost = new Array(cost.length + 1).fill(0);

    for (let i = 2; i < cost.length + 1; i++) {
        let oneStep = minCost[i -1] + cost[i - 1];
        let twoStep = minCost[i - 2] + cost[i - 2]; 
        minCost[i] = Math.min(oneStep, twoStep);
    }
    
    return minCost.pop()
};

// Time Complexity: O(n)
// Space Complexity: O(n)


// Iterate backwards through the array, adding the minimum of the next two elements to the current element.
// Constant space solution
function minCostClimbingStairs2(cost: number[]): number {
    cost.push(0);
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
};

// currently does not work
function minCostClimbingStairs3(cost: number[]): number {
        const memo = new Map();
        const minCost = (i: number) => {
            if (i <= 1) return 0;
            if (memo.get(i)) {
                return memo.get(i);
            }
            let stepOne = cost[i - 1] + minCost(i - 1);
            let stepTwo = cost[i - 2] + minCost(i - 2);
            memo.set(i, Math.min(stepOne, stepTwo));
            return memo.get(i);
        }
        return minCost(cost.length);
    };
    

