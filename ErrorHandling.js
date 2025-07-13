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
    if (b === 'y') {
      throw new RangeError('RangeError');
    }
    if (b === 'z') {
      throw new EvalError('EvalError');
    }
    if (b === 'w') {
      throw new URIError('URIError');
    }
    console.log('JS');
  } catch (c) {
    if (c instanceof TypeError) console.log(c.message);
    else if (c instanceof SyntaxError) console.log(c.message);
    else if (c instanceof ReferenceError) console.log(c.message);
    else if (c instanceof RangeError) console.log(c.message);
    else if (c instanceof EvalError) console.log(c.message);
    else if (c instanceof URIError) console.log(c.message);
    else throw c;
  } finally {
    console.log('42');
  }
}

a(482);     // TypeError → 42
a(' ');     // SyntaxError → 42
a('x');     // ReferenceError → 42
a('y');     // RangeError → 42
a('z');     // EvalError → 42
a('w');     // URIError → 42
a('K');     // JS → 42
