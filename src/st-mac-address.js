import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  n = n.split('-');
  if (n.length !== 6) return false;
  n = n.join('');

  for (let i = 0; i < n.length; i++) {
    let code = n[i].charCodeAt();
    
    if ((code >= 65 && code <= 70) || (code >= 48 && code <= 57)) {
    } else {
      return false;
    }
  }
  return true;
}
