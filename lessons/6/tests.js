module.exports = [{
  name: 'call the function sayHello with your name as an argument',
  test: `
    expect(sayHello).to.have.been.calledWith(sinon.match.string)
  `,
  before: `
    var sayHello = function(name) {
      console.log('Hello ' + name);
    };
    sayHello = sinon.spy(sayHello);
  `
}]
