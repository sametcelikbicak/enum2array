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


## Contributors ✨
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://sametcelikbicak.com/"><img src="https://avatars.githubusercontent.com/u/5312741?v=4?s=100" width="100px;" alt="Samet ÇELİKBIÇAK"/><br /><sub><b>Samet ÇELİKBIÇAK</b></sub></a><br /><a href="#infra-sametcelikbicak" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/sametcelikbicak/enum2array/commits?author=sametcelikbicak" title="Code">💻</a> <a href="https://github.com/sametcelikbicak/enum2array/issues?q=author%3Asametcelikbicak" title="Bug reports">🐛</a> <a href="https://github.com/sametcelikbicak/enum2array/commits?author=sametcelikbicak" title="Documentation">📖</a> <a href="#example-sametcelikbicak" title="Examples">💡</a> <a href="#maintenance-sametcelikbicak" title="Maintenance">🚧</a> <a href="https://github.com/sametcelikbicak/enum2array/commits?author=sametcelikbicak" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

