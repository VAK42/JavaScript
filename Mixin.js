'use strict'

// Mixin Implementation
let a = {
  b() {
    console.log('JS', this.c);
  },
  d() {
    console.log('JS', this.c);
  }
};

class e {
  constructor(f) {
    this.c = f;
  }
}

Object.assign(e.prototype, a);
new e('JS').b();  // JS JS

// Mixin Composition
let g = {
  h(i) {
    console.log(i);
  }
};

let j = {
  __proto__: g,
  k() {
    super.h('JS' + this.l);
  },
  m() {
    super.h('JS' + this.l);
  }
};

class n {
  constructor(o) {
    this.l = o;
  }
}

Object.assign(n.prototype, j);
new n('JS').k();  // JSJS
