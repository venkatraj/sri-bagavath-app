const Range = {
  magazines: {
    from: new Date().getFullYear(),
    to: 2015,

    *[Symbol.iterator]() {
      for (let i = this.from; i >= this.to; i--) yield i;
    },
  },
};

export default Range;
