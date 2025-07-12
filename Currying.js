'use strict';

// Ordinary Implementation
function a(b) {
  return function(c) {
    return function(d) {
      return b(c, d);
    };
  };
}

function e(f, g) {
  return f + g;
}

let h = a(e);
console.log(h(4)(2));  // 6

// Lodash Implementation
function i(j, k) {
  return j + k;
}

let l = _.curry(i);
console.log(l(4, 2));  // 6
console.log(l(4)(2));  // 6
