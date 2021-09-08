import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let allPartsDomains = [];
  let object = {};

  for (let i = 0; i < domains.length; i++) {
    let arr = domains[i].split('.').reverse();
    arr[0] = '.' + arr[0];

    for (let j = 1;j > 0;j++) {
      object[arr[0]] = 0;
      allPartsDomains.push(arr[0]);

      if (arr.length >1) {
        arr[0] = arr[0] + '.' +  arr[1];
        arr.splice(1,1);
      } else {
        break;
      }
    }
  }

  for (let i = 0; i < allPartsDomains.length; i++) {
    object[allPartsDomains[i]] = object[allPartsDomains[i]] + 1;
  }
  return object;
}
