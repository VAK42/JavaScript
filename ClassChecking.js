'use strict'

class a { }
let b = new a();
console.log(b instanceof a);        // True

function c() { }
console.log(new c() instanceof c);  // True

let d = [4, 2, 8];
console.log(d instanceof Array);    // True
console.log(d instanceof Object);   // True

class e {
  static [Symbol.hasInstance](f) {
    if (f.g) return true;
  }
}

let h = { g: true };
console.log(h instanceof e);        // True

let i = { j: 'JS' };
let k = Object.create(i);
let l = Object.create(k);
console.log(i.isPrototypeOf(k));    // True
console.log(k.isPrototypeOf(l));    // True
console.log(i.isPrototypeOf(l));    // True
console.log(l.isPrototypeOf(i));    // False
