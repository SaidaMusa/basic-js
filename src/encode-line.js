function encodeLine(str) {
  if (!str) return '';
  let out = '', cnt = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) cnt++;
    else {
      out += (cnt > 1 ? cnt : '') + str[i - 1];
      cnt = 1;
    }
  }
  return out;
}
module.exports = encodeLine;
