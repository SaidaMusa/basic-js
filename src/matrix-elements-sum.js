function getMatrixElementsSum(matrix) {
  const blocked = new Set();
  let sum = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (blocked.has(c)) continue;
      if (matrix[r][c] === 0) blocked.add(c);
      else sum += matrix[r][c];
    }
  }
  return sum;
}
module.exports = getMatrixElementsSum;
