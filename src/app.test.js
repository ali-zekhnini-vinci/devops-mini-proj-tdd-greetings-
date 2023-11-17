const greet = require('./app')

test('should to be return Hello, Jean-Kevin', () => {
  const result = greet('Jean-Kevin')
  expect(result).toEqual('Hello, Jean-Kevin.')
})