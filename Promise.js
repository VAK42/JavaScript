'use strict'

// A
let a = new Promise((b, c) => {
  let d = true;
  if (d) {
    b('e');
  } else {
    c('f');
  }
});

a.then((g) => { console.log(g); })
  .catch((h) => { console.log(h); });

// B
let i = new Promise((j, k) => {
  setTimeout(() => { j('l'); }, 100);
});

i.then((m) => { console.log(m); })
  .catch((n) => { console.log(n); });

// C
let o = new Promise((p, q) => {
  setTimeout(() => { q('r'); }, 200);
});

o.then((s) => { console.log(s); })
  .catch((t) => { console.log(t); });

// D
let u = new Promise((v, w) => {
  setTimeout(() => {
    try {
      throw new Error('x');
    }
    catch (y) {
      w(y.message);
    }
  }, 300);
});

u.catch((z) => { console.log(z); });

// E
let A = new Promise((B, C) => {
  let D = true;
  if (D) {
    B('E');
  } else {
    C('F');
  }
});

A.then((G) => { console.log(G); })
  .catch((H) => { console.log(H); })
  .finally(() => { console.log('I'); });

// F
let J = new Promise((K, L) => {
  let M = false;
  if (M) {
    K('N');
  } else {
    L('O');
  }
});

J.then((P) => { console.log(P); })
  .catch((Q) => { console.log(Q); })
  .finally(() => { console.log('R'); });

// G
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((T) => {
    if (!T.ok) {
      throw new Error('U');
    }
    return T.json();
  })
  .then((V) => { console.log(V); })
  .catch((W) => { console.error('X', W); })
  .finally(() => { console.log('Y'); });

// Promisification
function Z(A0) {
  return function (...B0) {
    return new Promise((C0, D0) => {
      function E0(F0, G0) {
        if (F0) {
          D0(F0);
        } else {
          C0(G0);
        }
      }
      B0.push(E0);
      A0.call(this, ...B0);
    });
  };
}
