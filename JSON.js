'use strict';

let a = {
  b: 'VAK',
  c: 42,
  d: false,
  e: ['JS', 'TS', 'PY'],
  f: null
};
let g = JSON.stringify(a);
console.log(typeof g);  // String
console.log(g);         // {"b":"VAK","c":42,"d":false,"e":["JS","TS","PY"],"f":null}

let h = ['K', 42, true, null, { i: 'K42' }];
let i = JSON.stringify(h);
console.log(typeof i);  // String
console.log(i);         // ["K",42,true,null,{"i":"K42"}]

console.log(JSON.stringify('VAK'));  // "VAK"
console.log(JSON.stringify(42));     // "42"
console.log(JSON.stringify(false));  // "false"
console.log(JSON.stringify(null));   // "null"

let j = {
  k() {
    console.log('VAK');
  },
  [Symbol('l')]: 428,
  m: undefined
};
console.log(JSON.stringify(j));  // {}

let n = {
  o: 'VAK',
  p: {
    q: 42,
    r: ['JS', '42']
  }
};
console.log(JSON.stringify(n));  // {"o":"VAK","p":{"q":42,"r":["JS","42"]}}

let o = {
  p: 42
};
let q = {
  r: "VAK42",
  s: [{ t: "K42" }, { t: "JS" }],
  u: o
};
o.v = q;
console.log(JSON.stringify(q, ['r', 's']));                 // {"r":"VAK42","s":[{},{}]}
console.log(JSON.stringify(q, ['r', 's', 'u', 't', 'p']));  // {"r":"VAK42","s":[{"t":"K42"},{"t":"JS"}],"u":{"p":42}}
console.log(JSON.stringify(q, function (w, x) {
  console.log(w);
  console.log(x);
  return w === 'v' ? undefined : x;
}));
/*
| Depth | w   | x                                 |
|-------|-----|-----------------------------------|
| 0     | ""  | <ref *1> {                        |
|       |     |   r: 'VAK42',                     |
|       |     |   s: [{ t: 'K42' }, { t: 'JS' }], |
|       |     |   u: {p: 42, v: [Circular *1]}    |
|       |     | }                                 |
| 1     | "r" | "VAK42"                           |
| 1     | "s" | [{ t: 'K42' }, { t: 'JS' }]       |
| 2     | "0" | {t: "K42"}                        |
| 3     | "t" | "K42"                             |
| 2     | "1" | {t: "JS"}                         |
| 3     | "t" | "JS"                              |
| 1     | "u" | {p: 42, v: [Circular *1]}         |
| 2     | "p" | 42                                |
| 2     | "v" | <ref *1> {                        |
|       |     |   r: 'VAK42',                     |
|       |     |   s: [{ t: 'K42' }, { t: 'JS' }], |
|       |     |   u: {p: 42, v: [Circular *1]}    |
|       |     | }                                 |
|-------|-----|-----------------------------------|
=> {"r":"VAK42","s":[{"t":"K42"},{"t":"JS"}],"u":{"p":42}}
*/

let y = {
  z: "VAK",
  A0: 24,
  B0: {
    C0: false,
    D0: true
  }
};
console.log(JSON.stringify(y, null, 2));
/*
{
  "z": "VAK",
  "A0": 24,
  "B0": {
    "C0": false,
    "D0": true
  }
}
*/

let z = {
  A0: 42,
  toJSON() {
    return this.A0;
  }
};
let B0 = {
  C0: 'JS',
  D0: z
};
console.log(JSON.stringify(z));   // 42
console.log(JSON.stringify(B0));  // {"C0":"JS","D0":42}

let E0 = '[2, 4, 6, 8]';
console.log(JSON.parse(E0));      // [2, 4, 6, 8]

let F0 = '{"G0": "VAK", "H0": 42, "I0": true, "J0": [9,8,4]}';
console.log(JSON.parse(F0));      // {G0: 'VAK', H0: 42, I0: true, J0: [ 9, 8, 4 ]}

let K0 = '{"L0":"K42","M0":"2025-08-10T10:30:00.000Z"}';
let N0 = JSON.parse(K0);
console.log(typeof N0.M0);        // String
console.log(N0.M0.getDate());     // Error
let P0 = JSON.parse(K0, function (Q0, R0) {
  if (Q0 === 'M0') return new Date(R0);
  return R0;
});
console.log(P0.M0.getDate());     // 10
