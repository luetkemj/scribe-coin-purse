import should from 'should';
import copperValue from '../../src/copper-value';

describe('copperValue', () => {
  it('should exist', () => {
    should.exist(copperValue);
  });

  it('should find the correct copperValue of 2GP', () => {
    const expected = 200;
    const actual = copperValue('2GP');

    should(expected).equal(actual);
  });

  it('should find the correct copperValue of 1CP2SP3EP4GP5PP', () => {
    const expected = 5571;
    const actual = copperValue('1CP2SP3EP4GP5PP');

    should(expected).equal(actual);
  });

  it('should find the correct copperValue of 2gp1SP 3Ep32cP 1pp', () => {
    const expected = 1392;
    const actual = copperValue('2gp1SP 3Ep32cP 1pp');

    should(expected).equal(actual);
  });

  it('should find the correct copperValue in the phrase "This sword is worth 20gp"', () => {
    const expected = 2000;
    const actual = copperValue('This sword is worth 20gp');

    should(expected).equal(actual);
  });
});
