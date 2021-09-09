import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;
  let turnedArr = [];
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (turnedArr[col] === undefined) turnedArr[col] = [];
      turnedArr[col][row] = matrix[row][col];
    }
  }

  if (Array.isArray(turnedArr[1])) {
    for (let row = 0; row < turnedArr.length; row++) {
      for (let col = 0; col < turnedArr.length; col++) {
        if (turnedArr[row][col] !== 0) {
          sum += turnedArr[row][col];
        } else {
          break;
        }
      }
    }
  } else {
    for (let i = 0; i < turnedArr[0].length; i++) {
      if (turnedArr[0][i] !== 0) {
        sum += turnedArr[0][i];
      } else {
        break;
      }
    }
  }
  return sum;
}
