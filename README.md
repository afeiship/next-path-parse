# next-path-parse
> Parse path for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-path-parse
```

## usage
```js
import '@jswork/next-path-parse';

const res = nx.pathParse('/User/feizheng/github/test/build/static/css/8.f96cc274.chunk.css', {
  cwd: '/User/feizheng/github/test/',
  context:'build'
});

/*
{
  cwd: '/User/feizheng/github/test/',
  context: 'build',
  root: '/',
  dir: '/User/feizheng/github/test/build/static/css',
  base: '8.f96cc274.chunk.css',
  ext: '.css',
  name: '8.f96cc274.chunk',
  full: '/User/feizheng/github/test/build/static/css/8.f96cc274.chunk.css',
  parent: 'build/static/css/8.f96cc274.chunk.css',
  relative: 'static/css/8.f96cc274.chunk.css'
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-path-parse/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-path-parse
[version-url]: https://npmjs.org/package/@jswork/next-path-parse

[license-image]: https://img.shields.io/npm/l/@jswork/next-path-parse
[license-url]: https://github.com/afeiship/next-path-parse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-path-parse
[size-url]: https://github.com/afeiship/next-path-parse/blob/master/dist/next-path-parse.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-path-parse
[download-url]: https://www.npmjs.com/package/@jswork/next-path-parse
