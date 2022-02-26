const calculator = {
    add : (x,y) => x+y,

    subtract : (x,y) => x-y,

    multiply : (x,y) => x*y,

    divide : (x,y) => (y === 0 ? "Can't divide by 0" : x/y),
}


module.exports = calculator;