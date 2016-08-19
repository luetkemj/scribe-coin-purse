import should from 'should';
import * as coins from '../../src';

describe('copperValue', () => {
  it('should exist', () => {
    should.exist(coins.copperValue);
  });

  it('should work', () => {
    const expected = 200;
    const actual = coins.copperValue(2, 'GP');

    should(expected).equal(actual);
  });
});

describe('subUnits', () => {
  it('should exist', () => {
    should.exist(coins.subUnits);
  });

  it('should work', () => {
    const expected = {
      CP: 1,
      SP: 1,
      EP: 1,
      GP: 1,
      PP: 1,
    };
    const actual = coins.subUnits(1161);

    should(expected).deepEqual(actual);
  });
});
