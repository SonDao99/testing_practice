function analyzeArray(array) {
    let arrayLength = array.length;
    let arrayAverage = returnArrayAverage(array);
    let arrayMin = returnMinValue(array);
    let arrayMax = returnMaxValue(array);

    return {
        average: arrayAverage, 
        min: arrayMin, 
        max: arrayMax, 
        length: arrayLength
    };
}

function returnArrayAverage(array) {
    return (array.reduce((result,value) => result+value))/array.length;
}

function returnMinValue(array) {
    return (array.sort((a,b) => {a-b}))[0];
}

function returnMaxValue(array) {
    return (array.sort((a,b) => {b-a}))[0];
}


module.exports = analyzeArray;