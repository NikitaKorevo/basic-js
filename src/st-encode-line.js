import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i][0] === str[i + 1]) {
      str[i] = str[i] + str[i + 1];
      str.splice(i + 1, 1);
      i--;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 1) {
      str[i] = str[i].length + str[i][0];
    }
  }
  str = str.join('');
  return str;
}
