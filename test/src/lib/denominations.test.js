import should from 'should';
import * as denominationsLib from '../../../src/lib/denominations';

const DENOMINATIONS = [
  {
    name: 'copper',
    abrv: 'CP',
    copperValue: 1,
  },
  {
    name: 'electrum',
    abrv: 'EP',
    copperValue: 50,
  },
  {
    name: 'silver',
    abrv: 'SP',
    copperValue: 10,
  },
  {
    name: 'gold',
    abrv: 'GP',
    copperValue: 100,
  },
  {
    name: 'platinum',
    abrv: 'PP',
    copperValue: 1000,
  },
];

const KEYED_DENOMINATIONS = {
  CP: {
    name: 'copper',
    abrv: 'CP',
    copperValue: 1,
  },
  EP: {
    name: 'electrum',
    abrv: 'EP',
    copperValue: 50,
  },
  SP: {
    name: 'silver',
    abrv: 'SP',
    copperValue: 10,
  },
  GP: {
    name: 'gold',
    abrv: 'GP',
    copperValue: 100,
  },
  PP: {
    name: 'platinum',
    abrv: 'PP',
    copperValue: 1000,
  },
};

describe('denominations library', () => {
  it('should exist', () => {
    should.exist(denominationsLib);
  });

  describe('getCoins', () => {
    it('should work', () => {
      should(['CP', 'SP', 'EP', 'GP', 'PP']).deepEqual(denominationsLib.getCoins(DENOMINATIONS));
    });
  });

  describe('keyDenominations', () => {
    it('should work', () => {
      should(KEYED_DENOMINATIONS).deepEqual(denominationsLib.keyDenominations(DENOMINATIONS));
    });
  });
});
