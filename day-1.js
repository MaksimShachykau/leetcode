/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
		return n++
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (a) => {
            if(a !== val) throw new Error('Not Equal');
            return true
        },
        notToBe: (a) => {
            if(a === val) throw new Error('Equal')
            return true
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

const o = {}
expect(5).toBe(5)


// Given an object or array obj, return a compact object.
// A compact object is the same as the original object,
// except with keys containing falsy values removed.
// This operation applies to the object and any nested objects.
// Arrays are considered objects where the indices are keys.
// A value is considered falsy when Boolean(value) returns false.


/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
	for(key in obj){
		if(!obj[key]) delete obj[key]
		if(typeof obj[key] === 'object'){
			if(Array.isArray(obj[key]))obj[key] = obj[key].filter(e => e)
			compactObject(obj[key])
		}
	}

	if(Array.isArray(obj)) obj = obj.filter(e => e)

	return obj
};
