var FizzBuzz = require('../fizz-buzz');

describe('Fizz buzz', function() {
  var fizzBuzz = FizzBuzz();

  it('should return array of 100 elements', function() {
    expect(fizzBuzz.length).toEqual(100);
  });

  it('should have all multiples of 5 and 3 as FizzBuzz', function() {
    for(i=5*3; i <= 100; i+=5*3 ) {
      expect(fizzBuzz[i-1]).toMatch(/FizzBuzz/);
    }
  });

  it('should match fizz for index of multiple of 3', function(){
    for(i=3; i <= 100; i +=3){
      expect(fizzBuzz[i-1]).toMatch(/Fizz/);
    }
  })

  it('should match Buzz for index of multiple of 5', function(){
    for(i=5; i <= 100; i +=5){
      expect(fizzBuzz[i-1]).toMatch(/Buzz/);
    }
  })

  it('should contain integer for all other indexes', function(){
    var numbers = [];
    var three = [];
    var five = [];

    for(i=3; i<= 100; i += 3){
      three.push(i)
    }

    for(i=5; i<= 100; i += 5){
      five.push(i)
    }

    for(i=1; i<= 100; i++){
      if(three.indexOf(i) < 0 && five.indexOf(i) < 0) {
        expect(fizzBuzz[i-1]).toEqual(i);;
      }
    }
  })
});
