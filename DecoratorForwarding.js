'use strict'

let a = function (x) {
  console.log(x);               // 4
  return x;
};

let b = function (c) {
  let d = new Map();
  return function (e) {
    if (d.has(e)) {
      return d.get(e);
    }
    let f = c(e);
    d.set(e, f);
    return f;
  };
};
a = b(a);
console.log(a(4));              // 4
console.log('JS' + a(1));       // JS1
console.log(a(2));              // 2
console.log('JS' + a(2));       // JS2

let g = {
  h() {
    return 2;
  },
  i(x) {
    console.log(x);             // 2
    return x * this.h();
  }
};

let j = function (k) {
  let l = new Map();
  return function () {
    let m = [...arguments].join(',');
    if (l.has(m)) {
      return l.get(m);
    }
    let n = k.apply(this, arguments);
    l.set(m, n);
    return n;
  };
};
g.i = j(g.i);
console.log(g.i(2, 4));         // 2
console.log('JS' + g.i(2, 4));  // JS2

let o = function (p) {
  console.log(this.q + ':' + p);
};

let r = { q: 'JS' };
let s = { q: 'JS' };
o.call(r, 'JS');                // JS:JS
o.call(s, 'JS');                // JS:JS

let t = {
  u(x) {
    console.log(x);             // 5
    return x + this.h();
  },
  h() {
    return 4;
  }
};

let v = function (w) {
  let x = new Map();
  return function () {
    let y = [...arguments].join(',');
    if (x.has(y)) {
      return x.get(y);
    }
    let z = w.apply(this, arguments);
    x.set(y, z);
    return z;
  };
};
t.u = v(t.u);
console.log(t.u(5));            // 9
console.log('JS' + t.u(5));     // JS9
