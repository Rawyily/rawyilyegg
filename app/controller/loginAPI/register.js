'use strict';
const Controller = require('egg').Controller;
class RegisterController extends Controller {
 async index() {
const { ctx, app } = this;
    //验证 邮箱|手机号 验证码
    // 注册
     try {
         const email =await ctx.request.body.EmailNumber;
         const iphone =await ctx.request.body.IPhoneNumber;
         const code =await ctx.request.body.code;
         if (email) {
            //  读取数据库储存的验证码
            const isNullE = await ctx.service.verifyCodeInMysql.getTWOVerifyCodeIsHaveInMysql(email, code);
            console.log("验证码正确："+isNullE);
             if (isNullE) {
                //  查询是否注册了
                 const EmailIsHave = await ctx.service.userInMysql.getUserXIsHave('email', email);
                 console.log("邮箱还没有注册可以注册"+!EmailIsHave);
                 if (!EmailIsHave) {
                    //  插入用户数据
                     const addE = await ctx.service.userInMysql.addUserEmail(email, code);
                     console.log("插入用户数据结果："+addE);
                     if (addE) {
                        ctx.body = {code: 200,msg:"注册成功"} 
                     } else {
                        ctx.body = {code: 504,msg:"注册失败"} 
                     }
                } else {
                    ctx.body = {
                        code: 503,
                        msg:"改邮箱已注册"
                    } 
                }
             } else {
                ctx.body = {
                    code: 502,
                    msg:"验证码无效"
                } 
             }
         } else if(iphone){
             const isNullI = await ctx.service.verifyCodeInMysql.getTWOVerifyCodeIsHaveInMysql(iphone, code);
             console.log("验证码正确："+isNullI);
             if (isNullI) {
                 const IPhoneIsHave = await ctx.service.userInMysql.getUserXIsHave('iphone', iphone);
                console.log("手机号还没有注册可以注册："+!IPhoneIsHave);
                 if (!IPhoneIsHave) {
                     const addI = await ctx.service.userInMysql.addUserIPhone(iphone, code);
                     console.log("用户数据是否插入成功："+addI);
                     if (addI) {
                        ctx.body = {code: 200,msg:"注册成功"} 
                     } else {
                        ctx.body = {code: 504,msg:"注册失败"} 
                     }
                 } else {
                    ctx.body = {
                        code: 503,
                        msg:"该手机号已注册"
                    }   
                 }
             } else {
                ctx.body = {
                    code: 502,
                    msg:"验证码无效"
                } 
             }
         } else {
            ctx.body = {
                code: 501,
                msg:"数据解析失败"
            }
         }
     } catch (error) {
         console.log(error);
         ctx.body = {
             code: 500,
             msg:"服务器错误"
         }
     }
 }
}
module.exports = RegisterController;
