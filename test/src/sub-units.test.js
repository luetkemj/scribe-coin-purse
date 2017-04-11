import should from 'should';
import { subUnits } from '../../src';

const denominations = [
  {
    name: 'copper',
    abrv: 'PP',
    copperValue: 1,
  },
  {
    name: 'silver',
    abrv: 'PG',
    copperValue: 100,
  },
  {
    name: 'electrum',
    abrv: 'PE',
    copperValue: 500,
  },
  {
    name: 'gold',
    abrv: 'PS',
    copperValue: 1000,
  },
  {
    name: 'platinum',
    abrv: 'PC',
    copperValue: 10000,
  },
];

describe('subUnits', () => {
  it('should exist', () => {
    should.exist(subUnits);
  });

  it('should work when coppers is more than 0', () => {
    const expected = {
      CP: 0,
      SP: 0,
      EP: 0,
      GP: 0,
      PP: 0,
    };
    const actual = subUnits(0);
    should(expected).deepEqual(actual);
  });
  describe('with custom coinage', () => {
    it('should work', () => {
      should({ PC: 0, PS: 0, PE: 0, PG: 0, PP: 0 })
      .deepEqual(subUnits(0, { denominations }));
    });
  });

  it('should work when coppers is 0', () => {
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

  describe('with custom coinage', () => {
    it('should work', () => {
      should({ PC: 1, PS: 1, PE: 1, PG: 1, PP: 1 })
      .deepEqual(subUnits(11601, { denominations }));
    });
  });

  it('should work when coppers are negative', () => {
    const expected = {
      CP: -1,
      SP: -1,
      EP: -1,
      GP: -1,
      PP: -1,
    };
    const actual = subUnits(-1161);
    should(expected).deepEqual(actual);
  });

  describe('with custom coinage', () => {
    it('should work', () => {
      should({ PC: -1, PS: -1, PE: -1, PG: -1, PP: -1 })
      .deepEqual(subUnits(-11601, { denominations }));
    });
  });
});
