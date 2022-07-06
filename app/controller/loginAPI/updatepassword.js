'use strict';
const Controller = require('egg').Controller;
class UpdatepasswordController extends Controller {
 async index() {
     const { ctx, app } = this;
     console.log("修改密码");
     try {
         const data = ctx.request.body;
         const Numbertype = data.Numbertype;    
         const number = data.number;    
         const code = data.code;    
         const newpassword = data.newpassword;    
        //  验证码校验
         const codeishave = await ctx.service.verifyCodeInMysql.getTWOVerifyCodeIsHaveInMysql(number, code);
         console.log(data);
         console.log("验证码校验结果:"+codeishave);
         if (codeishave) {
             if (Numbertype == 'E') {
                 var newdata = { password: newpassword }
                //  加密
                 const jwtnewdata = await app.jwt.sign(newdata, app.config.jwt.secret);
                 //加密后长度小于20大于255的不加密
                 if (jwtnewdata.length > 20 && jwtnewdata.length < 255) {
                     newdata = { password:jwtnewdata };
                 }
                 const upe = await ctx.service.userInMysql.updataUserX('email', number, newdata);
                 console.log("密码修改结果:"+upe);
                 if (upe) { ctx.body = { code: 200, msg: "修改密码成功" } }
                 else if (upe == false) { ctx.body = { code: 504, msg: "修改密码失败" } }
                 else if(upe == 'error'){ctx.body = {code:503,msg:"修改数据出错"}}
                 else if (upe == 'NaN') { ctx.body = { code: 502, msg: "数据解析错误" } }
             } else if (Numbertype == 'I') {
                 var newdata = { password: newpassword }
                //  加密
                 const jwtnewdata = await app.jwt.sign(newdata, app.config.jwt.secret);
                 if (jwtnewdata.length > 20 && jwtnewdata.length < 255) {
                     newdata = { password:jwtnewdata };
                 }
                 const upi = await ctx.service.userInMysql.updataUserX('iphone', number, newdata);
                 console.log("密码修改结果:"+upi);
                 if (upi) { ctx.body = { code: 200, msg: "修改密码成功" } }
                 else if (upi == false) { ctx.body = { code: 504, msg: "修改密码失败" } }
                 else if(upi == 'error'){ctx.body = {code:503,msg:"修改数据出错"}}
                 else if (upi == 'NaN') { ctx.body = { code: 502, msg: "数据解析错误" } }
             }
         } else {
         ctx.body = {code:501,msg:"验证码无效"}
         }
     } catch (error) {
         console.log(error);
         ctx.body = {code:500,msg:"服务器错误"}
     }
    
 }
}
module.exports = UpdatepasswordController;
