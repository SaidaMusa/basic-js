function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const res = [];
  let skipNext = false;
  for (let i = 0; i < arr.length; i++) {
    if (skipNext) { skipNext = false; continue; }
    const v = arr[i];
    if (v === '--discard-next') { skipNext = true; }
    else if (v === '--discard-prev') {
      if (res.length && arr[i-2] !== '--discard-next') res.pop();
    } else if (v === '--double-next') {
      if (i + 1 < arr.length) res.push(arr[i + 1]);
    } else if (v === '--double-prev') {
      if (i - 1 >= 0 && arr[i-2] !== '--discard-next') res.push(arr[i - 1]);
    } else {
      res.push(v);
    }
  }
  return res;
}
module.exports = { transform };
