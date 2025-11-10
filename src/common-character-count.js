function getCommonCharacterCount(s1, s2) {
  const a = Object.create(null), b = Object.create(null);
  for (const ch of s1) a[ch] = (a[ch] || 0) + 1;
  for (const ch of s2) b[ch] = (b[ch] || 0) + 1;
  let sum = 0;
  for (const ch in a) if (b[ch]) sum += Math.min(a[ch], b[ch]);
  return sum;
}
module.exports = getCommonCharacterCount;
