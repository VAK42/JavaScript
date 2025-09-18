'use strict';

// Generator
function* a() {
  yield 8;
  yield 2;
  return 4;
}

let b = a();
console.log(b);                  // Object [Generator] {}
let c = b.next();
console.log(JSON.stringify(c));  // {"value":8,"done":false}
let d = b.next();
console.log(JSON.stringify(d));  // {"value":2,"done":false}
let e = b.next();
console.log(JSON.stringify(e));  // {"value":4,"done":true}
for (let f of a()) {
  console.log(f);                // 8 → 2
}

function* g() {
  yield 8;
  yield 2;
  yield 4;
}
let h = g();
for (let i of h) {
  console.log(i);  // 8 → 2 → 4
}
let j = [0, ...g()];
console.log(j);    // [0, 8, 2, 4]

// Iterable
let k = {
  n: 1,
  o: 5,
  [Symbol.iterator]() {
    return {
      p: this.n,
      q: this.o,
      next() {
        return this.p <= this.q ? { done: false, value: this.p++ } : { done: true };
      }
    };
  }
};
console.log([...k]);  // [1, 2, 3, 4, 5]

let l = {
  n: 1,
  o: 5,
  *[Symbol.iterator]() {
    for (let r = this.n; r <= this.o; r++) {
      yield r;
    }
  }
};
console.log([...l]);  // [1, 2, 3, 4, 5]

// Composition
function* s(t, u) {
  for (let v = t; v <= u; v++)yield v;
}

function* w() {
  yield* s(48, 57);
  yield* s(65, 90);
  yield* s(97, 122);
}
let x = '';
for (let y of w()) {
  x += String.fromCharCode(y);  // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
}
console.log(x);

function* z() {
  for (let A = 48; A <= 57; A++)yield A;
  for (let B = 65; B <= 90; B++)yield B;
  for (let C = 97; C <= 122; C++)yield C;
}
let D = '';
for (let E of z()) {
  D += String.fromCharCode(E);  // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
}
console.log(D);

// Bidirectional
function* F() {
  let G = yield '2 + 2 = ?';
  console.log(G);
  let H = yield '4 * 4 = ?';
  console.log(H);
}
let I = F();
console.log(I.next().value);   // 2 + 2 = ? → 4
console.log(I.next(4).value);  // 4 * 4 = ? → 16
console.log(I.next(16).done);  // True

// Return
function* J() {
  yield 8;
  yield 2;
  yield 4;
}
const K = J();
console.log(K.next());        // {value: 8, done: false}
console.log(K.return("JS"));  // {value: 'JS', done: true}
console.log(K.next());        // {value: undefined, done: true}
/*
Generator: Create Functions That Can Pause Execution & Yield Values -> Resume When .next() Is Called
yield: Pause The Generator & Return A Value -> The Generator Can Resume Execution After Yielding & Continue From The Last yield Statement
yield*: Delegate Control To Another Generator | Iterable -> Allowing For Easy Composition
*/
