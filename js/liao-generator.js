let fib = {
    a:0,
    b:1,
    max:5,
    n:0,
    next: function () {
        let r = this.a;
        let t = this.b+this.a;
        this.a = this.b;
        this.b = t;
        if (this.n<this.max){
            this.n++;
            return r
        }else {
            return undefined
        }
    }
};

console.log(fib.next());

function* next_id() {
    let x=1;
    while (true){
    yield x++;
    }
}

