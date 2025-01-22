import { expect, assert } from 'chai';
import { DecimalHelper } from './decimal-helper';
import { QuadraticEquationsSolver } from '../src/classes/quadratic-equations-solver';

describe('QuadraticEquationsSolver tests', function() {
  describe('Набор тестов для метода solve', function() {
    it('тест для п.3. проверяет, что для уравнения x^2+1 = 0 корней нет (возвращается пустой массив)', function() {
      const roots = QuadraticEquationsSolver.solve(1, 0.00000000000001, 2);
      expect(roots.length).equal(0);
    });

    it('тест для п.5.  проверяет, что для уравнения x^2-1 = 0 есть два корня кратности 1 (x1=1, x2=-1)', function() {
      const roots = QuadraticEquationsSolver.solve(1, 0.00000000000001, -1);
      expect(roots.length).equal(2);

      roots.sort(function(a, b){return a-b;});

      const root1 = roots[0]; 
      const root2 = roots[1];
      const expected1 = -1;
      const expected2 = 1;

      expect(DecimalHelper.areEqual(expected1, root1, QuadraticEquationsSolver.epsilon)).equal(true);
      expect(DecimalHelper.areEqual(expected2, root2, QuadraticEquationsSolver.epsilon)).equal(true);
    });

    it('тест для п.7. + п.11  для уравнения x^2+2x+1 = 0 есть один корень кратности 2 (x1= x2 = -1)', function() {
      const roots = QuadraticEquationsSolver.solve(2.00000000000001, 4.00000000000009, 2.00000000000009);

      expect(roots.length).equal(1);

      expect(DecimalHelper.areEqual(roots[0], -1, QuadraticEquationsSolver.epsilon)).equal(true);
    });
    it('тест для п.9. проверяет, что коэффициент a не может быть равен 0', function() {
      let error;
      try {
        QuadraticEquationsSolver.solve(0.00000000000001, 2, 1);  
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
      expect(error.message).equal('a cannot be zero');
    });

    it('тест для п.13. спец. значение NaN для a', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(NaN, 0.00000000000001, -1); 
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение NaN для b', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(1, NaN, -1);
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение NaN для с', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(1, 0.00000000000001, NaN);
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение Infinity для a', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(Infinity, 0.00000000000001, -1); 
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение Infinity для b', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(1, Infinity, -1);
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение Infinity для с', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(1, 0.00000000000001, Infinity);
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение -Infinity для a', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(-Infinity, 0.00000000000001, -1); 
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение -Infinity для b', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(1, -Infinity, -1);
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	

    it('тест для п.13. спец. значение -Infinity для с', function() {
      let error = null;
      try {
        QuadraticEquationsSolver.solve(1, 0.00000000000001, -Infinity);
      }
      catch (e) {
        error = e;
      }
      assert.isNotNull(error);
    });	
  });
});