const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        return true
    } else { 
        return false
    }
};

console.log(leapYears(700)); // is a leap year: returns true

// Do not edit below this line
module.exports = leapYears;
