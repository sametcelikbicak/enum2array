import { ArrayValue } from '../src/array-value';
import { enum2array } from '../src/index';

enum CustomType {
  TypeA = 1,
  TypeB = 2,
  TypeC = 3,
  TypeD = 4,
}

enum CustomValue {
  TypeA = 'valueA',
  TypeB = 'valueB',
  TypeC = 'valueC',
  TypeD = 'valueD',
}

describe('enum2array', () => {
  it('should be defined', () => {
    expect(enum2array).toBeDefined();
  });

  it('should match valid array with number value', () => {
    const expected = [
      new ArrayValue('TypeA', 1),
      new ArrayValue('TypeB', 2),
      new ArrayValue('TypeC', 3),
      new ArrayValue('TypeD', 4),
    ];

    const result = enum2array(CustomType);

    expect(result).toEqual(expected);
  });

  it('should match valid array with string value', () => {
    const expected = [
      new ArrayValue('TypeA', 'valueA'),
      new ArrayValue('TypeB', 'valueB'),
      new ArrayValue('TypeC', 'valueC'),
      new ArrayValue('TypeD', 'valueD'),
    ];

    const result = enum2array(CustomValue);

    expect(result).toEqual(expected);
  });
});
