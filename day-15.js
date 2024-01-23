/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
	let temp = obj;
	if(Array.isArray(obj)) {
		temp = obj.filter(e => e)
	}

	for(key in temp) {
		if(!temp[key]) {
			delete temp[key]
		}
		if(typeof temp[key] === 'object') {
			temp[key] = compactObject(temp[key])
		}
	}

	return temp
};

// const obj = [null, 0, 5, [0], [false, 16]];
// console.log(compactObject(obj))


class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const eventListener = { callback };
    this.events[eventName].push(eventListener);

    return {
      unsubscribe: () => {
        const index = this.events[eventName].indexOf(eventListener);
        if (index > -1) {
          this.events[eventName].splice(index, 1);
          return undefined;
        }
      }
    };
  }

  emit(eventName, args = []) {
    const eventListeners = this.events[eventName];
    if (!eventListeners) {
      return [];
    }

    return eventListeners.map((eventListener) => {
      return eventListener.callback(...args);
    });
  }
}
// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
// const b = emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// const c = emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]

// console.log(b)
// console.log(c)

// const emitter = new EventEmitter();
// emitter.emit("firstEvent"); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// const b = emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

// console.log(b)
// // console.log(c)

const emitter = new EventEmitter();

const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);

// console.log('AAA', sub1)
// console.log(sub2)

sub2.unsubscribe(); // undefined
// console.log('AAAA', sub1)
// console.log('AAAA', sub2)
const a = emitter.emit("firstEvent", [5]); // [7]

// console.log(a)
