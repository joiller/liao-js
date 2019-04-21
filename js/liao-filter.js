function get_primes(arr) {
    return arr.filter(function(x){
        if (x>=2){
            for (let i=2; i<=x/2;i++){
                if (x%i===0){
                    return false
                }
            }
            return true
        }
    })
}

console.log(get_primes([1,2,3,4,65,67,8,89]));