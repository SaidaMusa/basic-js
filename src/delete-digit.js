function deleteDigit(n) {
  const s = String(n);
  let best = 0;
  for (let i = 0; i < s.length; i += 1) {
    const candidate = Number(s.slice(0, i) + s.slice(i + 1));
    if (candidate > best) best = candidate;
  }
  return best;
}

module.exports = deleteDigit;
