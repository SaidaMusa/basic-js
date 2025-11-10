const { NotImplementedError } = require('../lib');


class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;

    let depth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        depth = Math.max(depth, 1 + this.calculateDepth(item));
      }
    }
    return depth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
