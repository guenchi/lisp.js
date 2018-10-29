
'use strict'

const {cons, car, cdr, caar, cadr, cdar, cddr, setcar, setcdr} = require('./list');

const ref = (l, x) =>{
    if(l){
        if(caar(l) === x){
            return cdar(l);
        }else{
            return ref(cdr(l), x);
        }
    }else{
        return false;
    }
}


const val = (l, x) =>{
    if(l){
        if(cdar(l) === x){
            return caar(l);
        }else{
            return val(cdr(l), x);
        }
    }else{
        return false;
    }
}


const alter = (l, x, y) =>{
    if(car(l)){
        if(caar(l) === x){
            setcar(l, cons(x, y));
        }else{
            if(cdar(l)){
                alter(cdr(l), x, y);
            }else{
                return false;
            }
        }
    }else{
        return false;
    }
}

const push = (l, x, y) =>{
    if(cdr(l) !== null){
        setcdr(l, cons(car(l), cdr(l)));
    }
    setcar(l, cons(x, y));
}

const pop = l =>{
    const x = car(l);
    if(cdr(l)){
        setcar(l, cadr(l));
        setcdr(l, cddr(l));
    }else{
        setcar(l, null);
    }
    return x;
}

exports.ref = ref;
exports.val = val;
exports.alter = alter;
exports.push = push;
exports.pop = pop;