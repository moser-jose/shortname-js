# [shortname-js](https://github.com/moser-jose/shortname-js)

`shortname-js` is a JavaScript function designed to shorten names (Portuguese - PT 🇵🇹 | BR 🇧🇷 | AO 🇦🇴) in a simple and user-friendly way. The function allows users to quickly enter full names and receive abbreviated versions of those names in return.

[![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT) 
[![Version](https://img.shields.io/github/package-json/v/moser-jose/shortname-js)](https://github.com/moser-jose/shortname-js)
[![npm](https://img.shields.io/npm/v/@mosmmy/shortname-js)](https://www.npmjs.com/package/@mosmmy/shortname-js)
[![npm downloads](https://img.shields.io/npm/dm/@mosmmy/shortname-js)](https://www.npmjs.com/package/@mosmmy/shortname-js)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@mosmmy/shortname-js)](https://bundlephobia.com/package/@mosmmy/shortname-js)
[![TypeScript](https://img.shields.io/badge/TypeScript-supported-blue)](https://www.typescriptlang.org/)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://jestjs.io/)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/moser-jose/shortname-js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/moser-jose/shortname-js?style=social)](https://github.com/moser-jose/shortname-js/stargazers)

## Install

### yarn

`yarn add @mosmmy/shortname-js`

### NPM

`npm install @mosmmy/shortname-js`

### Use

```javascript

import { shortName } from '@mosmmy/shortname-js'

console.log(shortName('Jorge Pedro André dos Santos'))          //Jorge P. A. dos Santos

console.log(shortName('Pedro de Sousa André'))                  //Pedro de S. André

console.log(shortName('Marilda dos Santos Pedro de Souza'))     //Marilda dos S. P. de Souza

console.log(shortName('Marcos Ângelo Mateus dos Santos'))       //Marcos A. M. dos Santos
```

To run the test:

`npm run test`

`npm run test:**coverage**`

## Licence

This project is governed by the [MIT](/LICENSE.md). Just remember to be a nice person and send back any modifications, corrections or improvements. ✌️

## Author

| [<img src="https://avatars0.githubusercontent.com/u/8234620?" width="115"><br><sub>@moser-jose</sub>](https://github.com/moser-jose) |
| :---: |
