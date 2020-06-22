const nx = require('@feizheng/next-js-core2');
require('../src/next-path-parse');

describe('api.basic test', () => {
  test('nx.pathParse', function () {
    var res = nx.pathParse('/User/feizheng/github/test/build/static/css/8.f96cc274.chunk.css', {
      cwd: '/User/feizheng/github/test/',
      context: 'build'
    });

    expect(res).toEqual({
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
    });
  });
});
