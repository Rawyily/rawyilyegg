'use strict';

const Controller = require('egg').Controller;

class TokenController extends Controller {
  async echo() {
    this.ctx.body = this.app.jwt.sign({id:"123"})
      
  }
}

module.exports = TokenController;
