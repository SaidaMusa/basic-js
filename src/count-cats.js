function countCats(backyard) {
  if (!Array.isArray(backyard)) return 0;
  let count = 0;
  for (const row of backyard) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) if (cell === '^^') count++;
  }
  return count;
}
module.exports = { countCats };
