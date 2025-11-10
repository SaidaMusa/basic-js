function sortByHeight(arr) {
  const vals = arr.filter(v => v !== -1).sort((a,b) => a - b);
  let i = 0;
  return arr.map(v => (v === -1 ? -1 : vals[i++]));
}
module.exports = sortByHeight;
