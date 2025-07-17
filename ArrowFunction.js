'use strict'

let a = {
  b: 'VAK',
  c: ['JS', 'K42', '42'],
  d() {
    this.c.forEach(e => console.log(this.b + ': ' + e));
  }
};
a.d();
/*
VAK: JS
VAK: K42
VAK: 42
*/

let f = {
  g: 'VAK',
  h: ['JS', 'K42', '42'],
  i() {
    this.h.forEach(function (j) {
      console.log(this.g + ': ' + j);
    }, this);
  }
};
f.i();
/*
VAK: JS
VAK: K42
VAK: 42
*/

function k(l, m) {
  return function (...n) {
    let o = this;
    setTimeout(function () {
      l.apply(o, n);
    }, m);
  };
}

function p(q) {
  console.log('VAK' + q);
}

let r = k(p, 2000);
r('42');  // VAK42
/*
Not Have 'this'
Not Have Arguments
Not Have 'super'
Can't Be Called With 'new'
*/
