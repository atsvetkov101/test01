import { expect } from 'chai';
import { DecimalHelper } from './decimal-helper';

describe('DecimalHelper tests', function() {
  describe('tests set', function() {
    const epsilon = 0.001;
    it('сравниваем 1.000001 и 1.000002 true', function() {
      
      const res = DecimalHelper.areEqual(1.000001,1.000002, epsilon);
      expect(res).equal(true);
    });

    it('сравниваем -1.000001 и -1.000002 true', function() {
      
      const res = DecimalHelper.areEqual(-1.000001,-1.000002, epsilon);
      expect(res).equal(true);
    });

    it('сравниваем -1.000001 и 1.000002 false', function() {
      
      const res = DecimalHelper.areEqual(-1.000001,1.000002, epsilon);
      expect(res).equal(false);
    });

    it('сравниваем 1.000001 и -1.000002 false', function() {
      
      const res = DecimalHelper.areEqual(1.000001,-1.000002, epsilon);
      expect(res).equal(false);
    });

    it('сравниваем 1.000001 и 2.000002 false', function() {
      
      const res = DecimalHelper.areEqual(1.000001,2.000002, epsilon);
      expect(res).equal(false);
    });

    it('сравниваем -1.000001 и -2.000002 false', function() {
      
      const res = DecimalHelper.areEqual(-1.000001,-2.000002, epsilon);
      expect(res).equal(false);
    });

  });
});