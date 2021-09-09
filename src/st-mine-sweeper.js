import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let matrixMine = [];
  let TotalMinesInNeighboringCells;

  const checkTarget = (row, col) => {
    TotalMinesInNeighboringCells = 0;

    if (col + 1 < matrix[row].length && matrix[row][col + 1] === true) TotalMinesInNeighboringCells++;
    if (col - 1 >= 0 && matrix[row][col - 1] === true) TotalMinesInNeighboringCells++;
    if (row + 1 < matrix.length && matrix[row + 1][col] === true) TotalMinesInNeighboringCells++;
    if (row  - 1 >= 0 && matrix[row - 1][col] === true) TotalMinesInNeighboringCells++;
    if (row  - 1 >= 0 && col  - 1 >= 0 && matrix[row - 1][col - 1] === true) TotalMinesInNeighboringCells++;
    if (row + 1 < matrix.length && col + 1 < matrix[row].length && matrix[row + 1][col + 1] === true) TotalMinesInNeighboringCells++;
    if (row + 1 < matrix.length && col  - 1 >= 0 && matrix[row + 1][col - 1] === true) TotalMinesInNeighboringCells++;
    if (row  - 1 >= 0 && col + 1 < matrix[row].length && matrix[row - 1][col + 1] === true) TotalMinesInNeighboringCells++;
    
    return TotalMinesInNeighboringCells;
  }

  for (let i = 0; i < matrix.length; i++) {
    matrixMine[i] = [];
    
    for (let j = 0; j < matrix[i].length; j++) {
      matrixMine[i][j] = checkTarget(i, j);
    }
  }
  return matrixMine;
}
