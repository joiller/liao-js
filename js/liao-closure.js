let one = function (f) {
    return function (x) {
        return f(x)
    }
};

one(function (xx) {
    console.log(xx)
})('one');

function add(m,n) {
    return function (f) {
        return function (x) {
            m(f)(x);
            (n(f)(x))
        }
    }
}

let two = add(one, one);
(two(function (x) {
    console.log(x)
})('fefefe'));

let three = add(two, one);
three(function (x) {
    console.log(x)
})('aaa');

