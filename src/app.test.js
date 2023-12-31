const greet = require('./app');

test('should to be return Hello, Bob', () => {
    const result = greet('Bob')
    expect(result).toEqual('Hello, Bob.')
}),

test('should to be return Hello, my friend when array is null', () => {
    const result = greet(null)
    expect(result).toEqual('Hello, my friend.')
}),

test('should to be return HELLO, BOB', () => {
    const result = greet('BOB')
    expect(result).toEqual('HELLO, BOB.')
}),

test('should to be return Hello, Bob and Tom', () => {
    const result = greet(['Bob', 'Tom', 'Amy'])
    expect(result).toEqual('Hello, Bob, Tom and Amy.')
}),

test('should to be return Hello, Bob and Amy. AND HELLO TOM.', () => {
    const result = greet(['Bob', 'TOM', 'Amy'])
    expect(result).toEqual('Hello, Bob and Amy. AND HELLO TOM.')
}),

test('should to be return,(Bonjour Bob et Tom.) when we have fr in array', () => {
    const result = greet(['Bob', 'Tom', 'fr'])
    expect(result).toEqual('Bonjour, Bob et Tom.')
})