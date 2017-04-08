import * as _ from 'lodash';
import parser from './parser';
import { DENOMINATIONS } from './_constants';
import { keyDenominations } from './lib/denominations';

export default function copperValue(exp, { denominations = DENOMINATIONS } = {}) {
  const keyedDenominations = keyDenominations(denominations);
  const parsedCoins = parser(exp);
  let coppers = 0;

  _.each(parsedCoins, (coin) => {
    coppers += (coin.value * keyedDenominations[coin.denomination].copperValue);
  });

  return coppers;
}
