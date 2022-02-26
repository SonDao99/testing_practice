const analyzeArray = require('../code/analyzeArray');

test('one number', () => {
    expect(analyzeArray([6])).toEqual({
        average:6, 
        min:6, 
        max:6, 
        length:1
    });
})

test('two numbers', () => {
    expect(analyzeArray([2,4])).toEqual({
        average:3, 
        min:2, 
        max:4, 
        length:2
    });
})

test('odin example', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average:4, 
        min:1, 
        max:8, 
        length:6
    });
})