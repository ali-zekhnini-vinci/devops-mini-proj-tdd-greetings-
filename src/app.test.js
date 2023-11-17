

const greet = require('./app')

test('should to be return Hello, Bob', () => {
    const result = greet('Bob')
    expect(result).toEqual('Hello, Bob.')
})

