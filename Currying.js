'use strict';

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
