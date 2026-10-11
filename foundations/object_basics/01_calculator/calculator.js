const add = function(num1, num2) {
  return num1 + num2
};

console.log(add(2, 6));

const subtract = function(num1, num2) {
  return num1 - num2
};

console.log(subtract(10, 4));

const sum = function(lista) {
  return lista.reduce((total, current) => total + current, 0);
};

console.log([7])

const multiply = function(array) {
  return array.reduce((product, current) => product * current)

};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  const total = 1;
	for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
