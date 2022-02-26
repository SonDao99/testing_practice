function capitalize(string) {
    capitalizedString = string.slice(0,1).toUpperCase() + string.slice(1);
    return capitalizedString;
}

module.exports = capitalize;