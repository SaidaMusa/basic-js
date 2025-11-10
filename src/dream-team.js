const { NotImplementedError } = require('../lib');

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const letters = members
    .filter(m => typeof m === 'string')
    .map(name => name.trim()[0].toUpperCase())
    .sort()
    .join('');

  return letters.length > 0 ? letters : false;
}

module.exports = { createDreamTeam };
