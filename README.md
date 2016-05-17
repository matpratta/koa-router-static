# koa-router-static
Static file serving compatible with koa-router.

## Usage

Simply use the middleware in your router and choose a directory. The module will already find the file you requested and serve it for you.

Full-code example:

    var router require('koa-router')();
    var serve = require('koa-router-static');

    $.get('/*', serve('./assets/'));

In this case, the contents of the `assets` directory will be made available for your route.

You can also stack more than one serve (in case you want to have different assets for each route):

    var router require('koa-router')();
    var serve = require('koa-router-static');

    $.get('/*', serve('./images/'));
    $.get('/*', serve('./assets/'));