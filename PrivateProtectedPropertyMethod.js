'use strict'

// Private
class a {
  #b;
  #c() {
    console.log('JS');
  }
  constructor(d) {
    this.#b = d;
    console.log('JS');
  }
  e() {
    console.log('JS', this.#b);
    this.#c();
  }
}

let f = new a(10);  // JS
f.e();              // JS 10 → JS
/*
console.log(f.#b);  // Error
f.#c();             // Error
*/

class g extends a {
  constructor(h) {
    super(h);
    console.log('JS');
  }
  i() {
    /*
    console.log(this.#b);  // Error
    this.#c();             // Error
    */
    console.log('JS');
  }
}

let j = new g(20);  // JS → JS
j.e();              // JS 20 → JS
j.i();              // JS

// Protected
class k {
  _l = 'JS';
  _m() {
    console.log('JS');
  }
  constructor(n) {
    this._l = n;
    console.log('JS');
  }
  o() {
    console.log('JS', this._l);
    this._m();
  }
}

let p = new k(80);  // JS
p.o();              // JS 80 → JS
console.log(p._l);  // 80
p._m();             // JS

class q extends k {
  constructor(r) {
    super(r);
    console.log('JS');
  }
  s() {
    console.log('JS', this._l);
    this._m();
  }
}

let t = new q(40);  // JS → JS
t.o();              // JS 40 → JS
t.s();              // JS 40 → JS
