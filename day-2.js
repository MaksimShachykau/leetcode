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
// console.log(counter.decrement())
console.log(counter.decrement()) // 4
console.log(counter.decrement()) // 3
console.log(counter.increment()) // 4
console.log(counter.reset())	// 5
console.log(counter.increment()) // 6
console.log(counter.increment()) // 7
console.log(counter.decrement()) // 6
console.log(counter.reset())	// 5
