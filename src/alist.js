
'use strict'

const {cons, car, cdr, caar, cdar, cddr} = require('./list');

const ref = (l, k) => l ? caar(l) === k ? cdar(l) : ref(cdr(l), k) : false;

const val = (l, k) => l ? cdar(l) === k ? caar(l) : val(cdr(l), k) : false;

exports.ref = ref;
exports.val = val;