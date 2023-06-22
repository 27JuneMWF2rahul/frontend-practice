// Implementing Memoization in JavaScrip
// Memoization is an optimization technique that can be used to reduce time-consuming calculation by saving previous input to something called cache and returning the result form it.

let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
const memoize = (fun) => {
    let cache = {

    }
    return function (...args) {
        let n = args[0];
        if (n in cache) {
            console.log("cache")
            console.log(cache)
          return cache[n];
        }
        else{
            console.log("calculating first time")
          let result =  fun(n);
          cache[n]=result;
          return result;
        }
    }
}

const efficient = memoize(calc)

console.log(efficient())
console.time();
console.log(calc(5));
console.timeEnd();
