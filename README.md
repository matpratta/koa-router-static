# koa-router-static
Static file serving compatible with koa-router.

## Usage

Simply use the middleware in your router, paying to the router path, which goes in the second argument.

For example, if your router is called by the url `http://example.com/my-router/`, then your router path will be `/my-router/` and should be used in the second argument, so that the correct file is resolved.

Full-code example:

    var router require('koa-router')();
    var serve = require('koa-router-static');

    $.get('/*', serve('./assets/', '/my-router/'));

In this case, the contents of the `assets` directory will be made available for your route.