var FizzBuzz = require('../fizz-buzz');

describe('Fizz buzz', function() {
  var fizzBuzz = FizzBuzz();

  it('should return array of 100 elements', function() {
    expect(fizzBuzz.length).toEqual(100);
  });

  it('should have all multiples of 5 and 3 as FizzBuzz', function() {
    for(i=5*3; i <= 16; i+=5*3 ) {
      expect(fizzBuzz[i-1]).toMatch(/FizzBuzz/);
    }
  });

  it('should match fizz for index of multiple of 3', function(){
    for(i=3; i <= 6; i +=3){
      expect(fizzBuzz[i-1]).toMatch(/Fizz/);
    }
  })

  it('should match Buzz for index of multiple of 5', function(){
    for(i=5; i <= 10; i +=5){
      expect(fizzBuzz[i-1]).toMatch(/Buzz/);
    }
  })

  it('should contain integer for all other indexes', function(){
    expect(fizzBuzz[0]).toEqual(1);
    expect(fizzBuzz[1]).toEqual(2);
    expect(fizzBuzz[3]).toEqual(4);
  })
});
