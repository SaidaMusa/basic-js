const chainMaker = {
  _links: [],
  getLength() { return this._links.length; },
  addLink(value) { this._links.push(`( ${String(value)} )`); return this; },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this._links.length) {
      this._links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this._links.splice(position - 1, 1);
    return this;
  },
  reverseChain() { this._links.reverse(); return this; },
  finishChain() {
    const out = this._links.join('~~');
    this._links = [];
    return out;
  },
};
module.exports = { chainMaker };
