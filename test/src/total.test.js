import should from 'should';
import total from '../../src/total';

const denominations = [
  {
    name: 'copper',
    abrv: 'DP',
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

describe('total', () => {
  it('should exist', () => {
    should.exist(total);
  });

  it('should work', () => {
    should(-1).deepEqual(total(['1CP', '-2CP']));
    should(99).deepEqual(total(['1EP', '1EP', '-1CP']));
    should(101).deepEqual(total(['1EP 1EP', '1CP']));
  });

  it('should work with custom denominations', () => {
    should(-1).deepEqual(total(['1DP', '-2DP'], { denominations }));
    should(199).deepEqual(total(['1PG', '1PG', '-1DP'], { denominations }));
    should(201).deepEqual(total(['1PG 1PG', '1DP'], { denominations }));
  });
});
