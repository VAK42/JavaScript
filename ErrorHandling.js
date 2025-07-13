'use strict';

function a(b) {
  try {
    if (typeof b !== 'string') {
      throw new TypeError('TypeError');
    }
    if (b.trim() === '') {
      throw new SyntaxError('SyntaxError');
    }
    if (b === 'x') {
      throw new ReferenceError('ReferenceError');
    }
    console.log('JS');
  } catch (c) {
    if (c instanceof TypeError) console.log(c.message);
    else if (c instanceof SyntaxError) console.log(c.message);
    else if (c instanceof ReferenceError) console.log(c.message);
    else throw c;
  } finally {
    console.log('42');
  }
}

a(482);  // TypeError → 42
a(' ');  // SyntaxError → 42
a('x');  // ReferenceError → 42
a('K');  // JS → 42
