import operate from '../logic/operate';

describe('Testing operate.js', () => {
  test('Plus operation', () => {
    expect(operate(4, 6, '+')).toBe('10');
  });

  test('Minus operation', () => {
    expect(operate(8, 5, '-')).toBe('3');
  });

  test('Divide operation', () => {
    expect(operate(8, 4, '÷')).toBe('2');
  });

  test('Multy operation', () => {
    expect(operate(2, 4, 'x')).toBe('8');
  });

  test('Modulo operation', () => {
    expect(operate(5, 4, '%')).toBe('1');
  });
});
