'use strict'

// Promise.resolve
let a = Promise.resolve('b');
a.then(c => { console.log(c); });

// Promise.reject
let d = Promise.reject('e');
d.catch(f => { console.log(f); });

// Promise.all
let g = new Promise(h => setTimeout(() => h('i'), 100));
let j = new Promise(k => setTimeout(() => k('l'), 200));
let m = Promise.resolve('n');

Promise.all([g, j, m])
  .then(o => { console.log(o); })
  .catch(p => { console.log(p); });

let q = new Promise(r => setTimeout(() => r('s'), 100));
let t = new Promise((u, v) => setTimeout(() => v('w'), 200));
let x = Promise.resolve('y');

Promise.all([q, t, x])
  .then(z => { console.log(z); })
  .catch(A0 => { console.log(A0); });

// Promise.allSettled
let B0 = new Promise(C0 => setTimeout(() => C0('D0'), 100));
let E0 = new Promise((F0, G0) => setTimeout(() => G0('H0'), 200));
let I0 = Promise.resolve('J0');
let K0 = Promise.reject('L0');

Promise.allSettled([B0, E0, I0, K0])
  .then(M0 => {
    M0.forEach(N0 => {
      if (N0.status === 'fulfilled') {
        console.log(`O0 ${N0.value}`);
      } else {
        console.log(`P0 ${N0.reason}`);
      }
    });
  });

// Promise.race
let Q0 = new Promise(R0 => setTimeout(() => R0('S0'), 300));
let T0 = new Promise(U0 => setTimeout(() => U0('V0'), 100));
let W0 = new Promise((X0, Y0) => setTimeout(() => Y0('Z0'), 200));

Promise.race([Q0, T0, W0])
  .then(A1 => { console.log(A1); })
  .catch(B1 => { console.log(B1); });

let C1 = new Promise(D1 => setTimeout(() => D1('E1'), 300));
let F1 = new Promise((G1, H1) => setTimeout(() => H1('I1'), 100));
let J1 = new Promise(K1 => setTimeout(() => K1('L1'), 200));

Promise.race([C1, F1, J1])
  .then(M1 => { console.log(M1); })
  .catch(N1 => { console.log(N1); });

// Promise.any
let O1 = new Promise((P1, Q1) => setTimeout(() => Q1('R1'), 300));
let S1 = new Promise(T1 => setTimeout(() => T1('U1'), 100));
let V1 = new Promise((W1, X1) => setTimeout(() => X1('Y1'), 200));

Promise.any([O1, S1, V1])
  .then(Z1 => { console.log(Z1); })
  .catch(A2 => { console.log(A2); });

let B2 = new Promise((C2, D2) => setTimeout(() => D2('E2'), 300));
let F2 = new Promise((G2, H2) => setTimeout(() => H2('I2'), 100));
let J2 = new Promise((K2, L2) => setTimeout(() => L2('M2'), 200));

Promise.any([B2, F2, J2])
  .then(N2 => { console.log(N2); })
  .catch(O2 => { console.log(`P2 ${O2.errors.join(', ')}`); });
