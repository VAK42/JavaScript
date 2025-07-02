'use strict';

let a = 4, b = 2;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

if (a > 20) {
  console.log(a);
} else if (a > 15) {
  console.log(b);
} else {
  console.log(0);
}

a > b ? console.log(a) : console.log(b);
a > 20 ? console.log(a) : a > 15 ? console.log(b) : console.log(0);
