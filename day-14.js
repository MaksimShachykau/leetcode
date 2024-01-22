/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let tempArr = [];

	let count = n-1
	if(n === 0) {
		return arr
	}

	arr.forEach(e => {
		if(Array.isArray(e) && n > 0) {
			tempArr.push(...flat(e, count))
		} else {
			tempArr.push(e)
		}
	});

	return tempArr;
};

let arr = [[1,2],[3,[4,[5,[6]]],7],[8,[[9],10]]]

console.log(flat(arr, ))
