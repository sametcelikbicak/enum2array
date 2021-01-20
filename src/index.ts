import { ArrayValue, IArrayValue } from './array-value';

export function enum2array(enumObject: any): IArrayValue[] {
  if (Object.keys(enumObject).some((value) => Number(value))) {
    return Object.keys(enumObject)
      .filter((value) => isNaN(Number(value)) === false)
      .map((key) => new ArrayValue(enumObject[key], Number(key)));
  }

  return Object.keys(enumObject).map((key) => new ArrayValue(key, enumObject[key]));
}
