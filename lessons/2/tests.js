module.exports = [{
  name: 'Define an object called person',
  test: "expect(person).to.be.a('object')"
}, {
  name: 'Add an attribute of name and set it to "Jimmy"',
  test: "expect(person.name).to.equal('Jimmy')"
}]
