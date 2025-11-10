class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  _shiftChar(ch, keyCh, mode) {
    const i = this.A.indexOf(ch);
    const k = this.A.indexOf(keyCh);
    if (i === -1) return ch;
    let resIdx;
    if (mode === 'enc') resIdx = (i + k) % 26;
    else resIdx = (i - k + 26) % 26;
    return this.A[resIdx];
  }

  _process(message, key, mode) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const msg = String(message).toUpperCase();
    const k = String(key).toUpperCase();

    let ki = 0;
    let out = '';
    for (const ch of msg) {
      if (this.A.includes(ch)) {
        const keyCh = k[ki % k.length];
        out += this._shiftChar(ch, keyCh, mode);
        ki += 1;
      } else {
        out += ch;
      }
    }
    return this.direct ? out : out.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, 'enc');
  }

  decrypt(message, key) {
    return this._process(message, key, 'dec');
  }
}

module.exports = VigenereCipheringMachine;
