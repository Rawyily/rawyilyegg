'use strict';
const Controller = require('egg').Controller;
class RegisterController extends Controller {
    async index() {
     try {
        const { ctx, app } = this;
        const email =await ctx.request.body.email;
        const validate =await ctx.request.body.validate;
        const readvalidate = await ctx.service.validateCode.index(email,validate);
     console.log(readvalidate);
         if (readvalidate) {
             const password =await ctx.request.body.password;
            //  console.log(password);
             const jwtPassword =await app.jwt.sign(password,email);
            //  const passwordJwt =await app.jwt.verify(jwtPassword,email);
            //  console.log(jwtPassword);
            //  console.log(passwordJwt);
             const data =await {
                 email: ctx.request.body.email,
                 name: ctx.request.body.name,
                 password:jwtPassword
             }
            //  console.log(data);
             const insert = await app.mysql.insert('email', data);
            //  console.log(insert);
             if (insert.affectedRows == 1) {
                 ctx.body = "注册成功！"
             } else {
                 ctx.body = "数据插入错误,注册失败！"
             }
             
     } else {
         this.ctx.body = "邮箱验证码是错误的！"
     }
     } catch (error) {
         this.ctx.body = "服务器错误,注册失败！"
     }
     

    
 }
}
module.exports = RegisterController;
