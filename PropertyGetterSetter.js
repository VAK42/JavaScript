'use strict';

// A
let a = {
  b: 'VAK',
  c: 'K42',
  get d() {
    return `${this.b} ${this.c}`;
  },
  set d(e) {
    [this.b, this.c] = e.split(' ');
  }
};

a.d = 'AK42 JS';
console.log(a.b);  // AK42
console.log(a.c);  // JS

// B
let d = {
  e: 'VAK',
  f: 'K42'
};

Object.defineProperty(d, 'g', {
  get() {
    return `${this.e} ${this.f}`;
  },
  set(h) {
    [this.e, this.f] = h.split(' ');
  }
});
console.log(d.g);  // VAK K42
/*
Accessor - Get + Set | Data Property - Value
Accessor | Data Property Only - Can't Be Both
*/
