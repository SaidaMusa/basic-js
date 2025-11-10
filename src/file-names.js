function renameFiles(names) {
  const used = new Map();
  const res = [];
  for (const name of names) {
    if (!used.has(name)) {
      used.set(name, 0);
      res.push(name);
    } else {
      let k = used.get(name) + 1;
      let candidate = `${name}(${k})`;
      while (used.has(candidate)) {
        k++;
        candidate = `${name}(${k})`;
      }
      used.set(name, k);
      used.set(candidate, 0);
      res.push(candidate);
    }
  }
  return res;
}
module.exports = renameFiles;
