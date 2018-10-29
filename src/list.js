
'use strict'


const cons = (x, y) => [x, y];

const car = ([x, y]) => x;

const cdr = ([x, y]) => y;

const setcar = (m, x) => m[0] = x;

const setcdr = (m, x) => m[1] = x;

const caar = x => car(car(x));

const cadr = x => car(cdr(x));

const cdar = x => cdr(car(x));

const cddr = x => cdr(cdr(x));

const caaar = x => car(car(car(x)));

const caadr = x => car(car(cdr(x)));

const cadar = x => car(cdr(car(x)));

const cdaar = x => cdr(car(car(x)));

const caddr = x => car(cdr(cdr(x)));

const cddar = x => cdr(cdr(car(x)));

const cdddr = x => cdr(cdr(cdr(x)));

const cdadr = x => cdr(car(cdr(x)));

const caaaar = x => car(car(car(car(x))));

const caaadr = x => car(car(car(cdr(x))));

const caadar = x => car(car(cdr(car(x))));

const cadaar = x => car(cdr(car(car(x))));

const cdaaar = x => cdr(car(car(car(x))));

const caaddr = x => car(car(cdr(cdr(x))));

const caddar = x => car(cdr(cdr(car(x))));

const cddaar = x => cdr(cdr(car(car(x))));

const cadddr = x => car(cdr(cdr(cdr(x))));

const cdddar = x => cdr(cdr(cdr(car(x))));

const cddddr = x => cdr(cdr(cdr(cdr(x))));

const cdaddr = x => cdr(car(cdr(cdr(x))));

const cddadr = x => cdr(cdr(car(cdr(x))));

const cdaadr = x => cdr(car(car(cdr(x))));

const list = (...x) => {
    let l = null;
    for(let i = x.length - 1; i >= 0; i--){
        l = cons(x[i], l);
    }
    return l;
}



exports.cons = cons;
exports.car = car;
exports.cdr = cdr;
exports.setcar = setcar;
exports.setcdr = setcdr;
exports.caar = caar;
exports.cadr = cadr;
exports.cdar = cdar;
exports.cddr = cddr;
exports.caaar = caaar;
exports.caadr = caadr;
exports.cadar = cadar;
exports.cdaar = cdaar;
exports.caddr = caddr;
exports.cddar = cddar;
exports.cdddr = cdddr;
exports.cdadr = cdadr;
exports.caaaar = caaaar;
exports.caaadr = caaadr;
exports.caadar = caadar;
exports.cadaar = cadaar;
exports.cdaaar = cdaaar;
exports.caaddr = caaddr;
exports.caddar = caddar;
exports.cddaar = cddaar;
exports.cadddr = cadddr;
exports.cdddar = cdddar;
exports.cddddr = cddddr;
exports.cdaddr = cdaddr;
exports.cddadr = cddadr;
exports.cdaadr = cdaadr;
exports.list = list;
