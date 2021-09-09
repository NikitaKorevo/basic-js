import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let isNegativeNumberHere = [];
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      isNegativeNumberHere[i] = true;
    } else {
      isNegativeNumberHere[i] = false;
    }
  }

  arr = arr.filter(num => num !== -1);
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < isNegativeNumberHere.length; i++) {
    if (isNegativeNumberHere[i]) {
      result.push(-1);
    } else {
      result.push(arr.shift());
    }
  }
  return result;
}
