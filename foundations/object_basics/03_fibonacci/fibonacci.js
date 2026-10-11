const fibonacci = function(count) {
    // checks argument's type and makes sure we use
    // a positive number throughout rest of function.
    if (typeof count !== 'number' || count <= 0 || Number.isNaN(count)) {
        return "OOPS";
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
