const reverseString = require("../code/reverseString");

test('one word', () => {
    expect(reverseString('dog')).toBe('god');
})

test('two words', () => {
    expect(reverseString('fat cat')).toBe('tac taf');
})

test('empty space', () => {
    expect(reverseString('  dog')).toBe('god  ');
})