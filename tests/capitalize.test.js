const capitalize = require("../code/capitalize");

test('single word', () => {
    expect(capitalize('car')).toBe('Car');
})

test('two words', () => {
    expect(capitalize('hello there')).toBe('Hello there');
})

test('number', () => {
    expect(capitalize('123')).toBe('123');
})