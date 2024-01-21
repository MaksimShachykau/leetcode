/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
	let arr = [...arr1, ...arr2];

	let temp = []
	arr.forEach(e => {
		temp[e.id] = temp[e.id] ? {...temp[e.id], ...e} : e
	})

	return temp.filter(e => e)
};


const join2 = (arr1, arr2) => {
    const idToObject = {};

    arr1.concat(arr2).forEach(item => {
        const id = item.id;
        idToObject[id] = idToObject[id] ? { ...idToObject[id], ...item } : item;
    });

    return Object.values(idToObject);
};

const a1 = [{"id":0,"t":8,"d":76,"v":91,"g":55}, {"id":2,"x":36,"d":26,"f":35}, {"id":4,"c":20,"z":75, "l": 22}]
const a2 = [{"id":0,"q":99,"e":29,"j":60,"d":79}, {"id":2,"o":48,"z":84,"y":61}, {"id":3,"o":48,"z":84,"y":61}, {"id":4,"o":48,"z":84,"y":61}]
console.log(join(a1, a2))

// [{"id":0,"t":8,"d":79,"v":91,"g":55,"q":99,"e":29,"j":60},{"id":2,"s":69,"n":49},{"id":2,"o":95,"d":95,"r":79,"i":40,"y":48},{"id":4,"m":14,"l":20,"y":97,"n":94,"a":43,"j":81,"c":9},{"id":4,"s":49,"g":63,"n":38,"w":67,"m":65,"h":17,"b":15,"r":65,"v":25,"k":28}]
// [{"id":0,"t":8,"d":79,"v":91,"g":55,"q":99,"e":29,"j":60},{"id":2,"s":69,"n":49,"o":95,"d":95,"r":79,"i":40,"y":48},{"id":4,"m":65,"l":20,"y":97,"n":38,"a":43,"j":81,"c":9,"s":49,"g":63,"w":67,"h":17,"b":15,"r":65,"v":25,"k":28}

// {"id":0,"t":8,"d":79,"v":91,"g":55,"q":99,"e":29,"j":60}
