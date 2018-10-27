
'use strict'

exports.cons = (x, y) => m => m(x, y);

exports.car = (m) => m((x, y) => x);

exports.cdr = (m) => m((x, y) => y);