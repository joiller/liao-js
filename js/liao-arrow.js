let xiaoming = {
    birth: 1997,
    getAge: function (year) {
        let birth = this.birth;
        let age;
        age = y => y-this.birth;
        let name = function () {
            console.log(this)
        };
        name();
        return age(year)
    }
};

console.log(xiaoming.getAge(2019));
