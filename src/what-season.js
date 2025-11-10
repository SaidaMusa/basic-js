function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  if (
    !(date instanceof Date) ||
    Object.getOwnPropertyNames(date).length > 0
  ) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();

  if (month === 11 || month < 2) return 'winter';
  if (month >= 2 && month < 5) return 'spring';
  if (month >= 5 && month < 8) return 'summer';
  if (month >= 8 && month < 11) return 'autumn';

  throw new Error('Invalid date!');
}

module.exports = {
  getSeason,
};
