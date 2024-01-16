const TimeLimitedCache = function() {};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function(key, value, duration) {
	let timer = setTimeout(() => {
		delete TimeLimitedCache[key]
	}, duration)

	if(TimeLimitedCache[key]) {
		clearTimeout(TimeLimitedCache[key]?.timer)
		TimeLimitedCache[key] = {value, timer}
		return true
	}

    TimeLimitedCache[key] = {value, timer}

	return false
};


/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
	return TimeLimitedCache[key]?.value || -1
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
	return Object.keys(TimeLimitedCache).length
};

// ["TimeLimitedCache", "set", "set", "set", "get", "count"]
// [[], [1, 13, 50], [2, 14, 300], [1, 15, 100], [2], []]
// [0, 0, 0, 40, 800, 850]
// [null,false,false,true,-1,0]

// const timeLimitedCache = new TimeLimitedCache()
// console.log('A1', timeLimitedCache.set(1, 13, 50)) // false
// console.log('A2', timeLimitedCache.set(2, 14, 300)) // false

// setTimeout(() => {
// 	console.log('A3', timeLimitedCache.set(1, 15, 100)) // true
// }, 40)

// setTimeout(() => {
// 	console.log('A4', timeLimitedCache.get(2)) // -1
// }, 800)

// setTimeout(() => {
// 	console.log('A5', timeLimitedCache.count()) // 0
// }, 850)


// ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// [0, 0, 40, 50, 120, 200, 250]

// const timeLimitedCache2 = new TimeLimitedCache()
// console.log('A1', timeLimitedCache2.set(1, 42, 50)) // false

// setTimeout(() => {
// 	console.log('A2', timeLimitedCache2.set(1, 50, 100)) // true
// }, 40)

// setTimeout(() => {
// 	console.log('A3', timeLimitedCache2.get(1)) // 50
// }, 50)

// setTimeout(() => {
// 	console.log('A4', timeLimitedCache2.get(1)) // 50
// }, 120)

// setTimeout(() => {
// 	console.log('A5', timeLimitedCache2.get(1)) // -1
// }, 200)

// setTimeout(() => {
// 	console.log('A6', timeLimitedCache2.count()) // 0
// }, 250)
