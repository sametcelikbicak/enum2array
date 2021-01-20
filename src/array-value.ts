export interface IArrayValue {
  readonly title: string;
  readonly value: any;
}

export class ArrayValue implements IArrayValue {
  public readonly title: string;
  public readonly value: any;

  constructor(title: string = '', value: any = '') {
    this.title = title;
    this.value = value;
  }
}
