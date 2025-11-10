function deleteDigit(n) {
  const s = String(n);
  let best = 0;
  for (let i = 0; i < s.length; i++) {
    const cand = parseInt(s.slice(0, i) + s.slice(i + 1), 10);
    if (cand > best) best = cand;
  }
  return best;
}
module.exports = deleteDigit;
