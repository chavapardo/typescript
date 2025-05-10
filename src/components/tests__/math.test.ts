import { sum, subtract } from '../../utils/math';

describe('Math Utilities', () => {
  it('adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('subtracts two numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});