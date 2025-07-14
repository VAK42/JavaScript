'use strict';

// [[Prototype]]
let a = { b: 'JS' };
let c = { d: true };
c.__proto__ = a;
console.log(c.b);  // JS
console.log(c.d);  // True

let e = {
  f: true,
  g() {
    console.log('JS');
  }
};
let h = {
  i: true,
  __proto__: e
};
let j = {
  k: 10,
  __proto__: h
};
j.g();             // JS
console.log(j.i);  // True
/*
__proto__: Object | Null
__proto__: Deprecated
__proto__: Can't Go In Circles
1 Object <-> 1 [[Prototype]]
*/

// Writing
let l = {
  m: 'VAK',
  n: 'K42',
  set o(p) {
    [this.m, this.n] = p.split(' ');
  },
  get o() {
    return `${this.m} ${this.n}`;
  }
};
let q = {
  __proto__: l,
  r: true
};
console.log(q.o);  // VAK K42
q.o = 'K42 JS';
console.log(q.o);  // K42 JS
console.log(l.o);  // VAK K42
/*
Reading Only - Not For Reading | Deletion
Use Get + Set Instead
*/

// This
let s = {
  t() {
    if (!this.u) console.log('VAK');
  },
  v() {
    this.u = true;
  }
};
let w = {
  x: '42',
  __proto__: s
};
w.v();
console.log(w.u);  // True
console.log(s.u);  // Undefined

// Iteration
let A = { B: true };
let C = { D: true, __proto__: A };
console.log(Object.keys(C));      // ['D']
for (let E in C) console.log(E);  // D → B
for (let F in C) {
  let G = C.hasOwnProperty(F);
  console.log(G ? `C: ${F}` : `A: ${F}`);  // C: D → A: B
}
