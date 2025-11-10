'use strict';


class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  /**
   * Core routine used by encrypt/decrypt
   * @param {string} message
   * @param {string} key
   * @param {'enc'|'dec'} mode
   * @returns {string}
   */
  _process(message, key, mode) {
    if (typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const k = key.toUpperCase();

    let result = '';
    let ki = 0; 

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      const mi = this.ALPHABET.indexOf(ch);

      if (mi === -1) {
        result += ch;
        continue;
      }

      let keyChar = k[ki % k.length];
      while (this.ALPHABET.indexOf(keyChar) === -1) {
        ki++;
        keyChar = k[ki % k.length];
      }
      const kiVal = this.ALPHABET.indexOf(keyChar);

      let outIndex;
      if (mode === 'enc') {
        outIndex = (mi + kiVal) % 26;
      } else {
        outIndex = (mi - kiVal + 26) % 26;
      }

      result += this.ALPHABET[outIndex];
      ki++; 
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, 'enc');
  }

  decrypt(message, key) {
    return this._process(message, key, 'dec');
  }
}

module.exports = { VigenereCipheringMachine };
