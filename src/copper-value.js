import * as _ from 'lodash';
import parser from './parser';
import { DENOMINATIONS } from './_constants';

export default function copperValue(exp) {
  const parsedCoins = parser(exp);
  let coppers = 0;

  _.each(parsedCoins, (coin) => {
    coppers += (coin.value * DENOMINATIONS[coin.denomination].copperValue);
  });

  return coppers;
}
