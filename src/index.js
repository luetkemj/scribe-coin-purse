import * as _ from 'lodash';

const coins = ['CP', 'SP', 'EP', 'GP', 'PP'];

const denominations = {
  CP: {
    name: 'copper',
    abrv: 'CP',
    copperValue: 1,
  },
  SP: {
    name: 'silver',
    abrv: 'SP',
    copperValue: 10,
  },
  EP: {
    name: 'electrum',
    abrv: 'EP',
    copperValue: 50,
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

export function copperValue(amount, denomination) {
  const coppers = amount * denominations[denomination].copperValue;

  return coppers;
}

export function subUnits(coppers) {
  let change = coppers;

  // build an empty purse object.
  const values = _.times(coins.length, _.constant(0));
  const purse = _.zipObject(coins, values);

  // start cursor at the most valuable coin in coins
  let cursor = (coins.length - 1);
  let coin;

  do {
    // get coin at cursor
    coin = coins[cursor];

    // get number of whole subUnits in change
    const subUnit = change / denominations[coin].copperValue;

    // fill purse
    purse[coin] = Math.floor(subUnit);

    // count remaining change
    change %= denominations[coin].copperValue;

    // move cursor to next denomination
    cursor--;
  } while (cursor > -1);

  return purse;
}

/*
 * TODO: parse() parse coin phrase for use in functions ex:'12CP 2GP' => {CP: 12, GP: 2}
 *
 * TODO: Add different coinage together for a total in copperValue func
 *
 * TODO: Add dnd coins as defaults that can be overridden so this could work in any economy.
 */
