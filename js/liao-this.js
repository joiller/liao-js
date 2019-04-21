let count = 0;
let old_Number = parseInt;
window.parseInt = function () {
    console.log(this);
    return old_Number.apply(null, arguments)
};

let second_Number = parseInt;

window.parseInt = function () {
    count ++;
    return second_Number.apply(null,arguments)
};

parseInt('10');
parseInt('20');
console.log(count);