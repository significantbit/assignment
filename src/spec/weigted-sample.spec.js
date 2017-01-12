var WeightedSample = require('../weighted-sample');
var R = require('ramda');

describe('Weighted Sample', function() {
  var sample = new WeightedSample();
  sample.add(4, 1);
  sample.add(1, 2);
  sample.add(1, 3);
  var sampleSize = 100000;

  var percentage = R.compose(
    R.multiply(100),
    R.divide(R.__, sampleSize));

  var fapply = function(f){
    return f.apply(sample);
  };
  var count = R.countBy(fapply)

  var weightedSampleDistribution = R.map(percentage,
    count(R.repeat(sample.sample, sampleSize)));

  it('should give ca 66% probability for 1', function() {
    expect(weightedSampleDistribution['1']).toBeLessThan(68);
    expect(weightedSampleDistribution['1']).toBeGreaterThan(65);
  });

  it('should give ca 17% probability for 2', function() {
    expect(weightedSampleDistribution['2']).toBeLessThan(18);
    expect(weightedSampleDistribution['2']).toBeGreaterThan(16);
  });

});
