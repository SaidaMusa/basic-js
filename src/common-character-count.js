function getCommonCharacterCount(s1, s2) {
  const cnt1 = {};
  const cnt2 = {};
  for (const ch of s1) cnt1[ch] = (cnt1[ch] || 0) + 1;
  for (const ch of s2) cnt2[ch] = (cnt2[ch] || 0) + 1;

  let res = 0;
  for (const ch of Object.keys(cnt1)) {
    if (cnt2[ch]) res += Math.min(cnt1[ch], cnt2[ch]);
  }
  return res;
}

module.exports = getCommonCharacterCount;
