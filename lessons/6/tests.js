module.exports = [{
  name: 'If only given one value it returns that one',
  test: 'expect(biggest(1)).to.equal(1)'
}, {
  name: 'When two arguments are provided it returns the largest',
  test: 'expect(biggest(12, 17)).to.equal(17)'
}, {
  name: 'When more than two arguments are provided it returns the largest',
  test: 'expect(biggest(34, 2, 42, 75)).to.equal(75)'
}, {
  name: 'When the same value is presented as largest it returns that',
  test: 'expect(biggest(1, 4, 4)).to.equal(4)'
}, {
  name: 'It can handle negative numbers',
  test: 'expect(biggest(-1, -53)).to.equal(-1)'
}]
