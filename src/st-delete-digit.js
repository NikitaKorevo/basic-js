import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arrN = String(n).split('');
  let copyArrN;
  let maximalNumber = 0;

  for (let i = 0; i < arrN.length; i++) {
    copyArrN = arrN.slice();
    copyArrN.splice(i, 1);
    copyArrN = copyArrN.join('');

    if (maximalNumber < +copyArrN) maximalNumber = +copyArrN;
  }
  return maximalNumber;
}
