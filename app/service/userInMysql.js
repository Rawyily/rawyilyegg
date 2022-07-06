'use strict';
const Service = require('egg').Service;
class userInMysqlService extends Service {
    async getUserWhereIsHave(where) {
     const { ctx, app } = this;
    try {
        const ishave = await app.mysql.get('user', where);
        // console.log(ishave != null);
        if (ishave && ishave != null) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return 'error';
    }

}
    // “user”单个条件查询是否存在
 async getUserXIsHave(key,value) {
     const { ctx, app } = this;
    //  console.log(key);
    //  console.log(value);
     try {
         switch (key) {
             case 'id':
                const a =  await app.mysql.get('user', { id:value });
                 if (a == null | a == undefined) {
                     return false;
                 } else {
                     return true;
                 }
                 break;
            case 'email':
                 const b = await app.mysql.get('user', { email: value });
                 if (b == null | b == undefined) {
                     return false;
                 } else {
                     return true;
                 }
                break;
            case 'iphone':
                const c =  await app.mysql.get('user', { iphone:value });
                 if (c == null | c == undefined) {
                     return false;
                 } else {
                     return true;
                 }
                     break;
            case 'name':
                const d =  await app.mysql.get('user', { name:value });
                 if (d == null | d == undefined) {
                     return false;
                 } else {
                     return true;
                 }
                     break;
            case 'password':
                const e =  await app.mysql.get('user', { password:value });
                 if ( e== null | e == undefined) {
                     return false;
                 } else {
                     return true;
                 }
                    break;
             default:
                //  console.log('default');
                    return 'default';
                 break;
         }
     } catch (error) {
         console.log(error);
         return 'NaN';
     }
    }
    async addUserEmail(email, code) {
        try {
            var pw = code;
            const jwt =await this.app.jwt.sign(code, this.app.config.jwt.secret);
            if (jwt.length > 20 && jwt.length < 255) {
                pw = jwt;
            }
            const add =await this.app.mysql.insert('user', { email: email, name: code, password: pw });
            if (add.affectedRows == 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    async addUserIPhone(iphone, code) {
        try {
            var pw = code;
            const jwt =await this.app.jwt.sign(code, this.app.config.jwt.secret);
            if (jwt.length > 20 && jwt.length < 255) {
                pw = jwt;
            }
            const add =await this.app.mysql.insert('user', { iphone:iphone, name: code, password: pw });
            if (add.affectedRows == 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }

    }
    // 修改
     async updataUserX(key,value,newdata) {
     const { ctx, app } = this;
    //  console.log(key);
    //  console.log(value);
     try {
         switch (key) {
             case 'id':
                const row1 = newdata;
                const options1 ={ where:{id:value}}
                 const updata1 = await this.app.mysql.update('user', row1, options1);
                //  console.log(updata1);
                 if (updata1.affectedRows == 1) {
                     return true;
                 } else {
                     return false;
                 }
                 break;
            case 'email':
                const row2 = newdata;
                const options2 ={ where:{email:value}}
                 const updata2 = await this.app.mysql.update('user', row2, options2);
                //  console.log(updata2);
                 if (updata2.affectedRows == 1) {
                     return true;
                 } else {
                     return false;
                 }
                    break;
            case 'iphone':
                const row = newdata;
                const options ={ where:{iphone:value}}
                 const updata = await this.app.mysql.update('user', row, options);
                //  console.log(updata);
                 if (updata.affectedRows == 1) {
                     return true;
                 } else {
                     return false;
                 }
                    break;
            case 'name':
                const row4 = newdata;
                const options4 ={ where:{name:value}}
                 const updata4 = await this.app.mysql.update('user', row4, options4);
                //  console.log(updata4);
                 if (updata4.affectedRows == 1) {
                     return true;
                 } else {
                     return false;
                 }
                     break;
            case 'password':
                const row5 = newdata;
                const options5 ={ where:{password:value}}
                 const updata5 = await this.app.mysql.update('user', row5, options5);
                //  console.log(updata5);
                 if (updata5.affectedRows == 1) {
                     return true;
                 } else {
                     return false;
                 }
                    break;
             default:
                //  console.log('default');
                    return 'NaN';
                 break;
         }
     } catch (error) {
         console.log(error);
         return 'error';
     }
    }
    // 读取 'user'表 用户数据[ 错误error 没有false 有 数据data ]
    async getUserdataWhere(where) {
        try {
            const data = await this.app.mysql.get('user', where);
            // console.log(data);
            if (data && data != null) {
                return data;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return 'error';
        }
    }
}
module.exports = userInMysqlService;
