import _ from 'lodash';
import { DENOMINATIONS } from './_constants';
import copperValue from './copper-value';

export default function total(array, { denominations = DENOMINATIONS } = {}) {
  let sum = 0;
  _.each(array, (exp) => {
    sum += copperValue(exp, { denominations });
  });

  return sum;
}
