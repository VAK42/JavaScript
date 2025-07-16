'use strict';

// Class
class a {
  constructor(b) {
    this.c = b;
  }
  d() {
    console.log(this.c);
  }
}
let e = new a('JS');
e.d();                                                 // JS
console.log(typeof a);                                 // Function
console.log(a === a.prototype.constructor);            // True
console.log(a.prototype.d);                            // [Function: d]
console.log(Object.getOwnPropertyNames(a.prototype));  // ['constructor', 'd']

// × Syntactic Sugar
function f(g) {
  this.h = g;
}
f.prototype.i = function () {
  console.log(this.h);
};
let j = new f('JS');
j.i();  // JS

// Class Expression
let u = class v {
  w() {
    console.log(v);
  }
};
new u().w();     // [class v]
console.log(v);  // ReferenceError

function x(y) {
  return class {
    z() {
      console.log(y);
    }
  };
}
let A = x('JS');
new A().z();     // JS

// Getter + Setter
class k {
  constructor(l) {
    this.l = l;
  }
  get m() {
    return this._m;
  }
  set m(n) {
    if (n.length < 1) return;
    this._m = n;
  }
  ['o' + 'p']() {
    console.log('JS');
  }
}
let q = new k('VAK');
q.m = '42';
console.log(q.m);  // 42
q.op();

class r {
  s = 'K42';
}
let t = new r();
console.log(t.s);            // K42
console.log(r.prototype.s);  // Undefined
