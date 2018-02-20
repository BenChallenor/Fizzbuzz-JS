var Fizzbuzz = function () {};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype._isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype._isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype._isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if (this._isDivisibleByFifteen(number)) {
    return "FizzBuzz"}
  else if (this._isDivisibleByFive(number)) {
    return "Buzz"}
  else if (this._isDivisibleByThree(number)) {
    return "Fizz"}
  else {
    return(number)}
};
