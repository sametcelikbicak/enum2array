# Enum2Array

A function to help converting enums to an array.

Define an enum for testing
```
export enum CustomType {
    TypeA = 1,
    TypeB = 2,
    TypeC = 3,
    TypeD = 4,
}
```

Usage enum2array function

```
import { enum2array } from "enum2array";

console.log(enum2array(CustomType));
```

That is the result about function

```
(4) [ArrayValue, ArrayValue, ArrayValue, ArrayValue]
0: ArrayValue {title: "TypeA", value: 1}
1: ArrayValue {title: "TypeB", value: 2}
2: ArrayValue {title: "TypeC", value: 3}
3: ArrayValue {title: "TypeD", value: 4}
length: 4
__proto__: Array(0)
```