class Calculator {

    /**
     * @param {number} value
     */
    constructor(value) {
        this.value = value
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
		this.value += value
		return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
		this.value -= value
		return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
		this.value *= value
		return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
		if(value === 0) {
			return "Division by zero is not allowed"
		}

		this.value = this.value / value
		return this
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
		this.value = this.value ** value
		return this
    }

    /**
     * @return {number}
     */
    getResult() {
		return this.value
    }
}

// ["Calculator", "add", "subtract", "getResult"]
// [10, 5, 7]

console.log(new Calculator(10).add(5).subtract(7).getResult())
