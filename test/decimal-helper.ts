export class DecimalHelper {
  static areEqual(a: number, b: number, epsilon: number) : boolean {
    if (a > epsilon && b > epsilon) // a > 0;  b > 0
    {
      return Math.abs(a - b) < epsilon;
    } 
    else if (a < -1 * epsilon && b < -1 * epsilon) //  a < 0;  b < 0
    {
      return Math.abs(Math.abs(a) - Math.abs(b)) < epsilon;
    }
    else {
      return false;
    }
  }
}