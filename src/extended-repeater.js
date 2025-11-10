function repeater(str, options = {}) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const s = String(str);
  const add = String(addition);

  const additionPart = new Array(additionRepeatTimes)
    .fill(add)
    .join(additionSeparator);

  const fullChunk = s + additionPart;

  return new Array(repeatTimes).fill(fullChunk).join(separator);
}

module.exports = {repeater};
