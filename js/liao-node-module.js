function load(exports, module){
    function hello(name){
        console.log(`hello ${name}`)}

    function bye(name){
        console.log(`bye ${name}`)}

    exports.hello = hello;
    exports.bye = bye;
    console.log(`exports: ${exports}`);
    console.log(`module.exports: ${module.exports}`);
    return module.exports}

function load2(exports, module){
    function hello(name){
        console.log(`hello ${name}`)}

    function bye(name){
        console.log(`bye ${name}`)}

    exports = {hello:hello,
        bye:bye};
    console.log(`exports: ${exports}`);
    console.log(`module.exports: ${module.exports}`);
    return module.exports}

let module1 = {id:'m1',exports:{}};

let ex1 = load(module1.exports, module1);

console.log(ex1.bye);

let module2 = {id:'m2', exports: {}};

let ex2 = load2(module2.exports, module2);

console.log(ex2.bye);