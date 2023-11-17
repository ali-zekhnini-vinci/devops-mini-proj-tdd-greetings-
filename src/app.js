
function greet(name) {
    if (Array.isArray(name)) {
        const lowerNames = name.filter(n => n === n.toLowerCase());
        const upperNames = name.filter(n => n === n.toUpperCase());

        const greetLower = lowerNames.length > 0 ? `Hello, ${lowerNames.join(', ')}. ` : '';
        const greetUpper = upperNames.length > 0 ? `HELLO, ${upperNames.join(', ')}!` : '';

        return greetLower + greetUpper;
    }

    if (!name || typeof name !== 'string') {
        return 'Hello, my friend.';
    }

    return name.toUpperCase() === name ? `HELLO, ${name}!` : `Hello, ${name}.`;
}

module.exports = greet