function getDNSStats(domains) {
  const res = {};
  for (const d of domains) {
    const parts = d.split('.').reverse();
    let acc = '';
    for (const p of parts) {
      acc = acc + '.' + p;
      res[acc] = (res[acc] || 0) + 1;
    }
  }
  return res;
}
module.exports = getDNSStats;
