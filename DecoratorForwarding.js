'use strict'

let a = function (x) {
  console.log(x);
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
console.log(a(4));
/*
function (c): function (a) - Original Function <> Before Wrapping
d: Map - Cache
If Map Has Key: 4 -> Return Cached Value: 4
Otherwise -> Call Original a(4)
Map Sets Key(Input): 4 & Value(Output): 4 -> Store In Cache
Return 4
*/

let g = {
  h() {
    return 2;
  },
  i(x) {
    console.log(x);
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
console.log(g.i(2, 4));
/*
function (k): function (g.i) - Original Function <> Before Wrapping
l: Map - Cache
Create Cache Key: m = "2,4"
If Map Has Key: "2,4" -> Return Cached Value: 4
Otherwise -> Call Original g.i(2,4) <> Use '2' Only Due To i(x)
Map Sets Key(Input): "2,4" & Value(Output): 4 -> Store In Cache
Return 4
*/

let o = function (p) {
  console.log(this.q + ':' + p);
};

let r = { q: 'JS' };
o.call(r, 'JS');  // JS:JS
// call: Set | Override The Value Of this
