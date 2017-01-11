var reverse = require('../recursive-reverse');

describe('Reverse', function() {

  it('should reverse strings', function() {
    string = 'significantbit'
    expect(reverse(string)).toEqual('tibtnacifingis');
  });

});
