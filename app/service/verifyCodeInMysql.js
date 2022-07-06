'use strict';
const Service = require('egg').Service;
class VerifyCodeInMysqlService extends Service {
    //  查询数据库“verifycode”里是true否fasle有对应储存验证码
 async getVerifyCodeIsNullInMysql(Number) {
     const { ctx, app } = this;
     try {
       const verifycodecaldata = await app.mysql.get('verifycode', { IdNumber: Number});
         if (verifycodecaldata == null ) {
             return true;
         } else {
           return false;
         }
     } catch (error) {
       console.log(error);
        return false;
     }
  }
  // 检查验证码是否正确 (号码,验证码)
  async getTWOVerifyCodeIsHaveInMysql(Number, code) {
     const { ctx, app } = this;
     try {
       const r = await app.mysql.get('verifycode', { IdNumber: Number, verifycode: code });
         if (r == null | r == undefined | r == '') {
           return false;
         } else {
           return true;
         }
     } catch (error) {
       console.log(error);
        return false;
     }
}
//数据库储存验证码
async setVerifyCodeInMysql(IdNumber,verifycode) {
    try {
        // 查询 有储存就修改 没有就添加
      const readeEmailInValidate =await this.getVerifyCodeIsNullInMysql(IdNumber);
      // console.log(readeEmailInValidate);
      if (readeEmailInValidate) {
              // 添加
                await this.app.mysql.insert('verifycode', { IdNumber:IdNumber,verifycode:verifycode});
                return true;
      } else if(readeEmailInValidate == false){
        // 修改
              const row = {verifycode};
              const options ={ where:{IdNumber}}
              const upvalidate = await this.app.mysql.update('verifycode', row, options);
              return true;
      } else {
          return false;
      }
    } catch (error) {
        console.log(error);
        return false;
    }
    }
      // 删除 验证码有效期
  async delVerifyCodeInMysql(IdNumber,verifycode) {
    try {
      const deletmysqlvalidate = await this.app.mysql.delete('verifycode', {IdNumber,verifycode});
      // console.log(deletmysqlvalidate);
      if (deletmysqlvalidate.affectedRows == 1) {
        console.log(verifycode+"验证码已过期销毁");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
module.exports = VerifyCodeInMysqlService;
