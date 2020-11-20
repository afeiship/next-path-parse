(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var path = require('path');
  var DEFAULT_OPTIONS = { cwd: process.cwd(), context: '' };

  nx.pathParse = function (inPath, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var result = path.parse(inPath);
    var full = path.join(result.dir, result.base);
    var relative = full.split(path.join(options.cwd, options.context, '/'))[1];
    var parent = path.join(options.context, relative);

    return nx.mix(options, result, {
      full: full,
      parent: parent,
      relative: relative
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pathParse;
  }
})();
