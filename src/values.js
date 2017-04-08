import * as _ from 'lodash';
import { DENOMINATIONS } from './_constants';
import { keyDenominations } from './lib/denominations';

export default function values(copperValue, { denominations = DENOMINATIONS } = {}) {
  const vals = {};
  const keyedDenominations = keyDenominations(denominations);

  _.each(Object.keys(keyedDenominations), (d) => {
    vals[d] = Math.floor(copperValue / keyedDenominations[d].copperValue);
  });

  return vals;
}
