/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
	const clearTimer = () => {
		clearTimeout(timer)
	}

	const timer = setTimeout(() => fn(...args), t)

	return clearTimer
};


const result = [];

const fn = (x) => x * 5;
const args = [2], t = 110, cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
	console.log('aaa5', start)
	const diff = Math.floor(performance.now() - start);
	// console.log('aaa6', performance.now())
	result.push({"time": diff, "returned": fn(...argsArr)});
}

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
	console.log('aaa7')
	console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)
