module.exports = [{
  name: 'Define `people` as an array',
  test: "expect(people).to.be.a('array')"
}, {
  name: 'Add three objects with the names Jimmy, Bob and Bill',
  test: "expect(people).to.deep.equal([{ name: 'Jimmy'}, { name: 'Bob' }, { name: 'Bill'}])"
}]
