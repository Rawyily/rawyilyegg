'use strict';
const Controller = require('egg').Controller;
class EmailController extends Controller {
    async index() {
     try {
        const { ctx, app } = this;
        const email =await ctx.request.body.email;
        console.log(email);
        const reademail =await ctx.service.email.readEmail(email);
        console.log(reademail);
     if (reademail == true) {
         console.log("邮箱已经注册了！");
         ctx.body = "邮箱已经注册了！";
     } else if(reademail == false){
         console.log("邮箱还没有人注册了！");
          var validate = ''
            for (let i = 6; i > 0; i--) {
                const a = await Math.floor(Math.random() * 10);
                // console.log(a);
                validate += a;
                console.log(validate);
            }
         const generatevalidate = await ctx.service.email.setmysqlvalidate(email, validate);
         console.log(generatevalidate);
         if (generatevalidate) {
             //发送邮件

                const subject = '验证码';
                const text = validate;
                const has_send = await ctx.service.email.sendMail(email, subject, text);
                console.log(email);
                console.log(validate);
                if (has_send) {
                    ctx.body='发送成功';
                    return;
                }
             ctx.body = '发送失败！'; 
         } else {
             ctx.body = "验证码生成失败"
         }
        //  if (sendemail) {
        //      ctx.body = "验证码已发送！";
        //  } else {
        //      ctx.body = "验证码生成失败！"
        //  }


         
     } else if (reademail == undefined) {
         console.log("查询邮箱是否已经注册失败！");
         ctx.body = "查询邮箱是否已经注册失败！";
     } else {
         console.log("无法查询邮箱是否注册！");
         ctx.body = "无法查询邮箱是否注册！";

     }
     } catch (error) {
         console.log(error);
         this.ctx.body = "服务器出错了！"
     }
    
    //  var validate = ''
    //  for (let i = 6; i > 0; i--) {
    //      const a =await Math.floor(Math.random()*10);
    //      console.log(a);
    //      validate += a;
    //      console.log(validate);
    //  }
    //  const setmysqlvalidate =await app.mysql.insert('validate', { email, validate });
    // //const email = 'rawyily@163.com';  // 接收者的邮箱
    // // const email = 'rawyily@163.com';  // 接收者的邮箱
    // const subject = '验证码';
    // // const text = '验证码';
    // const text = validate;
    // // const html = "<h1>13k3k3</h1>";
    
    //  const has_send = await ctx.service.email.sendMail(email, subject, text);
    //  console.log(email);
    //  console.log(validate);
    
    // if (has_send) {
	// 	ctx.body={
	// 		message: '发送成功',
	// 	};
	// 	return;
	// }
	// ctx.body={
	// 	message: '发送失败',
    //  };     
    }
}
module.exports = EmailController;
