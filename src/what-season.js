function isRealDate(d) {
  return d instanceof Date && !Number.isNaN(d.getTime());
}
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  try { date.getTime(); } catch { throw new Error('Invalid date!'); }
  if (!isRealDate(date) || Object.getOwnPropertyNames(date).length) {
    throw new Error('Invalid date!');
  }
  const m = date.getMonth(); 
  if ([11,0,1].includes(m)) return 'winter';
  if ([2,3,4].includes(m)) return 'spring';
  if ([5,6,7].includes(m)) return 'summer';
  return 'autumn';
}
module.exports = { getSeason };
