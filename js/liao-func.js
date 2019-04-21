function foo(a,b,...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

foo(1,2,34,4,6,3,1)

function ar_of_circle(r,pi) {
    if (pi===undefined){
        pi=3.14
    }
    return r**2*pi
}

let a = ar_of_circle(2);
let b = ar_of_circle(2,3.1415926)
console.log(a,b)