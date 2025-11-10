class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  #shift(ch, keyCh, enc = true) {
    const a = ch.charCodeAt(0) - 65;
    const k = keyCh.charCodeAt(0) - 65;
    const s = enc ? (a + k) % 26 : (a - k + 26) % 26;
    return String.fromCharCode(65 + s);
  }

  #process(message, key, enc) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const m = String(message).toUpperCase();
    const k = String(key).toUpperCase().replace(/[^A-Z]/g, '');
    if (!k.length) throw new Error('Incorrect arguments!');

    let ki = 0;
    let res = '';
    for (const ch of m) {
      if (/[A-Z]/.test(ch)) {
        const kc = k[ki % k.length];
        res += this.#shift(ch, kc, enc);
        ki++;
      } else {
        res += ch;
      }
    }
    return this.direct ? res : res.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.#process(message, key, true);
  }

  decrypt(message, key) {
    return this.#process(message, key, false);
  }
}
module.exports = {
  VigenereCipheringMachine
};
