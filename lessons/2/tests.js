module.exports = [{
  name: 'Define an object called person',
  test: "expect(person).to.be.a('object')"
}, {
  name: 'Add an attribute of name and assign it a value',
  test: "expect(person).to.have.ownProperty('name'); expect(person.name).to.be.a('string')"
}]
