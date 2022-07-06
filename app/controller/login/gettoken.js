'use strict';

const Controller = require('egg').Controller;

class GettokenController extends Controller {
   index(a) {
    const { ctx, app } = this;
		ctx.body = a;
	}
}

module.exports = GettokenController;
