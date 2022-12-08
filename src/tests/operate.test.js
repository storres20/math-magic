import operate from '../logic/operate';

describe('Testing operate.js', () => {
  test('Plus operation', () => {
    expect(operate(10, 6, '+')).toBe('16');
  });

  test('Minus operation', () => {
    expect(operate(8, 5, '-')).toBe('3');
  });

  test('Minus operation', () => {
    expect(operate(10, 54, '-')).toBe('-44');
  });

  test('Divide operation', () => {
    expect(operate(8, 4, '÷')).toBe('2');
  });

  test('Divide operation', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  test('Multy operation', () => {
    expect(operate(2, 4, 'x')).toBe('8');
  });

  test('Multy operation', () => {
    expect(operate(9, 9, 'x')).toBe('81');
  });

  test('Modulo operation', () => {
    expect(operate(5, 4, '%')).toBe('1');
  });
});
