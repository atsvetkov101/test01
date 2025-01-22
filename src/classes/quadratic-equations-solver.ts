
export class QuadraticEquationsSolver {
  static readonly epsilon: number = 0.001;
  static readonly specValues = [NaN, Infinity, -Infinity];


  static solve(a: number, b: number, c: number): Array<number> {

    QuadraticEquationsSolver.checkForSpecialValue(a, 'a');
    QuadraticEquationsSolver.checkForSpecialValue(b, 'b');
    QuadraticEquationsSolver.checkForSpecialValue(c, 'c');

    if(Math.abs(a) < QuadraticEquationsSolver.epsilon) {
      throw new Error('a cannot be zero');
    }

    const discriminant = b * b - 4 * a * c;
    if(discriminant < -1 * QuadraticEquationsSolver.epsilon) {
      return [];
    }

    if(discriminant > QuadraticEquationsSolver.epsilon) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a); 
      return [x1, x2];
    }

    if(Math.abs(discriminant) < QuadraticEquationsSolver.epsilon) {
      const x = -b / (2 * a);
      return [x];
    }

    return [];
  }

  private static checkForSpecialValue(value: number, variable: string) {
    if (QuadraticEquationsSolver.specValues.includes(value)) {
      throw new Error(`ошибочное входное значение ${variable}`);
    }
  }
}