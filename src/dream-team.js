function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const letters = members
    .filter(v => typeof v === 'string')
    .map(s => s.trim()[0])
    .filter(Boolean)
    .map(ch => ch.toUpperCase())
    .sort()
    .join('');
  return letters || false;
}
module.exports = { createDreamTeam };
