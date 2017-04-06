import * as _ from 'lodash';
import { COINS, DENOMINATIONS } from './_constants';

export default function subUnits(coppers) {
  let change = coppers;

  // build an empty purse object.
  const values = _.times(COINS.length, _.constant(0));
  const purse = _.zipObject(COINS, values);

  // start cursor at the most valuable coin in COINS
  let cursor = (COINS.length - 1);
  let coin;

  do {
    // get coin at cursor
    coin = COINS[cursor];

    // get number of whole subUnits in change
    const subUnit = change / DENOMINATIONS[coin].copperValue;

    // fill purse
    purse[coin] = Math.floor(subUnit);

    // count remaining change
    change %= DENOMINATIONS[coin].copperValue;

    // move cursor to next denomination
    cursor -= 1;
  } while (cursor > -1);

  return purse;
}
