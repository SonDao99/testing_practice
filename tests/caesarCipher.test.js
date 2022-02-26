const caesarCipher = require('../code/caesarCipher');

test('regular text', () => {
    expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('capital letters', () => {
    expect(caesarCipher('Defend the East Wall of the Castle')).toBe('Efgfoe uif Fbtu Xbmm pg uif Dbtumf');
});

test('punctuation', () => {
    expect(caesarCipher('defend the east, wall of the castle.')).toBe('efgfoe uif fbtu, xbmm pg uif dbtumf.');
})

test('alphabet', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
})