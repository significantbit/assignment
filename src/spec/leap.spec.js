var Year = require('../leap');

describe('Leap year', function() {

  it('is not very common', function() {
    var year = new Year(2015);
    expect(year.isLeap()).toBe(false);
  });

  it('is introduced every 4 years to adjust about a day', function() {
    var year = new Year(2016);
    expect(year.isLeap()).toBe(true);
  });

  it('is skipped every 100 years to remove an extra day', function() {
    var year = new Year(1900);
    expect(year.isLeap()).toBe(false);
  });

  it('is reintroduced every 400 years to adjust another day', function() {
    var year = new Year(2000);
    expect(year.isLeap()).toBe(true);
  });

});
