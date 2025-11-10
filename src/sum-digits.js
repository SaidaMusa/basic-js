function getSumOfDigits(n) {
  let x = n;
  while (x >= 10) {
    let s = 0;
    for (const ch of String(x)) s += ch.charCodeAt(0) - 48;
    x = s;
  }
  return x;
}
module.exports = getSumOfDigits;
