import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]' || Object.keys(date).length > 0) throw new Error('Invalid date!');

  let dateMonth = date.getMonth();
  let seasons = ['winter', 'spring', 'summer', 'autumn']

  if (dateMonth === 11 || dateMonth >= 0 && dateMonth <= 1) return seasons[0];
  if (dateMonth >= 2 && dateMonth <= 4) return seasons[1];
  if (dateMonth >= 5 && dateMonth <= 7) return seasons[2];
  if (dateMonth >= 8 && dateMonth <= 10) return seasons[3];
}
