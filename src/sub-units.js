import * as _ from 'lodash';
import { getCoins, keyDenominations } from './lib/denominations';
import { DENOMINATIONS } from './_constants';

export default function subUnits(coppers, { denominations = DENOMINATIONS } = {}) {
  const keyedDenominations = keyDenominations(denominations);
  const coins = getCoins(keyedDenominations);
  const purse = _.zipObject(coins, Array(coins.length).fill(0));

  // if coppers is equal to 0, return an empty purse
  if (coppers === 0) {
    return purse;
  }

  let change = Math.abs(coppers);

  // start cursor at the most valuable coin in coins
  let cursor = coins.length - 1;
  let coin;

  while (cursor > -1) {
    // get coin at cursor
    coin = coins[cursor];

    // get number of whole subUnits in change
    const subUnit = change / keyedDenominations[coin].copperValue;

    // fill purse
    purse[coin] = (coppers < 0) ? Math.ceil(subUnit * -1) : purse[coin] = Math.floor(subUnit);

    // count remaining change
    change %= keyedDenominations[coin].copperValue;

    // move cursor to next denomination
    cursor -= 1;
  }

  return purse;
}
