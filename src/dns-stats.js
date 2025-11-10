function getDNSStats(domains) {
  const map = new Map();
  for (const d of domains) {
    const parts = d.split('.').reverse();
    let key = '';
    for (const p of parts) {
      key = `${key}.${p}`;
      map.set(key, (map.get(key) || 0) + 1);
    }
  }
  const obj = {};
  for (const [k, v] of map.entries()) obj[k] = v;
  return obj;
}

module.exports = getDNSStats;
