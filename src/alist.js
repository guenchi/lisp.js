
'use strict'

const {cons, car, cdr, caar, cdar, cddr} = require('./list');

const ref = (l, x) => l ? caar(l) === x ? cdar(l) : ref(cdr(l), x) : false;

const val = (l, x) => l ? cdar(l) === x ? caar(l) : val(cdr(l), x) : false;



exports.ref = ref;
exports.val = val;