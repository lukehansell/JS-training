module.exports = [{
  name: 'Make `var a` be 42 as a string',
  test: "expect(a).to.equal('42')"
}, {
  name: 'Make `var b` be 42 as a number',
  test: "expect(b).to.equal(42)"
}, {
  name: 'Make `var c` a boolean value',
  test: "expect(c).to.be.a('boolean')"
}, {
  name: 'Make `var d` null',
  test: "expect(d).to.be.a('null')"
}, {
  name: 'Make `var e` an object',
  test: "expect(e).to.be.an('object')"
}, {
  name: 'Create an undefined variable called `f`',
  test: "expect(f).to.be.a('undefined')"
}]
