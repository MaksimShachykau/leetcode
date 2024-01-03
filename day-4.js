/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
	let tempArgs = new Map()
    return function(...args) {
		let a = args.toString()
		if(!tempArgs.has(a)) {
			tempArgs.set(a, fn(...args))
		}
		return tempArgs.get(a)
    }
}



 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
 })

//  const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));

//  console.log(memoizedFn(2, 2))
//  console.log(memoizedFn(2, 2)) // 5
//  console.log(memoizedFn(2, 3)) // 5
//  console.log(callCount) // 1


/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
	return new Promise(res => {
		setTimeout(res, millis)
	})
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
