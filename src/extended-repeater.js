function repeater(str, options = {}) {
  const {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|',
  } = options;

  const base = String(str);
  const add = (addition !== undefined) ? String(addition) : undefined;

  const additionPart = (add === undefined)
    ? ''
    : Array((additionRepeatTimes || 1)).fill(add).join(additionSeparator);

  const unit = base + additionPart;
  return Array((repeatTimes || 1)).fill(unit).join(separator);
}
module.exports = repeater;
