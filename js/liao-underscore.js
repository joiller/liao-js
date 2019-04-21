let arr = [1,2,[3,4],[5,6,[7,8,[9,10,[11]]]]];
console.log(_.flatten(arr));

let a1 = ['name','age','sex','email'];
let a2 = ['jhl','21','male'];
let a = _.zip(a1,a2);
console.log(a);
console.log(_.unzip(a));

let b = _.object(a1,a2);
console.log(b);

let s = '  HELLO  ';
let fn = _.bind(s.trim,s);
console.log(fn);
console.log(fn.call(s));

var log = _.bind(console.log, console);
_.delay(log, 2000, 'Hello,', 'world!');
// 2秒后打印'Hello, world!':

let Student = function(name){
    this.name = name;
    this.say = function(){
        console.log(`im ${this.name}`)}
};
let s1 = new Student('jhl');
Student.prototype.age = 18;
console.log(s1.age);
console.log(_.allKeys(s1));
