'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async getlogindata(username,userpassword) {     
    const post = await this.app.mysql.get('user', { username: username, userpassword: userpassword });
    if (post === null) {
      console.log(post===null);
      return post;
    } else {
      console.log(post);
      return post;
    }
    
  }
}

module.exports = LoginService;
