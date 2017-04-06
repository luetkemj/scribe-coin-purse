import should from 'should';
import parser from '../../src/parser';

describe('parser', () => {
  it('should exist', () => {
    should.exist(parser);
  });

  it('should work', () => {
    const expected = [
      { match: '1cp', value: '1', denomination: 'CP' },
      { match: '12SP', value: '12', denomination: 'SP' },
      { match: '123ep', value: '123', denomination: 'EP' },
      { match: '1234GP', value: '1234', denomination: 'GP' },
      { match: '12345PP', value: '12345', denomination: 'PP' },
    ];
    const actual = parser('1cp 12SP 123ep 1234GP 12345PP');

    should(expected).deepEqual(actual);
  });
});