function getSumOfDigits(n) {
  let num = n;
  const sumOnce = (x) => String(x).split('').reduce((a, d) => a + (+d), 0);

  while (num >= 10) {
    num = sumOnce(num);
  }
  return num;
}

module.exports = getSumOfDigits;
