const { NotImplementedError } = require('../lib');

function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((turns * 3600) / turnsSpeed);
  return { turns, seconds };
}

module.exports = { calculateHanoi };
