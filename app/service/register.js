'use strict';
const Service = require('egg').Service;
class RegisterService extends Service {
 async index(data) {
     const { ctx, app } = this;
     try {
         const register = await app.mysql.insert('email', data);
         console.log(register);
     } catch (error) {
         return false;
     }
    
 }
}
module.exports = RegisterService;
