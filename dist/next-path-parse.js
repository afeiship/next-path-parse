/*!
 * name: @feizheng/next-path-parse
 * description: Parse path for next.
 * homepage: https://github.com/afeiship/next-path-parse
 * version: 1.0.0
 * date: 2020-06-22T08:58:11.454Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var path = require('path');
  var DEFAULT_OPTIONS = { cwd: process.cwd(), context: '' };

  // var relative = require('relative');
  // var fg = require('fast-glob');
  // var path = require('path');

  // var files = fg.sync('**', {
  //   absolute: true,
  //   cwd: path.join(__dirname, 'build')
  // });

  // console.log(files);

  // // next-path-parse
  // nx.pathParse('/User/feizheng/github/test/build/static/css/8.f96cc274.chunk.css', {
  //   cwd: process.cwd(),
  //   context: 'build'
  // });



  // cwd: /User/feizheng/github/test/
  // context: build

  // root: '/'
  // parent: 'build/static/css/8.f96cc274.chunk.css'
  // relative: 'static/css/8.f96cc274.chunk.css'
  // base: '8.f96cc274.chunk.css'
  // ext: path.extname('8.f96cc274.chunk.css') --> .css
  // dir: path.dirname('---') --> /User/feizheng/github/test/build/static/css

  // cwd: process.cwd();
  // context: build
  // glob: '**'


  // relative: static/css/8.f96cc274.chunk.css
  // relative_context: build/static/css/8.f96cc274.chunk.css
  // absoulte: /User/feizheng/github/test/static/css/8.f96cc274.chunk.css

  // console.log(files);


  nx.pathParse = function (inPath, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var result = path.parse(inPath);
    var full = path.join(result.dir, result.base);
    var relative = full.split(path.join(options.cwd, options.context, '/'))[1];
    var parent = path.join(options.context, relative);

    return nx.mix(
      options,
      result,
      {
        full: full,
        parent: parent,
        relative: relative
      }
    )
    // package codes...
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pathParse;
  }
})();

//# sourceMappingURL=next-path-parse.js.map
