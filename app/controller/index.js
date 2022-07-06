'use strict';

const Controller = require('egg').Controller;
const fs = require('fs')
const path = require('path')
class IndexController extends Controller {
      async index () {
        const { ctx, app } = this;
    ctx.response.type = 'html';
    console.log("index.html");
    // ctx.body = fs.readFileSync(path.resolve(__dirname, '../public/index.html'));
  }

}

module.exports = IndexController;
