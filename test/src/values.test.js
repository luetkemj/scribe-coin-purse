import should from 'should';
import values from '../../src/values';

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

describe('values', () => {
  it('should exist', () => {
    should.exist(values);
  });

  it('should work', () => {
    should({
      CP: 1161,
      SP: 116,
      EP: 23,
      GP: 11,
      PP: 1,
    }).deepEqual(values(1161));
  });

  it('should work with custom coinage', () => {
    should({
      PP: 11601,
      PG: 116,
      PE: 23,
      PS: 11,
      PC: 1,
    }).deepEqual(values(11601, { denominations }));
  });
});
