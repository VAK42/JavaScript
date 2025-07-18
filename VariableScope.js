'use strict'

{
  let a = 'VAK';
  console.log(a);  // VAK
}

{
  let b = 'K42';
  console.log(b);  // K42
}

try {
  console.log(a);
} catch (error) {
  console.log(error.message);  // Undefined
}

let d = function (e, f) {
  function g() {
    return e + f;
  }
  console.log('VAK' + g());    // VAKJS42JS
  console.log('K42' + g());    // K42JS42JS
};
d('JS42', 'JS');
