'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
 async index() {
const { ctx, app } = this;
    try {
        const email = ctx.request.body.email;
        const token = ctx.request.body.password;
        const password = app.jwt.sign(token, email);
        // console.log(password);
        const data = {email:email,password:password}
        // console.log(data);
        const readlogin = await app.mysql.get('email', data);
        // console.log(readlogin);
        if (readlogin) {
            if (readlogin == null) {
            ctx.body = "没有这个用户" 
            } else {
                const cookie = app.jwt.sign(email, app.config.jwt.secret);
                // console.log(app.config.jwt.secret);
                ctx.body = { msg:"登录成功",calcookie:cookie}
            }
        } else {
            console.log(readlogin);
        ctx.body = "账号信息不匹配" 
        }
    } catch (error) {
        console.log(error);
        ctx.body = "服务器错误"
    }
 }
}
module.exports = LoginController;
