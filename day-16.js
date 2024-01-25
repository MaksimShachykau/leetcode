/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
	this.value = nums
    return this
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
	let res = 0;
	this.value.forEach(e => res +=e)
	return res
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
	return `[${this.value}]`
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
// console.log('CCC', obj1)
// console.log('AAA', obj2)
// console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

