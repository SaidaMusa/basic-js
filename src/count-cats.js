const { NotImplementedError } = require('../lib');

function countCats(matrix) {
  if (!Array.isArray(matrix)) return 0;

  let count = 0;

  for (let row of matrix) {
    for (let item of row) {
      if (item === '^^') count++;
    }
  }

  return count;
}

module.exports = { countCats };
