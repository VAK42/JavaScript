'use strict'

// 'Extends'
class a {
  constructor(b) {
    this.c = 0;
    this.d = b;
  }
  e(f) {
    this.c = f;
    console.log(this.c);
    console.log(this.d);
  }
  g() {
    this.c = 0;
    console.log(this.d);
  }
}
let h = new a('JS');

class i extends a {
  j() {
    console.log(this.d);
  }
}
let k = new i('JS');

k.e(5);       // 5 → JS
k.j();        // JS
function l(m) {
  return class {
    n() { console.log(m); }
  };
}
class o extends l('JS') { }
new o().n();  // JS

// Overriding Method
class p extends a {
  j() {
    console.log('JS');
  }
  g() {
    super.g();
    this.j();
  }
}
let q = new p('JS');
q.e(5);       // 5 → JS
q.g();        // JS → JS

// Overriding Constructor
class x extends a {
  constructor(y, z) {
    this.c = 0;
    this.d = y;
    this.A = z;
  }
}
let B = new x('JS', 10);  // ReferenceError

class C extends a {
  constructor(D, E) {
    super(D);
    this.F = E;
  }
}
let G = new C('JS', 10);
console.log(G.d);         // JS
console.log(G.F);         // 10
