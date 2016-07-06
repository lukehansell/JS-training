module.exports = [{
  name: 'square accepts a number and a callback and calls the callback with that number squared',
  test: `
    var cb = sinon.spy();
    square(3, cb);
    expect(cb).to.have.been.calledWith(9);
  `
}]
