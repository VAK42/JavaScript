'use strict'

let a = function (x, n) {
  let b = 1;
  for (let c = 0; c < n; c++) {
    b *= x;
  }
  return b;
};
console.log(a(2, 4));  // 16

let d = function (x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * d(x, n - 1);
  }
};
console.log(d(2, 4));  // 16

let e = function (n) {
  if (n <= 1) {
    return n;
  }
  return n + e(n - 1);
};
console.log(e(5));     // 15
