function minesweeper(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;
  const res = Array.from({ length: R }, () => Array(C).fill(0));

  const dirs = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  for (let r = 0; r < R; r += 1) {
    for (let c = 0; c < C; c += 1) {
      let cnt = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr; const nc = c + dc;
        if (nr >= 0 && nr < R && nc >= 0 && nc < C && matrix[nr][nc]) cnt += 1;
      }
      res[r][c] = cnt;
    }
  }
  return res;
}

module.exports = {minesweeper};
