'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
async Base() {
const { ctx, app } = this;
    
    }
async Email() {
const { ctx, app } = this;
    try {
        const data = ctx.request.body;
        console.log(data);
        // 鉴定验证码
        const checkCode = await ctx.service.verifyCodeInMysql.getTWOVerifyCodeIsHaveInMysql(data.email, data.code);
        console.log("验证码正确:"+checkCode);
        if (checkCode) {
        const where = {email:data.email}
        const checkemail = await ctx.service.userInMysql.getUserWhereIsHave(where);
        console.log("账号存在:" + checkemail);
            if (checkemail) {
                const usermysqldata = await ctx.service.userInMysql.getUserdataWhere({ email: data.email });
                console.log("获取的用户数据:" + usermysqldata);
                if (usermysqldata == false) {
                ctx.body = {code:503,msg:"找不到您的数据"}     
                } else if(usermysqldata == 'error'){
                ctx.body = {code:504,msg:"数据库错误"}     
                } else {
                    ctx.body = {
                        code: 200, msg: "登陆成功", data: {
                    id:usermysqldata.id,name:usermysqldata.name
                }}
                }
            } else {ctx.body = {code:502,msg:"您的账号突然找不到了"}}
        } else {ctx.body = {code:501,msg:"验证码错误(无效)"}}
    } catch (error) {
        ctx.body = {code:500,msg:"服务器错误"}
        console.log(error);
    }
    }
    async password() {
        // {email:'xxx',password:'xxx',type:'email'}
        // {iphone:'xxx',password:'xxx',type:'iphone'}

        const { app, ctx } = this;
        console.log(ctx.request.body);
        console.log("密码登录(-2-)");
        try {
            // var pw = ctx.request.body.password;
            // const jwt = await app.jwt.verify(pw, app.config.jwt.secret)
            
            if (ctx.request.body.type == 'email') {
                //邮箱获取用户数据 有就返回数据
                const email =await { email: ctx.request.body.email};
                const checkemail = await ctx.service.userInMysql.getUserdataWhere(email);
                if (checkemail == false) {
                    // 空
                    console.log("(x)账号不存在");
                    ctx.body = { code: 502, msg: "账号不存在" }   
                } else if (checkemail == 'error') {
                    // 出错
                    console.log("(x)获取用户数据出错");
                    ctx.body = { code: 503, msg: "数据库读取出错" }
                } else { 
                    // 有数据
                    console.log("(v/)用户存在");
                    // 判断数据库密码长度                
                    const pwmysql = checkemail.password;
                    if (pwmysql.length > 20) {
                        // 解密 
                        await app.jwt.verify(pwmysql, app.config.jwt.secret, (err, data) => {
                            if (err) { console.log(err); } else {
                                if (data.password == ctx.request.body.password) {
                                    console.log("(v/)解密密码与提交密码一致");
                                    ctx.body = {
                                        code: 200, msg: "登录成功",
                                        data: { id: checkemail.id, name: checkemail.name }
                                    }
                                } else {
                                    console.log("(x)解密密码错误");
                                    ctx.body = { code: 502, msg: "密码错误" }
                                }
                            }
                        });
                    } else if(pwmysql.length < 20){
                        if (pwmysql == ctx.request.body.password) {
                            console.log("(v/)明文密码与提交密码一致");
                            ctx.body = { code: 200, msg: "登录成功",
                                data: { id: checkemail.id, name:checkemail.name }
                            }
                        } else {
                            console.log("(x)明文密码错误");
                            ctx.body = { code: 502, msg: "密码错误"}
                        }
                    }
                }
            } else if(ctx.request.body.type == 'iphone'){
                const iphone = await { iphone: ctx.request.body.iphone};
                const checkiphone = await ctx.service.userInMysql.getUserdataWhere(iphone);
                if (checkiphone == false) {
                    console.log("(x)账号不存在");
                    ctx.body = { code: 502, msg: "账号不存在" }  
                } else if (checkiphone == 'error') {
                    console.log("(x)数据库数据出错");
                    ctx.body = { code: 503, msg: "数据库读取出错" }
                } else {
                    console.log("(v/)账号存在");
                    const pwmysliphone = checkiphone.password;
                    if (pwmysliphone.length > 20) {
                        await app.jwt.verify(pwmysliphone, app.config.jwt.secret, (err, data) => {
                            if (err) { console.log(err); } else {
                                if (data.password == ctx.request.body.password) {
                                    console.log("(v/)解密密码与提交密码一致");
                                    ctx.body = {
                                        code: 200, msg: "登录成功",
                                        data: { id: checkiphone.id, name: checkiphone.name }
                                    }
                                } else {
                                    console.log("(x)解密密码错误");
                                    ctx.body = { code: 502, msg: "密码错误" }
                                }
                            }
                        });
                    } else if(pwmysliphone.length < 20){
                          if (pwmysliphone == ctx.request.body.password) {
                            console.log("(v/)明文密码与提交密码一致");
                            ctx.body = { code: 200, msg: "登录成功",
                                data: { id: checkiphone.id, name:checkiphone.name }
                            }
                        } else {
                            console.log("(x)明文密码错误");
                            ctx.body = { code: 502, msg: "密码错误"}
                        }
                    }
                }
            } else {
            ctx.body={code:501,msg:"数据解析失败"}
            }
        } catch (error) {
            console.log(error);
            ctx.body={code:500,msg:"服务器错误"}
        }
    }
    async iphone() {
        // {iphone"xxx",pw:'xxx'}
        const { app, ctx } = this;
        try {
            const data = ctx.request.body;
            console.log(data);
            const check = await ctx.service.verifyCodeInMysql.getTWOVerifyCodeIsHaveInMysql(ctx.request.body.number, ctx.request.body.code);
            console.log("鉴定验证码:" + check);
            if (check) {
                const where = {iphone:ctx.request.body.number}
                const userdata = await ctx.service.userInMysql.getUserdataWhere(where);
                console.log('账号存在:'+userdata);
                if (userdata  == false) {
                ctx.body={code:502,msg:"账号走丢了"}
                } else if(userdata == 'error'){
                ctx.body={code:503,msg:"数据库出错"}
                } else {
                    ctx.body = {
                        code: 200,
                        msg:"登录成功",
                        data: {
                        id: userdata.id,
                        name:userdata.name  
                        }

                    }
                }
            } else {
            ctx.body={code:501,msg:"验证码错误或失效"}
            }
        } catch (error) {
            console.log(error);
            ctx.body={code:500,msg:"服务器错误"}
        }
    }
}
module.exports = LoginController;
