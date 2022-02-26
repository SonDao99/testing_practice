const calculator = require("../code/calculator");

test('adding', () => {
    expect(calculator.add(23,7)).toBe(30);
});

test('subtracting', () => {
    expect(calculator.subtract(100,77)).toBe(23);
});

test('multiplying', () => {
    expect(calculator.multiply(11,7)).toBe(77);
});

test('dividing regular', () => {
    expect(calculator.divide(100,25)).toBe(4);
});

test('dividing zero', () => {
    expect(calculator.divide(100,0)).toBe("Can't divide by 0");
})