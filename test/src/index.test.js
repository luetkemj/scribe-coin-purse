import should from 'should';
import * as coinPurse from '../../src';

describe('coinPurse', () => {
  it('should have the correct number of exports', () => {
    should(Object.keys(coinPurse.default).length).equal(5);
  });

  it('coinPurse.copperValue should exist', () => {
    should.exist(coinPurse.copperValue);
  });

  it('coinPurse.parser should exist', () => {
    should.exist(coinPurse.parser);
  });

  it('coinPurse.subUnits should exist', () => {
    should.exist(coinPurse.subUnits);
  });

  it('coinPurse.values should exist', () => {
    should.exist(coinPurse.values);
  });
});
