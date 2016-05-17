module.exports = function (root, router_url, opts) {
  var send = require('koa-send');
  var path = require('path');

  var opts = opts || {};
  opts.index = opts.index || 'index.html';

  root = path.resolve(root);

  console.log('Static mounted on "%s"', root);
  console.log(root, router_url);

  return function * (next) {
    yield next;

    if (this.method != 'GET' && this.method != 'HEAD') return;
    if (this.body != null || this.status != 404) return;

    var requested = path.normalize(this.path).substring(router_url.length);
    if (requested.length == 0) requested = opts.index;

    yield send(this, requested, { root: root });
  }
}