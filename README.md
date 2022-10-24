<div align="center">

 <img src="assets/enum2array.svg" alt="Logo" width="256" height="256">

# Enum2Array  
![npm](https://img.shields.io/npm/v/enum2array?color=g&label=enum2array&logo=npm) ![npm](https://img.shields.io/npm/dy/enum2array?label=Downloads&logo=npm) [![CodeQL Analyze](https://github.com/sametcelikbicak/enum2array/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/codeql-analysis.yml) [![Build & Test](https://github.com/sametcelikbicak/enum2array/actions/workflows/build-test.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/build-test.yml) ![dependabot](https://img.shields.io/badge/Dependabot-active-g?logo=dependabot)

A function to help converting enums to an array. Define an enum then use this function to convert that enum to an array.
</div>

## Installation

```
npm i enum2array
```

## Usage

### Define an enum for testing
```typescript
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

```typescript
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

### Want to contribute?
You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/sametcelikbicak/enum2array/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

