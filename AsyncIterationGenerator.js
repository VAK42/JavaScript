'use strict';

// Recall Iterable
let a = {
  b: 1,
  c: 5,
  [Symbol.iterator]() {
    return {
      d: this.b,
      e: this.c,
      next() { return this.d <= this.e ? { done: false, value: this.d++ } : { done: true }; }
    };
  }
};
for (let f of a) {
  console.log(f);
}

// Async Iterable
let g = {
  h: 1,
  i: 5,
  [Symbol.asyncIterator]() {
    return {
      j: this.h,
      k: this.i,
      async next() {
        await new Promise(l => setTimeout(l, 1000));
        return this.j <= this.k ? { done: false, value: this.j++ } : { done: true };
      }
    };
  }
};
(async () => {
  for await (let m of g) {
    console.log(m);
  }
})();

// Recall Generator
let n = {
  o: 1,
  p: 5,
  *[Symbol.iterator]() {
    for (let q = this.o; q <= this.p; q++) {
      yield q;
    }
  }
};
for (let r of n) {
  console.log(r);
}

// Async Generator
let s = {
  t: 1,
  u: 5,
  async *[Symbol.asyncIterator]() {
    for (let v = this.t; v <= this.u; v++) {
      await new Promise(w => setTimeout(w, 1000));
      yield v;
    }
  }
};
(async () => {
  for await (let x of s) {
    console.log(x);
  }
})();
