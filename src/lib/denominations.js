import _ from 'lodash';

export function keyDenominations(denominations) {
  return _.keyBy(denominations, 'abrv');
}

export function getCoins(denominations) {
  return _.chain(denominations)
          .orderBy(['copperValue'])
          .map(d => d.abrv)
          .value();
}
