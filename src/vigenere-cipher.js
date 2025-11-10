const { NotImplementedError } = require('../lib');

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    return this.#process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    return this.#process(encryptedMessage, key, 'decrypt');
  }

  #process(text, key, mode) {
    if (typeof text !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!');
    }

    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);

    const msg = text.toUpperCase();
    const k = key.toUpperCase();

    let res = '';
    let ki = 0; 

    for (let i = 0; i < msg.length; i++) {
      const ch = msg[i];
      const code = ch.charCodeAt(0);

      const isLetter = code >= A && code <= Z;
      if (!isLetter) {
        res += ch;               
        continue;
      }

      const m = code - A;
      const kc = k[ki % k.length].charCodeAt(0) - A;

      let enc;
      if (mode === 'encrypt') {
        enc = (m + kc) % 26;
      } else { 
        enc = (m - kc + 26) % 26;
      }

      res += String.fromCharCode(A + enc);
      ki++;
    }

    return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
