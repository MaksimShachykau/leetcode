/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
	let timer
    return function(...args) {
		clearTimeout(timer)

		timer = setTimeout(() => {
			fn(...args)
		}, t)
    }
};

const log = debounce(console.log, 50)

// const start = performance.now()

setTimeout(() => {
	// const diff = Math.floor(performance.now() - start);
	log('hello world 1')
}, 50)

setTimeout(() => {
	// const diff = Math.floor(performance.now() - start);
	log('hello world 2')
}, 75)

setTimeout(() => {
	// const diff = Math.floor(performance.now() - start);
	log('hello world 3')
}, 230)
