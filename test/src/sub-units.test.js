import should from 'should';
import subUnits from '../../src/sub-units';

describe('subUnits', () => {
  it('should exist', () => {
    should.exist(subUnits);
  });

  it('should work', () => {
    const expected = {
      CP: 1,
      SP: 1,
      EP: 1,
      GP: 1,
      PP: 1,
    };
    const actual = subUnits(1161);

    should(expected).deepEqual(actual);
  });
});
