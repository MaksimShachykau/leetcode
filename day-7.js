var timeLimit = function(fn, t) {
  const asd = (...args) => {
    return new Promise(async (res, rej) => {
        const timer = setTimeout(() => rej('Time Limit Exceeded'), t)
        let result
        try {
          result = await fn(...args);
        } catch(e) {
          clearTimeout(timer)
          rej(e)
        }
        clearTimeout(timer)
        res(result)
      })
  }
  return async function(...args) {
      return await asd(...args)
  }
};

const fn = async (a, b) => { await new Promise(res => setTimeout(res, 100)); throw a + b; }

const t = 500

const limited = timeLimit(fn, t);

limited([2,2]).then(r => {
  console.log(r)
})

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
