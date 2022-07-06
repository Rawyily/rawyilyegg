'use strict';
const Controller = require('egg').Controller;
class CheckUserIsHaveController extends Controller {
 async index() {
const { ctx, app } = this;
    try {
        const data = ctx.request.body;
        console.log(data);
         if (data.Numbertype == 'E') {
             const ishaveE = await ctx.service.userInMysql.getUserXIsHave('email', data.number);
             if (ishaveE) {
            ctx.body = {code: 200,msg:"账号存在"}
             } else {
            ctx.body = {code: 502,msg:"账号不存在"}
             }
         } else if(data.Numbertype == 'I'){
             const ishaveI = await ctx.service.userInMysql.getUserXIsHave('iphone', data.number);
             if (ishaveI) {
            ctx.body = {code: 200,msg:"账号存在"}
             } else {
            ctx.body = {code: 502,msg:"账号不存在"} 
             }
         } else {ctx.body = { code: 501,msg:"数据解析出错"}}
    } catch (error) {
        console.log(error);
        ctx.body = {code: 500,msg:"服务器错误"}
    }
 }
}
module.exports = CheckUserIsHaveController;
