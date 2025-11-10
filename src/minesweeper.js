function minesweeper(matrix) {
  const R = matrix.length, C = matrix[0].length;
  const out = Array.from({ length: R }, () => Array(C).fill(0));
  const dirs = [-1, 0, 1];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      let cnt = 0;
      for (const dr of dirs) {
        for (const dc of dirs) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < R && nc >= 0 && nc < C && matrix[nr][nc]) cnt++;
        }
      }
      out[r][c] = cnt;
    }
  }
  return out;
}
module.exports = minesweeper;
