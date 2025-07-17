'use strict'

// Async
async function a() {
  return 1;
}
a().then(b => { console.log(b); });

async function c() {
  return Promise.resolve(1);
}
c().then(d => { console.log(d); });

// Await
async function e() {
  let f = new Promise((g, h) => { setTimeout(() => g('i'), 1000); });
  let j = await f;
  console.log(j);
}
e();

function k() {
  let l = Promise.resolve(1);
  // let m = await l;  // Error
}
// k();  // Error

// Anonymous Async
(async () => {
  let B0 = await fetch('https://jsonplaceholder.typicode.com/posts');
  let C0 = await B0.json();
  console.log(C0);
})();

// Thenable
class D0 {
  constructor(E0) {
    this.F0 = E0;
  }
  then(G0, H0) {
    console.log(G0);
    setTimeout(() => G0(this.F0 * 2), 1000);
  }
}

async function I0() {
  let J0 = await new D0(1);
  console.log(J0);
}
I0();

// Class
class K0 {
  async L0() {
    return await Promise.resolve(1);
  }
}
new K0()
  .L0()
  .then(M0 => { console.log(M0); });
