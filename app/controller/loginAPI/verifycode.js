'use strict';

const helper = require('../../extend/helper');

const Controller = require('egg').Controller;
class VerifycodeController extends Controller {
    // 注册时获取验证码
 async index() {
const { ctx, app } = this;
     try {
         const data = ctx.request.body;
         console.log(data);
         const reEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i; 
         const reIPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/i;
         //邮件发送验证码
         if (data.EmailNumber && reEmail.test(data.EmailNumber)) {
            //  查询邮件是否邮件注册 true是没有注册 false是注册过
             const a = await ctx.service.userInMysql.getUserXIsHave('email', data.EmailNumber);
             console.log("邮箱可以注册："+(a == false));
            // 根据查询结果处理
             if (a == false) {
                 // 生成验证码
                 const code = helper.verifyCode_Six_NumAndABC();
                 //  设置邮件内容
                 const text = '这是主机IP地址（' + ctx.request.ip + ' ' + ctx.request.agentID() + '）请求注册通行证所发送的验证码“ ' + code + ' ”,5分钟内有效。验证码请勿泄露给别人！如果不是你注册的，请检查邮箱账号信息是否被盗用！-----[' + (new Date()) + ']';
                 // 发送邮件
                 const b = await ctx.service.email.sendMail(data.EmailNumber, '注册验证码:' + code.toLowerCase(), text, undefined);
                 //储存验证码(5分钟有效期)
                 console.log("发送邮件结果："+b);
                 const c = await ctx.service.verifyCodeInMysql.setVerifyCodeInMysql(data.EmailNumber, code);
                 console.log("储存验证码："+c);
                 if (b && c) {
                     ctx.body = {
                         code: 200,
                         msg: '发送验证码成功'
                     }
                     setTimeout(() => {
                         const dele = ctx.service.verifyCodeInMysql.delVerifyCodeInMysql(data.EmailNumber, code);
                         console.log("销毁验证码结果："+dele);
                     }, 300000)
                 } else {
                     ctx.body = {
                         code: 200,
                         msg: '发送验证码失败'
                     }
                 }
             } else if (a == true) {
                 ctx.body = {
                     code: 501,
                     msg: '邮箱已注册'
                 }
             } else if (a == 'NaN') {
                ctx.body = {
                    code: 502,
                    msg:'读取数据库错误'
                } 
              } else {
                ctx.body = {
                    code: 503,
                    msg:'服务器错误'
                } 
            } 
            //  
         } else if (data.IPhoneNumber && reIPhone.test(data.IPhoneNumber)) {
             const IPhoneIsHave = await ctx.service.userInMysql.getUserXIsHave('iphone', data.IPhoneNumber);
             console.log("手机号是没有注册的可以注册："+(IPhoneIsHave == false));
             if (IPhoneIsHave == false) {
                 const SMScode =await helper.verifyCode_Six_NumAndABC();
                 const setsmscode = await ctx.service.verifyCodeInMysql.setVerifyCodeInMysql(data.IPhoneNumber, SMScode);
                 console.log("储存验证码结果："+setsmscode);
                 if (setsmscode) {
                    ctx.body = {
                        code: 200,
                        msg:SMScode
                     }
                     setTimeout(() => {
                        const deli = ctx.service.verifyCodeInMysql.delVerifyCodeInMysql(data.IPhoneNumber, SMScode);
                         console.log("销毁验证码结果："+deli);
                     },300000)
                 } else {
                     
                 }
             } else if(IPhoneIsHave == true){
                ctx.body = {
                    code: 501,
                    msg:"改手机号已经注册了"
                } 
             } else if (IPhoneIsHave == 'NaN') {
                ctx.body = {
                    code: 502,
                    msg:"读取数据库出错"
                } 
             } else {
                ctx.body = {
                    code: 203,
                    msg:"服务器错误"
                } 
             }
         } else {
            ctx.body = {
                code: 501,
                msg:"服务器判断邮箱或手机号格式错误"
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
    async sendusercode() {
        console.log();
        console.log("开始发送验证码(4)：");
        const { app, ctx } = this;
        try {
            const number = ctx.request.body.number;
            // console.log(number);
         const reEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i; 
         const reIPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/i;
         //邮件发送验证码
         if (number && reEmail.test(number)) {
            //  是否注册
             const a = await ctx.service.userInMysql.getUserXIsHave('email', number);
             console.log("(1/4)邮箱已注册:"+a);
            // 根据查询结果处理
             if (a) {
                 // 生成验证码
                 const code = helper.verifyCode_Six_NumAndABC();
                 //  设置邮件内容
                 const text = '这是主机IP地址（' + ctx.request.ip + ' ' + ctx.request.agentID() + '）请求的验证码“ ' + code + ' ”,5分钟内有效。验证码请勿泄露给别人！如果不是你请求的，请检查邮箱账号信息是否被盗用！-----'+ (new Date());
                 // 发送邮件
                 const b = await ctx.service.email.sendMail(number, '验证码:' + code.toLowerCase(), text, undefined);
                 //储存验证码(5分钟有效期)
                 console.log("(2/4)发送邮件结果："+b);
                 const c = await ctx.service.verifyCodeInMysql.setVerifyCodeInMysql(number, code);
                 console.log("(3/4)储存验证码："+c);
                 if (b && c) {
                     ctx.body = {
                         code: 200,
                         msg: '发送验证码成功'
                     }
                     setTimeout(() => {
                         const dele = ctx.service.verifyCodeInMysql.delVerifyCodeInMysql(number, code);
                         console.log("(4/4)销毁验证码结果："+dele);
                     }, 300000)
                 } else {
                     ctx.body = {
                         code: 200,
                         msg: '发送验证码失败'
                     }
                 }
             } else if (a == false) {
                 ctx.body = {
                     code: 501,
                     msg: '邮箱注册数据异常(可能没有注册)'
                 }
             } else if (a == 'NaN') {
                ctx.body = {
                    code: 502,
                    msg:'读取数据库错误'
                } 
              } else {
                ctx.body = {
                    code: 503,
                    msg:'服务器错误'
                } 
            } 
            //  
         } else if (number && reIPhone.test(number)) {
             const IPhoneIsHave = await ctx.service.userInMysql.getUserXIsHave('iphone', number);
             console.log("已注册"+IPhoneIsHave);
             if (IPhoneIsHave) {
                 const SMScode =await helper.verifyCode_Six_NumAndABC();
                 const setsmscode = await ctx.service.verifyCodeInMysql.setVerifyCodeInMysql(number, SMScode);
                 console.log("储存验证码结果："+setsmscode);
                 if (setsmscode) {
                    ctx.body = {
                        code: 200,
                        msg: "您的验证码是" + SMScode
                     }
                     setTimeout(() => {
                        const deli = ctx.service.verifyCodeInMysql.delVerifyCodeInMysql(number, SMScode);
                         console.log("销毁验证码结果："+deli);
                     },300000)
                 } else {
                     
                 }
             } else if(IPhoneIsHave == false){
                ctx.body = {
                    code: 501,
                    msg:"账号不存在"
                } 
             } else if (IPhoneIsHave == 'NaN') {
                ctx.body = {
                    code: 502,
                    msg:"读取数据库出错"
                } 
             } else {
                ctx.body = {
                    code: 203,
                    msg:"服务器错误"
                } 
             }
         } else {
            ctx.body = {
                code: 501,
                msg:"服务器判断邮箱/手机号格式错误,或不支持此格式"
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
module.exports = VerifycodeController;
