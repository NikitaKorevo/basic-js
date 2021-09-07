import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (position > this.chain.length || position < 1 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finishChain = '';
    
    for (let i = 0; i < this.chain.length; i++) {
      finishChain += `( ${this.chain[i]} )~~`;
    }
    finishChain = finishChain.slice(0, finishChain.length - 2);
    this.chain = [];
    return finishChain;
  }
};
