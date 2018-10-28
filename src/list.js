
'use strict'

const cons = (x, y) => m => m(x, y);

const list = (...x) => {
    let lst = null;
    for(let i = x.length; i >= 0; i--){
        lst = cons(x[i], lst);
    }
    return lst;
}

const car = (m) => m((x, y) => x);

const cdr = (m) => m((x, y) => y);

const caar = x => car(car(x));

const cadr = x => car(cdr(x));

const cdar = x => cdr(car(x));

const cddr = x => cdr(cdr(x));

const caaar = x => car(car(car(x)));

const caadr = x => car(car(cdr(x)));

const caddr = x => car(cdr(cdr(x)));

const cdddr = x => cdr(cdr(cdr(x)));

const ref = (lst, k) => {
    if(lst === null){
        return false;
    }else{
        if(caar(lst) === k){
            return cdar(lst);
        }else{
            return ref(cdr(lst), k);
        }
    }
}


exports.cons = cons;
exports.car = car;
exports.cdr = cdr;
exports.list = list;
exports.ref = ref;
