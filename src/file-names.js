function renameFiles(names) {
  const used = new Map();
  return names.map((name) => {
    if (!used.has(name)) {
      used.set(name, 0);
      return name;
    }
    let k = used.get(name) + 1;
    let candidate = `${name}(${k})`;
    while (used.has(candidate)) {
      k += 1;
      candidate = `${name}(${k})`;
    }
    used.set(name, k);
    used.set(candidate, 0);
    return candidate;
  });
}

module.exports = renameFiles;
