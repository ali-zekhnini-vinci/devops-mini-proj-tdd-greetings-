

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
        const result = greet(['Bob', 'Tom'])
        expect(result).toEqual('Hello, Bob and Tom.')
    })