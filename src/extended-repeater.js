import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
/*   
  options.repeatTimes сколько повторяться будет это str
  options.separator нужен между словами

  options.addition присасывается к str
  options.additionRepeatTimes сколько будет addition
  options.additionSeparator соединяет addition между собой если их больше 1 */

  let addition = [];
  let additionSeparator = options.additionSeparator || '|';
  let additionWithSeparator = '';

  // сборка addition с additionSeparator
  if (options.addition !== undefined) {
    addition[0] = String(options.addition);


    let additionRepeatTimes = options.additionRepeatTimes || 1;

    for (let i = 0; i < additionRepeatTimes; i++) {
      addition[i] = addition[0];
    }

    additionWithSeparator = addition.join(additionSeparator);
  }

  let string = [];
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let stringWithAddition = '';

  // сборка string c addition
  for (let i = 0; i < repeatTimes; i++) {
    string[i] = str + additionWithSeparator;
  }

  // сборка string + addition с separator
  stringWithAddition = string.join(separator);
  return stringWithAddition;
}
