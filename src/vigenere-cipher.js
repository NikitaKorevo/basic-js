import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let encryptString = '';
    let desiredLengthKey = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    message = message.toUpperCase();

    while (message.length > desiredLengthKey.length) {
      desiredLengthKey += key;
    }
    desiredLengthKey = desiredLengthKey.slice(0, message.length).toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) === -1) {
        encryptString += message[i];
      } else {
        encryptString += alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(desiredLengthKey[j])) % alphabet.length];
        j++
      }
    }
    
    if (this.reverse) {
      return encryptString;
    } else {
      return encryptString.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

    let decryptString = '';
    let desiredLengthKey = '';
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    encryptedMessage = encryptedMessage.toUpperCase();

    while (encryptedMessage.length > desiredLengthKey.length) {
      desiredLengthKey += key;
    }
    desiredLengthKey = desiredLengthKey.slice(0, encryptedMessage.length).toUpperCase();

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (alphabet.indexOf(encryptedMessage[i]) === -1) {
        decryptString += encryptedMessage[i];
      } else {
        decryptString += alphabet[(alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(desiredLengthKey[j]) + alphabet.length) % alphabet.length];
        j++
      }
    }

    if (this.reverse) {
      return decryptString;
    } else {
      return decryptString.split('').reverse().join('');
    }
  }
}
