/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
	let temp = []
	let temp2 = []

	arr.forEach((e, i) => {
		temp2.push(e)

		if((i+1)%size === 0 || i+1 === arr.length) {
			temp.push(temp2)
			temp2 = []
		}
	})

	return temp
};

// let arr = [1,2,3,4,5,6,7,8]

// console.log(chunk(arr, 6))


Array.prototype.last = function() {
	return this[this.length-1]
};


const arr2 = [1, 2, 3];
arr2.last(); // 3

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
	let obj = {}
	this.forEach((e) => {
        let key = fn(e)
		if(obj[key]) {
			obj[key].push(e)
		} else {
			obj[key] = []
			obj[key].push(e)
		}
	})

	return obj
};

// const fn = function (n) {
//   return String(n > 5);
// }
// fn = function (list) {
//   return String(list[0]);
// }
// [1,2,3,4,5,6,7,8,9,10].groupBy((n) => String(n > 5)) // {"1":[1],"2":[2],"3":[3]}
// [[1, 2, 3], [1, 3, 5], [1, 5, 9]].groupBy((list) => String(list[0])) // {"1":[1, 2, 3], [1, 3, 5], [1, 5, 9]}

// [1,2,3,4,5,6,7,8,9,10].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
