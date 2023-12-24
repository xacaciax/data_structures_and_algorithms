/**
 * Solves a given Sudoku puzzle
 * @param {number[][]} board - A 9x9 matrix containing the puzzle to be solved
 * @returns {boolean | number[][]} - Returns a valid solution if found, otherwise returns false
 */
const sudokuSolver = (board: number[][]): boolean | number[][] => {
    let col = 0;
    let row = 0;
    let foundUnfilledCell = false;

    // find first empty space: 
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let current = board[i][j];

            // empty spaces contain value 0
            if (current === 0) {
                row = i;
                col = j;
                foundUnfilledCell = true;
                break;

            }
        }
        if (foundUnfilledCell) {
            break;
        }
    }

    // Base Case
    // No more empty cells to be found, the board is complete, valid solution found. 
    if (!foundUnfilledCell) {
        return true;
    }

    for (let num = 1; num <= 9; num++) {

        if (isSafe(board, row, col, num)) {
            // found a safe number, place it 
            // console.log('placing', num, 'on board at position', row, col);
            board[row][col] = num;
            // console.log('placed', board);

            // recurse to find and fill the next unfilled cell
            if (sudokuSolver(board)) {
                return true;
            } else {
                // placing this number in this cell does not lead to a valid solution
                // undo the placement
                board[row][col] = 0;
                // ... for loop continues to the next number
                // which is backtracking
            }
        }
    }
    return false;
}

/**
 * Checks if the given number can be placed in the specified position on the board
 * @param {number[][]} board - A 9x9 matrix containing the Sudoku puzzle
 * @param {number} rowIndex - The row index of the position to check
 * @param {number} columnIndex - The column index of the position to check
 * @param {number} num - The number to check
 * @returns {boolean} - Returns true if the number can be placed, otherwise returns false
 */
const isSafe = (board: number[][], rowIndex: number, columnIndex: number, num: number): boolean => {
    let n = board.length;

    // check current row
    for (let i = 0; i < n; i++) {
        if (board[rowIndex][i] === num) {
            return false;
        }
    }

    // check current column
    for (let i = 0; i < n; i++) {
        if (board[i][columnIndex] === num) {
            return false;
        }
    }

    // check current 3x3 grid
    let boxRowStart = rowIndex - rowIndex % 3;
    let boxColStart = columnIndex - columnIndex % 3;

    for (let i = boxRowStart; i < boxRowStart + 3; i++) {
        for (let j = boxColStart; j < boxColStart + 3; j++) {
            if (board[i][j] === num) {
                return false;
            }
        }
    }

    return true;
}

/**
 * Solves the given Sudoku puzzle and returns the solved board.
 * @param {number[][]} board - The Sudoku puzzle to solve.
 * @returns {number[][]} - The solved Sudoku board.
 */
export default function sudokuSolverPuzzle(board: number[][]): number[][] {
    sudokuSolver(board);
    return board; 
}
