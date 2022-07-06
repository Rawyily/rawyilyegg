// app/service/tool.js

'use strict';

const Service = require('egg').Service;

const nodemailer = require('nodemailer');
//const user_email = '2843267928@qq.com';
// const auth_code = 'vecjsyuksrbqdgeb';

const user_email = 'rawyily@163.com';
const auth_code = 'DUXGFYLBYGAHBCKM';

const transporter = nodemailer.createTransport({
//QQ
//   service: 'qq',
//   secureConnection: true,
//   port: 465,

//网易
    host: 'smtp.163.com',
    secure: true,
//
  auth: {
    user: user_email, // 账号
    pass: auth_code, // 授权码

  },
});

class EmailService extends Service {
  // 查询邮箱是否注册
    async readEmailisNull(email) {
        try {
             const { ctx, app } = this;
        const read =await app.mysql.get('user', { email: email });
        // console.log(read);
        if (read == null) {
            return true;
          } else {
              return false;
          }
        } catch (error) {
          console.log(error);
            return false;
        }
       
    }
  //发送邮件
  async sendMail(email, subject, text, html) {

    const mailOptions = {
      from: user_email, // 发送者,与上面的user一致
      to: email,   // 接收者,可以同时发送多个,以逗号隔开
      subject,   // 标题
      text,   // 文本
      html,
    };
    // console.log(mailOptions);
    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


}

module.exports = EmailService;

