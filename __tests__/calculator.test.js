import { divide } from '../src/calculator.js';

describe('divide', () => {

  it('divides two valid numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('throws TypeError when first argument is not a number', () => {
    expect(() => divide('10', 2)).toThrow(TypeError);
  });

  it('throws TypeError when second argument is not a number', () => {
    expect(() => divide(10, '2')).toThrow(TypeError);
  });

  it('throws TypeError when first argument is NaN', () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
  });

  it('throws TypeError when second argument is NaN', () => {
    expect(() => divide(10, NaN)).toThrow(TypeError);
  });

  it('throws RangeError when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
  });

});