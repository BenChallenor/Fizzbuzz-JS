function FizzBuzz() {
}
FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}


var fizzBuzz = new FizzBuzz();

for (var x = 1; x <= 100; x++) {
  console.log(fizzBuzz.play(x));
}
