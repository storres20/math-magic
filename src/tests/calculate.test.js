import calculate from '../logic/calculate';

describe('Testing calculate.js', () => {
  test('Return an object', () => {
    expect(typeof calculate({}, 'AC')).toBe('object');
  });

  test('When press AC, NEXT is set to null', () => {
    expect(calculate({}, 'AC').next).toBe(null);
  });

  test('When press AC, TOTAL is set to null', () => {
    expect(calculate({}, 'AC').total).toBe(null);
  });

  test('When press AC, OPERATION is set to null', () => {
    expect(calculate({}, 'AC').operation).toBe(null);
  });

  test('When press +, operation is set to +', () => {
    expect(calculate({}, '+').operation).toBe('+');
  });

  test('When press -, operation is set to -', () => {
    expect(calculate({}, '-').operation).toBe('-');
  });

  test('When press ÷, operation is set to ÷', () => {
    expect(calculate({}, '÷').operation).toBe('÷');
  });

  test('When press x, operation is set to x', () => {
    expect(calculate({}, 'x').operation).toBe('x');
  });

  test('When press %, operation is set to %', () => {
    expect(calculate({}, '%').operation).toBe('%');
  });

  test('When you insert 1st number', () => {
    expect(calculate({}, '1').next).toBe('1');
  });

  test('When you insert 2nd number', () => {
    expect(calculate({ next: '1' }, '2').next).toBe('12');
  });

  test('When you insert 2nd number', () => {
    expect(calculate({ next: '12' }, '3').next).toBe('123');
  });

  test('Test sum and equal', () => {
    expect(calculate({ next: '4', total: 123, operation: '+' }, '=').total).toBe('127');
  });

  test('Test minus and equal', () => {
    expect(calculate({ next: '4', total: 123, operation: '-' }, '=').total).toBe('119');
  });

  test('Test divide and equal', () => {
    expect(calculate({ next: '5', total: 100, operation: '÷' }, '=').total).toBe('20');
  });

  test('Test multy and equal', () => {
    expect(calculate({ next: '10', total: 15, operation: 'x' }, '=').total).toBe('150');
  });

  test('Test modulo and equal', () => {
    expect(calculate({ next: '4', total: 5, operation: '%' }, '=').total).toBe('1');
  });
});
