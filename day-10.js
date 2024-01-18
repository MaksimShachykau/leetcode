/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */

var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        // We know the resulting array will be the same length as functions
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
            .then(val => {
                results[i] = val;
                count++;
                if(count === functions.length) resolve(results);
            })
            .catch(reason => reject(reason));
        });
    });
};

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
	() => new Promise(resolve => setTimeout(() => resolve(10), 150)),
	() => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

const promise = promiseAll(functions)
promise.then(console.log); // [4, 10, 16]

// promise.then(e => {
// 	console.log('FFF', e)
// })
