module.exports = function (root, opts) {
  const send = require('koa-send');
  const path = require('path');

  opts = opts || {};
  opts.index = opts.index || 'index.html';

  root = path.resolve(root);

  if (opts.debug) console.log('Static mounted on "%s"', root);

  return async function (ctx, next) {

    if (ctx.method != 'GET' && ctx.method != 'HEAD') await next();
    if (ctx.body != null || ctx.status != 404) await next();

    const file = ctx.params['0'] || '/' + opts.index;

    const requested = path.normalize(file);
    if (requested.length == 0 || requested == '/') requested = opts.index;

    await send(ctx, requested, { root: root });
  }
}
