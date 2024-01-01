/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

// var promiseAll = function(functions = []) {
// 	let temp = {
// 		"resolved": []
// 	}

// 	functions.forEach(async (f) => {
// 		try {
// 			const resValue = await f();
// 			console.log(f.arguments())
// 			// f().then(res => {
// 			// 	temp["resolved"].push(res)
// 			// 	console.log(temp)
// 			// })
// 			// console.log(resValue)
// 			temp["resolved"].push(resValue)
// 		} catch(e) {
// 			console.log(e)
// 			temp["rejected"] = e;
// 			delete temp["resolved"];
// 		}
// 	})

// 	return {
// 		then: (func) => func(temp)
// 	}
// };

// const functions = [
// 	// () => new Promise(res => res(42)),
// 	// () => new Promise(res => res(23)),
// 	() => new Promise(resolve => setTimeout(() => resolve(1), 200)),
// 	// () => new Promise((resolve, reject) => reject("Error"))
// ];
// const promise = promiseAll(functions);

// promise.then(console.log)


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const resetValue = init;
    return {
        increment: () => {
			return ++init
		},
        reset: () => {
			init = resetValue
			return init
		},
        decrement: () => {
			return --init
		}
    }
};

const counter = createCounter(5);

// console.log(counter.decrement())
// console.log(counter.reset())


// returnedArray[i] = fn(arr[i], i).
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
	arr.forEach((e, i) => {
		arr[i] = fn(e, i)
	})

	return arr
};

const arr = [11, 2, 45]
const fn = function plusone(n) { return n + 1; }
const fn2 = function plusI(n, i) { return n + i; }
const fn3 = function constant() { return 42; }

// console.log(map(arr, fn2))

// Expected output: 10

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const temp = []

    arr.forEach((e, i) => {
      if(fn(e, i)) temp.push(e)
    })

    return temp
};

const ffn = function greaterThan10(n) { return n > 10; }
const ffn2 = function firstIndex(n, i) { return i === 0; }
const ffn3 = function plusOne(n) { return n + 1 }

const fArr = [-2, -1, 0, 2, 10, 20, 30]

// console.log(filter(fArr, ffn3))


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
	let acc = init;
	nums.forEach(e => {
		acc = fn(acc, e)
	})
    return acc
};

const rfn = function sum(accum, curr) { return accum + curr; }
const rfn2 = function sum(accum, curr) { return accum + curr * curr; }
const rfn3 = function sum(accum, curr) { return 0; }

const rArr = [1, 2, 3, 4]
console.log(reduce([], rfn3, 25))
