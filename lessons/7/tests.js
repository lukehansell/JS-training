module.exports = [{
  name: 'Call the sayName method on the person object',
  test: `expect(person.sayName).to.have.been.called`,
  before: `
    var person = {
      name: 'Geoff',
      sayName() {
        console.log('Hello my name is ' + this.name)
      }
    }

    sinon.spy(person, 'sayName')
  `
}]
