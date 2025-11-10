function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0]?.length || 0;
  const haunted = new Array(cols).fill(false);

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      if (haunted[c]) continue;
      const val = matrix[r][c];
      if (val === 0) {
        haunted[c] = true;
      } else {
        sum += val;
      }
    }
  }
  return sum;
}

module.exports = {getMatrixElementsSum};
