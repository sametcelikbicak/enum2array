# Enum2Array  [![npm version](https://badge.fury.io/js/enum2array.svg)](https://badge.fury.io/js/enum2array) ![npm](https://img.shields.io/npm/dt/enum2array?label=Downloads&logo=npm) [![ 🚀 NPM Publish ](https://github.com/sametcelikbicak/enum2array/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/npm-publish.yml)
A function to help converting enums to an array.

## Installation

```
npm i enum2array
```

## Usage

### Define an enum for testing
```
export enum CustomType {
    TypeA = 1,
    TypeB = 2,
    TypeC = 3,
    TypeD = 4,
}

export enum CustomValue {
    TypeA = "valueA",
    TypeB = "valueB",
    TypeC = "valueC",
    TypeD = "valueD",
}
```

### Usage enum2array function

```
import { enum2array } from "enum2array";

console.log(enum2array(CustomType));

console.log(enum2array(CustomValue));
```

## Results

### That is the result about function with "CustomType" enum

```
(4) [ArrayValue, ArrayValue, ArrayValue, ArrayValue]
0: ArrayValue {title: "TypeA", value: 1}
1: ArrayValue {title: "TypeB", value: 2}
2: ArrayValue {title: "TypeC", value: 3}
3: ArrayValue {title: "TypeD", value: 4}
length: 4
__proto__: Array(0)
```

### That is the result about function with "CustomValue" enum

```
(4) [ArrayValue, ArrayValue, ArrayValue, ArrayValue]
0: ArrayValue {title: "TypeA", value: "valueA"}
1: ArrayValue {title: "TypeB", value: "valueB"}
2: ArrayValue {title: "TypeC", value: "valueC"}
3: ArrayValue {title: "TypeD", value: "valueD"}
length: 4
__proto__: Array(0)
```