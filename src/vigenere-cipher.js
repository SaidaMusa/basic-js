class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.A = 'A'.charCodeAt(0);
    this.Z = 'Z'.charCodeAt(0);
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.#process(message, key, +1);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.#process(message, key, -1);
  }

  #process(message, key, dir) {
    const upMsg = String(message).toUpperCase();
    const upKey = String(key).toUpperCase();
    const res = [];

    let k = 0; 

    for (let i = 0; i < upMsg.length; i++) {
      const ch = upMsg[i];
      const code = ch.charCodeAt(0);

      if (code >= this.A && code <= this.Z) {
        const mPos = code - this.A;
        const kPos = upKey.charCodeAt(k % upKey.length) - this.A;

        let cPos = (mPos + dir * kPos) % 26;
        if (cPos < 0) cPos += 26;

        res.push(String.fromCharCode(this.A + cPos));
        k++; 
      } else {
        res.push(ch);
      }
    }

    const out = this.direct ? res.join('') : res.reverse().join('');
    return out;
  }
}

module.exports = { VigenereCipheringMachine };
