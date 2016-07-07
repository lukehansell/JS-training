var chai = require('chai')
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
chai.use(sinonChai)
var expect = chai.expect

self.addEventListener('message', event => {
  try {

    var log = []
    var oldLog = console.log;
    console.log = function(message) {
      log.push(JSON.stringify(message));
      oldLog.apply(console, arguments);
    }

    code = `
      ${event.data.test.before || ''};
      ${event.data.code};
      ${event.data.test.test}
    `

    eval(code);

    self.postMessage({
      index: event.data.index,
      code: event.data.code,
      result: {
        passing: true
      },
      log: log
    })
  } catch (error) {
    self.postMessage({
      index: event.data.index,
      code: event.data.code,
      result: {
        error: error.message,
        passing: false
      },
      log: log
    })
  }
}, false)
