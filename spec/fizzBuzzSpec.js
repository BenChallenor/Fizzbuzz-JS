describe('Fizzbuzz', function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  // describe('knows when a number is', function() {
  //   it('divisable by 3', function() {
  //       expect(fizzbuzz._isDivisibleByThree(3)).toBe(true);
  //   });
  // });
  //
  //
  // describe('knows when a number is NOT', function() {
  //   it('divisable by 3', function() {
  //     expect(fizzbuzz._isDivisibleByThree(1)).toBe(false);
  //   });
  // });

  describe('when playing, says', function() {
    it('"Fizz" when a number is divisible by 3', function() {
    expect(fizzbuzz.play(3)).toEqual("Fizz");
    });
  });

  describe('when playing, says', function() {
    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });
  });

  describe('when playing, says', function() {
    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });
  });

  describe('when playing, says', function() {
    it('returns the number when not divisible by 3,5 or 15', function() {
      expect(fizzbuzz.play(2)).toEqual(2);
    });
  });

});
