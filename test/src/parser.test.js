import should from 'should';
import { parser } from '../../src';

describe('parser', () => {
  it('should exist', () => {
    should.exist(parser);
  });

  it('should work', () => {
    const expected = [
      { match: '-27cp', value: '-27', denomination: 'CP' },
      { match: '16Sc', value: '16', denomination: 'SC' },
      { match: '12gN', value: '12', denomination: 'GN' },
      { match: '1cp', value: '1', denomination: 'CP' },
      { match: '12SP', value: '12', denomination: 'SP' },
      { match: '123ep', value: '123', denomination: 'EP' },
      { match: '1234GP', value: '1234', denomination: 'GP' },
      { match: '12345PP', value: '12345', denomination: 'PP' },
    ];
    const actual = parser('-27cp, 16Sc 12gN 1cp 12SP 123ep 1234GP 12345PP');

    should(expected).deepEqual(actual);
  });
});
