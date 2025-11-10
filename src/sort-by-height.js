function sortByHeight(arr) {
  const vals = arr.filter((x) => x !== -1).sort((a, b) => a - b);
  let i = 0;
  return arr.map((x) => (x === -1 ? -1 : vals[i++]));
}

module.exports = sortByHeight;
