'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 判断请求来自移动端还是pc端
    const deviceAgent = ctx.header['user-agent'].toLowerCase();
    // console.log(deviceAgent);
    const agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    // console.log(agentID);
    if (agentID) {
      // console.log('请求来自手机、pad等移动端');
      // ctx.body = '不支持移动端设备';
      ctx.body = '请求来自手机、pad等移动端';
    } else {
      // console.log('请求来自PC端');
      ctx.body = '请求来自PC端';
      
    }
    // ctx.body = await ctx.render('../view/index.html')

  }

}
module.exports = HomeController;
