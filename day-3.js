var compose = function(functions) {
    return function(x) {
		let a = x;
		for(let i = functions.length - 1; i >= 0; i--){
			a = functions[i](a)
		}
		return a
    }
};


 const fn = compose([x => x + 1, x => x * 2, x => x + 2]);

// console.log(fn(4))

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

// console.log(argumentsLength(1, [2], 4))


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    return function(...args){
		let a;
		if(fn){
			a = fn(...args);
		}
		fn = undefined
		return a
    }
};



let ofn = (a,b,c) => (a + b + c)
let onceFn = once(ofn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

