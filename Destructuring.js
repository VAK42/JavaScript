'use strict';

// Array Destructuring
let a = ['VAK', '42'];
let [b, c] = a;
console.log(b);  // VAK
console.log(c);  // 42

let [d, e] = 'VAK 42'.split(' ');
console.log(d);  // VAK
console.log(e);  // 42

let [f, , g] = ['VAK', '42', 'JS', 'K42'];
console.log(f);  // VAK
console.log(g);  // JS

let [h, i, j] = 'VAK';
console.log(h);  // V
console.log(i);  // A
console.log(j);  // K

let [k, l, m] = new Set([2, 4, 8]);
console.log(k);  // 2
console.log(l);  // 4
console.log(m);  // 8

let n = {};
[n.o, n.p] = 'VAK 42'.split(' ');
console.log(n.o);  // VAK
console.log(n.p);  // 42

let q = {
  r: 'VAK',
  s: 42
};
for (let [t, u] of Object.entries(q)) {
  console.log(t);  // r → s
  console.log(u);  // VAK → 42
}

let v = new Map();
v.set('w', 'VAK');
v.set('x', '42');
for (let [y, z] of v) {
  console.log(y);  // w → x
  console.log(z);  // VAK → 42
}

let A = 'VAK';
let B = '42';
[A, B] = [B, A];
console.log(A);  // 42
console.log(B);  // VAK

let [C, D, ...E] = ['VAK', '42', 'JS', 'K42'];
console.log(C);  // VAK
console.log(D);  // 42
console.log(E);  // ['JS', 'K42']

let [F, G] = [];
console.log(F);  // Undefined
console.log(G);  // Undefined

let [H = 'VAK', I = 'JS'] = ['VAK42'];
console.log(H);  // VAK42
console.log(I);  // JS

// Object Destructuring
let L = {
  M: 'K',
  N: 400,
  O: 200
};
let { M: P, N: Q, O: R } = L;
console.log(P);  // K
console.log(Q);  // 400
console.log(R);  // 200

let { S, T, U } = { S: 'JS', U: 200, T: 400 };
console.log(S);  // JS
console.log(T);  // 400
console.log(U);  // 200

let V = {
  W: 'K',
  X: 400,
  Y: 200
};
let { X: Z, Y: A0, W } = V;
console.log(W);   // K
console.log(Z);   // 400
console.log(A0);  // 200

let B0 = {
  C0: 'VAK42'
};
let { D0 = 400, E0 = 200, C0 } = B0;
console.log(C0);  // VAK42
console.log(D0);  // 400
console.log(E0);  // 200

let F0 = {
  C0: 'JS'
};
let { D0: G0 = 400, E0: H0 = 200, C0: I0 } = F0;
console.log(I0);  // JS
console.log(G0);  // 400
console.log(H0);  // 200

let J0 = {
  C0: 'JS',
  D0: 800,
  E0: 200
};
let { C0: K0 } = J0;
console.log(K0);  // JS

let L0 = {
  M0: 'JS',
  N0: 200,
  O0: 400
};
let { M0, ...P0 } = L0;
console.log(P0.N0);  // 200
console.log(P0.O0);  // 400

let Q0, R0, S0;
({ Q0, R0, S0 } = { Q0: 'JS', R0: 200, S0: 800 });
console.log(Q0);  // JS
console.log(R0);  // 200
console.log(S0);  // 800

// Nested Destructuring
let T0 = {
  U0: {
    V0: 400,
    W0: 200
  },
  X0: ['VAK', 'JS'],
  Y0: true
};

let {
  U0: {
    V0,
    W0
  },
  X0: [Z0, A1],
  B1 = 'VAK42'
} = T0;

console.log(B1);  // VAK42
console.log(V0);  // 400
console.log(W0);  // 200
console.log(Z0);  // VAK
console.log(A1);  // JS

// Smart Function Parameter
let C1 = {
  D1: 'VAK',
  E1: ['JS', 'VAK42']
};
function F1({
  D1: G1 = 'K42',
  H1: I1 = 400,
  J1 = 200,
  E1: [K1, L1]
}) {
  console.log(G1);  // VAK
  console.log(I1);  // 400
  console.log(J1);  // 200
  console.log(K1);  // JS
  console.log(L1);  // VAK42
}
F1(C1);

function D1({ E1 = 'K42', F1 = 800, G1 = 200 }) {
  console.log(E1);
  console.log(F1);
  console.log(G1);
}
D1({});  // K42 → 800 → 200
D1();    // Error

function H1({ I1 = 'K42', J1 = 800, K1 = 200 } = {}) {
  console.log(I1);
  console.log(J1);
  console.log(K1);
}
H1({});  // K42 → 800 → 200
H1();    // K42 → 800 → 200
