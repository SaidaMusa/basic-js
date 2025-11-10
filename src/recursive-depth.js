class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;   
    let max = 1;                         
    for (const v of arr) {
      if (Array.isArray(v)) {
        max = Math.max(max, 1 + this.calculateDepth(v));
      }
    }
    return max;
  }
}


module.exports = {
  DepthCalculator,
  depthCalculator: new DepthCalculator(),
};
