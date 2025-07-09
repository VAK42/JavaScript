'use strict';

// A
let a = {
  b: 1,
  c: 5
};

a[Symbol.iterator] = function () {
  return {
    d: this.b,
    e: this.c,
    next() {
      if (this.d <= this.e) {
        return { done: false, value: this.d++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let f of a) {
  console.log(f);  // 1 → 2 → 3 → 4 → 5
}

// B
let g = {
  h: 1,
  i: 5,
  [Symbol.iterator]() {
    this.j = this.h;
    return this;
  },
  next() {
    if (this.j <= this.i) {
      return { done: false, value: this.j++ };
    } else {
      return { done: true };
    }
  }
};

for (let k of g) {
  console.log(k);  // 1 → 2 → 3 → 4 → 5
}

// C
for (let l of 'VAK') {
  console.log(l);  // V → A → K
}

let m = '42';
for (let n of m) {
  console.log(n);  // 4 → 2
}

// D
let o = "VAK42";
let p = o[Symbol.iterator]();
while (true) {
  let q = p.next();
  if (q.done) break;
  console.log(q.value);  // V → A → K → 4 → 2
}

// E
let r = {
  0: "VAK",
  1: "42",
  length: 2
};

for (let s of r) { }  // Error

let t = Array.from(r);
console.log(t);  // ['VAK', '42']

let u = Array.from(g);
console.log(u);  // [1, 2, 3, 4, 5]

let v = Array.from(g, w => w * w);
console.log(v);  // [1, 4, 9, 16, 25]

// F
let x = 'VAK';
let y = Array.from(x);
console.log(y[0]);      // V
console.log(y[1]);      // A
console.log(y.length);  // 3

let z = 'VAK';
let A = [];
for (let B of z) {
  A.push(B);
}
console.log(A);  // ['V', 'A', 'K']

function C(D, E, F) {
  return Array.from(D).slice(E, F).join('');
}
let G = 'VAK';
console.log(C(G, 1, 3));     // AK
console.log(G.slice(1, 3));  // AK
