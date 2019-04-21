function normalize(arr) {
    return arr.map(
        function(wd){
            wd=wd.split('');
            wd[0]=wd[0].toUpperCase();
            let nw = wd.slice(1).map(function(tol){return tol.toLowerCase()});
            return wd[0]+nw.join('')
        })}

console.log(normalize(['asdf','weEF']));


let arr = ['1','1','1','1'];
let  r;
r = arr.map(parseInt);
console.log(r);
console.log(parseInt('2'));
console.log(parseInt('1',1));
