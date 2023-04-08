/**
 * @param {number} n - The number of disks
 * @return {number[][]} - A list of steps to solve the puzzle
 */
export default function towerOfHanoi(n: number): number[][] {
    if (n === 0)  return [];
    let answer: number[][] = [];
    helper(n, 1, 3, 2, answer);
    return answer; 
}

/**
 * @param {number} n - The number of disks to move
 * @param {number} fromPeg - The peg to move disks from
 * @param {number} toPeg - The peg to move disks to
 * @param {number} auxPeg - The peg to use as auxiliary
 * @param {number[][]} answer - The list of steps to solve the puzzle
 */
function helper(n: number, fromPeg: number, toPeg: number, auxPeg: number, answer: number[][]): void {

    if (n === 1) {
        let temp: number[] = [];
        temp.push(fromPeg);
        temp.push(toPeg);
        answer.push(temp);
        return; 
    }
    
    // Shift disks fromPeg to auxPeg using toPeg
    helper(n - 1, fromPeg, auxPeg, toPeg, answer);
    
    // Store the step of moving of 1 top disk fromPeg toPeg
    let temp: number[] = [];
    temp.push(fromPeg);
    temp.push(toPeg);
    answer.push(temp);
    
    // Shift disks auxPeg to toPeg using fromPeg
    helper(n - 1, auxPeg, toPeg, fromPeg, answer);
}
