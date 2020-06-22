# next-path-parse
> Parse path for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
![size](size-image)
![download](download-image)


## installation
```bash
npm install -S @feizheng/next-path-parse
```

## usage
```js
import '@feizheng/next-path-parse';


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

[version-image]: https://img.shields.io/npm/v/@feizheng/next-path-parse
[version-url]: https://npmjs.org/package/@feizheng/next-path-parse

[license-image]: https://img.shields.io/npm/l/@feizheng/next-path-parse
[license-url]: https://github.com/afeiship/next-path-parse/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-path-parse
[download-image]: https://img.shields.io/npm/dw/@feizheng/next-path-parse
