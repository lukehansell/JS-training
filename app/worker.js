var expect = require('chai').expect

self.addEventListener('message', event => {
  try {
    eval(event.data.code)
    eval(event.data.test.test)

    self.postMessage({
      index: event.data.index,
      code: event.data.code,
      result: {
        passing: true
      }
    })
  } catch (error) {
    self.postMessage({
      index: event.data.index,
      code: event.data.code,
      result: {
        error: error.message,
        passing: false
      }
    })
  }
}, false)
