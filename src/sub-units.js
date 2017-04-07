import * as _ from 'lodash';
import { COINS, DENOMINATIONS } from './_constants';

export default function subUnits(coppers, { coins = COINS, denominations = DENOMINATIONS } = {}) {
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
    const subUnit = change / denominations[coin].copperValue;

    // fill purse
    purse[coin] = (coppers < 0) ? Math.ceil(subUnit * -1) : purse[coin] = Math.floor(subUnit);

    // count remaining change
    change %= denominations[coin].copperValue;

    // move cursor to next denomination
    cursor -= 1;
  }

  return purse;
}
